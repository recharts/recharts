/**
 * @fileOverview 极坐标系中沿着极径的刻度
 * @author xile611
 * @Date 2015-08-28
 */

'use strict';

import React from 'react/addons';
import PolarCoordinateMixin from '../mixin/PolarCoordinateMixin';

const PropTypes = React.PropTypes;
const RADIAN = Math.PI / 180;
const eps = 1e-5;

const PolarAngleAxis = React.createClass({
  mixins: [PolarCoordinateMixin],

  propTypes: {
    ticks: PropTypes.array,
    tickSize: PropTypes.number,
    tickValueFormat: PropTypes.func,
    orientation: PropTypes.oneOf(['inner', 'outer']),
    concentricPathType: PropTypes.oneOf(['polygon', 'circle'])
  },

  getDefaultProps () {
    return {
      // 坐标轴所在的方位
      orientation: 'inner',
      // 刻度数据，格式为 {value: "展示的刻度值", angle: 12, size: 8}
      ticks: [],
      // 刻度的大小
      tickSize: 6
    };
  },
  /**
   * 获取tick线段的端点坐标
   * @param  {Object} data tick数据
   * @return {Object} (x1, y1)为靠近文字的端点坐标，(x2, y2)为靠近轴的端点坐标
   */
  getTickLineCoord (data) {
    let {cx, cy, outerRadius, orientation, tickSize} = this.props,
        sin = Math.sin(-data.angle * RADIAN),
        cos = Math.cos(-data.angle * RADIAN),
        x1, x2, y1, y2;

    tickSize = data.tickSize || tickSize || 6;

    switch (orientation) {
      case 'inner':
        x1 = cx + (outerRadius - tickSize) * cos;
        y1 = cy + (outerRadius - tickSize) * sin;
        x2 = cx + outerRadius * cos;
        y2 = cy + outerRadius * sin;
        break;
      case 'outer':
        x1 = cx + outerRadius * cos;
        y1 = cy + outerRadius * sin;
        x2 = cx + (outerRadius + tickSize) * cos;
        y2 = cy + (outerRadius + tickSize) * sin;
        break;
    }

    return {x1, y1, x2, y2}
  },
  /**
   * 计算文字的对齐方式
   * @param  {Object} data 刻度数据
   * @return {String} middle - 居中对齐，start - 左对齐，right - 右对齐
   */
  getTickTextAnchor (data) {
    let cos = Math.cos(-data * RADIAN),
        textAnchor;

    if (cos > eps) {
      textAnchor = 'start'
    } else if (cos < -eps) {
      textAnchor = 'end';
    } else {
      textAnchor = 'middle';
    }

    return textAnchor;
  },
  /**
   * 绘制刻度
   * @return {SVGElement} [description]
   */
  renderTicks () {
    let {ticks, orientation} = this.props;

    if (!ticks || !ticks.length) { return ; }

    let items = {};

    ticks.reduce((result, entry, i) => {
      let lineCoord = this.getTickLineCoord(entry),
          textAnchor = this.getTickTextAnchor(entry);

      items['tick-' + i] = (
        <g className='axis-tick' key={'tick-' + i}>
          <line
            className='tick-line'
            stroke='#000'
            x1={lineCoord.x1}
            y1={lineCoord.y1}
            x2={lineCoord.x2}
            y2={lineCoord.y2}/>
          <text
            x={lineCoord.x1}
            y={lineCoord.y1}
            textAnchor={textAnchor}
            className='tick-value'>{entry.value}</text>
        </g>
      );
    }, items)

    return (
      <g className='axis-ticks'>
        {React.addons.createFragment(items)}
      </g>
    );
  },

  render () {
    let {ticks} = this.props;

    if (!ticks || !ticks.length) {
      return;
    }

    return (
      <g className='layer-axis layer-polar-angle-axis'>
        {this.renderTicks()}
      </g>
    );
  }
});

export default PolarAngleAxis;
