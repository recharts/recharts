export declare const getDashCase: (name: string) => string;
export declare const getTransitionVal: (props: ReadonlyArray<string>, duration: string | number, easing: string) => string;
/**
 * Finds the intersection of keys between two objects
 * @param {object} preObj previous object
 * @param {object} nextObj next object
 * @returns an array of keys that exist in both objects
 */
export declare const getIntersectionKeys: (preObj: Record<string, unknown>, nextObj: Record<string, unknown>) => string[];
/**
 * Maps an object to another object
 * @param {function} fn function to map
 * @param {object} obj object to map
 * @returns mapped object
 */
export declare const mapObject: <T extends Record<string, any>, R>(fn: (key: keyof T, value: T[keyof T]) => R, obj: T) => { [K in keyof T]: R; };
