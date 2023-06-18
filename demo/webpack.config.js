const path = require('path');
const { LoaderOptionsPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  devServer: { allowedHosts: 'all'},
  context: __dirname,
  devtool: 'inline-source-map',
  entry: ['./index.tsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [
    new LoaderOptionsPlugin({
      debug: true,
    }),
  ],
  resolve: {
    alias: {
      recharts: path.join(__dirname, '..', 'src/index.ts'),
    },
    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
        include: [
          __dirname,
          path.join(__dirname, '..', 'src'),
          path.resolve(__dirname, '/node_modules/victory-vendor'),
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src')],
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
};
