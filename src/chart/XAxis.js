import React, { PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

@pureRender
class XAxis extends React.Component {

  static displayName = 'XAxis';

  static propTypes = {
    hide: PropTypes.bool,
    // The name of data displayed in the axis
    name: PropTypes.any,
    // The unit of data displayed in the axis
    unit: PropTypes.any,
    // The unique id of x-axis
    xAxisId: PropTypes.number,
    // The key of data displayed in the axis
    dataKey: PropTypes.string,
    // The width of axis which is usually calculated internally
    width: PropTypes.number,
    // The height of axis, which need to be setted by user
    height: PropTypes.number,
    // The orient of axis
    orient: PropTypes.oneOf(['top', 'bottom']),
    type: PropTypes.oneOf(['number', 'category']),
    // Ticks can be any type when the axis is the type of category
    // Ticks must be numbers when the axis is the type of number
    ticks: PropTypes.array,
    // The count of ticks
    tickCount: PropTypes.number,
    // The formatter function of tick
    tickFormatter: PropTypes.func,
  };

  static defaultProps = {
    hide: false,
    orient: 'bottom',
    width: 0,
    height: 30,
    xAxisId: 0,
    tickCount: 5,
    type: 'category',
  };

  render() {
    return null;
  }
}

export default XAxis;
