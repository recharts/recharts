import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LayoutType } from '../util/types';

type ChartLayout = {
  layoutType: LayoutType;
};

const initialState: ChartLayout = {
  layoutType: 'horizontal',
};

const chartLayoutSlice = createSlice({
  name: 'chartLayout',
  initialState,
  reducers: {
    setLayout(state, action: PayloadAction<LayoutType>) {
      state.layoutType = action.payload;
    },
  },
});

export const { setLayout } = chartLayoutSlice.actions;

export const chartLayoutReducer = chartLayoutSlice.reducer;
