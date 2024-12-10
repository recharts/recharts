import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { XAxisMap, YAxisMap } from '../util/types';

type AxisState = unknown;

const initialState: AxisState = {};

/**
 * @deprecated this is a temporary Redux slice for storing axismaps.
 * Redux is great and all but the axismaps are parsed from the DOM in generateCategoricalChart and then stored here.
 * This is a temporary workaround, so TODO delete this and come with something better.
 * Instead use `cartesianAxisSlice`
 */
const axisSlice = createSlice({
  name: 'axis',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setXAxisMap(state, action: PayloadAction<XAxisMap | undefined>) {
      // state.xAxisMap = castDraft(action.payload);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setYAxisMap(state, action: PayloadAction<YAxisMap | undefined>) {
      // state.yAxisMap = castDraft(action.payload);
    },
  },
});
/**
 * @deprecated this is a temporary Redux slice for storing axismaps.
 * Redux is great and all but the axismaps are parsed from the DOM in generateCategoricalChart and then stored here.
 * This is a temporary workaround, so TODO delete this and come with something better.
 * Instead use `cartesianAxisSlice`
 */
export const { setXAxisMap, setYAxisMap } = axisSlice.actions;

/**
 * @deprecated this is a temporary Redux slice for storing axismaps.
 * Redux is great and all but the axismaps are parsed from the DOM in generateCategoricalChart and then stored here.
 * This is a temporary workaround, so TODO delete this and come with something better.
 * Instead use `cartesianAxisSlice`
 */
export const axisReducer = axisSlice.reducer;
