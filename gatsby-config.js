module.exports = {
  siteMetadata: {
    siteUrl: "https://www.oanabologbleich.com",
    title: "oana-website-gatsby",
  },
  plugins: [
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: true,
    //   },
    // },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `${__dirname}/src/images/gatsby-icon.png`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/albums`,
      },
      __key: "images",
    },
  ],
};

