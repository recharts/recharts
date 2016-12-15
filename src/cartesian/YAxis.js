/**
 * @fileOverview Y Axis
 */
import { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';

@pureRender
class YAxis extends Component {

  static displayName = 'YAxis';

  static propTypes = {
    allowDecimals: PropTypes.bool,
    hide: PropTypes.bool,
    // The name of data displayed in the axis
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // The unit of data displayed in the axis
    unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // The unique id of y-axis
    yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    domain: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.oneOf(['auto', 'dataMin', 'dataMax']),
    ])),
    // The key of data displayed in the axis
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // Ticks can be any type when the axis is the type of category
    // Ticks must be numbers when the axis is the type of number
    ticks: PropTypes.array,
    // The count of ticks
    tickCount: PropTypes.number,
    // The formatter function of tick
    tickFormatter: PropTypes.func,
    // The width of axis, which need to be setted by user
    width: PropTypes.number,
    // The height of axis which is usually calculated in Chart
    height: PropTypes.number,
    // The orientation of axis
    orientation: PropTypes.oneOf(['left', 'right']),
    type: PropTypes.oneOf(['number', 'category']),
    padding: PropTypes.shape({
      top: PropTypes.number,
      bottom: PropTypes.number,
    }),
    allowDataOverflow: PropTypes.bool,
    scale: PropTypes.oneOfType([
      PropTypes.oneOf(['auto', 'linear', 'pow', 'sqrt', 'log', 'identity', 'time',
        'band', 'point', 'ordinal', 'quantile', 'quantize', 'utcTime', 'sequential',
        'threshold']),
      PropTypes.func,
    ]),
    label: PropTypes.oneOfType([
      PropTypes.number, PropTypes.string, PropTypes.func, PropTypes.element,
    ]),
    tick: PropTypes.oneOfType([
      PropTypes.bool, PropTypes.func, PropTypes.object, PropTypes.element,
    ]),
    axisLine: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    tickLine: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    minTickGap: PropTypes.number,
    tickSize: PropTypes.number,
    interval: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([
      'preserveStart', 'preserveEnd', 'preserveStartEnd',
    ])]),
  };

  static defaultProps = {
    allowDecimals: true,
    hide: false,
    orientation: 'left',
    width: 60,
    height: 0,
    yAxisId: 0,
    tickCount: 5,
    type: 'number',
    domain: [0, 'auto'],
    padding: { top: 0, bottom: 0 },
    allowDataOverflow: false,
    scale: 'auto',
  };

  render() {
    return null;
  }
}

export default YAxis;
