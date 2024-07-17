import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { castDraft } from 'immer';
import { ChartOffset, LayoutType, Size } from '../util/types';

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
  width: number;
  height: number;
};

const initialState: ChartLayout = {
  layoutType: 'horizontal',
  container: null,
  offset: {},
  width: 0,
  height: 0,
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
    setChartSize(state, action: PayloadAction<Size>) {
      state.width = action.payload.width;
      state.height = action.payload.height;
    },
  },
});

export const { setLayout, setContainer, setOffset, setChartSize } = chartLayoutSlice.actions;

export const chartLayoutReducer = chartLayoutSlice.reducer;
