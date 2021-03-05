import React, { Component, ReactElement } from 'react';
export interface Props {
    aspect?: number;
    width?: string | number;
    height?: string | number;
    minWidth?: string | number;
    minHeight?: string | number;
    maxHeight?: number;
    children: ReactElement;
    debounce?: number;
    id?: string | number;
    className?: string | number;
}
interface State {
    containerWidth: number;
    containerHeight: number;
}
export declare class ResponsiveContainer extends Component<Props, State> {
    static defaultProps: {
        width: string;
        height: string;
        debounce: number;
    };
    private handleResize;
    private mounted;
    private containerRef;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    getContainerSize(): {
        containerWidth: number;
        containerHeight: number;
    };
    updateDimensionsImmediate: () => void;
    renderChart(): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    render(): JSX.Element;
}
export {};
