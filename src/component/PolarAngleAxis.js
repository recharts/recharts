/**
 * @fileOverview Axis of radial direction
 * @author xile611
 * @Date 2015-08-28
 */
import React, { PropTypes } from 'react';
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
    orient: PropTypes.oneOf(['inner', 'outer']),

    fill: PropTypes.string,
    fontSize: PropTypes.number,
  };

  static defaultProps = {
    orient: 'outer',
    dataKey: 'name',
    fill: '#999',
    fontSize: 14,
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
    const { cx, cy, outerRadius, orient } = this.props;
    const sin = Math.sin(-data.angle * RADIAN);
    const cos = Math.cos(-data.angle * RADIAN);
    let x0;
    let x1;
    let y0;
    let y1;

    switch (orient) {
      case 'inner':
        x0 = cx + (outerRadius - offset) * cos;
        y0 = cy + (outerRadius - offset) * sin;

        x1 = cx + (outerRadius) * cos;
        y1 = cy + (outerRadius) * sin;
        break;
      default:
        x0 = cx + (outerRadius + offset) * cos;
        y0 = cy + (outerRadius + offset) * sin;

        x1 = cx + (outerRadius) * cos;
        y1 = cy + (outerRadius) * sin;
        break;
    }

    return { x0, y0, x1, y1 };
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

  render() {
    const { ticks, fill, fontSize } = this.props;

    if (!ticks || !ticks.length) {
      return null;
    }

    return (
      <g className="layer-axis layer-polar-angle-axis">
        {
          ticks.map((v, i) => {
            const lineCoord = this.getTickLineCoord(v);
            const textAnchor = this.getTickTextAnchor(v);

            return (
              <g className="axis-tick" key={'tick-' + i}>
                <text
                  x={lineCoord.x0}
                  y={lineCoord.y0 + 7}
                  textAnchor={textAnchor}
                  fill={fill}
                  fontSize={fontSize}
                >
                  {v.name}
                </text>
              </g>
            );
          })
        }
      </g>
    );
  }
}

export default PolarAngleAxis;
