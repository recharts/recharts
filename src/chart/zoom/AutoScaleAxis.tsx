import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectZoom } from '../../state/selectors/zoomSelectors';
import { selectChartOffsetInternal } from '../../state/selectors/selectChartOffsetInternal';
import { selectChartDataWithIndexes } from '../../state/selectors/dataSelectors';
import {
  selectAxisRangeWithReverse,
  selectXAxisSettings,
  selectYAxisSettings,
} from '../../state/selectors/axisSelectors';
import { setAxisViewport, ZoomDimension } from '../../state/zoomSlice';
import { useIsPanorama } from '../../context/PanoramaContext';
import { useXAxisScale, useYAxisScale } from '../../hooks';
import { getValueByDataKey } from '../../util/ChartUtils';
import { AxisId } from '../../state/cartesianAxisSlice';
import { clampViewport } from '../../util/zoom/viewport';
import { useCartesianChartLayout } from '../../context/chartLayoutContext';
import { scaleValueToDomainRatio, toFiniteNumber } from '../../util/zoom/scaleValue';

/** Props for {@link AutoScaleAxis}. */
export type AutoScaleAxisProps = {
  /**
   * Which axis to auto-fit to the data currently visible on the other one.
   *
   * Defaults to the layout's VALUE axis: `'y'` in a horizontal layout, `'x'` in a vertical layout
   * (where the category axis is y and the values run along x). Set it explicitly to override.
   */
  axis?: ZoomDimension;
  /**
   * The id of XAxis which is corresponding to the data. Required when there are multiple XAxes.
   * @defaultValue 0
   */
  xAxisId?: AxisId;
  /**
   * The id of YAxis which is corresponding to the data. Required when there are multiple YAxes.
   * @defaultValue 0
   */
  yAxisId?: AxisId;
  /** Headroom kept around the fitted data, as a fraction of the fitted span. @defaultValue 0.05 */
  padding?: number;
};

const MIN_HALF_SPAN = 0.05;

/**
 * Keeps one axis fitted to the data visible on the other one: as you pan or zoom the category axis,
 * the value axis re-scales to be as zoomed-in as possible while still showing every visible point.
 *
 * It is a headless component (renders nothing): on each change of the source axis' window it measures
 * the value extent of the points inside it and writes the matching viewport on the target axis.
 * Because the source drives the target (and never the reverse), there is no feedback loop. The target
 * axis becomes auto-managed, so don't also drive it by hand. Numeric target axis only.
 *
 * Layout-aware: in a vertical layout the roles swap (categories on y, values on x), so the default
 * target becomes the x axis. Note the SCREEN orientation of each axis never changes with layout:
 * x always runs horizontally (left/width) and y vertically (top/height).
 */
export function AutoScaleAxis({ axis, xAxisId = 0, yAxisId = 0, padding = 0.05 }: AutoScaleAxisProps) {
  const dispatch = useAppDispatch();
  const isPanorama = useIsPanorama();
  const zoom = useAppSelector(selectZoom);
  const offset = useAppSelector(selectChartOffsetInternal);
  const chartDataState = useAppSelector(selectChartDataWithIndexes);
  const cartesianItems = useAppSelector(state => state.graphicalItems.cartesianItems);
  const xScale = useXAxisScale(xAxisId);
  const yScale = useYAxisScale(yAxisId);
  const xRange = useAppSelector(state => selectAxisRangeWithReverse(state, 'xAxis', xAxisId, isPanorama));
  const yRange = useAppSelector(state => selectAxisRangeWithReverse(state, 'yAxis', yAxisId, isPanorama));
  const xAxisSettings = useAppSelector(state => selectXAxisSettings(state, xAxisId));
  const yAxisSettings = useAppSelector(state => selectYAxisSettings(state, yAxisId));
  const layout = useCartesianChartLayout();

  // `target` is the axis we re-scale (the value axis by default); `source` is the one whose visible
  // window selects the points (the category axis).
  const target: ZoomDimension = axis ?? (layout === 'vertical' ? 'x' : 'y');
  const sourceAxis: ZoomDimension = target === 'y' ? 'x' : 'y';
  const sourceScale = sourceAxis === 'x' ? xScale : yScale;
  const targetScale = target === 'y' ? yScale : xScale;
  const targetRange = target === 'y' ? yRange : xRange;
  const targetAxisSettings = target === 'y' ? yAxisSettings : xAxisSettings;
  // The series whose values live on the target axis (their data keys give the values to fit).
  const targetAxisId = target === 'y' ? yAxisId : xAxisId;
  const sourceAxisId = sourceAxis === 'x' ? xAxisId : yAxisId;
  const sourceDataKey = sourceAxis === 'x' ? xAxisSettings?.dataKey : yAxisSettings?.dataKey;

  useEffect(() => {
    const chartData = chartDataState?.chartData ?? [];
    if (
      isPanorama ||
      zoom == null ||
      offset == null ||
      sourceScale == null ||
      targetScale == null ||
      targetRange == null ||
      cartesianItems == null ||
      targetAxisSettings?.type !== 'number'
    ) {
      return;
    }

    // The screen band of the SOURCE axis. The x axis always runs horizontally and the y axis always
    // vertically, whatever the layout - layout only changes which axis carries categories vs values.
    const lo = sourceAxis === 'x' ? offset.left : offset.top;
    const hi = sourceAxis === 'x' ? offset.left + offset.width : offset.top + offset.height;

    let startRatio = Infinity;
    let endRatio = -Infinity;
    cartesianItems.forEach(item => {
      // Match on both axes: otherwise a series can be measured with a scale it does not use.
      const matchesTarget = target === 'y' ? item.yAxisId === targetAxisId : item.xAxisId === targetAxisId;
      const matchesSource = sourceAxis === 'x' ? item.xAxisId === sourceAxisId : item.yAxisId === sourceAxisId;
      if (item.isPanorama || item.hide || item.dataKey == null || !matchesTarget || !matchesSource) {
        return;
      }

      const itemData = item.data ?? chartData;
      itemData.forEach((row, index) => {
        const sourceValue = sourceDataKey != null ? getValueByDataKey(row, sourceDataKey) : index;
        const pixel = sourceScale(sourceValue);
        // Keep points whose source position is inside the visible plot band (small tolerance for bands).
        if (pixel == null || !Number.isFinite(pixel) || pixel < lo - 1 || pixel > hi + 1) {
          return;
        }

        const value = toFiniteNumber(getValueByDataKey(row, item.dataKey));
        if (value == null) {
          return;
        }
        const ratio = scaleValueToDomainRatio(value, targetScale, targetRange, zoom[target]);
        if (ratio != null) {
          startRatio = Math.min(startRatio, ratio);
          endRatio = Math.max(endRatio, ratio);
        }
      });
    });
    if (!Number.isFinite(startRatio) || !Number.isFinite(endRatio)) {
      // No visible data on this axis (e.g. panned past the end): leave the target as-is.
      return;
    }

    const half = Math.max(((endRatio - startRatio) * padding) / 2, endRatio === startRatio ? MIN_HALF_SPAN : 0);
    startRatio -= half;
    endRatio += half;
    const next = clampViewport({ startRatio, endRatio });

    const current = zoom[target];
    if (Math.abs(current.startRatio - next.startRatio) > 1e-4 || Math.abs(current.endRatio - next.endRatio) > 1e-4) {
      dispatch(setAxisViewport({ dimension: target, viewport: next }));
    }
  }, [
    isPanorama,
    zoom,
    offset,
    sourceScale,
    targetScale,
    targetRange,
    targetAxisSettings,
    chartDataState,
    cartesianItems,
    sourceDataKey,
    target,
    sourceAxis,
    targetAxisId,
    sourceAxisId,
    padding,
    dispatch,
  ]);

  return null;
}
