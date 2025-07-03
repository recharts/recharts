import type { AxisId } from './state/cartesianAxisSlice';
import { BaseAxisWithScale, selectAxisWithScale } from './state/selectors/axisSelectors';
import { useAppSelector } from './state/hooks';
import { useIsPanorama } from './context/PanoramaContext';
import { selectActiveLabel } from './state/selectors/tooltipSelectors';
import { ChartOffset, PlotArea } from './types';
import { useChartHeight, useChartWidth } from './context/chartLayoutContext';
import { selectChartOffsetInternal } from './state/selectors/selectChartOffsetInternal';

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
 *
 * @returns Offset of the chart in pixels, or undefined if used outside a chart context.
 */
export const useOffset = (): ChartOffset | undefined => {
  const offsetInternal = useAppSelector(selectChartOffsetInternal);
  if (!offsetInternal) {
    return undefined;
  }
  return {
    top: offsetInternal.top,
    bottom: offsetInternal.bottom,
    left: offsetInternal.left,
    right: offsetInternal.right,
  };
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
  const offset = useOffset();
  const chartWidth = useChartWidth();
  const chartHeight = useChartHeight();
  if (!offset || chartWidth == null || chartHeight == null) {
    return undefined;
  }

  return {
    width: chartWidth - offset.left - offset.right,
    height: chartHeight - offset.top - offset.bottom,
    x: offset.left,
    y: offset.top,
  };
};
