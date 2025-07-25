import { LayoutType, Size } from '../util/types';
import { HorizontalAlignmentType, LegendPayload, VerticalAlignmentType } from '../component/DefaultLegendContent';
import type { LegendItemSorter } from '../component/Legend';
export type LegendSettings = {
    layout: LayoutType;
    align: HorizontalAlignmentType;
    verticalAlign: VerticalAlignmentType;
    itemSorter: LegendItemSorter;
};
/**
 * The properties inside this state update independently of each other and quite often.
 * When selecting, never select the whole state because you are going to get
 * unnecessary re-renders. Select only the properties you need.
 *
 * This is why this state type is not exported - don't use it directly.
 */
type LegendState = {
    settings: LegendSettings;
    size: Size;
    /**
     * This is a 2D array of LegendPayloads. The first dimension is for each graphical item.
     * Some items may have multiple legend items, so the second dimension is for each legend item.
     */
    payload: ReadonlyArray<ReadonlyArray<LegendPayload>>;
};
export declare const setLegendSize: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<Size, "legend/setLegendSize">, setLegendSettings: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<LegendSettings, "legend/setLegendSettings">, addLegendPayload: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<readonly LegendPayload[], "legend/addLegendPayload">, removeLegendPayload: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<readonly LegendPayload[], "legend/removeLegendPayload">;
export declare const legendReducer: import("redux").Reducer<LegendState>;
export {};
