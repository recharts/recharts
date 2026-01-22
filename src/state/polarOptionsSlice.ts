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
  updatePolarOptions: (state: PolarChartState, action: PayloadAction<PolarChartOptions>): PolarChartOptions => {
    if (state === null) {
      return action.payload;
    }
    state.startAngle = action.payload.startAngle;
    state.endAngle = action.payload.endAngle;
    state.cx = action.payload.cx;
    state.cy = action.payload.cy;
    state.innerRadius = action.payload.innerRadius;
    state.outerRadius = action.payload.outerRadius;
    return state;
  },
};

const polarOptionsSlice = createSlice<PolarChartState, typeof reducers>({
  name: 'polarOptions',
  initialState,
  reducers,
});

export const { updatePolarOptions } = polarOptionsSlice.actions;

export const polarOptionsReducer = polarOptionsSlice.reducer;
