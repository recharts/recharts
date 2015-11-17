import React from 'react';
import Sector from '../shape/Sector';
import PolarGrid from '../component/PolarGrid';
import PolarAngleAxis from '../component/PolarAngleAxis';
import PolarRadiusAxis from '../component/PolarRadiusAxis';
import PolarCoordinateMixin from '../mixin/PolarCoordinateMixin';


const perigon = 360;
const RADIAN = Math.PI / 180;

const Pie = React.createClass({
  mixins: [PolarCoordinateMixin],

  propTypes: {
    concentricPathType: React.PropTypes.oneOf(['polygon', 'circle']),
    gridNumber: React.PropTypes.number,
    data: React.PropTypes.array,
    keys: React.PropTypes.object
  },

  getDefaultProps () {
    return {
      // 网格分段数
      gridNumber: 2,
      // 数据
      data: []
    };
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

    // 生成均匀的网格
    step = (outerRadius - innerRadius) / gridNumber;

    for (let i = 0; i < gridNumber; i++) {
      if (i === 0 && innerRadius > 0) {
        result.push(innerRadius);
      }

      result.push(innerRadius + step * (i + 1));
    }

    return result;
  },

  /**
   * 获取顶点坐标
   * @param {Object} data 单个数据
   * @return {Object} {x: '横坐标', y: '纵坐标'}
   */
  getVertexCoord (data) {
    let {min, max, value, angle} = data,
        {cx, cy, innerRadius, outerRadius} = this.props,
        r;

    if (min === max) {
      r = outerRadius;
    } else {
      r = innerRadius + (outerRadius - innerRadius) * (value - min) / (max - min);
    }

    return {
      x: cx + r * Math.cos(-angle * RADIAN),
      y: cy + r * Math.sin(-angle * RADIAN)
    }
  },
  /**
   * 获取按角度的刻度
   * @return {Array}
   */
  getAngleTicks () {
    let {startAngle, data, clockWise} = this.props,
        sign = clockWise ? -1 : 1,
        len = data.length,
        angle = perigon / len,
        result = [];

    // 雷达图是根据数据的条数等份圆周角
    for (let i = 0; i < len; i++) {
      result.push({
        angle: startAngle + i * sign * angle,
        value: data[i].name
      });
    }

    return result;
  },

  renderPolygon () {
    let {data, innerRadius, outerRadius} = this.props,
        points = [];

    for (let i = 0, len = data.length; i < len; i++) {
      let {x, y} = this.getVertexCoord(data[i]);

      points.push([x, y]);
    }


    return <polygon fill='green' fillOpacity={0.6} stroke='red' points={points.join(' ')}/>;
  },

  render () {
    let {cx, cy, innerRadius, outerRadius, concentricPathType, data} = this.props;

    if (outerRadius <= 0 || !data || !data.length) {
      return;
    }

    let angleTicks = this.getAngleTicks(),
        radius = this.getGridRadius(),
        angles = angleTicks.map(entry => {
                  return entry.angle;
                });

    return (
      <g className='layer-pie'>
        <PolarGrid
          {...this.props}
          polarAngles={angles}
          polarRadius={radius}/>
        <PolarAngleAxis
          {...this.props}
          ticks={angleTicks}/>
        {this.renderPolygon()}
      </g>
    );
  }
});

export default Pie;
