import React, {PropTypes} from 'react';

class YAxis extends React.Component {
  constructor(props) {
    super(props);
  }

  static displayName = 'YAxis';

  static propTypes = {
    // 轴所对应的数据的名称
    name: PropTypes.any,
    // 轴所对应的数据单位
    unit: PropTypes.any,
    yAxisId: PropTypes.number,
    // 当y轴为类目轴时，需要传入此属性
    dataKey: PropTypes.string,
    // 可以通过ticks传入刻度
    // 当为类目轴时，可以是任何类型的刻度
    // 当为数值轴时，需要传入Number类型的刻度
    ticks: PropTypes.array,
    // 刻度数
    tickCount: PropTypes.number,
    // 刻度格式化函数
    tickFormatter: PropTypes.func,
    // y轴占的宽度
    width: PropTypes.number,
    // y轴占的高度，一般计算而得，不需要设置
    height: PropTypes.number,
    // 轴的方位
    orient: PropTypes.oneOf(['left', 'right']),
    type: PropTypes.oneOf(['number', 'category'])
  };

  static defaultProps = {
    orient: 'left',
    width: 60,
    height: 0,
    yAxisId: 0,
    tickCount: 5,
    type: 'number'
  };

  render () {
    return null;
  }
};

export default YAxis;
