import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LayoutType, Margin, Size } from '../util/types';
import { ElementOffset } from '../util/useElementOffset';

type ChartLayoutState = {
  layoutType: LayoutType;
  width: number;
  height: number;
  margin: Margin;
  offset: ElementOffset;
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
  offset: { top: 0, left: 0, width: 0, height: 0 },
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
    setMargin(state, action: PayloadAction<Margin>) {
      state.margin = action.payload;
    },
    setOffset(state, action: PayloadAction<ElementOffset>) {
      state.offset = action.payload;
    },
    setScale(state, action: PayloadAction<number>) {
      state.scale = action.payload;
    },
  },
});

export const { setMargin, setLayout, setChartSize, setOffset, setScale } = chartLayoutSlice.actions;

export const chartLayoutReducer = chartLayoutSlice.reducer;
