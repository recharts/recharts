import React, {PropTypes} from 'react';
import createFragment from 'react-addons-create-fragment';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const RADIAN = Math.PI / 180;

const PolarGrid = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    cx: PropTypes.number,
    cy: PropTypes.number,
    startAngle: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    clockWise: PropTypes.bool,
    polarAngles: PropTypes.arrayOf(PropTypes.number),
    polarRadius: PropTypes.arrayOf(PropTypes.number),
    concentricPathType: PropTypes.oneOf(['polygon', 'circle'])
  },

  getDefaultProps () {
    return {
      cx: 0,
      cy: 0,
      startAngle: 0,
      innerRadius: 0,
      outerRadius: 0,
      clockWise: true,
      // 水平线条的纵坐标
      polarAngles: [],
      // 竖直线条的横坐标
      polarRadius: [],
      // 同心轴的类型
      concentricPathType: 'polygon'
    };
  },
  /**
   * 绘制从极点向外发射的射线
   * @return {[type]} [description]
   */
  renderPolarAngles () {
    let {cx, cy, innerRadius, outerRadius, polarAngles} = this.props;

    if (!polarAngles || !polarAngles.length) { return ; }

    let items = {};

    polarAngles.reduce((result, entry, i) => {
      let cos = Math.cos(-entry * RADIAN),
          sin = Math.sin(-entry * RADIAN);

      items['angle-' + i] = (
        <line key={'line-' + i}
          stroke='#000'
          x1={cx + cos * innerRadius}
          y1={cy + sin * innerRadius}
          x2={cx + cos * outerRadius}
          y2={cy + sin * outerRadius} />
      );
    }, items)

    return (
      <g className='layer-grid-angle'>
        {createFragment(items)}
      </g>
    );
  },
  /**
   * 绘制同心圆
   * @param {Number} radius 同心圆的半径
   * @param {Number} index 序号
   * @return {ReactElement} [description]
   */
  renderConcentricCircle (radius, index) {
    let {cx, cy} = this.props;

    return <circle className='concentric-circle' stroke='#000' fill='none' key={'circle-' + index} cx={cx} cy={cy} r={radius}/>;
  },
  /**
   * 绘制同心轴
   * @param {Number} radius 同心圆的半径
   * @return {ReactElement} [description]
   */
  renderConcentricPolygon (radius, index) {
    let {cx, cy, polarAngles} = this.props,
        path = '';

    polarAngles.forEach((angle, i) => {
      if (i) {
        path += `L ${cx + radius * Math.cos(-angle * RADIAN)},${cy + radius * Math.sin(-angle * RADIAN)}`;
      } else {
        path += `M ${cx + radius * Math.cos(-angle * RADIAN)},${cy + radius * Math.sin(-angle * RADIAN)}`;
      }
    });

    return <path className='concentric-polygon' stroke='#000' fill='none' key={'path-' + index} d={path + 'Z'}/>;
  },

  /**
   * 绘制同心轴或者同心圆
   * @return {ReactElement}
   * @todo 英文名优化，同心轴有点怪怪的
   */
  renderConcentricPath () {
    let {cx, cy, innerRadius, outerRadius, polarRadius, concentricPathType} = this.props;

    if (!polarRadius || !polarRadius.length) { return ; }

    let items = {};

    polarRadius.reduce((result, entry, i) => {
      items['path-' + i] = concentricPathType === 'circle' ?
                 this.renderConcentricCircle(entry, i) :
                 this.renderConcentricPolygon(entry, i);
    }, items)

    return (
      <g className='layer-grid-concentric'>
        {createFragment(items)}
      </g>
    );
  },

  render () {
    let {polarRadius, polarAngles, outerRadius} = this.props;

    if (outerRadius <= 0) {
      return null;
    }

    return (
      <g className='layer-grid layer-polar-grid'>
        {this.renderPolarAngles()}
        {this.renderConcentricPath()}
      </g>
    );
  }
});

export default PolarGrid;
