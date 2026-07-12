module.exports = function (eleventyConfig) {
  // Static assets pass straight through to the build output, untouched.
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });

  // Field Notes collection: every markdown file in src/notes/, newest first.
  eleventyConfig.addCollection("notes", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/notes/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  // Simple date formatter for post metadata, e.g. "July 2026".
  eleventyConfig.addFilter("monthYear", function (dateObj) {
    const d = new Date(dateObj);
    return d.toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
  });

  // YYYY-MM-DD, for JSON-LD datePublished — derived from the post's date
  // frontmatter so there's only one date field to fill in the CMS.
  eleventyConfig.addFilter("isoDate", function (dateObj) {
    return new Date(dateObj).toISOString().slice(0, 10);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};
