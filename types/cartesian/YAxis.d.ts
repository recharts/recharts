import * as React from 'react';
import { Component } from 'react';
import { AxisInterval, AxisTick, BaseAxisProps, PresentationAttributesAdaptChildEvent } from '../util/types';
import { YAxisOrientation, YAxisPadding, YAxisWidth } from '../state/cartesianAxisSlice';
interface YAxisProps extends BaseAxisProps {
    /** The unique id of y-axis */
    yAxisId?: string | number;
    /**
     * Ticks can be any type when the axis is the type of category
     * Ticks must be numbers when the axis is the type of number
     */
    ticks?: ReadonlyArray<AxisTick>;
    /**
     * The width of axis, which need to be set by user.
     * When set to 'auto', the width will be calculated dynamically based on tick labels and axis labels.
     */
    width?: YAxisWidth;
    mirror?: boolean;
    orientation?: YAxisOrientation;
    padding?: YAxisPadding;
    minTickGap?: number;
    interval?: AxisInterval;
    reversed?: boolean;
    tickMargin?: number;
    /** the rotate angle of tick */
    angle?: number;
}
export type Props = Omit<PresentationAttributesAdaptChildEvent<any, SVGElement>, 'scale' | 'ref'> & YAxisProps;
export declare const YAxisDefaultProps: Partial<Props>;
export declare class YAxis extends Component<Props> {
    static displayName: string;
    static defaultProps: Partial<Props>;
    render(): React.JSX.Element;
}
export {};
