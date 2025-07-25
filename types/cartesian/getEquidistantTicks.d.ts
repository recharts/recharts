import { CartesianTickItem } from '../util/types';
import { Sign } from './getTicks';
export declare function getEquidistantTicks(sign: Sign, boundaries: {
    start: number;
    end: number;
}, getTickSize: (tick: CartesianTickItem, index: number) => number, ticks: ReadonlyArray<CartesianTickItem>, minTickGap: number): ReadonlyArray<CartesianTickItem>;
