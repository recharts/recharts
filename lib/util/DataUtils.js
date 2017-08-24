'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpolateNumber = exports.hasDuplicate = exports.getAnyElementOfObject = exports.getPercentValue = exports.uniqueId = exports.isNumOrStr = exports.isNumber = exports.isPercent = exports.mathSign = undefined;

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isNaN2 = require('lodash/isNaN');

var _isNaN3 = _interopRequireDefault(_isNaN2);

var _isNumber2 = require('lodash/isNumber');

var _isNumber3 = _interopRequireDefault(_isNumber2);

var _isString2 = require('lodash/isString');

var _isString3 = _interopRequireDefault(_isString2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mathSign = exports.mathSign = function mathSign(value) {
  if (value === 0) {
    return 0;
  }
  if (value > 0) {
    return 1;
  }

  return -1;
};

var isPercent = exports.isPercent = function isPercent(value) {
  return (0, _isString3.default)(value) && value.indexOf('%') === value.length - 1;
};

var isNumber = exports.isNumber = function isNumber(value) {
  return (0, _isNumber3.default)(value) && !(0, _isNaN3.default)(value);
};

var isNumOrStr = exports.isNumOrStr = function isNumOrStr(value) {
  return isNumber(value) || (0, _isString3.default)(value);
};

var idCounter = 0;
var uniqueId = exports.uniqueId = function uniqueId(prefix) {
  var id = ++idCounter;

  return '' + (prefix || '') + id;
};
/**
 * Get percent value of a total value
 * @param {Number|String} percent A percent
 * @param {Number} totalValue     Total value
 * @param {NUmber} defaultValue   The value returned when percent is undefined or invalid
 * @param {Boolean} validate      If set to be true, the result will be validated
 * @return {Number} value
 */
var getPercentValue = exports.getPercentValue = function getPercentValue(percent, totalValue) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var validate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!isNumber(percent) && !(0, _isString3.default)(percent)) {
    return defaultValue;
  }

  var value = void 0;

  if (isPercent(percent)) {
    var index = percent.indexOf('%');
    value = totalValue * parseFloat(percent.slice(0, index)) / 100;
  } else {
    value = +percent;
  }

  if (isNaN(value)) {
    value = defaultValue;
  }

  if (validate && value > totalValue) {
    value = totalValue;
  }

  return value;
};

var getAnyElementOfObject = exports.getAnyElementOfObject = function getAnyElementOfObject(obj) {
  if (!obj) {
    return null;
  }

  var keys = Object.keys(obj);

  if (keys && keys.length) {
    return obj[keys[0]];
  }

  return null;
};

var hasDuplicate = exports.hasDuplicate = function hasDuplicate(ary) {
  if (!(0, _isArray3.default)(ary)) {
    return false;
  }

  var len = ary.length;
  var cache = {};

  for (var i = 0; i < len; i++) {
    if (!cache[ary[i]]) {
      cache[ary[i]] = true;
    } else {
      return true;
    }
  }

  return false;
};

var interpolateNumber = exports.interpolateNumber = function interpolateNumber(numberA, numberB) {
  if (isNumber(numberA) && isNumber(numberB)) {
    return function (t) {
      return numberA + t * (numberB - numberA);
    };
  }

  return function () {
    return numberB;
  };
};