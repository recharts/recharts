import { RechartsRootState } from '../store';
import { AxisViewport, isFullViewport } from '../../util/zoom/viewport';
import { ZoomDimension, ZoomState } from '../zoomSlice';

/**
 * Selects the whole zoom state. Defaults to the full viewport on both dimensions.
 */
export const selectZoom = (state: RechartsRootState): ZoomState => state.zoom;

/**
 * Selects the current viewport for a single dimension.
 */
export const selectAxisViewport = (state: RechartsRootState, dimension: ZoomDimension): AxisViewport =>
  state.zoom[dimension];

/**
 * Returns `true` when the chart is zoomed on either dimension, `false` when fully zoomed out.
 * Useful as a cheap gate before doing any zoom-related work.
 */
export const selectIsZoomed = (state: RechartsRootState): boolean =>
  !isFullViewport(state.zoom.x) || !isFullViewport(state.zoom.y);

/**
 * The chart-level zoom limits registered by the chart's zoom setup (`<ZoomAndPan />` / the `zoom`
 * prop), or `null` when none registered. Window editors (Brush zoom mode, Minimap) fall back to
 * these when they get no explicit `minZoom`/`maxZoom` props.
 */
export const selectSharedZoomLimits = (state: RechartsRootState) => state.zoomSettings.limits;

export const selectSharedZoomAxis = (state: RechartsRootState) => state.zoomSettings.axis;
