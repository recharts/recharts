/**
 * @fileOverview Line Chart
 */
import { generateCategoricalChart } from './generateCategoricalChart';
import { Line } from '../cartesian/Line';
import { arrayTooltipSearcher } from '../state/optionsSlice';

export const LineChart = generateCategoricalChart({
  chartName: 'LineChart',
  GraphicalChild: Line,
  tooltipPayloadSearcher: arrayTooltipSearcher,
});
