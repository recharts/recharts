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
import { DataKey } from '../../util/types';
import { AxisId } from '../../state/cartesianAxisSlice';
import { clampViewport } from '../../util/zoom/viewport';
import { useCartesianChartLayout } from '../../context/chartLayoutContext';
import { scaleValueToDomainRatio, toFiniteNumber } from '../../util/zoom/scaleValue';

/**
 * Props for {@link FollowSeries}.
 *
 * @since 3.11
 */
export type FollowSeriesProps<DataPointType = unknown> = {
  /**
   * The data that you provide via the `data` prop is an array of objects.
   * Each object can have multiple properties, each representing a different data dimension.
   * Use the `dataKey` prop to specify which property (or dimension) to use for this component.
   *
   * Typically, you will want to have one dataKey on the X axis, and different dataKey on the Y axis,
   * where they extract different values from the same data objects.
   *
   * Decides how to extract the value from the data:
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the value.
   */
  dataKey: DataKey<DataPointType, unknown>;
  /**
   * Also size the visible value window to the data spread around the line (so it stays centred *and*
   * everything in view), instead of keeping a fixed zoom level. @defaultValue false
   */
  autoScale?: boolean;
  /** Visible value span as a fraction of the axis, used when `autoScale` is off. @defaultValue 0.5 */
  span?: number;
  /** Extra headroom around the spread when `autoScale` is on. @defaultValue 0.1 */
  padding?: number;
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
};

/**
 * Keeps one series centred on the value axis as you pan: on each category-window change it measures
 * that series' value at the centre of the view and re-centres the value viewport on it, so the
 * line/area/bar you care about stays in the middle of the screen. With `autoScale`, the value span
 * also grows/shrinks to fit the data's spread; otherwise the configured `span` is kept.
 *
 * Layout-aware: in a horizontal layout it follows along x and drives the y viewport; in a vertical
 * layout (categories on y, values on x) it follows along y and drives the x viewport. The SCREEN
 * orientation of each axis never changes with layout: x always runs horizontally, y vertically.
 *
 * Headless (renders nothing). Drives the value axis one-way from the category window, so there's no
 * feedback loop; the value axis becomes auto-managed. Numeric value axis only.
 *
 * @since 3.11
 */
export function FollowSeries<DataPointType = unknown>({
  dataKey,
  autoScale = false,
  span = 0.5,
  padding = 0.1,
  xAxisId = 0,
  yAxisId = 0,
}: FollowSeriesProps<DataPointType>) {
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

  // `source` is the category axis we follow along; `target` is the value axis we re-centre.
  const sourceAxis: ZoomDimension = layout === 'vertical' ? 'y' : 'x';
  const target: ZoomDimension = sourceAxis === 'x' ? 'y' : 'x';
  const sourceScale = sourceAxis === 'x' ? xScale : yScale;
  const targetScale = target === 'y' ? yScale : xScale;
  const targetRange = target === 'y' ? yRange : xRange;
  const targetAxisSettings = target === 'y' ? yAxisSettings : xAxisSettings;
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

    // Keep target values as full-domain ratios. Interpolating in this scale space follows the
    // rendered line for non-linear scales instead of assuming its data values are linear.
    const points: Array<{ pixel: number; ratio: number }> = [];
    cartesianItems.forEach(item => {
      if (
        item.isPanorama ||
        item.hide ||
        item.dataKey == null ||
        item.dataKey !== dataKey ||
        item.xAxisId !== xAxisId ||
        item.yAxisId !== yAxisId
      ) {
        return;
      }

      const itemData = item.data ?? chartData;
      itemData.forEach((row, index) => {
        const sourceValue = sourceDataKey != null ? getValueByDataKey(row, sourceDataKey) : index;
        const pixel = sourceScale(sourceValue);
        const value = toFiniteNumber(getValueByDataKey(row, item.dataKey));
        if (pixel == null || !Number.isFinite(pixel) || value == null) {
          return;
        }
        const ratio = scaleValueToDomainRatio(value, targetScale, targetRange, zoom[target]);
        if (ratio != null) {
          points.push({ pixel, ratio });
        }
      });
    });
    points.sort((a, b) => a.pixel - b.pixel);
    const first = points[0];
    const last = points[points.length - 1];
    if (first == null || last == null) {
      return;
    }

    // The screen band of the SOURCE axis: x always runs horizontally (left/width), y always
    // vertically (top/height) - layout only swaps which axis carries categories vs values.
    const lo = sourceAxis === 'x' ? offset.left : offset.top;
    const size = sourceAxis === 'x' ? offset.width : offset.height;
    const hi = lo + size;
    const centerPixel = lo + size / 2;

    // Linear interpolation of the line's target-scale position at the centre of the view.
    let centerRatio = last.ratio;
    if (centerPixel <= first.pixel) {
      centerRatio = first.ratio;
    } else if (centerPixel < last.pixel) {
      for (let i = 0; i < points.length - 1; i += 1) {
        const a = points[i];
        const b = points[i + 1];
        if (a != null && b != null && centerPixel >= a.pixel && centerPixel <= b.pixel) {
          const t = b.pixel === a.pixel ? 0 : (centerPixel - a.pixel) / (b.pixel - a.pixel);
          centerRatio = a.ratio + (b.ratio - a.ratio) * t;
          break;
        }
      }
    }

    let halfSpan = span / 2;
    if (autoScale) {
      let maxDeviation = 0;
      points.forEach(p => {
        if (p.pixel >= lo - 1 && p.pixel <= hi + 1) {
          maxDeviation = Math.max(maxDeviation, Math.abs(p.ratio - centerRatio));
        }
      });
      halfSpan = Math.max(maxDeviation * (1 + padding), 1e-3);
    }

    const next = clampViewport({ startRatio: centerRatio - halfSpan, endRatio: centerRatio + halfSpan });
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
    sourceAxis,
    target,
    dataKey,
    xAxisId,
    yAxisId,
    autoScale,
    span,
    padding,
    dispatch,
  ]);

  return null;
}
