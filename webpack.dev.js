const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
  mode: "development",
  optimization: {
    minimize: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "./img/[name].[hash].[ext]",
  },
  module: {
    rules: [
      {
          test: /\.s[ac]ss$/i,
          use: [
          'style-loader', //3. Inject styles into DOM
          'css-loader',   //2. Turns css into common js
          'sass-loader',   //1. Turns sass into css
          ]
      },
    ]
  }

});