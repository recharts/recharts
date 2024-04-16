import { useAppSelector } from './hooks';
import { RechartsRootState } from './store';

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
