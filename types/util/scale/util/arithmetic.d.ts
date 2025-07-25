/**
 * @fileOverview Some common arithmetic methods
 * @author xile611
 * @date 2015-09-17
 */
import Decimal from 'decimal.js-light';
/**
 * Get the digit count of a number.
 * If the absolute value is in the interval [0.1, 1), the result is 0.
 * If the absolute value is in the interval [0.01, 0.1), the digit count is -1.
 * If the absolute value is in the interval [0.001, 0.01), the digit count is -2.
 *
 * @param  {Number} value The number
 * @return {Integer}      Digit count
 */
declare function getDigitCount(value: number): number;
/**
 * Get the data in the interval [start, end) with a fixed step.
 * Also handles JS calculation precision issues.
 *
 * @param  {Decimal} start Start point
 * @param  {Decimal} end   End point, not included
 * @param  {Decimal} step  Step size
 * @return {Array}         Array of numbers
 */
declare function rangeStep(start: Decimal, end: Decimal, step: Decimal): Array<number>;
/**
 * Linear interpolation of numbers.
 *
 * @param  {Number} a  Endpoint of the domain
 * @param  {Number} b  Endpoint of the domain
 * @param  {Number} t  A value in [0, 1]
 * @return {Number}    A value in the domain
 */
declare const interpolateNumber: (...args: any[]) => any;
/**
 * Inverse operation of linear interpolation.
 *
 * @param  {Number} a Endpoint of the domain
 * @param  {Number} b Endpoint of the domain
 * @param  {Number} x Can be considered as an output value after interpolation
 * @return {Number}   When x is in the range a ~ b, the return value is in [0, 1]
 */
declare const uninterpolateNumber: (...args: any[]) => any;
/**
 * Inverse operation of linear interpolation with truncation.
 *
 * @param  {Number} a Endpoint of the domain
 * @param  {Number} b Endpoint of the domain
 * @param  {Number} x Can be considered as an output value after interpolation
 * @return {Number}   When x is in the interval a ~ b, the return value is in [0, 1].
 *                    When x is not in the interval a ~ b, it will be truncated to the interval a ~ b.
 */
declare const uninterpolateTruncation: (...args: any[]) => any;
export { rangeStep, getDigitCount, interpolateNumber, uninterpolateNumber, uninterpolateTruncation };
