module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("_redirects");

  eleventyConfig.addFilter("findFeed", (feeds, slug) => {
    return (feeds || []).find((feed) => feed.slug === slug);
  });

  eleventyConfig.addFilter("formatLabel", (feed) => {
    return feed.source_format ? `${feed.source_format} → ${feed.format}` : feed.format;
  });

  eleventyConfig.addCollection("feedPages", (collectionApi) => {
    return collectionApi.getFilteredByGlob("content/feeds/*.md");
  });

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
