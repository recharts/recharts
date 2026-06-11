import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { TooltipPortalContext } from '../../context/tooltipPortalContext';
import { useIsPanorama } from '../../context/PanoramaContext';
import { ResolvedZoomOptions, ZoomAxis, ZoomViewport, resolveZoomOptions } from '../../util/zoom/ZoomOptions';
import { useZoomApi } from './useZoomApi';
import { SelectionRect, suppressTouchBrowserDecorations, ZoomGestureInstaller } from './ZoomGestureApi';
import { installWheelGesture } from './wheelGesture';
import { installPointerGesture } from './pointerGesture';
import { installKeyboardGesture } from './keyboardGesture';
import { installAxisGesture } from './axisGesture';
import { installTouchGesture } from './touchGesture';
import { installDoubleClickGesture } from './doubleClickGesture';
import { ScrollbarStyle, ZoomScrollbars } from '../ZoomScrollbars';
import { ZoomAxisTouchTargets } from '../ZoomAxisTouchTargets';
import { renderSelectionOverlay } from './SelectionOverlay';

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

type WheelStepProps = {
  /** Zoom factor applied per wheel notch / keyboard zoom step. @defaultValue 1.15 */
  step?: number;
};

type WheelPanStepProps = {
  /** Fraction of the visible window panned per unit of wheel delta. @defaultValue 0.0015 */
  panStep?: number;
};

const ALL_OFF = {
  wheel: false,
  pan: false,
  dragToZoom: false,
  doubleClickReset: false,
  keyboard: false,
  touch: false,
  touchDrag: 'tooltip',
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
  const base = resolveZoomOptions({ ...ALL_OFF, ...limits });
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

export type MouseWheelZoomProps = CommonZoomProps & WheelStepProps & WheelPanStepProps;

/** Wheel / trackpad over the plot to zoom around the pointer (Shift = pan x, Ctrl/Cmd + Shift = pan y). */
export function MouseWheelZoom({ axis, minZoom, maxZoom, step, panStep }: MouseWheelZoomProps) {
  useZoomGesture(
    buildOptions(
      { axis, minZoom, maxZoom },
      { wheel: true, wheelStep: step ?? 1.15, wheelPanStep: panStep ?? 0.0015, wheelRegions: ['plot'] },
    ),
    WHEEL,
  );
  return null;
}

/** Drag the plot to pan. */
export function PanOnDrag({ axis, minZoom, maxZoom }: CommonZoomProps) {
  useZoomGesture(buildOptions({ axis, minZoom, maxZoom }, { pan: true, pointerMode: 'pan' }), POINTER);
  return null;
}

/** Whether the drag selection needs Shift held, so it can coexist with a plain-drag pan component. */
type SelectModifier = { modifier?: 'none' | 'shift' };

/** Class / style for the drag rectangle, shared by DragToZoom, DragToSelect and PinchZoom. */
type SelectionStyleProps = {
  /** Class added to the selection rectangle (the `.recharts-zoom-selection` class is always present). */
  selectionClassName?: string;
  /** Inline style merged onto the selection rectangle. */
  selectionStyle?: React.CSSProperties;
};

/** Drag a rectangle to zoom into it. Hold Shift instead (`modifier="shift"`) to coexist with PanOnDrag. */
export function DragToZoom({
  axis,
  minZoom,
  maxZoom,
  modifier = 'none',
  selectionClassName,
  selectionStyle,
}: CommonZoomProps & SelectModifier & SelectionStyleProps) {
  const element = useContext(TooltipPortalContext);
  const isPanorama = useIsPanorama();
  const [selection, setSelection] = useState<SelectionRect | null>(null);
  const options = buildOptions(
    { axis, minZoom, maxZoom },
    {
      dragToZoom: true,
      pointerMode: modifier === 'shift' ? 'selectShift' : 'select',
      touch: true,
      axisInteractions: true,
      touchDoubleTapDrag: 'selectZoom',
    },
  );
  useZoomGesture(options, POINTER, setSelection);
  useZoomGesture(options, TOUCH, setSelection);

  useEffect(() => {
    if (element == null || isPanorama) {
      return undefined;
    }
    return suppressTouchBrowserDecorations(element);
  }, [element, isPanorama]);

  return renderSelectionOverlay(selection, element, { className: selectionClassName, style: selectionStyle });
}

/** Props for {@link DragToSelect}. */
export type DragToSelectProps = CommonZoomProps &
  SelectModifier &
  SelectionStyleProps & {
    /**
     * Called when a drag completes, with the selected window per axis in `[0, 1]` fractions of the
     * axis (the same shape as the zoom viewport). The chart is not zoomed; do what you like with it
     * (set a controlled viewport, draw a {@link ReferenceArea}, filter data, ...).
     */
    onSelect: (selection: ZoomViewport) => void;
  };

/**
 * Drag a rectangle to *select* a region (instead of zooming into it). Draws the same overlay while
 * dragging and emits the selected window through `onSelect`. Hold Shift (`modifier="shift"`) to let
 * it coexist with `<PanOnDrag/>`.
 */
export function DragToSelect({
  axis,
  minZoom,
  maxZoom,
  modifier = 'none',
  onSelect,
  selectionClassName,
  selectionStyle,
}: DragToSelectProps) {
  const element = useContext(TooltipPortalContext);
  const isPanorama = useIsPanorama();
  const [selection, setSelection] = useState<SelectionRect | null>(null);
  const options = buildOptions(
    { axis, minZoom, maxZoom },
    {
      dragToZoom: true,
      pointerMode: modifier === 'shift' ? 'selectShift' : 'select',
      touch: true,
      axisInteractions: true,
      touchDoubleTapDrag: 'selectCallback',
      onSelectRegion: onSelect,
      onTouchSelectRegion: onSelect,
    },
  );
  useZoomGesture(options, POINTER, setSelection);
  useZoomGesture(options, TOUCH, setSelection);

  useEffect(() => {
    if (element == null || isPanorama) {
      return undefined;
    }
    return suppressTouchBrowserDecorations(element);
  }, [element, isPanorama]);

  return renderSelectionOverlay(selection, element, { className: selectionClassName, style: selectionStyle });
}

export type AxisZoomProps = CommonZoomProps & WheelStepProps & WheelPanStepProps;

/** Wheel or drag directly on an axis band to zoom / pan only that axis. */
export function AxisZoom({ axis, minZoom, maxZoom, step, panStep }: AxisZoomProps) {
  useZoomGesture(
    buildOptions(
      { axis, minZoom, maxZoom },
      {
        wheel: true,
        wheelStep: step ?? 1.15,
        wheelPanStep: panStep ?? 0.0015,
        pan: true,
        axisInteractions: true,
        wheelRegions: ['xAxis', 'yAxis'],
      },
    ),
    AXIS,
  );
  return null;
}

export type ZoomPanKeyboardProps = CommonZoomProps &
  WheelStepProps & {
    /** Fraction of the visible window panned per arrow-key press. @defaultValue 0.1 */
    panStep?: number;
    /** Multiplier applied to `panStep` when Shift is held. @defaultValue 2.5 */
    panFastMultiplier?: number;
  };

/** Keyboard zoom/pan while the chart is focused (`+`/`-` zoom, arrows pan, `0`/`Esc` reset). */
export function ZoomPanKeyboard({ axis, minZoom, maxZoom, step, panStep, panFastMultiplier }: ZoomPanKeyboardProps) {
  useZoomGesture(
    buildOptions(
      { axis, minZoom, maxZoom },
      { keyboard: true, wheelStep: step ?? 1.15, panStep: panStep ?? 0.1, panFastMultiplier: panFastMultiplier ?? 2.5 },
    ),
    KEYBOARD,
  );
  return null;
}

/** Double-click (or double-tap) to reset the chart to the full view. */
export function DoubleClickReset() {
  useZoomGesture(buildOptions({}, { doubleClickReset: true }), DOUBLE_CLICK);
  return null;
}

/** Touch: two-finger pinch to zoom + pan, double-tap to reset, double-tap-then-drag to zoom. */
export type PinchZoomProps = CommonZoomProps &
  SelectionStyleProps & {
    /** Finger-spread in px before pinch zooming starts. @defaultValue 12 */
    threshold?: number;
    /**
     * What double-tap-then-drag does on touch devices. `none` leaves that gesture to `<DragToZoom/>`
     * or `<DragToSelect/>`; `zoom` keeps the maps-style zoom gesture; `select` emits the dragged
     * window through `onSelect`. @defaultValue 'none'
     */
    doubleTapDrag?: 'zoom' | 'select' | 'none';
    /** What a one-finger drag on the plot does. A tap still updates the tooltip/cursor. @defaultValue 'tooltip' */
    touchDrag?: 'tooltip' | 'pan';
    /** Called when `doubleTapDrag="select"` completes a touch selection. */
    onSelect?: (selection: ZoomViewport) => void;
  };

export function PinchZoom({
  axis,
  minZoom,
  maxZoom,
  threshold,
  doubleTapDrag = 'none',
  touchDrag = 'tooltip',
  onSelect,
  selectionClassName,
  selectionStyle,
}: PinchZoomProps) {
  const element = useContext(TooltipPortalContext);
  const isPanorama = useIsPanorama();
  const [selection, setSelection] = useState<SelectionRect | null>(null);
  const options = buildOptions(
    { axis, minZoom, maxZoom },
    {
      touch: true,
      touchDrag,
      axisInteractions: true,
      pinchThreshold: threshold ?? 12,
      touchDoubleTapDrag: doubleTapDrag === 'select' ? 'selectCallback' : doubleTapDrag,
      onTouchSelectRegion: onSelect,
    },
  );
  useZoomGesture(options, TOUCH, setSelection);

  useEffect(() => {
    if (element == null || isPanorama) {
      return undefined;
    }
    return suppressTouchBrowserDecorations(element);
  }, [element, isPanorama]);

  if (element == null || isPanorama) {
    return null;
  }
  // Stable hit targets over the axis labels so an axis pan/pinch survives tick re-renders, plus the
  // selection rectangle when double-tap-drag is in select mode.
  return (
    <>
      {createPortal(<ZoomAxisTouchTargets options={options} />, element)}
      {renderSelectionOverlay(selection, element, { className: selectionClassName, style: selectionStyle })}
    </>
  );
}

/** Props for {@link ZoomScrollbar}: which axis, zoom limits, plus the scrollbar look. */
export type ZoomScrollbarProps = { axis?: 'x' | 'y' } & Pick<CommonZoomProps, 'minZoom' | 'maxZoom'> &
  WheelPanStepProps &
  ScrollbarStyle;

/**
 * An on-canvas scrollbar for one zoomed axis: drag the band to pan, wheel to pan (Shift = zoom).
 * Style it with `thickness` (geometry) and `className`/`style` (track) + `thumbClassName`/`thumbStyle`
 * (thumb); the `.recharts-zoom-scrollbar` / `.recharts-zoom-scrollbar-thumb` classes are stable too.
 */
export function ZoomScrollbar({
  axis = 'x',
  minZoom,
  maxZoom,
  thickness,
  className,
  style,
  thumbClassName,
  thumbStyle,
  panStep,
}: ZoomScrollbarProps) {
  const element = useContext(TooltipPortalContext);
  const isPanorama = useIsPanorama();
  const options = buildOptions(
    { axis, minZoom, maxZoom },
    {
      scrollbars: true,
      wheel: true,
      wheelPanStep: panStep ?? 0.0015,
      wheelRegions: [axis === 'x' ? 'xScrollbar' : 'yScrollbar'],
    },
  );
  useZoomGesture(options, WHEEL);

  if (element == null || isPanorama) {
    return null;
  }
  return createPortal(
    <ZoomScrollbars options={options} scrollbarStyle={{ thickness, className, style, thumbClassName, thumbStyle }} />,
    element,
  );
}
