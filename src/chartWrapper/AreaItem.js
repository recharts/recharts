import React, { PropTypes } from 'react';

class AreaItem extends React.Component {

  static displayName = 'AreaItem';

  static propTypes = {
    // 数据对应的单位
    unit: PropTypes.any,
    // 数据对应的名称
    name: PropTypes.any,
    // 线对应的数据key
    dataKey: PropTypes.string.isRequired,
    // 线的类型
    type: PropTypes.oneOf(['linear', 'monotone', 'step', 'stepBefore', 'stepAfter']),
    className: PropTypes.string,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    yAxisId: PropTypes.number,
    xAxisId: PropTypes.number,
    legendType: PropTypes.string,
    // 数据格式化函数
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
