/**
 * @fileOverview The axis of polar coordinate system
 * @author xile611
 * @Date 2015-08-28
 */
import React, { PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import Layer from '../container/Layer';
import ReactUtils, { PRESENTATION_ATTRIBUTES } from '../util/ReactUtils';

const RADIAN = Math.PI / 180;

@pureRender
class PolarRadiusAxis extends React.Component {

  static displayName = 'PolarRadiusAxis';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    cx: PropTypes.number,
    cy: PropTypes.number,

    angle: PropTypes.number,
    ticks: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.any,
      radius: PropTypes.value,
    })),
    orient: PropTypes.oneOf(['left', 'right', 'middle']),
    axisLine: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    label: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
      PropTypes.element,
    ]),
    tickFormatter: PropTypes.func,
  };

  static defaultProps = {
    angle: 0,
    orient: 'right',
    stroke: '#ccc',
    axisLine: true,
    label: true,
  };

  /**
   * Calculate the coordinate of tick
   * @param  {Object} radius The data of a simple tick
   * @return {Object} (x, y)
   */
  getTickValueCoord({ radius }) {
    const { angle, cx, cy } = this.props;
    const sin = Math.sin(-angle * RADIAN);
    const cos = Math.cos(-angle * RADIAN);

    return {
      x: cx + radius * cos,
      y: cy + radius * sin,
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

  renderAxisLine() {
    const { cx, cy, angle, ticks, axisLine } = this.props;
    const extent = ticks.reduce((result, entry) => {
      return [
        Math.min(result[0], entry.radius),
        Math.max(result[1], entry.radius),
      ];
    }, [Infinity, -Infinity]);
    const sin = Math.sin(-angle * RADIAN);
    const cos = Math.cos(-angle * RADIAN);

    const props = {
      ...ReactUtils.getPresentationAttributes(this.props),
      fill: 'none',
      ...ReactUtils.getPresentationAttributes(axisLine),
      x1: cx + extent[0] * cos,
      y1: cy + extent[0] * sin,
      x2: cx + extent[1] * cos,
      y2: cy + extent[1] * sin,
    };

    return <line className="recharts-polar-radius-axis-line" {...props}/>;
  }

  renderTicks() {
    const { ticks, label, angle, tickFormatter, stroke } = this.props;
    const textAnchor = this.getTickTextAnchor();
    const axisProps = ReactUtils.getPresentationAttributes(this.props);
    const customLabelProps = ReactUtils.getPresentationAttributes(label);
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
        ...coord
      };

      return (
        <g className="recharts-polar-angle-axis-tick" key={'tick-' + i}>
          {
            isLabelElement ? React.cloneElement(label, labelProps) : (
              <text {...labelProps} className="recharts-polar-radius-axis-tick-value">
                {tickFormatter ? tickFormatter(entry.value) : entry.value}
              </text>
            )
          }
        </g>
      );
    })

    return <g className="recharts-polar-radius-axis-ticks">{items}</g>
  }

  render() {
    const { ticks, axisLine, label } = this.props;

    if (!ticks || !ticks.length) {
      return null;
    }

    return (
      <g className="layer-axis layer-polar-radius-axis">
        {axisLine && this.renderAxisLine()}
        {label && this.renderTicks()}
      </g>
    );
  }
}

export default PolarRadiusAxis;
