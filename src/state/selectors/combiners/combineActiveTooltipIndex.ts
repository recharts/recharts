import { TooltipIndex, TooltipInteractionState } from '../../tooltipSlice';
import { ChartData } from '../../chartDataSlice';
import { isWellBehavedNumber } from '../../../util/isWellBehavedNumber';
import { DataKey, CategoricalDomain, NumberDomain, TickItem, TooltipEventType } from '../../../util/types';
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
  value: unknown,
  axisDataKey: DataKey<unknown> | undefined,
  domain: NumberDomain | CategoricalDomain | undefined,
): boolean {
  if (domain == null || axisDataKey == null) {
    return true;
  }

  if (value == null) {
    return true;
  }

  if (!isWellFormedNumberDomain(domain)) {
    return true;
  }

  return isValueWithinNumberDomain(value, domain);
}

export const combineActiveTooltipIndex = (
  tooltipInteraction: TooltipInteractionState | undefined,
  tooltipEventType: TooltipEventType | undefined,
  chartData: ChartData,
  tooltipAxisTicks: ReadonlyArray<TickItem> | undefined,
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

  /*
   * An `axis` interaction indexes the tooltip ticks, so an index beyond the last tick is the last tick.
   * Where there are no ticks, it indexes the rows of the displayed data.
   * An `item` interaction indexes the data of the hovered item, which neither the ticks nor the displayed data are,
   * so it keeps the upper bound of the displayed data.
   */
  const indexesTicks = tooltipEventType !== 'item' && tooltipAxisTicks != null && tooltipAxisTicks.length > 0;
  const indexSpace = indexesTicks ? tooltipAxisTicks : chartData;

  if (indexSpace.length > 0) {
    upperLimit = indexSpace.length - 1;
  }

  // now let's clamp the desiredIndex between the limits
  const clampedIndex = Math.max(lowerLimit, Math.min(indexAsNumber, upperLimit));

  const entry = chartData[clampedIndex];

  /*
   * With the data on the chart, the tick and the row at one index are the same.
   * With data on several graphical items, a tick can be a category that the row at that index shares with another item,
   * and then the value of the tick itself is the one that is inside the domain or outside of it.
   */
  const tick = tooltipEventType === 'item' ? undefined : tooltipAxisTicks?.[clampedIndex];

  if (tick == null && entry == null) {
    return String(clampedIndex);
  }

  const value = tick == null ? getValueByDataKey(entry, axisDataKey) : tick.value;

  if (!isValueWithinDomain(value, axisDataKey, domain)) {
    return null;
  }

  return String(clampedIndex);
};
