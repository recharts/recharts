import * as React from 'react';
import { SVGProps } from 'react';
import { AxisId } from '../state/cartesianAxisSlice';
interface PolarGridProps {
    cx?: number;
    cy?: number;
    innerRadius?: number;
    outerRadius?: number;
    polarAngles?: number[];
    polarRadius?: number[];
    gridType?: 'polygon' | 'circle';
    radialLines?: boolean;
    angleAxisId?: AxisId;
    radiusAxisId?: AxisId;
}
export type Props = SVGProps<SVGPathElement> & PolarGridProps;
export declare const PolarGrid: {
    ({ gridType, radialLines, angleAxisId, radiusAxisId, cx: cxFromOutside, cy: cyFromOutside, innerRadius: innerRadiusFromOutside, outerRadius: outerRadiusFromOutside, ...inputs }: Props): React.JSX.Element;
    displayName: string;
};
export {};
