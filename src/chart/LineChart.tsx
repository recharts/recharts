/**
 * @fileOverview Line Chart
 */
import generateCategoricalChart from './generateCategoricalChart';
import Line from '../cartesian/Line';
import XAxis from '../cartesian/XAxis';
import YAxis from '../cartesian/YAxis';
import { formatAxisMap } from '../util/CartesianUtils';
import { CategoricalChart } from './types';

export default generateCategoricalChart({
  chartName: 'LineChart',
  GraphicalChild: Line,
  axisComponents: [
    { axisType: 'xAxis', AxisComp: XAxis },
    { axisType: 'yAxis', AxisComp: YAxis },
  ],
  formatAxisMap,
} as CategoricalChart);
