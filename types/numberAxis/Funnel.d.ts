import { PureComponent, ReactElement } from 'react';
import { Props as TrapezoidProps } from '../shape/Trapezoid';
import { LegendType, TooltipType, AnimationTiming, ChartOffset, DataKey, PresentationAttributesAdaptChildEvent } from '../util/types';
interface FunnelTrapezoidItem extends TrapezoidProps {
    value?: number | string;
    payload?: any;
}
interface InternalFunnelProps {
    trapezoids?: FunnelTrapezoidItem[];
    animationId?: number;
}
interface FunnelProps extends InternalFunnelProps {
    className?: string;
    dataKey: DataKey<any>;
    nameKey?: DataKey<any>;
    data?: any[];
    hide?: boolean;
    activeShape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | TrapezoidProps;
    legendType?: LegendType;
    tooltipType?: TooltipType;
    activeIndex?: number | number[];
    lastShapeType?: 'triangle' | 'rectangle';
    reversed?: boolean;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    isAnimationActive?: boolean;
    animateNewValues?: boolean;
    animationBegin?: number;
    animationDuration?: number;
    animationEasing?: AnimationTiming;
    id?: string;
}
export declare type Props = PresentationAttributesAdaptChildEvent<any, SVGElement> & TrapezoidProps & FunnelProps;
interface State {
    readonly prevTrapezoids?: FunnelTrapezoidItem[];
    readonly curTrapezoids?: FunnelTrapezoidItem[];
    readonly prevAnimationId?: number;
    readonly isAnimationFinished?: boolean;
}
export declare class Funnel extends PureComponent<Props, State> {
    static displayName: string;
    static defaultProps: {
        stroke: string;
        fill: string;
        legendType: string;
        labelLine: boolean;
        hide: boolean;
        isAnimationActive: boolean;
        animationBegin: number;
        animationDuration: number;
        animationEasing: string;
        nameKey: string;
        lastShapeType: string;
    };
    static getRealFunnelData: (item: Funnel) => any[];
    static getRealWidthHeight: (item: Funnel, offset: ChartOffset) => {
        realWidth: number;
        realHeight: number;
        offsetX: number;
        offsetY: number;
    };
    static getComposedData: ({ item, offset }: {
        item: Funnel;
        offset: ChartOffset;
    }) => {
        trapezoids: {
            payload: any;
            parentViewBox: {
                x: number;
                y: number;
                width: number;
                height: number;
            };
            labelViewBox: {
                x: number;
                y: number;
                width: number;
                height: number;
            };
            x: number;
            y: number;
            width: number;
            upperWidth: number;
            lowerWidth: number;
            height: number;
            name: any;
            val: any;
            tooltipPayload: {
                name: any;
                value: any;
                payload: any;
                dataKey: DataKey<any>;
                type: "none";
            }[];
            tooltipPosition: {
                x: number;
                y: number;
            };
        }[];
        data: any[];
    };
    state: State;
    static getDerivedStateFromProps(nextProps: Props, prevState: State): State;
    handleAnimationEnd: () => void;
    handleAnimationStart: () => void;
    isActiveIndex(i: number): boolean;
    static renderTrapezoidItem(option: Props['activeShape'], props: any): JSX.Element;
    renderTrapezoidsStatically(trapezoids: FunnelTrapezoidItem[]): JSX.Element[];
    renderTrapezoidsWithAnimation(): JSX.Element;
    renderTrapezoids(): JSX.Element | JSX.Element[];
    render(): JSX.Element;
}
export {};
