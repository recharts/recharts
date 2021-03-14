/**
 * @fileOverview Radar Bar Chart
 */
import { generateCategoricalChart } from './generateCategoricalChart';
import { PolarAngleAxis } from '../polar/PolarAngleAxis';
import { PolarRadiusAxis } from '../polar/PolarRadiusAxis';
import { formatAxisMap } from '../util/PolarUtils';
import { RadialBar } from '../polar/RadialBar';
import { CategoricalChartOptions } from '../util/types';

export const RadialBarChart = generateCategoricalChart({
  chartName: 'RadialBarChart',
  GraphicalChild: RadialBar,
  legendContent: 'children',
  defaultTooltipEventType: 'axis',
  validateTooltipEventTypes: ['axis', 'item'],
  axisComponents: [
    { axisType: 'angleAxis', AxisComp: PolarAngleAxis },
    { axisType: 'radiusAxis', AxisComp: PolarRadiusAxis },
  ],
  formatAxisMap,
  defaultProps: {
    layout: 'radial',
    startAngle: 0,
    endAngle: 360,
    cx: '50%',
    cy: '50%',
    innerRadius: 0,
    outerRadius: '80%',
  },
} as CategoricalChartOptions);
