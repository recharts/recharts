import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StackOffsetType } from '../util/types';
import { SyncMethod } from '../synchronisation/types';

/**
 * These are chart options that users can choose - which means they can also
 * choose to change them which should trigger a re-render.
 */
export type UpdatableChartOptions = {
  accessibilityLayer: boolean;
  barCategoryGap: number | string;
  barGap: number | string;
  barSize: string | number | undefined;
  /**
   * Useful for debugging which chart is which when synchronising.
   * The className is also passed to the root element of the chart but that's done in the JSX, not through Redux.
   */
  className: string | undefined;
  maxBarSize: number | undefined;
  stackOffset: StackOffsetType;
  /**
   * Charts that share the same syncId will have their Tooltip and Brush synchronised.
   */
  syncId: number | string | undefined;
  syncMethod: SyncMethod;
};

export const initialState: UpdatableChartOptions = {
  accessibilityLayer: true,
  barCategoryGap: '10%',
  barGap: 4,
  barSize: undefined,
  className: undefined,
  maxBarSize: undefined,
  stackOffset: 'none',
  syncId: undefined,
  syncMethod: 'index',
};

const rootPropsSlice = createSlice({
  name: 'rootProps',
  initialState,
  reducers: {
    updateOptions: (state: UpdatableChartOptions, action: PayloadAction<UpdatableChartOptions>) => {
      state.accessibilityLayer = action.payload.accessibilityLayer;
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
