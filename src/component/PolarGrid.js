/**
 * @fileOverview Polar Grid
 */
import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

const RADIAN = Math.PI / 180;

@pureRender
class PolarGrid extends Component {

  static displayName = 'PolarGrid';

  static propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    gridCount: PropTypes.number,

    polarAngles: PropTypes.arrayOf(PropTypes.number),
    polarRadius: PropTypes.arrayOf(PropTypes.number),
    gridType: PropTypes.oneOf(['polygon', 'circle']),
  };

  static defaultProps = {
    gridCount: 2,
    gridType: 'circle',
  };

  /**
   * Draw axis of radial line
   * @return {[type]} The lines
   */
  renderPolarAngles() {
    const { cx, cy, innerRadius, outerRadius, polarAngles } = this.props;

    if (!polarAngles || !polarAngles.length) { return null; }

    return (
      <g className="recharts-polar-grid-angle">
        {
          polarAngles.map((entry, i) => {
            const cos = Math.cos(-entry * RADIAN);
            const sin = Math.sin(-entry * RADIAN);
            return (
              <line key={'line-' + i}
                stroke="#ccc"
                x1={cx + cos * innerRadius}
                y1={cy + sin * innerRadius}
                x2={cx + cos * outerRadius}
                y2={cy + sin * outerRadius}
              />
            );
          })
        }
      </g>
    );
  }
  /**
   * Draw concentric circles
   * @param {Number} radius The radius of circle
   * @param {Number} index  The index of circle
   * @return {ReactElement} circle
   */
  renderConcentricCircle(radius, index) {
    const { cx, cy } = this.props;

    return <circle className="recharts-polar-grid-concentric-circle" stroke="#ccc" fill="none" key={'circle-' + index} cx={cx} cy={cy} r={radius}/>;
  }
  /**
   * Draw concentric polygons
   * @param {Number} radius The radius of polygon
   * @param {Number} index  The index of polygon
   * @return {ReactElement} polygon
   */
  renderConcentricPolygon(radius, index) {
    const { cx, cy, polarAngles } = this.props;
    let path = '';

    polarAngles.forEach((angle, i) => {
      if (i) {
        path += `L ${cx + radius * Math.cos(-angle * RADIAN)},${cy + radius * Math.sin(-angle * RADIAN)}`;
      } else {
        path += `M ${cx + radius * Math.cos(-angle * RADIAN)},${cy + radius * Math.sin(-angle * RADIAN)}`;
      }
    });

    return <path className="recharts-polar-grid-concentric-polygon" stroke="#ccc" fill="none" key={'path-' + index} d={path + 'Z'}/>;
  }

  /**
   * Draw concentric axis
   * @return {ReactElement} Concentric axis
   * @todo Optimize the name
   */
  renderConcentricPath() {
    const { polarRadius, gridType } = this.props;

    if (!polarRadius || !polarRadius.length) { return null; }

    return (
      <g className="recharts-polar-grid-concentric">
        {
          polarRadius.map((entry, i) => (
            gridType === 'circle' ?
              this.renderConcentricCircle(entry, i) :
              this.renderConcentricPolygon(entry, i)
          ))
        }
      </g>
    );
  }

  render() {
    const { outerRadius } = this.props;

    if (outerRadius <= 0) { return null; }

    return (
      <g className="recharts-polar-grid">
        {this.renderPolarAngles()}
        {this.renderConcentricPath()}
      </g>
    );
  }
}

export default PolarGrid;
