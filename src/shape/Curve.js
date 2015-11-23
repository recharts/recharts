import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Interpolation from '../util/interpolation';

const Curve = React.createClass({

  mixins: [PureRenderMixin],

  propTypes: {
    type: PropTypes.oneOf(['linear', 'smooth', 'stepMiddle', 'stepBefore', 'stepAfter']),
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    className: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
    points: PropTypes.arrayOf(PropTypes.object)
  },

  getDefaultProps () {
    return {
      // 曲线类型，linear - 折线
      // stepBefore - 节点靠前的阶梯曲线, stepMiddle - 节点居中的阶梯曲线, stepAfter - 节点靠后的阶梯曲线
      // smooth - 光滑曲线
      type: 'linear',
      stroke: '#000',
      fill: 'none',
      strokeWidth: 1,
      strokeDasharray: 'none',
      // 点坐标
      points: [],
      onClick () {},
      onMouseEnter () {},
      onMouseLeave () {}
    };
  },
  /**
   * 获取曲线路径
   * @param {String} type 曲线的类型
   * @param {Array} points 曲线的节点
   * @return {String} 路径
   */
  getPath (type, points) {
    if (Interpolation[type]) {
      return Interpolation[type](points);
    }

    return Interpolation.linear(points);
  },

  render () {
    let {className, points, type, onClick,
        onMouseEnter, onMouseLeave, ...others} = this.props;

    if (!points || !points.length) {
      return null;
    }

    return (
      <path
        {...others}
        className={'recharts-curve' + (className || '')}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        d={this.getPath(type, points)}/>
    );
  }
});

export default Curve;
