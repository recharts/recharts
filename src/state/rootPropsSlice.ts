import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StackOffsetType } from '../util/types';

/**
 * These are chart options that users can choose - which means they can also
 * choose to change them which should trigger a re-render.
 */
export type UpdatableChartOptions = {
  barGap: number | string;
  barCategoryGap: number | string;
  stackOffset: StackOffsetType;
  barSize: string | number | undefined;
  maxBarSize: number | undefined;
};

const initialState: UpdatableChartOptions = {
  barGap: 4,
  barCategoryGap: '10%',
  stackOffset: 'none',
  barSize: undefined,
  maxBarSize: undefined,
};

const rootPropsSlice = createSlice({
  name: 'rootProps',
  initialState,
  reducers: {
    updateOptions: (state: UpdatableChartOptions, action: PayloadAction<UpdatableChartOptions>) => {
      state.barCategoryGap = action.payload.barCategoryGap;
      state.barGap = action.payload.barGap ?? initialState.barGap;
      state.barSize = action.payload.barSize;
      state.maxBarSize = action.payload.maxBarSize;
      state.stackOffset = action.payload.stackOffset;
    },
  },
});

export const rootPropsReducer = rootPropsSlice.reducer;

export const { updateOptions } = rootPropsSlice.actions;
