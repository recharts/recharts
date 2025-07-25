import * as React from 'react';
import { SVGProps } from 'react';
import { GeometrySectorWithCornerRadius } from '../util/types';
interface SectorProps extends GeometrySectorWithCornerRadius {
    className?: string;
}
export type Props = SVGProps<SVGPathElement> & Partial<SectorProps>;
export declare const Sector: React.FC<Props>;
export {};
