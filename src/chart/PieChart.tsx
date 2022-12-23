/**
 * @fileOverview Pie Chart
 */
import { generateCategoricalChart } from './generateCategoricalChart';
import { PolarAngleAxis } from '../polar/PolarAngleAxis';
import { PolarRadiusAxis } from '../polar/PolarRadiusAxis';
import { formatAxisMap } from '../util/PolarUtils';
import { Pie } from '../polar/Pie';

export const PieChart = generateCategoricalChart({
  chartName: 'PieChart',
  GraphicalChild: Pie,
  validateTooltipEventTypes: ['item'],
  defaultTooltipEventType: 'item',
  legendContent: 'children',
  axisComponents: [
    { axisType: 'angleAxis', AxisComp: PolarAngleAxis },
    { axisType: 'radiusAxis', AxisComp: PolarRadiusAxis },
  ],
  formatAxisMap,
  defaultProps: {
    layout: 'centric',
    startAngle: 0,
    endAngle: 360,
    cx: '50%',
    cy: '50%',
    innerRadius: 0,
    outerRadius: '80%',
  },
});
