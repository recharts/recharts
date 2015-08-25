var webpack = require('webpack');
var path = require('path');
var glob = require("glob");
var entries = glob.sync(path.resolve('./demo/**/**/app.js'))
                  .reduce(function(result, item) {
                    result[item.replace(path.resolve('./') + '/', '').replace(/\.js?$/, '')] = item;

                    console.log(result);
                    return result;
                  }, {});

entries.chart = './index.js';


module.exports = function(watch) {
  var DEBUG = !!watch ? true : false;
  var environment = DEBUG ? 'development' : 'production';

  return {
    entry: entries,

    output: {
      path: path.join(__dirname, 'watch/js'),
      filename: '[name].js',
      library: 'chart',
      libraryTarget: 'umd'
    },

    watch: DEBUG,
    cache: DEBUG,
    debug: DEBUG,
    devtool: DEBUG ? '#inline-source-map' : false,

    externals: [
      {
        'react': {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react'
        }
      }
    ],

    module: {
      preLoaders: [
        {
          test: /\.js$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        }
      ],
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          query: {
            stage: 0,
            loose: 'all'
          },
          exclude: /node_modules/
        }
      ],
      noParse: [
        path.resolve('node_modules/react')
        /*
        path.resolve('node_modules/react-draggable2')
        */
      ]
    },

    stats: {
      colors: true,
      reasons: DEBUG,
      chunks: !DEBUG
    },

    resolve: {
      extensions: ['', '.js', '.jsx']
    },

    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(environment)
        }
      })
    ].concat(DEBUG ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.AggressiveMergingPlugin()
    ])
  };
};
