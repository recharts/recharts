import * as React from 'react';
import { CartesianChartProps, TooltipEventType } from '../util/types';
import { TooltipPayloadSearcher } from '../state/tooltipSlice';
/**
 * These are one-time, immutable options that decide the chart's behavior.
 * Users who wish to call CartesianChart may decide to pass these options explicitly,
 * but usually we would expect that they use one of the convenience components like BarChart, LineChart, etc.
 */
export type CartesianChartOptions = {
    chartName: string;
    defaultTooltipEventType: TooltipEventType;
    validateTooltipEventTypes: ReadonlyArray<TooltipEventType>;
    tooltipPayloadSearcher: TooltipPayloadSearcher;
    categoricalChartProps: CartesianChartProps;
};
export declare const CartesianChart: React.ForwardRefExoticComponent<CartesianChartOptions & React.RefAttributes<SVGSVGElement>>;
