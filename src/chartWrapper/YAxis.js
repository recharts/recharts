import React, {PropTypes} from 'react/addons';

const YAxis = React.createClass({
  propTypes: {
    yAxisId: PropTypes.number,
    // 当y轴为类目轴时，需要传入此属性
    dataKey: PropTypes.string,
    // 可以通过ticks传入刻度
    // 当为类目轴时，可以是任何类型的刻度
    // 当为数值轴时，需要传入Number类型的刻度
    ticks: PropTypes.array,
    tickCount: PropTypes.number,
    // y轴占的宽度
    width: PropTypes.number,
    // 轴的方位
    orient: PropTypes.oneOf(['left', 'right']),
    type: PropTypes.oneOf(['number', 'category'])
  },

  getDefaultProps () {
    return {
      orient: 'left',
      width: 60,
      yAxisId: 0,
      tickCount: 5,
      type: 'number'
    };
  },

  render () {
    return null;
  }
});

export default YAxis;
