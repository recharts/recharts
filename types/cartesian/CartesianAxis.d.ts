/**
 * @fileOverview Cartesian Axis
 */
import * as React from 'react';
import { ReactElement, ReactNode, Component, SVGProps } from 'react';
import { CartesianViewBox, PresentationAttributesAdaptChildEvent, CartesianTickItem, AxisInterval } from '../util/types';
import { RechartsScale } from '../util/ChartUtils';
/** The orientation of the axis in correspondence to the chart */
export type Orientation = 'top' | 'bottom' | 'left' | 'right';
/** A unit to be appended to a value */
export type Unit = string | number;
/** The formatter function of tick */
export type TickFormatter = (value: any, index: number) => string;
export interface CartesianAxisProps {
    className?: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    unit?: Unit;
    orientation?: Orientation;
    viewBox?: CartesianViewBox;
    tick?: SVGProps<SVGTextElement> | ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | boolean;
    axisLine?: boolean | SVGProps<SVGLineElement>;
    tickLine?: boolean | SVGProps<SVGLineElement>;
    mirror?: boolean;
    tickMargin?: number;
    hide?: boolean;
    label?: any;
    minTickGap?: number;
    /**
     * Careful - this is the same name as XAxis + YAxis `ticks` but completely different object!
     */
    ticks?: ReadonlyArray<CartesianTickItem>;
    tickSize?: number;
    tickFormatter?: TickFormatter;
    interval?: AxisInterval;
    /** Angle in which ticks will be rendered. */
    angle?: number;
    /**
     * This is NOT SVG scale attribute;
     * this is Recharts scale, based on d3-scale.
     */
    scale: RechartsScale;
    labelRef?: React.RefObject<Element>;
}
interface IState {
    fontSize: string;
    letterSpacing: string;
}
export type Props = Omit<PresentationAttributesAdaptChildEvent<any, SVGElement>, 'viewBox' | 'scale'> & CartesianAxisProps;
export declare class CartesianAxis extends Component<Props, IState> {
    static displayName: string;
    tickRefs: React.MutableRefObject<Element[]>;
    static defaultProps: Partial<Props>;
    constructor(props: Props);
    shouldComponentUpdate({ viewBox, ...restProps }: Props, nextState: IState): boolean;
    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  data The data of a simple tick
     * @return (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */
    getTickLineCoord(data: CartesianTickItem): {
        line: {
            x1: number;
            y1: number;
            x2: number;
            y2: number;
        };
        tick: {
            x: number;
            y: number;
        };
    };
    getTickTextAnchor(): string;
    getTickVerticalAnchor(): "end" | "start" | "middle";
    renderAxisLine(): React.JSX.Element;
    static renderTickItem(option: Props['tick'], props: any, value: ReactNode): React.JSX.Element;
    /**
     * render the ticks
     * @param {string} fontSize Fontsize to consider for tick spacing
     * @param {string} letterSpacing Letter spacing to consider for tick spacing
     * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
     * @return {ReactElement | null} renderedTicks
     */
    renderTicks(fontSize: string, letterSpacing: string, ticks?: ReadonlyArray<CartesianTickItem>): React.ReactElement | null;
    render(): React.JSX.Element;
}
export {};
