/**
 * @fileOverview X Axis
 */
import * as React from 'react';
import { Component } from 'react';
import { AxisInterval, AxisTick, BaseAxisProps, PresentationAttributesAdaptChildEvent } from '../util/types';
import { XAxisOrientation, XAxisPadding } from '../state/cartesianAxisSlice';
interface XAxisProps extends BaseAxisProps {
    /** The unique id of x-axis */
    xAxisId?: string | number;
    /** The height of axis, which need to be set by user */
    height?: number;
    mirror?: boolean;
    orientation?: XAxisOrientation;
    /**
     * Ticks can be any type when the axis is the type of category
     * Ticks must be numbers when the axis is the type of number
     */
    ticks?: ReadonlyArray<AxisTick>;
    padding?: XAxisPadding;
    minTickGap?: number;
    interval?: AxisInterval;
    reversed?: boolean;
    /** the rotate angle of tick */
    angle?: number;
    tickMargin?: number;
}
export type Props = Omit<PresentationAttributesAdaptChildEvent<any, SVGElement>, 'scale' | 'ref'> & XAxisProps;
export declare class XAxis extends Component<Props> {
    static displayName: string;
    static defaultProps: {
        allowDataOverflow: boolean;
        allowDecimals: boolean;
        allowDuplicatedCategory: boolean;
        height: number;
        hide: boolean;
        mirror: boolean;
        orientation: XAxisOrientation;
        padding: XAxisPadding;
        reversed: boolean;
        scale: import("../util/types").ScaleType | import("../util/ChartUtils").RechartsScale;
        tickCount: number;
        type: import("../util/types").AxisDomainType;
        xAxisId: number;
    };
    render(): React.JSX.Element;
}
export {};
