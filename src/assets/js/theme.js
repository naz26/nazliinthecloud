(function () {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-toggle-theme]");
  const STORAGE_KEY = "theme";
  // Order preserved: light → dark → n7 → epoque
  const THEMES = ["light", "dark", "n7", "epoque"];

  function labelFor(mode) {
    return mode === "light" ? "🌙 Dark"
         : mode === "dark"  ? "🚀 N7"
         : mode === "n7"    ? "🎩 Époque"
         : "☀️ Light";
  }

  function iconFor(mode) {
    return mode === "light" ? "☀️"
         : mode === "dark"  ? "🌙"
         : mode === "n7"    ? "🚀"
         : "🎩";
  }

  function apply(mode) {
    root.classList.remove("dark", "n7", "epoque");
    if (mode === "dark") root.classList.add("dark");
    if (mode === "n7") root.classList.add("n7");
    if (mode === "epoque") root.classList.add("epoque");
    localStorage.setItem(STORAGE_KEY, mode);
    if (toggle) {
      toggle.ariaLabel = `Switch to ${labelFor(mode).replace(/^[^ ]+ /,'')}`;
      toggle.textContent = iconFor(mode);
      toggle.title = `Theme: ${mode}`;
      toggle.dataset.mode = mode;
    }
  }

  // Initial mode
  let mode = localStorage.getItem(STORAGE_KEY);
  if (!mode) {
    mode = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark" : "light";
  }
  apply(mode);

  // Cycle on click
  toggle && toggle.addEventListener("click", () => {
    const current = toggle.dataset.mode || mode;
    const next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];
    apply(next);
  });

  // Respect system changes only if user hasn’t picked
  if (!localStorage.getItem(STORAGE_KEY) && window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
      apply(e.matches ? "dark" : "light");
    });
  }
})();
