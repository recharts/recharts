import { useContext, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectZoom } from '../state/selectors/zoomSelectors';
import { resetZoom, setAxisViewport, ZoomDimension, ZoomState } from '../state/zoomSlice';
import { selectChartOffsetInternal } from '../state/selectors/selectChartOffsetInternal';
import { mouseMoveAction } from '../state/mouseEventsMiddleware';
import { TooltipPortalContext } from '../context/tooltipPortalContext';
import { useIsPanorama } from '../context/PanoramaContext';
import { clampRatio, getViewportWidth, panViewport, zoomViewportAround } from '../util/zoom/viewport';
import { ResolvedZoomOptions, zoomEnabledForDimension } from '../util/zoom/ZoomOptions';
import { ChartOffsetInternal } from '../util/types';

/** How much one wheel notch zooms in or out. */
const WHEEL_ZOOM_STEP = 1.15;

type ZoomControllerProps = {
  options: ResolvedZoomOptions;
};

type LiveState = {
  offset: ChartOffsetInternal | undefined;
  zoom: ZoomState | undefined;
  options: ResolvedZoomOptions;
};

/**
 * Headless controller that turns mouse gestures over the chart into zoom/pan actions.
 *
 * It attaches native listeners (so wheel can `preventDefault` page scroll) to the chart wrapper
 * element and dispatches updates to the zoom slice. It renders nothing and is only mounted on the
 * main chart when the `zoom` prop is set - never on the brush panorama.
 *
 * The actual rendering of the zoom is handled entirely by the axis range transform
 * (see selectZoomedAxisRangeWithReverse); this component only updates the viewport state.
 */
export function ZoomController({ options }: ZoomControllerProps): null {
  const element = useContext(TooltipPortalContext);
  const offset = useAppSelector(selectChartOffsetInternal);
  const zoom = useAppSelector(selectZoom);
  const dispatch = useAppDispatch();
  const isPanorama = useIsPanorama();

  /*
   * Keep the latest offset/zoom/options in a ref so the native event handlers always read fresh
   * values without having to be detached and re-attached every time the viewport changes.
   */
  const live = useRef<LiveState>({ offset, zoom, options });
  live.current = { offset, zoom, options };

  useEffect(() => {
    if (element == null || isPanorama) {
      return undefined;
    }

    const focusRatios = (clientX: number, clientY: number, o: ChartOffsetInternal) => {
      const rect = element.getBoundingClientRect();
      const x = clampRatio((clientX - rect.left - o.left) / o.width);
      // Pixels grow downward but the y domain grows upward, so flip to get the domain fraction.
      const y = clampRatio(1 - (clientY - rect.top - o.top) / o.height);
      return { x, y };
    };

    const zoomDimension = (dimension: ZoomDimension, factor: number, plotFocus: number, z: ZoomState) => {
      const opt = live.current.options;
      if (!zoomEnabledForDimension(opt, dimension)) {
        return;
      }
      const current = z[dimension];
      const width = getViewportWidth(current);
      /*
       * plotFocus is the pointer position as a fraction of the *visible* window (0..1). zoomViewportAround
       * expects a fraction of the *whole* axis, so map it through the current viewport. When fully zoomed
       * out these are equal, which is why the bug only showed up once already zoomed.
       */
      const absoluteFocus = current.startRatio + plotFocus * width;
      const minWidth = 1 / opt.maxZoom;
      const maxWidth = Math.min(1, 1 / opt.minZoom);
      // Clamp the factor so the resulting width stays within [minWidth, maxWidth] while keeping focus.
      const clampedFactor = Math.min(Math.max(factor, width / maxWidth), width / minWidth);
      dispatch(setAxisViewport({ dimension, viewport: zoomViewportAround(current, clampedFactor, absoluteFocus) }));
    };

    /*
     * After the viewport changes, the stored active tooltip coordinate is stale until the next
     * mouse move. Re-dispatch a move at the current pointer so the tooltip, cursor and active dot
     * follow the zoom immediately - on both zoom in and zoom out.
     */
    const refreshActivePointer = (clientX: number, clientY: number) => {
      dispatch(mouseMoveAction({ clientX, clientY, currentTarget: element }));
    };

    const onWheel = (event: WheelEvent) => {
      const { offset: o, zoom: z, options: opt } = live.current;
      if (!opt.wheel || o == null || z == null) {
        return;
      }
      event.preventDefault();
      const { x, y } = focusRatios(event.clientX, event.clientY, o);
      const factor = event.deltaY < 0 ? WHEEL_ZOOM_STEP : 1 / WHEEL_ZOOM_STEP;
      zoomDimension('x', factor, x, z);
      zoomDimension('y', factor, y, z);
      refreshActivePointer(event.clientX, event.clientY);
    };

    const onDoubleClick = (event: MouseEvent) => {
      if (live.current.options.doubleClickReset) {
        dispatch(resetZoom());
        refreshActivePointer(event.clientX, event.clientY);
      }
    };

    let dragging = false;
    let lastX = 0;
    let lastY = 0;

    const onPointerDown = (event: PointerEvent) => {
      if (!live.current.options.pan || event.button !== 0) {
        return;
      }
      dragging = true;
      lastX = event.clientX;
      lastY = event.clientY;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) {
        return;
      }
      const { offset: o, zoom: z, options: opt } = live.current;
      if (o == null || z == null) {
        return;
      }
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      lastX = event.clientX;
      lastY = event.clientY;
      if (zoomEnabledForDimension(opt, 'x') && o.width > 0) {
        // Drag right -> reveal earlier data -> window moves towards the start.
        dispatch(
          setAxisViewport({ dimension: 'x', viewport: panViewport(z.x, (-dx / o.width) * getViewportWidth(z.x)) }),
        );
      }
      if (zoomEnabledForDimension(opt, 'y') && o.height > 0) {
        // Drag down -> reveal higher values -> window moves towards the end.
        dispatch(
          setAxisViewport({ dimension: 'y', viewport: panViewport(z.y, (dy / o.height) * getViewportWidth(z.y)) }),
        );
      }
    };

    const onPointerUp = () => {
      dragging = false;
    };

    element.addEventListener('wheel', onWheel, { passive: false });
    element.addEventListener('dblclick', onDoubleClick);
    element.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    return () => {
      element.removeEventListener('wheel', onWheel);
      element.removeEventListener('dblclick', onDoubleClick);
      element.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [element, isPanorama, dispatch]);

  return null;
}
