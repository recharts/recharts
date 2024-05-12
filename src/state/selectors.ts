import { useAppSelector } from './hooks';
import { RechartsRootState } from './store';
import { TooltipPayload } from './tooltipSlice';
import { getTooltipEntry, getValueByDataKey } from '../util/ChartUtils';

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

export function selectTooltipPayload(state: RechartsRootState): TooltipPayload | undefined {
  const { activeIndex, tooltipItemPayloads } = state.tooltip;
  if (activeIndex === -1) {
    return undefined;
  }
  const { chartData, dataStartIndex, dataEndIndex } = state.chartData;
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
}
