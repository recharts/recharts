/**
 * @fileOverview Pie Chart
 */
import PropTypes from 'prop-types';
import generateCategoricalChart from './generateCategoricalChart';
import PolarAngleAxis from '../polar/PolarAngleAxis';
import PolarRadiusAxis from '../polar/PolarRadiusAxis';
import { formatAxisMap } from '../util/PolarUtils';
import Pie from '../polar/Pie';

export default generateCategoricalChart({
  chartName: 'PieChart',
  GraphicalChild: Pie,
  eventType: 'item',
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
  propTypes: {
    layout: PropTypes.oneOf(['centric']),
    startAngle: PropTypes.number,
    endAngle: PropTypes.number,
    cx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    cy: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    innerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    outerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  },
});
