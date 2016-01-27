import React, { PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

const RADIAN = Math.PI / 180;

@pureRender
class RadarSecond extends React.Component {

  static displayName = 'RadarSecond';

  static propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number,
    startAngle: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    clockWise: PropTypes.bool,
    // The scale function of angle
    polarAngleScale: React.PropTypes.func,
    // The scale function of polar diameter
    polarRadiusScale: React.PropTypes.func,
    data: React.PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number,
      name: PropTypes.any,
    })),
  };

  static defaultProps = {
    data: [],
  };

  /**
   * Calculate the coordinate of vertexes
   * @return {Array} Array of coordinate
   */
  getPolygonVertexs() {
    const { cx, cy, data, polarAngleScale, polarRadiusScale } = this.props;

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
