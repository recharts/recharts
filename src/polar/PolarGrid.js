/**
 * @fileOverview Polar Grid
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';
import { polarToCartesian } from '../util/PolarUtils';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';

@pureRender
class PolarGrid extends Component {

  static displayName = 'PolarGrid';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    cx: PropTypes.number,
    cy: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,

    polarAngles: PropTypes.arrayOf(PropTypes.number),
    polarRadius: PropTypes.arrayOf(PropTypes.number),
    gridType: PropTypes.oneOf(['polygon', 'circle']),
  };

  static defaultProps = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    gridType: 'polygon',
  };

  constructor(props) {
    super(props);

    if (!this.clipId) {
      this.clipId = `rechartsPolarGridBgClip${Date.now()}`;
    }
  }

  getPolygonPath(radius) {
    const { cx, cy, polarAngles } = this.props;

    let path = '';

    polarAngles.forEach((angle, i) => {
      const point = polarToCartesian(cx, cy, radius, angle);

      if (i) {
        path += `L ${point.x},${point.y}`;
      } else {
        path += `M ${point.x},${point.y}`;
      }
    });
    path += 'Z';

    return path;
  }
  /**
   * Draw axis of radial line
   * @return {[type]} The lines
   */
  renderPolarAngles() {
    const { cx, cy, innerRadius, outerRadius, polarAngles } = this.props;

    if (!polarAngles || !polarAngles.length) { return null; }
    const props = {
      stroke: '#ccc',
      ...getPresentationAttributes(this.props),
    };

    return (
      <g className="recharts-polar-grid-angle">
        {
          polarAngles.map((entry, i) => {
            const start = polarToCartesian(cx, cy, innerRadius, entry);
            const end = polarToCartesian(cx, cy, outerRadius, entry);

            return (
              <line
                {...props}
                key={`line-${i}`}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
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
   * @param {Object} extraProps Extra props
   * @return {ReactElement} circle
   */
  renderConcentricCircle(radius, index, extraProps) {
    const { cx, cy } = this.props;
    const props = {
      stroke: '#ccc',
      ...getPresentationAttributes(this.props),
      fill: 'none',
      ...extraProps,
    };

    return (
      <circle
        {...props}
        className="recharts-polar-grid-concentric-circle"
        key={`circle-${index}`}
        cx={cx}
        cy={cy}
        r={radius}
      />
    );
  }
  /**
   * Draw concentric polygons
   * @param {Number} radius     The radius of polygon
   * @param {Number} index      The index of polygon
   * @param {Object} extraProps Extra props
   * @return {ReactElement} polygon
   */
  renderConcentricPolygon(radius, index, extraProps) {
    const props = {
      stroke: '#ccc',
      ...getPresentationAttributes(this.props),
      fill: 'none',
      ...extraProps,
    };

    return (
      <path
        {...props}
        className="recharts-polar-grid-concentric-polygon"
        key={`path-${index}`}
        d={this.getPolygonPath(radius)}
      />
    );
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
