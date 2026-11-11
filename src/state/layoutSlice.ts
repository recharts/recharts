import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LayoutType, Margin, Size } from '../util/types';

type ChartLayoutState = {
  layoutType: LayoutType;
  visibleTitle?: string;
  width: number;
  height: number;
  margin: Margin;
  /**
   * How much is the chart zoomed in.
   * Used for scaling the mouse coordinates to the chart coordinates.
   */
  scale: number;
};

const initialState: ChartLayoutState = {
  layoutType: 'horizontal',
  width: 0,
  height: 0,
  margin: { top: 5, right: 5, bottom: 5, left: 5 },
  scale: 1,
};

const chartLayoutSlice = createSlice({
  name: 'chartLayout',
  initialState,
  reducers: {
    setLayout(state, action: PayloadAction<LayoutType>) {
      state.layoutType = action.payload;
    },
    setChartSize(state, action: PayloadAction<Size>) {
      state.width = action.payload.width;
      state.height = action.payload.height;
    },
    setMargin(state, action: PayloadAction<Partial<Margin>>) {
      state.margin.top = action.payload.top ?? 0;
      state.margin.right = action.payload.right ?? 0;
      state.margin.bottom = action.payload.bottom ?? 0;
      state.margin.left = action.payload.left ?? 0;
    },
    setVisibleTitle(state, action: PayloadAction<string | undefined>) {
      state.visibleTitle = action.payload;
    },
    setScale(state, action: PayloadAction<number>) {
      state.scale = action.payload;
    },
  },
});

export const { setMargin, setLayout, setChartSize, setScale, setVisibleTitle } = chartLayoutSlice.actions;

export const chartLayoutReducer = chartLayoutSlice.reducer;
