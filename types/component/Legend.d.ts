import { PureComponent, CSSProperties } from 'react';
import { Payload, Props as DefaultProps } from './DefaultLegendContent';
declare type UniqueOption = boolean | ((entry: Payload) => Payload);
export declare type Props = DefaultProps & {
    wrapperStyle?: CSSProperties;
    chartWidth?: number;
    chartHeight?: number;
    width?: number;
    height?: number;
    margin?: {
        top?: number;
        left?: number;
        bottom?: number;
        right?: number;
    };
    payloadUniqBy?: UniqueOption;
    onBBoxUpdate?: (box: DOMRect | null) => void;
};
interface State {
    boxWidth: number;
    boxHeight: number;
}
export declare class Legend extends PureComponent<Props, State> {
    static displayName: string;
    static defaultProps: {
        iconSize: number;
        layout: string;
        align: string;
        verticalAlign: string;
    };
    private wrapperNode;
    static getWithHeight(item: any, chartWidth: number): {
        height: any;
        width?: undefined;
    } | {
        width: any;
        height?: undefined;
    };
    state: {
        boxWidth: number;
        boxHeight: number;
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    getBBox(): DOMRect;
    private getBBoxSnapshot;
    private getDefaultPosition;
    private updateBBox;
    render(): JSX.Element;
}
export {};
