var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  context: __dirname,
  devtool: '#inline-source-map',
  entry: [
    './index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],
  resolve: {
    alias: {
      recharts: path.join(__dirname, '..', 'src/index.js'),
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: [
        __dirname,
        path.join(__dirname, '..', 'src'),
      ],
    }],
  },
};
