import React, {PropTypes} from 'react/addons';

const LineItem = React.createClass({
  propTypes: {
    type: PropTypes.string,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDashArray: PropTypes.string,
    className: PropTypes.string,
    dataKey: PropTypes.string.isRequired,
    yAxisId: PropTypes.number,
    xAxisId: PropTypes.number,
    isActive: PropTypes.bool
  },

  getDefaultProps () {
    return {
      stroke: '#3182bd',
      fill: '#fff',
      xAxisId: 0,
      yAxisId: 0,
      isActive: true
    };
  },

  render () {
    return null;
  }
});

export default LineItem;
