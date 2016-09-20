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

const MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([\d]+)$/;
const MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([\d]+)$/;

export const parseSpecifiedDomain = (specifiedDomain, dataDomain, allowDataOverflow) => {
  if (!_.isArray(specifiedDomain)) {
    return dataDomain;
  }
  let domain;
  let domainMin;
  let domainMax;
  const isCategorical = dataDomain.length !== 2;
  const specifiedDomainMin = specifiedDomain[0];
  const dataDomainMin = isCategorical ? 0 : dataDomain[0];
  const specifiedDomainMax = specifiedDomain[1];
  const dataDomainMax = isCategorical ? dataDomain.length - 1 : dataDomain[1];

  if (_.isNumber(specifiedDomainMin)) {
    domainMin = allowDataOverflow ?
      specifiedDomainMin : Math.min(specifiedDomainMin, dataDomainMin);
  } else if (MIN_VALUE_REG.test(specifiedDomainMin)) {
    const value = +MIN_VALUE_REG.exec(specifiedDomainMin)[1];

    domainMin = dataDomainMin - value;
  } else {
    domainMin = dataDomainMin;
  }

  if (_.isNumber(specifiedDomainMax)) {
    domainMax = allowDataOverflow ?
      specifiedDomainMax : Math.max(specifiedDomainMax, dataDomainMax);
  } else if (MAX_VALUE_REG.test(specifiedDomainMax)) {
    const value = +MAX_VALUE_REG.exec(specifiedDomainMax)[1];

    domainMax = dataDomainMax + value;
  } else {
    domainMax = dataDomainMax;
  }

  if (isCategorical) {
    domain = [
      ...(domainMin < dataDomainMin ? _.range(domainMin, dataDomainMin) : []),
      ...(allowDataOverflow ? dataDomain.slice(
        Math.max(domainMin, dataDomainMin),
        Math.min(domainMax, dataDomainMax) + 1
      ) : dataDomain),
      ...(dataDomainMax < domainMax ? _.range(dataDomainMax + 1, domainMax + 1) : []),
    ];
  } else {
    domain = [domainMin, domainMax];
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

/**
 * Returns the index offset for categories. Applicable for domains
 * extending before the first category.
 * @param {Array} domain Domain of the categorical axis.
 * @return {Number} index offset of the data.
 */
export const getCategoryOffsetOfDomain = (domain) => {
  const first = domain[0];
  return _.isNumber(first) ? Math.max(-domain[0], 0) : 0;
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
