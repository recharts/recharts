import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { castDraft } from 'immer';
import { LayoutType, Size } from '../util/types';
import { HorizontalAlignmentType, LegendPayload, VerticalAlignmentType } from '../component/DefaultLegendContent';
import type { LegendItemSorter } from '../component/Legend';

export type LegendSettings = {
  layout: LayoutType;
  align: HorizontalAlignmentType;
  verticalAlign: VerticalAlignmentType;
  itemSorter: LegendItemSorter;
};

/**
 * The properties inside this state update independently of each other and quite often.
 * When selecting, never select the whole state because you are going to get
 * unnecessary re-renders. Select only the properties you need.
 *
 * This is why this state type is not exported - don't use it directly.
 */
type LegendState = {
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
    itemSorter: 'value',
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
      state.settings.itemSorter = action.payload.itemSorter;
    },
    addLegendPayload(state, action: PayloadAction<ReadonlyArray<LegendPayload>>) {
      state.payload.push(castDraft(action.payload));
    },
    removeLegendPayload(state, action: PayloadAction<ReadonlyArray<LegendPayload>>) {
      const index = current(state).payload.indexOf(castDraft(action.payload));
      if (index > -1) {
        state.payload.splice(index, 1);
      }
    },
  },
});

export const { setLegendSize, setLegendSettings, addLegendPayload, removeLegendPayload } = legendSlice.actions;

export const legendReducer = legendSlice.reducer;
