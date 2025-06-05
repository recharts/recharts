import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ZoomState = {
  scaleX: number;
  scaleY: number;
  offsetX: number;
  offsetY: number;
  disableAnimation?: boolean;
  autoScaleYDomain?: boolean;
};

const initialState: ZoomState = {
  scaleX: 1,
  scaleY: 1,
  offsetX: 0,
  offsetY: 0,
  disableAnimation: false,
  autoScaleYDomain: false,
};

const zoomSlice = createSlice({
  name: 'zoom',
  initialState,
  reducers: {
    setZoom(_state, action: PayloadAction<ZoomState>) {
      return action.payload;
    },
  },
});

export const { setZoom } = zoomSlice.actions;

export const zoomReducer = zoomSlice.reducer;
