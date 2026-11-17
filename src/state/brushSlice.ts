import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Padding } from '../util/types';

/**
 * From all Brush properties, only height has a default value and will always be defined.
 * Other properties are nullable and will be computed from offsets and margins if they are not set.
 */
export type HorizontalBrushSettings = {
  x: number | undefined;
  y: number | undefined;
  width: number | undefined;
  height: number;
  padding: Padding;
};

export type BrushSettings = HorizontalBrushSettings & {
  verticalWidth: number;
};

const initialState: BrushSettings = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  padding: { top: 0, right: 0, bottom: 0, left: 0 },
  verticalWidth: 0,
};

export const brushSlice = createSlice({
  name: 'brush',
  initialState,
  reducers: {
    setBrushSettings(state: BrushSettings, action: PayloadAction<HorizontalBrushSettings | null>) {
      if (action.payload == null) {
        if (
          state.x !== initialState.x ||
          state.y !== initialState.y ||
          state.width !== initialState.width ||
          state.height !== initialState.height ||
          state.padding !== initialState.padding
        ) {
          state.x = initialState.x;
          state.y = initialState.y;
          state.width = initialState.width;
          state.height = initialState.height;
          state.padding = initialState.padding;
        }
        return;
      }
      if (
        state.x !== action.payload.x ||
        state.y !== action.payload.y ||
        state.width !== action.payload.width ||
        state.height !== action.payload.height ||
        state.padding !== action.payload.padding
      ) {
        state.x = action.payload.x;
        state.y = action.payload.y;
        state.width = action.payload.width;
        state.height = action.payload.height;
        state.padding = action.payload.padding;
      }
    },
    setVerticalBrushWidth(state: BrushSettings, action: PayloadAction<number | null>) {
      const next = action.payload ?? 0;
      if (state.verticalWidth !== next) {
        state.verticalWidth = next;
      }
    },
  },
});

export const { setBrushSettings, setVerticalBrushWidth } = brushSlice.actions;

export const brushReducer = brushSlice.reducer;
