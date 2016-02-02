/**
 * @fileOverview Y Axis
 */
import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

@pureRender
class YAxis extends Component {

  static displayName = 'YAxis';

  static propTypes = {
    hide: PropTypes.bool,
    // The name of data displayed in the axis
    name: PropTypes.any,
    // The unit of data displayed in the axis
    unit: PropTypes.any,
    // The unique id of y-axis
    yAxisId: PropTypes.number,
    domain: PropTypes.array,
    // The key of data displayed in the axis
    dataKey: PropTypes.string,
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
  };

  static defaultProps = {
    hide: false,
    orientation: 'left',
    width: 60,
    height: 0,
    yAxisId: 0,
    tickCount: 5,
    type: 'number',
  };

  render() {
    return null;
  }
}

export default YAxis;
