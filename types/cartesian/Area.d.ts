import * as React from 'react';
import { PureComponent } from 'react';
import { CurveType, Props as CurveProps } from '../shape/Curve';
import { ActiveDotType, AnimationDuration, AnimationTiming, DataKey, LegendType, TickItem, TooltipType } from '../util/types';
import { BaseAxisWithScale } from '../state/selectors/axisSelectors';
import { ChartData } from '../state/chartDataSlice';
import { AreaSettings, ComputedArea } from '../state/selectors/areaSelectors';
export type BaseValue = number | 'dataMin' | 'dataMax';
/**
 * External props, intended for end users to fill in
 */
interface AreaProps {
    activeDot?: ActiveDotType;
    animationBegin?: number;
    animationDuration?: AnimationDuration;
    animationEasing?: AnimationTiming;
    baseValue?: BaseValue;
    className?: string;
    connectNulls?: boolean;
    data?: any[];
    dataKey: DataKey<any>;
    dot?: ActiveDotType;
    hide?: boolean;
    id?: string;
    isAnimationActive?: boolean;
    isRange?: boolean;
    label?: any;
    layout?: 'horizontal' | 'vertical';
    legendType?: LegendType;
    name?: string | number;
    onAnimationEnd?: () => void;
    onAnimationStart?: () => void;
    stackId?: string | number;
    tooltipType?: TooltipType;
    type?: CurveType;
    unit?: string | number;
    xAxisId?: string | number;
    yAxisId?: string | number;
}
/**
 * Because of naming conflict, we are forced to ignore certain (valid) SVG attributes.
 */
type AreaSvgProps = Omit<CurveProps, 'type' | 'points' | 'ref'>;
export type Props = AreaSvgProps & AreaProps;
export declare const getBaseValue: (layout: "horizontal" | "vertical", chartBaseValue: BaseValue | undefined, itemBaseValue: BaseValue | undefined, xAxis: BaseAxisWithScale, yAxis: BaseAxisWithScale) => number;
export declare function computeArea({ areaSettings: { connectNulls, baseValue: itemBaseValue, dataKey }, stackedData, layout, chartBaseValue, xAxis, yAxis, displayedData, dataStartIndex, xAxisTicks, yAxisTicks, bandSize, }: {
    areaSettings: AreaSettings;
    stackedData: number[][] | undefined;
    layout: 'horizontal' | 'vertical';
    chartBaseValue: BaseValue | undefined;
    xAxis: BaseAxisWithScale;
    yAxis: BaseAxisWithScale;
    displayedData: ChartData;
    dataStartIndex: number;
    xAxisTicks: TickItem[];
    yAxisTicks: TickItem[];
    bandSize: number;
}): ComputedArea;
export declare class Area extends PureComponent<Props> {
    static displayName: string;
    static defaultProps: {
        readonly activeDot: true;
        readonly animationBegin: 0;
        readonly animationDuration: 1500;
        readonly animationEasing: "ease";
        readonly connectNulls: false;
        readonly dot: false;
        readonly fill: "#3182bd";
        readonly fillOpacity: 0.6;
        readonly hide: false;
        readonly isAnimationActive: boolean;
        readonly legendType: "line";
        readonly stroke: "#3182bd";
        readonly xAxisId: 0;
        readonly yAxisId: 0;
    };
    render(): React.JSX.Element;
}
export {};
