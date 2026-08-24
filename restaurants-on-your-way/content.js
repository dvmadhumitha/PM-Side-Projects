// ─── Constants ───────────────────────────────────────────────────────────────

const SIDEBAR_ID  = "route-stops-sidebar";
const MARKER_ID   = "rs-map-marker";
const MAX_DIST_KM = 0.5;


let currentRouteCoords = null;
let allPlacesCache     = null;
let markerLatLon       = null;
let rafRunning         = false;
let debounceTimer      = null;
let isRunning          = false;

// ─── Filter definitions ───────────────────────────────────────────────────────

const FILTER_GROUPS = [
  {
    label: "Cuisine",
    pills: [
      { key: "italian",       label: "🍕 Italian" },
      { key: "indian",        label: "🍛 Indian" },
      { key: "japanese",      label: "🍣 Japanese" },
      { key: "chinese",       label: "🍜 Chinese" },
      { key: "middleeastern", label: "🥙 Middle Eastern" },
      { key: "mediterranean", label: "🫒 Mediterranean" },
      { key: "turkish",       label: "🧆 Turkish" },
      { key: "american",      label: "🍔 American" },
      { key: "mexican",       label: "🌮 Mexican" },
    ],
  },
  {
    label: "Type",
    pills: [
      { key: "all",        label: "🍽️ All",        special: true },
      { key: "restaurant", label: "🍽️ Restaurant" },
      { key: "pizzeria",   label: "🍕 Pizzeria" },
      { key: "cafe",       label: "☕ Cafe" },
      { key: "fast_food",  label: "🍔 Fast Food" },
      { key: "gelato",     label: "🍦 Gelato" },
      { key: "bakery",     label: "🥐 Bakery" },
      { key: "bar",        label: "🍺 Bar" },
    ],
  },
];

// ─── Map Marker ───────────────────────────────────────────────────────────────

function positionMarker() {
  const marker = document.getElementById(MARKER_ID);
  if (!marker || !markerLatLon) return;
  const match = window.location.hash.match(/#map=(\d+)\/([\d.-]+)\/([\d.-]+)/);
  if (!match) return;
  const mapEl = document.querySelector(".leaflet-container");
  if (!mapEl) return;
  const rect = mapEl.getBoundingClientRect();
  const px   = latLonToPixel(markerLatLon[0], markerLatLon[1],
    parseFloat(match[2]), parseFloat(match[3]), parseInt(match[1]), rect.width, rect.height);
  marker.style.left = `${rect.left + px.x - 14}px`;
  marker.style.top  = `${rect.top  + px.y - 36}px`;
}

function startMarkerLoop() {
  if (rafRunning) return;
  rafRunning = true;
  const loop = () => {
    if (!markerLatLon || !document.getElementById(MARKER_ID)) { rafRunning = false; return; }
    positionMarker();
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

function showMarkerOverlay(lat, lon) {
  document.getElementById(MARKER_ID)?.remove();
  markerLatLon = [lat, lon];
  const m = document.createElement("div");
  m.id = MARKER_ID;
  m.style.cssText = "position:fixed;width:28px;height:36px;pointer-events:none;z-index:99999;";
  m.innerHTML = `<svg viewBox="0 0 28 36" xmlns="http://www.w3.org/2000/svg" width="28" height="36">
    <path d="M14 0C6.3 0 0 6.3 0 14c0 10.5 14 22 14 22s14-11.5 14-22C28 6.3 21.7 0 14 0z" fill="#2e7d32" stroke="#fff" stroke-width="2"/>
    <circle cx="14" cy="14" r="6" fill="#fff"/>
  </svg>`;
  document.body.appendChild(m);
  positionMarker();
  startMarkerLoop();
}

function latLonToPixel(lat, lon, cLat, cLon, zoom, w, h) {
  const proj = (la, lo) => {
    const s = 256 * Math.pow(2, zoom);
    const x = (lo + 180) / 360 * s;
    const si = Math.sin(la * Math.PI / 180);
    const y  = (0.5 - Math.log((1 + si) / (1 - si)) / (4 * Math.PI)) * s;
    return { x, y };
  };
  const p = proj(lat, lon), c = proj(cLat, cLon);
  return { x: w/2 + (p.x - c.x), y: h/2 + (p.y - c.y) };
}

window.addEventListener("resize", positionMarker);

// ─── Sidebar UI ──────────────────────────────────────────────────────────────

function createSidebar() {
  document.getElementById(SIDEBAR_ID)?.remove();

  const groupsHTML = FILTER_GROUPS.map(group => {
    const pillsHTML = group.pills.map(({ key, label, special }) =>
      `<div class="rs-pill ${special ? "active" : ""}" data-filter="${key}">${label}</div>`
    ).join("");
    return `
      <div class="rs-group">
        <div class="rs-group-label">${group.label}</div>
        <div class="rs-pills-row">${pillsHTML}</div>
      </div>`;
  }).join("");

  const sidebar = document.createElement("div");
  sidebar.id = SIDEBAR_ID;
  sidebar.innerHTML = `
    <header>Route Stops <span id="stop-count"></span></header>
    <div id="rs-filters">
      ${groupsHTML}
      <div class="rs-group rs-diet-group">
        <div class="rs-toggle-row">
          <span class="rs-toggle-label">🥗 Vegetarian / Vegan only</span>
          <label class="rs-toggle">
            <input type="checkbox" data-diet="vegmode" />
            <span class="rs-toggle-track"><span class="rs-toggle-thumb"></span></span>
          </label>
        </div>
      </div>
    </div>
    <div id="route-stops-loading">Searching…</div>
  `;
  document.body.appendChild(sidebar);

  sidebar.querySelectorAll(".rs-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const key = pill.dataset.filter;
      if (key === "all") {
        sidebar.querySelectorAll(".rs-pill").forEach(p =>
          p.classList.toggle("active", p.dataset.filter === "all")
        );
      } else {
        sidebar.querySelector('[data-filter="all"]')?.classList.remove("active");
        pill.classList.toggle("active");
        const anyOn = [...sidebar.querySelectorAll(".rs-pill")]
          .filter(p => p.dataset.filter !== "all").some(p => p.classList.contains("active"));
        if (!anyOn) sidebar.querySelector('[data-filter="all"]')?.classList.add("active");
      }
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(refreshResults, 300);
    });
  });

  sidebar.querySelector("[data-diet='vegmode']")?.addEventListener("change", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(refreshResults, 300);
  });
}

function getActiveFilters() {
  const allPill  = document.querySelector('[data-filter="all"]');
  const vegMode  = document.querySelector('[data-diet="vegmode"]')?.checked || false;
  const categoryAll = allPill?.classList.contains("active");
  const active = categoryAll ? null : {};

  if (!categoryAll) {
    document.querySelectorAll(".rs-pill").forEach(p => {
      if (p.dataset.filter !== "all") active[p.dataset.filter] = p.classList.contains("active");
    });
  }

  return { category: active, vegMode };
}

// ─── Results ─────────────────────────────────────────────────────────────────

function getDietIcon(tags) {
  if (tags["diet:vegan"] === "yes")        return "🌱";
  if (tags["diet:vegetarian"] === "yes")   return "🥗";
  return "";
}

function placeMatchesFilters(place, filters) {
  const tags = place.tags || {};
  const { category, vegMode } = filters;

  // Step 1: category / type match
  let categoryMatch = false;
  if (!category) {
    categoryMatch = true; // All mode
  } else {
    if (category.restaurant && tags.amenity === "restaurant") categoryMatch = true;
    if (category.pizzeria   && (tags.amenity === "restaurant" && tags.cuisine?.includes("pizza"))) categoryMatch = true;
    if (category.cafe       && tags.amenity === "cafe")       categoryMatch = true;
    if (category.fast_food  && tags.amenity === "fast_food")  categoryMatch = true;
    if (category.gelato     && tags.amenity === "ice_cream")  categoryMatch = true;
    if (category.bar        && tags.amenity === "bar")        categoryMatch = true;
    if (category.bakery     && tags.shop === "bakery")        categoryMatch = true;
    // Cuisine filters
    if (category.italian      && tags.cuisine?.includes("italian"))        categoryMatch = true;
    if (category.indian       && tags.cuisine?.includes("indian"))         categoryMatch = true;
    if (category.japanese     && tags.cuisine?.includes("japanese"))       categoryMatch = true;
    if (category.chinese      && tags.cuisine?.includes("chinese"))        categoryMatch = true;
    if (category.middleeastern && tags.cuisine?.includes("middle_eastern")) categoryMatch = true;
    if (category.mediterranean && tags.cuisine?.includes("mediterranean"))  categoryMatch = true;
    if (category.turkish      && tags.cuisine?.includes("turkish"))        categoryMatch = true;
    if (category.american     && tags.cuisine?.includes("american"))       categoryMatch = true;
    if (category.mexican      && tags.cuisine?.includes("mexican"))        categoryMatch = true;
    // If no type pill is selected (only cuisine pill), still match any restaurant
    if (!categoryMatch) {
      const hasTypePill = ["restaurant","pizzeria","cafe","fast_food","gelato","bakery","bar"]
        .some(k => category[k]);
      if (!hasTypePill) categoryMatch = true;
    }
  }

  if (!categoryMatch) return false;

  // Step 2: veg/vegan overlay
  if (vegMode) {
    const isVeg   = tags["diet:vegetarian"] === "yes" || tags["diet:vegetarian"] === "only";
    const isVegan = tags["diet:vegan"] === "yes" || tags["diet:vegan"] === "only";
    if (!isVeg && !isVegan) return false;
  }

  return true;
}

function refreshResults() {
  const sidebar = document.getElementById(SIDEBAR_ID);
  if (!sidebar || !currentRouteCoords || !allPlacesCache) return;
  sidebar.querySelectorAll(".stop-card, #route-stops-empty").forEach(e => e.remove());
  const filters  = getActiveFilters();
  const filtered = allPlacesCache.filter(p => placeMatchesFilters(p, filters));
  renderCards(filtered, currentRouteCoords);
}

function renderCards(places, routeCoords) {
  const sidebar = document.getElementById(SIDEBAR_ID);
  const countEl = document.getElementById("stop-count");
  if (!sidebar) return;

  const nearby = places
    .map(p => ({ place: p, dist: distanceToRouteRaw(p.lat, p.lon, routeCoords) }))
    .filter(({ dist }) => dist <= MAX_DIST_KM)
    .sort((a, b) => a.dist - b.dist);

  if (nearby.length === 0) {
    if (countEl) countEl.textContent = "";
    sidebar.insertAdjacentHTML("beforeend",
      `<div id="route-stops-empty">No matching stops within 500m of your route.</div>`);
    return;
  }
  if (countEl) countEl.textContent = `${nearby.length} found`;

  nearby.forEach(({ place, dist }) => {
    const tags     = place.tags || {};
    const name     = tags.name || "Unnamed place";
    const cuisine  = tags.cuisine ? tags.cuisine.replace(/;/g, ", ") : "";
    const type     = friendlyType(tags);
    const dietIcon = getDietIcon(tags);
    const hours    = tags.opening_hours ? `<div class="stop-hours">🕐 ${tags.opening_hours}</div>` : "";
    const phone    = tags.phone ? `<div class="stop-extra">📞 ${tags.phone}</div>` : "";
    const website  = tags.website ? `<div class="stop-extra"><a href="${tags.website}" target="_blank">🌐 Website</a></div>` : "";
    const takeaway = tags.takeaway === "yes" ? `<span class="stop-badge">Takeaway</span>` : "";
    const outdoor  = tags.outdoor_seating === "yes" ? `<span class="stop-badge">Outdoor</span>` : "";
    const dietBadge = dietIcon ? `<span class="stop-badge stop-diet-badge">${dietIcon}</span>` : "";

    const card = document.createElement("div");
    card.className = "stop-card";
    card.innerHTML = `
      <div class="stop-name">${name}${dietBadge}${takeaway}${outdoor}</div>
      <div class="stop-type">${type}${cuisine ? " · " + cuisine : ""}</div>
      <div class="stop-distance">📍 ${formatDist(dist)} off your route</div>
      ${hours}${phone}${website}
    `;
    card.addEventListener("click", () => {
      document.querySelectorAll(".stop-card.selected").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      window.location.hash = `#map=18/${place.lat}/${place.lon}`;
      showMarkerOverlay(place.lat, place.lon);
    });
    sidebar.appendChild(card);
  });
}

function friendlyType(tags) {
  if (tags.amenity === "ice_cream") return "Gelato / Ice Cream";
  if (tags.amenity === "bar")       return "Bar";
  if (tags.shop === "bakery")       return "Bakery";
  if (tags.amenity === "cafe")      return "Cafe";
  if (tags.amenity === "fast_food") return "Fast Food";
  return "Restaurant";
}

// ─── Distance ────────────────────────────────────────────────────────────────

function distanceToRouteRaw(lat, lon, coords) {
  let min = Infinity;
  for (const [rlat, rlon] of coords) {
    const d = haversine(lat, lon, rlat, rlon);
    if (d < min) min = d;
  }
  return min;
}

function formatDist(km) {
  return km < 1 ? `${Math.round(km * 1000)}m` : `${km.toFixed(1)}km`;
}

function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371, d2r = Math.PI / 180;
  const dLat = (lat2 - lat1) * d2r, dLon = (lon2 - lon1) * d2r;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*d2r)*Math.cos(lat2*d2r)*Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// ─── Overpass ────────────────────────────────────────────────────────────────

function buildQuery(bbox) {
  const b = bbox;
  return `[out:json][timeout:30];(node["amenity"="restaurant"](${b});node["amenity"="cafe"](${b});node["amenity"="fast_food"](${b});node["amenity"="ice_cream"](${b});node["amenity"="bar"](${b});node["shop"="bakery"](${b}););out body 300;`;
}

async function fetchAllPlaces(bbox) {
  const query = buildQuery(bbox);
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ type: "FETCH_OVERPASS", query }, (response) => {
      if (chrome.runtime.lastError) { resolve(null); return; }
      resolve(response?.ok ? response.elements : null);
    });
  });
}

// ─── Route detection ─────────────────────────────────────────────────────────

function parseRouteFromURL() {
  const route = new URLSearchParams(location.search).get("route");
  if (!route) return null;
  const pts = route.split(";").map(p => p.split(",").map(Number));
  if (pts.length < 2 || pts.some(([la,lo]) => isNaN(la)||isNaN(lo))) return null;
  return pts;
}

function waypointsToBbox(pts) {
  const pad = 0.02; // ~2km padding for better coverage
  const lats = pts.map(([la]) => la), lons = pts.map(([,lo]) => lo);
  return [
    (Math.min(...lats)-pad).toFixed(5), (Math.min(...lons)-pad).toFixed(5),
    (Math.max(...lats)+pad).toFixed(5), (Math.max(...lons)+pad).toFixed(5),
  ].join(",");
}

async function fetchRouteGeometry(waypoints) {
  try {
    const coords = waypoints.map(([la,lo]) => `${lo},${la}`).join(";");
    const ctrl = new AbortController();
    setTimeout(() => ctrl.abort(), 12000);
    const res  = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson`,
      { signal: ctrl.signal });
    const data = await res.json();
    if (data.code !== "Ok" || !data.routes?.[0]) return waypoints;
    return data.routes[0].geometry.coordinates.map(([lo,la]) => [la,lo]);
  } catch(e) { return waypoints; }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function run() {
  if (isRunning) return;
  const waypoints = parseRouteFromURL();
  if (!waypoints) return;

  isRunning = true;
  allPlacesCache = null;
  currentRouteCoords = null;
  document.getElementById(MARKER_ID)?.remove();
  markerLatLon = null;

  createSidebar();

  try {
    const bbox = waypointsToBbox(waypoints);
    const [routeCoords, places] = await Promise.all([
      fetchRouteGeometry(waypoints),
      fetchAllPlaces(bbox),
    ]);

    currentRouteCoords = routeCoords;
    document.getElementById("route-stops-loading")?.remove();

    if (!places) {
      document.getElementById(SIDEBAR_ID)?.insertAdjacentHTML("beforeend",
        `<div id="route-stops-empty">⚠️ Could not reach Overpass API. Please try again in a moment.</div>`);
      return;
    }

    allPlacesCache = places;
    renderCards(places, currentRouteCoords);
  } finally {
    isRunning = false;
  }
}

// ─── Route change detection (multiple strategies) ────────────────────────────

let lastRoute = new URLSearchParams(location.search).get("route");

function checkRouteChange() {
  const r = new URLSearchParams(location.search).get("route");
  if (r && r !== lastRoute) {
    lastRoute = r;
    run();
  }
}

// Strategy 1: MutationObserver (catches DOM updates when OSM re-renders)
new MutationObserver(checkRouteChange)
  .observe(document.body, { childList: true, subtree: true });

// Strategy 2: popstate (back/forward nav)
window.addEventListener("popstate", checkRouteChange);

// Strategy 3: polling fallback every 1.5s (catches pushState that bypasses observers)
setInterval(checkRouteChange, 1500);

run();
