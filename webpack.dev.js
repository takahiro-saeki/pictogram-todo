const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const WebpackBar = require('webpackbar');

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
        new HtmlWebpackPlugin({
            title: 'kobo/genre page multiple',
            template: path.join(__dirname, './index.ejs')
        }),
        new webpack.DefinePlugin({
            'process.env': {
                development: '\'development\''
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ErrorOverlayPlugin(),
        new WebpackBar()
    ]
});
