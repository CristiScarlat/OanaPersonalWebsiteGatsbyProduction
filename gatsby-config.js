module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "oana-website-gatsby-bootstrap",
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
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/albums",
      },
      __key: "images",
    },
  ],
};

