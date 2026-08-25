import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxisViewport, clampViewport, FULL_VIEWPORT } from '../util/zoom/viewport';

/**
 * The two spatial dimensions a cartesian chart can be zoomed along.
 * `x` is shared by every horizontal axis, `y` by every vertical axis.
 */
export type ZoomDimension = 'x' | 'y';

/**
 * Live zoom/pan state for a cartesian chart, expressed as a normalized {@link AxisViewport}
 * per dimension.
 *
 * The default value is the full viewport on both dimensions, i.e. no zoom, which is why this
 * slice is completely inert until something dispatches a zoom action: every selector derived
 * from it sees "not zoomed" and the chart renders exactly as it does today.
 *
 * This slice intentionally holds only the *geometric* state. Configuration that comes from
 * props (whether zoom is enabled, min/max scale, drag-to-zoom, ...) lives elsewhere so the
 * runtime state and the user configuration stay decoupled.
 */
export type ZoomState = {
  x: AxisViewport;
  y: AxisViewport;
};

const initialState: ZoomState = {
  x: FULL_VIEWPORT,
  y: FULL_VIEWPORT,
};

const zoomSlice = createSlice({
  name: 'zoom',
  initialState,
  reducers: {
    /**
     * Replaces the viewport of a single dimension. The incoming viewport is normalized so
     * callers never have to worry about producing an out-of-range or inverted window.
     */
    setAxisViewport(state: ZoomState, action: PayloadAction<{ dimension: ZoomDimension; viewport: AxisViewport }>) {
      const { dimension, viewport } = action.payload;
      state[dimension] = clampViewport(viewport);
    },
    /**
     * Replaces both viewports at once, e.g. when restoring a saved zoom or syncing from a brush.
     */
    setZoom(_state: ZoomState, action: PayloadAction<ZoomState>) {
      return {
        x: clampViewport(action.payload.x),
        y: clampViewport(action.payload.y),
      };
    },
    /**
     * Resets the chart back to the fully zoomed-out state.
     */
    resetZoom() {
      return initialState;
    },
  },
});

export const { setAxisViewport, setZoom, resetZoom } = zoomSlice.actions;

export const zoomReducer = zoomSlice.reducer;
