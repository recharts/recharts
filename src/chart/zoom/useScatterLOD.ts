import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppSelector } from '../../state/hooks';
import { selectChartOffsetInternal } from '../../state/selectors/selectChartOffsetInternal';
import { getValueByDataKey } from '../../util/ChartUtils';
import { DataKey } from '../../util/types';
import { AxisId } from '../../state/cartesianAxisSlice';
import { useIsPanorama } from '../../context/PanoramaContext';
import { selectAxisScale } from '../../state/selectors/axisSelectors';
import { RechartsRootState } from '../../state/store';
import { RechartsScale } from '../../util/scale/RechartsScale';
import { areScalesApproximatelyEqual } from '../../util/propsAreEqual';

/** Options for {@link useScatterLOD}. */
export type ScatterLODOptions<T = unknown> = {
  /** Data key for the x value. */
  x: DataKey<T>;
  /** Data key for the y value. */
  y: DataKey<T>;
  /** Id of the x axis the points are plotted against. @defaultValue 0 */
  xAxisId?: AxisId;
  /** Id of the y axis the points are plotted against. @defaultValue 0 */
  yAxisId?: AxisId;
  /**
   * Grid cell size in px: at most one point is kept per cell, so overlapping points collapse to one.
   * Larger values draw fewer points; smaller values draw more. @defaultValue 2
   */
  cellSize?: number;
  /** Drop points outside the visible plot (plus a margin) so only what's on screen is drawn. @defaultValue true */
  cull?: boolean;
};

/**
 * Zoom-aware level-of-detail for scatter data: returns a decimated subset of `data` using the current
 * (zoomed) scales. Points are projected to pixels and at most one is kept per `cellSize`-px grid cell,
 * with off-screen points dropped. As you zoom in, the same data spreads over more cells so more points
 * appear - giving cheap rendering when zoomed out and full detail when zoomed in.
 *
 * Feed the result to a Scatter component with the data prop. It recomputes only when the data or the viewport
 * changes, and returns the input unchanged until the scales are measured.
 *
 * @example
 * const points = useScatterLOD(bigData, { x: 'x', y: 'y' });
 * return <Scatter data={points} />;
 */
export function useScatterLOD<T>(data: ReadonlyArray<T>, options: ScatterLODOptions<T>): ReadonlyArray<T> {
  const { x, y, xAxisId = 0, yAxisId = 0, cellSize = 2, cull = true } = options;
  const isPanorama = useIsPanorama();
  const selectXAxisScale = useCallback(
    (state: RechartsRootState) => selectAxisScale(state, 'xAxis', xAxisId, isPanorama),
    [isPanorama, xAxisId],
  );
  const selectYAxisScale = useCallback(
    (state: RechartsRootState) => selectAxisScale(state, 'yAxis', yAxisId, isPanorama),
    [isPanorama, yAxisId],
  );
  const xScale = useAppSelector<RechartsScale | undefined>(selectXAxisScale, areScalesApproximatelyEqual);
  const yScale = useAppSelector<RechartsScale | undefined>(selectYAxisScale, areScalesApproximatelyEqual);
  const offset = useAppSelector(selectChartOffsetInternal);

  // Depend on the plot's primitive dimensions (not the offset object) so the memo doesn't recompute
  // just because the selector handed back a new object with the same values.
  const plotLeft = offset?.left ?? 0;
  const plotTop = offset?.top ?? 0;
  const plotWidth = offset?.width ?? 0;
  const plotHeight = offset?.height ?? 0;
  const measured = offset != null;

  const computed = useMemo(() => {
    if (xScale == null || yScale == null || !measured) {
      return data;
    }
    const cell = cellSize > 0 ? cellSize : 1;
    /*
     * Cull with half a plot of slack on every side. The decimated result is fed back to
     * <Scatter data>, and with an automatic axis domain the kept points define the next domain: a
     * tight cull would let small domain shifts drop/add edge points, which shifts the domain again -
     * an oscillation that can crash with "Maximum update depth exceeded" under fast wheel bursts.
     * The generous margin makes the kept set a fixed point of that feedback.
     */
    const cullMarginX = plotWidth / 2 + cell;
    const cullMarginY = plotHeight / 2 + cell;
    const minX = plotLeft - cullMarginX;
    const maxX = plotLeft + plotWidth + cullMarginX;
    const minY = plotTop - cullMarginY;
    const maxY = plotTop + plotHeight + cullMarginY;
    /*
     * One flat key per grid cell. The grid is anchored on the culled band (not the plot) and the
     * column/row indexes are clamped into it, so points outside the band (cull=false) can never
     * collide with interior cells - they merge into the invisible edge cells instead.
     */
    const columns = Math.max(Math.ceil((maxX - minX) / cell) + 1, 1);
    const rows = Math.max(Math.ceil((maxY - minY) / cell) + 1, 1);

    const seen = new Set<number>();
    const result: T[] = [];
    data.forEach(point => {
      const px = xScale.map(getValueByDataKey(point, x));
      const py = yScale.map(getValueByDataKey(point, y));
      if (px == null || py == null || Number.isNaN(px) || Number.isNaN(py)) {
        return;
      }
      if (cull && (px < minX || px > maxX || py < minY || py > maxY)) {
        return;
      }
      const col = Math.min(Math.max(Math.round((px - minX) / cell), 0), columns - 1);
      const row = Math.min(Math.max(Math.round((py - minY) / cell), 0), rows - 1);
      const key = row * columns + col;
      if (seen.has(key)) {
        return;
      }
      seen.add(key);
      result.push(point);
    });

    return result.length === data.length ? data : result;
  }, [data, xScale, yScale, measured, plotLeft, plotTop, plotWidth, plotHeight, x, y, cellSize, cull]);

  /*
   * Emit through state from a passive effect rather than returning the memo directly. Feeding the
   * result straight back into <Scatter data> inside the same commit chains a dispatch onto every
   * zoom dispatch (data re-registration -> domain -> scale -> ...); under a fast wheel burst those
   * nested synchronous updates pile up and React aborts with "Maximum update depth exceeded".
   * Deferring to a passive effect puts a commit boundary in the loop, and the equality guard reuses
   * the previous array while the kept set is unchanged so the chain terminates.
   */
  const [stable, setStable] = useState(computed);
  useEffect(() => {
    setStable(previous =>
      previous.length === computed.length && previous.every((point, i) => point === computed[i]) ? previous : computed,
    );
  }, [computed]);

  return stable;
}
