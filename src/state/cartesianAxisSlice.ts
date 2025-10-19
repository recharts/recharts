import { createSlice, PayloadAction, prepareAutoBatched } from '@reduxjs/toolkit';
import { castDraft } from 'immer';
import { ReactElement, SVGProps } from 'react';
import { AxisDomain, AxisDomainType, AxisInterval, AxisTick, DataKey, ScaleType } from '../util/types';
import { RechartsScale } from '../util/ChartUtils';
import { TickFormatter } from '../cartesian/CartesianAxis';
import type { AxisRange } from './selectors/axisSelectors';

export type AxisId = string | number;
export const defaultAxisId: AxisId = 0;
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
  /**
   * We pass the suggested number of ticks to d3 https://d3js.org/d3-scale/linear#linear_ticks
   * This number is a suggestion. d3 tries to accommodate it, but it might return more or less ticks than requested:
   * > The specified count is only a hint; the scale may return more or fewer values depending on the domain.
   *
   * If undefined, then d3 decides the number of ticks on its own. The default in d3 is 10,
   * but it can vary based on the domain size and other factors.
   */
  tickCount: number | undefined;
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
  widthHistory?: number[];
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
    addXAxis: {
      reducer(state, action: PayloadAction<XAxisSettings>) {
        state.xAxis[action.payload.id] = castDraft(action.payload);
      },
      prepare: prepareAutoBatched<XAxisSettings>(),
    },
    removeXAxis: {
      reducer(state, action: PayloadAction<XAxisSettings>) {
        delete state.xAxis[action.payload.id];
      },
      prepare: prepareAutoBatched<XAxisSettings>(),
    },
    addYAxis: {
      reducer(state, action: PayloadAction<YAxisSettings>) {
        state.yAxis[action.payload.id] = castDraft(action.payload);
      },
      prepare: prepareAutoBatched<YAxisSettings>(),
    },
    removeYAxis: {
      reducer(state, action: PayloadAction<YAxisSettings>) {
        delete state.yAxis[action.payload.id];
      },
      prepare: prepareAutoBatched<YAxisSettings>(),
    },
    addZAxis: {
      reducer(state, action: PayloadAction<ZAxisSettings>) {
        state.zAxis[action.payload.id] = castDraft(action.payload);
      },
      prepare: prepareAutoBatched<ZAxisSettings>(),
    },
    removeZAxis: {
      reducer(state, action: PayloadAction<ZAxisSettings>) {
        delete state.zAxis[action.payload.id];
      },
      prepare: prepareAutoBatched<ZAxisSettings>(),
    },
    updateYAxisWidth(state, action: PayloadAction<{ id: AxisId; width: number }>) {
      const { id, width } = action.payload;
      const axis = state.yAxis[id];
      if (axis) {
        const history = axis.widthHistory || [];
        // An oscillation is detected when the new width is the same as the width before the last one.
        // This is a simple A -> B -> A pattern. If the next width is B, and the difference is less than 1 pixel, we ignore it.
        if (
          history.length === 3 &&
          history[0] === history[2] &&
          width === history[1] &&
          width !== axis.width &&
          Math.abs(width - history[0]) <= 1
        ) {
          return;
        }
        const newHistory = [...history, width].slice(-3);
        state.yAxis[id] = {
          ...state.yAxis[id],
          width,
          widthHistory: newHistory,
        };
      }
    },
  },
});

export const { addXAxis, removeXAxis, addYAxis, removeYAxis, addZAxis, removeZAxis, updateYAxisWidth } =
  cartesianAxisSlice.actions;

export const cartesianAxisReducer = cartesianAxisSlice.reducer;
