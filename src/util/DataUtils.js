import _ from 'lodash';

export const mathSign = (value) => {
  if (value === 0) { return 0; }
  if (value > 0) { return 1; }

  return -1;
};

export const isPercent = value => (
  _.isString(value) && value.indexOf('%') === value.length - 1
);

export const isNumber = value => (
  _.isNumber(value) && !_.isNaN(value)
);

export const isNumOrStr = value => (
  isNumber(value) || _.isString(value)
);

let idCounter = 0;
export const uniqueId = (prefix) => {
  const id = ++idCounter;

  return `${prefix || ''}${id}`;
};
/**
 * Get percent value of a total value
 * @param {Number|String} percent A percent
 * @param {Number} totalValue     Total value
 * @param {NUmber} defaultValue   The value returned when percent is undefined or invalid
 * @param {Boolean} validate      If set to be true, the result will be validated
 * @return {Number} value
 */
export const getPercentValue = (percent, totalValue, defaultValue = 0, validate = false) => {
  if (!isNumber(percent) && !_.isString(percent)) {
    return defaultValue;
  }

  let value;

  if (isPercent(percent)) {
    const index = percent.indexOf('%');
    value = totalValue * parseFloat(percent.slice(0, index)) / 100;
  } else {
    value = +percent;
  }

  if (_.isNaN(value)) {
    value = defaultValue;
  }

  if (validate && value > totalValue) {
    value = totalValue;
  }

  return value;
};

export const getAnyElementOfObject = (obj) => {
  if (!obj) { return null; }

  const keys = Object.keys(obj);

  if (keys && keys.length) {
    return obj[keys[0]];
  }

  return null;
};

export const hasDuplicate = (ary) => {
  if (!_.isArray(ary)) { return false; }

  const len = ary.length;
  const cache = {};

  for (let i = 0; i < len; i++) {
    if (!cache[ary[i]]) {
      cache[ary[i]] = true;
    } else {
      return true;
    }
  }

  return false;
};

export const interpolateNumber = (numberA, numberB) => {
  if (isNumber(numberA) && isNumber(numberB)) {
    return t => (numberA + t * (numberB - numberA));
  }

  return () => numberB;
};

export const findEntryInArray = (ary, specifiedKey, specifiedValue) => {
  if (!ary || !ary.length) { return null; }

  return ary.find(entry => (
    entry &&
    (typeof specifiedKey === 'function' ? specifiedKey(entry) : _.get(entry, specifiedKey)) === specifiedValue
  ));
};

/**
 * The least square linear regression
 * @param {Array} data The array of points
 * @returns {Object} The domain of x, and the parameter of linear function
 */
export const getLinearRegression = (data) => {
  if (!data || !data.length) { return null; }

  const len = data.length;
  let xsum = 0;
  let ysum = 0;
  let xysum = 0;
  let xxsum = 0;
  let xmin = Infinity;
  let xmax = -Infinity;

  for (let i = 0; i < len; i++) {
    xsum += data[i].cx;
    ysum += data[i].cy;
    xysum += data[i].cx * data[i].cy;
    xxsum += data[i].cx * data[i].cx;
    xmin = Math.min(xmin, data[i].cx);
    xmax = Math.max(xmax, data[i].cx);
  }

  const a = len * xxsum !== xsum * xsum ?
    ((len * xysum - xsum * ysum) / (len * xxsum - xsum * xsum)) : 0;

  return {
    xmin,
    xmax,
    a,
    b: (ysum - a * xsum) / len,
  };
};
