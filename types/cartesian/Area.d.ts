import { PureComponent, ReactElement, SVGProps } from 'react';
import { CurveType, Point as CurvePoint } from '../shape/Curve';
import { Props as DotProps } from '../shape/Dot';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
import { D3Scale, LegendType, TooltipType, AnimationTiming, ChartOffset, Coordinate, DataKey, TickItem } from '../util/types';
declare type AreaDot = ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | ((props: any) => ReactElement<SVGElement>) | DotProps | boolean;
interface AreaPointItem extends CurvePoint {
    value?: number | number[];
    payload?: any;
}
interface InternalAreaProps {
    xAxis?: Omit<XAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
    yAxis?: Omit<YAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
    top?: number;
    left?: number;
    width?: number;
    height?: number;
    points?: AreaPointItem[];
    baseLine?: number | Coordinate[];
}
interface AreaProps extends InternalAreaProps {
    className?: string;
    dataKey: DataKey<any>;
    type?: CurveType;
    unit?: string | number;
    name?: string | number;
    xAxisId?: string | number;
    yAxisId?: string | number;
    stackId?: string | number;
    legendType?: LegendType;
    tooltipType?: TooltipType;
    connectNulls?: boolean;
    activeDot?: AreaDot;
    dot?: AreaDot;
    label?: any;
    layout?: 'horizontal' | 'vertical';
    hide?: boolean;
    baseValue?: number | 'dataMin' | 'dataMax';
    isRange?: boolean;
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
export declare type Props = SVGProps<SVGElement> & AreaProps;
interface State {
    prevAnimationId?: number;
    prevPoints?: AreaPointItem[];
    prevBaseLine?: number | Coordinate[];
    curPoints?: AreaPointItem[];
    curBaseLine?: number | Coordinate[];
    isAnimationFinished?: boolean;
    totalLength?: number;
}
export declare class Area extends PureComponent<Props, State> {
    static displayName: string;
    static defaultProps: {
        stroke: string;
        fill: string;
        fillOpacity: number;
        xAxisId: number;
        yAxisId: number;
        legendType: string;
        connectNulls: boolean;
        points: AreaPointItem[];
        dot: boolean;
        activeDot: boolean;
        hide: boolean;
        isAnimationActive: boolean;
        animationBegin: number;
        animationDuration: number;
        animationEasing: string;
    };
    static getBaseValue: (props: Props, xAxis: Props['xAxis'], yAxis: Props['yAxis']) => number;
    static getComposedData: ({ props, xAxis, yAxis, xAxisTicks, yAxisTicks, bandSize, dataKey, stackedData, dataStartIndex, displayedData, offset, }: {
        props: Props;
        item: Area;
        bandSize: number;
        xAxis: InternalAreaProps['xAxis'];
        yAxis: InternalAreaProps['yAxis'];
        xAxisTicks: TickItem[];
        yAxisTicks: TickItem[];
        stackedData: number[][];
        dataStartIndex: number;
        offset: ChartOffset;
        displayedData: any[];
        dataKey: Props['dataKey'];
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
            value: any[];
            payload: any;
        } | {
            x: number;
            y: any;
            value: any[];
            payload: any;
        })[];
        baseLine: number | {
            x: number;
            y: number;
        }[];
        layout: "horizontal" | "vertical";
        isRange: boolean;
    };
    static renderDotItem: (option: AreaDot, props: any) => JSX.Element;
    state: State;
    static getDerivedStateFromProps(nextProps: Props, prevState: State): State;
    id: string;
    handleAnimationEnd: () => void;
    handleAnimationStart: () => void;
    renderDots(needClip: boolean, clipPathId: string): JSX.Element;
    renderHorizontalRect(alpha: number): JSX.Element;
    renderVerticalRect(alpha: number): JSX.Element;
    renderClipRect(alpha: number): JSX.Element;
    renderAreaStatically(points: AreaPointItem[], baseLine: Props['baseLine'], needClip: boolean, clipPathId: string): JSX.Element;
    renderAreaWithAnimation(needClip: boolean, clipPathId: string): JSX.Element;
    renderArea(needClip: boolean, clipPathId: string): JSX.Element;
    render(): JSX.Element;
}
export {};
