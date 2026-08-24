/* ============================================================================
   PORTFOLIO ANALYTICS — Madhumitha D V
   ----------------------------------------------------------------------------
   One file, three tools, zero build step. Drop it in the repo root and add
   <script src="analytics.js"></script> just before </body> on every page.

   STEP 1 — paste your IDs below. Leave any of them as '' to switch that tool
   off; nothing breaks and nothing loads.

   Cloudflare  → dash.cloudflare.com → Web Analytics → Add a site →
                 copy the token out of the snippet it gives you.
   GoatCounter → goatcounter.com → sign up → your code is the subdomain,
                 e.g. 'madhumitha' for madhumitha.goatcounter.com
   GA4         → analytics.google.com → Admin → Data streams → Measurement ID
                 (looks like G-XXXXXXXXXX). This one sets cookies, so it is
                 held behind a consent banner. The other two are cookieless
                 and run immediately — that is deliberate and it is what keeps
                 you on the right side of EU rules.
   ========================================================================== */

window.PA_CONFIG = {
  cloudflareToken: '',      // e.g. '1a2b3c4d5e6f7g8h9i0j'
  goatcounterCode: '',      // e.g. 'madhumitha'
  ga4Id:           '',      // e.g. 'G-ABC123XYZ'
  consentText: 'I use a couple of cookieless counters to see which projects get read. Google Analytics needs a cookie — allow it?'
};

(function () {
  'use strict';
  var C = window.PA_CONFIG;
  var LS = 'pa_first_ref', SS = 'pa_ref', CONSENT = 'pa_ga_consent';

  function safeGet(store, k) { try { return store.getItem(k); } catch (e) { return null; } }
  function safeSet(store, k, v) { try { store.setItem(k, v); } catch (e) {} }

  /* ---- 1. Where did this visit come from? --------------------------------
     ?ref=limehome  is the one that matters — that's a link you sent to a
     specific application. utm_source is picked up too so ordinary campaign
     links still resolve.                                                    */
  var params = new URLSearchParams(location.search);
  var ref = params.get('ref') || params.get('utm_source') || '';
  if (ref) {
    ref = ref.toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40);
    safeSet(sessionStorage, SS, ref);
    if (!safeGet(localStorage, LS)) safeSet(localStorage, LS, ref);
  }
  var currentRef = safeGet(sessionStorage, SS) || '';
  var firstRef = safeGet(localStorage, LS) || '';

  /* ---- 2. Cloudflare Web Analytics (cookieless, no consent needed) ------- */
  if (C.cloudflareToken) {
    var cf = document.createElement('script');
    cf.defer = true;
    cf.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    cf.setAttribute('data-cf-beacon', JSON.stringify({ token: C.cloudflareToken }));
    document.head.appendChild(cf);
  }

  /* ---- 3. GoatCounter (cookieless, no consent needed) -------------------- */
  if (C.goatcounterCode) {
    window.goatcounter = window.goatcounter || {};
    window.goatcounter.path = function (p) {
      return currentRef ? p + '?ref=' + currentRef : p;
    };
    var gc = document.createElement('script');
    gc.async = true;
    gc.src = '//gc.zgo.at/count.js';
    gc.setAttribute('data-goatcounter', 'https://' + C.goatcounterCode + '.goatcounter.com/count');
    document.head.appendChild(gc);
  }

  /* ---- 4. GA4 — only after an explicit yes ------------------------------- */
  function loadGA() {
    if (!C.ga4Id || window.__paGA) return;
    window.__paGA = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + C.ga4Id;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', C.ga4Id, { campaign_source: currentRef || undefined });
  }

  function consentBanner() {
    if (!C.ga4Id) return;                          // nothing to consent to
    if (safeGet(localStorage, CONSENT) === 'yes') { loadGA(); return; }
    if (safeGet(localStorage, CONSENT) === 'no') return;

    var bar = document.createElement('div');
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Cookie choice');
    bar.style.cssText = 'position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:560px;margin:0 auto;' +
      'background:#0f172a;color:#e2e8f0;border-radius:14px;padding:16px 18px;display:flex;gap:14px;' +
      'align-items:center;flex-wrap:wrap;font:500 13.5px/1.5 Inter,system-ui,sans-serif;' +
      'box-shadow:0 8px 40px rgba(15,23,42,.35)';
    var txt = document.createElement('span');
    txt.style.cssText = 'flex:1;min-width:220px';
    txt.textContent = C.consentText;
    var yes = document.createElement('button');
    yes.textContent = 'Allow';
    yes.style.cssText = 'background:#4f46e5;color:#fff;border:0;border-radius:9px;padding:9px 16px;font:600 13px Inter,sans-serif;cursor:pointer';
    var no = document.createElement('button');
    no.textContent = 'No thanks';
    no.style.cssText = 'background:transparent;color:#94a3b8;border:1px solid #334155;border-radius:9px;padding:9px 16px;font:600 13px Inter,sans-serif;cursor:pointer';
    yes.onclick = function () { safeSet(localStorage, CONSENT, 'yes'); loadGA(); bar.remove(); };
    no.onclick = function () { safeSet(localStorage, CONSENT, 'no'); bar.remove(); };
    bar.appendChild(txt); bar.appendChild(yes); bar.appendChild(no);
    document.body.appendChild(bar);
  }

  /* ---- 5. The one function everything else calls ------------------------- */
  function track(name, props) {
    props = props || {};
    if (currentRef) props.ref = currentRef;
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count({
        path: 'evt-' + name + (props.label ? '-' + String(props.label).toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40) : ''),
        title: name + (props.label ? ': ' + props.label : ''),
        event: true
      });
    }
    if (window.gtag) window.gtag('event', name, props);
    if (window.PA_DEBUG) console.log('[PA]', name, props);
  }
  window.PA = { track: track, ref: currentRef, firstRef: firstRef };

  /* ---- 6. Auto-wiring — no markup changes needed ------------------------- */
  function pageName() {
    var f = location.pathname.split('/').pop() || 'index.html';
    return f.replace('.html', '') || 'index';
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a, button');
    if (!a) return;
    var href = a.getAttribute('href') || '';

    if (a.classList.contains('case-toggle')) {
      var card = a.closest('.pcard');
      var h = card && card.querySelector('h3');
      track('case_open', { label: h ? h.textContent.trim() : 'unknown' });
      return;
    }
    if (a.closest('.pc-links') && href) {
      track('project_link', { label: href.replace('.html', '') });
      return;
    }
    if (href.indexOf('mailto:') === 0) { track('contact_email', {}); return; }
    if (/linkedin\.com/.test(href))    { track('contact_linkedin', {}); return; }
    if (/github\.com/.test(href))      { track('github_click', { label: href.split('/').pop() }); return; }
    if (a.classList.contains('nav-cta')) { track('nav_cta', {}); return; }
    if (/^https?:/.test(href) && href.indexOf(location.host) === -1) {
      track('outbound', { label: href.replace(/^https?:\/\//, '').split('/')[0] });
    }
  }, true);

  /* scroll depth — the honest measure of whether a case study got read */
  var marks = [25, 50, 75, 100], hit = {};
  function onScroll() {
    var d = document.documentElement;
    var max = d.scrollHeight - window.innerHeight;
    if (max < 400) return;                       // too short to be meaningful
    var pct = Math.round((window.scrollY / max) * 100);
    for (var i = 0; i < marks.length; i++) {
      var m = marks[i];
      if (pct >= m && !hit[m]) { hit[m] = 1; track('scroll_' + m, { label: pageName() }); }
    }
  }
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { onScroll(); ticking = false; });
  }, { passive: true });

  /* time on page, sent once when the tab goes away */
  var t0 = Date.now(), sent = false;
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState !== 'hidden' || sent) return;
    sent = true;
    var secs = Math.round((Date.now() - t0) / 1000);
    var bucket = secs < 10 ? 'bounce' : secs < 60 ? '10s-1m' : secs < 180 ? '1-3m' : '3m+';
    track('dwell', { label: pageName() + ':' + bucket, seconds: secs });
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', consentBanner);
  else consentBanner();
})();
