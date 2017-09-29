/**
 * @fileOverview X Axis
 */
import { Component } from 'react';
import PropTypes from 'prop-types';
import pureRender from '../util/PureRender';
import { SCALE_TYPES } from '../util/ReactUtils';

@pureRender
class XAxis extends Component {

  static displayName = 'XAxis';

  static propTypes = {
    allowDecimals: PropTypes.bool,
    hide: PropTypes.bool,
    // The name of data displayed in the axis
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // The unit of data displayed in the axis
    unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // The unique id of x-axis
    xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    domain: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.func,
      PropTypes.oneOf(['auto', 'dataMin', 'dataMax']),
    ])),
    // The key of data displayed in the axis
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]),
    // The width of axis which is usually calculated internally
    width: PropTypes.number,
    // The height of axis, which need to be setted by user
    height: PropTypes.number,
    mirror: PropTypes.bool,
    // The orientation of axis
    orientation: PropTypes.oneOf(['top', 'bottom']),
    type: PropTypes.oneOf(['number', 'category']),
    // Ticks can be any type when the axis is the type of category
    // Ticks must be numbers when the axis is the type of number
    ticks: PropTypes.array,
    // The count of ticks
    tickCount: PropTypes.number,
    // The formatter function of tick
    tickFormatter: PropTypes.func,
    padding: PropTypes.shape({
      left: PropTypes.number,
      right: PropTypes.number,
    }),
    allowDataOverflow: PropTypes.bool,
    scale: PropTypes.oneOfType([PropTypes.oneOf(SCALE_TYPES), PropTypes.func]),
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
    reversed: PropTypes.bool,
  };

  static defaultProps = {
    allowDecimals: true,
    hide: false,
    orientation: 'bottom',
    width: 0,
    height: 30,
    mirror: false,
    xAxisId: 0,
    tickCount: 5,
    type: 'category',
    domain: [0, 'auto'],
    padding: { left: 0, right: 0 },
    allowDataOverflow: false,
    scale: 'auto',
    reversed: false,
  };

  render() {
    return null;
  }
}

export default XAxis;
