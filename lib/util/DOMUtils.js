'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateChartCoordinate = exports.getOffset = exports.getStringSize = exports.getStyleString = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ReactUtils = require('./ReactUtils');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var stringCache = {
  widthCache: {},
  cacheCount: 0
};
var MAX_CACHE_NUM = 2000;
var SPAN_STYLE = {
  position: 'absolute',
  top: '-20000px',
  left: 0,
  padding: 0,
  margin: 0,
  border: 'none',
  whiteSpace: 'pre'
};
var STYLE_LIST = ['minWidth', 'maxWidth', 'width', 'minHeight', 'maxHeight', 'height', 'top', 'left', 'fontSize', 'lineHeight', 'padding', 'margin', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom'];
var MEASUREMENT_SPAN_ID = 'recharts_measurement_span';

function autoCompleteStyle(name, value) {
  if (STYLE_LIST.indexOf(name) >= 0 && value === +value) {
    return value + 'px';
  }

  return value;
}

function camelToMiddleLine(text) {
  var strs = text.split('');

  var formatStrs = strs.reduce(function (result, entry) {
    if (entry === entry.toUpperCase()) {
      return [].concat(_toConsumableArray(result), ['-', entry.toLowerCase()]);
    }

    return [].concat(_toConsumableArray(result), [entry]);
  }, []);

  return formatStrs.join('');
}

var getStyleString = exports.getStyleString = function getStyleString(style) {
  return Object.keys(style).reduce(function (result, s) {
    return '' + result + camelToMiddleLine(s) + ':' + autoCompleteStyle(s, style[s]) + ';';
  }, '');
};

var getStringSize = exports.getStringSize = function getStringSize(text) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (text === undefined || text === null || (0, _ReactUtils.isSsr)()) {
    return { width: 0, height: 0 };
  }

  var str = '' + text;
  var styleString = getStyleString(style);
  var cacheKey = str + '-' + styleString;

  if (stringCache.widthCache[cacheKey]) {
    return stringCache.widthCache[cacheKey];
  }

  try {
    var measurementSpan = document.getElementById(MEASUREMENT_SPAN_ID);
    if (!measurementSpan) {
      measurementSpan = document.createElement('span');
      measurementSpan.setAttribute('id', MEASUREMENT_SPAN_ID);
      document.body.appendChild(measurementSpan);
    }
    // Need to use CSS Object Model (CSSOM) to be able to comply with Content Security Policy (CSP)
    // https://en.wikipedia.org/wiki/Content_Security_Policy
    var measurementSpanStyle = _extends({}, SPAN_STYLE, style);
    Object.keys(measurementSpanStyle).map(function (styleKey) {
      measurementSpan.style[styleKey] = measurementSpanStyle[styleKey];
      return styleKey;
    });

    measurementSpan.textContent = str;

    var rect = measurementSpan.getBoundingClientRect();
    var result = { width: rect.width, height: rect.height };

    stringCache.widthCache[cacheKey] = result;

    if (++stringCache.cacheCount > MAX_CACHE_NUM) {
      stringCache.cacheCount = 0;
      stringCache.widthCache = {};
    }

    return result;
  } catch (e) {
    return { width: 0, height: 0 };
  }
};

var getOffset = exports.getOffset = function getOffset(el) {
  var html = el.ownerDocument.documentElement;
  var box = { top: 0, left: 0 };

  // If we don't have gBCR, just use 0,0 rather than error
  // BlackBerry 5, iOS 3 (original iPhone)
  if (typeof el.getBoundingClientRect !== 'undefined') {
    box = el.getBoundingClientRect();
  }

  return {
    top: box.top + window.pageYOffset - html.clientTop,
    left: box.left + window.pageXOffset - html.clientLeft
  };
};

/**
 * Calculate coordinate of cursor in chart
 * @param  {Object} event  Event object
 * @param  {Object} offset The offset of main part in the svg element
 * @return {Object}        {chartX, chartY}
 */
var calculateChartCoordinate = exports.calculateChartCoordinate = function calculateChartCoordinate(event, offset) {
  return {
    chartX: Math.round(event.pageX - offset.left),
    chartY: Math.round(event.pageY - offset.top)
  };
};