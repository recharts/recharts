/**
 * @fileOverview Render a group of bar
 */
import * as React from 'react';
import { Key, PureComponent, ReactElement } from 'react';
import { Series } from 'victory-vendor/d3-shape';
import { Props as RectangleProps } from '../shape/Rectangle';
import { BarPositionPosition, StackId } from '../util/ChartUtils';
import { ActiveShape, AnimationDuration, AnimationTiming, ChartOffsetInternal, Coordinate, DataKey, LegendType, PresentationAttributesAdaptChildEvent, TickItem, TooltipType } from '../util/types';
import { ImplicitLabelType } from '../component/Label';
import { MinPointSize } from '../util/BarUtils';
import { BarSettings } from '../state/selectors/barSelectors';
import { BaseAxisWithScale } from '../state/selectors/axisSelectors';
type Rectangle = {
    x: number | null;
    y: number | null;
    width: number;
    height: number;
};
export interface BarRectangleItem extends RectangleProps {
    value?: number | [number, number];
    /** the coordinate of background rectangle */
    background?: Rectangle;
    tooltipPosition: Coordinate;
    readonly payload?: any;
}
export interface BarProps {
    className?: string;
    index?: Key;
    xAxisId?: string | number;
    yAxisId?: string | number;
    stackId?: StackId;
    barSize?: string | number;
    unit?: string | number;
    name?: string | number;
    dataKey: DataKey<any>;
    tooltipType?: TooltipType;
    legendType?: LegendType;
    minPointSize?: MinPointSize;
    maxBarSize?: number;
    hide?: boolean;
    shape?: ActiveShape<BarProps, SVGPathElement>;
    activeBar?: ActiveShape<BarProps, SVGPathElement>;
    background?: ActiveShape<BarProps, SVGPathElement>;
    radius?: number | [number, number, number, number];
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    isAnimationActive?: boolean;
    animationBegin?: number;
    animationDuration?: AnimationDuration;
    animationEasing?: AnimationTiming;
    id?: string;
    label?: ImplicitLabelType;
}
type BarMouseEvent = (data: BarRectangleItem, index: number, event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
interface BarEvents {
    onClick: BarMouseEvent;
    onMouseEnter: BarMouseEvent;
    onMouseLeave: BarMouseEvent;
    onMouseMove: BarMouseEvent;
}
type BarSvgProps = Omit<PresentationAttributesAdaptChildEvent<BarRectangleItem, SVGPathElement>, 'radius' | 'name' | 'ref'>;
export type Props = Partial<BarEvents> & BarProps & Omit<BarSvgProps, keyof BarEvents>;
export declare function computeBarRectangles({ layout, barSettings: { dataKey, minPointSize: minPointSizeProp }, pos, bandSize, xAxis, yAxis, xAxisTicks, yAxisTicks, stackedData, displayedData, offset, cells, }: {
    layout: 'horizontal' | 'vertical';
    barSettings: BarSettings;
    pos: BarPositionPosition;
    bandSize: number;
    xAxis?: BaseAxisWithScale;
    yAxis?: BaseAxisWithScale;
    xAxisTicks: TickItem[];
    yAxisTicks: TickItem[];
    stackedData: Series<Record<number, number>, DataKey<any>> | undefined;
    offset: ChartOffsetInternal;
    displayedData: any[];
    cells: ReadonlyArray<ReactElement> | undefined;
}): ReadonlyArray<BarRectangleItem> | undefined;
export declare class Bar extends PureComponent<Props> {
    static displayName: string;
    static defaultProps: Partial<Props>;
    render(): React.JSX.Element;
}
export {};
