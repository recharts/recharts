/**
 * @fileOverview Line Chart
 */
// import { generateCategoricalChart } from './generateCategoricalChart';
import { generateCategoricalChartFunctional } from './generateCategoricalChartFunctional';
import { Line } from '../cartesian/Line';
import { XAxis } from '../cartesian/XAxis';
import { YAxis } from '../cartesian/YAxis';
import { formatAxisMap } from '../util/CartesianUtils';

export const LineChart = generateCategoricalChartFunctional({
  chartName: 'LineChart',
  GraphicalChild: Line,
  axisComponents: [
    { axisType: 'xAxis', AxisComp: XAxis },
    { axisType: 'yAxis', AxisComp: YAxis },
  ],
  formatAxisMap,
});
