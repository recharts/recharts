/**
 * @fileOverview The axis of polar coordinate system
 * @author xile611
 * @Date 2015-08-28
 */
import React, { PropTypes } from 'react';
import createFragment from 'react-addons-create-fragment';
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
    ticks: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.any,
      radius: PropTypes.number,
    })),
    tickValueFormat: PropTypes.func,
    orient: PropTypes.oneOf(['bottom', 'top']),
  };

  static defaultProps = {
    orient: 'bottom',
    ticks: [],
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
      x: cx + data.radius * cos,
      y: cy + data.radius * sin,
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
    const { ticks, angle } = this.props;
    const items = {};
    const textAnchor = this.getTickTextAnchor();

    ticks.reduce((result, entry, i) => {
      const coord = this.getTickValueCoord(entry);

      items['tick-' + i] = (
        <g className="axis-tick" key={'tick-' + i}>
          <text
            x={coord.x}
            y={coord.y}
            textAnchor={textAnchor}
            transform={`rotate(${90 - angle}, ${coord.x}, ${coord.y})`}
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
      <g className="layer-axis layer-polar-radius-axis">
        {this.renderTicks()}
      </g>
    );
  }
}

export default PolarRadiusAxis;
