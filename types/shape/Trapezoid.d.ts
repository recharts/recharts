import { PureComponent, SVGProps } from 'react';
import { AnimationTiming } from '../util/types';
interface TrapezoidProps {
    className?: string;
    x?: number;
    y?: number;
    upperWidth?: number;
    lowerWidth?: number;
    height?: number;
    isUpdateAnimationActive?: boolean;
    animationBegin?: number;
    animationDuration?: number;
    animationEasing?: AnimationTiming;
}
export declare type Props = SVGProps<SVGPathElement> & TrapezoidProps;
export declare class Trapezoid extends PureComponent<Props> {
    static defaultProps: {
        x: number;
        y: number;
        upperWidth: number;
        lowerWidth: number;
        height: number;
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
