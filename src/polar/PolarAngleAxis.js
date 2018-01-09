/**
 * @fileOverview Axis of radial direction
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, SCALE_TYPES,
  getPresentationAttributes, filterEventsOfChild } from '../util/ReactUtils';
import Dot from '../shape/Dot';
import Polygon from '../shape/Polygon';
import Text from '../component/Text';
import { polarToCartesian } from '../util/PolarUtils';

const RADIAN = Math.PI / 180;
const eps = 1e-5;

@pureRender
class PolarAngleAxis extends Component {

  static displayName = 'PolarAngleAxis';
  static axisType = 'angleAxis';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    type: PropTypes.oneOf(['number', 'category']),
    angleAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dataKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
    cx: PropTypes.number,
    cy: PropTypes.number,
    radius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    hide: PropTypes.bool,
    scale: PropTypes.oneOfType([PropTypes.oneOf(SCALE_TYPES), PropTypes.func]),

    axisLine: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    axisLineType: PropTypes.oneOf(['polygon', 'circle']),
    tickLine: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    tick: PropTypes.oneOfType([
      PropTypes.bool, PropTypes.func, PropTypes.object, PropTypes.element,
    ]),

    ticks: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.any,
      coordinate: PropTypes.number,
    })),
    stroke: PropTypes.string,
    orientation: PropTypes.oneOf(['inner', 'outer']),
    tickFormatter: PropTypes.func,
    allowDuplicatedCategory: PropTypes.bool,
  };

  static defaultProps = {
    type: 'category',
    angleAxisId: 0,
    scale: 'auto',
    cx: 0,
    cy: 0,
    domain: [0, 'auto'],
    orientation: 'outer',
    axisLine: true,
    tickLine: true,
    tick: true,
    hide: false,
    allowDuplicatedCategory: true,
  };

  /**
   * Calculate the coordinate of line endpoint
   * @param  {Object} data The Data if ticks
   * @return {Object} (x0, y0): The start point of text,
   *                  (x1, y1): The end point close to text,
   *                  (x2, y2): The end point close to axis
   */
  getTickLineCoord(data) {
    const { cx, cy, radius, orientation, tickLine } = this.props;
    const tickLineSize = (tickLine && tickLine.size) || 8;
    const p1 = polarToCartesian(cx, cy, radius, data.coordinate);
    const p2 = polarToCartesian(
      cx, cy,
      radius + (orientation === 'inner' ? -1 : 1) * tickLineSize, data.coordinate
    );

    return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y };
  }
  /**
   * Get the text-anchor of each tick
   * @param  {Object} data Data of ticks
   * @return {String} text-anchor
   */
  getTickTextAnchor(data) {
    const { orientation } = this.props;
    const cos = Math.cos(-data.coordinate * RADIAN);
    let textAnchor;

    if (cos > eps) {
      textAnchor = orientation === 'outer' ? 'start' : 'end';
    } else if (cos < -eps) {
      textAnchor = orientation === 'outer' ? 'end' : 'start';
    } else {
      textAnchor = 'middle';
    }

    return textAnchor;
  }

  renderAxisLine() {
    const { cx, cy, radius, axisLine, axisLineType } = this.props;
    const props = {
      ...getPresentationAttributes(this.props),
      fill: 'none',
      ...getPresentationAttributes(axisLine),
    };

    if (axisLineType === 'circle') {
      return (
        <Dot
          className="recharts-polar-angle-axis-line"
          {...props}
          cx={cx}
          cy={cy}
          r={radius}
        />
      );
    }
    const { ticks } = this.props;
    const points = ticks.map(entry => polarToCartesian(cx, cy, radius, entry.coordinate));

    return <Polygon className="recharts-polar-angle-axis-line" {...props} points={points} />;
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
          className="recharts-polar-angle-axis-tick-value"
        >
          {value}
        </Text>
      );
    }

    return tickItem;
  }

  renderTicks() {
    const { ticks, tick, tickLine, tickFormatter, stroke } = this.props;
    const axisProps = getPresentationAttributes(this.props);
    const customTickProps = getPresentationAttributes(tick);
    const tickLineProps = {
      ...axisProps, fill: 'none', ...getPresentationAttributes(tickLine),
    };

    const items = ticks.map((entry, i) => {
      const lineCoord = this.getTickLineCoord(entry);
      const textAnchor = this.getTickTextAnchor(entry);
      const tickProps = {
        textAnchor,
        ...axisProps,
        stroke: 'none', fill: stroke,
        ...customTickProps,
        index: i, payload: entry,
        x: lineCoord.x2, y: lineCoord.y2,
      };

      return (
        <Layer
          className="recharts-polar-angle-axis-tick"
          key={`tick-${i}`}
          {...filterEventsOfChild(this.props, entry, i)}
        >
          {tickLine && (
            <line
              className="recharts-polar-angle-axis-tick-line"
              {...tickLineProps}
              {...lineCoord}
            />
          )}
          {tick && this.renderTickItem(
            tick, tickProps, tickFormatter ? tickFormatter(entry.value) : entry.value
          )}
        </Layer>
      );
    });

    return <Layer className="recharts-polar-angle-axis-ticks">{items}</Layer>;
  }

  render() {
    const { ticks, radius, axisLine } = this.props;

    if (radius <= 0 || !ticks || !ticks.length) { return null; }

    return (
      <Layer className="recharts-polar-angle-axis">
        {axisLine && this.renderAxisLine()}
        {this.renderTicks()}
      </Layer>
    );
  }
}

export default PolarAngleAxis;
