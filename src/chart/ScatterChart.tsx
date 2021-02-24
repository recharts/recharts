/**
 * @fileOverview Scatter Chart
 */
import { generateCategoricalChart } from './generateCategoricalChart';
import { Scatter } from '../cartesian/Scatter';
import { XAxis } from '../cartesian/XAxis';
import { YAxis } from '../cartesian/YAxis';
import { ZAxis } from '../cartesian/ZAxis';
import { formatAxisMap } from '../util/CartesianUtils';
import { CategoricalChartOptions } from '../util/types';

export const ScatterChart = generateCategoricalChart({
  chartName: 'ScatterChart',
  GraphicalChild: Scatter,
  defaultTooltipEventType: 'item',
  validateTooltipEventTypes: ['item'],
  axisComponents: [
    { axisType: 'xAxis', AxisComp: XAxis },
    { axisType: 'yAxis', AxisComp: YAxis },
    { axisType: 'zAxis', AxisComp: ZAxis },
  ],
  formatAxisMap,
} as CategoricalChartOptions);
