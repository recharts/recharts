/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',

  devtool: 'source-map',
  entry: {
    app: './src/app',
  },

  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules/react-monaco-editor/src')],
        use: ['babel-loader'],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader',
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
        include: [path.resolve(__dirname, 'node_modules/monaco-editor')],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [
                  path.resolve(__dirname, './src/styles'),
                  path.resolve(__dirname, './node_module/simple-line-icons/sass'),
                ],
              },
            },
          },
        ],
      },
    ],
  },

  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
      components: path.join(__dirname, './src/components'),
      layouts: path.join(__dirname, './src/layouts'),
      views: path.join(__dirname, './src/views'),
      utils: path.join(__dirname, './src/utils'),
      styles: path.join(__dirname, './src/styles'),
      docs: path.join(__dirname, './src/docs'),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEV__: false,
      __DEVTOOLS__: false,
    }),
    new MonacoWebpackPlugin({
      languages: ['javascript', 'typescript'],
      features: ['!gotoSymbol'],
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};
