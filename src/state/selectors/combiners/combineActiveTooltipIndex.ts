import { TooltipIndex, TooltipInteractionState } from '../../tooltipSlice';
import { ChartData } from '../../chartDataSlice';
import { isWellBehavedNumber } from '../../../util/isWellBehavedNumber';
import { DataKey, CategoricalDomain, NumberDomain } from '../../../util/types';
import { getValueByDataKey } from '../../../util/ChartUtils';

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
  const lowerBound = toFiniteNumber(domain[0]);
  const upperBound = toFiniteNumber(domain[1]);

  if (numericValue == null || lowerBound == null || upperBound == null) {
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

  if (Array.isArray(domain) && domain.length !== 2) {
    return true;
  }

  const domainValues = Array.isArray(domain) ? domain : [domain];
  const numericValue = toFiniteNumber(value);

  if (Array.isArray(domain) && domain.length === 2) {
    const lowerBound = toFiniteNumber(domain[0]);
    const upperBound = toFiniteNumber(domain[1]);
    if (lowerBound != null && upperBound != null && numericValue != null) {
      return isValueWithinNumberDomain(numericValue, [lowerBound, upperBound]);
    }
    if (lowerBound == null || upperBound == null) {
      return true;
    }
  }

  return domainValues.some(domainValue => {
    if (domainValue === value) {
      return true;
    }
    if (numericValue != null) {
      const domainNumericValue = toFiniteNumber(domainValue);
      if (domainNumericValue != null && domainNumericValue === numericValue) {
        return true;
      }
    }
    return false;
  });
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
