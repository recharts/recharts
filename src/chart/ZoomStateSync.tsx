import { useLayoutEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectZoom } from '../state/selectors/zoomSelectors';
import { setZoom, ZoomState } from '../state/zoomSlice';
import { useIsPanorama } from '../context/PanoramaContext';
import { viewportsEqual } from '../util/zoom/viewport';
import { ResolvedZoomOptions, zoomStateFromViewport, zoomStateToViewport } from '../util/zoom/ZoomOptions';

function zoomStatesEqual(a: ZoomState, b: ZoomState): boolean {
  return viewportsEqual(a.x, b.x) && viewportsEqual(a.y, b.y);
}

/**
 * Headless bridge between the public zoom props (`viewport`, `initialZoom`, `onZoomChange`) and the
 * internal zoom slice. Renders nothing. Mounted on the main chart only (never the brush panorama).
 *
 * - `initialZoom`: applied once on mount (ignored when `viewport` is controlled).
 * - `viewport` (controlled): pushed into the store whenever the prop changes; gestures still update
 *   the store optimistically and notify via `onZoomChange`, so a parent that feeds the value back
 *   settles without a loop (equality-guarded).
 * - `onZoomChange`: called whenever the viewport changes, with both dimensions in `[0, 1]` form.
 *
 * Uses layout effects (like the axis reporters) so cross-chart sync, scrollbars, minimap, etc. that
 * follow a controlled viewport resolve in the same commit - before paint - with no one-frame lag.
 */
export function ZoomStateSync({ options }: { options: ResolvedZoomOptions }): null {
  const { viewport, initialZoom, onZoomChange } = options;
  const dispatch = useAppDispatch();
  const zoom = useAppSelector(selectZoom);
  const isPanorama = useIsPanorama();

  const zoomRef = useRef(zoom);
  zoomRef.current = zoom;

  // 1. Initial (uncontrolled) viewport, applied once.
  const didApplyInitial = useRef(false);
  useLayoutEffect(() => {
    if (isPanorama || didApplyInitial.current) {
      return;
    }
    didApplyInitial.current = true;
    if (initialZoom != null && viewport == null) {
      dispatch(setZoom(zoomStateFromViewport(initialZoom)));
    }
    // Only ever runs once - intentionally not reacting to later prop changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 2. Controlled viewport -> store. Keyed on the prop only; the equality guard against the live
  // store value prevents reverting an in-flight gesture before the parent echoes it back.
  useLayoutEffect(() => {
    if (isPanorama || viewport == null) {
      return;
    }
    const target = zoomStateFromViewport(viewport);
    const { current } = zoomRef;
    if (current == null || !zoomStatesEqual(target, current)) {
      dispatch(setZoom(target));
    }
  }, [viewport, isPanorama, dispatch]);

  // 3. Store -> onZoomChange.
  const lastNotified = useRef<ZoomState | undefined>(zoom);
  useLayoutEffect(() => {
    if (isPanorama || zoom == null || onZoomChange == null) {
      return;
    }
    if (lastNotified.current == null || !zoomStatesEqual(lastNotified.current, zoom)) {
      lastNotified.current = zoom;
      onZoomChange(zoomStateToViewport(zoom));
    }
  }, [zoom, isPanorama, onZoomChange]);

  return null;
}
