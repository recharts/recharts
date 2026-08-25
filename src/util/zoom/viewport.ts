/**
 * Zoom viewport math.
 *
 * This module is the pure, dependency-free foundation of the cartesian zoom/pan feature.
 * It has no knowledge of React, Redux, d3 or the DOM - it only manipulates a normalized
 * description of "how much of an axis is currently visible".
 *
 * Keeping the maths isolated here means it can be unit tested exhaustively and reused by
 * the Redux slice, the (future) interaction layer and the axis selectors without any of
 * them depending on each other.
 */

/**
 * A normalized, resize-stable description of how much of a single axis is currently visible.
 *
 * Both numbers are fractions in the `[0, 1]` range measured along the axis domain:
 * - `startRatio` of `0` means "the very start of the axis", `1` means "the very end".
 * - `endRatio` likewise, and is always greater than `startRatio`.
 *
 * The default (un-zoomed) viewport is the full axis: `{ startRatio: 0, endRatio: 1 }`.
 *
 * Storing the viewport as ratios - rather than the absolute pixel `scale`/`offset` the
 * original zoom prototype used - keeps the zoom state stable across container resizes and
 * decouples it from any particular scale type: it applies equally to linear, band and point
 * scales because it is expressed relative to the axis itself.
 */
export type AxisViewport = {
  startRatio: number;
  endRatio: number;
};

/**
 * The default viewport: the whole axis is visible, i.e. no zoom and no pan.
 */
export const FULL_VIEWPORT: AxisViewport = { startRatio: 0, endRatio: 1 };

/**
 * The smallest width a viewport is allowed to shrink to.
 * This prevents the viewport from collapsing to zero width (which would make the
 * derived zoom factor infinite) when zooming in very far.
 */
export const MIN_VIEWPORT_WIDTH = 1e-4;

const EPSILON = 1e-9;

/**
 * Clamps a single ratio into the `[0, 1]` range. `NaN` collapses to `0`.
 */
export function clampRatio(ratio: number): number {
  if (Number.isNaN(ratio)) {
    return 0;
  }
  if (ratio < 0) {
    return 0;
  }
  if (ratio > 1) {
    return 1;
  }
  return ratio;
}

/**
 * The visible fraction of the axis, i.e. `endRatio - startRatio`.
 * A width of `1` means the whole axis is visible; smaller values mean a deeper zoom.
 */
export function getViewportWidth(viewport: AxisViewport): number {
  return viewport.endRatio - viewport.startRatio;
}

/**
 * Returns `true` when the viewport covers (approximately) the whole axis,
 * i.e. when the axis is not zoomed at all.
 */
export function isFullViewport(viewport: AxisViewport): boolean {
  return viewport.startRatio <= EPSILON && viewport.endRatio >= 1 - EPSILON;
}

/**
 * Normalizes an arbitrary, possibly invalid, viewport into a valid one:
 * - both ratios are clamped into `[0, 1]`,
 * - the start is guaranteed to be before the end (they are swapped if reversed),
 * - the width is guaranteed to be at least {@link MIN_VIEWPORT_WIDTH}.
 *
 * Every public helper and every reducer runs its result through this function so the rest
 * of the codebase can assume a viewport is always well-formed.
 */
export function clampViewport(viewport: AxisViewport): AxisViewport {
  let start = clampRatio(viewport.startRatio);
  let end = clampRatio(viewport.endRatio);

  if (end < start) {
    [start, end] = [end, start];
  }

  if (end - start < MIN_VIEWPORT_WIDTH) {
    // Expand around the midpoint, then nudge back inside [0, 1] if we ran off an edge.
    const mid = (start + end) / 2;
    start = Math.max(0, mid - MIN_VIEWPORT_WIDTH / 2);
    end = Math.min(1, start + MIN_VIEWPORT_WIDTH);
    start = Math.max(0, end - MIN_VIEWPORT_WIDTH);
  }

  return { startRatio: start, endRatio: end };
}

/**
 * Slides the viewport along the axis by `deltaRatio` without changing its width.
 *
 * The window is kept fully inside `[0, 1]`, so panning past either edge simply stops at
 * the edge instead of revealing empty space beyond the axis.
 *
 * @param viewport   the current viewport (assumed valid)
 * @param deltaRatio how far to slide, in axis fractions. Positive moves towards the end.
 */
export function panViewport(viewport: AxisViewport, deltaRatio: number): AxisViewport {
  const width = getViewportWidth(viewport);
  const maxStart = Math.max(0, 1 - width);
  const start = Math.max(0, Math.min(maxStart, viewport.startRatio + deltaRatio));
  return clampViewport({ startRatio: start, endRatio: start + width });
}

/**
 * Zooms the viewport by `factor` while keeping the point at `focusRatio` visually fixed.
 *
 * - `factor > 1` zooms in (the visible width shrinks), `factor < 1` zooms out.
 * - `focusRatio` is an absolute fraction of the axis (`0`..`1`), typically the position of
 *   the mouse cursor. After zooming, the same data point stays under the cursor.
 *
 * The result is clamped so the width never drops below {@link MIN_VIEWPORT_WIDTH} nor grows
 * past the full axis, and so the window stays inside `[0, 1]`.
 */
export function zoomViewportAround(viewport: AxisViewport, factor: number, focusRatio: number): AxisViewport {
  if (!Number.isFinite(factor) || factor <= 0) {
    return viewport;
  }

  const width = getViewportWidth(viewport);
  const newWidth = Math.max(MIN_VIEWPORT_WIDTH, Math.min(1, width / factor));
  const focus = clampRatio(focusRatio);

  // Keep the focus point at the same relative position inside the window.
  const relative = width <= 0 ? 0.5 : (focus - viewport.startRatio) / width;
  const maxStart = Math.max(0, 1 - newWidth);
  const start = Math.max(0, Math.min(maxStart, focus - relative * newWidth));

  return clampViewport({ startRatio: start, endRatio: start + newWidth });
}
