/**
 * @fileOverview The axis of polar coordinate system
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import pureRender from '../util/PureRender';
import Text from '../component/Text';
import Label from '../component/Label';
import Layer from '../container/Layer';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, getPresentationAttributes,
  filterEventsOfChild } from '../util/ReactUtils';
import { polarToCartesian } from '../util/PolarUtils';

@pureRender
class PolarRadiusAxis extends Component {

  static displayName = 'PolarRadiusAxis';
  static axisType = 'radiusAxis';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    type: PropTypes.oneOf(['number', 'category']),
    cx: PropTypes.number,
    cy: PropTypes.number,
    hide: PropTypes.bool,
    radiusAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    angle: PropTypes.number,
    tickCount: PropTypes.number,
    ticks: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.any,
      coordinate: PropTypes.number,
    })),
    orientation: PropTypes.oneOf(['left', 'right', 'middle']),
    axisLine: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    tick: PropTypes.oneOfType([
      PropTypes.bool, PropTypes.object, PropTypes.element, PropTypes.func,
    ]),
    stroke: PropTypes.string,
    tickFormatter: PropTypes.func,
    domain: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['auto', 'dataMin', 'dataMax']),
    ])),
    scale: PropTypes.oneOfType([
      PropTypes.oneOf(['auto', 'linear', 'pow', 'sqrt', 'log', 'identity', 'time',
        'band', 'point', 'ordinal', 'quantile', 'quantize', 'utcTime', 'sequential',
        'threshold']),
      PropTypes.func,
    ]),
    allowDataOverflow: PropTypes.bool,
  };

  static defaultProps = {
    type: 'number',
    radiusAxisId: 0,
    cx: 0,
    cy: 0,
    angle: 0,
    orientation: 'right',
    stroke: '#ccc',
    axisLine: true,
    tick: true,
    tickCount: 5,
    domain: [0, 'auto'],
    allowDataOverflow: false,
    scale: 'auto',
  };

  /**
   * Calculate the coordinate of tick
   * @param  {Number} coordinate The radius of tick
   * @return {Object} (x, y)
   */
  getTickValueCoord({ coordinate }) {
    const { angle, cx, cy } = this.props;

    return polarToCartesian(cx, cy, coordinate, angle);
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

  getViewBox() {
    const { cx, cy, angle, ticks } = this.props;
    const maxRadiusTick = _.maxBy(ticks, entry => (entry.coordinate || 0));
    const minRadiusTick = _.minBy(ticks, entry => (entry.coordinate || 0));

    return {
      cx, cy,
      startAngle: angle,
      endAngle: angle,
      innerRadius: minRadiusTick.coordinate || 0,
      outerRadius: maxRadiusTick.coordinate || 0,
    };
  }

  renderAxisLine() {
    const { cx, cy, angle, ticks, axisLine, ...others } = this.props;
    const extent = ticks.reduce((result, entry) => [
      Math.min(result[0], entry.coordinate),
      Math.max(result[1], entry.coordinate),
    ], [Infinity, -Infinity]);
    const point0 = polarToCartesian(cx, cy, extent[0], angle);
    const point1 = polarToCartesian(cx, cy, extent[1], angle);

    const props = {
      ...getPresentationAttributes(others),
      fill: 'none',
      ...getPresentationAttributes(axisLine),
      x1: point0.x,
      y1: point0.y,
      x2: point1.x,
      y2: point1.y,
    };

    return <line className="recharts-polar-radius-axis-line" {...props} />;
  }

  renderTickItem(option, props, value) {
    let tickItem;

    if (React.isValidElement(option)) {
      tickItem = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      tickItem = option(props);
    } else {
      tickItem = (
        <Text
          {...props}
          className="recharts-polar-radius-axis-tick-value"
        >
          {value}
        </Text>
      );
    }

    return tickItem;
  }

  renderTicks() {
    const { ticks, tick, angle, tickFormatter, stroke, ...others } = this.props;
    const textAnchor = this.getTickTextAnchor();
    const axisProps = getPresentationAttributes(others);
    const customTickProps = getPresentationAttributes(tick);

    const items = ticks.map((entry, i) => {
      const coord = this.getTickValueCoord(entry);
      const tickProps = {
        textAnchor,
        transform: `rotate(${90 - angle}, ${coord.x}, ${coord.y})`,
        ...axisProps,
        stroke: 'none', fill: stroke,
        ...customTickProps,
        index: i,
        ...coord,
        payload: entry,
      };

      return (
        <Layer
          className="recharts-polar-radius-axis-tick"
          key={`tick-${i}`}
          {...filterEventsOfChild(this.props, entry, i)}
        >
          {this.renderTickItem(
            tick, tickProps, tickFormatter ? tickFormatter(entry.value) : entry.value
          )}
        </Layer>
      );
    });

    return <Layer className="recharts-polar-radius-axis-ticks">{items}</Layer>;
  }

  render() {
    const { ticks, axisLine, tick } = this.props;

    if (!ticks || !ticks.length) { return null; }

    return (
      <Layer className="recharts-polar-radius-axis">
        {axisLine && this.renderAxisLine()}
        {tick && this.renderTicks()}
        {Label.renderCallByParent(this.props, this.getViewBox())}
      </Layer>
    );
  }
}

export default PolarRadiusAxis;
