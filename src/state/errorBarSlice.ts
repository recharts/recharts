import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorBarDirection } from '../cartesian/ErrorBar';
import { DataKey } from '../util/types';
import { GraphicalItemId } from './graphicalItemsSlice';

/**
 * ErrorBars have lot more settings but all the others are scoped to the component itself.
 * Only some of them required to be reported to the global store because XAxis and YAxis need to know
 * if the error bar is contributing to extending the axis domain.
 */
export type ErrorBarsSettings = {
  /**
   * The direction is only used in Scatter chart, and decided based on ChartLayout in other charts.
   */
  direction: ErrorBarDirection;
  /**
   * The dataKey decides which property from the data will each individual ErrorBar use.
   * If it so happens that the ErrorBar data are bigger than the axis domain,
   * the error bar data will stretch the axis domain.
   */
  dataKey: DataKey<any>;
  /*
   * ErrorBar props say that it has explicit xAxis and yAxis props,
   * but actually it always inherits the xAxis and yAxis defined on the parent graphical item.
   */
};

export type ErrorBarsState = Record<GraphicalItemId, ReadonlyArray<ErrorBarsSettings>>;

const initialState: ErrorBarsState = {};

const errorBarSlice = createSlice({
  name: 'errorBars',
  initialState,
  reducers: {
    addErrorBar: (state, action: PayloadAction<{ itemId: GraphicalItemId; errorBar: ErrorBarsSettings }>) => {
      const { itemId, errorBar } = action.payload;
      if (!state[itemId]) {
        state[itemId] = [];
      }
      state[itemId].push(errorBar);
    },
    replaceErrorBar: (
      state,
      action: PayloadAction<{ itemId: GraphicalItemId; prev: ErrorBarsSettings; next: ErrorBarsSettings }>,
    ) => {
      const { itemId, prev, next } = action.payload;
      if (state[itemId]) {
        state[itemId] = state[itemId].map(e =>
          e.dataKey === prev.dataKey && e.direction === prev.direction ? next : e,
        );
      }
    },
    removeErrorBar: (state, action: PayloadAction<{ itemId: GraphicalItemId; errorBar: ErrorBarsSettings }>) => {
      const { itemId, errorBar } = action.payload;
      if (state[itemId]) {
        state[itemId] = state[itemId].filter(e => e.dataKey !== errorBar.dataKey || e.direction !== errorBar.direction);
      }
    },
  },
});

export const { addErrorBar, replaceErrorBar, removeErrorBar } = errorBarSlice.actions;

export const errorBarReducer = errorBarSlice.reducer;
