import * as React from 'react';
import { PureComponent } from 'react';
import { CurveType, Point as CurvePoint, Props as CurveProps } from '../shape/Curve';
import { ImplicitLabelType } from '../component/Label';
import { ActiveDotType, AnimationDuration, AnimationTiming, DataKey, LegendType, TickItem, TooltipType } from '../util/types';
import { BaseAxisWithScale } from '../state/selectors/axisSelectors';
import { AxisId } from '../state/cartesianAxisSlice';
export interface LinePointItem extends CurvePoint {
    readonly value?: number;
    readonly payload?: any;
}
/**
 * External props, intended for end users to fill in
 */
interface LineProps {
    activeDot?: ActiveDotType;
    animateNewValues?: boolean;
    animationBegin?: number;
    animationDuration?: AnimationDuration;
    animationEasing?: AnimationTiming;
    className?: string;
    connectNulls?: boolean;
    data?: any;
    dataKey?: DataKey<any>;
    dot?: ActiveDotType;
    hide?: boolean;
    id?: string;
    isAnimationActive?: boolean;
    label?: ImplicitLabelType;
    legendType?: LegendType;
    name?: string | number;
    onAnimationEnd?: () => void;
    onAnimationStart?: () => void;
    tooltipType?: TooltipType;
    type?: CurveType;
    unit?: string | number;
    xAxisId?: AxisId;
    yAxisId?: AxisId;
}
/**
 * Because of naming conflict, we are forced to ignore certain (valid) SVG attributes.
 */
type LineSvgProps = Omit<CurveProps, 'points' | 'pathRef' | 'ref'>;
export type Props = LineSvgProps & LineProps;
export declare function computeLinePoints({ layout, xAxis, yAxis, xAxisTicks, yAxisTicks, dataKey, bandSize, displayedData, }: {
    layout: Props['layout'];
    xAxis: BaseAxisWithScale;
    yAxis: BaseAxisWithScale;
    xAxisTicks: TickItem[];
    yAxisTicks: TickItem[];
    dataKey: Props['dataKey'];
    bandSize: number;
    displayedData: any[];
}): ReadonlyArray<LinePointItem>;
export declare class Line extends PureComponent<Props> {
    static displayName: string;
    static defaultProps: {
        readonly activeDot: true;
        readonly animateNewValues: true;
        readonly animationBegin: 0;
        readonly animationDuration: 1500;
        readonly animationEasing: "ease";
        readonly connectNulls: false;
        readonly dot: true;
        readonly fill: "#fff";
        readonly hide: false;
        readonly isAnimationActive: boolean;
        readonly label: false;
        readonly legendType: "line";
        readonly stroke: "#3182bd";
        readonly strokeWidth: 1;
        readonly xAxisId: 0;
        readonly yAxisId: 0;
    };
    render(): React.JSX.Element;
}
export {};
