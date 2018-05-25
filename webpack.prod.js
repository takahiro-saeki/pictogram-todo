const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WebpackBar = require('webpackbar');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = Merge(common, {
  mode: 'production',
  entry: './js/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: './img/favicon.ico',
      prefix: 'icons/',
      inject: false
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ja|it/),
    new HtmlWebpackPlugin({
      title: 'pictogram todo',
      template: path.join(__dirname, './src/index.ejs'),
      faviconPath: 'icons/favicon.ico',
      minify: {
        collapseWhitespace: true
      }
    }),
    new WebpackPwaManifest({
      name: 'pictogram todo',
      short_name: 'P-TODO',
      description: 'this is one of the example app for me!',
      background_color: '#ffffff',
      start_url: './?utm_source=homescreen',
      display: 'standalone',
      theme_color: '#FFF',
      icons: [
        {
          src: path.resolve('src/img/pic.jpg'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'sw.js'),
        to: path.resolve(__dirname, 'dist/sw.js')
      }
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        development: "'production'"
      }
    }),
    new WebpackBar()
  ]
});
