/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Sudama's Stash`,
    description: `Sudama's Stash`,
    author: `smurrayatwork`,
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: ({ node, object, isArray }) => `${object.type}Yaml`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
