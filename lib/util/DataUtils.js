'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.truncateByDomain = exports.findPositionOfBar = exports.getValueByDataKey = exports.checkDomainOfScale = exports.parseScale = exports.combineEventHandlers = exports.hasDuplicate = exports.getAnyElementOfObject = exports.getBandSizeOfAxis = exports.validateCoordinateInRange = exports.parseSpecifiedDomain = exports.getPercentValue = exports.uniqueId = exports.isNumOrStr = exports.isNumber = exports.isPercent = undefined;

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _sortBy2 = require('lodash/sortBy');

var _sortBy3 = _interopRequireDefault(_sortBy2);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isNaN2 = require('lodash/isNaN');

var _isNaN3 = _interopRequireDefault(_isNaN2);

var _isNumber2 = require('lodash/isNumber');

var _isNumber3 = _interopRequireDefault(_isNumber2);

var _isString2 = require('lodash/isString');

var _isString3 = _interopRequireDefault(_isString2);

var _d3Scale = require('d3-scale');

var d3Scales = _interopRequireWildcard(_d3Scale);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([\d]+)$/;
var MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([\d]+)$/;

var parseSpecifiedDomain = exports.parseSpecifiedDomain = function parseSpecifiedDomain(specifiedDomain, dataDomain, allowDataOverflow) {
  if (!(0, _isArray3.default)(specifiedDomain)) {
    return dataDomain;
  }

  var domain = [];

  if (isNumber(specifiedDomain[0])) {
    domain[0] = allowDataOverflow ? specifiedDomain[0] : Math.min(specifiedDomain[0], dataDomain[0]);
  } else if (MIN_VALUE_REG.test(specifiedDomain[0])) {
    var value = +MIN_VALUE_REG.exec(specifiedDomain[0])[1];

    domain[0] = dataDomain[0] - value;
  } else {
    domain[0] = dataDomain[0];
  }

  if (isNumber(specifiedDomain[1])) {
    domain[1] = allowDataOverflow ? specifiedDomain[1] : Math.max(specifiedDomain[1], dataDomain[1]);
  } else if (MAX_VALUE_REG.test(specifiedDomain[1])) {
    var _value = +MAX_VALUE_REG.exec(specifiedDomain[1])[1];

    domain[1] = dataDomain[1] + _value;
  } else {
    domain[1] = dataDomain[1];
  }

  return domain;
};

var validateCoordinateInRange = exports.validateCoordinateInRange = function validateCoordinateInRange(coordinate, scale) {
  if (!scale) {
    return false;
  }

  var range = scale.range();
  var first = range[0];
  var last = range[range.length - 1];
  var isValidate = first <= last ? coordinate >= first && coordinate <= last : coordinate >= last && coordinate <= first;

  return isValidate;
};

/**
 * Calculate the size between two category
 * @param  {Object} axis  The options of axis
 * @param  {Array}  ticks The ticks of axis
 * @return {Number} Size
 */
var getBandSizeOfAxis = exports.getBandSizeOfAxis = function getBandSizeOfAxis(axis, ticks) {
  if (axis && axis.scale && axis.scale.bandwidth) {
    return axis.scale.bandwidth();
  }

  if (axis && ticks && ticks.length >= 2) {
    var orderedTicks = (0, _sortBy3.default)(ticks, function (o) {
      return o.coordinate;
    });
    var bandSize = Infinity;

    for (var i = 1, len = orderedTicks.length; i < len; i++) {
      var cur = orderedTicks[i];
      var prev = orderedTicks[i - 1];

      bandSize = Math.min((cur.coordinate || 0) - (prev.coordinate || 0), bandSize);
    }

    return bandSize === Infinity ? 0 : bandSize;
  }

  return 0;
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
/**
 * combine the handlers
 * @param  {Function} defaultHandler Internal private handler
 * @param  {Function} parentHandler  Handler function specified in parent component
 * @param  {Function} childHandler   Handler function specified in child component
 * @return {Function}                The combined handler
 */
var combineEventHandlers = exports.combineEventHandlers = function combineEventHandlers(defaultHandler, parentHandler, childHandler) {
  var customizedHandler = void 0;

  if ((0, _isFunction3.default)(childHandler)) {
    customizedHandler = childHandler;
  } else if ((0, _isFunction3.default)(parentHandler)) {
    customizedHandler = parentHandler;
  }

  if ((0, _isFunction3.default)(defaultHandler) || customizedHandler) {
    return function (arg1, arg2, arg3, arg4) {
      if ((0, _isFunction3.default)(defaultHandler)) {
        defaultHandler(arg1, arg2, arg3, arg4);
      }

      if ((0, _isFunction3.default)(customizedHandler)) {
        customizedHandler(arg1, arg2, arg3, arg4);
      }
    };
  }

  return null;
};
/**
 * Parse the scale function of axis
 * @param  {String}   options.scale The specified scale type
 * @param  {String}   options.type  The type of axis
 * @param  {String}   chartType     The displayName of chart
 * @return {Function}               The scale funcion
 */
var parseScale = exports.parseScale = function parseScale(_ref, chartType) {
  var scale = _ref.scale,
      type = _ref.type;

  if (scale === 'auto') {
    if (type === 'category' && chartType && (chartType.indexOf('LineChart') >= 0 || chartType.indexOf('AreaChart') >= 0)) {
      return d3Scales.scalePoint();
    } else if (type === 'category') {
      return d3Scales.scaleBand();
    }

    return d3Scales.scaleLinear();
  } else if ((0, _isString3.default)(scale)) {
    var name = 'scale' + scale.slice(0, 1).toUpperCase() + scale.slice(1);

    return (d3Scales[name] || d3Scales.scalePoint)();
  }

  return (0, _isFunction3.default)(scale) ? scale : d3Scales.scalePoint();
};
var EPS = 1e-4;
var checkDomainOfScale = exports.checkDomainOfScale = function checkDomainOfScale(scale) {
  var domain = scale.domain();

  if (!domain || domain.length <= 2) {
    return;
  }

  var len = domain.length;
  var range = scale.range();
  var min = Math.min(range[0], range[1]) - EPS;
  var max = Math.max(range[0], range[1]) + EPS;
  var first = scale(domain[0]);
  var last = scale(domain[len - 1]);

  if (first < min || first > max || last < min || last > max) {
    scale.domain([domain[0], domain[len - 1]]);
  }
};

var getValueByDataKey = exports.getValueByDataKey = function getValueByDataKey(obj, dataKey, defaultValue) {
  if ((0, _isNil3.default)(obj) || (0, _isNil3.default)(dataKey)) {
    return defaultValue;
  }

  if (isNumOrStr(dataKey)) {
    return (0, _get3.default)(obj, dataKey, defaultValue);
  }

  if ((0, _isFunction3.default)(dataKey)) {
    return dataKey(obj);
  }

  return defaultValue;
};

var findPositionOfBar = exports.findPositionOfBar = function findPositionOfBar(barPosition, child) {
  if (!barPosition) {
    return null;
  }

  for (var i = 0, len = barPosition.length; i < len; i++) {
    if (barPosition[i].item === child) {
      return barPosition[i].position;
    }
  }

  return null;
};

var truncateByDomain = exports.truncateByDomain = function truncateByDomain(value, domain) {
  if (!domain || domain.length !== 2 || !isNumber(domain[0]) || !isNumber(domain[1])) {
    return value;
  }

  var min = Math.min(domain[0], domain[1]);
  var max = Math.max(domain[0], domain[1]);

  var result = [value[0], value[1]];
  if (!isNumber(value[0]) || value[0] < min) {
    result[0] = min;
  }

  if (!isNumber(value[1]) || value[1] > max) {
    result[1] = max;
  }

  if (result[0] > max) {
    result[0] = max;
  }

  if (result[1] < min) {
    result[1] = min;
  }

  return result;
};