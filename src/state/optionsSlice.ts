import { createSlice } from '@reduxjs/toolkit';
import { TooltipEventType } from '../util/types';
import { TooltipIndex, TooltipPayloadSearcher } from './tooltipSlice';
import { isNan } from '../util/DataUtils';

/**
 * These chart options are decided internally, by Recharts,
 * and will not change during the lifetime of the chart.
 *
 * Changing these options can be done by swapping the root element
 * which will make a brand-new Redux store.
 *
 * If you want to store options that can be changed by the user,
 * use UpdatableChartOptions in rootPropsSlice.ts.
 */
export type ChartOptions = {
  chartName: string;
  defaultTooltipEventType: TooltipEventType;
  validateTooltipEventTypes?: ReadonlyArray<TooltipEventType>;
  // Should this instead be a property of a graphical item? Do we want to mix items with different data types in one chart?
  tooltipPayloadSearcher: TooltipPayloadSearcher | undefined;
  /**
   * We use this to identify which chart is sending events when synchronising.
   * Without it, we can't tell the difference between an action that arrived from another chart
   * and an action that was dispatched by the chart itself.
   */
  eventEmitter: symbol | undefined;
};

export function arrayTooltipSearcher<T>(data: ReadonlyArray<T>, strIndex: TooltipIndex): T | undefined {
  if (!strIndex) return undefined;
  const numIndex = Number.parseInt(strIndex, 10);
  if (isNan(numIndex)) {
    return undefined;
  }
  return data?.[numIndex];
}

const initialState: ChartOptions = {
  chartName: '',
  tooltipPayloadSearcher: undefined,
  eventEmitter: undefined,
  defaultTooltipEventType: 'axis',
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    createEventEmitter: (state: ChartOptions) => {
      if (state.eventEmitter == null) {
        state.eventEmitter = Symbol('rechartsEventEmitter');
      }
    },
  },
});

export const optionsReducer = optionsSlice.reducer;

export const { createEventEmitter } = optionsSlice.actions;
