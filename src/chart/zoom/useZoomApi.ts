import { useContext, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectZoom } from '../../state/selectors/zoomSelectors';
import { resetZoom, setAxisViewport, ZoomDimension, ZoomState } from '../../state/zoomSlice';
import { selectChartOffsetInternal } from '../../state/selectors/selectChartOffsetInternal';
import { mouseMoveAction } from '../../state/mouseEventsMiddleware';
import { TooltipPortalContext } from '../../context/tooltipPortalContext';
import { AxisViewport, clampRatio, isFullViewport } from '../../util/zoom/viewport';
import { panDimension, selectDimension, zoomDimension } from '../../util/zoom/zoomActions';
import { ResolvedZoomOptions, zoomEnabledForDimension } from '../../util/zoom/ZoomOptions';
import { ChartOffsetInternal } from '../../util/types';
import { SCROLLBAR_GAP, SCROLLBAR_THICKNESS } from '../ZoomScrollbars';
import { SelectionRect, ZoomGestureApi } from './ZoomGestureApi';

type LiveState = {
  offset: ChartOffsetInternal | undefined;
  zoom: ZoomState | undefined;
  options: ResolvedZoomOptions;
};

const noopSelection = (_rect: SelectionRect | null): void => {};

/**
 * Builds the {@link ZoomGestureApi} that every gesture talks to. It reads live offset / zoom /
 * options through a ref so the handlers always see fresh values without being detached and
 * re-attached on each viewport change, and turns gestures into store updates via the pure zoom
 * actions (clamped against the given `options` limits).
 *
 * Returns `null` until the chart wrapper element is available. `setSelection` lets a gesture drive
 * the drag-to-zoom overlay; omit it when the gesture doesn't need one.
 *
 * Shared by the legacy `ZoomController` (one api for all gestures) and by the composable interaction
 * components (one api per component, each with its own options).
 */
export function useZoomApi(
  options: ResolvedZoomOptions,
  setSelection: (rect: SelectionRect | null) => void = noopSelection,
): ZoomGestureApi | null {
  const element = useContext(TooltipPortalContext);
  const offset = useAppSelector(selectChartOffsetInternal);
  const zoom = useAppSelector(selectZoom);
  const dispatch = useAppDispatch();

  const live = useRef<LiveState>({ offset, zoom, options });
  live.current = { offset, zoom, options };

  return useMemo<ZoomGestureApi | null>(() => {
    if (element == null) {
      return null;
    }

    const applyDimension = (dimension: ZoomDimension, viewport: AxisViewport) => {
      if (!zoomEnabledForDimension(live.current.options, dimension)) {
        return;
      }
      dispatch(setAxisViewport({ dimension, viewport }));
      /*
       * Optimistically update the live ref too. Redux state only refreshes on the next render, so
       * without this several mutations in one event (e.g. a pinch that zooms AND pans the same axis
       * in one frame) would each read the same stale viewport and the last dispatch would overwrite
       * the others. The pure zoom actions already return clamped viewports, matching the reducer.
       */
      if (live.current.zoom != null) {
        live.current = { ...live.current, zoom: { ...live.current.zoom, [dimension]: viewport } };
      }
    };

    return {
      element,
      getOptions: () => live.current.options,
      getOffset: () => live.current.offset,
      plotFractions: (clientX, clientY) => {
        const o = live.current.offset;
        if (o == null) {
          return null;
        }
        const rect = element.getBoundingClientRect();
        return {
          x: clampRatio((clientX - rect.left - o.left) / o.width),
          // Pixels grow downward but the y domain grows upward, so flip to the domain fraction.
          y: clampRatio(1 - (clientY - rect.top - o.top) / o.height),
        };
      },
      plotPixels: (clientX, clientY) => {
        const o = live.current.offset;
        if (o == null) {
          return null;
        }
        const rect = element.getBoundingClientRect();
        return {
          x: Math.min(Math.max(clientX - rect.left, o.left), o.left + o.width),
          y: Math.min(Math.max(clientY - rect.top, o.top), o.top + o.height),
        };
      },
      pointerRegion: (clientX, clientY) => {
        const o = live.current.offset;
        if (o == null) {
          return 'outside';
        }
        const rect = element.getBoundingClientRect();
        const px = clientX - rect.left;
        const py = clientY - rect.top;
        const inX = px >= o.left && px <= o.left + o.width;
        const inY = py >= o.top && py <= o.top + o.height;
        if (inX && inY) {
          // The scrollbar bands sit on the bottom (x) / right (y) edges of the plot, and only when
          // that axis is zoomed. Detect them so wheel there pans rather than zooms.
          const opt = live.current.options;
          const z = live.current.zoom;
          if (opt.scrollbars && z != null) {
            const band = SCROLLBAR_THICKNESS + SCROLLBAR_GAP;
            if (zoomEnabledForDimension(opt, 'x') && !isFullViewport(z.x) && py >= o.top + o.height - band) {
              return 'xScrollbar';
            }
            if (zoomEnabledForDimension(opt, 'y') && !isFullViewport(z.y) && px >= o.left + o.width - band) {
              return 'yScrollbar';
            }
          }
          return 'plot';
        }
        if (inX) {
          return 'xAxis';
        }
        if (inY) {
          return 'yAxis';
        }
        return 'outside';
      },
      zoomBy: (dimension, factor, plotFocus) => {
        const z = live.current.zoom;
        if (z != null) {
          applyDimension(dimension, zoomDimension(z[dimension], factor, plotFocus, live.current.options));
        }
      },
      panBy: (dimension, deltaPlotFraction) => {
        const z = live.current.zoom;
        if (z != null) {
          applyDimension(dimension, panDimension(z[dimension], deltaPlotFraction));
        }
      },
      selectInto: (dimension, from, to) => {
        const z = live.current.zoom;
        if (z != null) {
          applyDimension(dimension, selectDimension(z[dimension], from, to, live.current.options));
        }
      },
      reset: () => dispatch(resetZoom()),
      refreshPointer: (clientX, clientY) => dispatch(mouseMoveAction({ clientX, clientY, currentTarget: element })),
      setSelection,
    };
  }, [element, dispatch, setSelection]);
}
