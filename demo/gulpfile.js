'use strict';

var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')();
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

gulp.task('setWatch', function () {
  global.isWatching = true;
});

gulp.task('watch', ['cleanWatch', 'setWatch', 'bundle'], function () {
});

gulp.task('cleanWatch', function (cb) {
  del(['watch'], { force: true }, cb);
});

gulp.task('clean', function (cb) {
  del(['dist/**/*'], { 'dot': true }, cb);
});

gulp.task('build', ['clean', 'bundle']);

gulp.task('bundle', function (cb) {
  var config = webpackConfig(global.isWatching);

  webpack(config, function (err, stats) {
    if (err) { $.util.PluginError('webpack:build', err); }

    $.util.log('[webpack:build]', stats.toString(config.stats));
  });
});

gulp.task('default', ['watch']);

