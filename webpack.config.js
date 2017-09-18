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
      'react-addons-transition-group':
          path.resolve(__dirname, './node_modules/react-addons-transition-group'),
    },
  },

  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-addons-transition-group': {
      root: ['React', 'addons', 'TransitionGroup'],
      commonjs2: 'react-addons-transition-group',
      commonjs: 'react-addons-transition-group',
      amd: 'react-addons-transition-group',
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
