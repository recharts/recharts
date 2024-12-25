/**
 * @fileOverview Area Chart
 */
import { generateCategoricalChart } from './generateCategoricalChart';
import { Area } from '../cartesian/Area';
import { arrayTooltipSearcher } from '../state/optionsSlice';

export const AreaChart = generateCategoricalChart({
  chartName: 'AreaChart',
  GraphicalChild: Area,
  tooltipPayloadSearcher: arrayTooltipSearcher,
});
