import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { castDraft } from 'immer';
import { ChartData } from './chartDataSlice';
import { AxisId } from './axisMapSlice';
import { DataKey } from '../util/types';
import { ErrorBarDirection } from '../cartesian/ErrorBar';
import { StackId } from '../util/ChartUtils';

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

export type CartesianGraphicalItemSettings = {
  data: ChartData;
  /**
   * Each of the graphical items explicitly says which axis it uses;
   * this property is optional for users but every graphical item must have a default,
   * and it is required here.
   */
  xAxisId: AxisId;
  yAxisId: AxisId;
  zAxisId: AxisId;
  dataKey: DataKey<any> | undefined;
  /**
   * ErrorBars are only rendered if they are explicitly set in the React tree, otherwise this will be an empty array.
   * One graphical item can have multiple error bars. This probably only makes sense in Scatter.
   */
  errorBars: ReadonlyArray<ErrorBarsSettings> | undefined;
  stackId: StackId | undefined;
  /**
   * Why not just stop pushing the graphical items to state when they are hidden?
   * Well some components decide to continue showing them anyway.
   * Legend for example will keep showing a record for hidden graphical items.
   * Stacks for example will ignore them.
   */
  hide: boolean;
};

export type GraphicalItemsState = {
  /**
   * Axis scale selector behaves differently if one of the child elements is a bar
   * vs if it's not;
   * So we need to track the number of bars present in the chart
   * and then report if there is at least one.
   */
  countOfBars: number;
  /**
   * This is an array of all graphical items and their settings.
   * Graphical item is a visual representation of data on the chart.
   * Some examples are: Pie, Line, Bar.
   *
   * The order is arbitrary; do not expect that indexes here will be the same as indexes elsewhere.
   */
  cartesianItems: ReadonlyArray<CartesianGraphicalItemSettings>;
};

const initialState: GraphicalItemsState = {
  countOfBars: 0,
  cartesianItems: [],
};

const graphicalItemsSlice = createSlice({
  name: 'graphicalItems',
  initialState,
  reducers: {
    addBar(state) {
      state.countOfBars += 1;
    },
    removeBar(state) {
      state.countOfBars -= 1;
    },
    addCartesianGraphicalItem(state, action: PayloadAction<CartesianGraphicalItemSettings>) {
      state.cartesianItems.push(castDraft(action.payload));
    },
    removeCartesianGraphicalItem(state, action: PayloadAction<CartesianGraphicalItemSettings>) {
      const index = current(state).cartesianItems.indexOf(castDraft(action.payload));
      if (index > -1) {
        state.cartesianItems.splice(index, 1);
      }
    },
  },
});

export const { addBar, removeBar, addCartesianGraphicalItem, removeCartesianGraphicalItem } =
  graphicalItemsSlice.actions;

export const graphicalItemsReducer = graphicalItemsSlice.reducer;
