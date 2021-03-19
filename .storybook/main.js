const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss',
    '@whitespace/storybook-addon-html',
    'storybook-addon-jsx',
  ],
  module: {
    rules: [
     {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../')
     },
     {  test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: __dirname
     },
     {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'fonts/[hash].[ext]',
            limit: 5000,
            mimetype: 'application/font-woff'
          }
         }
     },
     {
       test: /\.(ttf|eot|svg|png)$/,
       use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[hash].[ext]'
          }
       }
     }
   ]
 }
}