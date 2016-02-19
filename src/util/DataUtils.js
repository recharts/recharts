import _ from 'lodash';

/**
 * Get percent value of a total value
 * @param {Number|String} percent A percent
 * @param {Number} totalValue     Total value
 * @param {NUmber} defaultValue   The value returned when percent is undefined or invalid
 * @return {Number} value
 */
export const getPercentValue = (percent, totalValue, defaultValue = 0) => {
  if (!_.isNumber(percent) && !_.isString(percent)) {
    return defaultValue;
  }

  const str = percent.toString();
  const index = str.indexOf('%');
  let value;

  if (index > 0) {
    value = totalValue * parseFloat(str.slice(0, index)) / 100;
  } else if (percent === +percent) {
    value = percent;
  }

  if (isNaN(value) || value > totalValue) {
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
}
