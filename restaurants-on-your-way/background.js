// Background service worker — handles all cross-origin fetch requests
// so the page's Content Security Policy cannot block them.

const ENDPOINTS = [
  "https://overpass-api.de/api/interpreter",
  "https://lz4.overpass-api.de/api/interpreter",
  "https://z.overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
];

async function tryEndpoint(endpoint, query, useGet) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 35000);
    let res;
    if (useGet) {
      res = await fetch(`${endpoint}?data=${encodeURIComponent(query)}`, { signal: controller.signal });
    } else {
      res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "data=" + encodeURIComponent(query),
        signal: controller.signal,
      });
    }
    clearTimeout(timer);
    if (!res.ok) return null;
    const text = await res.text();
    if (!text || text.trim().startsWith("<")) return null;
    const parsed = JSON.parse(text);
    return (parsed && parsed.elements) ? parsed.elements : null;
  } catch (e) {
    return null;
  }
}

async function fetchOverpass(query) {
  for (let attempt = 0; attempt < 2; attempt++) {
    for (const useGet of [false, true]) {
      for (const endpoint of ENDPOINTS) {
        const result = await tryEndpoint(endpoint, query, useGet);
        if (result !== null) return { ok: true, elements: result };
      }
    }
    if (attempt === 0) await new Promise(r => setTimeout(r, 3000));
  }
  return { ok: false, elements: [] };
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "FETCH_OVERPASS") {
    fetchOverpass(msg.query).then(sendResponse);
    return true; // keep the message channel open for async response
  }
});
