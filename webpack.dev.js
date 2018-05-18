const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const WebpackBar = require('webpackbar');
require('dotenv').config();

const devSetting = flag => {
  if (flag) {
    const adultDev = {
      title: 'kobo/genre page multiple',
      template: path.join(__dirname, '../src/adult.ejs'),
      renderField: {
        sideField: 'side-field',
        mainField: 'main-field',
        homeBtn: 'home-btn'
      }
    };
    return adultDev;
  }
  console.log(process.env.SP_POPULAR);
  if (process.env.SP_POPULAR === 'open') {
    const popularDev = {
      title: 'kobo/genre page multiple',
      template: path.join(__dirname, '../src/sp-popularWord.ejs')
    };
    return popularDev;
  }
  const baseDev = {
    title: 'kobo/genre page multiple',
    template: path.join(__dirname, '../src/index.ejs')
  };
  return baseDev;
};

module.exports = Merge(common, {
  mode: 'development',
  entry: ['react-hot-loader/patch', './js/index.js'],
  output: {
    filename: 'app.bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: '#source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true,
    open: true,
    port: 9843,
    inline: true,
    hot: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin(devSetting(process.env.IS_ADULT === 'open')),
    new webpack.DefinePlugin({
      'process.env': {
        IS_ADULT: process.env.IS_ADULT,
        IS_POPULAR: process.env.SP_POPULAR,
        development: "'development'"
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ErrorOverlayPlugin(),
    new WebpackBar()
  ]
});
