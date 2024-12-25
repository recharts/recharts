/**
 * @fileOverview Composed Chart
 */
import { generateCategoricalChart } from './generateCategoricalChart';
import { Area } from '../cartesian/Area';
import { Bar } from '../cartesian/Bar';
import { Line } from '../cartesian/Line';
import { Scatter } from '../cartesian/Scatter';
import { arrayTooltipSearcher } from '../state/optionsSlice';

export const ComposedChart = generateCategoricalChart({
  chartName: 'ComposedChart',
  GraphicalChild: [Line, Area, Bar, Scatter],
  tooltipPayloadSearcher: arrayTooltipSearcher,
});
