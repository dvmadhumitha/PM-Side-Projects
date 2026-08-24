function saveFilters() {
  const filters = {};
  document.querySelectorAll(".pill").forEach((pill) => {
    filters[pill.dataset.filter] = pill.classList.contains("active");
  });
  chrome.storage.local.set({ filters }, () => {
    // Tell the content script to re-run the search with new filters
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) chrome.tabs.sendMessage(tabs[0].id, { type: "FILTERS_CHANGED" });
    });
  });
}

// Load saved preferences and wire up clicks
chrome.storage.local.get("filters", (data) => {
  const saved = data.filters || { restaurant: true };

  document.querySelectorAll(".pill").forEach((pill) => {
    if (saved[pill.dataset.filter]) pill.classList.add("active");

    pill.addEventListener("click", () => {
      pill.classList.toggle("active");
      saveFilters();
    });
  });
});
