import React, {PropTypes} from 'react';

const ScatterItem = React.createClass({
  propTypes: {
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    className: PropTypes.string,
    legendType: PropTypes.string,
    xAxisId: PropTypes.number,
    yAxisId: PropTypes.number,
    zAxisId: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
  },

  getDefaultProps () {
    return {
      fill: '#fff',
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: 'scatter'
    };
  },

  render () {
    return null;
  }
});

export default ScatterItem;
