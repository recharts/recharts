import { CSSProperties, MouseEvent } from 'react';
export declare const getStyleString: (style: CSSProperties) => string;
export declare const getStringSize: (text: string | number, style?: CSSProperties) => any;
interface ContainerOffset {
    top: number;
    left: number;
}
export declare const getOffset: (el: HTMLElement) => ContainerOffset;
export declare const calculateChartCoordinate: (event: MouseEvent, offset: ContainerOffset) => {
    chartX: number;
    chartY: number;
};
export {};
