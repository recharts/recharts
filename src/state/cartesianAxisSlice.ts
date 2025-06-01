import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { castDraft } from 'immer';
import { ReactElement, SVGProps } from 'react';
import { AxisDomain, AxisDomainType, AxisInterval, AxisTick, DataKey, ScaleType } from '../util/types';
import { RechartsScale } from '../util/ChartUtils';
import { TickFormatter } from '../cartesian/CartesianAxis';
import type { AxisRange } from './selectors/axisSelectors';

export type AxisId = string | number;
export type XAxisPadding = { left?: number; right?: number } | 'gap' | 'no-gap';
export type YAxisPadding = { top?: number; bottom?: number } | 'gap' | 'no-gap';

export type XAxisOrientation = 'top' | 'bottom';
export type YAxisOrientation = 'left' | 'right';

/**
 * Properties shared in X, Y, and Z axes
 */
export type BaseCartesianAxis = {
  id: AxisId;
  scale: ScaleType | RechartsScale | undefined;
  type: AxisDomainType;
  /**
   * The axis functionality is severely restricted without a dataKey
   * - but there is still something left, and the prop is optional
   * so this can also be undefined even in real charts.
   * There are no defaults.
   */
  dataKey: DataKey<any> | undefined;
  unit: string | undefined;
  name: string | undefined;
  allowDuplicatedCategory: boolean;
  allowDataOverflow: boolean;
  reversed: boolean;
  includeHidden: boolean;
  domain: AxisDomain | undefined;
};

export type TicksSettings = {
  allowDecimals: boolean;
  tickCount: number;
  /**
   * Ticks can be any type when the axis is the type of category
   * Ticks must be numbers when the axis is the type of number
   */
  ticks: ReadonlyArray<AxisTick> | undefined;
  tick: SVGProps<SVGTextElement> | ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | boolean;
};

/**
 * These are the external props, visible for users as they set them using our public API.
 * There is all sorts of internal computed things based on these, but they will come through selectors.
 *
 * Properties shared between X and Y axes
 */
export type CartesianAxisSettings = BaseCartesianAxis &
  TicksSettings & {
    interval: AxisInterval;
    mirror: boolean;
    minTickGap: number;
    angle: number;
    hide: boolean;
    tickFormatter: TickFormatter | undefined;
  };

export type XAxisSettings = CartesianAxisSettings & {
  padding: XAxisPadding;
  height: number;
  orientation: XAxisOrientation;
};

export type YAxisWidth = number | 'auto';

export type YAxisSettings = CartesianAxisSettings & {
  padding: YAxisPadding;
  width: YAxisWidth;
  orientation: YAxisOrientation;
};

/**
 * Z axis is special because it's never displayed. It controls the size of Scatter dots,
 * but it never displays ticks anywhere.
 */
export type ZAxisSettings = BaseCartesianAxis & {
  range: AxisRange;
};

type AxisMapState = {
  xAxis: Record<AxisId, XAxisSettings>;
  yAxis: Record<AxisId, YAxisSettings>;
  zAxis: Record<AxisId, ZAxisSettings>;
};

const initialState: AxisMapState = {
  xAxis: {},
  yAxis: {},
  zAxis: {},
};

/**
 * This is the slice where each individual Axis element pushes its own configuration.
 * Prefer to use this one instead of axisSlice.
 */
const cartesianAxisSlice = createSlice({
  name: 'cartesianAxis',
  initialState,
  reducers: {
    addXAxis(state, action: PayloadAction<XAxisSettings>) {
      state.xAxis[action.payload.id] = castDraft(action.payload);
    },
    removeXAxis(state, action: PayloadAction<XAxisSettings>) {
      delete state.xAxis[action.payload.id];
    },
    addYAxis(state, action: PayloadAction<YAxisSettings>) {
      state.yAxis[action.payload.id] = castDraft(action.payload);
    },
    removeYAxis(state, action: PayloadAction<YAxisSettings>) {
      delete state.yAxis[action.payload.id];
    },
    addZAxis(state, action: PayloadAction<ZAxisSettings>) {
      state.zAxis[action.payload.id] = castDraft(action.payload);
    },
    removeZAxis(state, action: PayloadAction<ZAxisSettings>) {
      delete state.zAxis[action.payload.id];
    },
    updateYAxisWidth(state, action: PayloadAction<{ id: AxisId; width: number }>) {
      const { id, width } = action.payload;
      if (state.yAxis[id]) {
        state.yAxis[id] = {
          ...state.yAxis[id],
          width,
        };
      }
    },
  },
});

export const { addXAxis, removeXAxis, addYAxis, removeYAxis, addZAxis, removeZAxis, updateYAxisWidth } =
  cartesianAxisSlice.actions;

export const cartesianAxisReducer = cartesianAxisSlice.reducer;
