import React, {PropTypes} from 'react';

class XAxis extends React.Component {

  static displayName = 'XAxis';

  static propTypes = {
    // 轴所对应的数据的名称
    name: PropTypes.any,
    // 轴所对应的数据单位
    unit: PropTypes.any,
    xAxisId: PropTypes.number,
    // 类目轴需要传入此属性
    dataKey: PropTypes.string,
    // x轴占的宽度，一般计算得到，不需要设置
    width: PropTypes.number,
    // x轴占的高度
    height: PropTypes.number,
    // 轴的方位
    orient: PropTypes.oneOf(['top', 'bottom']),
    type: PropTypes.oneOf(['number', 'category']),
     // 可以通过ticks传入刻度
    // 当为类目轴时，可以是任何类型的刻度
    // 当为数值轴时，需要传入Number类型的刻度
    ticks: PropTypes.array,
    // 刻度数
    tickCount: PropTypes.number,
    // 刻度格式化函数
    tickFormatter: PropTypes.func,
  };

  static defaultProps = {
    orient: 'bottom',
    width: 0,
    height: 30,
    xAxisId: 0,
    tickCount: 5,
    type: 'category',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return null;
  }
}

export default XAxis;
