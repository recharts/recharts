const path = require('path');
const {LoaderOptionsPlugin} = require('webpack');

module.exports = {
  mode: 'development',
  context: __dirname,
  devtool: 'inline-source-map',
  entry: [
    './index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [
    new LoaderOptionsPlugin({
      debug: true
    })
  ],
  resolve: {
    alias: {
      recharts: path.join(__dirname, '..', 'src/index.ts'),
    },
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [{
      test: /\.(js|ts|tsx)$/,
      use: { loader: 'babel-loader' },
      include: [
        __dirname,
        path.join(__dirname, '..', 'src'),
      ],
    }, {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      use: {
        loader: 'ts-loader',
      }
    }],
  },
};
