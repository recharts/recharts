import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import d3Shape from 'd3-shape';

const Curve = React.createClass({

  propTypes: {
    type: PropTypes.oneOf(['linear', 'monotone', 'step', 'stepBefore', 'stepAfter']),
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    className: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
    baseLineType: PropTypes.oneOf(['horizontal', 'vertical', 'curve']),
    baseLine: PropTypes.oneOfType([
      PropTypes.number, PropTypes.array,
    ]),
    points: PropTypes.arrayOf(PropTypes.object),
  },

  mixins: [PureRenderMixin],

  getDefaultProps() {
    return {
      // 曲线类型，linear - 折线
      // stepBefore - 节点靠前的阶梯曲线, stepMiddle - 节点居中的阶梯曲线, stepAfter - 节点靠后的阶梯曲线
      // monotone - 光滑曲线
      type: 'linear',
      stroke: '#000',
      fill: 'none',
      strokeWidth: 1,
      strokeDasharray: 'none',
      // 点坐标
      points: [],
      onClick() {},
      onMouseEnter() {},
      onMouseLeave() {},
    };
  },
  /**
   * 获取曲线路径
   * @return {String} 路径
   */
  getPath() {
    const {type, points, baseLine, baseLineType} = this.props;
    const l = d3Shape.line().x(p => p.x)
                    .y(p => p.y)
                    .defined(p => p.x && p.x === +p.x && p.y && p.y === + p.y)
                    .curve(d3Shape[type]);
    const len = points.length;
    let curvePath = l(points);

    if (baseLineType === 'horizontal' && baseLine === +baseLine) {
      curvePath += `L${points[len - 1].x} ${baseLine}L${points[0].x} ${baseLine}Z`;
    } else if (baseLineType === 'vertical' && baseLine === +baseLine) {
      curvePath += `L${baseLine} ${points[len - 1].y}L${baseLine} ${points[0].y}Z`;
    }

    return curvePath;
  },

  render() {
    const {className, points, type, onClick,
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
        d={this.getPath()}/>
    );
  },
});

export default Curve;
