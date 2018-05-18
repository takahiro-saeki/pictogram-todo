const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  context: path.resolve(__dirname, './src'),
  performance: {
    hints: false
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  cache: true,
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory'
      }
    ]
  }
};
