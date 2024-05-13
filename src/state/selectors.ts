import { createSelector } from '@reduxjs/toolkit';
import { useAppSelector } from './hooks';
import { RechartsRootState } from './store';
import { TooltipPayload, TooltipState } from './tooltipSlice';
import { getTooltipEntry, getValueByDataKey } from '../util/ChartUtils';
import { ChartDataState } from './chartDataSlice';

export const useChartName = (): string => {
  return useAppSelector((state: RechartsRootState) => state.options.chartName);
};

export function useTooltipEventType(shared: boolean | undefined) {
  const defaultTooltipEventType = useAppSelector((state: RechartsRootState) => state.options.defaultTooltipEventType);
  const validateTooltipEventTypes = useAppSelector(
    (state: RechartsRootState) => state.options.validateTooltipEventTypes,
  );
  if (shared == null) {
    return defaultTooltipEventType;
  }
  const eventType = shared ? 'axis' : 'item';
  return validateTooltipEventTypes.includes(eventType) ? eventType : defaultTooltipEventType;
}

function getSliced<T>(arr: ReadonlyArray<T>, startIndex: number, endIndex: number): ReadonlyArray<T> {
  if (arr && startIndex + endIndex !== 0) {
    return arr.slice(startIndex, endIndex + 1);
  }
  return arr;
}

const selectTooltipState = (state: RechartsRootState) => state.tooltip;
const selectChartData = (state: RechartsRootState) => state.chartData;

export const selectTooltipPayload: (state: RechartsRootState) => TooltipPayload | undefined = createSelector(
  selectTooltipState,
  selectChartData,
  (tooltipState: TooltipState, chartDataState: ChartDataState) => {
    const { activeIndex, tooltipItemPayloads } = tooltipState;
    if (activeIndex === -1) {
      return undefined;
    }
    const { chartData, dataStartIndex, dataEndIndex } = chartDataState;
    /*
     * If a payload has data specified directly from the graphical item, prefer that.
     * Otherwise, fill in data from the chart level, using the same index.
     */
    return tooltipItemPayloads.map(({ dataDefinedOnItem, settings }) => {
      const finalData = dataDefinedOnItem ?? chartData;

      const sliced = getSliced(finalData, dataStartIndex, dataEndIndex);

      // TODO settings coming from Tooltip props, and tooltipAxis
      const tooltipPayload = sliced?.[activeIndex];
      const tooltipEntry = getTooltipEntry({
        tooltipEntrySettings: settings,
        dataKey: settings?.dataKey,
        payload: tooltipPayload,
        value: getValueByDataKey(tooltipPayload, settings?.dataKey),
      });
      return tooltipEntry;
    });
  },
);
