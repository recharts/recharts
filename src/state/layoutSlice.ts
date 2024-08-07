import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { castDraft } from 'immer';
import { LayoutType, Margin, Size } from '../util/types';

export interface RechartsHTMLContainer {
  getBoundingClientRect: () => DOMRect;
  offsetWidth: number;
}

type ChartLayout = {
  layoutType: LayoutType;
  /**
   * Why not DOMRect? Because resize
   */
  container: RechartsHTMLContainer | null;
  width: number;
  height: number;
  margin: Margin;
};

const initialState: ChartLayout = {
  layoutType: 'horizontal',
  container: null,
  width: 0,
  height: 0,
  margin: { top: 5, right: 5, bottom: 5, left: 5 },
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
    setChartSize(state, action: PayloadAction<Size>) {
      state.width = action.payload.width;
      state.height = action.payload.height;
    },
    setMargin(state, action: PayloadAction<Margin>) {
      state.margin = action.payload;
    },
  },
});

export const { setMargin, setLayout, setContainer, setChartSize } = chartLayoutSlice.actions;

export const chartLayoutReducer = chartLayoutSlice.reducer;
