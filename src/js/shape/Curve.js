'use strict';

import React, {PropTypes, PureRenderMixin} from 'react/addons';
import Interpolation from '../util/interpolation';
import ShapeMixin from '../mixin/ShapeMixin';

const Curve = React.createClass({

  mixins: [PureRenderMixin],

  propTypes: {
    type: PropTypes.string,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDashArray: PropTypes.string,
    className: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.object)
  },

  getDefaultProps () {
    return {
      // 曲线类型，linear - 折线
      // stepBefore - 节点靠前的阶梯曲线, stepMiddle - 节点居中的阶梯曲线, stepAfter - 节点靠后的阶梯曲线
      // smooth - 光滑曲线
      type: 'linear',
      fill: 'none',
      strokeWidth: 1,
      strokeDashArray: 'none',
      // 点坐标
      points: [],
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
    let {className, strokeDashArray, points, type, ...others} = this.props;

    if (!points || !points.length) {
      return null;
    }

    return (
      <path
        {...others}
        className={'recharts-line' + (className || '')}
        strokeDasharray={strokeDashArray}
        d={this.getPath(type, points)}/>
    );
  }
});

export default Curve;
