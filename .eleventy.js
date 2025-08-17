const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Passthrough
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });

  // Filters / shortcodes
  eleventyConfig.addFilter("slug", (str = "") =>
    str.toString().toLowerCase().trim().replace(/[\s\W-]+/g, "-")
  );
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // 🗓️ Date filters for Nunjucks
  eleventyConfig.addFilter("date", (value, format = "MMM dd, yyyy", zone = "local") => {
    if (!value) return "";
    const jsDate = value instanceof Date ? value : new Date(value);
    const dt = DateTime.fromJSDate(jsDate, { zone: zone === "utc" ? "utc" : undefined });
    return dt.toFormat(format);
  });
  eleventyConfig.addFilter("htmlDate", (value) => {
    if (!value) return "";
    const jsDate = value instanceof Date ? value : new Date(value);
    return DateTime.fromJSDate(jsDate).toISODate(); // e.g. 2025-08-17
  });

  // Collections
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

  // Optional: all URLs (for a future sitemap)
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
