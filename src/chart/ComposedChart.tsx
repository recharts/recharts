/**
 * @fileOverview Composed Chart
 */
import { generateCategoricalChart } from './generateCategoricalChart';
import { arrayTooltipSearcher } from '../state/optionsSlice';

export const ComposedChart = generateCategoricalChart({
  chartName: 'ComposedChart',
  tooltipPayloadSearcher: arrayTooltipSearcher,
});
