import { ChartDataState } from '../../chartDataSlice';
import { BaseCartesianAxis } from '../../cartesianAxisSlice';
import { getStackSeriesIdentifier } from '../../../util/stacks/getStackSeriesIdentifier';
import { getValueByDataKey } from '../../../util/ChartUtils';
import { StackSeriesIdentifier } from '../../../util/stacks/stackTypes';
import { DefinitelyStackedGraphicalItem } from '../../types/StackedGraphicalItem';

/**
 * In a stacked chart, each graphical item has its own data. That data could be either:
 * - defined on the chart root, in which case the item gets a unique dataKey
 * - or defined on the item itself, in which case multiple items can share the same dataKey
 *
 * That means we cannot use the dataKey as a unique identifier for the item.
 *
 * This type represents a single data point in a stacked chart, where each key is a series identifier
 * and the value is the numeric value for that series using the numerical axis dataKey.
 */
export type DisplayedStackedDataPoint = Record<StackSeriesIdentifier, number>;

export type DisplayedStackedData = ReadonlyArray<DisplayedStackedDataPoint>;

export function combineDisplayedStackedData(
  stackedGraphicalItems: ReadonlyArray<DefinitelyStackedGraphicalItem>,
  { chartData = [] }: ChartDataState,
  tooltipAxisSettings: BaseCartesianAxis,
): DisplayedStackedData {
  const tooltipDataKey = tooltipAxisSettings?.dataKey;

  // A map of tooltip data keys to the stacked data points
  const knownItemsByDataKey = new Map<string | number, DisplayedStackedDataPoint>();

  stackedGraphicalItems.forEach(item => {
    // If there is no data on the individual item then we use the root chart data
    const resolvedData = item.data ?? chartData;
    if (resolvedData == null || resolvedData.length === 0) {
      // if that didn't work then we skip this item
      return;
    }
    const stackIdentifier = getStackSeriesIdentifier(item);
    resolvedData.forEach((entry, index) => {
      const tooltipValue = tooltipDataKey == null ? index : String(getValueByDataKey(entry, tooltipDataKey, null));
      const numericValue = getValueByDataKey(entry, item.dataKey, 0);
      let curr;
      if (knownItemsByDataKey.has(tooltipValue)) {
        curr = knownItemsByDataKey.get(tooltipValue);
      } else {
        curr = {};
      }
      Object.assign(curr, { [stackIdentifier]: numericValue });
      knownItemsByDataKey.set(tooltipValue, curr);
    });
  });
  return Array.from(knownItemsByDataKey.values());
}
