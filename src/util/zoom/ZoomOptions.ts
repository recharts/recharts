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
  Pick<ZoomOptions, 'viewport' | 'initialZoom' | 'onZoomChange'>;

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
