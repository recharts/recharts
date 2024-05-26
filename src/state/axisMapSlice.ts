import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type AxisId = string | number;

// TODO add the remaining properties here
export type XAxisSettings = {
  id: AxisId;
};

type AxisMapState = {
  xAxis: ReadonlyArray<XAxisSettings>;
};

const initialState: AxisMapState = {
  xAxis: [],
};

/**
 * This is the slice where each individual Axis element pushes its own configuration.
 * Prefer to use this one instead of axisSlice.
 */
const axisMapSlice = createSlice({
  name: 'axisMap',
  initialState,
  reducers: {
    addXAxis(state, action: PayloadAction<XAxisSettings>) {
      state.xAxis.push(action.payload);
    },
    removeXAxis(state, action: PayloadAction<XAxisSettings>) {
      const index = state.xAxis.indexOf(action.payload);
      if (index > -1) {
        state.xAxis.splice(index, 1);
      }
    },
  },
});

export const { addXAxis, removeXAxis } = axisMapSlice.actions;

export const axisMapReducer = axisMapSlice.reducer;
