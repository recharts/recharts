import get from 'es-toolkit/compat/get';
import { NonEmptyArray, Percent } from './types';
import { round } from './round';

export const mathSign = (value: number) => {
  if (value === 0) {
    return 0;
  }
  if (value > 0) {
    return 1;
  }

  return -1;
};

export const isNan = (value: unknown): value is number => {
  // eslint-disable-next-line eqeqeq
  return typeof value == 'number' && value != +value;
};

/**
 * Checks if the value is a percent string.
 * A valid percent string must end with '%' and have at least one character before the '%'.
 *
 * @param {string | number | undefined} value The value to check
 * @returns {boolean} true if the value is a percent string
 */
export const isPercent = (value: string | number | undefined): value is Percent =>
  typeof value === 'string' && value.length > 1 && value.indexOf('%') === value.length - 1;

export const isNumber = (value: unknown): value is number =>
  (typeof value === 'number' || value instanceof Number) && !isNan(value);

export const isNumOrStr = (value: unknown): value is number | string => isNumber(value) || typeof value === 'string';

let idCounter = 0;
export const uniqueId = (prefix?: string) => {
  const id = ++idCounter;

  return `${prefix || ''}${id}`;
};

/**
 * Calculates the numeric value represented by a percent string or number, based on a total value.
 *
 * - If `percent` is not a number or string, returns `defaultValue`.
 * - If `percent` is a percent string but `totalValue` is null/undefined, returns `defaultValue`.
 * - If the result is NaN, returns `defaultValue`.
 * - If `validate` is true and the result exceeds `totalValue`, returns `totalValue`.
 *
 * @param percent - The percent value to convert. Can be a number (e.g. 25) or a string ending with '%' (e.g. '25%').
 *                  If a string, it must end with '%' to be treated as a percent; otherwise, it is parsed as a number.
 * @param totalValue - The total value to calculate the percent of. Required if `percent` is a percent string.
 * @param defaultValue - The value returned if `percent` is undefined, invalid, or cannot be converted to a number.
 * @param validate - If true, ensures the result does not exceed `totalValue` (when provided).
 * @returns The calculated value, or `defaultValue` for invalid input.
 */
export const getPercentValue = (
  percent: number | string | undefined,
  totalValue: number | undefined,
  defaultValue = 0,
  validate = false,
) => {
  if (!isNumber(percent) && typeof percent !== 'string') {
    return defaultValue;
  }

  let value: number;

  if (isPercent(percent)) {
    if (totalValue == null) {
      return defaultValue;
    }
    const index = percent.indexOf('%');
    value = (totalValue * parseFloat((percent as string).slice(0, index))) / 100;
  } else {
    value = +percent;
  }

  if (isNan(value)) {
    value = defaultValue;
  }

  if (validate && totalValue != null && value > totalValue) {
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
    if (!cache[String(ary[i])]) {
      cache[String(ary[i])] = true;
    } else {
      return true;
    }
  }

  return false;
};

/**
 * Function to interpolate between two numbers.
 * If both start and end are numbers, it calculates the interpolated value based on the parameter t (0 to 1).
 * If either start or end is not a number, it returns the end value directly.
 *
 * You will typically use this function when implementing custom animations.
 *
 * `t` can be outside the (0, 1) range, depending on easing.
 *
 * This one interpolates only numbers;
 * if you want to interpolate colors or strings then perhaps see {@link https://d3js.org/d3-interpolate d3-interpolate}.
 * @param start the starting value (when t=0)
 * @param end the final value (when t=1)
 * @param t t interpolation factor; values in [0, 1] interpolate between start and end, and values outside that range extrapolate
 *
 * @since 3.9
 */
export function interpolate(start: number | null | undefined, end: number, t: number): number;
export function interpolate(start: number | null | undefined, end: null, t: number): null;
export function interpolate(start: number | null | undefined, end: undefined, t: number): undefined;
export function interpolate(start: number | null | undefined, end: number | null, t: number): number | null;
export function interpolate(start: number | null | undefined, end: number | undefined, t: number): number | undefined;
export function interpolate(
  start: number | null | undefined,
  end: number | null | undefined,
  t: number,
): number | null | undefined;
export function interpolate(
  start: number | null | undefined,
  end: number | null | undefined,
  t: number,
): number | null | undefined {
  if (isNumber(start) && isNumber(end)) {
    return round(start + t * (end - start));
  }
  return end;
}

export function findEntryInArray<T>(
  ary: ReadonlyArray<T>,
  specifiedKey: number | string | ((entry: T) => unknown),
  specifiedValue: unknown,
): T | undefined {
  if (!ary || !ary.length) {
    return undefined;
  }

  return ary.find(
    entry =>
      entry && (typeof specifiedKey === 'function' ? specifiedKey(entry) : get(entry, specifiedKey)) === specifiedValue,
  );
}

type LinearRegressionResult = {
  xmin: number;
  xmax: number;
  a: number;
  b: number;
};

/**
 * The least square linear regression
 * @param {Array} data The array of points
 * @returns {Object} The domain of x, and the parameter of linear function
 */
export const getLinearRegression = (data: NonEmptyArray<{ cx?: number; cy?: number }>): LinearRegressionResult => {
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
    xcurrent = data[i]?.cx || 0;
    ycurrent = data[i]?.cy || 0;

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

type Nullish = null | undefined;

/**
 * Checks if the value is null or undefined
 * @param value The value to check
 * @returns true if the value is null or undefined
 */
export const isNullish = (value: unknown): value is Nullish => {
  return value === null || typeof value === 'undefined';
};

/**
 * Uppercase the first letter of a string
 * @param {string} value The string to uppercase
 * @returns {string} The uppercased string
 */
export const upperFirst = (value: string): string => {
  if (isNullish(value)) {
    return value;
  }

  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
};

/**
 * Checks if the value is not null nor undefined.
 * @param value The value to check
 * @returns true if the value is not null nor undefined
 */
export function isNotNil<T>(value: T): value is NonNullable<T> {
  return value != null;
}

/**
 * No-operation function that does nothing.
 * Useful as a placeholder or default callback function.
 */
export function noop(): undefined {}
