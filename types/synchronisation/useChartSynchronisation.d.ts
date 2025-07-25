import { TooltipIndex } from '../state/tooltipSlice';
import { ChartCoordinate, TooltipEventType } from '../util/types';
import { TooltipTrigger } from '../chart/types';
/**
 * Will receive synchronisation events from other charts.
 *
 * Reads syncMethod from state and decides how to synchronise the tooltip based on that.
 *
 * @returns void
 */
export declare function useSynchronisedEventsFromOtherCharts(): void;
/**
 * Will send events to other charts.
 * If syncId is undefined, no events will be sent.
 *
 * This ignores the syncMethod, because that is set and computed on the receiving end.
 *
 * @param tooltipEventType from Tooltip
 * @param trigger from Tooltip
 * @param activeCoordinate from state
 * @param activeLabel from state
 * @param activeIndex from state
 * @param isTooltipActive from state
 * @returns void
 */
export declare function useTooltipChartSynchronisation(tooltipEventType: TooltipEventType | undefined, trigger: TooltipTrigger, activeCoordinate: ChartCoordinate | undefined, activeLabel: string | number | undefined, activeIndex: TooltipIndex | undefined, isTooltipActive: boolean): void;
export declare function useBrushChartSynchronisation(): void;
