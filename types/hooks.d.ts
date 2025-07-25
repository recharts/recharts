import type { AxisId } from './state/cartesianAxisSlice';
import { BaseAxisWithScale } from './state/selectors/axisSelectors';
import { ChartOffset, PlotArea } from './types';
export declare const useXAxis: (xAxisId: AxisId) => BaseAxisWithScale | undefined;
export declare const useYAxis: (yAxisId: AxisId) => BaseAxisWithScale | undefined;
/**
 * Returns the active tooltip label. The label is one of the values from the chart data,
 * and is used to display in the tooltip content.
 *
 * Returns undefined if there is no active user interaction or if used outside a chart context
 *
 * @returns string | undefined
 */
export declare const useActiveTooltipLabel: () => string | undefined;
/**
 * Offset defines the blank space between the chart and the plot area.
 * This blank space is occupied by supporting elements like axes, legends, and brushes.
 * This also includes any margins that might be applied to the chart.
 *
 * @returns Offset of the chart in pixels, or undefined if used outside a chart context.
 */
export declare const useOffset: () => ChartOffset | undefined;
/**
 * Plot area is the area where the actual chart data is rendered.
 * This means: bars, lines, scatter points, etc.
 *
 * The plot area is calculated based on the chart dimensions and the offset.
 *
 * @returns Plot area of the chart in pixels, or undefined if used outside a chart context.
 */
export declare const usePlotArea: () => PlotArea | undefined;
/**
 * Returns the currently active data points being displayed in the Tooltip.
 * Active means that it is currently visible; this hook will return `undefined` if there is no current interaction.
 *
 * This follows the `<Tooltip />` props, if the Tooltip element is present in the chart.
 * If there is no `<Tooltip />` then this hook will follow the default Tooltip props.
 *
 * Data point is whatever you pass as an input to the chart using the `data={}` prop.
 *
 * This returns an array because a chart can have multiple graphical items in it (multiple Lines for example)
 * and tooltip with `shared={true}` will display all items at the same time.
 *
 * Returns undefined when used outside a chart context.
 *
 * @returns Data points that are currently visible in a Tooltip
 */
export declare const useActiveTooltipDataPoints: <T = unknown>() => ReadonlyArray<T> | undefined;
