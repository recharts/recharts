import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LayoutType, Size } from '../util/types';
import type { HorizontalAlignmentType, VerticalAlignmentType } from '../component/DefaultLegendContent';

export type LegendSettings = {
  layout: LayoutType;
  align: HorizontalAlignmentType;
  verticalAlign: VerticalAlignmentType;
};

export type LegendState = LegendSettings & Size;

const initialState: LegendState = {
  width: 0,
  height: 0,
  layout: 'horizontal',
  align: 'center',
  verticalAlign: 'middle',
};

const legendSlice = createSlice({
  name: 'legend',
  initialState,
  reducers: {
    setLegendSize(state, action: PayloadAction<Size>) {
      state.width = action.payload.width;
      state.height = action.payload.height;
    },
    setLegendSettings(state, action: PayloadAction<LegendSettings>) {
      state.align = action.payload.align;
      state.layout = action.payload.layout;
      state.verticalAlign = action.payload.verticalAlign;
    },
  },
});

export const { setLegendSize, setLegendSettings } = legendSlice.actions;

export const legendReducer = legendSlice.reducer;
