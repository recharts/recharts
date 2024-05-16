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
    library: 'Recharts',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, '/node_modules/victory-vendor')],
        loader: 'babel-loader',
      },
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
      amd: 'react-dom',
    },
    'react-is': {
      root: 'ReactIs',
      commonjs2: 'react-is',
      commonjs: 'react-is',
      amd: 'react-is',
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

if (env === 'production') {
  config.mode = 'production';
  config.optimization = {
    minimize: true,
    minimizer: [new TerserPlugin()],
  };
}

if (env === 'analyse') {
  config.plugins.push(new BundleAnalyzerPlugin());
} else {
  config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false }));
}

module.exports = config;
