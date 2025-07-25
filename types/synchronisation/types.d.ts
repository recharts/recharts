import { Coordinate, DataKey, TickItem } from '../util/types';
import { TooltipIndex } from '../state/tooltipSlice';
export type MouseHandlerDataParam = {
    /**
     * Index of the active tick in the current chart. Only works with number-indexed one-dimensional data charts,
     * like Line, Area, Bar, Pie, etc.
     *
     * Doesn't work with two-dimensional data charts like Treemap, Sankey. But one day it will which is why the TooltipIndex type is here.
     */
    activeTooltipIndex: number | TooltipIndex | undefined;
    isTooltipActive: boolean;
    /**
     * Exactly the same as activeTooltipIndex - this was also duplicated in recharts@2 so let's keep both properties for better backwards compatibility.
     */
    activeIndex: number | TooltipIndex | undefined;
    activeLabel: string | undefined;
    activeDataKey: DataKey<any> | undefined;
    activeCoordinate: Coordinate | undefined;
};
/**
 * Allows customisation of how the charts will synchronize tooltips and brushes.
 * Default: index
 *
 * 'index': other charts will reuse current datum's index within the data array. In cases where data does not have the same length, this might yield unexpected results.
 * 'value': will try to match other charts values
 * custom function: will receive two arguments and should return an index of the active tick in the current chart:
 * argument 1: ticks from the current chart
 * argument 2: active tooltip state from the other chart
 */
export type SyncMethod = 'index' | 'value' | ((ticks: ReadonlyArray<TickItem>, data: MouseHandlerDataParam) => number);
