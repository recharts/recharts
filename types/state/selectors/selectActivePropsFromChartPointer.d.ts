import { RechartsRootState } from '../store';
import { ActiveTooltipProps } from '../tooltipSlice';
import { ChartPointer } from '../../util/types';
export declare const selectActivePropsFromChartPointer: (state: RechartsRootState, chartPointer: ChartPointer) => ActiveTooltipProps | undefined;
