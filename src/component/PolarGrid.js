import React, { PropTypes } from 'react';
import createFragment from 'react-addons-create-fragment';
import pureRender from 'pure-render-decorator';

const RADIAN = Math.PI / 180;

@pureRender
class PolarGrid extends React.Component {

  static displayName = 'PolarGrid';

  static propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number,
    startAngle: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    clockWise: PropTypes.bool,
    polarAngles: PropTypes.arrayOf(PropTypes.number),
    polarRadius: PropTypes.arrayOf(PropTypes.number),
    concentricPathType: PropTypes.oneOf(['polygon', 'circle']),
  };

  static defaultProps = {
    cx: 0,
    cy: 0,
    startAngle: 0,
    innerRadius: 0,
    outerRadius: 0,
    clockWise: true,
    // The angles of axis
    polarAngles: [],
    // The radius of axis
    polarRadius: [],
    // The type of concentric axis
    concentricPathType: 'polygon',
  };

  constructor(props) {
    super(props);
  }
  /**
   * Draw axis of radial line
   * @return {[type]} The lines
   */
  renderPolarAngles() {
    const { cx, cy, innerRadius, outerRadius, polarAngles } = this.props;

    if (!polarAngles || !polarAngles.length) { return null; }

    const items = {};

    polarAngles.reduce((result, entry, i) => {
      const cos = Math.cos(-entry * RADIAN);
      const sin = Math.sin(-entry * RADIAN);

      items['angle-' + i] = (
        <line key={'line-' + i}
          stroke="#000"
          x1={cx + cos * innerRadius}
          y1={cy + sin * innerRadius}
          x2={cx + cos * outerRadius}
          y2={cy + sin * outerRadius}
        />
      );
    }, items);

    return (
      <g className="layer-grid-angle">
        {createFragment(items)}
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

    return <circle className="concentric-circle" stroke="#000" fill="none" key={'circle-' + index} cx={cx} cy={cy} r={radius}/>;
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

    return <path className="concentric-polygon" stroke="#000" fill="none" key={'path-' + index} d={path + 'Z'}/>;
  }

  /**
   * Draw concentric axis
   * @return {ReactElement} Concentric axis
   * @todo Optimize the name
   */
  renderConcentricPath() {
    const { polarRadius, concentricPathType } = this.props;

    if (!polarRadius || !polarRadius.length) { return null; }

    const items = polarRadius.reduce((result, entry, i) => {
      return {
        ...result,
        ['path-' + i]: concentricPathType === 'circle' ?
                 this.renderConcentricCircle(entry, i) :
                 this.renderConcentricPolygon(entry, i),
      };
    }, {});

    return (
      <g className="layer-grid-concentric">
        {createFragment(items)}
      </g>
    );
  }

  render() {
    const { outerRadius } = this.props;

    if (outerRadius <= 0) {
      return null;
    }

    return (
      <g className="layer-grid layer-polar-grid">
        {this.renderPolarAngles()}
        {this.renderConcentricPath()}
      </g>
    );
  }
}

export default PolarGrid;
