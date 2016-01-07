import React, { PropTypes } from 'react';

class ScatterItem extends React.Component {

  static displayName = 'ScatterItem';

  static propTypes = {
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    className: PropTypes.string,
    legendType: PropTypes.string,
    xAxisId: PropTypes.number,
    yAxisId: PropTypes.number,
    zAxisId: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  static defaultProps = {
    fill: '#fff',
    xAxisId: 0,
    yAxisId: 0,
    zAxisId: 0,
    legendType: 'scatter',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return null;
  }
}

export default ScatterItem;
