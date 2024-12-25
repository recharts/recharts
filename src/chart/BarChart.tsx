/**
 * @fileOverview Bar Chart
 */
import { generateCategoricalChart } from './generateCategoricalChart';
import { arrayTooltipSearcher } from '../state/optionsSlice';

export const BarChart = generateCategoricalChart({
  chartName: 'BarChart',
  defaultTooltipEventType: 'axis',
  validateTooltipEventTypes: ['axis', 'item'],
  tooltipPayloadSearcher: arrayTooltipSearcher,
});
