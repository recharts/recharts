import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { castDraft } from 'immer';
import { ChartData } from './chartDataSlice';
import { AxisId } from './axisMapSlice';

export type CartesianGraphicalItemSettings = {
  data: ChartData;
  /**
   * Each of the graphical items explicitly says which axis it uses;
   * this property is optional for users but every graphical item must have a default,
   * and it is required here.
   */
  xAxisId: AxisId;
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
      const index = current(state).cartesianItems.indexOf(action.payload);
      if (index > -1) {
        state.cartesianItems.splice(index, 1);
      }
    },
  },
});

export const { addBar, removeBar, addCartesianGraphicalItem, removeCartesianGraphicalItem } =
  graphicalItemsSlice.actions;

export const graphicalItemsReducer = graphicalItemsSlice.reducer;
