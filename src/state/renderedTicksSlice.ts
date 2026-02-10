/**
 * @fileOverview this stores actually rendered ticks.
 *
 * What we do is that we have the domain -> ticks mapping in the cartesianSlice,
 * which is fine but the result then goes to CartesianAxis where we use DOM measurement
 * to decide which ticks to actually render.
 *
 * This renderedTickSlice stores those actually rendered ticks so that we can return them from a hook later.
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { castDraft, WritableDraft } from 'immer';
import { TickItem } from '../util/types';
import { AxisId } from './cartesianAxisSlice';

type RenderedTicksAxisState = {
  [axisId: AxisId]: ReadonlyArray<TickItem>;
};

type RenderedTicksState = {
  xAxis: RenderedTicksAxisState;
  yAxis: RenderedTicksAxisState;
};

const initialState: RenderedTicksState = {
  xAxis: {},
  yAxis: {},
};

export const renderedTicksSlice = createSlice({
  name: 'renderedTicks',
  initialState,
  reducers: {
    setRenderedTicks: (
      state: WritableDraft<RenderedTicksState>,
      action: PayloadAction<{
        axisType: 'xAxis' | 'yAxis';
        axisId: AxisId;
        ticks: ReadonlyArray<TickItem>;
      }>,
    ) => {
      const { axisType, axisId, ticks } = action.payload;
      state[axisType][axisId] = castDraft(ticks);
    },
    removeRenderedTicks: (
      state: WritableDraft<RenderedTicksState>,
      action: PayloadAction<{
        axisType: 'xAxis' | 'yAxis';
        axisId: AxisId;
      }>,
    ) => {
      const { axisType, axisId } = action.payload;
      delete state[axisType][axisId];
    },
  },
});

export const { setRenderedTicks, removeRenderedTicks } = renderedTicksSlice.actions;

export const renderedTicksReducer = renderedTicksSlice.reducer;
