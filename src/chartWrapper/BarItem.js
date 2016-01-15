import React, { PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

@pureRender
class BarItem extends React.Component {

  static displayName = 'BarItem';

  static propTypes = {
    yAxisId: PropTypes.number,
    xAxisId: PropTypes.number,
    barSize: PropTypes.number,
    // The unit of data
    unit: PropTypes.any,
    // The key of data which is unique in an area chart
    dataKey: PropTypes.string.isRequired,
    // The name of data
    name: PropTypes.string,

    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    className: PropTypes.string,

    legendType: PropTypes.string,
    isActive: PropTypes.bool,
    stack: PropTypes.string,
    stackType: PropTypes.string,
    // The formatter function of data
    formatter: PropTypes.func,
  };

  static defaultProps = {
    fill: '#fff',
    xAxisId: 0,
    yAxisId: 0,
    legendType: 'rect',
    isActive: true,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return null;
  }
}

export default BarItem;
