/**
 * @fileOverview Funnel Chart
 */
import PropTypes from 'prop-types';
import generateCategoricalChart from './generateCategoricalChart';
import Funnel from '../numberAxis/Funnel';

export default generateCategoricalChart({
  chartName: 'FunnelChart',
  GraphicalChild: Funnel,
  eventType: 'item',
  axisComponents: [],
  defaultProps: {
    layout: 'centric',
  },
  propTypes: {
    layout: PropTypes.oneOf(['centric']),
  }
});
