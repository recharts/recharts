import { createSelector } from '@reduxjs/toolkit';
import { RechartsRootState } from './store';
import { ChartData, ChartDataState } from './chartDataSlice';
import { DataKey } from '../util/types';
import { getValueByDataKey } from '../util/ChartUtils';

/**
 * This is a "cheap" selector - it returns the data but doesn't iterate them, so it is not sensitive on the array length.
 * @param state RechartsRootState
 * @returns data defined on the chart root element, such as BarChart or ScatterChart
 */
export const selectChartDataWithIndexes = (state: RechartsRootState): ChartDataState => state.chartData;

/**
 * This is a "cheap" selector - it returns the data but doesn't iterate them, so it is not sensitive on the array length.
 * @param state RechartsRootState
 * @returns data defined on the chart graphical items, such as Line or Scatter or Pie
 */
export const selectAllGraphicalItemsData: (state: RechartsRootState) => ReadonlyArray<ChartData> = (
  state: RechartsRootState,
) => state.graphicalItems.graphicalItemData;

/**
 * This selector will return all data there is in the chart: graphical items, chart root, all together
 * and all processed by a single DataKey.
 * Useful for figuring out an axis domain (because that needs to know of everything),
 * not useful for rendering individual graphical elements (because they need to know which data is theirs and which is not).
 *
 * This function will discard the original indexes, so it is also not useful for anything that depends on ordering.
 *
 * This is an expensive selector - it will iterate all data and compute their value using the provided dataKey.
 */
export const selectAllDataSquished: (state: RechartsRootState, dataKey: DataKey<any>) => ChartData | undefined =
  createSelector(
    selectAllGraphicalItemsData,
    selectChartDataWithIndexes,
    (_: RechartsRootState, dataKey: DataKey<any>) => dataKey,
    (graphicalItemsData, { chartData = [] }, dataKey) => {
      return graphicalItemsData
        .flat(1)
        .concat(chartData)
        .map(entry => getValueByDataKey(entry, dataKey));
    },
  );
