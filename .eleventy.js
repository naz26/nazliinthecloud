const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  // Add a 'date' filter for Nunjucks
  eleventyConfig.addFilter("date", function(value) {
    if(!value) return "";
    return new Date(value).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit"
    });
  });

  // Register available RSS filters for Nunjucks
  if (pluginRss.dateToRfc3339) {
    eleventyConfig.addNunjucksFilter("dateToRfc3339", pluginRss.dateToRfc3339);
  }
  if (pluginRss.absoluteUrl) {
    eleventyConfig.addNunjucksFilter("absoluteUrl", pluginRss.absoluteUrl);
  }

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};