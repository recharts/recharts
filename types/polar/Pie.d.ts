import * as React from 'react';
import { PureComponent, ReactElement, ReactNode, SVGProps } from 'react';
import { Props as SectorProps } from '../shape/Sector';
import { ActiveShape, AnimationDuration, AnimationTiming, ChartOffsetInternal, Coordinate, DataKey, GeometrySector, LegendType, PresentationAttributesAdaptChildEvent, TooltipType } from '../util/types';
import { TooltipPayload } from '../state/tooltipSlice';
interface PieDef {
    /** The abscissa of pole in polar coordinate  */
    cx?: number | string;
    /** The ordinate of pole in polar coordinate  */
    cy?: number | string;
    /** The start angle of first sector */
    startAngle?: number;
    /** The end angle of last sector */
    endAngle?: number;
    paddingAngle?: number;
    /** The inner radius of sectors */
    innerRadius?: number | string;
    /** The outer radius of sectors */
    outerRadius?: number | string | ((dataPoint: any) => number);
    cornerRadius?: number | string;
}
type PieLabelLine = ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | SVGProps<SVGPathElement> | boolean;
export type PieLabelProps = PieSectorData & GeometrySector & {
    tooltipPayload?: any;
} & PieLabelRenderProps;
export type PieLabel<P extends PieLabelProps = PieLabelProps> = ReactElement<SVGElement> | ((props: P) => ReactNode | ReactElement<SVGElement>) | (SVGProps<SVGTextElement> & {
    offsetRadius?: number;
}) | boolean;
export type PieSectorData = {
    percent?: number;
    name?: string | number;
    midAngle?: number;
    middleRadius?: number;
    tooltipPosition?: Coordinate;
    value?: number;
    paddingAngle?: number;
    dataKey?: string;
    payload?: any;
    tooltipPayload?: ReadonlyArray<TooltipPayload>;
};
export type PieSectorDataItem = SectorProps & PieSectorData;
interface PieProps extends PieDef {
    id?: string;
    className?: string;
    /**
     * Defaults to 'value' if not specified.
     */
    dataKey?: DataKey<any>;
    nameKey?: DataKey<any>;
    /** The minimum angle for no-zero element */
    minAngle?: number;
    legendType?: LegendType;
    tooltipType?: TooltipType;
    /** TODO: review this as an external prop - it seems to have no effect */
    /** the max radius of pie */
    maxRadius?: number;
    hide?: boolean;
    /** the input data */
    data?: any[];
    activeShape?: ActiveShape<PieSectorDataItem>;
    inactiveShape?: ActiveShape<PieSectorDataItem>;
    labelLine?: PieLabelLine;
    label?: PieLabel;
    animationEasing?: AnimationTiming;
    isAnimationActive?: boolean;
    animationBegin?: number;
    animationDuration?: AnimationDuration;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    onMouseEnter?: (data: any, index: number, e: React.MouseEvent) => void;
    onMouseLeave?: (data: any, index: number, e: React.MouseEvent) => void;
    onClick?: (data: any, index: number, e: React.MouseEvent) => void;
    rootTabIndex?: number;
}
export interface PieLabelRenderProps extends PieDef {
    name: string;
    percent?: number;
    stroke: string;
    index?: number;
    textAnchor: string;
    x: number;
    y: number;
    [key: string]: any;
}
interface State {
    prevIsAnimationActive?: boolean;
    prevSectors?: PieSectorDataItem[];
    curSectors?: PieSectorDataItem[];
}
type PieSvgAttributes = Omit<PresentationAttributesAdaptChildEvent<any, SVGElement>, 'ref'>;
export type Props = PieSvgAttributes & PieProps;
type RealPieData = any;
export type PieCoordinate = {
    cx: number;
    cy: number;
    innerRadius: number;
    outerRadius: number;
    maxRadius: number;
};
export declare function computePieSectors({ pieSettings, displayedData, cells, offset, }: {
    displayedData: ReadonlyArray<RealPieData>;
    cells: ReadonlyArray<ReactElement> | undefined;
    pieSettings: {
        dataKey: DataKey<any> | undefined;
        tooltipType?: TooltipType;
        name?: string | number;
        nameKey?: DataKey<any>;
        cx?: number | string;
        cy?: number | string;
        startAngle?: number;
        endAngle?: number;
        paddingAngle?: number;
        minAngle?: number;
        innerRadius?: number | string;
        outerRadius?: number | string | ((dataPoint: any) => number);
        cornerRadius?: number | string;
        presentationProps?: Record<string, string>;
    };
    offset: ChartOffsetInternal;
}): ReadonlyArray<PieSectorDataItem>;
export declare class Pie extends PureComponent<Props, State> {
    static displayName: string;
    static defaultProps: {
        readonly animationBegin: 400;
        readonly animationDuration: 1500;
        readonly animationEasing: "ease";
        readonly cx: "50%";
        readonly cy: "50%";
        readonly dataKey: "value";
        readonly endAngle: 360;
        readonly fill: "#808080";
        readonly hide: false;
        readonly innerRadius: 0;
        readonly isAnimationActive: boolean;
        readonly labelLine: true;
        readonly legendType: "rect";
        readonly minAngle: 0;
        readonly nameKey: "name";
        readonly outerRadius: "80%";
        readonly paddingAngle: 0;
        readonly rootTabIndex: 0;
        readonly startAngle: 0;
        readonly stroke: "#fff";
    };
    render(): React.JSX.Element;
}
export {};
