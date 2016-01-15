import React, { PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

@pureRender
class AreaItem extends React.Component {

  static displayName = 'AreaItem';

  static propTypes = {
    // The unit of data
    unit: PropTypes.any,
    // The name of data
    name: PropTypes.any,
    // The key of data which is unique in an area chart
    dataKey: PropTypes.string.isRequired,
    // The type of curve in area chart
    type: PropTypes.oneOf(['linear', 'monotone', 'step', 'stepBefore', 'stepAfter']),
    className: PropTypes.string,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    yAxisId: PropTypes.number,
    xAxisId: PropTypes.number,
    legendType: PropTypes.string,
    // The formatter function of data
    formatter: PropTypes.func,
  };

  static defaultProps = {
    stroke: '#3182bd',
    fill: '#3182bd',
    fillOpacity: 0.6,
    xAxisId: 0,
    yAxisId: 0,
    legendType: 'line',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return null;
  }
}

export default AreaItem;
