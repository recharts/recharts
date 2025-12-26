import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PolarChartOptions = {
  cx: number | string;
  cy: number | string;
  startAngle: number;
  endAngle: number;
  innerRadius: number | string;
  outerRadius: number | string;
};

type PolarChartState = PolarChartOptions | null;

const initialState: PolarChartState = null;

const reducers = {
  updatePolarOptions: (_state: PolarChartState, action: PayloadAction<PolarChartOptions>): PolarChartOptions => {
    return action.payload;
  },
};

const polarOptionsSlice = createSlice<PolarChartState, typeof reducers>({
  name: 'polarOptions',
  initialState,
  reducers,
});

export const { updatePolarOptions } = polarOptionsSlice.actions;

export const polarOptionsReducer = polarOptionsSlice.reducer;
