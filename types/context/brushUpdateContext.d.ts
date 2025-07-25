export interface BrushStartEndIndex {
    startIndex: number;
    endIndex: number;
}
export type OnBrushUpdate = (newState: BrushStartEndIndex) => void;
export declare const BrushUpdateDispatchContext: import("react").Context<OnBrushUpdate>;
