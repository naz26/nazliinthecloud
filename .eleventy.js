// .eleventy.js (CommonJS)
const { DateTime } = require("luxon");


module.exports = function (eleventyConfig) {
  // ── Passthrough (copies to _site)
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" }); // custom domain


  // "Read on Medium" button with emoji
  eleventyConfig.addShortcode("mediumButton", function(
    url,
    label = "Read the full story on Medium",
    emoji = "📖"
  ) {
    const esc = s => String(s ?? "")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const safeUrl = esc(url || "#");
    const safeLabel = esc(label);
    const safeEmoji = esc(emoji);

    return `
<a class="btn-medium" href="${safeUrl}" target="_blank" rel="noopener noreferrer"
   aria-label="${safeLabel} (opens in a new tab)">
  <span class="btn-medium__emoji" aria-hidden="true">${safeEmoji}</span>
  <span class="btn-medium__label">${safeLabel}</span>
  <svg class="btn-medium__icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z"/>
  </svg>
</a>
    `.trim();
  });



  // ── Filters / shortcodes
  eleventyConfig.addFilter("slug", (str = "") =>
    str.toString().toLowerCase().trim().replace(/[\s\W-]+/g, "-")
  );

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Date filter for Nunjucks
  eleventyConfig.addFilter("date", (value, format = "MMM dd, yyyy", zone = "local") => {
    if (!value) return "";
    const jsDate = value instanceof Date ? value : new Date(value);
    const dt = DateTime.fromJSDate(jsDate, { zone: zone === "utc" ? "utc" : undefined });
    return dt.toFormat(format);
  });
  eleventyConfig.addFilter("htmlDate", (value) => {
    if (!value) return "";
    const jsDate = value instanceof Date ? value : new Date(value);
    return DateTime.fromJSDate(jsDate).toISODate();
  });

  // ── Collections
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/blog/posts/**/*.md").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("projects", (api) =>
    api.getFilteredByGlob("src/projects/posts/**/*.md").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("certificationDiaries", (api) =>
    api.getFilteredByGlob("src/blog/posts/**/*.md")
      .filter((item) => (item.data.series || "").toLowerCase() === "certification diaries")
      .sort((a, b) => b.date - a.date)
  );

  // Unique tag lists
  eleventyConfig.addCollection("postTags", (api) => {
    const set = new Set();
    api.getFilteredByGlob("src/blog/posts/**/*.md").forEach((item) => {
      (item.data.tags || []).forEach((t) => set.add(t));
    });
    return [...set].sort((a, b) => a.localeCompare(b));
  });

  eleventyConfig.addCollection("projectTags", (api) => {
    const set = new Set();
    api.getFilteredByGlob("src/projects/posts/**/*.md").forEach((item) => {
      (item.data.tags || []).forEach((t) => set.add(t));
    });
    return [...set].sort((a, b) => a.localeCompare(b));
  });

  // Optional: for future sitemap
  eleventyConfig.addCollection("allUrls", (api) =>
    api.getAll().filter((p) => p.url && !p.url.endsWith(".json"))
  );

  return {
    dir: { input: "src", includes: "_includes", layouts: "_layouts", output: "_site" },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
