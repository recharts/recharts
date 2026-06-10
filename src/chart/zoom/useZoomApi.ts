import { useContext, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectZoom } from '../../state/selectors/zoomSelectors';
import { resetZoom, setAxisViewport, ZoomDimension, ZoomState } from '../../state/zoomSlice';
import { selectChartOffsetInternal } from '../../state/selectors/selectChartOffsetInternal';
import { selectAxisRangeWithReverse } from '../../state/selectors/axisSelectors';
import { selectActiveTooltipCoordinate } from '../../state/selectors/tooltipSelectors';
import { selectAllXAxes, selectAllYAxes } from '../../state/selectors/selectAllAxes';
import { mouseMoveAction } from '../../state/mouseEventsMiddleware';
import { TooltipPortalContext } from '../../context/tooltipPortalContext';
import { AxisViewport, clampRatio, isFullViewport, isRangeFlipped } from '../../util/zoom/viewport';
import { panDimension, selectDimension, zoomDimension } from '../../util/zoom/zoomActions';
import { ResolvedZoomOptions, zoomEnabledForDimension } from '../../util/zoom/ZoomOptions';
import { ChartOffsetInternal } from '../../util/types';
import { SCROLLBAR_GAP, SCROLLBAR_THICKNESS } from '../ZoomScrollbars';
import { SelectionRect, ZoomGestureApi } from './ZoomGestureApi';

type LiveState = {
  offset: ChartOffsetInternal | undefined;
  zoom: ZoomState | undefined;
  options: ResolvedZoomOptions;
  /**
   * Whether each screen axis is "flipped": its domain minimum sits at the high-pixel edge (bottom /
   * right) rather than the low edge. The value axis of a horizontal-layout chart is flipped (values
   * grow upward); a vertical-layout category axis is not. Drives orientation so zoom/pan feel right
   * in both layouts (and with reversed axes).
   */
  flipped: { x: boolean; y: boolean };
  activeTooltipCoordinate: { x: number; y: number } | undefined;
  hasXAxis: boolean;
  hasYAxis: boolean;
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
  const activeTooltipCoordinate = useAppSelector(selectActiveTooltipCoordinate);
  const hasXAxis = useAppSelector(state => selectAllXAxes(state).length > 0) ?? false;
  const hasYAxis = useAppSelector(state => selectAllYAxes(state).length > 0) ?? false;
  // An axis is "flipped" when its range runs from high to low pixels (domain min at the far edge).
  const xFlipped =
    useAppSelector(state => isRangeFlipped(selectAxisRangeWithReverse(state, 'xAxis', 0, false))) ?? false;
  const yFlipped =
    useAppSelector(state => isRangeFlipped(selectAxisRangeWithReverse(state, 'yAxis', 0, false))) ?? false;
  const dispatch = useAppDispatch();

  const flipped = { x: hasXAxis ? xFlipped : false, y: hasYAxis ? yFlipped : false };
  const live = useRef<LiveState>({ offset, zoom, options, flipped, activeTooltipCoordinate, hasXAxis, hasYAxis });
  live.current = { offset, zoom, options, flipped, activeTooltipCoordinate, hasXAxis, hasYAxis };

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
        const fx = (clientX - rect.left - o.left) / o.width;
        const fy = (clientY - rect.top - o.top) / o.height;
        // Map screen position to a window fraction, flipping where the axis domain grows toward the
        // low-pixel edge (e.g. a value y axis, whose values grow upward).
        const { x: flipX, y: flipY } = live.current.flipped;
        return {
          x: clampRatio(flipX ? 1 - fx : fx),
          y: clampRatio(flipY ? 1 - fy : fy),
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
          if (!live.current.hasXAxis) {
            return 'outside';
          }
          return 'xAxis';
        }
        if (inY) {
          if (!live.current.hasYAxis) {
            return 'outside';
          }
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
      panByPixels: (dimension, deltaPixels) => {
        const z = live.current.zoom;
        const o = live.current.offset;
        if (z == null || o == null) {
          return;
        }
        const size = dimension === 'x' ? o.width : o.height;
        if (size <= 0) {
          return;
        }
        // Screen down/right is positive; a flipped axis (domain grows toward the low-pixel edge) moves
        // the window the other way, so the content tracks the pointer in either layout.
        const sign = live.current.flipped[dimension] ? 1 : -1;
        applyDimension(dimension, panDimension(z[dimension], (sign * deltaPixels) / size));
      },
      getFlipped: () => live.current.flipped,
      selectInto: (dimension, from, to) => {
        const z = live.current.zoom;
        if (z != null) {
          applyDimension(dimension, selectDimension(z[dimension], from, to, live.current.options));
        }
      },
      previewSelection: (dimension, from, to) => {
        const z = live.current.zoom;
        return z == null ? null : selectDimension(z[dimension], from, to, live.current.options);
      },
      reset: () => dispatch(resetZoom()),
      refreshPointer: (clientX, clientY) => dispatch(mouseMoveAction({ clientX, clientY, currentTarget: element })),
      refreshActivePointer: () => {
        // Pan from an axis / scrollbar (or with the finger off the chart) never fires a pointer event,
        // so the cursor would freeze. Re-dispatch a move at the active tooltip's current coordinate -
        // which selectActiveTooltipCoordinate keeps aligned with its data point as the chart pans.
        const coordinate = live.current.activeTooltipCoordinate;
        if (coordinate == null) {
          return;
        }
        const rect = element.getBoundingClientRect();
        dispatch(
          mouseMoveAction({
            clientX: rect.left + coordinate.x,
            clientY: rect.top + coordinate.y,
            currentTarget: element,
          }),
        );
      },
      setSelection,
    };
  }, [element, dispatch, setSelection]);
}
