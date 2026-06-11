import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ZoomLimits } from '../util/zoom/zoomActions';

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
};

const initialState: ZoomSettingsState = {
  limits: null,
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
  },
});

export const { setZoomLimits } = zoomSettingsSlice.actions;
export const zoomSettingsReducer = zoomSettingsSlice.reducer;
