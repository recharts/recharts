/**
 * @fileOverview Polygon
 */
import * as React from 'react';
import { SVGProps } from 'react';
import { Coordinate } from '../util/types';
interface PolygonProps {
    className?: string;
    points?: Coordinate[];
    baseLinePoints?: Coordinate[];
    connectNulls?: boolean;
}
export type Props = Omit<SVGProps<SVGPolygonElement>, 'points'> & PolygonProps;
export declare const Polygon: React.FC<Props>;
export {};
