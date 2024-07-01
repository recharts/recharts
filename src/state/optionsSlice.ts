import { createSlice } from '@reduxjs/toolkit';
import { StackOffsetType, TooltipEventType } from '../util/types';
import { TooltipPayloadSearcher } from './tooltipSlice';

export type ChartOptions = {
  chartName: string;
  defaultTooltipEventType?: TooltipEventType;
  validateTooltipEventTypes?: ReadonlyArray<TooltipEventType>;
  // Should this instead be a property of a graphical item? Do we want to mix items with different data types in one chart?
  tooltipPayloadSearcher: TooltipPayloadSearcher | undefined;
  barCategoryGap: number | string;
  stackOffset: StackOffsetType;
};

export const arrayTooltipSearcher: TooltipPayloadSearcher = (
  data: unknown[],
  strIndex: string | undefined,
): unknown => {
  const numIndex = Number.parseInt(strIndex, 10);
  if (Number.isNaN(numIndex)) {
    return undefined;
  }
  return data?.[numIndex];
};

const initialState: ChartOptions = {
  stackOffset: 'none',
  chartName: '',
  tooltipPayloadSearcher: undefined,
  barCategoryGap: '10%',
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {},
});

export const optionsReducer = optionsSlice.reducer;
