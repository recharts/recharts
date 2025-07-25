import * as React from 'react';
import { PureComponent, ReactElement, MouseEvent, SVGProps } from 'react';
import { RechartsScale } from '../util/ChartUtils';
import { Props as DotProps } from '../shape/Dot';
import { LegendType, TooltipType, AnimationTiming, DataKey, AnimationDuration, ActiveDotType } from '../util/types';
interface RadarPoint {
    x: number;
    y: number;
    cx?: number;
    cy?: number;
    angle?: number;
    radius?: number;
    value?: number;
    payload?: any;
    name?: string;
}
type RadarDot = ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | DotProps | boolean;
interface RadarProps {
    className?: string;
    dataKey: DataKey<any>;
    angleAxisId?: string | number;
    radiusAxisId?: string | number;
    points?: RadarPoint[];
    baseLinePoints?: RadarPoint[];
    isRange?: boolean;
    shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
    activeDot?: ActiveDotType;
    dot?: RadarDot;
    legendType?: LegendType;
    tooltipType?: TooltipType;
    hide?: boolean;
    connectNulls?: boolean;
    label?: any;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    animationBegin?: number;
    animationDuration?: AnimationDuration;
    isAnimationActive?: boolean;
    animationEasing?: AnimationTiming;
    onMouseEnter?: (props: any, e: MouseEvent<SVGPolygonElement>) => void;
    onMouseLeave?: (props: any, e: MouseEvent<SVGPolygonElement>) => void;
}
export type RadiusAxisForRadar = {
    scale: RechartsScale;
};
export type AngleAxisForRadar = {
    scale: RechartsScale;
    type: 'number' | 'category';
    dataKey: DataKey<any> | undefined;
    cx: number;
    cy: number;
};
export type Props = Omit<SVGProps<SVGElement>, 'onMouseEnter' | 'onMouseLeave' | 'points' | 'ref'> & RadarProps;
export type RadarComposedData = {
    points: RadarPoint[];
    baseLinePoints: RadarPoint[];
    isRange: boolean;
};
export declare function computeRadarPoints({ radiusAxis, angleAxis, displayedData, dataKey, bandSize, }: {
    radiusAxis: RadiusAxisForRadar;
    angleAxis: AngleAxisForRadar;
    displayedData: any[];
    dataKey: RadarProps['dataKey'];
    bandSize: number;
}): RadarComposedData;
export declare class Radar extends PureComponent<Props> {
    static displayName: string;
    static defaultProps: Partial<Props>;
    render(): React.JSX.Element;
}
export {};
