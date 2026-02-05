import { AxisId, defaultAxisId } from './state/cartesianAxisSlice';
import {
  BaseAxisWithScale,
  selectAxisDomain,
  selectAxisInverseScale,
  selectAxisInverseDataSnapScale,
  selectAxisInverseTickSnapScale,
  selectAxisScale,
  selectAxisWithScale,
  selectTicksOfAxis,
} from './state/selectors/axisSelectors';
import { useAppSelector } from './state/hooks';
import { useIsPanorama } from './context/PanoramaContext';
import {
  selectActiveLabel,
  selectActiveTooltipCoordinate,
  selectActiveTooltipDataPoints,
  selectIsTooltipActive,
} from './state/selectors/tooltipSelectors';
import { ChartOffset, PlotArea } from './types';
import { selectChartOffset } from './state/selectors/selectChartOffset';
import { selectPlotArea } from './state/selectors/selectPlotArea';
import { CategoricalDomain, Coordinate, NumberDomain, CartesianTickItem } from './util/types';
import { ActiveLabel } from './synchronisation/types';
import { BandPosition } from './util/scale/RechartsScale';

export const useXAxis = (xAxisId: AxisId): BaseAxisWithScale | undefined => {
  const isPanorama = useIsPanorama();
  return useAppSelector(state => selectAxisWithScale(state, 'xAxis', xAxisId, isPanorama));
};

export const useYAxis = (yAxisId: AxisId): BaseAxisWithScale | undefined => {
  const isPanorama = useIsPanorama();
  return useAppSelector(state => selectAxisWithScale(state, 'yAxis', yAxisId, isPanorama));
};

/**
 * A function that converts data values to pixel coordinates.
 * @param value - The data value to convert (number, string, or category).
 * @param options - Optional configuration for banded scales.
 * @param options.position - Position within a band: 'start', 'middle', or 'end'.
 * @returns The pixel coordinate, or `undefined` if the value is not in the domain.
 */
export type ScaleFunction = (value: unknown, options?: { position?: BandPosition }) => number | undefined;

/**
 * A function that converts pixel coordinates back to data values.
 * @param pixelValue - The pixel coordinate to convert.
 * @returns The closest data value in the domain.
 */
export type InverseScaleFunction = (pixelValue: number) => unknown;

/**
 * Returns a function to convert data values to pixel coordinates for an {@link XAxis}.
 *
 * This is useful for positioning annotations, custom shapes, or other elements
 * at specific data points on the chart.
 *
 * This hook must be used within a chart context (inside a {@link LineChart}, {@link BarChart}, etc.).
 * Returns `undefined` if used outside a chart context, or if the axes don't exist.
 *
 * @example
 * ```tsx
 * const xScale = useXAxisScale();
 * if (xScale) {
 *   const pixelX = xScale('Page A'); // Returns the pixel x-coordinate for 'Page A'
 * }
 * ```
 *
 * @param xAxisId The `xAxisId` of the XAxis. Defaults to `0` if not provided.
 * @returns A scale function that maps data values to pixel coordinates, or `undefined`.
 * @since 3.8
 */
export const useXAxisScale = (xAxisId: AxisId = defaultAxisId): ScaleFunction | undefined => {
  const isPanorama = useIsPanorama();
  const scale = useAppSelector(state => selectAxisScale(state, 'xAxis', xAxisId, isPanorama));
  return scale?.map;
};

/**
 * Returns a function to convert data values to pixel coordinates for a {@link YAxis}.
 *
 * This is useful for positioning annotations, custom shapes, or other elements
 * at specific data points on the chart.
 *
 * This hook must be used within a chart context (inside a {@link LineChart}, {@link BarChart}, etc.).
 * Returns `undefined` if used outside a chart context, or if the axes don't exist.
 *
 * @example
 * ```tsx
 * const yScale = useYAxisScale();
 * if (yScale) {
 *   const pixelY = yScale(1500); // Returns the pixel y-coordinate for value 1500
 * }
 * ```
 *
 * @param yAxisId The `yAxisId` of the YAxis. Defaults to `0` if not provided.
 * @returns A scale function that maps data values to pixel coordinates, or `undefined`.
 * @since 3.8
 */
export const useYAxisScale = (yAxisId: AxisId = defaultAxisId): ScaleFunction | undefined => {
  const isPanorama = useIsPanorama();
  const scale = useAppSelector(state => selectAxisScale(state, 'yAxis', yAxisId, isPanorama));
  return scale?.map;
};

/**
 * Returns a function to convert pixel coordinates back to data values for an {@link XAxis}.
 *
 * This is useful for implementing interactions like click-to-add-annotation,
 * drag interactions, or tooltips that need to determine what data point
 * corresponds to a mouse position.
 *
 * For continuous (numerical) scales, returns an interpolated value.
 * For categorical scales, returns the closest category in the domain.
 *
 * This hook must be used within a chart context (inside a {@link LineChart}, {@link BarChart}, etc.).
 * Returns `undefined` if used outside a chart context, or if the axes don't exist.
 *
 * @example
 * ```tsx
 * const xInverseScale = useXAxisInverseScale();
 * if (xInverseScale) {
 *   const dataValue = xInverseScale(150); // Returns the data value at pixel x=150
 * }
 * ```
 *
 * @param xAxisId The `xAxisId` of the XAxis. Defaults to `0` if not provided.
 * @returns An inverse scale function that maps pixel coordinates to data values, or `undefined`.
 * @since 3.8
 */
export const useXAxisInverseScale = (xAxisId: AxisId = defaultAxisId): InverseScaleFunction | undefined => {
  const isPanorama = useIsPanorama();
  return useAppSelector(state => selectAxisInverseScale(state, 'xAxis', xAxisId, isPanorama));
};

/**
 * Returns a function to convert pixel coordinates back to data values for an {@link XAxis},
 * but snapping to the closest data point.
 *
 * This is similar to {@link useXAxisInverseScale}, but instead of returning the exact data value
 * at the pixel position (interpolation), it returns the value of the closest data point.
 *
 * This is useful for implementing interactions where you want to select the closest data point
 * rather than an exact value or a tick.
 *
 * This hook must be used within a chart context (inside a {@link LineChart}, {@link BarChart}, etc.).
 * Returns `undefined` if used outside a chart context, or if the axes don't exist.
 *
 * @param xAxisId The `xAxisId` of the XAxis. Defaults to `0` if not provided.
 * @returns An inverse scale function that maps pixel coordinates to the closest data value, or `undefined`.
 * @since 3.8
 */
export const useXAxisInverseDataSnapScale = (xAxisId: AxisId = defaultAxisId): InverseScaleFunction | undefined => {
  const isPanorama = useIsPanorama();
  return useAppSelector(state => selectAxisInverseDataSnapScale(state, 'xAxis', xAxisId, isPanorama));
};

/**
 * Returns a function to convert pixel coordinates back to data values for an {@link XAxis},
 * but snapping to the closest axis tick.
 *
 * This is similar to {@link useXAxisInverseScale}, but instead of returning the exact data value
 * at the pixel position (interpolation), it returns the value of the closest tick.
 *
 * This is useful for implementing interactions where you want to select the closest tick
 * rather than an exact value or a data point.
 *
 * This hook must be used within a chart context (inside a {@link LineChart}, {@link BarChart}, etc.).
 * Returns `undefined` if used outside a chart context, or if the axes don't exist.
 *
 * @param xAxisId The `xAxisId` of the XAxis. Defaults to `0` if not provided.
 * @returns An inverse scale function that maps pixel coordinates to the closest tick value, or `undefined`.
 * @since 3.8
 */
export const useXAxisInverseTickSnapScale = (xAxisId: AxisId = defaultAxisId): InverseScaleFunction | undefined => {
  const isPanorama = useIsPanorama();
  return useAppSelector(state => selectAxisInverseTickSnapScale(state, 'xAxis', xAxisId, isPanorama));
};

/**
 * Returns a function to convert pixel coordinates back to data values for a {@link YAxis}.
 *
 * This is useful for implementing interactions like click-to-add-annotation,
 * drag interactions, or tooltips that need to determine what data point
 * corresponds to a mouse position.
 *
 * For continuous (numerical) scales, returns an interpolated value.
 * For categorical scales, returns the closest category in the domain.
 *
 * This hook must be used within a chart context (inside a {@link LineChart}, {@link BarChart}, etc.).
 * Returns `undefined` if used outside a chart context, or if the axes don't exist.
 *
 * @example
 * ```tsx
 * const yInverseScale = useYAxisInverseScale();
 * if (yInverseScale) {
 *   const dataValue = yInverseScale(200); // Returns the data value at pixel y=200
 * }
 * ```
 *
 * @param yAxisId The `yAxisId` of the YAxis. Defaults to `0` if not provided.
 * @returns An inverse scale function that maps pixel coordinates to data values, or `undefined`.
 * @since 3.8
 */
export const useYAxisInverseScale = (yAxisId: AxisId = defaultAxisId): InverseScaleFunction | undefined => {
  const isPanorama = useIsPanorama();
  return useAppSelector(state => selectAxisInverseScale(state, 'yAxis', yAxisId, isPanorama));
};

/**
 * Returns a function to convert pixel coordinates back to data values for a {@link YAxis},
 * but snapping to the closest data point.
 *
 * This is similar to {@link useYAxisInverseScale}, but instead of returning the exact data value
 * at the pixel position (interpolation), it returns the value of the closest data point.
 *
 * This is useful for implementing interactions where you want to select the closest data point
 * rather than an exact value or a tick.
 *
 * This hook must be used within a chart context (inside a {@link LineChart}, {@link BarChart}, etc.).
 * Returns `undefined` if used outside a chart context, or if the axes don't exist.
 *
 * @param yAxisId The `yAxisId` of the YAxis. Defaults to `0` if not provided.
 * @returns An inverse scale function that maps pixel coordinates to the closest data value, or `undefined`.
 * @since 3.8
 */
export const useYAxisInverseDataSnapScale = (yAxisId: AxisId = defaultAxisId): InverseScaleFunction | undefined => {
  const isPanorama = useIsPanorama();
  return useAppSelector(state => selectAxisInverseDataSnapScale(state, 'yAxis', yAxisId, isPanorama));
};

/**
 * Returns a function to convert pixel coordinates back to data values for a {@link YAxis},
 * but snapping to the closest axis tick.
 *
 * This is similar to {@link useYAxisInverseScale}, but instead of returning the exact data value
 * at the pixel position (interpolation), it returns the value of the closest tick.
 *
 * This is useful for implementing interactions where you want to select the closest tick
 * rather than an exact value or a data point.
 *
 * This hook must be used within a chart context (inside a {@link LineChart}, {@link BarChart}, etc.).
 * Returns `undefined` if used outside a chart context, or if the axes don't exist.
 *
 * @param yAxisId The `yAxisId` of the YAxis. Defaults to `0` if not provided.
 * @returns An inverse scale function that maps pixel coordinates to the closest tick value, or `undefined`.
 * @since 3.8
 */
export const useYAxisInverseTickSnapScale = (yAxisId: AxisId = defaultAxisId): InverseScaleFunction | undefined => {
  const isPanorama = useIsPanorama();
  return useAppSelector(state => selectAxisInverseTickSnapScale(state, 'yAxis', yAxisId, isPanorama));
};

/**
 * Returns the ticks of an {@link XAxis}.
 *
 * This hook is useful for accessing the calculated ticks of an XAxis.
 * The ticks are the same as the ones rendered by the XAxis component.
 *
 * @param xAxisId The `xAxisId` of the XAxis. Defaults to `0` if not provided.
 * @returns An array of ticks, or `undefined` if the axis doesn't exist or hasn't been calculated yet.
 * @since 3.8
 */
export const useXAxisTicks = (xAxisId: AxisId = defaultAxisId): ReadonlyArray<CartesianTickItem> | undefined => {
  const isPanorama = useIsPanorama();
  return useAppSelector(state => selectTicksOfAxis(state, 'xAxis', xAxisId, isPanorama));
};

/**
 * Returns the ticks of a {@link YAxis}.
 *
 * This hook is useful for accessing the calculated ticks of a YAxis.
 * The ticks are the same as the ones rendered by the YAxis component.
 *
 * @param yAxisId The `yAxisId` of the YAxis. Defaults to `0` if not provided.
 * @returns An array of ticks, or `undefined` if the axis doesn't exist or hasn't been calculated yet.
 * @since 3.8
 */
export const useYAxisTicks = (yAxisId: AxisId = defaultAxisId): ReadonlyArray<CartesianTickItem> | undefined => {
  const isPanorama = useIsPanorama();
  return useAppSelector(state => selectTicksOfAxis(state, 'yAxis', yAxisId, isPanorama));
};

/**
 * Data point with x and y values that can be converted to pixel coordinates.
 * The x and y values should be in the same format as your chart data.
 */
export type CartesianDataPoint = {
  x: number | string;
  y: number | string;
};

/**
 * Converts a data point (in data coordinates) to pixel coordinates.
 *
 * This hook is useful for positioning annotations, custom shapes, or other elements
 * at specific data points on the chart. It uses the axis scales to convert
 * data values to their corresponding pixel positions within the chart area.
 *
 * This hook must be used within a chart context (inside a {@link LineChart}, {@link BarChart}, etc.).
 * Returns `undefined` if used outside a chart context, or if the axes don't exist, or if the data point
 * cannot be converted (e.g., if the data values are outside the axis domains).
 *
 * This is a convenience hook that combines {@link useXAxisScale} and {@link useYAxisScale} together in a single call.
 *
 * @example
 * ```tsx
 * // Position a marker at data point { x: 'Page C', y: 2500 }
 * const pixelCoords = useCartesianScale({ x: 'Page C', y: 2500 });
 * if (pixelCoords) {
 *   return <circle cx={pixelCoords.x} cy={pixelCoords.y} r={5} fill="red" />;
 * }
 * ```
 *
 * @param dataPoint The data point with x and y values in data coordinates.
 * @param xAxisId The `xAxisId` of the X-axis. Defaults to `0` if not provided.
 * @param yAxisId The `yAxisId` of the Y-axis. Defaults to `0` if not provided.
 * @returns The pixel x,y coordinates, or `undefined` if conversion is not possible.
 * @since 3.8
 */
export const useCartesianScale = (
  dataPoint: CartesianDataPoint,
  xAxisId: AxisId = defaultAxisId,
  yAxisId: AxisId = defaultAxisId,
): Coordinate | undefined => {
  const xScale = useXAxisScale(xAxisId);
  const yScale = useYAxisScale(yAxisId);

  if (xScale == null || yScale == null) {
    return undefined;
  }

  const pixelX = xScale(dataPoint.x);
  const pixelY = yScale(dataPoint.y);

  if (pixelX == null || pixelY == null) {
    return undefined;
  }

  return { x: pixelX, y: pixelY };
};

/**
 * Returns the active tooltip label. The label is one of the values from the chart data,
 * and is used to display in the tooltip content.
 *
 * Returns undefined if there is no active user interaction or if used outside a chart context
 *
 * @returns ActiveLabel
 * @since 3.0
 */
export const useActiveTooltipLabel = (): ActiveLabel => {
  return useAppSelector(selectActiveLabel);
};

/**
 * Returns the offset of the chart in pixels.
 *
 * Offset defines the blank space between the chart and the plot area.
 * This blank space is occupied by supporting elements like axes, legends, and brushes.
 *
 * The offset includes:
 *
 * - Margins
 * - Width and height of the axes
 * - Width and height of the legend
 * - Brush height
 *
 * If you are interested in the margin alone, use {@link useMargin} instead.
 *
 * The offset is independent of charts position on the page, meaning it does not change as the chart is scrolled or resized.
 *
 * It is also independent of the scale and zoom, meaning that as the user zooms in and out,
 * the numbers will not change as the chart gets visually larger or smaller.
 *
 * This hook must be used within a chart context (inside a `<LineChart>`, `<BarChart>`, etc.).
 * This hook returns `undefined` if used outside a chart context.
 *
 * @returns Offset of the chart in pixels, or undefined if used outside a chart context.
 * @since 3.1
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
 * Plot area `width` and `height` are the dimensions in pixels;
 * `x` and `y` are the coordinates of the top-left corner of the plot area relative to the chart container.
 *
 * They are also independent of the scale and zoom, meaning that as the user zooms in and out,
 * the plot area dimensions will not change as the chart gets visually larger or smaller.
 *
 * This hook must be used within a chart context (inside a `<LineChart>`, `<BarChart>`, etc.).
 * This hook returns `undefined` if used outside a chart context.
 *
 * @returns Plot area of the chart in pixels, or undefined if used outside a chart context.
 * @since 3.1
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
 * @since 3.2
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
 * @since 3.2
 */
export const useYAxisDomain = (yAxisId: AxisId = defaultAxisId): NumberDomain | CategoricalDomain | undefined => {
  const isPanorama = useIsPanorama();
  return useAppSelector(state => selectAxisDomain(state, 'yAxis', yAxisId, isPanorama));
};

/**
 * Returns true if the {@link Tooltip} is currently active (visible).
 *
 * Returns false if the Tooltip is not active or if used outside a chart context.
 *
 * Recharts only allows one Tooltip per chart, so this hook does not take any parameters.
 * Weird things may happen if you have multiple Tooltip components in the same chart so please don't do that.
 *
 * @returns {boolean} True if the Tooltip is active, false otherwise.
 * @since 3.7
 */
export const useIsTooltipActive = (): boolean => {
  return useAppSelector(selectIsTooltipActive) ?? false;
};

/**
 * Returns the Cartesian `x` + `y` coordinates of the active {@link Tooltip}.
 *
 * Returns undefined if there is no active user interaction or if used outside a chart context.
 *
 * Recharts only allows one Tooltip per chart, so this hook does not take any parameters.
 * Weird things may happen if you have multiple Tooltip components in the same chart so please don't do that.
 *
 * @returns {Coordinate | undefined} The coordinate of the active Tooltip, or undefined.
 * @since 3.7
 */
export const useActiveTooltipCoordinate = (): Coordinate | undefined => {
  const coordinate = useAppSelector(selectActiveTooltipCoordinate);
  if (coordinate == null) {
    return undefined;
  }
  return {
    x: coordinate.x,
    y: coordinate.y,
  };
};
