import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { ChartData, ChartDataState } from '../chartDataSlice';

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
export const selectChartDataWithIndexes = (state: RechartsRootState): ChartDataState => state.chartData;

/**
 * This selector will always return the full range of data, ignoring the indexes set by a Brush.
 * Useful for when you want to render the full range of data, even if a Brush is active.
 * For example: in the Brush panorama, in Legend, in Tooltip.
 */
export const selectChartDataAndAlwaysIgnoreIndexes: (state: RechartsRootState) => ChartDataState = createSelector(
  [selectChartDataWithIndexes],
  (dataState: ChartDataState) => {
    const dataEndIndex = dataState.chartData != null ? dataState.chartData.length - 1 : 0;
    return {
      chartData: dataState.chartData,
      computedData: dataState.computedData,
      dataEndIndex,
      dataStartIndex: 0,
    };
  },
);

export const selectChartDataWithIndexesIfNotInPanoramaPosition4 = (
  state: RechartsRootState,
  _unused1: unknown,
  _unused2: unknown,
  isPanorama: boolean,
): ChartDataState => {
  if (isPanorama) {
    return selectChartDataAndAlwaysIgnoreIndexes(state);
  }
  return selectChartDataWithIndexes(state);
};

export const selectChartDataWithIndexesIfNotInPanoramaPosition3 = (
  state: RechartsRootState,
  _unused1: unknown,
  isPanorama: boolean,
): ChartDataState => {
  if (isPanorama) {
    return selectChartDataAndAlwaysIgnoreIndexes(state);
  }
  return selectChartDataWithIndexes(state);
};

/**
 * Returns the chart-level data slice (respecting Brush indexes), memoized by content so that
 * spurious Immer reference changes (e.g. dispatching `setChartData(undefined)` when data is
 * already `undefined`) do not propagate to downstream selectors.
 *
 * Used when a selector needs chart-level data but must avoid extra recomputes when the
 * data content has not actually changed.
 */
export const selectChartDataSliceIfNotInPanorama: (
  state: RechartsRootState,
  _unused1: unknown,
  _unused2: unknown,
  isPanorama: boolean,
) => ChartData = createSelector(
  [selectChartDataWithIndexesIfNotInPanoramaPosition4],
  ({ chartData, dataStartIndex, dataEndIndex }: ChartDataState): ChartData =>
    chartData != null ? chartData.slice(dataStartIndex, dataEndIndex + 1) : [],
);

/**
 * Returns the chart-level data slice (ignoring Brush indexes), memoized by content.
 * Used in tooltip and polar selectors that always need the full data range.
 */
export const selectChartDataSliceIgnoringIndexes: (state: RechartsRootState) => ChartData = createSelector(
  [selectChartDataAndAlwaysIgnoreIndexes],
  ({ chartData, dataStartIndex, dataEndIndex }: ChartDataState): ChartData =>
    chartData != null ? chartData.slice(dataStartIndex, dataEndIndex + 1) : [],
);

/**
 * Returns the chart-level data slice (with Brush indexes applied), memoized by content.
 * Used in tooltip selectors.
 */
export const selectChartDataSliceWithIndexes: (state: RechartsRootState) => ChartData = createSelector(
  [selectChartDataWithIndexes],
  ({ chartData, dataStartIndex, dataEndIndex }: ChartDataState): ChartData =>
    chartData != null ? chartData.slice(dataStartIndex, dataEndIndex + 1) : [],
);
