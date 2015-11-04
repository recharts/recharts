'use strict';

import React from 'react/addons';
import CartesianCoordinateMixin from '../mixin/CartesianCoordinateMixin';

const PropTypes = React.PropTypes;

const CartesianAxis = React.createClass({
  mixins: [CartesianCoordinateMixin],

  propTypes: {
    orient: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    ticks: PropTypes.array,
    tickSize: PropTypes.number,
    tickValueFormat: PropTypes.func
  },

  getDefaultProps () {
    return {
      // 坐标轴所在的方位
      orient: 'bottom',
      // 刻度数据，格式为 {value: "展示的刻度值", coord: 12, size: 8}
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
    let {x, y, width, height, orient, tickSize} = this.props,
        x1, x2, y1, y2;

    tickSize = data.tickSize || tickSize || 6;

    switch (orient) {
      case 'top':
        x1 = x2 = data.coord;
        y1 = y + height - tickSize;
        y2 = y + height;
        break;
      case 'bottom':
        x1 = x2 = data.coord;
        y1 = y + tickSize;
        y2 = y;
        break;
      case 'left':
        y1 = y2 = data.coord;
        x1 = x + width - tickSize;
        x2 = x + width;
        break;
      case 'right':
        y1 = y2 = data.coord;
        x1 = x + tickSize;
        x2 = x;
        break;
    }

    return {x1, y1, x2, y2}
  },

  getBaseline () {
    let {orient} = this.props,
        baseline;

    switch (orient) {
      case 'top':
        baseline = 'auto';
        break;
      case 'bottom':
        baseline = 'text-before-edge';
        break;
      default:
        baseline = 'central';
        break;
    }

    return baseline;
  },

  getTickTextAnchor () {
    let {orient} = this.props,
        textAnchor;

    switch (orient) {
      case 'left':
        textAnchor = 'end';
        break;
      case 'right':
        textAnchor = 'start';
        break;
      default:
        textAnchor = 'middle';
        break;
    }

    return textAnchor;
  },

  getDy () {
    let {orient} = this.props;
    let dy = 0;

    switch (orient) {
      case 'left':
      case 'right':
        dy = 8;
        break;
      case 'top':
        dy = -2;
        break;
      case 'bottom':
        dy = 15;
        break;
    }

    return dy;
  },

  renderAxis () {
    let {x, y, width, height, orient} = this.props,
        axis;

    switch (orient) {
      case 'top':
        axis = <line className='axis-line' stroke='#000' x1={x} y1={y + height} x2={x + width} y2={y + height}/>;
        break;
      case 'bottom':
        axis = <line className='axis-line' stroke='#000' x1={x} y1={y} x2={x + width} y2={y}/>;
         break;
      case 'left':
        axis = <line className='axis-line' stroke='#000' x1={x + width} y1={y} x2={x + width} y2={y + height}/>;
        break;
      case 'right':
        axis = <line className='axis-line' stroke='#000' x1={x} y1={y} x2={x} y2={y + height}/>;
        break;
    }

    return axis;
  },

  renderTicks () {
    let {ticks, orient} = this.props;

    if (!ticks || !ticks.length) { return ; }

    let items = {},
        textAnchor = this.getTickTextAnchor();

    ticks.reduce((result, entry, i) => {
      let lineCoord = this.getTickLineCoord(entry);

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
            dy={this.getDy(entry)}
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
    let {width, height, ticks} = this.props;

    if (width <= 0 || height <= 0 || !ticks || !ticks.length) {
      return null;
    }

    return (
      <g className='layer-axis layer-cartesian-axis'>
        {this.renderAxis()}
        {this.renderTicks()}
      </g>
    );
  }
});

export default CartesianAxis;
