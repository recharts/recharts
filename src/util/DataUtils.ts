import { get } from 'es-toolkit/compat';

export const mathSign = (value: number) => {
  if (value === 0) {
    return 0;
  }
  if (value > 0) {
    return 1;
  }

  return -1;
};

export const isNan = (value: unknown): boolean => {
  // eslint-disable-next-line eqeqeq
  return typeof value == 'number' && value != +value;
};

export const isPercent = (value: string | number): value is `${number}%` =>
  typeof value === 'string' && value.indexOf('%') === value.length - 1;

export const isNumber = (value: unknown): value is number =>
  (typeof value === 'number' || value instanceof Number) && !isNan(value);

export const isNumOrStr = (value: unknown): value is number | string => isNumber(value) || typeof value === 'string';

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
  if (!isNumber(percent) && typeof percent !== 'string') {
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

export const hasDuplicate = (ary: ReadonlyArray<unknown>): boolean => {
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

/* @todo this function returns a function that is called immediately in all use-cases, make it just return the number and skip the anonymous function step */
export const interpolateNumber = (numberA: number, numberB: number) => {
  if (isNumber(numberA) && isNumber(numberB)) {
    return (t: number) => numberA + t * (numberB - numberA);
  }

  return () => numberB;
};

export function findEntryInArray<T>(
  ary: ReadonlyArray<T>,
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
export const getLinearRegression = (data: ReadonlyArray<{ cx?: number; cy?: number }>) => {
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
 * Checks if the value is null or undefined
 * @param {any} value The value to check
 * @returns {boolean} true if the value is null or undefined
 */
export const isNullish = (value: any): boolean => {
  return value === null || typeof value === 'undefined';
};

/**
 *Uppercase the first letter of a string
 * @param {string} value The string to uppercase
 * @returns {string} The uppercased string
 */
export const upperFirst = (value: string): string => {
  if (isNullish(value)) {
    return value;
  }

  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
};
