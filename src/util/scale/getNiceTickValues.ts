/**
 * @fileOverview calculate tick values of scale
 * @author xile611, arcthur
 * @date 2015-09-17
 */
import Decimal from 'decimal.js-light';
import { compose, range, memoize, map, reverse } from './util/utils';
import { getDigitCount, rangeStep } from './util/arithmetic';

/**
 * Calculate a interval of a minimum value and a maximum value
 *
 * @param  {Number} min       The minimum value
 * @param  {Number} max       The maximum value
 * @return {Array} An interval
 */
export const getValidInterval = ([min, max]: [number, number]) => {
  let [validMin, validMax] = [min, max];

  // exchange
  if (min > max) {
    [validMin, validMax] = [max, min];
  }

  return [validMin, validMax];
};

/**
 * Calculate the step which is easy to understand between ticks, like 10, 20, 25
 *
 * @param  {Decimal} roughStep        The rough step calculated by dividing the
 * difference by the tickCount
 * @param  {Boolean} allowDecimals    Allow the ticks to be decimals or not
 * @param  {Integer} correctionFactor A correction factor
 * @return {Decimal} The step which is easy to understand between two ticks
 */
export const getFormatStep = (roughStep: Decimal, allowDecimals: boolean, correctionFactor: number) => {
  if (roughStep.lte(0)) {
    return new Decimal(0);
  }

  const digitCount = getDigitCount(roughStep.toNumber());
  // The ratio between the rough step and the smallest number which has a bigger
  // order of magnitudes than the rough step
  const digitCountValue = new Decimal(10).pow(digitCount);
  const stepRatio = roughStep.div(digitCountValue);
  // When an integer and a float multiplied, the accuracy of result may be wrong
  const stepRatioScale = digitCount !== 1 ? 0.05 : 0.1;
  const amendStepRatio = new Decimal(Math.ceil(stepRatio.div(stepRatioScale).toNumber()))
    .add(correctionFactor)
    .mul(stepRatioScale);

  const formatStep = amendStepRatio.mul(digitCountValue);

  return allowDecimals ? new Decimal(formatStep.toNumber()) : new Decimal(Math.ceil(formatStep.toNumber()));
};

/**
 * calculate the ticks when the minimum value equals to the maximum value
 *
 * @param  value         The minimum value which is also the maximum value
 * @param  tickCount     The count of ticks
 * @param  allowDecimals Allow the ticks to be decimals or not
 * @return array of ticks
 */
export const getTickOfSingleValue = (value: number, tickCount: number, allowDecimals: boolean): Array<number> => {
  let step: Decimal = new Decimal(1);
  // calculate the middle value of ticks
  let middle = new Decimal(value);

  if (!middle.isint() && allowDecimals) {
    const absVal = Math.abs(value);

    if (absVal < 1) {
      // The step should be a float number when the difference is smaller than 1
      step = new Decimal(10).pow(getDigitCount(value) - 1);

      middle = new Decimal(Math.floor(middle.div(step).toNumber())).mul(step);
    } else if (absVal > 1) {
      // Return the maximum integer which is smaller than 'value' when 'value' is greater than 1
      middle = new Decimal(Math.floor(value));
    }
  } else if (value === 0) {
    middle = new Decimal(Math.floor((tickCount - 1) / 2));
  } else if (!allowDecimals) {
    middle = new Decimal(Math.floor(value));
  }

  const middleIndex = Math.floor((tickCount - 1) / 2);

  const fn = compose(
    map((n: number) => middle.add(new Decimal(n - middleIndex).mul(step)).toNumber()),
    range,
  );

  return fn(0, tickCount);
};

/**
 * Calculate the step
 *
 * @param  {Number}  min              The minimum value of an interval
 * @param  {Number}  max              The maximum value of an interval
 * @param  {Integer} tickCount        The count of ticks
 * @param  {Boolean} allowDecimals    Allow the ticks to be decimals or not
 * @param  {Number}  correctionFactor A correction factor
 * @return {Object}  The step, minimum value of ticks, maximum value of ticks
 */
export const calculateStep = (
  min: number,
  max: number,
  tickCount: number,
  allowDecimals: boolean,
  correctionFactor = 0,
): any => {
  // dirty hack (for recharts' test)
  if (!Number.isFinite((max - min) / (tickCount - 1))) {
    return {
      step: new Decimal(0),
      tickMin: new Decimal(0),
      tickMax: new Decimal(0),
    };
  }

  // The step which is easy to understand between two ticks
  const step = getFormatStep(new Decimal(max).sub(min).div(tickCount - 1), allowDecimals, correctionFactor);

  // A medial value of ticks
  let middle;

  // When 0 is inside the interval, 0 should be a tick
  if (min <= 0 && max >= 0) {
    middle = new Decimal(0);
  } else {
    // calculate the middle value
    middle = new Decimal(min).add(max).div(2);
    // minus modulo value
    middle = middle.sub(new Decimal(middle).mod(step));
  }

  let belowCount = Math.ceil(middle.sub(min).div(step).toNumber());
  let upCount = Math.ceil(new Decimal(max).sub(middle).div(step).toNumber());
  const scaleCount = belowCount + upCount + 1;

  if (scaleCount > tickCount) {
    // When more ticks need to cover the interval, step should be bigger.
    return calculateStep(min, max, tickCount, allowDecimals, correctionFactor + 1);
  }
  if (scaleCount < tickCount) {
    // When less ticks can cover the interval, we should add some additional ticks
    upCount = max > 0 ? upCount + (tickCount - scaleCount) : upCount;
    belowCount = max > 0 ? belowCount : belowCount + (tickCount - scaleCount);
  }

  return {
    step,
    tickMin: middle.sub(new Decimal(belowCount).mul(step)),
    tickMax: middle.add(new Decimal(upCount).mul(step)),
  };
};

/**
 * Calculate the ticks of an interval, the count of ticks will be guaranteed
 *
 * @param  {Number}  min, max      min: The minimum value, max: The maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}   ticks
 */
function getNiceTickValuesFn([min, max]: [number, number], tickCount = 6, allowDecimals = true): number[] {
  // More than two ticks should be return
  const count = Math.max(tickCount, 2);
  const [cormin, cormax] = getValidInterval([min, max]);

  if (cormin === -Infinity || cormax === Infinity) {
    const values =
      cormax === Infinity
        ? [cormin, ...range(0, tickCount - 1).map(() => Infinity)]
        : [...range(0, tickCount - 1).map(() => -Infinity), cormax];

    return min > max ? reverse(values) : values;
  }

  if (cormin === cormax) {
    return getTickOfSingleValue(cormin, tickCount, allowDecimals);
  }

  // Get the step between two ticks
  const { step, tickMin, tickMax } = calculateStep(cormin, cormax, count, allowDecimals, 0);

  const values = rangeStep(tickMin, tickMax.add(new Decimal(0.1).mul(step)), step);

  return min > max ? reverse(values) : values;
}

/**
 * Calculate the ticks of an interval, the count of ticks won't be guraranteed,
 * but the domain will be guaranteed
 *
 * @param  {Number}  min, max      min: The minimum value, max: The maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}   ticks
 */
function getTickValuesFixedDomainFn([min, max]: readonly [number, number], tickCount: number, allowDecimals = true) {
  // More than two ticks should be return
  const [cormin, cormax] = getValidInterval([min, max]);

  if (cormin === -Infinity || cormax === Infinity) {
    return [min, max];
  }

  if (cormin === cormax) {
    return [cormin];
  }

  const count = Math.max(tickCount, 2);
  const step = getFormatStep(new Decimal(cormax).sub(cormin).div(count - 1), allowDecimals, 0);
  const values = [
    ...rangeStep(new Decimal(cormin), new Decimal(cormax).sub(new Decimal(0.99).mul(step)), step),
    cormax,
  ];

  return min > max ? reverse(values) : values;
}

export const getNiceTickValues = memoize(getNiceTickValuesFn);
export const getTickValuesFixedDomain = memoize(getTickValuesFixedDomainFn);
