var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  debug: true,
  devtool: '#inline-source-map',
  entry: [
    './index.js',
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
  ],
  resolve: {
    alias: {
      'recharts': path.join(__dirname, '..', 'src/index.js'),
    },
    extensions: ['', '.js'],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel-loader'],
      include: [
        __dirname,
        path.join(__dirname, '..', 'src'),
      ],
    }],
  },
};
