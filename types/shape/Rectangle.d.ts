/**
 * @fileOverview Rectangle
 */
import * as React from 'react';
import { SVGProps } from 'react';
import { AnimationDuration, AnimationTiming } from '../util/types';
export type RectRadius = [number, number, number, number];
interface RectangleProps {
    className?: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    radius?: number | RectRadius;
    isAnimationActive?: boolean;
    isUpdateAnimationActive?: boolean;
    animationBegin?: number;
    animationDuration?: AnimationDuration;
    animationEasing?: AnimationTiming;
}
export type Props = Omit<SVGProps<SVGPathElement>, 'radius'> & RectangleProps;
export declare const Rectangle: React.FC<Props>;
export {};
