import React, {PropTypes} from 'react';

class PieItem extends React.Component {
  constructor(props) {
    super(props);
  }

  static displayName = 'PieItem';

  static propTypes = {
    // 饼图的圆心的x坐标
    cx: PropTypes.number,
    // 饼图的圆心的y坐标
    cy: PropTypes.number,
    // 饼图内径
    innerRadius: PropTypes.number,
    // 饼图外径
    outerRadius: PropTypes.number,
    fill: PropTypes.string,
    stroke: PropTypes.string,
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
    innerRadius: 0,
    outerRadius: 0,
    stroke: '#fff',
    fill: '#808080',
    legendType: 'line',
    isActive: true
  };

  render () {
    return null;
  }
};

export default PieItem;
