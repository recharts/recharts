import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxisDomain, AxisDomainType, AxisType, DataKey, ScaleType } from '../util/types';
import { RechartsScale } from '../util/ChartUtils';

export type AxisId = string | number;
export type XAxisPadding = { left?: number; right?: number } | 'gap' | 'no-gap';

/**
 * These are the external props, visible for users as they set them using our public API.
 * There is all sorts of internal computed things based on these but they will come through selectors.
 */
// TODO add the remaining properties here
export type AxisSettings = {
  id: AxisId;
  scale: ScaleType | RechartsScale | undefined;
  type: AxisDomainType;
  padding: XAxisPadding;
  domain: AxisDomain | undefined;
  allowDataOverflow: boolean;
  /**
   * The axis functionality is severely restricted without a dataKey
   * - but there is still something left, and the prop is optional
   * so this can also be undefined even in real charts.
   * There are no defaults.
   */
  dataKey: DataKey<any> | undefined;
  allowDuplicatedCategory: boolean;
};

// TODO add the remaining properties here
export type XAxisSettings = AxisSettings;

type AxisMapState = {
  [axisType in AxisType]: Record<AxisId, XAxisSettings>;
};

const initialState: AxisMapState = {
  angleAxis: {},
  radiusAxis: {},
  xAxis: {},
  yAxis: {},
  zAxis: {},
};

/**
 * This is the slice where each individual Axis element pushes its own configuration.
 * Prefer to use this one instead of axisSlice.
 */
const axisMapSlice = createSlice({
  name: 'axisMap',
  initialState,
  reducers: {
    addXAxis(state, action: PayloadAction<XAxisSettings>) {
      state.xAxis[action.payload.id] = action.payload;
    },
    removeXAxis(state, action: PayloadAction<XAxisSettings>) {
      delete state.xAxis[action.payload.id];
    },
  },
});

export const { addXAxis, removeXAxis } = axisMapSlice.actions;

export const axisMapReducer = axisMapSlice.reducer;
