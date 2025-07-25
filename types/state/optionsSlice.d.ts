import { TooltipEventType } from '../util/types';
import { TooltipIndex, TooltipPayloadSearcher } from './tooltipSlice';
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
    tooltipPayloadSearcher: TooltipPayloadSearcher | undefined;
    /**
     * We use this to identify which chart is sending events when synchronising.
     * Without it, we can't tell the difference between an action that arrived from another chart
     * and an action that was dispatched by the chart itself.
     */
    eventEmitter: symbol | undefined;
};
export declare function arrayTooltipSearcher<T>(data: ReadonlyArray<T>, strIndex: TooltipIndex): T | undefined;
export declare const optionsReducer: import("redux").Reducer<ChartOptions>;
export declare const createEventEmitter: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"options/createEventEmitter">;
