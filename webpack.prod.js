const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = Merge(common, {
  mode: 'production',
  entry: './js/index.js',
  output: {
    filename: 'app.bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new FaviconsWebpackPlugin('./img/favicon.ico'),
    new HtmlWebpackPlugin({
      title: 'pictogram todo',
      template: path.join(__dirname, './src/index.ejs'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        development: '\'development\''
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackBar()
  ]
});
