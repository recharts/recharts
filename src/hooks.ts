import { AxisId, defaultAxisId } from './state/cartesianAxisSlice';
import { BaseAxisWithScale, selectAxisDomain, selectAxisWithScale } from './state/selectors/axisSelectors';
import { useAppSelector } from './state/hooks';
import { useIsPanorama } from './context/PanoramaContext';
import { selectActiveLabel, selectActiveTooltipDataPoints } from './state/selectors/tooltipSelectors';
import { ChartOffset, PlotArea } from './types';
import { selectChartOffset } from './state/selectors/selectChartOffset';
import { selectPlotArea } from './state/selectors/selectPlotArea';
import { CategoricalDomain, NumberDomain } from './util/types';

export const useXAxis = (xAxisId: AxisId): BaseAxisWithScale | undefined => {
  const isPanorama = useIsPanorama();
  return useAppSelector(state => selectAxisWithScale(state, 'xAxis', xAxisId, isPanorama));
};

export const useYAxis = (yAxisId: AxisId): BaseAxisWithScale | undefined => {
  const isPanorama = useIsPanorama();
  return useAppSelector(state => selectAxisWithScale(state, 'yAxis', yAxisId, isPanorama));
};

/**
 * Returns the active tooltip label. The label is one of the values from the chart data,
 * and is used to display in the tooltip content.
 *
 * Returns undefined if there is no active user interaction or if used outside a chart context
 *
 * @returns string | undefined
 */
export const useActiveTooltipLabel = (): string | undefined => {
  return useAppSelector(selectActiveLabel);
};

/**
 * Offset defines the blank space between the chart and the plot area.
 * This blank space is occupied by supporting elements like axes, legends, and brushes.
 * This also includes any margins that might be applied to the chart.
 * If you are interested in the margin alone, use `useMargin` instead.
 *
 * @returns Offset of the chart in pixels, or undefined if used outside a chart context.
 */
export const useOffset = (): ChartOffset | undefined => {
  return useAppSelector(selectChartOffset);
};

/**
 * Plot area is the area where the actual chart data is rendered.
 * This means: bars, lines, scatter points, etc.
 *
 * The plot area is calculated based on the chart dimensions and the offset.
 *
 * @returns Plot area of the chart in pixels, or undefined if used outside a chart context.
 */
export const usePlotArea = (): PlotArea | undefined => {
  return useAppSelector(selectPlotArea);
};

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
export const useActiveTooltipDataPoints = <T = unknown>(): ReadonlyArray<T> | undefined => {
  return useAppSelector(selectActiveTooltipDataPoints);
};

/**
 * Returns the calculated domain of an X-axis.
 *
 * The domain can be numerical: `[min, max]`, or categorical: `['a', 'b', 'c']`.
 *
 * The type of the domain is defined by the `type` prop of the XAxis.
 *
 * The values of the domain are calculated based on the data and the `dataKey` of the axis.
 *
 * If the chart has a Brush, the domain will be filtered to the brushed indexes if the hook is used outside a Brush context,
 * and the full domain will be returned if the hook is used inside a Brush context.
 *
 * @param xAxisId The `xAxisId` of the X-axis. Defaults to `0` if not provided.
 * @returns The domain of the X-axis, or `undefined` if it cannot be calculated or if used outside a chart context.
 */
export const useXAxisDomain = (xAxisId: AxisId = defaultAxisId): NumberDomain | CategoricalDomain | undefined => {
  const isPanorama = useIsPanorama();
  return useAppSelector(state => selectAxisDomain(state, 'xAxis', xAxisId, isPanorama));
};

/**
 * Returns the calculated domain of a Y-axis.
 *
 * The domain can be numerical: `[min, max]`, or categorical: `['a', 'b', 'c']`.
 *
 * The type of the domain is defined by the `type` prop of the YAxis.
 *
 * The values of the domain are calculated based on the data and the `dataKey` of the axis.
 *
 * Does not interact with Brushes, as Y-axes do not support brushing.
 *
 * @param yAxisId The `yAxisId` of the Y-axis. Defaults to `0` if not provided.
 * @returns The domain of the Y-axis, or `undefined` if it cannot be calculated or if used outside a chart context.
 */
export const useYAxisDomain = (yAxisId: AxisId = defaultAxisId): NumberDomain | CategoricalDomain | undefined => {
  const isPanorama = useIsPanorama();
  return useAppSelector(state => selectAxisDomain(state, 'yAxis', yAxisId, isPanorama));
};
