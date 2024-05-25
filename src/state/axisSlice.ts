import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { castDraft } from 'immer';
import { PolarAngleAxisMap, PolarRadiusAxisMap, XAxisMap, YAxisMap } from '../util/types';

type AxisState = {
  xAxisMap: XAxisMap | undefined;
  yAxisMap: YAxisMap | undefined;
  polarAngleAxisMap: PolarAngleAxisMap | undefined;
  polarRadiusAxisMap: PolarRadiusAxisMap | undefined;
};

const initialState: AxisState = {
  xAxisMap: {},
  yAxisMap: {},
  polarAngleAxisMap: {},
  polarRadiusAxisMap: undefined,
};

/**
 * @deprecated this is a temporary Redux slice for storing axismaps.
 * Redux is great and all but the axismaps are parsed from the DOM in generateCategoricalChart and then stored here.
 * This is a temporary workaround, so TODO delete this and come with something better.
 * Perhaps the individual axes should push their data instead of the wrapper parsing the DOM?
 */
const axisSlice = createSlice({
  name: 'axis',
  initialState,
  reducers: {
    setXAxisMap(state, action: PayloadAction<XAxisMap | undefined>) {
      state.xAxisMap = castDraft(action.payload);
    },
    setYAxisMap(state, action: PayloadAction<YAxisMap | undefined>) {
      state.yAxisMap = castDraft(action.payload);
    },
    setPolarAngleAxisMap(state, action: PayloadAction<PolarAngleAxisMap | undefined>) {
      state.polarAngleAxisMap = castDraft(action.payload);
    },
    setPolarRadiusAxisMap(state, action: PayloadAction<PolarRadiusAxisMap | undefined>) {
      state.polarRadiusAxisMap = castDraft(action.payload);
    },
  },
});

export const { setXAxisMap, setYAxisMap, setPolarAngleAxisMap, setPolarRadiusAxisMap } = axisSlice.actions;

export const axisReducer = axisSlice.reducer;
