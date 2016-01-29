/**
 * @fileOverview The axis of polar coordinate system
 * @author xile611
 * @Date 2015-08-28
 */
import React, { PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

const RADIAN = Math.PI / 180;

@pureRender
class PolarRadiusAxis extends React.Component {

  static displayName = 'PolarRadiusAxis';

  static propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number,
    startAngle: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    clockWise: PropTypes.bool,

    angle: PropTypes.number,
    polarRadius: PropTypes.arrayOf(PropTypes.number),
    orient: PropTypes.oneOf(['left', 'right', 'middle']),

    fill: PropTypes.string,
    fontSize: PropTypes.number,
  };

  static defaultProps = {
    orient: 'middle',
    fill: '#ccc',
    fontSize: 12,
  };

  constructor(props) {
    super(props);
  }
  /**
   * Calculate the coordinate of tick
   * @param  {Object} data The data of a simple tick
   * @return {Object} (x, y)
   */
  getTickValueCoord(data) {
    const { angle, cx, cy } = this.props;
    const sin = Math.sin(-angle * RADIAN);
    const cos = Math.cos(-angle * RADIAN);

    return {
      x: cx + data * cos,
      y: cy + data * sin,
    };
  }

  getTickTextAnchor() {
    const { orient } = this.props;
    let textAnchor;

    switch (orient) {
      case 'left':
        textAnchor = 'end';
        break;
      case 'right':
        textAnchor = 'start';
        break;
      default:
        textAnchor = 'middle';
        break;
    }

    return textAnchor;
  }

  renderTicks() {
    const { polarRadius, angle, fill, fontSize } = this.props;
    const textAnchor = this.getTickTextAnchor();

    return (
      <g className="axis-ticks">
        {
          polarRadius.map((v, i) => {
            const coord = this.getTickValueCoord(v);

            return (
              <text
                key={'tick-' + i}
                x={coord.x}
                y={coord.y}
                textAnchor={textAnchor}
                transform={`rotate(${90 - angle}, ${coord.x}, ${coord.y})`}
                className="tick-value"
                fill={fill}
                fontSize={fontSize}
              >{Math.floor(v)}</text>
            );
          })
        }
      </g>
    );
  }

  render() {
    const { polarRadius } = this.props;

    if (!polarRadius || !polarRadius.length) {
      return null;
    }

    return (
      <g className="layer-axis layer-polar-radius-axis">
        {this.renderTicks()}
      </g>
    );
  }
}

export default PolarRadiusAxis;
