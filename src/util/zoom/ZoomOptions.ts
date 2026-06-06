import { ZoomDimension } from '../../state/zoomSlice';

/**
 * Which dimensions a chart can be zoomed and panned along.
 */
export type ZoomAxis = 'x' | 'y' | 'xy';

/**
 * Public configuration for the cartesian zoom/pan feature. See the "Zoom and Pan" guide.
 */
export type ZoomOptions = {
  /** Which dimensions can be zoomed and panned. @defaultValue 'xy' */
  axis?: ZoomAxis;
  /** Furthest zoom-out. 1 means the full data cannot be zoomed out past. @defaultValue 1 */
  minZoom?: number;
  /** Deepest zoom-in (e.g. 25 shows ~1/25th of the data). @defaultValue 25 */
  maxZoom?: number;
  /** Wheel / trackpad to zoom. @defaultValue true */
  wheel?: boolean;
  /** Drag to pan. @defaultValue true */
  pan?: boolean;
  /** Double-click resets to the full view. @defaultValue true */
  doubleClickReset?: boolean;
};

/**
 * The `zoom` prop accepts `true` (enable with defaults), an axis shorthand (`"x"`), or full options.
 */
export type ZoomProp = boolean | ZoomAxis | ZoomOptions;

export type ResolvedZoomOptions = Required<ZoomOptions>;

const ZOOM_DEFAULTS: ResolvedZoomOptions = {
  axis: 'xy',
  minZoom: 1,
  maxZoom: 25,
  wheel: true,
  pan: true,
  doubleClickReset: true,
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
