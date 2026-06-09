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
import { AxisId } from '../../state/cartesianAxisSlice';
import { clampViewport } from '../../util/zoom/viewport';

/** Props for {@link AutoScaleAxis}. */
export type AutoScaleAxisProps = {
  /**
   * Which axis to auto-fit to the data currently visible on the other axis. `'y'` (the default)
   * re-fits the value axis as you pan/zoom the x axis; `'x'` does the opposite.
   * @defaultValue 'y'
   */
  axis?: ZoomDimension;
  /** Id of the x axis to read. @defaultValue 0 */
  xAxisId?: AxisId;
  /** Id of the y axis to read. @defaultValue 0 */
  yAxisId?: AxisId;
  /** Headroom kept around the fitted data, as a fraction of the fitted span. @defaultValue 0.05 */
  padding?: number;
};

const MIN_HALF_SPAN = 0.05;

/**
 * Keeps one axis fitted to the data visible on the other one: as you pan or zoom (say the x axis),
 * the y axis re-scales to be as zoomed-in as possible while still showing every visible point.
 *
 * It is a headless component (renders nothing): on each change of the source axis' window it measures
 * the value extent of the points inside it and writes the matching viewport on the target axis.
 * Because the source drives the target (and never the reverse), there is no feedback loop. The target
 * axis becomes auto-managed, so don't also drive it by hand. Numeric target axis only.
 */
export function AutoScaleAxis({ axis = 'y', xAxisId = 0, yAxisId = 0, padding = 0.05 }: AutoScaleAxisProps) {
  const dispatch = useAppDispatch();
  const isPanorama = useIsPanorama();
  const zoom = useAppSelector(selectZoom);
  const offset = useAppSelector(selectChartOffsetInternal);
  const chartDataState = useAppSelector(selectChartDataWithIndexes);
  const cartesianItems = useAppSelector(state => state.graphicalItems.cartesianItems);
  const xScale = useXAxisScale(xAxisId);
  const yScale = useYAxisScale(yAxisId);
  const xDomain = useXAxisDomain(xAxisId);
  const yDomain = useYAxisDomain(yAxisId);
  const xAxisSettings = useAppSelector(state => selectXAxisSettings(state, xAxisId));
  const yAxisSettings = useAppSelector(state => selectYAxisSettings(state, yAxisId));

  // `target` is the axis we re-scale; `source` is the one whose visible window selects the points.
  const target = axis;
  const sourceScale = target === 'y' ? xScale : yScale;
  const targetDomain = target === 'y' ? yDomain : xDomain;
  // The series whose values live on the target axis (their data keys give the values to fit).
  const targetAxisId = target === 'y' ? yAxisId : xAxisId;
  const sourceDataKey = target === 'y' ? xAxisSettings?.dataKey : yAxisSettings?.dataKey;

  useEffect(() => {
    const chartData = chartDataState?.chartData;
    if (
      isPanorama ||
      zoom == null ||
      offset == null ||
      sourceScale == null ||
      chartData == null ||
      cartesianItems == null
    ) {
      return;
    }
    // Auto-scaling only makes sense against a numeric target domain.
    if (!Array.isArray(targetDomain) || targetDomain.length < 2) {
      return;
    }
    const d0 = Number(targetDomain[0]);
    const d1 = Number(targetDomain[targetDomain.length - 1]);
    const domainSpan = d1 - d0;
    if (!Number.isFinite(domainSpan) || domainSpan <= 0) {
      return;
    }

    const lo = target === 'y' ? offset.left : offset.top;
    const hi = target === 'y' ? offset.left + offset.width : offset.top + offset.height;
    const valueKeys = cartesianItems
      .filter(item => (target === 'y' ? item.yAxisId === targetAxisId : item.xAxisId === targetAxisId))
      .filter(item => !item.hide && item.dataKey != null)
      .map(item => item.dataKey);
    if (valueKeys.length === 0) {
      return;
    }

    let min = Infinity;
    let max = -Infinity;
    chartData.forEach((row, index) => {
      const sourceValue = sourceDataKey != null ? getValueByDataKey(row, sourceDataKey) : index;
      const pixel = sourceScale(sourceValue as never);
      // Keep points whose source position is inside the visible plot band (small tolerance for bands).
      if (pixel == null || Number.isNaN(pixel) || pixel < lo - 1 || pixel > hi + 1) {
        return;
      }
      valueKeys.forEach(key => {
        const value = Number(getValueByDataKey(row, key));
        if (Number.isFinite(value)) {
          min = Math.min(min, value);
          max = Math.max(max, value);
        }
      });
    });
    if (!Number.isFinite(min) || !Number.isFinite(max)) {
      // No visible data on this axis (e.g. panned past the end): leave the target as-is.
      return;
    }

    let startRatio = (min - d0) / domainSpan;
    let endRatio = (max - d0) / domainSpan;
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
    chartDataState,
    cartesianItems,
    targetDomain,
    sourceDataKey,
    target,
    targetAxisId,
    padding,
    dispatch,
  ]);

  return null;
}
