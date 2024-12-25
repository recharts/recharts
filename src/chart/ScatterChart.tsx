/**
 * @fileOverview Scatter Chart
 */
import { generateCategoricalChart } from './generateCategoricalChart';
import { Scatter } from '../cartesian/Scatter';
import { arrayTooltipSearcher } from '../state/optionsSlice';

export const ScatterChart = generateCategoricalChart({
  chartName: 'ScatterChart',
  GraphicalChild: Scatter,
  defaultTooltipEventType: 'item',
  validateTooltipEventTypes: ['item'],
  tooltipPayloadSearcher: arrayTooltipSearcher,
});
