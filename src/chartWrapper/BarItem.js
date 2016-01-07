import React, { PropTypes } from 'react';

class BarItem extends React.Component {

  static displayName = 'BarItem';

  static propTypes = {
    yAxisId: PropTypes.number,
    xAxisId: PropTypes.number,
    barSize: PropTypes.number,
    // 数据对应的单位
    unit: PropTypes.any,
    // 柱对应的数据key
    dataKey: PropTypes.string.isRequired,
    // 指标名称
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
    // 数据格式化函数
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
