var path = require('path');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var env = process.env.NODE_ENV;

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
      include: [
        path.resolve(__dirname, 'src'),
      ],
      loader: 'babel-loader',
      query: {
        plugins: ['lodash'],
      },
    }],
  },

  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-transition-group':
          path.resolve(__dirname, './node_modules/react-transition-group'),
    },
  },

  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-transition-group': {
      root: ['ReactTransitionGroup'],
      commonjs2: 'react-transition-group',
      commonjs: 'react-transition-group',
      amd: 'react-transition-group',
    },
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-types',
      amd: 'prop-types',
    },
  },

  plugins: [
    new LodashModuleReplacementPlugin({
      collections: true,
      shorthands: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
};

if (env === 'analyse') {
  config.plugins.push(
    new BundleAnalyzerPlugin()
  );
}

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    })
  );
}

module.exports = config;
