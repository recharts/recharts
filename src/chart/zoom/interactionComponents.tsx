import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { TooltipPortalContext } from '../../context/tooltipPortalContext';
import { useIsPanorama } from '../../context/PanoramaContext';
import { ResolvedZoomOptions, ZoomAxis, resolveZoomOptions } from '../../util/zoom/ZoomOptions';
import { useZoomApi } from './useZoomApi';
import { SelectionRect, ZoomGestureInstaller } from './ZoomGestureApi';
import { installWheelGesture } from './wheelGesture';
import { installPointerGesture } from './pointerGesture';
import { installKeyboardGesture } from './keyboardGesture';
import { installAxisGesture } from './axisGesture';
import { installTouchGesture } from './touchGesture';
import { installDoubleClickGesture } from './doubleClickGesture';
import { ZoomScrollbars } from '../ZoomScrollbars';
import { ZoomAxisTouchTargets } from '../ZoomAxisTouchTargets';

/**
 * Composable interaction components. Each one enables a single zoom interaction by installing its
 * gesture module against an api built from its own options (see {@link useZoomApi}); gesture-only
 * ones render `null`, UI ones portal their overlay into the chart wrapper. Add the ones you want as
 * children of a cartesian chart, or use {@link ZoomAndPan} for the default bundle.
 */

/** Limit props shared by every interaction component. */
export type CommonZoomProps = {
  /** Which dimensions can be zoomed and panned. @defaultValue 'xy' */
  axis?: ZoomAxis;
  /** Furthest zoom-out (1 = cannot zoom out past the full data). @defaultValue 1 */
  minZoom?: number;
  /** Deepest zoom-in (e.g. 25 shows ~1/25th of the data). @defaultValue 25 */
  maxZoom?: number;
};

const ALL_OFF = {
  wheel: false,
  pan: false,
  dragToZoom: false,
  doubleClickReset: false,
  keyboard: false,
  touch: false,
  axisInteractions: false,
  scrollbars: false,
} as const;

function buildOptions(common: CommonZoomProps, overrides: Partial<ResolvedZoomOptions>): ResolvedZoomOptions {
  // Only pass limits that are actually set; passing `undefined` would override resolveZoomOptions'
  // defaults (e.g. axis would become undefined and disable every dimension).
  const limits: { axis?: ZoomAxis; minZoom?: number; maxZoom?: number } = {};
  if (common.axis != null) {
    limits.axis = common.axis;
  }
  if (common.minZoom != null) {
    limits.minZoom = common.minZoom;
  }
  if (common.maxZoom != null) {
    limits.maxZoom = common.maxZoom;
  }
  const base = resolveZoomOptions({ ...ALL_OFF, ...limits }) as ResolvedZoomOptions;
  return { ...base, ...overrides };
}

/** Installs the given gesture module(s) against an api built from `options`. Inert on the panorama. */
function useZoomGesture(
  options: ResolvedZoomOptions,
  installers: readonly ZoomGestureInstaller[],
  setSelection?: (rect: SelectionRect | null) => void,
): void {
  const isPanorama = useIsPanorama();
  const api = useZoomApi(options, setSelection);
  useEffect(() => {
    if (api == null || isPanorama) {
      return undefined;
    }
    const cleanups = installers.map(install => install(api));
    return () => cleanups.forEach(cleanup => cleanup());
  }, [api, isPanorama, installers]);
}

const WHEEL: readonly ZoomGestureInstaller[] = [installWheelGesture];
const POINTER: readonly ZoomGestureInstaller[] = [installPointerGesture];
const AXIS: readonly ZoomGestureInstaller[] = [installWheelGesture, installAxisGesture];
const KEYBOARD: readonly ZoomGestureInstaller[] = [installKeyboardGesture];
const TOUCH: readonly ZoomGestureInstaller[] = [installTouchGesture];
const DOUBLE_CLICK: readonly ZoomGestureInstaller[] = [installDoubleClickGesture];

/** Wheel / trackpad over the plot to zoom around the pointer (Shift = pan x, Ctrl/Cmd + Shift = pan y). */
export function MouseWheelZoom({ axis, minZoom, maxZoom, step }: CommonZoomProps & { step?: number }) {
  useZoomGesture(
    buildOptions({ axis, minZoom, maxZoom }, { wheel: true, wheelStep: step ?? 1.15, wheelRegions: ['plot'] }),
    WHEEL,
  );
  return null;
}

/** Drag the plot to pan. */
export function PanOnDrag({ axis, minZoom, maxZoom }: CommonZoomProps) {
  useZoomGesture(buildOptions({ axis, minZoom, maxZoom }, { pan: true, pointerMode: 'pan' }), POINTER);
  return null;
}

/** Drag a rectangle (Shift + drag) to zoom into it. Renders the selection overlay while dragging. */
export function DragToZoom({ axis, minZoom, maxZoom }: CommonZoomProps) {
  const element = useContext(TooltipPortalContext);
  const [selection, setSelection] = useState<SelectionRect | null>(null);
  useZoomGesture(
    buildOptions({ axis, minZoom, maxZoom }, { dragToZoom: true, pointerMode: 'select' }),
    POINTER,
    setSelection,
  );

  if (element == null || selection == null) {
    return null;
  }
  return createPortal(
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
    />,
    element,
  );
}

/** Wheel or drag directly on an axis band to zoom / pan only that axis. */
export function AxisZoom({ axis, minZoom, maxZoom, step }: CommonZoomProps & { step?: number }) {
  useZoomGesture(
    buildOptions(
      { axis, minZoom, maxZoom },
      { wheel: true, wheelStep: step ?? 1.15, pan: true, axisInteractions: true, wheelRegions: ['xAxis', 'yAxis'] },
    ),
    AXIS,
  );
  return null;
}

/** Keyboard zoom/pan while the chart is focused (`+`/`-` zoom, arrows pan, `0`/`Esc` reset). */
export function ZoomPanKeyboard({ axis, minZoom, maxZoom, step }: CommonZoomProps & { step?: number }) {
  useZoomGesture(buildOptions({ axis, minZoom, maxZoom }, { keyboard: true, wheelStep: step ?? 1.15 }), KEYBOARD);
  return null;
}

/** Double-click (or double-tap) to reset the chart to the full view. */
export function DoubleClickReset() {
  useZoomGesture(buildOptions({}, { doubleClickReset: true }), DOUBLE_CLICK);
  return null;
}

/** Touch: two-finger pinch to zoom + pan, double-tap to reset, double-tap-then-drag to zoom. */
export function PinchZoom({ axis, minZoom, maxZoom }: CommonZoomProps) {
  const element = useContext(TooltipPortalContext);
  const isPanorama = useIsPanorama();
  const options = buildOptions({ axis, minZoom, maxZoom }, { touch: true, axisInteractions: true });
  useZoomGesture(options, TOUCH);

  useEffect(() => {
    if (element == null || isPanorama) {
      return undefined;
    }
    const previous = element.style.touchAction;
    element.style.touchAction = 'none';
    return () => {
      element.style.touchAction = previous;
    };
  }, [element, isPanorama]);

  if (element == null || isPanorama) {
    return null;
  }
  // Stable hit targets over the axis labels so an axis pan/pinch survives tick re-renders.
  return createPortal(<ZoomAxisTouchTargets options={options} />, element);
}

/** An on-canvas scrollbar for one zoomed axis: drag the band to pan, wheel to pan (Shift = zoom). */
export function ZoomScrollbar({
  axis = 'x',
  minZoom,
  maxZoom,
}: { axis?: 'x' | 'y' } & Pick<CommonZoomProps, 'minZoom' | 'maxZoom'>) {
  const element = useContext(TooltipPortalContext);
  const isPanorama = useIsPanorama();
  const options = buildOptions(
    { axis, minZoom, maxZoom },
    { scrollbars: true, wheel: true, wheelRegions: [axis === 'x' ? 'xScrollbar' : 'yScrollbar'] },
  );
  useZoomGesture(options, WHEEL);

  if (element == null || isPanorama) {
    return null;
  }
  return createPortal(<ZoomScrollbars options={options} />, element);
}
