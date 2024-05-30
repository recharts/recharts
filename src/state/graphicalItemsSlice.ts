import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChartData } from './chartDataSlice';

export type GraphicalItemsState = {
  /**
   * Axis scale selector behaves differently if one of the child elements is a bar
   * vs if it's not;
   * So we need to track the number of bars present in the chart
   * and then report if there is at least one.
   */
  countOfBars: number;
  /**
   * An array of arrays; the top array is for graphical items,
   * one graphical item, one record in the array.
   * The second level is because every data={x} on every item is expected to be an array itself.
   *
   * The order is arbitrary; do not expect that indexes here will be the same as indexes elsewhere.
   */
  graphicalItemData: ReadonlyArray<ChartData>;
};

const initialState: GraphicalItemsState = {
  countOfBars: 0,
  graphicalItemData: [],
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
    addGraphicalItemData(state, action: PayloadAction<ChartData>) {
      state.graphicalItemData.push(action.payload);
    },
    removeGraphicalItemData(state, action: PayloadAction<ChartData>) {
      state.graphicalItemData = state.graphicalItemData.filter(item => item !== action.payload);
    },
  },
});

export const { addBar, removeBar, addGraphicalItemData, removeGraphicalItemData } = graphicalItemsSlice.actions;

export const graphicalItemsReducer = graphicalItemsSlice.reducer;
