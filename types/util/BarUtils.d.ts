import * as React from 'react';
import { ActiveShape } from './types';
import { BarProps } from '../cartesian/Bar';
export type BarRectangleProps = {
    option: ActiveShape<BarProps, SVGPathElement>;
    isActive: boolean;
    onMouseEnter?: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onMouseLeave?: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onClick?: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    width?: number;
    height?: number;
} & Omit<BarProps, 'onAnimationStart' | 'onAnimationEnd'>;
export declare function BarRectangle(props: BarRectangleProps): React.JSX.Element;
export type MinPointSize = number | ((value: number | undefined | null, index: number) => number);
/**
 * Safely gets minPointSize from the minPointSize prop if it is a function
 * @param minPointSize minPointSize as passed to the Bar component
 * @param defaultValue default minPointSize
 * @returns minPointSize
 */
export declare const minPointSizeCallback: (minPointSize: MinPointSize, defaultValue?: number) => (value: unknown, index: number) => number;
