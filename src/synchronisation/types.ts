import { Coordinate, DataKey, TickItem } from '../util/types';

export type MouseHandlerDataParam = {
  activeTooltipIndex: number | undefined;
  isTooltipActive: boolean;
  activeIndex: number | undefined;
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
