import React from 'react';

const RADIAN = Math.PI / 180;

class RadarSecond extends React.Component {

  static displayName = 'RadarSecond';

  static propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number,
    startAngle: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    clockWise: PropTypes.bool,
    // 角度的scale函数
    polarAngleScale: React.PropTypes.func,
    // 径向scale函数
    polarRadiusScale: React.PropTypes.func,
    // 数据，格式为 {value: someValue, name: "数据的名称"}
    data: React.PropTypes.array,
  };

  static defaultProps = {
    // 数据
    data: [],
  };

  constructor(props) {
    super(props);
  }
  /**
   * 计算雷达图中多边形的顶点坐标
   * @return {Array} 多边形的顶点
   */
  getPolygonVertexs() {
    const {data, polarAngleScale, polarRadiusScale} = this.props;

    return data.map((entry, index) => {
      const radius = polarRadiusScale(entry.value);
      const angle = polarAngleScale(index);

      return {
        x: cx + radius * Math.cos(-angle * RADIAN),
        y: cy + radius * Math.sin(-angle * RADIAN),
      };
    });
  }

  renderPolygon() {
    const vertexs = this.getPolygonVertexs;

    return <polygon fill="green" fillOpacity={0.6} stroke="red" points={vertexs.join(' ')}/>;
  }

  render() {
    return (
      <g className="layer-radar">
        {this.renderPolygon()}
      </g>
    );
  }
}

export default RadarSecond;
