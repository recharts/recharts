import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Padding } from '../util/types';

/**
 * From all Brush properties, only height has a default value and will always be defined.
 * Other properties are nullable and will be computed from offsets and margins if they are not set.
 */
export type BrushSettings = {
  x: number | undefined;
  y: number | undefined;
  width: number | undefined;
  height: number;
  padding: Padding;
  layout?: 'horizontal' | 'vertical';
};

export type BrushInstanceSettings = BrushSettings & {
  id: string;
};

export type BrushState = {
  brushes: Record<string, BrushSettings>;
};

const initialState: BrushState = {
  brushes: {},
};

export const brushSlice = createSlice({
  name: 'brush',
  initialState,
  reducers: {
    setBrushSettings(state: BrushState, action: PayloadAction<BrushInstanceSettings | null>) {
      if (action.payload == null) {
        // Clear all brushes if null payload
        state.brushes = {};
        return;
      }
      const { id, ...settings } = action.payload;
      state.brushes[id] = settings;
    },
    removeBrushSettings(state: BrushState, action: PayloadAction<string>) {
      delete state.brushes[action.payload];
    },
  },
});

export const { setBrushSettings, removeBrushSettings } = brushSlice.actions;

export const brushReducer = brushSlice.reducer;
