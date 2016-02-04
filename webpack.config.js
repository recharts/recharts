var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  output: {
    library: 'Recharts',
    libraryTarget: 'umd',
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: /node_modules/,
      loader: 'babel',
    }],
    resolve: {
      alias: {
        'react': path.resolve(__dirname, './node_modules/react/'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom/'),
        'react-addons-transition-group': path.resolve(__dirname, './node_modules/react-addons-transition-group')
      }
    }
  },

  externals: [{
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }, {
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'ReactDOM',
      commonjs: 'ReactDOM',
      amd: 'ReactDOM'
    }
  }, {
    'react-dom/server': {
      root: 'ReactDOMServer',
      commonjs2: 'ReactDOMServer',
      commonjs: 'ReactDOMServer',
      amd: 'ReactDOMServer'
    }
  }, {
    'react-addons-transition-group': {
      root: 'ReactTransitionGroup',
      commonjs2: 'ReactTransitionGroup',
      commonjs: 'ReactTransitionGroup',
      amd: 'ReactTransitionGroup'
    }
  }],

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    })
  ],
};
