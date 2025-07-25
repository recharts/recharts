import { ChartData } from './chartDataSlice';
import { AxisId } from './cartesianAxisSlice';
import { DataKey } from '../util/types';
import { ErrorBarDirection } from '../cartesian/ErrorBar';
import { NormalizedStackId } from '../util/ChartUtils';
import { MaybeStackedGraphicalItem } from './selectors/barSelectors';
/**
 * ErrorBars have lot more settings but all the others are scoped to the component itself.
 * Only some of them required to be reported to the global store because XAxis and YAxis need to know
 * if the error bar is contributing to extending the axis domain.
 */
export type ErrorBarsSettings = {
    /**
     * The direction is only used in Scatter chart, and decided based on ChartLayout in other charts.
     */
    direction: ErrorBarDirection;
    /**
     * The dataKey decides which property from the data will each individual ErrorBar use.
     * If it so happens that the ErrorBar data are bigger than the axis domain,
     * the error bar data will stretch the axis domain.
     */
    dataKey: DataKey<any>;
};
/**
 * Unique ID of the graphical item.
 * This is used to identify the graphical item in the state and in the React tree.
 * This is required for every graphical item - it's either provided by the user or generated automatically.
 */
export type GraphicalItemId = string;
export type CartesianGraphicalItemType = 'area' | 'bar' | 'line' | 'scatter';
export type PolarGraphicalItemType = 'pie' | 'radar' | 'radialBar';
export interface GraphicalItemSettings extends MaybeStackedGraphicalItem {
    data: ChartData;
    dataKey: DataKey<any> | undefined;
    /**
     * Why not just stop pushing the graphical items to state when they are hidden?
     * Well some components decide to continue showing them anyway.
     * Legend for example will keep showing a record for hidden graphical items.
     * Stacks for example will ignore them.
     */
    hide: boolean;
}
export type CartesianGraphicalItemSettings = GraphicalItemSettings & {
    type: CartesianGraphicalItemType;
    /**
     * Graphical items that are inside Brush panorama should not interact with the main area graphical items
     * and vice versa.
     */
    isPanorama: boolean;
    /**
     * Each of the graphical items explicitly says which axis it uses;
     * this property is optional for users but every graphical item must have a default,
     * and it is required here.
     */
    xAxisId: AxisId;
    yAxisId: AxisId;
    zAxisId: AxisId;
    /**
     * ErrorBars are only rendered if they are explicitly set in the React tree, otherwise this will be an empty array.
     * One graphical item can have multiple error bars. This probably only makes sense in Scatter.
     */
    errorBars: ReadonlyArray<ErrorBarsSettings> | undefined;
    stackId: NormalizedStackId | undefined;
    /**
     * This property is only used in Bar and RadialBar items
     */
    barSize: number | string | undefined;
};
export type PolarGraphicalItemSettings = GraphicalItemSettings & {
    type: PolarGraphicalItemType;
    angleAxisId: AxisId;
    radiusAxisId: AxisId;
};
export type GraphicalItemsState = {
    /**
     * This is an array of all cartesian graphical items and their settings.
     * Graphical item is a visual representation of data on the chart.
     * Some examples are: Line, Bar.
     *
     * The order is arbitrary; do not expect that indexes here will be the same as indexes elsewhere.
     */
    cartesianItems: ReadonlyArray<CartesianGraphicalItemSettings>;
    /**
     * This is an array of all polar graphical items and their settings.
     * Graphical item is a visual representation of data on the chart.
     * Some examples are: Pie, Radar, RadialBar
     *
     * The order is arbitrary; do not expect that indexes here will be the same as indexes elsewhere.
     */
    polarItems: ReadonlyArray<PolarGraphicalItemSettings>;
};
type ReplacePayload<T> = {
    prev: T;
    next: T;
};
export declare const addCartesianGraphicalItem: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<CartesianGraphicalItemSettings, "graphicalItems/addCartesianGraphicalItem">, replaceCartesianGraphicalItem: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<ReplacePayload<CartesianGraphicalItemSettings>, "graphicalItems/replaceCartesianGraphicalItem">, removeCartesianGraphicalItem: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<CartesianGraphicalItemSettings, "graphicalItems/removeCartesianGraphicalItem">, addPolarGraphicalItem: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<PolarGraphicalItemSettings, "graphicalItems/addPolarGraphicalItem">, removePolarGraphicalItem: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<PolarGraphicalItemSettings, "graphicalItems/removePolarGraphicalItem">;
export declare const graphicalItemsReducer: import("redux").Reducer<GraphicalItemsState>;
export {};
