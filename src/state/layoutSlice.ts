import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { castDraft } from 'immer';
import { LayoutType, Margin, Size } from '../util/types';
import { ElementOffset } from '../util/useElementOffset';

/**
 * This is a subset of DOMRect returned by getBoundingClientRect().
 * We don't use the straight `DOMRect` type for two reasons:
 *
 * 1. We don't use all the properties from it, and
 * 2. DOMRect type has `toJSON` method that I am too lazy to mock everywhere and also is not serializable, so I don't want to store it in Redux state.
 */
export type RechartsDOMRect = {
  width: number;
  height: number;
  top: number;
  left: number;
};

export interface RechartsHTMLContainer {
  getBoundingClientRect: () => RechartsDOMRect;
}

type ChartLayoutState = {
  layoutType: LayoutType;
  container: RechartsHTMLContainer | null;
  width: number;
  height: number;
  margin: Margin;
  offset: ElementOffset;
};

const initialState: ChartLayoutState = {
  layoutType: 'horizontal',
  container: null,
  width: 0,
  height: 0,
  margin: { top: 5, right: 5, bottom: 5, left: 5 },
  offset: { top: 0, left: 0, width: 0, height: 0 },
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
    setOffset(state, action: PayloadAction<ElementOffset>) {
      state.offset = action.payload;
    },
  },
});

export const { setMargin, setLayout, setContainer, setChartSize, setOffset } = chartLayoutSlice.actions;

export const chartLayoutReducer = chartLayoutSlice.reducer;
