import { TickItem } from '../util/types';
import { CategoricalChartState } from '../chart/types';

/**
 * Allows customisation of how the charts will synchronize tooltips and brushes.
 * Default: index
 *
 * 'index': other charts will reuse current datum's index within the data array. In cases where data does not have the same length, this might yield unexpected results.
 * 'value': will try to match other charts values
 * custom function: will receive ticks, data as argument and should return an index.
 */
export type SyncMethod = 'index' | 'value' | ((ticks: TickItem[], data: CategoricalChartState) => number);
