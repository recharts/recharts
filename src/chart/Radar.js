import React, { PropTypes } from 'react';

import PolarGrid from '../component/PolarGrid';
import PolarAngleAxis from '../component/PolarAngleAxis';
import pureRender from 'pure-render-decorator';

const perigon = 360;
const RADIAN = Math.PI / 180;

@pureRender
class Radar extends React.Component {

  static displayName = 'Radar';

  static propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number,
    startAngle: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    clockWise: PropTypes.bool,
    concentricPathType: PropTypes.oneOf(['polygon', 'circle']),
    gridNumber: PropTypes.number,
    data: PropTypes.array,
    className: PropTypes.string,
  };

  static defaultProps = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    clockWise: true,
    gridNumber: 2,
    data: [],
  };

  constructor(props) {
    super(props);
  }
  /**
   * Calculate the radius of grid
   * @return {Array} The radius of grid
   */
  getGridRadius() {
    const { gridNumber } = this.props;
    let { innerRadius, outerRadius } = this.props;
    const result = [];

    if (innerRadius === outerRadius) {
      return result;
    }

    if (innerRadius > outerRadius) {
      [innerRadius, outerRadius] = [outerRadius, innerRadius];
    }

    // generate grid of same gap
    const step = (outerRadius - innerRadius) / gridNumber;

    for (let i = 0; i < gridNumber; i++) {
      if (i === 0 && innerRadius > 0) {
        result.push(innerRadius);
      }

      result.push(innerRadius + step * (i + 1));
    }

    return result;
  }
  /**
   * Get the coordinate of a vertex
   * @param {Object} data The data of a point
   * @return {Object} {x: 'abscissa', y: 'ordinate'}
   */
  getVertexCoord(data) {
    const { min, max, value, angle } = data;
    const { cx, cy, innerRadius, outerRadius } = this.props;
    let r;

    if (min === max) {
      r = outerRadius;
    } else {
      r = innerRadius + (outerRadius - innerRadius) * (value - min) / (max - min);
    }

    return {
      x: cx + r * Math.cos(-angle * RADIAN),
      y: cy + r * Math.sin(-angle * RADIAN),
    };
  }
  /**
   * Get the tick of each angle
   * @return {Array} The tick of each angle
   */
  getAngleTicks() {
    const { startAngle, data, clockWise } = this.props;
    const sign = clockWise ? -1 : 1;
    const len = data.length;
    const angle = perigon / len;
    const result = [];

    // divide perigon equally
    for (let i = 0; i < len; i++) {
      result.push({
        angle: startAngle + i * sign * angle,
        value: data[i].name,
      });
    }

    return result;
  }

  renderPolygon() {
    const { data } = this.props;
    const points = [];

    for (let i = 0, len = data.length; i < len; i++) {
      const { x, y } = this.getVertexCoord(data[i]);

      points.push([x, y]);
    }


    return <polygon fill="green" fillOpacity={0.6} stroke="red" points={points.join(' ')}/>;
  }

  render() {
    const { outerRadius, data } = this.props;

    if (outerRadius <= 0 || !data || !data.length) {
      return null;
    }
    const angleTicks = this.getAngleTicks();
    const radius = this.getGridRadius();
    const angles = angleTicks.map(entry => entry.angle);

    return (
      <g className="layer-radar">
        <PolarGrid
          {...this.props}
          polarAngles={angles}
          polarRadius={radius}
        />
        <PolarAngleAxis
          {...this.props}
          ticks={angleTicks}
        />
        {this.renderPolygon()}
      </g>
    );
  }
}

export default Radar;
