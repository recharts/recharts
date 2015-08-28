'use strict';

import React from 'react/addons';
import Sector from '../shape/Sector';
import PolarGrid from '../component/PolarGrid';
import PolarCoordinateMixin from '../mixin/PolarCoordinateMixin';


const perigon = 360;

const Pie = React.createClass({
  mixins: [PolarCoordinateMixin],

  propTypes: {
    concentricPathType: React.PropTypes.oneOf(['polygon', 'circle']),
    gridNumber: React.PropTypes.array,
    data: React.PropTypes.array,
    keys: React.PropTypes.object
  },

  getDefaultProps () {
    return {
      // 网格分段数
      gridNumber: 2,
      // 数据
      data: [],
      keys: {
        name: 'name',
        value: 'value'
      }
    };
  },
  /**
   * 计算雷达图极径的角度
   * @return {Array}
   */
  getAngles () {
    let {startAngle, data, clockWise} = this.props,
        sign = clockWise ? -1 : 1,
        len = data.length,
        angle = perigon / len,
        result = [];

    for (let i = 0; i < len; i++) {
      result.push(startAngle + i * sign * angle);
    }

    return result;
  },
  /**
   * 计算网格所在的半径节点
   * @return {Array} 半径节点
   */
  getGridRadius () {
    let {gridNumber, innerRadius, outerRadius} = this.props,
        result = [], step;

    if (innerRadius === outerRadius) {
      return result;
    }

    if (innerRadius > outerRadius) {
      [innerRadius, outerRadius] = [outerRadius, innerRadius];
    }

    step = (outerRadius - innerRadius) / gridNumber;

    for (let i = 0; i < gridNumber; i++) {
      if (i === 0 && innerRadius > 0) {
        result.push(innerRadius);
      }

      result.push(innerRadius + step * (i + 1));
    }

    return result;
  },

  renderPolygon () {

  },

  render () {
    let {cx, cy, innerRadius, outerRadius, concentricPathType, data} = this.props;

    if (outerRadius <= 0 || !data || !data.length) {
      return;
    }

    let angles = this.getAngles(),
        radius = this.getGridRadius();

    return (
      <g className='layer-pie'>
        <PolarGrid
          cx={cx}
          cy={cy}
          concentricPathType={concentricPathType}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          polarAngles={angles}
          polarRadius={radius}/>
      </g>
    );
  }
});

export default Pie;
