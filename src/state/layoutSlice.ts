import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { castDraft } from 'immer';
import { LayoutType } from '../util/types';

interface HasDomRect {
  getBoundingClientRect: () => DOMRect;
}

type ChartLayout = {
  layoutType: LayoutType;
  /**
   * Why not DOMRect? Because resize
   */
  container: HasDomRect | null;
};

const initialState: ChartLayout = {
  layoutType: 'horizontal',
  container: null,
};

const chartLayoutSlice = createSlice({
  name: 'chartLayout',
  initialState,
  reducers: {
    setLayout(state, action: PayloadAction<LayoutType>) {
      state.layoutType = action.payload;
    },
    setContainer(state, action: PayloadAction<HasDomRect | null>) {
      state.container = castDraft(action.payload);
    },
  },
});

export const { setLayout, setContainer } = chartLayoutSlice.actions;

export const chartLayoutReducer = chartLayoutSlice.reducer;
