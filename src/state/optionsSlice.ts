import { createSlice } from '@reduxjs/toolkit';
import { TooltipEventType } from '../util/types';

export type ChartOptions = {
  chartName?: string;
  defaultTooltipEventType?: TooltipEventType;
  validateTooltipEventTypes?: ReadonlyArray<TooltipEventType>;
};

const initialState: ChartOptions = {};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {},
});

export const optionsReducer = optionsSlice.reducer;
