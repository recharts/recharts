import React, { PureComponent, ReactElement } from 'react';
import { CurveType, Props as CurveProps, Point as CurvePoint } from '../shape/Curve';
import { Props as DotProps } from '../shape/Dot';
import { Props as ErrorBarProps } from './ErrorBar';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
import { D3Scale, LegendType, TooltipType, AnimationTiming, ChartOffset, DataKey, TickItem } from '../util/types';
declare type LineDot = ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | DotProps | boolean;
interface LinePointItem extends CurvePoint {
    value?: number;
    payload?: any;
}
interface InternalLineProps {
    top?: number;
    left?: number;
    width?: number;
    height?: number;
    points?: LinePointItem[];
    xAxis?: Omit<XAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
    yAxis?: Omit<YAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
}
interface LineProps extends InternalLineProps {
    className?: string;
    data?: any;
    type?: CurveType;
    unit?: string | number;
    name?: string | number;
    yAxisId?: string | number;
    xAxisId?: string | number;
    dataKey?: DataKey<any>;
    legendType?: LegendType;
    tooltipType?: TooltipType;
    layout?: 'horizontal' | 'vertical';
    connectNulls?: boolean;
    hide?: boolean;
    activeDot?: LineDot;
    dot?: LineDot;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    isAnimationActive?: boolean;
    animateNewValues?: boolean;
    animationBegin?: number;
    animationDuration?: number;
    animationEasing?: AnimationTiming;
    animationId?: number;
    id?: string;
}
export declare type Props = Omit<CurveProps, 'points' | 'pathRef'> & LineProps;
interface State {
    isAnimationFinished?: boolean;
    totalLength?: number;
    prevPoints?: LinePointItem[];
    curPoints?: LinePointItem[];
    prevAnimationId?: number;
}
export declare class Line extends PureComponent<Props, State> {
    static displayName: string;
    static defaultProps: {
        xAxisId: number;
        yAxisId: number;
        connectNulls: boolean;
        activeDot: boolean;
        dot: boolean;
        legendType: string;
        stroke: string;
        strokeWidth: number;
        fill: string;
        points: LinePointItem[];
        isAnimationActive: boolean;
        animateNewValues: boolean;
        animationBegin: number;
        animationDuration: number;
        animationEasing: string;
        hide: boolean;
    };
    static getComposedData: ({ props, xAxis, yAxis, xAxisTicks, yAxisTicks, dataKey, bandSize, displayedData, offset, }: {
        props: Props;
        xAxis: Props['xAxis'];
        yAxis: Props['yAxis'];
        xAxisTicks: TickItem[];
        yAxisTicks: TickItem[];
        dataKey: Props['dataKey'];
        bandSize: number;
        displayedData: any[];
        offset: ChartOffset;
    }) => {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
        width?: number;
        height?: number;
        brushBottom?: number;
        points: ({
            x: any;
            y: number;
            value: any;
            payload: any;
        } | {
            x: number;
            y: any;
            value: any;
            payload: any;
        })[];
        layout: "horizontal" | "vertical";
    };
    mainCurve?: SVGPathElement;
    state: State;
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: Props, prevState: State): State;
    getTotalLength(): number;
    getStrokeDasharray: (length: number, totalLength: number, lines: number[]) => string;
    id: string;
    pathRef: (node: SVGPathElement) => void;
    static repeat(lines: number[], count: number): number[];
    handleAnimationEnd: () => void;
    handleAnimationStart: () => void;
    renderErrorBar(): React.ReactElement<ErrorBarProps, string | React.JSXElementConstructor<any>>[];
    static renderDotItem(option: LineDot, props: any): JSX.Element;
    renderDots(needClip: boolean, clipPathId: string): JSX.Element;
    renderCurveStatically(points: LinePointItem[], needClip: boolean, clipPathId: string, props?: {
        strokeDasharray: string;
    }): JSX.Element;
    renderCurveWithAnimation(needClip: boolean, clipPathId: string): JSX.Element;
    renderCurve(needClip: boolean, clipPathId: string): JSX.Element;
    render(): JSX.Element;
}
export {};
