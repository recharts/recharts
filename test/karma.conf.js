// Karma configuration
// Generated on Wed Mar 18 2015 11:41:18 GMT+0800 (CST)

'use strict';

const path = require('path');

module.exports = function config(config) {

  config.set({
    singleRun: !!process.env.RELEASE,

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'test/index.js', included: true, watched: false },
    ],

    // list of files to exclude
    exclude: [
      'test/coverage/**',
      'lib/**',
      'node_modules/',
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/index.js': ['webpack', 'sourcemap'],
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [{
          test: /\.(js|ts|tsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ],
              plugins: [
                '@babel/transform-runtime'
              ]
            }
          },
          exclude: /node_modules/,
          include: [
            __dirname,
            path.join(__dirname, '..', 'src'),
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
        }, {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          include: [
            path.resolve(__dirname, 'src'),
          ],
          use: {
            loader: 'ts-loader',
          }
        }],
      },
      externals: {
        jsdom: 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/addons': 'react',
        'react/lib/ReactContext': 'window',
        'text-encoding': 'window',
        'react-addons-test-utils': 'react-dom'
      },
      resolve: {
        alias: {
          sinon: 'sinon/pkg/sinon',
          recharts: path.resolve('src/index.ts'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-coverage',
      'karma-chai',
      'karma-sourcemap-loader',
      'karma-firefox-launcher',
      'karma-chrome-launcher',
      'karma-coveralls',
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'coveralls'],

    coverageReporter: {
      dir: 'test',
      reporters: [{
        type: 'html',
        subdir: 'coverage',
      }, {
        type: 'text',
      }, {
        type: 'lcov',
        subdir: 'coverage',
      }],
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      stats: 'errors-only',
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
    // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    browserNoActivityTimeout: 60000,
  });
};
