/* Product teardowns: the drawings, the flow, the PM file, the lens and the product switcher. Shared by the hub and every teardown page. */

if(/[?&]static=/.test(location.search)) document.documentElement.classList.add("static");
(function(){
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');
  var RM = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var CALM = RM || root.classList.contains('static');
  function $$(s, c){ return [].slice.call((c || document).querySelectorAll(s)); }
  function num(el, k){ return parseFloat(el.getAttribute('data-' + k)); }
  function clamp(v){ return v < 0 ? 0 : v > 1 ? 1 : v; }
  function byIndex(a, b){ return num(a, 'i') - num(b, 'i'); }

  /* reveal on first view */
  var reveals = $$('.reveal');
  if(!('IntersectionObserver' in window) || CALM){ reveals.forEach(function(e){ e.classList.add('is-in'); }); }
  else {
    var rio = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('is-in'); rio.unobserve(e.target); } }); }, {rootMargin:'0px 0px -8% 0px', threshold:0.05});
    reveals.forEach(function(e){ rio.observe(e); });
  }

  function whenSeen(el, fn, once){
    if(!('IntersectionObserver' in window)){ fn(); return; }
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(!e.isIntersecting) return;
        fn();
        if(once) io.unobserve(e.target);
      });
    }, {threshold:.3});
    io.observe(el);
  }

  function press(el, fn){
    el.addEventListener('click', fn);
    el.addEventListener('keydown', function(e){ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); fn(); } });
  }

  /* ── the exploded drawing: five plates, pulled apart along one axis ── */
  /* ── zoom: frame one part of a drawing, then back to the whole. Switched off for now: set ZOOM to true to bring it back ── */
  var ZOOM = false;
  function vbOf(svg){ return (svg.getAttribute('viewBox') || '0 0 100 100').split(/\s+/).map(Number); }
  function setVB(svg, v){ svg.setAttribute('viewBox', v.map(function(x){ return Math.round(x * 10) / 10; }).join(' ')); }
  function animVB(svg, to){
    var from = vbOf(svg); if(svg._vbRaf) cancelAnimationFrame(svg._vbRaf);
    if(CALM){ setVB(svg, to); return; }
    var t0 = 0;
    function f(ts){ if(!t0) t0 = ts; var p = Math.min(1, (ts - t0) / 650), e = 1 - Math.pow(1 - p, 3); setVB(svg, from.map(function(a, i){ return a + (to[i] - a) * e; })); if(p < 1) svg._vbRaf = requestAnimationFrame(f); else svg._vbRaf = 0; }
    svg._vbRaf = requestAnimationFrame(f);
  }
  function frameBox(svg, b){
    if(!ZOOM) return;
    var base = svg._vb0 ? svg._vb0.split(/\s+/).map(Number) : vbOf(svg);
    var pad = Math.max(b.width, b.height) * .3 + 10, w = b.width + 2 * pad, h = b.height + 2 * pad, ar = base[2] / base[3];
    if(w / h < ar) w = h * ar; else h = w / ar;
    var minW = base[2] / 2.4; if(w < minW){ h *= minW / w; w = minW; }
    if(w > base[2]){ h *= base[2] / w; w = base[2]; }
    var cx = b.x + b.width / 2, cy = b.y + b.height / 2;
    cx = Math.max(base[0] + w / 2, Math.min(base[0] + base[2] - w / 2, cx)); cy = Math.max(base[1] + h / 2, Math.min(base[1] + base[3] - h / 2, cy));
    animVB(svg, [cx - w / 2, cy - h / 2, w, h]);
  }
  function clientBox(svg, g){
    var r = g.getBoundingClientRect(), s = svg.getBoundingClientRect(), vb = vbOf(svg);
    if(!s.width || !r.width) return null;
    var kx = vb[2] / s.width, ky = vb[3] / s.height;
    return {x: vb[0] + (r.left - s.left) * kx, y: vb[1] + (r.top - s.top) * ky, width: r.width * kx, height: r.height * ky};
  }
  function unzoom(svg){ if(svg._vb0) animVB(svg, svg._vb0.split(/\s+/).map(Number)); }
  function zoomBtn(bench, fn){
    if(!ZOOM) return null;
    var host = bench.querySelector('.capr') || bench.querySelector('.pull') || bench;
    var b = document.createElement('button'); b.type = 'button'; b.className = 'zo'; b.textContent = 'Whole view';
    b.addEventListener('click', fn); host.appendChild(b); return b;
  }

  function Drawing(block){
    var svg = block.querySelector('.td-svg'), bench = block.querySelector('.bench');
    var range = block.querySelector('.pull input');
    var cx = num(svg, 'cx'), cy = num(svg, 'cy'), lx = num(svg, 'lx'), gap0 = num(svg, 'gap'), base = num(svg, 'base');
    var vb0 = svg.getAttribute('viewBox'); svg._vb0 = vb0;
    var lys = $$('.ly', svg).sort(byIndex), labs = $$('.lb', svg).sort(byIndex);
    var asl = $$('.asl', svg), dims = svg.querySelector('.dims');
    var geo = lys.map(function(g){ return {rx:num(g, 'rx'), ry:num(g, 'ry'), th:num(g, 'th'), ey:num(g, 'ey')}; });
    var n = geo.length, mid = (n - 1) / 2;
    var maxrx = Math.max.apply(null, geo.map(function(g){ return g.rx; }));
    var arts = $$('.notes article', block), pos = block.querySelector('.pctl .pos');
    var partBtns = $$('.parts button', block);
    var S = {t:1, gap:gap0, narrow:false, fitted:false, raf:0, tok:0, played:false, sel:0, drag:false};

    function offs(t){ var step = base * (1 - t) + S.gap * t; return geo.map(function(g, k){ return (k - mid) * step; }); }
    function draw(){
      var o = offs(S.t), lo = clamp((S.t - .45) / .35), ao = clamp((S.t - .15) / .3);
      lys.forEach(function(g, k){ g.setAttribute('transform', 'translate(0 ' + o[k].toFixed(2) + ')'); });
      labs.forEach(function(l, k){
        var G = geo[k], y = cy + o[k] + G.ry, bx = S.narrow ? cx + G.rx + 26 : lx;
        var ldr = l.querySelector('.ldr'), body = l.querySelector('.lbody');
        ldr.setAttribute('x1', (cx + G.rx + 8).toFixed(1)); ldr.setAttribute('x2', (bx - 12).toFixed(1));
        ldr.setAttribute('y1', y.toFixed(1)); ldr.setAttribute('y2', y.toFixed(1));
        body.setAttribute('transform', 'translate(' + (bx - lx).toFixed(1) + ' ' + y.toFixed(1) + ')');
        l.style.opacity = lo.toFixed(3);
        l.style.pointerEvents = lo > .5 ? '' : 'none';
      });
      asl.forEach(function(a){
        var s = num(a, 's'), x = (cx + s * maxrx).toFixed(1);
        a.setAttribute('x1', x); a.setAttribute('x2', x);
        a.setAttribute('y1', (cy + o[0] + s * geo[0].ry).toFixed(1));
        a.setAttribute('y2', (cy + o[n - 1] + s * geo[n - 1].ry + geo[n - 1].th).toFixed(1));
        a.style.opacity = ao.toFixed(3);
      });
      if(dims) dims.style.opacity = clamp(1 - S.t / .35).toFixed(3);
      if(range && !S.drag) range.value = String(Math.round(S.t * 100));
    }
    /* narrow benches: crop to the stack, numbers beside the plates, names listed underneath */
    function fit(){
      var w = svg.getBoundingClientRect().width;
      if(!w) return;
      var nar = w < 560;
      if(S.fitted && nar === S.narrow) return;
      S.fitted = true; S.narrow = nar;
      bench.classList.toggle('narrow', nar);
      svg.classList.toggle('narrow', nar);
      S.gap = nar ? Math.round(gap0 * .82) : gap0;
      if(nar){
        var o = offs(1), top = cy + o[0] - geo[0].ey - 14, bot = cy + o[n - 1] + geo[n - 1].ey + geo[n - 1].th + 14;
        var x0 = cx - maxrx - 14, x1 = cx + maxrx + 44;
        svg.setAttribute('viewBox', [x0, top, x1 - x0, bot - top].map(function(v){ return Math.round(v); }).join(' '));
      } else svg.setAttribute('viewBox', vb0);
      svg._vb0 = svg.getAttribute('viewBox');
      draw();
      if(bench.classList.contains('zoomed')) zoomSel();
    }
    function zoomSel(){ if(!ZOOM) return; var g = lys[S.sel]; if(!g) return; var b = g.getBBox(), o = offs(1)[S.sel]; frameBox(svg, {x:b.x, y:b.y + o, width:b.width, height:b.height}); bench.classList.add('zoomed'); }
    function zoomOut(){ unzoom(svg); bench.classList.remove('zoomed'); }
    function to(target, dur){
      var tok = ++S.tok;
      if(S.raf) cancelAnimationFrame(S.raf);
      S.raf = 0;
      if(CALM || !dur){ S.t = target; draw(); return; }
      var t0 = S.t, start = 0;
      function frame(ts){
        if(tok !== S.tok) return;
        if(!start) start = ts;
        var p = Math.min(1, (ts - start) / dur), e = 1 - Math.pow(1 - p, 3);
        S.t = t0 + (target - t0) * e; draw();
        if(p < 1) S.raf = requestAnimationFrame(frame); else S.raf = 0;
      }
      S.raf = requestAnimationFrame(frame);
      /* settle floor: wherever the frames got to, end on the target */
      setTimeout(function(){ if(tok !== S.tok) return; if(S.raf) cancelAnimationFrame(S.raf); S.raf = 0; S.t = target; draw(); }, dur + 250);
    }
    function select(k, byUser){
      S.sel = k;
      lys.forEach(function(g, i){ var on = i === k; g.classList.toggle('on', on); g.setAttribute('aria-pressed', on ? 'true' : 'false'); });
      labs.forEach(function(l, i){ l.classList.toggle('on', i === k); });
      svg.classList.add('has-sel');
      arts.forEach(function(a, i){ a.classList.toggle('on', i === k); });
      partBtns.forEach(function(b, i){ b.setAttribute('aria-pressed', i === k ? 'true' : 'false'); });
      if(pos) pos.textContent = (k + 1) + ' / ' + n;
      if(byUser && S.t < .6) to(1, CALM ? 0 : 700);
      if(byUser) zoomSel();
      if(byUser && !block._quiet) block.dispatchEvent(new CustomEvent('tdpart'));
    }
    function tap(k){ if(S.sel === k && bench.classList.contains('zoomed')){ zoomOut(); if(!block._quiet) block.dispatchEvent(new CustomEvent('tdpart')); } else select(k, true); }
    lys.forEach(function(g, k){ press(g, function(){ tap(k); }); });
    labs.forEach(function(l, k){ l.addEventListener('click', function(){ tap(k); }); });
    partBtns.forEach(function(b, k){ b.addEventListener('click', function(){ tap(k); }); });
    zoomBtn(bench, zoomOut);
    var pv = block.querySelector('.pctl .pv'), nx = block.querySelector('.pctl .nx');
    if(pv) pv.addEventListener('click', function(){ select((S.sel + n - 1) % n, true); });
    if(nx) nx.addEventListener('click', function(){ select((S.sel + 1) % n, true); });
    if(range){
      range.addEventListener('input', function(){
        S.tok++; if(S.raf) cancelAnimationFrame(S.raf); S.raf = 0;
        S.drag = true; S.t = clamp(parseFloat(range.value) / 100); draw(); S.drag = false;
      });
    }
    select(0, false);
    S.t = CALM ? 1 : 0;
    draw();
    whenSeen(svg, function(){
      if(S.played || CALM) return;
      S.played = true;
      to(1, 1400);
    }, false);
    return {
      pick: function(k){ block._quiet = true; select(k, true); block._quiet = false; },
      whole: zoomOut,
      fit: fit,
      rearm: function(){ if(CALM) return; S.tok++; if(S.raf) cancelAnimationFrame(S.raf); S.raf = 0; S.played = false; S.t = 0; draw(); },
      state: S
    };
  }

  /* ── Fig. 1, the other four ways: phone, journey, route, timeline. Same five parts, one motion each ── */
  var TPL_MS = {phone:1700, journey:2900, route:2500, timeline:2700};
  function Template(block){
    var bench = block.querySelector('.bench'), svgs = $$('.tp-svg', block);
    var ms = TPL_MS[bench.getAttribute('data-t')] || 2500;
    var arts = $$('.notes article', block), pos = block.querySelector('.pctl .pos');
    var partBtns = $$('.parts button', block), rp = block.querySelector('.capr .rp');
    var n = arts.length, S = {sel:0, played:false, timer:0, raf:0, tok:0};
    var zoomable = ZOOM && bench.getAttribute('data-t') !== 'phone';
    svgs.forEach(function(svg){ svg._vb0 = svg.getAttribute('viewBox'); });
    function zoomSel(){ svgs.forEach(function(svg){ var g = svg.querySelector('.st[data-i="' + S.sel + '"]'); if(!g) return; var b = clientBox(svg, g); if(b) frameBox(svg, b); }); bench.classList.add('zoomed'); }
    function zoomOut(){ svgs.forEach(unzoom); bench.classList.remove('zoomed'); }
    function select(k, byUser){
      S.sel = k;
      svgs.forEach(function(svg){
        $$('.st', svg).forEach(function(g){ var on = num(g, 'i') === k; g.classList.toggle('on', on); g.setAttribute('aria-pressed', on ? 'true' : 'false'); });
        $$('.tl, .zm', svg).forEach(function(g){ g.classList.toggle('on', num(g, 'i') === k); });
        svg.classList.add('has-sel');
      });
      arts.forEach(function(a, i){ a.classList.toggle('on', i === k); });
      partBtns.forEach(function(b, i){ b.setAttribute('aria-pressed', i === k ? 'true' : 'false'); });
      if(pos) pos.textContent = (k + 1) + ' / ' + n;
      if(byUser && zoomable) zoomSel();
      if(byUser && !block._quiet) block.dispatchEvent(new CustomEvent('tdpart'));
    }
    function tap(k){ if(zoomable && S.sel === k && bench.classList.contains('zoomed')){ zoomOut(); if(!block._quiet) block.dispatchEvent(new CustomEvent('tdpart')); } else select(k, true); }
    svgs.forEach(function(svg){
      $$('.st', svg).forEach(function(g){ press(g, function(){ tap(num(g, 'i')); }); });
      $$('.tl', svg).forEach(function(g){ g.addEventListener('click', function(){ tap(num(g, 'i')); }); });
    });
    partBtns.forEach(function(b, k){ b.addEventListener('click', function(){ tap(k); }); });
    var pv = block.querySelector('.pctl .pv'), nx = block.querySelector('.pctl .nx');
    if(pv) pv.addEventListener('click', function(){ select((S.sel + n - 1) % n, true); });
    if(nx) nx.addEventListener('click', function(){ select((S.sel + 1) % n, true); });
    if(zoomable) zoomBtn(bench, zoomOut);

    /* the car or train rides the route, then waits at the end of it */
    var rides = svgs.map(function(svg){ return {path:svg.querySelector('.rt'), rider:svg.querySelector('.rider')}; })
      .filter(function(r){ return r.path && r.rider && typeof r.path.getTotalLength === 'function'; });
    function place(r, p){
      try{
        var L = r.path.getTotalLength();
        if(!L) return;
        var a = r.path.getPointAtLength(L * p), b = r.path.getPointAtLength(Math.max(0, Math.min(L, L * p + (p > .99 ? -1 : 1))));
        var ang = Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI + (p > .99 ? 180 : 0);
        r.rider.setAttribute('transform', 'translate(' + a.x.toFixed(1) + ' ' + a.y.toFixed(1) + ') rotate(' + ang.toFixed(1) + ')');
        r.rider.classList.add('ok');
      }catch(e){ r.rider.classList.remove('ok'); }
    }
    function rest(){ rides.forEach(function(r){ place(r, 1); }); }
    function ride(){
      if(!rides.length) return;
      var tok = ++S.tok, start = 0, delay = 300, dur = ms - delay;
      if(S.raf) cancelAnimationFrame(S.raf);
      function frame(ts){
        if(tok !== S.tok) return;
        if(!start) start = ts;
        var p = Math.max(0, Math.min(1, (ts - start - delay) / dur)), e = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        rides.forEach(function(r){ place(r, Math.min(e, .989)); });
        if(p < 1) S.raf = requestAnimationFrame(frame); else { S.raf = 0; rest(); }
      }
      S.raf = requestAnimationFrame(frame);
    }
    function run(){
      if(CALM) return;
      clearTimeout(S.timer);
      bench.classList.remove('go'); bench.classList.add('pre');
      void bench.offsetWidth;
      bench.classList.remove('pre'); bench.classList.add('go');
      ride();
      /* settle floor: wherever the frames got to, end finished */
      S.timer = setTimeout(function(){ S.tok++; if(S.raf) cancelAnimationFrame(S.raf); S.raf = 0; bench.classList.remove('go'); rest(); }, ms + 400);
    }
    if(rp) rp.addEventListener('click', run);
    select(0);
    rest();
    if(!CALM) bench.classList.add('pre');
    svgs.forEach(function(svg){ whenSeen(svg, function(){ if(S.played || CALM) return; S.played = true; run(); }, false); });
    return {
      pick: function(k){ block._quiet = true; select(k, true); block._quiet = false; },
      whole: function(){ if(zoomable) zoomOut(); },
      fit: rest,
      rearm: function(){
        if(CALM) return;
        clearTimeout(S.timer); S.tok++; if(S.raf) cancelAnimationFrame(S.raf); S.raf = 0;
        S.played = false; bench.classList.remove('go'); bench.classList.add('pre'); rest(); if(bench.classList.contains('zoomed')) zoomOut();
      },
      state: S
    };
  }

  /* ── the flow: lights up step by step, once when seen, and on replay ── */
  function Flow(el){
    var btn = el.querySelector('.rp'), timer = 0, played = false, count = $$('.fl li', el).length;
    function run(){
      if(CALM) return;
      clearTimeout(timer);
      el.classList.remove('go'); el.classList.add('pre');
      void el.offsetWidth;
      el.classList.remove('pre'); el.classList.add('go');
      timer = setTimeout(function(){ el.classList.remove('go'); }, count * 260 + 900);
    }
    if(btn) btn.addEventListener('click', run);
    whenSeen(el, function(){ if(played) return; played = true; run(); }, false);
    return { rearm: function(){ played = false; } };
  }

  /* ── the PM file: numbers rise, the revenue bar fills, the algorithm draws; once when first seen ── */
  function PMFile(el){
    var played = false, timer = 0;
    function run(){
      if(CALM) return;
      clearTimeout(timer);
      el.classList.remove('go'); el.classList.add('pre');
      void el.offsetWidth;
      el.classList.remove('pre'); el.classList.add('go');
      /* settle floor: end on the resting picture */
      timer = setTimeout(function(){ el.classList.remove('go'); }, 2400);
    }
    if(!CALM) el.classList.add('pre');
    whenSeen(el, function(){ if(played || CALM) return; played = true; run(); }, false);
    return { rearm: function(){ if(CALM) return; clearTimeout(timer); played = false; el.classList.remove('go'); el.classList.add('pre'); } };
  }

  /* ── Fig. 3: plain words, or opened up for PMs; one choice holds across the page ── */
  var systems = $$('.sys');
  function setDepth(v, from){
    systems.forEach(function(s){
      if(s.getAttribute('data-v') === v) return;
      s.setAttribute('data-v', v);
      $$('.dep button', s).forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-v') === v ? 'true' : 'false'); });
      if(s === from && !CALM){
        s.classList.remove('anim'); void s.offsetWidth; s.classList.add('anim');
        clearTimeout(s._anim);
        s._anim = setTimeout(function(){ s.classList.remove('anim'); }, 1400);
      }
    });
  }
  systems.forEach(function(s){
    $$('.dep button', s).forEach(function(b){
      b.addEventListener('click', function(){ setDepth(b.getAttribute('data-v'), s); });
    });
  });

  /* ── the PM lens: corners close in, the question sharpens, the moves follow ── */
  $$('.lens').forEach(function(l){
    if(CALM) return;
    l.classList.add('pre');
    whenSeen(l, function(){ l.classList.remove('pre'); }, true);
  });

  /* moves sit side by side: their titles get one shared height, so the text under them starts level */
  function balance(block){
    $$('.lens .moves', block).forEach(function(ol){
      var bs = $$('li > b', ol), lis = $$('li', ol);
      bs.forEach(function(b){ b.style.minHeight = ''; });
      if(lis.length < 2 || lis[0].offsetTop !== lis[1].offsetTop) return;
      var h = Math.max.apply(null, bs.map(function(b){ return b.offsetHeight; }));
      bs.forEach(function(b){ b.style.minHeight = h + 'px'; });
    });
  }


  /* ── one stage, three tabs: the parts, how it runs, the system. Each gets the whole frame; the note sits beside the picture ── */
  function Tabs(block){
    var frame = block.querySelector('.lab .frame'); if(!frame) return;
    var flow = frame.querySelector(':scope > .flow'), sys = frame.querySelector(':scope > .sys');
    if(!flow && !sys) return;
    var strip = document.createElement('div'); strip.className = 'ftabs'; strip.setAttribute('role', 'tablist');
    var tabs = [['parts', 'How it works']]; if(sys) tabs.push(['sys', 'The system']);
    if(flow){ var bench = frame.querySelector(':scope > .bench'); if(bench){ bench.appendChild(flow); flow.classList.add('inbench'); var rp = flow.querySelector('.fhd .rp'); if(rp) rp.hidden = true; } }
    strip.innerHTML = tabs.map(function(t, i){ return '<button type="button" role="tab" data-tab="' + t[0] + '" aria-selected="' + (i === 0) + '">' + t[1] + '</button>'; }).join('');
    frame.insertBefore(strip, frame.firstChild);
    [null, sys].forEach(function(el, k){
      if(!el) return;
      var pane = document.createElement('div'); pane.className = 'fpane ' + (k ? 'p-sys' : 'p-flow');
      frame.insertBefore(pane, el);
      var main = document.createElement('div'); main.className = 'fmain'; main.appendChild(el); pane.appendChild(main);
      var aside = document.createElement('aside'); aside.className = 'notes fnotes'; pane.appendChild(aside);
      el._aside = aside;
      if(!k){ var fc = el.querySelector('.fc'); if(fc) aside.appendChild(fc); }
    });
    function show(id){
      frame.setAttribute('data-tab', id);
      $$('button', strip).forEach(function(b){ b.setAttribute('aria-selected', String(b.getAttribute('data-tab') === id)); });
      try{ window.dispatchEvent(new Event('resize')); }catch(e){}
    }
    strip.addEventListener('click', function(e){ var b = e.target.closest('button'); if(b) show(b.getAttribute('data-tab')); });
    strip.addEventListener('keydown', function(e){
      if(e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var bs = $$('button', strip), i = 0; bs.forEach(function(b, j){ if(b.getAttribute('aria-selected') === 'true') i = j; });
      var n = (i + (e.key === 'ArrowRight' ? 1 : bs.length - 1)) % bs.length; show(bs[n].getAttribute('data-tab')); bs[n].focus(); e.preventDefault();
    });
    show('parts');
  }

  /* ── PM notes: a step, a layer or a figure that carries a note opens it under its row ── */
  function Notes(scope, items, mount, kind, label, aside, opt){
    opt = opt || {};
    items = items.filter(function(el){ return el.querySelector('.pmn'); });
    if(!items.length || !(mount || aside)) return null;
    var panel = document.createElement('div'); panel.className = 'pmnote'; panel.hidden = true;
    if(aside) aside.insertBefore(panel, aside.firstChild); else mount.insertAdjacentElement('afterend', panel);
    var hd = scope.querySelector('.fhd, .fh');
    if(hd && !hd.querySelector('.tapk')){ var tk = document.createElement('span'); tk.className = 'tapk'; tk.textContent = 'Tap one for the PM note'; hd.insertBefore(tk, hd.querySelector('.rp, .dep, .co')); }
    function close(){ items.forEach(function(x){ x.classList.remove('sel'); x.setAttribute('aria-expanded', 'false'); }); panel.hidden = true; scope.classList.remove('noting'); if(opt.onClose) opt.onClose(); }
    function open(el){
      close();
      if(opt.onOpen) opt.onOpen(el);
      el.classList.add('sel'); el.setAttribute('aria-expanded', 'true');
      var n = el.querySelector('.pmn');
      panel.innerHTML = '<span class="k">' + kind + ' \u00b7 ' + label(el) + '</span>' + n.innerHTML + (aside ? '' : '<button type="button" class="x" aria-label="Close the note">\u00d7</button>');
      panel.hidden = false; scope.classList.add('noting');
      if((!aside || (opt.toggle && window.innerWidth < 860)) && !CALM && panel.scrollIntoView) panel.scrollIntoView({block:'nearest', behavior:'smooth'});
      if(!CALM){ panel.classList.remove('in'); void panel.offsetWidth; panel.classList.add('in'); } else panel.classList.add('in');
      if(hd){ var t = hd.querySelector('.tapk'); if(t) t.classList.add('done'); }
    }
    items.forEach(function(el){
      el.classList.add('has'); el.setAttribute('tabindex', '0'); el.setAttribute('role', 'button'); el.setAttribute('aria-expanded', 'false');
      press(el, function(){ if(opt.onTap) opt.onTap(); if(el.classList.contains('sel') && (!aside || opt.toggle)) close(); else open(el); });
    });
    panel.addEventListener('click', function(e){ if(e.target.closest('.x')) close(); });
    if(aside && opt.auto !== false) open(items[0]);
    return { open: function(i){ open(items[i]); }, close: close, items: items };
  }
  function txt(el, sel){ var n = el.querySelector(sel); return n ? n.textContent.trim() : ''; }
  function own(el){ var c = el.cloneNode(true); $$('.pmn, b, small, svg', c).forEach(function(x){ x.parentNode.removeChild(x); }); return c.textContent.replace(/\s+/g, ' ').trim(); }
  function wireNotes(block){
    $$('.flow', block).forEach(function(fl){
      var lanes = $$('.lane', fl), last = lanes[lanes.length - 1];
      var lbl = function(li){ return 'Step ' + txt(li, 'i') + ' \u00b7 ' + txt(li, 'b'); };
      if(!fl.closest('.bench')){ Notes(fl, $$('.fl > li', fl), last, 'PM note', lbl, fl._aside); return; }
      var aside = block.querySelector('.lab .frame > .notes'), d = block._D, walkTok = 0;
      var api = Notes(fl, $$('.fl > li', fl), last, 'PM note', lbl, aside, {auto:false, toggle:true,
        onTap: function(){ walkTok++; walkBtn.classList.remove('on'); },
        onOpen: function(li){ var k = li.getAttribute('data-part'); if(d){ if(k !== null) d.pick(+k); else d.whole(); } aside.classList.add('stepmode'); },
        onClose: function(){ aside.classList.remove('stepmode'); }});
      if(!api) return;
      block.addEventListener('tdpart', function(){ walkTok++; walkBtn.classList.remove('on'); api.close(); });
      var hd = fl.querySelector('.fhd'), walkBtn = document.createElement('button'); walkBtn.type = 'button'; walkBtn.className = 'walk'; walkBtn.textContent = '\u25b6 Walk through';
      if(hd) hd.appendChild(walkBtn);
      walkBtn.addEventListener('click', function(){
        var tok = ++walkTok, i = 0; walkBtn.classList.add('on');
        (function next(){ if(tok !== walkTok) return; if(i >= api.items.length){ if(d) d.whole(); walkBtn.classList.remove('on'); return; } api.open(i++); setTimeout(next, CALM ? 2200 : 2800); })();
      });
    });
    $$('.sys', block).forEach(function(sy){
      Notes(sy, $$('.tiers > .tier', sy), sy.querySelector('.tiers'), 'PM note', function(t){ return 'Layer \u00b7 ' + txt(t, '.th b'); }, sy._aside);
    });
    $$('.pmf .file', block).forEach(function(f){
      Notes(f, $$('.nums > div', f), f.querySelector('.nums'), 'PM note', function(d){ return 'The number \u00b7 ' + txt(d, 'b'); });
      Notes(f, $$('.lg > li', f), f.querySelector('.mix'), 'PM note', function(li){ return 'The slice \u00b7 ' + own(li); });
      Notes(f, $$('.ab dl > div', f), f.querySelector('.ab'), 'PM note', function(dv){ return 'The algorithm \u00b7 ' + txt(dv, 'dt'); });
      Notes(f, $$('.eg > li', f), f.querySelector('.eg'), 'PM note', function(li){ return 'Engagement \u00b7 ' + txt(li, 'small'); });
      Notes(f, $$('.sd > .side', f), f.querySelector('.sd'), 'PM note', function(sd){ return 'Their side \u00b7 ' + txt(sd, '.sn'); });
    });
  }


  /* ── how it grew: a line from data-pts="year:value,…", the spike year marked ── */
  function esc(s){ return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function Growth(el){
    var pts = (el.getAttribute('data-pts') || '').split(',').map(function(p){ var a = p.split(':'); return {x: parseFloat(a[0]), y: parseFloat(a[1]), lab: (a[0] || '').trim()}; })
      .filter(function(p){ return !isNaN(p.x) && !isNaN(p.y); });
    if(pts.length < 2) return;
    var unit = el.getAttribute('data-unit') || '', spike = (el.getAttribute('data-spike') || '').trim(), label = el.getAttribute('data-label') || 'How it grew';
    var W = 320, H = 104, L = 8, R = 8, T = 26, B = 22;
    var x0 = pts[0].x, x1 = pts[pts.length - 1].x, y1 = Math.max.apply(null, pts.map(function(p){ return p.y; })) || 1;
    function X(x){ return L + (x - x0) / ((x1 - x0) || 1) * (W - L - R); }
    function Y(y){ return T + (1 - y / y1) * (H - T - B); }
    function fmt(v){ if(Number.isInteger(v)) return String(v); if(v >= 100) return v.toFixed(1); if(v >= 1) return String(Math.round(v * 10) / 10); return String(Math.round(v * 100) / 100); }
    var d = pts.map(function(p, i){ return (i ? 'L' : 'M') + X(p.x).toFixed(1) + ' ' + Y(p.y).toFixed(1); }).join(' ');
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(label) + '">';
    s += '<line class="ax" x1="' + L + '" y1="' + (H - B) + '" x2="' + (W - R) + '" y2="' + (H - B) + '"/>';
    s += '<path class="ln" pathLength="1" d="' + d + '"/>';
    var first = pts[0], last = pts[pts.length - 1], sp = pts.filter(function(p){ return p.lab === spike; })[0];
    pts.forEach(function(p){ if(p !== sp) s += '<circle class="pt" cx="' + X(p.x).toFixed(1) + '" cy="' + Y(p.y).toFixed(1) + '" r="2.5"/>'; });
    if(sp){
      var sx = X(sp.x), anchor = sx > W * .66 ? 'end' : (sx < W * .2 ? 'start' : 'middle'), tx = anchor === 'end' ? sx - 6 : (anchor === 'start' ? sx + 6 : sx);
      s += '<line class="sp" x1="' + sx.toFixed(1) + '" y1="' + (T - 4) + '" x2="' + sx.toFixed(1) + '" y2="' + (H - B) + '"/>';
      s += '<text class="tx spk" x="' + tx.toFixed(1) + '" y="' + (T - 10) + '" text-anchor="' + anchor + '">' + esc(sp.lab) + ' \u00b7 ' + fmt(sp.y) + '</text>';
      s += '<circle class="pt hi" cx="' + sx.toFixed(1) + '" cy="' + Y(sp.y).toFixed(1) + '" r="4"/>';
    }
    s += '<text class="tx" x="' + L + '" y="' + (H - 6) + '">' + esc(first.lab) + '</text><text class="tx" x="' + (W - R) + '" y="' + (H - 6) + '" text-anchor="end">' + esc(last.lab) + '</text>';
    var lastTop = Y(last.y) - 8, clash = sp && Math.abs(X(sp.x) - X(last.x)) < 70 && lastTop < T + 4;
    s += '<text class="tx dk" x="' + (W - R) + '" y="' + (clash ? Y(last.y) + 16 : lastTop).toFixed(1) + '" text-anchor="end">' + fmt(last.y) + (unit ? ' ' + esc(unit) : '') + '</text>';
    if(first.y > 0 && (!sp || Math.abs(X(sp.x) - X(first.x)) > 60)) s += '<text class="tx" x="' + L + '" y="' + (Y(first.y) - 8).toFixed(1) + '">' + fmt(first.y) + '</text>';
    s += '</svg>';
    el.innerHTML = s;
  }
  $$('.gr[data-pts]').forEach(Growth);

  /* ── the hub: rows grouped by area or by algorithm, a find box, marketplaces only ── */
  var groups = document.querySelector('.groups');
  if(groups){
    var rows = $$('.rows > li', groups), areaSecs = $$('.grp', groups), segs = $$('.hubbar .seg button');
    var find = document.querySelector('.hubbar input'), mk = document.querySelector('.hubbar .mk'), none = document.querySelector('#list .none');
    var fams = []; try{ fams = JSON.parse(groups.getAttribute('data-fams') || '[]'); }catch(e){}
    var famSecs = fams.map(function(f, k){
      var s = document.createElement('section'); s.className = 'grp'; s.setAttribute('data-k', 'f' + k);
      s.innerHTML = '<div class="gh"><h3><i aria-hidden="true"></i>' + f[0] + '</h3><p>' + f[1] + '</p></div><ul class="rows"></ul>';
      return s;
    });
    var view = 'area';
    function show(){
      var q = (find && find.value || '').trim().toLowerCase(), only = mk && mk.getAttribute('aria-pressed') === 'true', any = false;
      rows.forEach(function(li){
        var ok = (!only || li.hasAttribute('data-mk')) && (!q || li.textContent.toLowerCase().indexOf(q) >= 0);
        li.hidden = !ok; if(ok) any = true;
      });
      (view === 'area' ? areaSecs : famSecs).forEach(function(s){ s.hidden = !$$('.rows > li', s).some(function(li){ return !li.hidden; }); });
      if(none) none.hidden = any;
    }
    function group(g, write){
      view = g; groups.setAttribute('data-g', g);
      segs.forEach(function(x){ x.setAttribute('aria-pressed', String(x.getAttribute('data-g') === g)); });
      var secs = g === 'area' ? areaSecs : famSecs;
      rows.forEach(function(li){
        var key = g === 'area' ? li.getAttribute('data-d') : 'f' + li.getAttribute('data-fam');
        var sec = secs.filter(function(s){ return s.getAttribute('data-k') === key; })[0];
        if(sec) sec.querySelector('.rows').appendChild(li);
      });
      groups.innerHTML = ''; secs.forEach(function(s){ groups.appendChild(s); });
      if(!CALM) rows.forEach(function(li){ li.style.animation = 'none'; void li.offsetWidth; li.style.animation = ''; });
      show();
      if(write){ try{ history.replaceState(null, '', location.pathname + (g === 'area' ? '' : '#by-algorithm')); }catch(e){} }
    }
    segs.forEach(function(x){ x.addEventListener('click', function(){ group(x.getAttribute('data-g'), true); }); });
    if(find) find.addEventListener('input', show);
    if(mk) mk.addEventListener('click', function(){ mk.setAttribute('aria-pressed', String(mk.getAttribute('aria-pressed') !== 'true')); show(); });
    if(location.hash === '#by-algorithm') group('fam', false);
  }

  /* ── one product at a time ── */
  var blocks = $$('.prod'), tiles = $$('.pick button');
  var ids = blocks.map(function(b){ return b.getAttribute('data-p'); });
  var D = {}, F = {}, P = {}, cur = null;
  if(!blocks.length) return;            /* the hub has no product on it */
  blocks.forEach(function(b){
    var id = b.getAttribute('data-p');
    Tabs(b);
    D[id] = b.querySelector('.td-svg') ? Drawing(b) : Template(b);
    b._D = D[id];
    F[id] = $$('.flow', b).map(Flow);
    P[id] = $$('.pmf .file', b).map(PMFile);
    wireNotes(b);
  });
  function activate(id, write){
    if(ids.indexOf(id) < 0) id = ids[0];
    if(id === cur) return;
    var first = cur === null;
    cur = id;
    blocks.forEach(function(b){ b.classList.toggle('on', b.getAttribute('data-p') === id); });
    tiles.forEach(function(t){ t.setAttribute('aria-pressed', t.getAttribute('data-go') === id ? 'true' : 'false'); });
    if(!first){ D[id].rearm(); F[id].forEach(function(f){ f.rearm(); }); P[id].forEach(function(f){ f.rearm(); }); }
    D[id].fit();
    balance(blocks[ids.indexOf(id)]);
    if(write){ try{ history.replaceState(null, '', '#' + id); }catch(e){} }
  }
  tiles.forEach(function(t){ t.addEventListener('click', function(){ activate(t.getAttribute('data-go'), true); }); });
  $$('button.nxt').forEach(function(b){
    b.addEventListener('click', function(){
      var id = b.getAttribute('data-go');
      activate(id, true);
      var head = document.querySelector('.prod[data-p="' + id + '"] .tdq');
      if(head) head.scrollIntoView({behavior: CALM ? 'auto' : 'smooth', block:'start'});
    });
  });
  activate((location.hash || '').replace('#', ''), false);
  window.addEventListener('hashchange', function(){ activate((location.hash || '').replace('#', ''), false); });
  var rt = 0;
  window.addEventListener('resize', function(){ cancelAnimationFrame(rt); rt = requestAnimationFrame(function(){ if(cur){ D[cur].fit(); balance(blocks[ids.indexOf(cur)]); } }); });
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(function(){ if(cur) balance(blocks[ids.indexOf(cur)]); });
})();
