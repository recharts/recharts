/**
 * @fileOverview Render a group of error bar
 */
import * as React from 'react';
import { Component, SVGProps } from 'react';
import { AnimationTiming, DataKey } from '../util/types';
import { BarRectangleItem } from './Bar';
import { LinePointItem } from './Line';
import { ScatterPointItem } from './Scatter';
export interface ErrorBarDataItem {
    x: number;
    y: number;
    value: number;
    errorVal?: number[] | number;
}
/**
 * So usually the direction is decided by the chart layout.
 * Horizontal layout means error bars are vertical means direction=y
 * Vertical layout means error bars are horizontal means direction=x
 *
 * Except! In Scatter chart, error bars can go both ways.
 *
 * So this property is only ever used in Scatter chart, and ignored elsewhere.
 */
export type ErrorBarDirection = 'x' | 'y';
export type ErrorBarDataPointFormatter = (entry: BarRectangleItem | LinePointItem | ScatterPointItem, dataKey: DataKey<any>, direction: ErrorBarDirection) => ErrorBarDataItem;
/**
 * External ErrorBar props, visible for users of the library
 */
interface ErrorBarProps {
    dataKey: DataKey<any>;
    /** the width of the error bar ends */
    width?: number;
    /**
     * Only used for ScatterChart with error bars in two directions.
     * Only accepts a value of "x" or "y" and makes the error bars lie in that direction.
     */
    direction?: ErrorBarDirection;
    isAnimationActive?: boolean;
    animationBegin?: number;
    animationDuration?: number;
    animationEasing?: AnimationTiming;
}
export type Props = SVGProps<SVGLineElement> & ErrorBarProps;
export declare function SetErrorBarPreferredDirection({ direction, children, }: {
    direction: ErrorBarDirection;
    children: React.ReactNode;
}): React.JSX.Element;
export declare class ErrorBar extends Component<Props> {
    static defaultProps: {
        readonly stroke: "black";
        readonly strokeWidth: 1.5;
        readonly width: 5;
        readonly offset: 0;
        readonly isAnimationActive: true;
        readonly animationBegin: 0;
        readonly animationDuration: 400;
        readonly animationEasing: "ease-in-out";
    };
    static displayName: string;
    render(): React.JSX.Element;
}
export {};
