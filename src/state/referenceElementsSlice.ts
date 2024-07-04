import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { AxisId } from './axisMapSlice';
import { IfOverflow } from '../util/IfOverflow';

export type ReferenceDotSettings = {
  x: number;
  y: number;
  r: number;
  yAxisId: AxisId;
  xAxisId: AxisId;
  ifOverflow: IfOverflow;
};

type ReferenceElementState = {
  dots: ReadonlyArray<ReferenceDotSettings>;
};

const initialState: ReferenceElementState = {
  dots: [],
};

export const referenceElementsSlice = createSlice({
  name: 'referenceElements',
  initialState,
  reducers: {
    addDot: (state, action: PayloadAction<ReferenceDotSettings>) => {
      state.dots.push(action.payload);
    },
    removeDot: (state, action: PayloadAction<ReferenceDotSettings>) => {
      const index = current(state).dots.findIndex(dot => dot === action.payload);
      if (index !== -1) {
        state.dots.splice(index, 1);
      }
    },
  },
});

export const { addDot, removeDot } = referenceElementsSlice.actions;

export const referenceElementsReducer = referenceElementsSlice.reducer;
