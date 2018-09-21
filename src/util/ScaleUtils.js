/**
 * @fileOverview calculate tick values of scale
 * @author xile611, arcthur
 * @date 2015-09-17
 */
import Decimal from 'decimal.js-light';

import { compose, range, memoize, map, reverse } from './ScaleUtilsUtils';
import Arithmetic from './ScaleUtilsArithmetic';

/**
 * Calculate a interval of a minimum value and a maximum value
 *
 * @param  {Number} min       The minimum value
 * @param  {Number} max       The maximum value
 * @return {Array} An interval
 */
function getValidInterval([min, max]) {
  let [validMin, validMax] = [min, max];

  // exchange
  if (min > max) {
    [validMin, validMax] = [max, min];
  }

  return [validMin, validMax];
}

/**
 * Calculate the step which is easy to understand between ticks, like 10, 20, 25
 *
 * @param  {Decimal} roughStep        The rough step calculated by deviding the
 * difference by the tickCount
 * @param  {Boolean} allowDecimals    Allow the ticks to be decimals or not
 * @param  {Integer} correctionFactor A correction factor
 * @return {Decimal} The step which is easy to understand between two ticks
 */
function getFormatStep(roughStep, allowDecimals, correctionFactor) {
  if (roughStep.lte(0)) { return new Decimal(0); }

  const digitCount = Arithmetic.getDigitCount(roughStep.toNumber());
  // The ratio between the rough step and the smallest number which has a bigger
  // order of magnitudes than the rough step
  const digitCountValue = new Decimal(10).pow(digitCount);
  const stepRatio = roughStep.div(digitCountValue);
  // When an integer and a float multiplied, the accuracy of result may be wrong
  const stepRatioScale = digitCount !== 1 ? 0.05 : 0.1;
  const amendStepRatio = new Decimal(
    Math.ceil(stepRatio.div(stepRatioScale).toNumber())
  ).add(correctionFactor).mul(stepRatioScale);

  const formatStep = amendStepRatio.mul(digitCountValue);

  return allowDecimals ? formatStep : new Decimal(Math.ceil(formatStep));
}

/**
 * calculate the ticks when the minimum value equals to the maximum value
 *
 * @param  {Number}  value         The minimum valuue which is also the maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}                 ticks
 */
function getTickOfSingleValue(value, tickCount, allowDecimals) {
  let step = 1;
  // calculate the middle value of ticks
  let middle = new Decimal(value);

  if (!middle.isint() && allowDecimals) {
    const absVal = Math.abs(value);

    if (absVal < 1) {
      // The step should be a float number when the difference is smaller than 1
      step = new Decimal(10).pow(Arithmetic.getDigitCount(value) - 1);

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
    map(n => middle.add(new Decimal(n - middleIndex).mul(step)).toNumber()),
    range
  );

  return fn(0, tickCount);
}

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
function calculateStep(min, max, tickCount, allowDecimals, correctionFactor = 0) {
  // The step which is easy to understand between two ticks
  const step = getFormatStep(
    new Decimal(max).sub(min).div(tickCount - 1),
    allowDecimals,
    correctionFactor
  );

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
  let upCount = Math.ceil(new Decimal(max).sub(middle).div(step)
                          .toNumber());
  const scaleCount = belowCount + upCount + 1;

  if (scaleCount > tickCount) {
    // When more ticks need to cover the interval, step should be bigger.
    return calculateStep(min, max, tickCount, allowDecimals, correctionFactor + 1);
  } else if (scaleCount < tickCount) {
    // When less ticks can cover the interval, we should add some additional ticks
    upCount = max > 0 ? upCount + (tickCount - scaleCount) : upCount;
    belowCount = max > 0 ? belowCount : belowCount + (tickCount - scaleCount);
  }

  return {
    step,
    tickMin: middle.sub(new Decimal(belowCount).mul(step)),
    tickMax: middle.add(new Decimal(upCount).mul(step)),
  };
}
/**
 * Calculate the ticks of an interval
 *
 * @param  {Number}  min, max      min: The minimum value, max: The maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}   ticks
 */
function getNiceTickValuesFn([min, max], tickCount = 6, allowDecimals = true) {
  // More than two ticks should be return
  const count = Math.max(tickCount, 2);
  const [cormin, cormax] = getValidInterval([min, max]);

  if (cormin === cormax) {
    return getTickOfSingleValue(cormin, tickCount, allowDecimals);
  }

  // Get the step between two ticks
  const { step, tickMin, tickMax } = calculateStep(cormin, cormax, count, allowDecimals);

  const values = Arithmetic.rangeStep(tickMin, tickMax.add(new Decimal(0.1).mul(step)), step);

  return min > max ? reverse(values) : values;
}

function getTickValuesFn([min, max], tickCount = 6, allowDecimals = true) {
  // More than two ticks should be return
  const count = Math.max(tickCount, 2);
  const [cormin, cormax] = getValidInterval([min, max]);

  if (cormin === cormax) {
    return getTickOfSingleValue(cormin, tickCount, allowDecimals);
  }

  const step = getFormatStep(new Decimal(cormax).sub(cormin).div(count - 1), allowDecimals, 0);

  const fn = compose(
    map(n => new Decimal(cormin).add(new Decimal(n).mul(step)).toNumber()),
    range
  );

  const values = fn(0, count).filter(entry => (entry >= cormin && entry <= cormax));

  return min > max ? reverse(values) : values;
}

function getTickValuesFixedDomainFn([min, max], tickCount, allowDecimals = true) {
  // More than two ticks should be return
  const [cormin, cormax] = getValidInterval([min, max]);

  if (cormin === cormax) { return [cormin]; }

  const count = Math.max(tickCount, 2);
  const step = getFormatStep(new Decimal(cormax).sub(cormin).div(count - 1), allowDecimals, 0);
  const values = [
    ...Arithmetic.rangeStep(
      new Decimal(cormin),
      new Decimal(cormax).sub(new Decimal(0.99).mul(step)),
      step
    ),
    cormax,
  ];

  return min > max ? reverse(values) : values;
}

export const getNiceTickValues = memoize(getNiceTickValuesFn);
export const getTickValues = memoize(getTickValuesFn);
export const getTickValuesFixedDomain = memoize(getTickValuesFixedDomainFn);
