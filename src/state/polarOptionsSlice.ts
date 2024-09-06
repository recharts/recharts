import { createSlice } from '@reduxjs/toolkit';

export type PolarChartOptions = {
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
