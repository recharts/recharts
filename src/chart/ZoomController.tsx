import * as React from 'react';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectZoom } from '../state/selectors/zoomSelectors';
import { resetZoom, setAxisViewport, ZoomDimension, ZoomState } from '../state/zoomSlice';
import { selectChartOffsetInternal } from '../state/selectors/selectChartOffsetInternal';
import { mouseMoveAction } from '../state/mouseEventsMiddleware';
import { TooltipPortalContext } from '../context/tooltipPortalContext';
import { useIsPanorama } from '../context/PanoramaContext';
import { AxisViewport, clampRatio } from '../util/zoom/viewport';
import { panDimension, selectDimension, zoomDimension } from '../util/zoom/zoomActions';
import { ResolvedZoomOptions, zoomEnabledForDimension } from '../util/zoom/ZoomOptions';
import { ChartOffsetInternal } from '../util/types';
import { SelectionRect, ZoomGestureApi } from './zoom/ZoomGestureApi';
import { installWheelGesture } from './zoom/wheelGesture';
import { installPointerGesture } from './zoom/pointerGesture';
import { installDoubleClickGesture } from './zoom/doubleClickGesture';
import { installKeyboardGesture } from './zoom/keyboardGesture';
import { installAxisGesture } from './zoom/axisGesture';

type ZoomControllerProps = {
  options: ResolvedZoomOptions;
};

type LiveState = {
  offset: ChartOffsetInternal | undefined;
  zoom: ZoomState | undefined;
  options: ResolvedZoomOptions;
};

/**
 * Mounts the zoom gestures on the main chart and renders the drag-to-zoom selection overlay.
 *
 * It only orchestrates: it builds a small {@link ZoomGestureApi} (reading live state through refs
 * and turning gestures into store updates via the pure zoom actions) and hands it to each gesture
 * module (wheel, pointer, double-click, ...). The gesture logic lives in `./zoom/*` so this stays
 * thin and new gestures (keyboard, touch, axis) plug in without bloating it.
 *
 * Never mounted on the brush panorama. The visual zoom itself is produced by the axis range
 * transform; this component only updates the viewport state.
 */
export function ZoomController({ options }: ZoomControllerProps) {
  const element = useContext(TooltipPortalContext);
  const offset = useAppSelector(selectChartOffsetInternal);
  const zoom = useAppSelector(selectZoom);
  const dispatch = useAppDispatch();
  const isPanorama = useIsPanorama();
  const [selection, setSelection] = useState<SelectionRect | null>(null);

  // Keep the latest offset/zoom/options in a ref so the gesture handlers always read fresh values
  // without being detached and re-attached on every viewport change.
  const live = useRef<LiveState>({ offset, zoom, options });
  live.current = { offset, zoom, options };

  const api = useMemo<ZoomGestureApi | null>(() => {
    if (element == null) {
      return null;
    }

    const applyDimension = (dimension: ZoomDimension, viewport: AxisViewport) => {
      if (!zoomEnabledForDimension(live.current.options, dimension)) {
        return;
      }
      dispatch(setAxisViewport({ dimension, viewport }));
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
  }, [element, dispatch]);

  useEffect(() => {
    if (api == null || isPanorama) {
      return undefined;
    }
    const cleanups = [
      installWheelGesture(api),
      installPointerGesture(api),
      installDoubleClickGesture(api),
      installKeyboardGesture(api),
      installAxisGesture(api),
    ];
    return () => cleanups.forEach(cleanup => cleanup());
  }, [api, isPanorama]);

  if (selection == null) {
    return null;
  }

  return (
    <div
      className="recharts-zoom-selection"
      style={{
        position: 'absolute',
        left: selection.x,
        top: selection.y,
        width: selection.width,
        height: selection.height,
        background: 'rgba(120, 120, 255, 0.15)',
        border: '1px solid rgba(80, 80, 200, 0.6)',
        pointerEvents: 'none',
      }}
    />
  );
}
