/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Yen-tsen Ansin Liu's Portfolio`,
    author: {
      name: `Yen-tsen Ansin Liu`,
      summary: `Senior UX Designer specializing in data-heavy design, digital twins, and design systems.`,
    },
    description: `Growing scalable user experience`,
    siteUrl: `https://imyentsen.github.io/`,
    image: `/og-image.jpg`,
    keywords: [`UX Design`, `Design Systems`, `Digital Twins`, `Portfolio`],
    lang: `en`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // 合併所有 remark 插件到單一配置中
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-unwrap-images 要放在最前面或圖片處理插件之前
          `gatsby-remark-unwrap-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-gifs`,
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          // gatsby-remark-prismjs 通常放在最後
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yen-tsen Ansin Liu's Portfolio`,
        short_name: `Yentsen Liu`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
