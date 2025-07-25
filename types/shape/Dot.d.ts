/**
 * @fileOverview Dot
 */
import * as React from 'react';
import { PresentationAttributesWithProps } from '../util/types';
interface DotProps {
    className?: string;
    cx?: number;
    cy?: number;
    r?: number;
    clipDot?: boolean;
}
export type Props = PresentationAttributesWithProps<DotProps, SVGCircleElement> & DotProps;
export declare const Dot: React.FC<Props>;
export {};
