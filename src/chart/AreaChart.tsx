/**
 * @fileOverview Area Chart
 */
import { generateCategoricalChart } from './generateCategoricalChart';
import { arrayTooltipSearcher } from '../state/optionsSlice';

export const AreaChart = generateCategoricalChart({
  chartName: 'AreaChart',
  tooltipPayloadSearcher: arrayTooltipSearcher,
});
