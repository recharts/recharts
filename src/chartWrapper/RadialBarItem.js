import React, {PropTypes} from 'react';

class RadialBarItem extends React.Component {
  constructor(props) {
    super(props);
  }

  static displayName = 'RadialBarItem';

  static propTypes = {
    dataKey: PropTypes.oneOfType([
        PropTypes.number, PropTypes.string
      ]).isRequired,
    // 如果没有指定，会取RadialBarChart设置的值，
    barRadius: PropTypes.number,
    startAngle: PropTypes.number,
    maxAngle: PropTypes.number,
    endAngle: PropTypes.number,
    clockWise: PropTypes.bool,

    fill: PropTypes.string,
    fillOpacity: PropTypes.number,
    stroke: PropTypes.string,
    strokeOpacity: PropTypes.number,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,

    className: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.any,
      value: PropTypes.number
    })),
    legendType: PropTypes.string
  };

  static defaultProps = {
    startAngle: 180,
    endAngle: 0,
    maxAngle: 135,
    clockWise: true,
    innerRadius: 0,
    outerRadius: 0,
    stroke: '#fff',
    fill: '#808080'
  };

  render () {
    return null;
  }
};

export default RadialBarItem;
