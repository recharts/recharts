import _ from 'lodash';

export const mathSign = (value: number) => {
  if (value === 0) {
    return 0;
  }
  if (value > 0) {
    return 1;
  }

  return -1;
};

export const isPercent = (value: string | number) => _.isString(value) && value.indexOf('%') === value.length - 1;

export const isNumber = (value: any) => _.isNumber(value) && !_.isNaN(value);

export const isNumOrStr = (value: any) => isNumber(value as number) || _.isString(value);

let idCounter = 0;
export const uniqueId = (prefix?: string) => {
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
export const getPercentValue = (percent: number | string, totalValue: number, defaultValue = 0, validate = false) => {
  if (!isNumber(percent as number) && !_.isString(percent)) {
    return defaultValue;
  }

  let value;

  if (isPercent(percent as string)) {
    const index = (percent as string).indexOf('%');
    value = (totalValue * parseFloat((percent as string).slice(0, index))) / 100;
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

export const getAnyElementOfObject = (obj: any) => {
  if (!obj) {
    return null;
  }

  const keys = Object.keys(obj);

  if (keys && keys.length) {
    return obj[keys[0]];
  }

  return null;
};

export const hasDuplicate = (ary: Array<any>) => {
  if (!_.isArray(ary)) {
    return false;
  }

  const len = ary.length;
  const cache: Record<string, any> = {};

  for (let i = 0; i < len; i++) {
    if (!cache[ary[i]]) {
      cache[ary[i]] = true;
    } else {
      return true;
    }
  }

  return false;
};

export const interpolateNumber = (numberA: number, numberB: number) => {
  if (isNumber(numberA) && isNumber(numberB)) {
    return (t: number) => numberA + t * (numberB - numberA);
  }

  return () => numberB;
};

export function findEntryInArray<T>(
  ary: Array<T>,
  specifiedKey: number | string | ((entry: T) => unknown),
  specifiedValue: any,
) {
  if (!ary || !ary.length) {
    return null;
  }

  return ary.find(
    entry =>
      entry &&
      (typeof specifiedKey === 'function' ? specifiedKey(entry) : _.get(entry, specifiedKey)) === specifiedValue,
  );
}

/**
 * The least square linear regression
 * @param {Array} data The array of points
 * @returns {Object} The domain of x, and the parameter of linear function
 */
export const getLinearRegression = (data: Array<{ cx?: number; cy?: number }>) => {
  if (!data || !data.length) {
    return null;
  }

  const len = data.length;
  let xsum = 0;
  let ysum = 0;
  let xysum = 0;
  let xxsum = 0;
  let xmin = Infinity;
  let xmax = -Infinity;
  let xcurrent = 0;
  let ycurrent = 0;

  for (let i = 0; i < len; i++) {
    xcurrent = data[i].cx || 0;
    ycurrent = data[i].cy || 0;

    xsum += xcurrent;
    ysum += ycurrent;
    xysum += xcurrent * ycurrent;
    xxsum += xcurrent * xcurrent;
    xmin = Math.min(xmin, xcurrent);
    xmax = Math.max(xmax, xcurrent);
  }

  const a = len * xxsum !== xsum * xsum ? (len * xysum - xsum * ysum) / (len * xxsum - xsum * xsum) : 0;

  return {
    xmin,
    xmax,
    a,
    b: (ysum - a * xsum) / len,
  };
};
