import { AxisViewport, clampViewport, getViewportWidth, panViewport, zoomViewportAround } from './viewport';

/**
 * Pure zoom "actions": given the current viewport of one axis and a gesture, compute the next
 * viewport. These hold all the zoom maths so the gesture modules (wheel, pointer, keyboard, ...)
 * stay thin DOM-only wrappers and the maths can be unit tested in isolation.
 *
 * `plotFocus` / `plotFraction` arguments are positions as a fraction `0..1` of the *visible* window
 * (e.g. the pointer's position across the plotting area), which is what the DOM layer can measure.
 */

export type ZoomLimits = {
  /** Furthest zoom-out (1 = full data). */
  minZoom: number;
  /** Deepest zoom-in. */
  maxZoom: number;
};

/**
 * Zooms one axis by `factor` (>1 in, <1 out) keeping the point at `plotFocus` visually fixed.
 * The factor is clamped so the resulting width stays within the `[1/maxZoom, 1/minZoom]` bounds.
 */
export function zoomDimension(
  current: AxisViewport,
  factor: number,
  plotFocus: number,
  limits: ZoomLimits,
): AxisViewport {
  const width = getViewportWidth(current);
  // plotFocus is a fraction of the visible window; map it to an absolute axis fraction.
  const absoluteFocus = current.startRatio + plotFocus * width;
  const minWidth = 1 / limits.maxZoom;
  const maxWidth = Math.min(1, 1 / limits.minZoom);
  const clampedFactor = Math.min(Math.max(factor, width / maxWidth), width / minWidth);
  return zoomViewportAround(current, clampedFactor, absoluteFocus);
}

/**
 * Pans one axis by `deltaPlotFraction`, a fraction of the *visible* window
 * (e.g. dragging by half the plot width is `0.5`). Positive moves towards the end of the axis.
 */
export function panDimension(current: AxisViewport, deltaPlotFraction: number): AxisViewport {
  return panViewport(current, deltaPlotFraction * getViewportWidth(current));
}

/**
 * Zooms one axis into the sub-window between two fractions of the current visible window
 * (drag-to-zoom selection). Order-independent; respects `maxZoom`.
 */
export function selectDimension(
  current: AxisViewport,
  fromPlotFraction: number,
  toPlotFraction: number,
  limits: ZoomLimits,
): AxisViewport {
  const width = getViewportWidth(current);
  const lo = Math.min(fromPlotFraction, toPlotFraction);
  const hi = Math.max(fromPlotFraction, toPlotFraction);
  let start = current.startRatio + lo * width;
  let end = current.startRatio + hi * width;

  const minWidth = 1 / limits.maxZoom;
  if (end - start < minWidth) {
    const mid = (start + end) / 2;
    start = mid - minWidth / 2;
    end = mid + minWidth / 2;
  }

  return clampViewport({ startRatio: start, endRatio: end });
}
