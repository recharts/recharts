import { StackOffsetType } from '../util/types';
import { SyncMethod } from '../synchronisation/types';
/**
 * These are chart options that users can choose - which means they can also
 * choose to change them which should trigger a re-render.
 */
export type UpdatableChartOptions = {
    accessibilityLayer: boolean;
    barCategoryGap: number | string;
    barGap: number | string;
    barSize: string | number | undefined;
    /**
     * Useful for debugging which chart is which when synchronising.
     * The className is also passed to the root element of the chart but that's done in the JSX, not through Redux.
     */
    className: string | undefined;
    maxBarSize: number | undefined;
    stackOffset: StackOffsetType;
    /**
     * Charts that share the same syncId will have their Tooltip and Brush synchronised.
     */
    syncId: number | string | undefined;
    syncMethod: SyncMethod;
};
export declare const initialState: UpdatableChartOptions;
export declare const rootPropsReducer: import("redux").Reducer<UpdatableChartOptions>;
export declare const updateOptions: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<UpdatableChartOptions, "rootProps/updateOptions">;
