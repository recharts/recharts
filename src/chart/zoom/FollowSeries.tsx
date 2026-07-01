import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectZoom } from '../../state/selectors/zoomSelectors';
import { selectChartOffsetInternal } from '../../state/selectors/selectChartOffsetInternal';
import { selectChartDataWithIndexes } from '../../state/selectors/dataSelectors';
import { selectXAxisSettings, selectYAxisSettings } from '../../state/selectors/axisSelectors';
import { setAxisViewport, ZoomDimension } from '../../state/zoomSlice';
import { useIsPanorama } from '../../context/PanoramaContext';
import { useXAxisScale, useYAxisScale, useXAxisDomain, useYAxisDomain } from '../../hooks';
import { getValueByDataKey } from '../../util/ChartUtils';
import { DataKey } from '../../util/types';
import { AxisId } from '../../state/cartesianAxisSlice';
import { clampViewport } from '../../util/zoom/viewport';
import { useCartesianChartLayout } from '../../context/chartLayoutContext';

/** Props for {@link FollowSeries}. */
export type FollowSeriesProps = {
  /** Data key of the series (line / area / bar) to keep centred on the value axis while panning. */
  dataKey: DataKey<any>;
  /**
   * Also size the visible value window to the data spread around the line (so it stays centred *and*
   * everything in view), instead of keeping a fixed zoom level. @defaultValue false
   */
  autoScale?: boolean;
  /** Visible value span as a fraction of the axis, used when `autoScale` is off. @defaultValue 0.5 */
  span?: number;
  /** Extra headroom around the spread when `autoScale` is on. @defaultValue 0.1 */
  padding?: number;
  /** Id of the x axis to read. @defaultValue 0 */
  xAxisId?: AxisId;
  /** Id of the y axis to read. @defaultValue 0 */
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
 */
export function FollowSeries({
  dataKey,
  autoScale = false,
  span = 0.5,
  padding = 0.1,
  xAxisId = 0,
  yAxisId = 0,
}: FollowSeriesProps) {
  const dispatch = useAppDispatch();
  const isPanorama = useIsPanorama();
  const zoom = useAppSelector(selectZoom);
  const offset = useAppSelector(selectChartOffsetInternal);
  const chartDataState = useAppSelector(selectChartDataWithIndexes);
  const xScale = useXAxisScale(xAxisId);
  const yScale = useYAxisScale(yAxisId);
  const xDomain = useXAxisDomain(xAxisId);
  const yDomain = useYAxisDomain(yAxisId);
  const xAxisSettings = useAppSelector(state => selectXAxisSettings(state, xAxisId));
  const yAxisSettings = useAppSelector(state => selectYAxisSettings(state, yAxisId));
  const layout = useCartesianChartLayout();

  // `source` is the category axis we follow along; `target` is the value axis we re-centre.
  const sourceAxis: ZoomDimension = layout === 'vertical' ? 'y' : 'x';
  const target: ZoomDimension = sourceAxis === 'x' ? 'y' : 'x';
  const sourceScale = sourceAxis === 'x' ? xScale : yScale;
  const targetDomain = target === 'y' ? yDomain : xDomain;
  const sourceDataKey = sourceAxis === 'x' ? xAxisSettings?.dataKey : yAxisSettings?.dataKey;

  useEffect(() => {
    const chartData = chartDataState?.chartData;
    if (isPanorama || zoom == null || offset == null || sourceScale == null || chartData == null) {
      return;
    }
    if (!Array.isArray(targetDomain) || targetDomain.length < 2) {
      return;
    }
    const d0 = Number(targetDomain[0]);
    const d1 = Number(targetDomain[targetDomain.length - 1]);
    const domainSpan = d1 - d0;
    if (!Number.isFinite(domainSpan) || domainSpan <= 0) {
      return;
    }

    // The series as (source-axis pixel, value) pairs, sorted along the source axis so we can read
    // the line at the centre of the view.
    const points: Array<{ pixel: number; value: number }> = [];
    chartData.forEach((row, index) => {
      const sourceValue = sourceDataKey != null ? getValueByDataKey(row, sourceDataKey) : index;
      const pixel = sourceScale(sourceValue);
      const value = Number(getValueByDataKey(row, dataKey));
      if (pixel != null && !Number.isNaN(pixel) && Number.isFinite(value)) {
        points.push({ pixel, value });
      }
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

    // Linear interpolation of the line's value at the centre of the view.
    let centerValue = last.value;
    if (centerPixel <= first.pixel) {
      centerValue = first.value;
    } else if (centerPixel < last.pixel) {
      for (let i = 0; i < points.length - 1; i += 1) {
        const a = points[i];
        const b = points[i + 1];
        if (a != null && b != null && centerPixel >= a.pixel && centerPixel <= b.pixel) {
          const t = b.pixel === a.pixel ? 0 : (centerPixel - a.pixel) / (b.pixel - a.pixel);
          centerValue = a.value + (b.value - a.value) * t;
          break;
        }
      }
    }

    const centerRatio = (centerValue - d0) / domainSpan;
    let halfSpan = span / 2;
    if (autoScale) {
      let maxDeviation = 0;
      points.forEach(p => {
        if (p.pixel >= lo - 1 && p.pixel <= hi + 1) {
          maxDeviation = Math.max(maxDeviation, Math.abs((p.value - centerValue) / domainSpan));
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
    chartDataState,
    targetDomain,
    sourceDataKey,
    sourceAxis,
    target,
    dataKey,
    autoScale,
    span,
    padding,
    dispatch,
  ]);

  return null;
}
