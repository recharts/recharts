import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { AxisId } from './cartesianAxisSlice';
import { IfOverflow } from '../util/IfOverflow';

type ReferenceElementSettings = {
  yAxisId: AxisId;
  xAxisId: AxisId;
  ifOverflow: IfOverflow;
};

export type ReferenceDotSettings = ReferenceElementSettings & {
  x: unknown;
  y: unknown;
  r: number;
};

export type ReferenceAreaSettings = ReferenceElementSettings & {
  x1: unknown;
  x2: unknown;
  y1: unknown;
  y2: unknown;
};

export type ReferenceLineSettings = ReferenceElementSettings & {
  x: unknown;
  y: unknown;
};

type ReferenceElementState = {
  dots: ReadonlyArray<ReferenceDotSettings>;
  areas: ReadonlyArray<ReferenceAreaSettings>;
  lines: ReadonlyArray<ReferenceLineSettings>;
};

const initialState: ReferenceElementState = {
  dots: [],
  areas: [],
  lines: [],
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
    addArea: (state, action: PayloadAction<ReferenceAreaSettings>) => {
      state.areas.push(action.payload);
    },
    removeArea: (state, action: PayloadAction<ReferenceAreaSettings>) => {
      const index = current(state).areas.findIndex(area => area === action.payload);
      if (index !== -1) {
        state.areas.splice(index, 1);
      }
    },
    addLine: (state, action: PayloadAction<ReferenceLineSettings>) => {
      state.lines.push(action.payload);
    },
    removeLine: (state, action: PayloadAction<ReferenceLineSettings>) => {
      const index = current(state).lines.findIndex(line => line === action.payload);
      if (index !== -1) {
        state.lines.splice(index, 1);
      }
    },
  },
});

export const { addDot, removeDot, addArea, removeArea, addLine, removeLine } = referenceElementsSlice.actions;

export const referenceElementsReducer = referenceElementsSlice.reducer;
