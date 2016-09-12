/**
 * @fileOverview X Axis
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';

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
      PropTypes.oneOf(['auto', 'dataMin', 'dataMax']),
    ])),
    // The key of data displayed in the axis
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // The width of axis which is usually calculated internally
    width: PropTypes.number,
    // The height of axis, which need to be setted by user
    height: PropTypes.number,
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
  };

  static defaultProps = {
    allowDecimals: true,
    hide: false,
    orientation: 'bottom',
    width: 0,
    height: 30,
    xAxisId: 0,
    tickCount: 5,
    type: 'category',
    domain: [0, 'auto'],
    padding: { left: 0, right: 0 },
    allowDataOverflow: false,
  };

  render() {
    return null;
  }
}

export default XAxis;
