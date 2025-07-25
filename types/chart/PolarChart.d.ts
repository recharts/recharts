import * as React from 'react';
import { PolarChartProps, TooltipEventType } from '../util/types';
import { TooltipPayloadSearcher } from '../state/tooltipSlice';
/**
 * These props are required for the PolarChart to function correctly.
 * Users usually would not need to specify these explicitly,
 * because the convenience components like PieChart, RadarChart, etc.
 * will provide these defaults.
 * We can't have the defaults in this file because each of those convenience components
 * have their own opinions about what they should be.
 */
type PolarChartPropsWithDefaults = PolarChartProps & {
    cx: NonNullable<PolarChartProps['cx']>;
    cy: NonNullable<PolarChartProps['cy']>;
    startAngle: NonNullable<PolarChartProps['startAngle']>;
    endAngle: NonNullable<PolarChartProps['endAngle']>;
    innerRadius: NonNullable<PolarChartProps['innerRadius']>;
    outerRadius: NonNullable<PolarChartProps['outerRadius']>;
};
/**
 * These are one-time, immutable options that decide the chart's behavior.
 * Users who wish to call CartesianChart may decide to pass these options explicitly,
 * but usually we would expect that they use one of the convenience components like PieChart, RadarChart, etc.
 */
export type PolarChartOptions = {
    chartName: string;
    defaultTooltipEventType: TooltipEventType;
    validateTooltipEventTypes: ReadonlyArray<TooltipEventType>;
    tooltipPayloadSearcher: TooltipPayloadSearcher;
    categoricalChartProps: PolarChartPropsWithDefaults;
};
export declare const PolarChart: React.ForwardRefExoticComponent<PolarChartOptions & React.RefAttributes<SVGSVGElement>>;
export {};
