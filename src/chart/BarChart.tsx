/**
 * @fileOverview Bar Chart
 */
import { generateCategoricalChart } from './generateCategoricalChart';
import { Bar } from '../cartesian/Bar';
import { XAxis } from '../cartesian/XAxis';
import { YAxis } from '../cartesian/YAxis';
import { formatAxisMap } from '../util/CartesianUtils';
import { CategoricalChartOptions } from '../util/types';

export const BarChart = generateCategoricalChart({
  chartName: 'BarChart',
  GraphicalChild: Bar,
  defaultTooltipEventType: 'axis',
  validateTooltipEventTypes: ['axis', 'item'],
  axisComponents: [
    { axisType: 'xAxis', AxisComp: XAxis },
    { axisType: 'yAxis', AxisComp: YAxis },
  ],
  formatAxisMap,
} as CategoricalChartOptions);
