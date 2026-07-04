import { useLayoutEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectZoom } from '../state/selectors/zoomSelectors';
import { setZoom, ZoomState } from '../state/zoomSlice';
import { setZoomAxis, setZoomLimits } from '../state/zoomSettingsSlice';
import { useIsPanorama } from '../context/PanoramaContext';
import { viewportsEqual } from '../util/zoom/viewport';
import { clampDimensionToLimits, resetDimensionWithLimits } from '../util/zoom/zoomActions';
import {
  ResolvedZoomOptions,
  zoomEnabledForDimension,
  zoomStateFromViewport,
  zoomStateToViewport,
} from '../util/zoom/ZoomOptions';

function zoomStatesEqual(a: ZoomState, b: ZoomState): boolean {
  return viewportsEqual(a.x, b.x) && viewportsEqual(a.y, b.y);
}

/**
 * Headless bridge between the public zoom props (`viewport`, `initialZoom`, `onZoomChange`) and the
 * internal zoom slice. Renders nothing. Mounted on the main chart only (never the brush panorama).
 *
 * - `initialZoom`: applied once on mount (ignored when `viewport` is controlled).
 * - `viewport` (controlled): reasserted into the store whenever prop and store diverge; gestures
 *   may propose changes through the store, but a parent that rejects them keeps the rendered
 *   viewport authoritative.
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

  // 0. Register the chart-level limits so window editors (Brush zoom mode, Minimap) can default
  // to the same minZoom/maxZoom instead of their own.
  useLayoutEffect(() => {
    if (isPanorama) {
      return undefined;
    }
    dispatch(setZoomLimits({ minZoom: options.minZoom, maxZoom: options.maxZoom }));
    dispatch(setZoomAxis(options.axis));
    return () => {
      dispatch(setZoomLimits(null));
      dispatch(setZoomAxis(null));
    };
  }, [dispatch, isPanorama, options.axis, options.minZoom, options.maxZoom]);

  // 1. Initial (uncontrolled) viewport, applied once.
  const didApplyInitial = useRef(false);
  useLayoutEffect(() => {
    if (isPanorama || didApplyInitial.current) {
      return;
    }
    didApplyInitial.current = true;
    if (initialZoom != null && viewport == null) {
      // Initial values obey the same limits as gestures, per zoom-enabled dimension.
      const initial = zoomStateFromViewport(initialZoom);
      dispatch(
        setZoom({
          x: zoomEnabledForDimension(options, 'x') ? clampDimensionToLimits(initial.x, options) : initial.x,
          y: zoomEnabledForDimension(options, 'y') ? clampDimensionToLimits(initial.y, options) : initial.y,
        }),
      );
    } else if (viewport == null && options.minZoom > 1) {
      // minZoom > 1 means the full view is not allowed: an un-zoomed mount starts at the most
      // zoomed-out viewport the limits permit.
      const floor = resetDimensionWithLimits(options);
      dispatch(
        setZoom({
          x: zoomEnabledForDimension(options, 'x') ? floor : { startRatio: 0, endRatio: 1 },
          y: zoomEnabledForDimension(options, 'y') ? floor : { startRatio: 0, endRatio: 1 },
        }),
      );
    }
    // Only ever runs once - intentionally not reacting to later prop changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 2. Controlled viewport -> store. Also keyed on the live zoom state so rejected gesture updates
  // are reasserted even when the parent keeps passing the same viewport object.
  useLayoutEffect(() => {
    if (isPanorama || viewport == null) {
      return;
    }
    const target = zoomStateFromViewport(viewport);
    const { current } = zoomRef;
    if (current == null || !zoomStatesEqual(target, current)) {
      dispatch(setZoom(target));
    }
  }, [viewport, zoom, isPanorama, dispatch]);

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
