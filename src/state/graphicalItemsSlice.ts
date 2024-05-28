import { createSlice } from '@reduxjs/toolkit';

export type GraphicalItemsState = {
  /**
   * Axis scale selector behaves differently if one of the child elements is a bar
   * vs if it's not;
   * So we need to track the number of bars present in the chart
   * and then report if there is at least one.
   */
  countOfBars: number;
};

const initialState: GraphicalItemsState = {
  countOfBars: 0,
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
  },
});

export const { addBar, removeBar } = graphicalItemsSlice.actions;

export const graphicalItemsReducer = graphicalItemsSlice.reducer;
