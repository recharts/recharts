/**
 * @fileOverview Cartesian Axis
 */
import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { shallowEqual } from '../util/PureRender';
import { getStringSize } from '../util/DOMUtils';
import Layer from '../container/Layer';
import Text from '../component/Text';
import { isSsr, PRESENTATION_ATTRIBUTES,
  getPresentationAttributes } from '../util/ReactUtils';
import { isNumber, isNumOrStr } from '../util/DataUtils';

class CartesianAxis extends Component {

  static displayName = 'CartesianAxis';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    orientation: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    // The viewBox of svg
    viewBox: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    label: PropTypes.oneOfType([
      PropTypes.number, PropTypes.string, PropTypes.func, PropTypes.element,
    ]),
    tick: PropTypes.oneOfType([
      PropTypes.bool, PropTypes.func, PropTypes.object, PropTypes.element,
    ]),
    axisLine: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    tickLine: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

    minLabelGap: PropTypes.number,
    ticks: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any,
        coordinate: PropTypes.value,
      })),
      PropTypes.arrayOf(PropTypes.number),
    ]),
    tickSize: PropTypes.number,
    stroke: PropTypes.string,
    tickFormatter: PropTypes.func,
    ticksGenerator: PropTypes.func,
    interval: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  static defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    viewBox: { x: 0, y: 0, width: 0, height: 0 },
    // The orientation of axis
    orientation: 'bottom',
    // The ticks
    ticks: [],

    stroke: '#666',
    tickLine: true,
    axisLine: true,
    tick: true,

    minTickGap: 5,
    // The width or height of tick
    tickSize: 6,
    interval: 'auto',
  };

  static getTicks(props) {
    const { ticks, viewBox, minTickGap, orientation, interval, tickFormatter } = props;

    if (!ticks || !ticks.length) { return []; }

    return (isNumber(interval) || isSsr())
        ? CartesianAxis.getNumberIntervalTicks(ticks, isNumber(interval) ? interval : 0)
        : CartesianAxis.getAutoIntervalTicks(
          ticks, tickFormatter, viewBox, orientation, minTickGap
        );
  }

  static getNumberIntervalTicks(ticks, interval) {
    return ticks.filter((entry, i) => (i % (interval + 1) === 0));
  }

  static getAutoIntervalTicks(ticks, tickFormatter, viewBox, orientation, minTickGap) {
    const { x, y, width, height } = viewBox;
    const sizeKey = (orientation === 'top' || orientation === 'bottom') ? 'width' : 'height';
    const result = (ticks || []).slice();
    const len = result.length;
    const sign = len >= 2 ? Math.sign(result[1].coordinate - result[0].coordinate) : 1;

    let start, end;

    if (sign === 1) {
      start = sizeKey === 'width' ? x : y;
      end = sizeKey === 'width' ? x + width : y + height;
    } else {
      start = sizeKey === 'width' ? x + width : y + height;
      end = sizeKey === 'width' ? x : y;
    }
    const step = Math.ceil(len / 2);

    for (let i = 0; i < step; i++) {
      // the middle tick
      if (len % 2 && i === len - 1 - i) {
        const middle = result[i];
        const content = _.isFunction(tickFormatter) ? tickFormatter(middle.value) : middle.value;
        const size = getStringSize(content)[sizeKey];
        const isShow = (sign * (middle.coordinate - sign * size / 2 - start) >= 0) &&
          (sign * (middle.coordinate + sign * size / 2 - end) <= 0);

        if (isShow) {
          result[i] = { ...result[i], tickCoord: middle.coordinate, isShow };
        }
      } else {
        let head = result[i];
        const headContent = _.isFunction(tickFormatter) ? tickFormatter(head.value) : head.value;
        const headSize = getStringSize(headContent)[sizeKey];
        let tail = result[len - 1 - i];
        const tailContent = _.isFunction(tickFormatter) ? tickFormatter(tail.value) : tail.value;
        const tailSize = getStringSize(tailContent)[sizeKey];

        if (i === 0) {
          const tailGap = sign * (tail.coordinate + sign * tailSize / 2 - end);
          result[len - 1 - i] = tail = {
            ...tail,
            tickCoord: tailGap > 0 ? tail.coordinate - tailGap * sign : tail.coordinate,
          };

          const headGap = sign * (head.coordinate - sign * headSize / 2 - start);
          result[i] = head = {
            ...head,
            tickCoord: headGap < 0 ? head.coordinate - headGap * sign : head.coordinate,
          };
        } else {
          result[i] = head = { ...head, tickCoord: head.coordinate };
          result[len - 1 - i] = tail = { ...tail, tickCoord: tail.coordinate };
        }

        const isTailShow = (sign * (tail.tickCoord - sign * tailSize / 2 - start) >= 0) &&
          (sign * (tail.tickCoord + sign * tailSize / 2 - end)) <= 0;

        if (isTailShow) {
          end = tail.tickCoord - sign * (tailSize / 2 + minTickGap);
          result[len - 1 - i] = { ...tail, isShow: true };
        }

        const isHeadShow = (sign * (head.tickCoord - sign * headSize / 2 - start) >= 0) &&
          (sign * (head.tickCoord + sign * headSize / 2 - end)) <= 0;

        if (isHeadShow) {
          start = head.tickCoord + sign * (headSize / 2 + minTickGap);
          result[i] = { ...head, isShow: true };
        }
      }
    }

    return result.filter(entry => entry.isShow);
  }

  shouldComponentUpdate({ viewBox, ...restProps }, state) {
    // props.viewBox is sometimes generated every time -
    // check that specially as object equality is likely to fail
    const { viewBox: viewBoxOld, ...restPropsOld } = this.props;
    return !shallowEqual(viewBox, viewBoxOld) ||
      !shallowEqual(restProps, restPropsOld) || !shallowEqual(state, this.state);
  }

  /**
   * Calculate the coordinates of endpoints in ticks
   * @param  {Object} data The data of a simple tick
   * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
   *  (x2, y2): The coordinate of endpoint close to axis
   */
  getTickLineCoord(data) {
    const { x, y, width, height, orientation, tickSize } = this.props;
    let x1, x2, y1, y2, tx, ty;

    const finalTickSize = data.tickSize || tickSize;
    const tickCoord = isNumber(data.tickCoord) ? data.tickCoord : data.coordinate;

    switch (orientation) {
      case 'top':
        x1 = x2 = data.coordinate;
        y1 = ty = y + height - finalTickSize;
        y2 = y + height;
        tx = tickCoord;
        break;
      case 'left':
        y1 = y2 = data.coordinate;
        x1 = tx = x + width - finalTickSize;
        x2 = x + width;
        ty = tickCoord;
        break;
      case 'right':
        y1 = y2 = data.coordinate;
        x1 = tx = x + finalTickSize;
        x2 = x;
        ty = tickCoord;
        break;
      default:
        x1 = x2 = data.coordinate;
        y1 = ty = y + finalTickSize;
        y2 = y;
        tx = tickCoord;
        break;
    }

    return { line: { x1, y1, x2, y2 }, tick: { x: tx, y: ty } };
  }

  getBaseline() {
    const { orientation } = this.props;
    let baseline;

    switch (orientation) {
      case 'top':
        baseline = 'auto';
        break;
      case 'bottom':
        baseline = 'text-before-edge';
        break;
      default:
        baseline = 'central';
        break;
    }

    return baseline;
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

  getTickVerticalAnchor() {
    const { orientation } = this.props;
    let verticalAnchor = 'end';

    switch (orientation) {
      case 'left':
      case 'right':
        verticalAnchor = 'middle';
        break;
      case 'top':
        verticalAnchor = 'end';
        break;
      default:
        verticalAnchor = 'start';
        break;
    }

    return verticalAnchor;
  }

  getLabelProps() {
    const { x, y, width, height, orientation } = this.props;

    switch (orientation) {
      case 'left':
        return { x: x + width, y: y - 6, textAnchor: 'middle' };
      case 'right':
        return { x, y: y - 6, textAnchor: 'middle' };
      case 'top':
        return { x: x + width + 6, y: y + height + 6, textAnchor: 'start' };
      default:
        return { x: x + width + 6, y: y + 6, textAnchor: 'start' };
    }
  }

  renderAxisLine() {
    const { x, y, width, height, orientation, axisLine } = this.props;
    let props = {
      ...getPresentationAttributes(this.props),
      fill: 'none',
      ...getPresentationAttributes(axisLine),
    };

    switch (orientation) {
      case 'top':
        props = { ...props, x1: x, y1: y + height, x2: x + width, y2: y + height };
        break;
      case 'left':
        props = { ...props, x1: x + width, y1: y, x2: x + width, y2: y + height };
        break;
      case 'right':
        props = { ...props, x1: x, y1: y, x2: x, y2: y + height };
        break;
      default:
        props = { ...props, x1: x, y1: y, x2: x + width, y2: y };
        break;
    }

    return <line className="recharts-cartesian-axis-line" {...props} />;
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
          className="recharts-cartesian-axis-tick-value"
        >
          {value}
        </Text>
      );
    }

    return tickItem;
  }

  /**
   * render the ticks
   * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
   * @return {ReactComponent} renderedTicks
   */
  renderTicks(ticks) {
    const { tickLine, stroke, tick, tickFormatter } = this.props;
    const finalTicks = CartesianAxis.getTicks({ ...this.props, ticks });
    const textAnchor = this.getTickTextAnchor();
    const verticalAnchor = this.getTickVerticalAnchor();
    const axisProps = getPresentationAttributes(this.props);
    const customTickProps = getPresentationAttributes(tick);
    const tickLineProps = {
      ...axisProps, fill: 'none', ...getPresentationAttributes(tickLine),
    };
    const items = finalTicks.map((entry, i) => {
      const { line: lineCoord, tick: tickCoord } = this.getTickLineCoord(entry);
      const tickProps = {
        textAnchor,
        verticalAnchor,
        ...axisProps,
        stroke: 'none', fill: stroke,
        ...customTickProps,
        ...tickCoord,
        index: i, payload: entry,
      };

      return (
        <g className="recharts-cartesian-axis-tick" key={`tick-${i}`}>
          {tickLine && (
            <line
              className="recharts-cartesian-axis-tick-line"
              {...tickLineProps}
              {...lineCoord}
            />
          )}
          {tick && this.renderTickItem(
            tick,
            tickProps,
            _.isFunction(tickFormatter) ? tickFormatter(entry.value) : entry.value
          )}
        </g>
      );
    });

    return (
      <g className="recharts-cartesian-axis-ticks">
        {items}
      </g>
    );
  }

  renderLabel() {
    const { label, stroke, orientation, viewBox } = this.props;
    const presentation = getPresentationAttributes(this.props);

    if (React.isValidElement(label)) {
      return React.cloneElement(label, { ...presentation, orientation, viewBox });
    } else if (_.isFunction(label)) {
      return label(this.props);
    } else if (isNumOrStr(label)) {
      const props = {
        ...presentation,
        stroke: 'none',
        fill: stroke,
        ...this.getLabelProps(),
      };

      return (
        <g className="recharts-cartesian-axis-label">
          <Text {...props}>{label}</Text>
        </g>
      );
    }

    return null;
  }

  render() {
    const { axisLine, width, height, ticksGenerator } = this.props;
    let { ticks, ...noTicksProps } = this.props;

    if (_.isFunction(ticksGenerator)) {
      ticks = (ticks && ticks.length > 0) ? ticksGenerator(this.props) :
        ticksGenerator(noTicksProps);
    }

    if (width <= 0 || height <= 0 || !ticks || !ticks.length) {
      return null;
    }

    return (
      <Layer className="recharts-cartesian-axis">
        {axisLine && this.renderAxisLine()}
        {this.renderTicks(ticks)}
        {this.renderLabel()}
      </Layer>
    );
  }
}

export default CartesianAxis;
