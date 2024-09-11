import { createSlice } from '@reduxjs/toolkit';

export type PolarChartOptions = {
  cx: number | string;
  cy: number | string;
  startAngle: number;
  endAngle: number;
  innerRadius: number | string;
  outerRadius: number | string;
};

const polarOptionsSlice = createSlice({
  name: 'polarOptions',
  initialState: null,
  reducers: {},
});

export const polarOptionsReducer = polarOptionsSlice.reducer;
