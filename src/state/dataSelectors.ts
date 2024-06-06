import { createSelector } from '@reduxjs/toolkit';
import { RechartsRootState } from './store';
import { ChartData, ChartDataState } from './chartDataSlice';
import { AxisType, DataKey } from '../util/types';
import { getValueByDataKey } from '../util/ChartUtils';
import { AxisId } from './axisMapSlice';
import { CartesianGraphicalItemSettings } from './graphicalItemsSlice';

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
export const selectCartesianGraphicalItemsData: (
  state: RechartsRootState,
  axisType: AxisType,
  axisId: AxisId,
) => ReadonlyArray<ChartData> = createSelector(
  (state: RechartsRootState) => state.graphicalItems.cartesianItems,
  (_state, axisType: AxisType) => axisType,
  (_state, _axisType, axisId: AxisId) => axisId,
  (cartesianItems: ReadonlyArray<CartesianGraphicalItemSettings>, axisType: AxisType, axisId: AxisId) =>
    cartesianItems
      .filter(item => {
        if (axisType === 'xAxis') {
          // This is sensitive to the data type, as 0 !== '0'. I wonder if we should be more flexible. How does 2.x branch behave? TODO write test for that
          return item.xAxisId === axisId;
        }
        return false;
      })
      .map(item => item.data),
);

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
export const selectAllDataSquished: (
  state: RechartsRootState,
  axisType: AxisType,
  axisId: AxisId,
  dataKey: DataKey<any>,
) => ChartData | undefined = createSelector(
  selectCartesianGraphicalItemsData,
  selectChartDataWithIndexes,
  (_1: RechartsRootState, _2, _3, dataKey: DataKey<any>) => dataKey,
  (graphicalItemsData: ReadonlyArray<ChartData>, { chartData = [] }, dataKey) => {
    return graphicalItemsData
      .flat(1)
      .concat(chartData)
      .map(entry => getValueByDataKey(entry, dataKey));
  },
);
