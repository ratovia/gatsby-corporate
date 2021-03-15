require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "gatsby-corporate-demo",
    description: "Gatsbyで作成したコーポレートサイトのデモです",
    author: "ratovia"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.GATSBY_CONTENTFUL_API_KEY
    //   }
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          database: process.env.SAFARIPARK_DATABASE_NAME,
          user: process.env.SAFARIPARK_DATABASE_USERNAME,
          password: process.env.SAFARIPARK_DATABASE_PASSWORD,
          socketPath: process.env.SAFARIPARK_DATABASE_SOCKET,
          host: process.env.SAFARIPARK_DATABASE_HOST,
        },
        queries: [
          {
            statement: 'SELECT * FROM companies',
            idFieldName: 'id',
            name: 'companies'
          },
          {
            statement: 'SELECT * FROM notifications',
            idFieldName: 'id',
            name: 'notifications'
          },
          {
            statement: 'SELECT * FROM recruits',
            idFieldName: 'id',
            name: 'recruits'
          }
        ]
      }
    }
  ],
}
