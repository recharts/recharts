/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',

  entry: {
    app: './src/app',
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/static/',
  },

  devServer: {
    hot: true,
    port: 4000,
    host: '127.0.0.1',
    historyApiFallback: true,
    devMiddleware: {
      index: true,
    },
    static: true,
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
          'style-loader',
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
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
      __DEVTOOLS__: true,
    }),
    new MonacoWebpackPlugin({ languages: ['javascript', 'typescript'] }),
    new HtmlWebpackPlugin({ template: path.join(__dirname, 'public', 'index.html') }),
  ],
};
