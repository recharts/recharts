import { createSlice } from '@reduxjs/toolkit';
import { TooltipEventType } from '../util/types';
import { TooltipPayloadSearcher } from './tooltipSlice';

export type ChartOptions = {
  chartName: string;
  defaultTooltipEventType?: TooltipEventType;
  validateTooltipEventTypes?: ReadonlyArray<TooltipEventType>;
  // Should this instead be a property of a graphical item? Do we want to mix items with different data types in one chart?
  tooltipPayloadSearcher: TooltipPayloadSearcher | undefined;
};

export const arrayTooltipSearcher: TooltipPayloadSearcher = (
  data: unknown[],
  strIndex: string | undefined,
): unknown => {
  const numIndex = Number(strIndex);
  if (Number.isNaN(numIndex)) {
    return undefined;
  }
  return data?.[numIndex];
};

const initialState: ChartOptions = {
  chartName: '',
  tooltipPayloadSearcher: undefined,
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {},
});

export const optionsReducer = optionsSlice.reducer;
