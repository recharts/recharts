/**
 * @fileOverview Line Chart
 */
import { generateCategoricalChart } from './generateCategoricalChart';
import { arrayTooltipSearcher } from '../state/optionsSlice';

export const LineChart = generateCategoricalChart({
  chartName: 'LineChart',
  tooltipPayloadSearcher: arrayTooltipSearcher,
});
