import { Component, CSSProperties, SVGProps } from 'react';
interface TextProps {
    scaleToFit?: boolean;
    angle?: number;
    textAnchor?: 'start' | 'middle' | 'end' | 'inherit';
    verticalAnchor?: 'start' | 'middle' | 'end';
    style?: CSSProperties;
    lineHeight?: number | string;
    breakAll?: boolean;
    children?: string | number;
    maxLines?: number;
}
export declare type Props = Omit<SVGProps<SVGTextElement>, 'textAnchor' | 'verticalAnchor'> & TextProps;
interface Words {
    words: Array<string>;
    width?: number;
}
interface State {
    wordsByLines?: Array<Words>;
    prevWidth?: string | number;
    prevScaleToFit?: boolean;
    prevChildren?: string | number;
    prevStyle?: CSSProperties;
    prevBreakAll?: boolean;
}
export declare class Text extends Component<Props, State> {
    static defaultProps: {
        x: number;
        y: number;
        lineHeight: string;
        capHeight: string;
        scaleToFit: boolean;
        textAnchor: string;
        verticalAnchor: string;
    };
    state: State;
    static getDerivedStateFromProps(nextProps: Props, prevState: State): State;
    render(): JSX.Element;
}
export {};
