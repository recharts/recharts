"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var RADIAN = exports.RADIAN = Math.PI / 180;

var polarToCartesian = exports.polarToCartesian = function polarToCartesian(cx, cy, radius, angle) {
  return {
    x: cx + Math.cos(-RADIAN * angle) * radius,
    y: cy + Math.sin(-RADIAN * angle) * radius
  };
};

var getMaxRadius = exports.getMaxRadius = function getMaxRadius(width, height) {
  var margin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    top: 0, right: 0, bottom: 0, left: 0
  };
  return Math.min(Math.abs(width - (margin.left || 0) - (margin.right || 0)), Math.abs(height - (margin.left || 0) - (margin.right || 0))) / 2;
};