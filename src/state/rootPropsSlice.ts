import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StackOffsetType } from '../util/types';
import { SyncMethod } from '../synchronisation/types';

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
  /**
   * Charts that share the same syncId will have their Tooltip and Brush synchronised.
   */
  syncId: number | string | undefined;
  syncMethod: SyncMethod;
  /**
   * Useful for debugging which chart is which when synchronising.
   * The className is also passed to the root element of the chart but that's done in the JSX, not through Redux.
   */
  className: string | undefined;
};

export const initialState: UpdatableChartOptions = {
  barGap: 4,
  barCategoryGap: '10%',
  stackOffset: 'none',
  barSize: undefined,
  maxBarSize: undefined,
  syncId: undefined,
  syncMethod: 'index',
  className: undefined,
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
      state.syncId = action.payload.syncId;
      state.syncMethod = action.payload.syncMethod;
      state.className = action.payload.className;
    },
  },
});

export const rootPropsReducer = rootPropsSlice.reducer;

export const { updateOptions } = rootPropsSlice.actions;
