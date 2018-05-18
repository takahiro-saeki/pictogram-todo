const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const analyzerConfig = require('../build/analyzerConfig');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const preBuildConfig = require('../build/preBuildConfig');
const optimizeArray = require('../build/optimizeArray');
const isSpecific = require('../build/isSpecific');
const specificOutput = require('../build/specificOutput');
require('dotenv').config();

const { IS_SPECIFIC, IS_STATS, BUILD_FILE } = process.env;

const renderHTML = (data, array) => {
  const generate = array.map(item => {
    return new HtmlWebpackPlugin({
      title: item.title,
      template: path.join(__dirname, `../src/${item.template}.ejs`),
      filename: `${item.filename}.html`,
      renderField: item.render,
      chunks: [item.filename],
      showErrors: false
    });
  });
  return [...data, ...generate];
};

const box = [
  new HtmlWebpackPlugin({
    title: 'kobo/genre page multiple',
    template: path.join(__dirname, '../src/index.ejs'),
    chunks: ['topPc']
  }),
  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ja|it/),
  new LodashModuleReplacementPlugin()
];

const stats =
  IS_STATS === 'open'
    ? box.push(new BundleAnalyzerPlugin(analyzerConfig))
    : null;

const specificPlugin = flag => {
  if (flag) {
    return renderHTML(box, optimizeArray(preBuildConfig));
  }
  return box;
};

module.exports = Merge(common, {
  mode: 'production',
  entry: isSpecific(IS_SPECIFIC === 'true', BUILD_FILE),
  output: {
    filename: specificOutput(IS_SPECIFIC !== 'true', BUILD_FILE),
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  plugins: specificPlugin(IS_SPECIFIC !== 'true')
});
