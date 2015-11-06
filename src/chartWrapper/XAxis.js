import React, {PropTypes} from 'react/addons';

const XAxis = React.createClass({
  propTypes: {
    xAxisId: PropTypes.number,
    // 类目轴需要传入此属性
    dataKey: PropTypes.string,
     // 可以通过ticks传入刻度
    // 当为类目轴时，可以是任何类型的刻度
    // 当为数值轴时，需要传入Number类型的刻度
    ticks: PropTypes.array,
    // x轴占的高度
    height: PropTypes.number,
    // 轴的方位
    orient: PropTypes.oneOf(['top', 'bottom']),
    type: PropTypes.oneOf(['number', 'category'])
  },

  getDefaultProps () {
    return {
      orient: 'bottom',
      height: 20,
      xAxisId: 0,
      tickCount: 5,
      type: 'category'
    };
  },

  render () {
    return null;
  }
});

export default XAxis;
