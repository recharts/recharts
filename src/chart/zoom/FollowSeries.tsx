import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectZoom } from '../../state/selectors/zoomSelectors';
import { selectChartOffsetInternal } from '../../state/selectors/selectChartOffsetInternal';
import { selectChartDataWithIndexes } from '../../state/selectors/dataSelectors';
import { selectXAxisSettings } from '../../state/selectors/axisSelectors';
import { setAxisViewport } from '../../state/zoomSlice';
import { useIsPanorama } from '../../context/PanoramaContext';
import { useXAxisScale, useYAxisDomain } from '../../hooks';
import { getValueByDataKey } from '../../util/ChartUtils';
import { DataKey } from '../../util/types';
import { AxisId } from '../../state/cartesianAxisSlice';
import { clampViewport } from '../../util/zoom/viewport';

/** Props for {@link FollowSeries}. */
export type FollowSeriesProps = {
  /** Data key of the series (line / area / bar) to keep vertically centred while panning. */
  dataKey: DataKey<any>;
  /**
   * Also size the visible y window to the data spread around the line (so it stays centred *and*
   * everything in view), instead of keeping a fixed zoom level. @defaultValue false
   */
  autoScale?: boolean;
  /** Visible y span as a fraction of the axis, used when `autoScale` is off. @defaultValue 0.5 */
  span?: number;
  /** Extra headroom around the spread when `autoScale` is on. @defaultValue 0.1 */
  padding?: number;
  /** Id of the x axis to read. @defaultValue 0 */
  xAxisId?: AxisId;
  /** Id of the y axis to drive. @defaultValue 0 */
  yAxisId?: AxisId;
};

/**
 * Keeps one series vertically centred as you pan: on each x-window change it measures that series'
 * value at the centre of the view and re-centres the y viewport on it, so the line/area/bar you care
 * about stays in the middle of the screen. With `autoScale`, the y span also grows/shrinks to fit the
 * data's spread around the line; otherwise the current zoom level (or `span`) is kept.
 *
 * Headless (renders nothing). Drives the y axis one-way from the x window, so there's no feedback
 * loop; the y axis becomes auto-managed. Numeric y axis only.
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
  const yDomain = useYAxisDomain(yAxisId);
  const xAxisSettings = useAppSelector(state => selectXAxisSettings(state, xAxisId));

  useEffect(() => {
    const chartData = chartDataState?.chartData;
    if (isPanorama || zoom == null || offset == null || xScale == null || chartData == null) {
      return;
    }
    if (!Array.isArray(yDomain) || yDomain.length < 2) {
      return;
    }
    const d0 = Number(yDomain[0]);
    const d1 = Number(yDomain[yDomain.length - 1]);
    const domainSpan = d1 - d0;
    if (!Number.isFinite(domainSpan) || domainSpan <= 0) {
      return;
    }

    const xKey = xAxisSettings?.dataKey;
    // The series as (x pixel, y value) pairs, sorted along x so we can read the line at the centre.
    const points: Array<{ pixel: number; value: number }> = [];
    chartData.forEach((row, index) => {
      const xValue = xKey != null ? getValueByDataKey(row, xKey) : index;
      const pixel = xScale(xValue as never);
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

    const centerPixel = offset.left + offset.width / 2;
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
      const { left } = offset;
      const right = offset.left + offset.width;
      let maxDeviation = 0;
      points.forEach(p => {
        if (p.pixel >= left - 1 && p.pixel <= right + 1) {
          maxDeviation = Math.max(maxDeviation, Math.abs((p.value - centerValue) / domainSpan));
        }
      });
      halfSpan = Math.max(maxDeviation * (1 + padding), 1e-3);
    }

    const next = clampViewport({ startRatio: centerRatio - halfSpan, endRatio: centerRatio + halfSpan });
    const current = zoom.y;
    if (Math.abs(current.startRatio - next.startRatio) > 1e-4 || Math.abs(current.endRatio - next.endRatio) > 1e-4) {
      dispatch(setAxisViewport({ dimension: 'y', viewport: next }));
    }
  }, [
    isPanorama,
    zoom,
    offset,
    xScale,
    chartDataState,
    yDomain,
    xAxisSettings,
    dataKey,
    autoScale,
    span,
    padding,
    dispatch,
  ]);

  return null;
}
