import { CartesianTickItem, CartesianViewBoxRequired } from '../util/types';
import { CartesianAxisSettings, XAxisOrientation, YAxisOrientation } from '../state/cartesianAxisSlice';
export type Sign = 0 | 1 | -1;
export type GetTicksInput = {
    angle: number;
    interval: CartesianAxisSettings['interval'];
    minTickGap: number;
    orientation: XAxisOrientation | YAxisOrientation;
    tick: CartesianAxisSettings['tick'];
    tickFormatter: CartesianAxisSettings['tickFormatter'];
    ticks: ReadonlyArray<CartesianTickItem>;
    unit: CartesianAxisSettings['unit'];
    viewBox: CartesianViewBoxRequired;
};
export declare function getTicks(props: GetTicksInput, fontSize?: string, letterSpacing?: string): ReadonlyArray<CartesianTickItem>;
