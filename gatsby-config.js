module.exports = {
  siteMetadata: {
    title: `SmokeFinder`,
    description: `SmokeFinder`,
    author: `Neuralbit`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: `src/images/favicon-ff.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SmokeFinder`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-ff.svg`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:300`,
          "Montserrat:400",
          "Montserrat:500",
          "Montserrat:600",
          "Hind:300",
          "Hind:400",
          "Hind:500",
          "Open Sans: 600",
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
  ],
};
