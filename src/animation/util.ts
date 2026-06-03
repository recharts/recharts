import { interpolateString } from 'victory-vendor/d3-interpolate';

/*
 * @description: convert camel case to dash case
 * string => string
 */
export const getDashCase = (name: string) => name.replace(/([A-Z])/g, v => `-${v.toLowerCase()}`);

export const getTransitionVal = (props: ReadonlyArray<string>, duration: string | number, easing: string): string =>
  props.map(prop => `${getDashCase(prop)} ${duration}ms ${easing}`).join(',');

/**
 * Finds the intersection of keys between two objects
 * @param {object} preObj previous object
 * @param {object} nextObj next object
 * @returns an array of keys that exist in both objects
 */
export const getIntersectionKeys = (preObj: Record<string, unknown>, nextObj: Record<string, unknown>): string[] =>
  [Object.keys(preObj), Object.keys(nextObj)].reduce((a, b) => a.filter(c => b.includes(c)));

/**
 * Maps an object to another object
 * @param {function} fn function to map
 * @param {object} obj object to map
 * @returns mapped object
 */
export const mapObject = <T extends Record<string, any>, R>(
  fn: (key: keyof T, value: T[keyof T]) => R,
  obj: T,
): { [K in keyof T]: R } =>
  Object.keys(obj).reduce(
    (res, key) => ({
      ...res,
      [key]: fn(key as keyof T, obj[key as keyof T]),
    }),
    {} as { [K in keyof T]: R },
  );

/**
 * Interpolates between two CSS value strings.
 * Delegates to d3-interpolate's interpolateString which finds embedded numbers
 * and interpolates them while preserving surrounding text (units, function names, etc.).
 *
 * For example:
 *  - interpolateCSSValue("scaleX(0)", "scaleX(1)", 0.5) => "scaleX(0.5)"
 *  - interpolateCSSValue("translate(50px, 30px)", "translate(0px, 0px)", 0.5) => "translate(25px, 15px)"
 */
export function interpolateCSSValue(from: string, to: string, animationElapsedTime: number): string {
  return interpolateString(from, to)(animationElapsedTime);
}
