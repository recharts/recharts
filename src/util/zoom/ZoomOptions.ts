import { ZoomDimension, ZoomState } from '../../state/zoomSlice';
import { AxisViewport, clampViewport, FULL_VIEWPORT } from './viewport';

/**
 * Which dimensions a chart can be zoomed and panned along.
 */
export type ZoomAxis = 'x' | 'y' | 'xy';

/**
 * A visible window along a single axis, expressed as fractions in `[0, 1]` of the axis.
 * `{ start: 0, end: 1 }` is the whole axis (not zoomed).
 */
export type AxisWindow = { start: number; end: number };

/**
 * A per-dimension viewport in public form. Omitting a dimension means it is not zoomed.
 */
export type ZoomViewport = { x?: AxisWindow; y?: AxisWindow };

/**
 * The gesture/limit part of the zoom configuration - everything that has a sensible default.
 */
type ZoomGestureOptions = {
  /** Which dimensions can be zoomed and panned. @defaultValue 'xy' */
  axis?: ZoomAxis;
  /** Furthest zoom-out. 1 means the full data cannot be zoomed out past. @defaultValue 1 */
  minZoom?: number;
  /** Deepest zoom-in (e.g. 25 shows ~1/25th of the data). @defaultValue 25 */
  maxZoom?: number;
  /** Wheel / trackpad to zoom. @defaultValue true */
  wheel?: boolean;
  /**
   * Zoom factor applied per wheel notch (and per keyboard zoom step). `1.15` means each notch zooms
   * in by 15%. Larger is faster/coarser. @defaultValue 1.15
   */
  wheelStep?: number;
  /** Drag to pan. @defaultValue true */
  pan?: boolean;
  /**
   * Interactions on the axis bands around the plot: wheel over an axis zooms only that axis, drag
   * over an axis pans only that axis. @defaultValue true
   */
  axisInteractions?: boolean;
  /**
   * Drag-to-zoom a selected region. Triggered by Shift + drag (or a plain drag when `pan` is off).
   * @defaultValue true
   */
  dragToZoom?: boolean;
  /** Double-click resets to the full view. @defaultValue true */
  doubleClickReset?: boolean;
  /**
   * Keyboard zoom/pan when the chart is focused: `+`/`-` to zoom, Shift + arrows to pan, `0` to
   * reset. Requires the chart to be focusable (the default `accessibilityLayer`). @defaultValue true
   */
  keyboard?: boolean;
  /**
   * Touch gestures: pinch to zoom, two-finger drag to pan, double-tap to reset, and double-tap then
   * drag up/down to zoom in/out (Google-Maps style). @defaultValue true
   */
  touch?: boolean;
  /**
   * What a one-finger drag on the plot does on touch devices.
   * `tooltip` leaves it to the chart cursor/tooltip; `pan` pans the zoom viewport.
   * A single tap still updates the cursor/tooltip in both modes. @defaultValue 'tooltip'
   */
  touchDrag?: 'tooltip' | 'pan';
  /**
   * Show on-canvas scrollbars (one per zoomed axis). Drag the thumb to pan, drag its ends to zoom,
   * click the track to page. Only visible while that axis is zoomed. @defaultValue true
   */
  scrollbars?: boolean;
  /** Fraction of the visible window panned per keyboard arrow press. @defaultValue 0.1 */
  panStep?: number;
  /** Multiplier applied to {@link ZoomGestureOptions.panStep} when Shift is held. @defaultValue 2.5 */
  panFastMultiplier?: number;
  /** Finger-spread (px) before a pinch starts zooming, so small two-finger moves stay pure pan. @defaultValue 12 */
  pinchThreshold?: number;
  /** Fraction of the visible window panned per unit of wheel delta (Shift / scrollbar wheel). @defaultValue 0.0015 */
  wheelPanStep?: number;
};

/**
 * Public configuration for the cartesian zoom/pan feature. See the "Zoom and Pan" guide.
 */
export type ZoomOptions = ZoomGestureOptions & {
  /**
   * Controlled viewport. When provided, the chart shows exactly this window and you are responsible
   * for updating it (typically from {@link ZoomOptions.onZoomChange}). A dimension left out is shown
   * un-zoomed.
   */
  viewport?: ZoomViewport;
  /**
   * Initial (uncontrolled) viewport, applied once on mount. Ignored when `viewport` is set.
   */
  initialZoom?: ZoomViewport;
  /**
   * Called whenever the zoom viewport changes, with both dimensions in `[0, 1]` window form.
   */
  onZoomChange?: (viewport: Required<ZoomViewport>) => void;
};

/**
 * The `zoom` prop accepts `true` (enable with defaults), an axis shorthand (`"x"`), or full options.
 */
export type ZoomProp = boolean | ZoomAxis | ZoomOptions;

export type ResolvedZoomOptions = Required<ZoomGestureOptions> &
  Pick<ZoomOptions, 'viewport' | 'initialZoom' | 'onZoomChange'> & {
    /**
     * Internal: restrict the wheel gesture to these pointer regions (`'plot'`, `'xAxis'`, `'yAxis'`,
     * `'xScrollbar'`, `'yScrollbar'`). Lets the composable components share the one wheel module
     * without double-counting (e.g. `<MouseWheelZoom/>` = plot, `<AxisZoom/>` = axes). Default: all.
     */
    wheelRegions?: readonly string[];
    /**
     * Internal: restrict the pointer drag gesture - `'pan'` (plain drag pans), `'select'` (plain drag
     * selects), or `'selectShift'` (Shift + drag selects, so it can coexist with a `'pan'` component).
     * Default: legacy (plain drag pans, Shift / no-pan selects).
     */
    pointerMode?: 'pan' | 'select' | 'selectShift';
    /**
     * Internal: when set, a completed drag selection emits the selected window here (per axis, in
     * `[0, 1]` fractions) instead of zooming into it. Used by `<DragToSelect/>`.
     */
    onSelectRegion?: (selection: ZoomViewport) => void;
    /**
     * Internal: same shape as `onSelectRegion`, but reserved for the touch double-tap-drag select
     * mode so it never changes desktop Shift + drag behavior.
     */
    onTouchSelectRegion?: (selection: ZoomViewport) => void;
    /**
     * Internal: controls the touch double-tap-then-drag gesture. Default zooms like a maps UI;
     * selectZoom draws a region and zooms into it; selectCallback emits a viewport through
     * `onTouchSelectRegion` instead; none leaves that gesture to another component.
     */
    touchDoubleTapDrag?: 'zoom' | 'selectZoom' | 'selectCallback' | 'none';
  };

const ZOOM_DEFAULTS: Required<ZoomGestureOptions> = {
  axis: 'xy',
  minZoom: 1,
  maxZoom: 25,
  wheel: true,
  wheelStep: 1.15,
  pan: true,
  axisInteractions: true,
  dragToZoom: true,
  doubleClickReset: true,
  keyboard: true,
  touch: true,
  touchDrag: 'tooltip',
  scrollbars: true,
  panStep: 0.1,
  panFastMultiplier: 2.5,
  pinchThreshold: 12,
  wheelPanStep: 0.0015,
};

const AXIS_SHORTHANDS: ReadonlyArray<ZoomAxis> = ['x', 'y', 'xy'];

function isZoomAxis(value: unknown): value is ZoomAxis {
  return typeof value === 'string' && (AXIS_SHORTHANDS as ReadonlyArray<string>).includes(value);
}

/**
 * Normalizes the `zoom` prop into resolved options, or `null` when zoom is disabled.
 */
export function resolveZoomOptions(zoom: ZoomProp | undefined): ResolvedZoomOptions | null {
  if (zoom == null || zoom === false) {
    return null;
  }
  if (zoom === true) {
    return { ...ZOOM_DEFAULTS };
  }
  if (isZoomAxis(zoom)) {
    return { ...ZOOM_DEFAULTS, axis: zoom };
  }
  return { ...ZOOM_DEFAULTS, ...zoom };
}

/**
 * Whether a given dimension is enabled for zoom/pan under these options.
 */
export function zoomEnabledForDimension(options: ResolvedZoomOptions, dimension: ZoomDimension): boolean {
  return options.axis === 'xy' || options.axis === dimension;
}

/* ---------------------------------------------------------------------------------------------- *
 * Mapping between the public `[0, 1]` window form and the internal AxisViewport / ZoomState.
 * ---------------------------------------------------------------------------------------------- */

export function windowToViewport(window: AxisWindow): AxisViewport {
  return clampViewport({ startRatio: window.start, endRatio: window.end });
}

export function viewportToWindow(viewport: AxisViewport): AxisWindow {
  return { start: viewport.startRatio, end: viewport.endRatio };
}

/**
 * Converts a public viewport into a full {@link ZoomState}; omitted dimensions become the full view.
 */
export function zoomStateFromViewport(viewport: ZoomViewport): ZoomState {
  return {
    x: viewport.x ? windowToViewport(viewport.x) : FULL_VIEWPORT,
    y: viewport.y ? windowToViewport(viewport.y) : FULL_VIEWPORT,
  };
}

export function zoomStateToViewport(state: ZoomState): Required<ZoomViewport> {
  return { x: viewportToWindow(state.x), y: viewportToWindow(state.y) };
}
