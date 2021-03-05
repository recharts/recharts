import { PureComponent, SVGProps } from 'react';
interface PolarGridProps {
    cx?: number;
    cy?: number;
    innerRadius?: number;
    outerRadius?: number;
    polarAngles?: number[];
    polarRadius?: number[];
    gridType?: 'polygon' | 'circle';
    radialLines: boolean;
}
export declare type Props = SVGProps<SVGPathElement> & PolarGridProps;
export declare class PolarGrid extends PureComponent<Props> {
    static displayName: string;
    static defaultProps: {
        cx: number;
        cy: number;
        innerRadius: number;
        outerRadius: number;
        gridType: string;
        radialLines: boolean;
    };
    getPolygonPath(radius: number): string;
    renderPolarAngles(): JSX.Element;
    renderConcentricCircle(radius: number, index: number, extraProps?: SVGProps<SVGCircleElement>): JSX.Element;
    renderConcentricPolygon(radius: number, index: number, extraProps?: SVGProps<SVGPathElement>): JSX.Element;
    renderConcentricPath(): JSX.Element;
    render(): JSX.Element;
}
export {};
