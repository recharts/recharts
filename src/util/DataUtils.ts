import isString from 'lodash/isString';
import isNan from 'lodash/isNaN';
import get from 'lodash/get';
import lodashIsNumber from 'lodash/isNumber';

export const mathSign = (value: number) => {
  if (value === 0) {
    return 0;
  }
  if (value > 0) {
    return 1;
  }

  return -1;
};

export const isPercent = (value: string | number): value is `${number}%` =>
  isString(value) && value.indexOf('%') === value.length - 1;

export const isNumber = (value: unknown): value is number => lodashIsNumber(value) && !isNan(value);

export const isNumOrStr = (value: unknown): value is number | string => isNumber(value as number) || isString(value);

let idCounter = 0;
export const uniqueId = (prefix?: string) => {
  const id = ++idCounter;

  return `${prefix || ''}${id}`;
};

/**
 * Get percent value of a total value
 * @param {number|string} percent A percent
 * @param {number} totalValue     Total value
 * @param {number} defaultValue   The value returned when percent is undefined or invalid
 * @param {boolean} validate      If set to be true, the result will be validated
 * @return {number} value
 */
export const getPercentValue = (percent: number | string, totalValue: number, defaultValue = 0, validate = false) => {
  if (!isNumber(percent as number) && !isString(percent)) {
    return defaultValue;
  }

  let value: number;

  if (isPercent(percent)) {
    const index = percent.indexOf('%');
    value = (totalValue * parseFloat((percent as string).slice(0, index))) / 100;
  } else {
    value = +percent;
  }

  if (isNan(value)) {
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
  if (!Array.isArray(ary)) {
    return false;
  }

  const len = ary.length;
  const cache: Record<string, boolean> = {};

  for (let i = 0; i < len; i++) {
    if (!cache[ary[i]]) {
      cache[ary[i]] = true;
    } else {
      return true;
    }
  }

  return false;
};

/* @todo consider to rename this function into `getInterpolator` */
export const interpolateNumber = (numberA: number, numberB: number) => {
  if (isNumber(numberA) && isNumber(numberB)) {
    return (t: number) => numberA + t * (numberB - numberA);
  }

  return () => numberB;
};

export function findEntryInArray<T>(
  ary: Array<T>,
  specifiedKey: number | string | ((entry: T) => unknown),
  specifiedValue: unknown,
) {
  if (!ary || !ary.length) {
    return null;
  }

  return ary.find(
    entry =>
      entry && (typeof specifiedKey === 'function' ? specifiedKey(entry) : get(entry, specifiedKey)) === specifiedValue,
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

/**
 * Compare values.
 *
 * This function is intended to be passed to `Array.prototype.sort()`. It properly compares generic homogeneous arrays that are either `string[]`,
 * `number[]`, or `Date[]`. When comparing heterogeneous arrays or homogeneous arrays of other types, it will attempt to compare items properly but
 * will fall back to string comparison for mismatched or unsupported types.
 *
 * For some background, `Array.prototype.sort()`'s default comparator coerces each of the array's items into a string and compares the strings. This
 * often leads to undesirable behavior, especially with numerical items.
 *
 * @param {unknown} a The first item to compare
 * @param {unknown} b The second item to compare
 * @return {number} A negative number if a < b, a positive number if a > b, 0 if equal
 */
export const compareValues = (a: unknown, b: unknown): number => {
  if (isNumber(a) && isNumber(b)) {
    return a - b;
  }
  if (isString(a) && isString(b)) {
    return a.localeCompare(b);
  }
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() - b.getTime();
  }
  return String(a).localeCompare(String(b));
};
