/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    author: "Zach Colbert",
    description:
      "Searching for career opportunities in security, software engineering, and enterprise IT.",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Zach Colbert",
        short_name: "Zach Colbert",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#4183c4",
        display: "standalone",
        icon: "src/img/icon.png",
      },
    },
  ],
}
