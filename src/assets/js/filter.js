(function () {
  const search = document.querySelector('[data-search]');
  const tagSelect = document.querySelector('[data-filter-tags]');
  const catSelect = document.querySelector('[data-filter-category]');
  const list = document.querySelector('[data-filter-list]');
  if (!list) return;

  const items = [...list.querySelectorAll('[data-item]')];

  function applyFilters() {
    const q = (search?.value || "").toLowerCase().trim();
    const tag = (tagSelect?.value || "");
    const cat = (catSelect?.value || "");
    let visible = 0;

    items.forEach(el => {
      const text = el.dataset.search || "";
      const tags = (el.dataset.tags || "").split(",");
      const category = el.dataset.category || "";
      const matchesQ = !q || text.includes(q);
      const matchesTag = !tag || tags.includes(tag);
      const matchesCat = !cat || category === cat;
      const show = matchesQ && matchesTag && matchesCat;
      el.style.display = show ? "" : "none";
      if (show) visible++;
    });

    document.querySelector('[data-count]')?.replaceChildren(document.createTextNode(visible));
  }

  function initFromQuery() {
    const params = new URLSearchParams(location.search);
    if (params.get("tag") && tagSelect) tagSelect.value = params.get("tag");
    if (params.get("category") && catSelect) catSelect.value = params.get("category");
    if (params.get("q") && search) search.value = params.get("q");
    applyFilters();
  }

  [search, tagSelect, catSelect].forEach(el => el && el.addEventListener("input", applyFilters));
  window.addEventListener("DOMContentLoaded", initFromQuery);
})();
