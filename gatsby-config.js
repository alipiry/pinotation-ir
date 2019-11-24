module.exports = {
  siteMetadata: {
    title: `PINOTATON.IR`,
    description: `Ali Piry's Personal Blog`,
    author: `@alipiry`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
  ],
};
