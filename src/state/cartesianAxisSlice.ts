import { createSlice, PayloadAction, prepareAutoBatched } from '@reduxjs/toolkit';
import { castDraft } from 'immer';
import {
  AxisDomain,
  AxisInterval,
  AxisTick,
  DataKey,
  EvaluatedAxisDomainType,
  ScaleType,
  TickProp,
} from '../util/types';
import { TickFormatter } from '../cartesian/CartesianAxis';
import type { AxisRange } from './selectors/axisSelectors';
import { CustomScaleDefinition } from '../util/scale/CustomScaleDefinition';

/**
 * @inline
 */
export type AxisId = string | number;
export const defaultAxisId: AxisId = 0;
export type XAxisPadding = { left?: number; right?: number } | 'gap' | 'no-gap';
export type YAxisPadding = { top?: number; bottom?: number } | 'gap' | 'no-gap';

export type XAxisOrientation = 'top' | 'bottom';
export type YAxisOrientation = 'left' | 'right';

/**
 * Properties shared in X, Y, and Z axes.
 * User defined axis settings, coming from props.
 */
export type BaseCartesianAxis = {
  id: AxisId;
  scale:
    | ScaleType
    | CustomScaleDefinition
    | CustomScaleDefinition<string>
    | CustomScaleDefinition<number>
    | CustomScaleDefinition<Date>;
  /**
   * Before creating this object, evaluate the domain type based on the chart layout so that we have the 'auto' resolved.
   */
  type: EvaluatedAxisDomainType;
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
  tick: TickProp<any>;
  /**
   * When true, uses an improved tick step algorithm that snaps to nice numbers
   * (1, 2, 2.5, 5) at each order of magnitude, producing human-friendly tick
   * intervals like 0, 5, 10, 15, 20 instead of 0, 4, 8, 12, 16.
   *
   * @defaultValue false
   */
  niceTicks: boolean;
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
    replaceXAxis: {
      reducer(state, action: PayloadAction<{ prev: XAxisSettings; next: XAxisSettings }>) {
        const { prev, next } = action.payload;
        if (state.xAxis[prev.id] !== undefined) {
          if (prev.id !== next.id) {
            delete state.xAxis[prev.id];
          }
          state.xAxis[next.id] = castDraft(next);
        }
      },
      prepare: prepareAutoBatched<{ prev: XAxisSettings; next: XAxisSettings }>(),
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
    replaceYAxis: {
      reducer(state, action: PayloadAction<{ prev: YAxisSettings; next: YAxisSettings }>) {
        const { prev, next } = action.payload;
        if (state.yAxis[prev.id] !== undefined) {
          if (prev.id !== next.id) {
            delete state.yAxis[prev.id];
          }
          state.yAxis[next.id] = castDraft(next);
        }
      },
      prepare: prepareAutoBatched<{ prev: YAxisSettings; next: YAxisSettings }>(),
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
    replaceZAxis: {
      reducer(state, action: PayloadAction<{ prev: ZAxisSettings; next: ZAxisSettings }>) {
        const { prev, next } = action.payload;
        if (state.zAxis[prev.id] !== undefined) {
          if (prev.id !== next.id) {
            delete state.zAxis[prev.id];
          }
          state.zAxis[next.id] = castDraft(next);
        }
      },
      prepare: prepareAutoBatched<{ prev: ZAxisSettings; next: ZAxisSettings }>(),
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
          Math.abs(width - (history[0] ?? 0)) <= 1
        ) {
          return;
        }
        const newHistory = [...history, width].slice(-3);
        state.yAxis[id] = {
          ...axis,
          width,
          widthHistory: newHistory,
        };
      }
    },
  },
});

export const {
  addXAxis,
  replaceXAxis,
  removeXAxis,
  addYAxis,
  replaceYAxis,
  removeYAxis,
  addZAxis,
  replaceZAxis,
  removeZAxis,
  updateYAxisWidth,
} = cartesianAxisSlice.actions;

export const cartesianAxisReducer = cartesianAxisSlice.reducer;
