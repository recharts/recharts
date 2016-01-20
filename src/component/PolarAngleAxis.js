/**
 * @fileOverview Axis of radial direction
 * @author xile611
 * @Date 2015-08-28
 */
import React, { PropTypes } from 'react';
import createFragment from 'react-addons-create-fragment';
import pureRender from 'pure-render-decorator';

const RADIAN = Math.PI / 180;
const eps = 1e-5;
const offset = 8;

@pureRender
class PolarAngleAxis extends React.Component {

  static displayName = 'PolarAngleAxis';

  static propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number,
    startAngle: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    clockWise: PropTypes.bool,
    ticks: PropTypes.array,
    tickSize: PropTypes.number,
    tickValueFormat: PropTypes.func,
    orient: PropTypes.oneOf(['inner', 'outer']),
    concentricPathType: PropTypes.oneOf(['polygon', 'circle']),
  };

  static defaultProps = {
    // The orientation of axis
    orient: 'inner',
    // The data of ticks
    ticks: [],
    // The radius of tick
    tickSize: 6,
  };

  constructor(props) {
    super(props);
  }
  /**
   * Calculate the coordinate of line endpoint
   * @param  {Object} data The Data if ticks
   * @return {Object} (x0, y0): The start point of text, (x1, y1): The end point close to text, (x2, y2): The end point close to axis
   */
  getTickLineCoord(data) {
    const { cx, cy, outerRadius, orient, tickSize } = this.props;
    const sin = Math.sin(-data.angle * RADIAN);
    const cos = Math.cos(-data.angle * RADIAN);
    let x0;
    let x1;
    let x2;
    let y0;
    let y1;
    let y2;

    const finalTickSize = data.tickSize || tickSize || 6;

    x2 = cx + outerRadius * cos;
    y2 = cy + outerRadius * sin;

    switch (orient) {
      case 'inner':
        x0 = cx + (outerRadius - finalTickSize - offset) * cos;
        y0 = cy + (outerRadius - finalTickSize - offset) * sin;

        x1 = cx + (outerRadius - finalTickSize) * cos;
        y1 = cy + (outerRadius - finalTickSize) * sin;
        break;
      default:
        x0 = cx + (outerRadius + finalTickSize + offset) * cos;
        y0 = cy + (outerRadius + finalTickSize + offset) * sin;

        x1 = cx + (outerRadius + finalTickSize) * cos;
        y1 = cy + (outerRadius + finalTickSize) * sin;
        break;
    }

    return { x0, y0, x1, y1, x2, y2 };
  }
  /**
   * Get the text-anchor of each tick
   * @param  {Object} data Data of ticks
   * @return {String} text-anchor
   */
  getTickTextAnchor(data) {
    const { orient } = this.props;
    const cos = Math.cos(-data.angle * RADIAN);
    let textAnchor;

    if (cos > eps) {
      textAnchor = orient === 'outer' ? 'start' : 'end';
    } else if (cos < -eps) {
      textAnchor = orient === 'outer' ? 'end' : 'start';
    } else {
      textAnchor = 'middle';
    }

    return textAnchor;
  }
  /**
   * Draw ticks
   * @return {SVGElement} Ticks group
   */
  renderTicks() {
    const { ticks } = this.props;

    if (!ticks || !ticks.length) { return null; }

    const items = {};

    ticks.reduce((result, entry, i) => {
      const lineCoord = this.getTickLineCoord(entry);
      const textAnchor = this.getTickTextAnchor(entry);

      items['tick-' + i] = (
        <g className="axis-tick" key={'tick-' + i}>
          <line
            className="tick-line"
            stroke="#ff7300"
            x1={lineCoord.x1}
            y1={lineCoord.y1}
            x2={lineCoord.x2}
            y2={lineCoord.y2}
          />
          <text
            x={lineCoord.x0}
            y={lineCoord.y0}
            textAnchor={textAnchor}
            className="tick-value"
          >
            {entry.value}
          </text>
        </g>
      );
    }, items);

    return (
      <g className="axis-ticks">
        {createFragment(items)}
      </g>
    );
  }

  render() {
    const { ticks } = this.props;

    if (!ticks || !ticks.length) {
      return null;
    }

    return (
      <g className="layer-axis layer-polar-angle-axis">
        {this.renderTicks()}
      </g>
    );
  }
}

export default PolarAngleAxis;
