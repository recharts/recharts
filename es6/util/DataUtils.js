import _get from 'lodash/get';
import _isArray from 'lodash/isArray';
import _isNaN from 'lodash/isNaN';
import _isNumber from 'lodash/isNumber';
import _isString from 'lodash/isString';


export var mathSign = function mathSign(value) {
  if (value === 0) {
    return 0;
  }
  if (value > 0) {
    return 1;
  }

  return -1;
};

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

  if (_isNaN(value)) {
    value = defaultValue;
  }

  if (validate && value > totalValue) {
    value = totalValue;
  }

  return value;
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

export var interpolateNumber = function interpolateNumber(numberA, numberB) {
  if (isNumber(numberA) && isNumber(numberB)) {
    return function (t) {
      return numberA + t * (numberB - numberA);
    };
  }

  return function () {
    return numberB;
  };
};

export var findEntryInArray = function findEntryInArray(ary, specifiedKey, specifiedValue) {
  if (!ary || !ary.length) {
    return null;
  }

  return ary.find(function (entry) {
    return entry && _get(entry, specifiedKey) === specifiedValue;
  });
};

/**
 * The least square linear regression
 * @param {Array} data The array of points
 * @returns {Object} The domain of x, and the parameter of linear function
 */
export var getLinearRegression = function getLinearRegression(data) {
  if (!data || !data.length) {
    return null;
  }

  var len = data.length;
  var xsum = 0;
  var ysum = 0;
  var xysum = 0;
  var xxsum = 0;
  var xmin = Infinity;
  var xmax = -Infinity;

  for (var i = 0; i < len; i++) {
    xsum += data[i].cx;
    ysum += data[i].cy;
    xysum += data[i].cx * data[i].cy;
    xxsum += data[i].cx * data[i].cx;
    xmin = Math.min(xmin, data[i].cx);
    xmax = Math.max(xmax, data[i].cx);
  }

  var a = len * xxsum !== xsum * xsum ? (len * xysum - xsum * ysum) / (len * xxsum - xsum * xsum) : 0;

  return {
    xmin: xmin,
    xmax: xmax,
    a: a,
    b: (ysum - a * xsum) / len
  };
};