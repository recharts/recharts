import { PureComponent, SVGProps } from 'react';
import { AnimationTiming } from '../util/types';
declare type RectRadius = [number, number, number, number];
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
    animationDuration?: number;
    animationEasing?: AnimationTiming;
}
export declare const isInRectangle: (point: {
    x: number;
    y: number;
}, rect: {
    x: number;
    y: number;
    width: number;
    height: number;
}) => boolean;
export declare type Props = Omit<SVGProps<SVGPathElement>, 'radius'> & RectangleProps;
export declare class Rectangle extends PureComponent<Props> {
    static defaultProps: {
        x: number;
        y: number;
        width: number;
        height: number;
        radius: number;
        isAnimationActive: boolean;
        isUpdateAnimationActive: boolean;
        animationBegin: number;
        animationDuration: number;
        animationEasing: string;
    };
    state: {
        totalLength: number;
    };
    private node;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
