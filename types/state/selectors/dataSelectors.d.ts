import { RechartsRootState } from '../store';
import { ChartDataState } from '../chartDataSlice';
/**
 * This selector always returns the data with the indexes set by a Brush.
 * Trouble is, that might or might not be what you want.
 *
 * In charts with Brush, you will sometimes want to select the full range of data, and sometimes the one decided by the Brush
 * - even if the Brush is active, the panorama inside the Brush should show the full range of data.
 *
 * So instead of this selector, consider using either selectChartDataAndAlwaysIgnoreIndexes or selectChartDataWithIndexesIfNotInPanorama
 *
 * @param state RechartsRootState
 * @returns data defined on the chart root element, such as BarChart or ScatterChart
 */
export declare const selectChartDataWithIndexes: (state: RechartsRootState) => ChartDataState;
/**
 * This selector will always return the full range of data, ignoring the indexes set by a Brush.
 * Useful for when you want to render the full range of data, even if a Brush is active.
 * For example: in the Brush panorama, in Legend, in Tooltip.
 */
export declare const selectChartDataAndAlwaysIgnoreIndexes: (state: RechartsRootState) => ChartDataState;
export declare const selectChartDataWithIndexesIfNotInPanorama: (state: RechartsRootState, _unused1: unknown, _unused2: unknown, isPanorama: boolean) => ChartDataState;
