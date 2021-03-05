import { PureComponent, SVGProps } from 'react';
interface CrossProps {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    className?: number;
}
export declare type Props = SVGProps<SVGPathElement> & CrossProps;
export declare class Cross extends PureComponent<Props> {
    static defaultProps: {
        x: number;
        y: number;
        top: number;
        left: number;
        width: number;
        height: number;
    };
    static getPath(x: number, y: number, width: number, height: number, top: number, left: number): string;
    render(): JSX.Element;
}
export {};
