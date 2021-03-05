/**
 * @fileOverview Area Chart
 */
import { generateCategoricalChart } from './generateCategoricalChart';
import { Area } from '../cartesian/Area';
import { XAxis } from '../cartesian/XAxis';
import { YAxis } from '../cartesian/YAxis';
import { formatAxisMap } from '../util/CartesianUtils';
export var AreaChart = generateCategoricalChart({
  chartName: 'AreaChart',
  GraphicalChild: Area,
  axisComponents: [{
    axisType: 'xAxis',
    AxisComp: XAxis
  }, {
    axisType: 'yAxis',
    AxisComp: YAxis
  }],
  formatAxisMap: formatAxisMap
});