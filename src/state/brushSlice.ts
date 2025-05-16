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
};

const initialState: BrushSettings = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  padding: { top: 0, right: 0, bottom: 0, left: 0 },
};

export const brushSlice = createSlice({
  name: 'brush',
  initialState,
  reducers: {
    setBrushSettings(_state: BrushSettings, action: PayloadAction<BrushSettings | null>) {
      if (action.payload == null) {
        return initialState;
      }
      return action.payload;
    },
  },
});

export const { setBrushSettings } = brushSlice.actions;

export const brushReducer = brushSlice.reducer;
