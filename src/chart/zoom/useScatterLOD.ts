import { useMemo } from 'react';
import { useAppSelector } from '../../state/hooks';
import { selectChartOffsetInternal } from '../../state/selectors/selectChartOffsetInternal';
import { useXAxisScale, useYAxisScale } from '../../hooks';
import { getValueByDataKey } from '../../util/ChartUtils';
import { DataKey } from '../../util/types';
import { AxisId } from '../../state/cartesianAxisSlice';

/** Options for {@link useScatterLOD}. */
export type ScatterLODOptions = {
  /** Data key for the x value. */
  x: DataKey<any>;
  /** Data key for the y value. */
  y: DataKey<any>;
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
 * Feed the result to a `<Scatter data={...} />`. It recomputes only when the data or the viewport
 * changes, and returns the input unchanged until the scales are measured.
 *
 * @example
 * const points = useScatterLOD(bigData, { x: 'x', y: 'y' });
 * return <Scatter data={points} />;
 */
export function useScatterLOD<T>(data: ReadonlyArray<T>, options: ScatterLODOptions): ReadonlyArray<T> {
  const { x, y, xAxisId = 0, yAxisId = 0, cellSize = 2, cull = true } = options;
  const xScale = useXAxisScale(xAxisId);
  const yScale = useYAxisScale(yAxisId);
  const offset = useAppSelector(selectChartOffsetInternal);

  return useMemo(() => {
    if (xScale == null || yScale == null || offset == null) {
      return data;
    }
    const cell = cellSize > 0 ? cellSize : 1;
    const left = offset.left - cell;
    const right = offset.left + offset.width + cell;
    const top = offset.top - cell;
    const bottom = offset.top + offset.height + cell;

    const seen = new Set<number>();
    const result: T[] = [];
    // A flat key per grid cell; the column count bounds the range so cells never collide.
    const columns = Math.max(Math.ceil(offset.width / cell) + 3, 1);

    data.forEach(point => {
      const px = xScale(getValueByDataKey(point, x as DataKey<T>) as never);
      const py = yScale(getValueByDataKey(point, y as DataKey<T>) as never);
      if (px == null || py == null || Number.isNaN(px) || Number.isNaN(py)) {
        return;
      }
      if (cull && (px < left || px > right || py < top || py > bottom)) {
        return;
      }
      const key = Math.round((py - offset.top) / cell) * columns + Math.round((px - offset.left) / cell);
      if (seen.has(key)) {
        return;
      }
      seen.add(key);
      result.push(point);
    });

    return result.length === data.length ? data : result;
  }, [data, xScale, yScale, offset, x, y, cellSize, cull]);
}
