import { useAppSelector } from './hooks';
import { RechartsRootState } from './store';

export const useChartName = (): string => {
  return useAppSelector((state: RechartsRootState) => state.options.chartName);
};
