import _get from 'lodash/get';
import _isNil from 'lodash/isNil';
import _isFunction from 'lodash/isFunction';
import _sortBy from 'lodash/sortBy';
import _isArray from 'lodash/isArray';
import _isNaN from 'lodash/isNaN';
import _isNumber from 'lodash/isNumber';
import _isString from 'lodash/isString';

import * as d3Scales from 'd3-scale';

export var isPercent = function isPercent(value) {
  return _isString(value) && value.indexOf('%') === value.length - 1;
};

export var isNumber = function isNumber(value) {
  return _isNumber(value) && !_isNaN(value);
};

export var isNumOrStr = function isNumOrStr(value) {
  return isNumber(value) || _isString(value);
};

var idCounter = 0;
export var uniqueId = function uniqueId(prefix) {
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
export var getPercentValue = function getPercentValue(percent, totalValue) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var validate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!isNumber(percent) && !_isString(percent)) {
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

export var parseSpecifiedDomain = function parseSpecifiedDomain(specifiedDomain, dataDomain, allowDataOverflow) {
  if (!_isArray(specifiedDomain)) {
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

export var validateCoordinateInRange = function validateCoordinateInRange(coordinate, scale) {
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
export var getBandSizeOfAxis = function getBandSizeOfAxis(axis, ticks) {
  if (axis && axis.type === 'category' && axis.scale && axis.scale.bandwidth) {
    return axis.scale.bandwidth();
  }

  if (axis && axis.type === 'number' && ticks) {
    var orderedTicks = _sortBy(ticks, function (o) {
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

export var getAnyElementOfObject = function getAnyElementOfObject(obj) {
  if (!obj) {
    return null;
  }

  var keys = Object.keys(obj);

  if (keys && keys.length) {
    return obj[keys[0]];
  }

  return null;
};

export var hasDuplicate = function hasDuplicate(ary) {
  if (!_isArray(ary)) {
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
export var combineEventHandlers = function combineEventHandlers(defaultHandler, parentHandler, childHandler) {
  var customizedHandler = void 0;

  if (_isFunction(childHandler)) {
    customizedHandler = childHandler;
  } else if (_isFunction(parentHandler)) {
    customizedHandler = parentHandler;
  }

  if (_isFunction(defaultHandler) || customizedHandler) {
    return function (arg1, arg2, arg3, arg4) {
      if (_isFunction(defaultHandler)) {
        defaultHandler(arg1, arg2, arg3, arg4);
      }

      if (_isFunction(customizedHandler)) {
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
export var parseScale = function parseScale(_ref, chartType) {
  var scale = _ref.scale,
      type = _ref.type;

  if (scale === 'auto') {
    if (type === 'category' && chartType && (chartType.indexOf('LineChart') >= 0 || chartType.indexOf('AreaChart') >= 0)) {
      return d3Scales.scalePoint();
    } else if (type === 'category') {
      return d3Scales.scaleBand();
    }

    return d3Scales.scaleLinear();
  } else if (_isString(scale)) {
    var name = 'scale' + scale.slice(0, 1).toUpperCase() + scale.slice(1);

    return (d3Scales[name] || d3Scales.scalePoint)();
  }

  return _isFunction(scale) ? scale : d3Scales.scalePoint();
};

export var getValueByDataKey = function getValueByDataKey(obj, dataKey, defaultValue) {
  if (_isNil(obj) || _isNil(dataKey)) {
    return defaultValue;
  }

  if (isNumOrStr(dataKey)) {
    return _get(obj, dataKey, defaultValue);
  }

  if (_isFunction(dataKey)) {
    return dataKey(obj);
  }

  return defaultValue;
};

export var findPositionOfBar = function findPositionOfBar(barPosition, child) {
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

export var truncateByDomain = function truncateByDomain(value, domain) {
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