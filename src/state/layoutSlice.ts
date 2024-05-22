import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { castDraft } from 'immer';
import { ChartOffset, LayoutType } from '../util/types';

export interface RechartsHTMLContainer {
  getBoundingClientRect: () => DOMRect;
  offsetWidth: number;
}

type ChartLayout = {
  layoutType: LayoutType;
  offset: ChartOffset;
  /**
   * Why not DOMRect? Because resize
   */
  container: RechartsHTMLContainer | null;
};

const initialState: ChartLayout = {
  layoutType: 'horizontal',
  container: null,
  offset: {},
};

const chartLayoutSlice = createSlice({
  name: 'chartLayout',
  initialState,
  reducers: {
    setLayout(state, action: PayloadAction<LayoutType>) {
      state.layoutType = action.payload;
    },
    setContainer(state, action: PayloadAction<RechartsHTMLContainer | null>) {
      state.container = castDraft(action.payload);
    },
    setOffset(state, action: PayloadAction<ChartOffset>) {
      state.offset = action.payload;
    },
  },
});

export const { setLayout, setContainer, setOffset } = chartLayoutSlice.actions;

export const chartLayoutReducer = chartLayoutSlice.reducer;
