const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');

const env = process.env.NODE_ENV;

const config = {
  devtool: 'source-map',

  entry: './src/index.ts',

  output: {
    filename: 'Recharts.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, '/node_modules/d3-scale'),
          path.resolve(__dirname, '/node_modules/d3-array'),
          path.resolve(__dirname, '/node_modules/d3-format'),
          path.resolve(__dirname, '/node_modules/d3-time-format'),
          path.resolve(__dirname, '/node_modules/d3-time'),
          path.resolve(__dirname, '/node_modules/d3-shape'),
          path.resolve(__dirname, '/node_modules/d3-color'),
          path.resolve(__dirname, '/node_modules/d3-interpolate'),
          path.resolve(__dirname, '/node_modules/d3-path'),
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'ts-loader',
      }
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },

  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-types',
      amd: 'prop-types',
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
      __DEV__: false,
      __DEVTOOLS__: false,
    }),
  ],
};

if (env === 'analyse') {
  config.plugins.push(
    new BundleAnalyzerPlugin()
  );
}

if (env === 'production') {
  config.mode = 'production';
  config.optimization = {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ],
  };
}

module.exports = config;
