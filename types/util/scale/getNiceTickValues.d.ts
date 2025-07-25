/**
 * @fileOverview calculate tick values of scale
 * @author xile611, arcthur
 * @date 2015-09-17
 */
import Decimal from 'decimal.js-light';
/**
 * Calculate a interval of a minimum value and a maximum value
 *
 * @param  {Number} min       The minimum value
 * @param  {Number} max       The maximum value
 * @return {Array} An interval
 */
export declare const getValidInterval: ([min, max]: [number, number]) => number[];
/**
 * Calculate the step which is easy to understand between ticks, like 10, 20, 25
 *
 * @param  roughStep        The rough step calculated by dividing the difference by the tickCount
 * @param  allowDecimals    Allow the ticks to be decimals or not
 * @param  correctionFactor A correction factor
 * @return The step which is easy to understand between two ticks
 */
export declare const getFormatStep: (roughStep: Decimal, allowDecimals: boolean, correctionFactor: number) => Decimal;
/**
 * calculate the ticks when the minimum value equals to the maximum value
 *
 * @param  value         The minimum value which is also the maximum value
 * @param  tickCount     The count of ticks
 * @param  allowDecimals Allow the ticks to be decimals or not
 * @return array of ticks
 */
export declare const getTickOfSingleValue: (value: number, tickCount: number, allowDecimals: boolean) => Array<number>;
/**
 * Calculate the step
 *
 * @param  min              The minimum value of an interval
 * @param  max              The maximum value of an interval
 * @param  tickCount        The count of ticks
 * @param  allowDecimals    Allow the ticks to be decimals or not
 * @param  correctionFactor A correction factor
 * @return The step, minimum value of ticks, maximum value of ticks
 */
export declare const calculateStep: (min: number, max: number, tickCount: number, allowDecimals: boolean, correctionFactor?: number) => {
    step: Decimal;
    tickMin: Decimal;
    tickMax: Decimal;
};
/**
 * Calculate the ticks of an interval. Ticks can appear outside the interval
 * if it makes them more rounded and nice.
 *
 * @param tuple of [min,max] min: The minimum value, max: The maximum value
 * @param tickCount     The count of ticks
 * @param allowDecimals Allow the ticks to be decimals or not
 * @return array of ticks
 */
declare function getNiceTickValuesFn([min, max]: [number, number], tickCount?: number, allowDecimals?: boolean): number[];
/**
 * Calculate the ticks of an interval.
 * Ticks will be constrained to the interval [min, max] even if it makes them less rounded and nice.
 *
 * @param tuple of [min,max] min: The minimum value, max: The maximum value
 * @param tickCount     The count of ticks. This function may return less than tickCount ticks if the interval is too small.
 * @param allowDecimals Allow the ticks to be decimals or not
 * @return array of ticks
 */
declare function getTickValuesFixedDomainFn([min, max]: readonly [number, number], tickCount: number, allowDecimals?: boolean): number[];
export declare const getNiceTickValues: typeof getNiceTickValuesFn;
export declare const getTickValuesFixedDomain: typeof getTickValuesFixedDomainFn;
export {};
