import React, {PropTypes} from 'react';

class LineItem extends React.Component {
  constructor(props) {
    super(props);
  }

  static displayName = 'LineItem';

  static propTypes = {
    type: PropTypes.string,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    className: PropTypes.string,
    dataKey: PropTypes.string.isRequired,
    yAxisId: PropTypes.number,
    xAxisId: PropTypes.number,
    legendType: PropTypes.string
  };

  static defaultProps = {
    stroke: '#3182bd',
    fill: '#fff',
    xAxisId: 0,
    yAxisId: 0,
    legendType: 'line'
  };

  render () {
    return null;
  }
};

export default LineItem;
