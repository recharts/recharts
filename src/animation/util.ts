/*
 * @description: convert camel case to dash case
 * string => string
 */
export const getDashCase = (name: string) => name.replace(/([A-Z])/g, v => `-${v.toLowerCase()}`);

export const getTransitionVal = (props: ReadonlyArray<string>, duration: string | number, easing: string): string =>
  props.map(prop => `${getDashCase(prop)} ${duration}ms ${easing}`).join(',');

export const identity = <T>(param: T): T => param;

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
export const mapObject = (fn: (key: string, value: unknown) => void, obj: Record<string, unknown>) =>
  Object.keys(obj).reduce(
    (res, key) => ({
      ...res,
      [key]: fn(key, obj[key]),
    }),
    {},
  );
