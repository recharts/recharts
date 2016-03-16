var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var env = process.env.NODE_ENV

var config = {
  entry: './src/index.js',

  output: {
    library: 'Recharts',
    libraryTarget: 'umd',
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
    }],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      path.resolve('./src'),
      'node_modules'
    ],
    mainFields: ['jsnext:main', 'main'],
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      'react-addons-transition-group': path.resolve(__dirname, './node_modules/react-addons-transition-group'),
    }
  },

  externals: {
    "react": {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': 'ReactDOM',
    'react-dom/server': 'ReactDOMServer',
    'react-addons-transition-group': 'ReactTransitionGroup',
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
};

if (env === 'production') {
  config.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    })
  );
}

module.exports = config;
