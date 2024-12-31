import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LayoutType, Size } from '../util/types';
import {
  HorizontalAlignmentType,
  Payload as LegendPayload,
  VerticalAlignmentType,
} from '../component/DefaultLegendContent';

export type LegendSettings = {
  layout: LayoutType;
  align: HorizontalAlignmentType;
  verticalAlign: VerticalAlignmentType;
};

export type LegendState = {
  settings: LegendSettings;
  size: Size;
  /**
   * This is a 2D array of LegendPayloads. The first dimension is for each graphical item.
   * Some items may have multiple legend items, so the second dimension is for each legend item.
   */
  payload: ReadonlyArray<ReadonlyArray<LegendPayload>>;
};

const initialState: LegendState = {
  settings: {
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'middle',
  },
  size: {
    width: 0,
    height: 0,
  },
  payload: [],
};

const legendSlice = createSlice({
  name: 'legend',
  initialState,
  reducers: {
    setLegendSize(state, action: PayloadAction<Size>) {
      state.size.width = action.payload.width;
      state.size.height = action.payload.height;
    },
    setLegendSettings(state, action: PayloadAction<LegendSettings>) {
      state.settings.align = action.payload.align;
      state.settings.layout = action.payload.layout;
      state.settings.verticalAlign = action.payload.verticalAlign;
    },
  },
});

export const { setLegendSize, setLegendSettings } = legendSlice.actions;

export const legendReducer = legendSlice.reducer;
