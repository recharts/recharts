import { TooltipIndex, TooltipInteractionState } from '../../tooltipSlice';
import { ChartData } from '../../chartDataSlice';
import { isWellBehavedNumber } from '../../../util/isWellBehavedNumber';
import { DataKey, CategoricalDomain, NumberDomain } from '../../../util/types';
import { getValueByDataKey } from '../../../util/ChartUtils';
import { isWellFormedNumberDomain } from '../../../util/isDomainSpecifiedByUser';

function toFiniteNumber(value: unknown): number | undefined {
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : undefined;
  }
  if (value instanceof Date) {
    const numericValue = value.valueOf();
    return Number.isFinite(numericValue) ? numericValue : undefined;
  }
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function isValueWithinNumberDomain(value: unknown, domain: NumberDomain): boolean {
  const numericValue = toFiniteNumber(value);
  const lowerBound = domain[0];
  const upperBound = domain[1];

  if (numericValue === undefined) {
    return false;
  }

  const min = Math.min(lowerBound, upperBound);
  const max = Math.max(lowerBound, upperBound);
  return numericValue >= min && numericValue <= max;
}

function isValueWithinDomain(
  entry: unknown,
  axisDataKey: DataKey<unknown> | undefined,
  domain: NumberDomain | CategoricalDomain | undefined,
): boolean {
  if (domain == null || axisDataKey == null) {
    return true;
  }

  const value = getValueByDataKey(entry, axisDataKey);
  if (value == null) {
    return true;
  }

  if (!isWellFormedNumberDomain(domain)) {
    return true;
  }

  return isValueWithinNumberDomain(value, domain);
}

export const combineActiveTooltipIndex = (
  tooltipInteraction: TooltipInteractionState,
  chartData: ChartData,
  axisDataKey?: DataKey<unknown>,
  domain?: NumberDomain | CategoricalDomain,
): TooltipIndex | null => {
  const desiredIndex: TooltipIndex | undefined = tooltipInteraction?.index;
  if (desiredIndex == null) {
    return null;
  }

  const indexAsNumber = Number(desiredIndex);
  if (!isWellBehavedNumber(indexAsNumber)) {
    // this is for charts like Sankey and Treemap that do not support numerical indexes. We need a proper solution for this before we can start supporting keyboard events on these charts.
    return desiredIndex;
  }

  /*
   * Zero is a trivial limit for single-dimensional charts like Line and Area,
   * but this also needs a support for multidimensional charts like Sankey and Treemap! TODO
   */
  const lowerLimit = 0;
  let upperLimit: number = +Infinity;

  if (chartData.length > 0) {
    upperLimit = chartData.length - 1;
  }

  // now let's clamp the desiredIndex between the limits
  const clampedIndex = Math.max(lowerLimit, Math.min(indexAsNumber, upperLimit));
  const entry = chartData[clampedIndex];

  if (entry == null) {
    return String(clampedIndex);
  }

  if (!isValueWithinDomain(entry, axisDataKey, domain)) {
    return null;
  }

  return String(clampedIndex);
};
