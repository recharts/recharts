import React, {PropTypes} from 'react/addons';

const AxisItem = React.createClass({
  propTypes: {
    // 类目轴需要传入此属性
    dataKey: PropTypes.string,
    xAxisId: PropTypes.number,
    type: PropTypes.oneOf('number', 'category')
  },

  getDefaultProps () {
    return {
      xAxisId: 0,
      type: 'category'
    };
  },

  render () {
    return null;
  }
});

export default AxisItem;
