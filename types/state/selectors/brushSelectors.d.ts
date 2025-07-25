import { RechartsRootState } from '../store';
import { BrushSettings } from '../brushSlice';
export declare const selectBrushSettings: (state: RechartsRootState) => BrushSettings;
export type BrushDimensions = {
    x: number;
    y: number;
    width: number;
    height: number;
};
export declare const selectBrushDimensions: (state: RechartsRootState) => BrushDimensions;
