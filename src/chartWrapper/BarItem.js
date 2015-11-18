import React, {PropTypes} from 'react';

class BarItem extends React.Component {
  constructor(props) {
    super(props);
  }

  static displayName = 'BarItem';

  static propTypes = {
    barSize: PropTypes.number,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    className: PropTypes.string,
    dataKey: PropTypes.string.isRequired,
    yAxisId: PropTypes.number,
    xAxisId: PropTypes.number,
    legendType: PropTypes.string,
    isActive: PropTypes.bool,
    stack: PropTypes.string,
    stackType: PropTypes.string
  };

  static defaultProps = {
    fill: '#fff',
    xAxisId: 0,
    yAxisId: 0,
    legendType: 'rect',
    isActive: true
  };

  render () {
    return null;
  }
};

export default BarItem;
