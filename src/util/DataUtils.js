import _ from 'lodash';

export const isPercent = (value) => (
  _.isString(value) && value.indexOf('%') === value.length - 1
);
/**
 * Get percent value of a total value
 * @param {Number|String} percent A percent
 * @param {Number} totalValue     Total value
 * @param {NUmber} defaultValue   The value returned when percent is undefined or invalid
 * @param {Boolean} validate      If set to be true, the result will be validated
 * @return {Number} value
 */
export const getPercentValue = (percent, totalValue, defaultValue = 0, validate = false) => {
  if (!_.isNumber(percent) && !_.isString(percent)) {
    return defaultValue;
  }

  let value;

  if (isPercent(percent)) {
    const index = percent.indexOf('%');
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

export const parseSpecifiedDomain = (specifiedDomain, dataDomain) => {
  if (!_.isArray(specifiedDomain)) {
    return dataDomain;
  }

  const domain = [];

  if (!_.isNumber(specifiedDomain[0]) || specifiedDomain[0] > dataDomain[0]) {
    domain[0] = dataDomain[0];
  } else {
    domain[0] = specifiedDomain[0];
  }

  if (!_.isNumber(specifiedDomain[1]) || specifiedDomain[1] < dataDomain[1]) {
    domain[1] = dataDomain[1];
  } else {
    domain[1] = specifiedDomain[1];
  }

  return domain;
};

export const validateCoordinateInRange = (coordinate, scale) => {
  if (!scale) { return false; }

  const range = scale.range();
  const first = range[0];
  const last = range[range.length - 1];
  const isValidate = first <= last ?
    (coordinate >= first && coordinate <= last) :
    (coordinate >= last && coordinate <= first);

  return isValidate;
};

/**
 * Calculate the size between two category
 * @param  {Function} scale Scale function
 * @return {Number} Size
 */
export const getBandSizeOfScale = (scale) => {
  if (scale && scale.bandwidth) {
    return scale.bandwidth();
  }
  return 0;
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

  for (let i = 0; i < len; i++ ) {
    if (cache[ary[i]]) {
      return true;
    } else {
      cache[ary[i]] = true;
    }
  }

  return false;
}
