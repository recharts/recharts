/**
 * @fileOverview Composed Chart
 */
// import { generateCategoricalChart } from './generateCategoricalChart';
import { generateCategoricalChartFunctional } from './generateCategoricalChartFunctional';
import { Area } from '../cartesian/Area';
import { Bar } from '../cartesian/Bar';
import { Line } from '../cartesian/Line';
import { Scatter } from '../cartesian/Scatter';
import { XAxis } from '../cartesian/XAxis';
import { YAxis } from '../cartesian/YAxis';
import { ZAxis } from '../cartesian/ZAxis';
import { formatAxisMap } from '../util/CartesianUtils';

export const ComposedChart = generateCategoricalChartFunctional({
  chartName: 'ComposedChart',
  GraphicalChild: [Line, Area, Bar, Scatter],
  axisComponents: [
    { axisType: 'xAxis', AxisComp: XAxis },
    { axisType: 'yAxis', AxisComp: YAxis },
    { axisType: 'zAxis', AxisComp: ZAxis },
  ],
  formatAxisMap,
});
