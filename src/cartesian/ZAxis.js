/**
 * @fileOverview Z Axis
 */
import { Component } from 'react';
import PropTypes from 'prop-types';
import pureRender from '../util/PureRender';

@pureRender
class ZAxis extends Component {

  static displayName = 'ZAxis';

  static propTypes = {
    type: PropTypes.oneOf(['number', 'category']),
    // The name of data displayed in the axis
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // The unit of data displayed in the axis
    unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // The unique id of z-axis
    zAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // The key of data displayed in the axis
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]),
    // The range of axis
    range: PropTypes.arrayOf(PropTypes.number),
    scale: PropTypes.oneOfType([
      PropTypes.oneOf(['auto', 'linear', 'pow', 'sqrt', 'log', 'identity', 'time',
        'band', 'point', 'ordinal', 'quantile', 'quantize', 'utc', 'sequential',
        'threshold']),
      PropTypes.func,
    ]),
  };

  static defaultProps = {
    zAxisId: 0,
    range: [64, 64],
    scale: 'auto',
    type: 'number',
  };

  render() {
    return null;
  }
}

export default ZAxis;
