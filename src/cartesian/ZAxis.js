/**
 * @fileOverview Z Axis
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';

@pureRender
class ZAxis extends Component {

  static displayName = 'ZAxis';

  static propTypes = {
    // The name of data displayed in the axis
    name: PropTypes.any,
    // The unit of data displayed in the axis
    unit: PropTypes.any,
    // The unique id of z-axis
    zAxisId: PropTypes.number,
    // The key of data displayed in the axis
    dataKey: PropTypes.string,
    // The range of axis
    range: PropTypes.arrayOf(PropTypes.number),
  };

  static defaultProps = {
    zAxisId: 0,
    range: [10, 10],
  };

  render() {
    return null;
  }
}

export default ZAxis;
