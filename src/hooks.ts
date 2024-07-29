import type { AxisId } from './state/axisMapSlice';
import { BaseAxisWithScale, selectAxisWithScale } from './state/selectors/axisSelectors';
import { useAppSelector } from './state/hooks';

export const useXAxis = (xAxisId: AxisId): BaseAxisWithScale | undefined =>
  useAppSelector(state => selectAxisWithScale(state, 'xAxis', xAxisId));

export const useYAxis = (yAxisId: AxisId): BaseAxisWithScale | undefined =>
  useAppSelector(state => selectAxisWithScale(state, 'yAxis', yAxisId));
