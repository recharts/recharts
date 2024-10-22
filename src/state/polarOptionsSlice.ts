import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  reducers: {
    updatePolarOptions: (_state, action: PayloadAction<PolarChartOptions>) => {
      return action.payload;
    },
  },
});

export const { updatePolarOptions } = polarOptionsSlice.actions;

export const polarOptionsReducer = polarOptionsSlice.reducer;
