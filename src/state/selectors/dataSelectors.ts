import { RechartsRootState } from '../store';
import { ChartDataState } from '../chartDataSlice';

/**
 * This is a "cheap" selector - it returns the data but doesn't iterate them, so it is not sensitive on the array length.
 * @param state RechartsRootState
 * @returns data defined on the chart root element, such as BarChart or ScatterChart
 */
export const selectChartDataWithIndexes = (state: RechartsRootState): ChartDataState => state.chartData;
