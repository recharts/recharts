import { TooltipIndex, TooltipInteractionState } from '../../tooltipSlice';
import { ChartData } from '../../chartDataSlice';
export declare const combineActiveTooltipIndex: (tooltipInteraction: TooltipInteractionState, chartData: ChartData) => TooltipIndex | null;
