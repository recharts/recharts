import { PureComponent } from 'react';
import { CurveFactory } from 'd3-shape';
import { LayoutType, PresentationAttributesWithProps } from '../util/types';
export declare type CurveType = 'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | CurveFactory;
export interface Point {
    x: number;
    y: number;
}
interface CurveProps {
    className?: string;
    type?: CurveType;
    layout?: LayoutType;
    baseLine?: number | Array<Point>;
    points?: Array<Point>;
    connectNulls?: boolean;
    path?: string;
    pathRef?: (ref: SVGPathElement) => void;
}
export declare type Props = Omit<PresentationAttributesWithProps<CurveProps, SVGPathElement>, 'type' | 'points'> & CurveProps;
export declare class Curve extends PureComponent<Props> {
    static defaultProps: {
        type: string;
        points: any[];
        connectNulls: boolean;
    };
    getPath(): string;
    render(): JSX.Element;
}
export {};
