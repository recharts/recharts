import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { castDraft } from 'immer';
import { XAxisMap, YAxisMap } from '../util/types';

type AxisState = {
  xAxisMap: XAxisMap | undefined;
  yAxisMap: YAxisMap | undefined;
};

const initialState: AxisState = {
  xAxisMap: {},
  yAxisMap: {},
};

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
  },
});

export const { setXAxisMap, setYAxisMap } = axisSlice.actions;

export const axisReducer = axisSlice.reducer;
