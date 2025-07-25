import { PayloadAction } from '@reduxjs/toolkit';
import { Padding } from '../util/types';
/**
 * From all Brush properties, only height has a default value and will always be defined.
 * Other properties are nullable and will be computed from offsets and margins if they are not set.
 */
export type BrushSettings = {
    x: number | undefined;
    y: number | undefined;
    width: number | undefined;
    height: number;
    padding: Padding;
};
export declare const brushSlice: import("@reduxjs/toolkit").Slice<BrushSettings, {
    setBrushSettings(_state: BrushSettings, action: PayloadAction<BrushSettings | null>): BrushSettings;
}, "brush">;
export declare const setBrushSettings: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<BrushSettings, "brush/setBrushSettings">;
export declare const brushReducer: import("redux").Reducer<BrushSettings>;
