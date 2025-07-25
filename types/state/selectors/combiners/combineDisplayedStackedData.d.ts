import { GraphicalItemSettings } from '../../graphicalItemsSlice';
import { ChartDataState } from '../../chartDataSlice';
import { BaseCartesianAxis } from '../../cartesianAxisSlice';
import { StackSeriesIdentifier } from '../../../util/stacks/stackTypes';
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
export declare function combineDisplayedStackedData(cartesianItems: ReadonlyArray<GraphicalItemSettings>, { chartData }: ChartDataState, tooltipAxisSettings: BaseCartesianAxis): DisplayedStackedData;
