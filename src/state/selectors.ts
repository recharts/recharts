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

export function selectTooltipPayload(state: RechartsRootState): TooltipPayload | undefined {
  const { activeIndex, tooltipItemPayloads } = state.tooltip;
  const chartData = state.chartData.chartData;
  /*
   * If a payload has data specified directly from the graphical item, prefer that.
   * Otherwise, fill in data from the chart level, using the same index.
   */
  return tooltipItemPayloads.map(({ dataDefinedOnItem, settings }) => {
    const finalData = dataDefinedOnItem ?? chartData;

    // TODO slicing
    const sliced = finalData;

    // TODO settings coming from Tooltip props
    const tooltipPayload = sliced[activeIndex];
    const tooltipEntry = getTooltipEntry({
      tooltipEntrySettings: settings,
      dataKey: settings.dataKey,
      payload: tooltipPayload,
      value: getValueByDataKey(tooltipPayload, settings.dataKey),
    });
    return tooltipEntry;
  });
}
