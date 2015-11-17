import React from 'react';
import PolarCoordinateMixin from '../mixin/PolarCoordinateMixin';

const RADIAN = Math.PI / 180;

const Radar = React.createClass({
  mixins: [PolarCoordinateMixin],

  propTypes: {
    // 角度的scale函数
    polarAngleScale: React.PropTypes.func,
    // 径向scale函数
    polarRadiusScale: React.PropTypes.func,
    // 数据，格式为 {value: someValue, name: "数据的名称"}
    data: React.PropTypes.array
  },

  getDefaultProps () {
    return {
      // 数据
      data: []
    };
  },
  /**
   * 计算雷达图中多边形的顶点坐标
   * @return {Array}
   */
  getPolygonVertexs () {
    let {data, polarAngleScale, polarRadiusScale} = this.props,
        vertexs = data.map((entry, index) => {
          let radius = polarRadiusScale(entry.value),
              angle = polarAngleScale(index);

          return {
            x: cx + radius * Math.cos(-angle * RADIAN),
            y: cy + radius * Math.sin(-angle * RADIAN)
          }
        });

    return vertexs;
  },

  renderPolygon () {
    let vertexs = this.getPolygonVertexs

    return <polygon fill='green' fillOpacity={0.6} stroke='red' points={vertexs.join(' ')}/>;
  },

  render () {
    return (
      <g className='layer-radar'>
        {this.renderPolygon()}
      </g>
    );
  }
});

export default Radar;
