import { PureComponent, ReactElement, SVGProps } from 'react';
import { ChartOffset, D3Scale } from '../util/types';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
declare type GridLineType = SVGProps<SVGLineElement> | ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | boolean;
interface IntrnalCartesianGridProps {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    horizontalCoordinatesGenerator?: (props: any) => number[];
    verticalCoordinatesGenerator?: (props: any) => number[];
    xAxis?: Omit<XAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
    yAxis?: Omit<YAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
    offset?: ChartOffset;
    chartWidth?: number;
    chartHeight?: number;
}
interface CartesianGridProps extends IntrnalCartesianGridProps {
    horizontal?: GridLineType;
    vertical?: GridLineType;
    horizontalPoints?: number[];
    verticalPoints?: number[];
    verticalFill?: string[];
    horizontalFill?: string[];
}
export declare type Props = SVGProps<SVGElement> & CartesianGridProps;
export declare class CartesianGrid extends PureComponent<Props> {
    static displayName: string;
    static defaultProps: {
        horizontal: boolean;
        vertical: boolean;
        horizontalPoints: number[];
        verticalPoints: number[];
        stroke: string;
        fill: string;
        verticalFill: string[];
        horizontalFill: string[];
    };
    static renderLineItem(option: GridLineType, props: any): JSX.Element;
    renderHorizontal(horizontalPoints: number[]): JSX.Element;
    renderVertical(verticalPoints: number[]): JSX.Element;
    renderVerticalStripes(verticalPoints: number[]): JSX.Element;
    renderHorizontalStripes(horizontalPoints: number[]): JSX.Element;
    renderBackground(): JSX.Element;
    render(): JSX.Element;
}
export {};
