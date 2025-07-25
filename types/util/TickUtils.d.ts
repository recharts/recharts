import { Size, CartesianTickItem, CartesianViewBoxRequired } from './types';
export declare function getAngledTickWidth(contentSize: Size, unitSize: Size, angle: number): number;
export declare function getTickBoundaries(viewBox: CartesianViewBoxRequired, sign: number, sizeKey: string): {
    start: number;
    end: number;
};
export declare function isVisible(sign: number, tickPosition: number, getSize: () => number, start: number, end: number): boolean;
export declare function getNumberIntervalTicks(ticks: ReadonlyArray<CartesianTickItem>, interval: number): ReadonlyArray<CartesianTickItem> | undefined;
