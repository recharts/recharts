import React, { PureComponent, ReactElement, MouseEvent, SVGProps } from 'react';
import { Props as DotProps } from '../shape/Dot';
import { LegendType, TooltipType, AnimationTiming, DataKey } from '../util/types';
import { Props as PolarAngleAxisProps } from './PolarAngleAxis';
import { Props as PolarRadiusAxisProps } from './PolarRadiusAxis';
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
declare type RadarDot = ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | DotProps | boolean;
interface RadarProps {
    className?: string;
    dataKey: DataKey<any>;
    angleAxisId?: string | number;
    radiusAxisId?: string | number;
    points?: RadarPoint[];
    baseLinePoints?: RadarPoint[];
    isRange?: boolean;
    shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
    activeDot?: RadarDot;
    dot?: RadarDot;
    legendType?: LegendType;
    tooltipType?: TooltipType;
    hide?: boolean;
    connectNulls?: boolean;
    label?: any;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    animationBegin?: number;
    animationDuration?: number;
    isAnimationActive?: boolean;
    animationId?: number;
    animationEasing?: AnimationTiming;
    onMouseEnter?: (props: any, e: MouseEvent<SVGPolygonElement>) => void;
    onMouseLeave?: (props: any, e: MouseEvent<SVGPolygonElement>) => void;
}
export declare type Props = Omit<SVGProps<SVGElement>, 'onMouseEnter' | 'onMouseLeave'> & RadarProps;
interface State {
    isAnimationFinished?: boolean;
    prevPoints?: RadarPoint[];
    curPoints?: RadarPoint[];
    prevAnimationId?: number;
}
export declare class Radar extends PureComponent<Props, State> {
    static displayName: string;
    static defaultProps: {
        angleAxisId: number;
        radiusAxisId: number;
        hide: boolean;
        activeDot: boolean;
        dot: boolean;
        legendType: string;
        isAnimationActive: boolean;
        animationBegin: number;
        animationDuration: number;
        animationEasing: string;
    };
    static getComposedData: ({ radiusAxis, angleAxis, displayedData, dataKey, bandSize, }: {
        radiusAxis: React.AriaAttributes & import("../util/types").DOMAttributesAdaptChildEvent<any, SVGElement> & Omit<React.SVGProps<SVGElement>, keyof import("../util/types").DOMAttributesAdaptChildEvent<P, T>> & import("./PolarRadiusAxis").PolarRadiusAxisProps & {
            scale: (value: any) => number;
        };
        angleAxis: React.AriaAttributes & import("../util/types").DOMAttributesAdaptChildEvent<any, SVGTextElement> & Omit<React.SVGProps<SVGTextElement>, keyof import("../util/types").DOMAttributesAdaptChildEvent<P, T>> & import("./PolarAngleAxis").PolarAngleAxisProps & {
            scale: (value: any) => number;
        };
        displayedData: any[];
        dataKey: RadarProps['dataKey'];
        bandSize: number;
    }) => {
        points: RadarPoint[];
        isRange: boolean;
        baseLinePoints: RadarPoint[];
    };
    state: State;
    static getDerivedStateFromProps(nextProps: Props, prevState: State): State;
    handleAnimationEnd: () => void;
    handleAnimationStart: () => void;
    handleMouseEnter: (e: MouseEvent<SVGPolygonElement>) => void;
    handleMouseLeave: (e: MouseEvent<SVGPolygonElement>) => void;
    static renderDotItem(option: RadarDot, props: any): JSX.Element;
    renderDots(points: RadarPoint[]): JSX.Element;
    renderPolygonStatically(points: RadarPoint[]): JSX.Element;
    renderPolygonWithAnimation(): JSX.Element;
    renderPolygon(): JSX.Element;
    render(): JSX.Element;
}
export {};
