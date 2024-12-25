/**
 * @fileOverview Radar Bar Chart
 */
import { generateCategoricalChart } from './generateCategoricalChart';
import { arrayTooltipSearcher } from '../state/optionsSlice';

export const RadialBarChart = generateCategoricalChart({
  chartName: 'RadialBarChart',
  defaultTooltipEventType: 'axis',
  validateTooltipEventTypes: ['axis', 'item'],
  defaultProps: {
    layout: 'radial',
    startAngle: 0,
    endAngle: 360,
    cx: '50%',
    cy: '50%',
    innerRadius: 0,
    outerRadius: '80%',
  },
  tooltipPayloadSearcher: arrayTooltipSearcher,
});
