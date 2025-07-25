export declare const mathSign: (value: number) => 0 | 1 | -1;
export declare const isNan: (value: unknown) => boolean;
export declare const isPercent: (value: string | number) => value is `${number}%`;
export declare const isNumber: (value: unknown) => value is number;
export declare const isNumOrStr: (value: unknown) => value is number | string;
export declare const uniqueId: (prefix?: string) => string;
/**
 * Get percent value of a total value
 * @param {number|string} percent A percent
 * @param {number} totalValue     Total value
 * @param {number} defaultValue   The value returned when percent is undefined or invalid
 * @param {boolean} validate      If set to be true, the result will be validated
 * @return {number} value
 */
export declare const getPercentValue: (percent: number | string, totalValue: number | undefined, defaultValue?: number, validate?: boolean) => number;
export declare const hasDuplicate: (ary: ReadonlyArray<unknown>) => boolean;
/**
 * @deprecated instead use {@link interpolate}
 *  this function returns a function that is called immediately in all use-cases.
 *  Instead, use interpolate which returns a number and skips the anonymous function step.
 *  @param numberA The first number
 *  @param numberB The second number
 *  @return A function that returns the interpolated number
 */
export declare const interpolateNumber: (numberA: number | undefined, numberB: number | undefined) => (t: number) => number;
export declare function interpolate(start: unknown, end: number, t: number): number;
export declare function interpolate(start: unknown, end: null, t: number): null;
export declare function interpolate(start: unknown, end: number | null, t: number): number | null;
export declare function findEntryInArray<T>(ary: ReadonlyArray<T>, specifiedKey: number | string | ((entry: T) => unknown), specifiedValue: unknown): T | undefined;
/**
 * The least square linear regression
 * @param {Array} data The array of points
 * @returns {Object} The domain of x, and the parameter of linear function
 */
export declare const getLinearRegression: (data: ReadonlyArray<{
    cx?: number;
    cy?: number;
}>) => {
    xmin: number;
    xmax: number;
    a: number;
    b: number;
};
type Nullish = null | undefined;
/**
 * Checks if the value is null or undefined
 * @param value The value to check
 * @returns true if the value is null or undefined
 */
export declare const isNullish: (value: unknown) => value is Nullish;
/**
 *Uppercase the first letter of a string
 * @param {string} value The string to uppercase
 * @returns {string} The uppercased string
 */
export declare const upperFirst: (value: string) => string;
export {};
