import { ReactElement } from 'react';
import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { CartesianGraphicalItemSettings, GraphicalItemId } from '../graphicalItemsSlice';
import { BarPositionPosition, NormalizedStackId, StackId } from '../../util/ChartUtils';
import { DataKey } from '../../util/types';
import { BarRectangleItem } from '../../cartesian/Bar';
import { ChartData } from '../chartDataSlice';
import { MinPointSize } from '../../util/BarUtils';
import { AllStackGroups, StackSeries } from '../../util/stacks/stackTypes';
export type BarSettings = {
    id: string;
    barSize: number | string | undefined;
    data: ChartData | undefined;
    dataKey: DataKey<any>;
    maxBarSize: number | undefined;
    minPointSize: MinPointSize;
    stackId: NormalizedStackId | undefined;
};
export declare const selectAllVisibleBars: (state: RechartsRootState, xAxisId: AxisId, yAxisId: AxisId, isPanorama: boolean) => ReadonlyArray<CartesianGraphicalItemSettings>;
type BarCategory = {
    stackId: StackId | undefined;
    /**
     * List of dataKeys of items stacked at this position.
     * All of these Bars are either sharing the same stackId,
     * or this is an array with one Bar because it has no stackId defined.
     *
     * This structure limits us to having one dataKey only once per stack which I think is reasonable.
     * People who want to have the same data twice can duplicate their data to have two distinct dataKeys.
     */
    dataKeys: ReadonlyArray<DataKey<any>>;
    /**
     * Width (in horizontal chart) or height (in vertical chart) of this stack of items
     */
    barSize: number | undefined;
};
export type SizeList = ReadonlyArray<BarCategory>;
export declare const selectBarCartesianAxisSize: (state: RechartsRootState, xAxisId: AxisId, yAxisId: AxisId) => number;
/**
 * Some graphical items allow data stacking. The stacks are optional,
 * so all props here are optional too.
 */
export interface MaybeStackedGraphicalItem {
    /**
     * Unique ID of the graphical item.
     * This is used to identify the graphical item in the state and in the React tree.
     * This is required for every graphical item - it's either provided by the user or generated automatically.
     */
    id: GraphicalItemId;
    stackId: StackId | undefined;
    dataKey: DataKey<any> | undefined;
    /**
     * Bars have a size but Area does not.
     */
    barSize: number | string | undefined;
    /**
     * If the given graphical item has its own data array, it will appear here.
     * If this is undefined, the data will be taken from the chart root prop.
     */
    data?: ChartData | undefined;
}
/**
 * Some graphical items allow data stacking.
 * This interface is used to represent the items that are stacked
 * because the user has provided the stackId and dataKey properties.
 */
export interface DefinitelyStackedGraphicalItem {
    /**
     * Unique ID of the graphical item.
     * This is used to identify the graphical item in the state and in the React tree.
     * This is required for every graphical item - it's either provided by the user or generated automatically.
     */
    id: string;
    stackId: StackId;
    dataKey: DataKey<any>;
    barSize: number | string | undefined;
}
export declare const combineBarSizeList: (allBars: ReadonlyArray<MaybeStackedGraphicalItem>, globalSize: number | undefined, totalSize: number | undefined) => SizeList | undefined;
export declare const selectBarSizeList: (state: RechartsRootState, xAxisId: AxisId, yAxisId: AxisId, isPanorama: boolean, barSettings: BarSettings) => SizeList | undefined;
export declare const selectBarBandSize: (state: RechartsRootState, xAxisId: AxisId, yAxisId: AxisId, isPanorama: boolean, barSettings: BarSettings) => number | undefined;
export type BarWithPosition = {
    stackId: StackId | undefined;
    /**
     * List of dataKeys of items stacked at this position.
     * All of these Bars are either sharing the same stackId,
     * or this is an array with one Bar because it has no stackId defined.
     *
     * This structure limits us to having one dataKey only once per stack which I think is reasonable.
     * People who want to have the same data twice can duplicate their data to have two distinct dataKeys.
     */
    dataKeys: ReadonlyArray<DataKey<any>>;
    /**
     * Position of this stack in absolute pixels measured from the start of the chart
     */
    position: BarPositionPosition;
};
export declare const combineAllBarPositions: (sizeList: SizeList, globalMaxBarSize: number, barGap: string | number, barCategoryGap: string | number, barBandSize: number, bandSize: number, childMaxBarSize: number | undefined) => ReadonlyArray<BarWithPosition> | undefined;
export declare const selectAllBarPositions: (state: RechartsRootState, xAxisId: AxisId, yAxisId: AxisId, isPanorama: boolean, barSettings: BarSettings) => ReadonlyArray<BarWithPosition> | undefined;
export declare const selectBarPosition: (state: RechartsRootState, xAxisId: AxisId, yAxisId: AxisId, isPanorama: boolean, barSettings: BarSettings) => BarPositionPosition | undefined;
export declare const combineStackedData: (stackGroups: AllStackGroups | undefined, barSettings: MaybeStackedGraphicalItem | undefined) => StackSeries | undefined;
export declare const selectBarRectangles: (state: RechartsRootState, xAxisId: AxisId, yAxisId: AxisId, isPanorama: boolean, barSettings: BarSettings, cells: ReadonlyArray<ReactElement> | undefined) => ReadonlyArray<BarRectangleItem> | undefined;
export {};
