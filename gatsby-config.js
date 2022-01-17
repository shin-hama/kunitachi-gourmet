const path = require("path")

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    author: {
      name: `Kyle Mathews`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.API_KEY,
        serviceId: "kuni-gourmet",
        apis: [
          {
            endpoint: "blog-posts",
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMicrocmsBlogPosts } }) => {
              return allMicrocmsBlogPosts.nodes.map(node => {
                return Object.assign(
                  {},
                  {
                    description: node.description,
                    title: node.title,
                    date: node.publishedAt,
                    url: site.siteMetadata.siteUrl + node.slug,
                    guid: site.siteMetadata.siteUrl + node.slug,
                    custom_elements: [{ "content:encoded": node.body }],
                  }
                )
              })
            },
            query: `
              {
                allMicrocmsBlogPosts(
                  sort: { order: DESC, fields: [publishedAt] },
                ) {
                  nodes {
                    description
                    body
                    slug
                    title
                    publishedAt
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Gatsby Starter Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        emitSchema: {
          "src/__generated__/gatsby-introspection.json": true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
