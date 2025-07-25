/**
 * @fileOverview Rectangle
 */
import * as React from 'react';
import { SVGProps } from 'react';
import { AnimationDuration, AnimationTiming } from '../util/types';
interface TrapezoidProps {
    className?: string;
    x?: number;
    y?: number;
    upperWidth?: number;
    lowerWidth?: number;
    height?: number;
    isUpdateAnimationActive?: boolean;
    animationBegin?: number;
    animationDuration?: AnimationDuration;
    animationEasing?: AnimationTiming;
}
export type Props = SVGProps<SVGPathElement> & TrapezoidProps;
export declare const Trapezoid: React.FC<Props>;
export {};
