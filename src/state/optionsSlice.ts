import { createSlice } from '@reduxjs/toolkit';
import { TooltipEventType } from '../util/types';
import { TooltipPayloadSearcher } from './tooltipSlice';
import { isNan } from '../util/DataUtils';

/**
 * These chart options are decided internally, by Recharts,
 * and will not change during the lifetime of the chart.
 *
 * Changing these options can be done by swapping the root element
 * which will make a brand-new Redux store.
 */
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
  const numIndex = Number.parseInt(strIndex, 10);
  if (isNan(numIndex)) {
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
