/**
 * @fileOverview The axis of polar coordinate system
 */
import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import Layer from '../container/Layer';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';
import { polarToCartesian } from '../util/PolarUtils';

@pureRender
class PolarRadiusAxis extends Component {

  static displayName = 'PolarRadiusAxis';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    cx: PropTypes.number,
    cy: PropTypes.number,
    hide: PropTypes.bool,

    angle: PropTypes.number,
    tickCount: PropTypes.number,
    ticks: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.any,
      radius: PropTypes.value,
    })),
    orientation: PropTypes.oneOf(['left', 'right', 'middle']),
    axisLine: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    label: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
      PropTypes.element,
    ]),
    stroke: PropTypes.string,
    tickFormatter: PropTypes.func,
    domain: PropTypes.array,
  };

  static defaultProps = {
    cx: 0,
    cy: 0,
    angle: 0,
    orientation: 'right',
    stroke: '#ccc',
    axisLine: true,
    label: true,
    tickCount: 5,
  };

  /**
   * Calculate the coordinate of tick
   * @param  {Object} radius The data of a simple tick
   * @return {Object} (x, y)
   */
  getTickValueCoord({ radius }) {
    const { angle, cx, cy } = this.props;

    return polarToCartesian(cx, cy, radius, angle);
  }

  getTickTextAnchor() {
    const { orientation } = this.props;
    let textAnchor;

    switch (orientation) {
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

  renderAxisLine() {
    const { cx, cy, angle, ticks, axisLine } = this.props;
    const extent = ticks.reduce((result, entry) => [
      Math.min(result[0], entry.radius),
      Math.max(result[1], entry.radius),
    ], [Infinity, -Infinity]);
    const point0 = polarToCartesian(cx, cy, extent[0], angle);
    const point1 = polarToCartesian(cx, cy, extent[1], angle);

    const props = {
      ...getPresentationAttributes(this.props),
      fill: 'none',
      ...getPresentationAttributes(axisLine),
      x1: point0.x,
      y1: point0.y,
      x2: point1.x,
      y2: point1.y,
    };

    return <line className="recharts-polar-radius-axis-line" {...props}/>;
  }

  renderTicks() {
    const { ticks, label, angle, tickFormatter, stroke } = this.props;
    const textAnchor = this.getTickTextAnchor();
    const axisProps = getPresentationAttributes(this.props);
    const customLabelProps = getPresentationAttributes(label);
    const isLabelElement = React.isValidElement(label);

    const items = ticks.map((entry, i) => {
      const coord = this.getTickValueCoord(entry);
      const labelProps = {
        textAnchor,
        transform: `rotate(${90 - angle}, ${coord.x}, ${coord.y})`,
        ...axisProps,
        stroke: 'none', fill: stroke,
        ...customLabelProps,
        index: i, payload: entry,
        ...coord,
      };

      return (
        <g className="recharts-polar-radius-axis-tick" key={'tick-' + i}>
          {
            isLabelElement ? React.cloneElement(label, labelProps) : (
              <text {...labelProps} className="recharts-polar-radius-axis-tick-value">
                {tickFormatter ? tickFormatter(entry.value) : entry.value}
              </text>
            )
          }
        </g>
      );
    });

    return <g className="recharts-polar-radius-axis-ticks">{items}</g>;
  }

  render() {
    const { ticks, axisLine, label } = this.props;

    if (!ticks || !ticks.length) {
      return null;
    }

    return (
      <g className="recharts-polar-radius-axis">
        {axisLine && this.renderAxisLine()}
        {label && this.renderTicks()}
      </g>
    );
  }
}

export default PolarRadiusAxis;
