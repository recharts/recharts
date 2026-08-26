import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ZoomLimits } from '../util/zoom/zoomActions';
import type { ZoomAxis } from '../util/zoom/ZoomOptions';
import type { ZoomState } from './zoomSlice';
import { viewportsEqual } from '../util/zoom/viewport';

/**
 * Chart-level zoom configuration shared across zoom consumers.
 *
 * The geometric state (the viewport itself) lives in the `zoom` slice; this one holds the
 * configuration registered by the chart's zoom setup (`<ZoomAndPan />` or the `zoom` prop), so
 * window editors that come with their own defaults - Brush zoom mode, Minimap - can fall back to
 * the chart-wide `minZoom`/`maxZoom` instead of silently using different limits.
 */
export type ZoomSettingsState = {
  limits: ZoomLimits | null;
  axis: ZoomAxis | null;
  controlledViewport: ZoomState | null;
};

const initialState: ZoomSettingsState = {
  limits: null,
  axis: null,
  controlledViewport: null,
};

const zoomSettingsSlice = createSlice({
  name: 'zoomSettings',
  initialState,
  reducers: {
    setZoomLimits(state: ZoomSettingsState, action: PayloadAction<ZoomLimits | null>) {
      const next = action.payload;
      if (state.limits?.minZoom === next?.minZoom && state.limits?.maxZoom === next?.maxZoom) {
        return;
      }
      state.limits = next;
    },
    setZoomAxis(state: ZoomSettingsState, action: PayloadAction<ZoomAxis | null>) {
      state.axis = action.payload;
    },
    setControlledZoomViewport(state: ZoomSettingsState, action: PayloadAction<ZoomState | null>) {
      const next = action.payload;
      const current = state.controlledViewport;
      if (
        (current == null && next == null) ||
        (current != null && next != null && viewportsEqual(current.x, next.x) && viewportsEqual(current.y, next.y))
      ) {
        return;
      }
      state.controlledViewport = next;
    },
  },
});

export const { setControlledZoomViewport, setZoomAxis, setZoomLimits } = zoomSettingsSlice.actions;
export const zoomSettingsReducer = zoomSettingsSlice.reducer;
