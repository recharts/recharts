/**
 * @fileOverview Bar Chart
 */
import { generateCategoricalChart } from './generateCategoricalChart';
import { Bar } from '../cartesian/Bar';
import { arrayTooltipSearcher } from '../state/optionsSlice';

export const BarChart = generateCategoricalChart({
  chartName: 'BarChart',
  GraphicalChild: Bar,
  defaultTooltipEventType: 'axis',
  validateTooltipEventTypes: ['axis', 'item'],
  tooltipPayloadSearcher: arrayTooltipSearcher,
});
