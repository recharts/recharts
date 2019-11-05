/**
 * @fileOverview Area Chart
 */
import generateCategoricalChart from './generateCategoricalChart';
import Area from '../cartesian/Area';
import XAxis from '../cartesian/XAxis';
import YAxis from '../cartesian/YAxis';
import { formatAxisMap } from '../util/CartesianUtils';
import { CategoricalChart } from './types';

export default generateCategoricalChart({
  chartName: 'AreaChart',
  GraphicalChild: Area,
  axisComponents: [
    { axisType: 'xAxis', AxisComp: XAxis },
    { axisType: 'yAxis', AxisComp: YAxis },
  ],
  formatAxisMap,
} as CategoricalChart);
