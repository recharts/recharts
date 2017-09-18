/**
 * @fileOverview Render a group of scatters
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Animate from 'react-smooth';
import classNames from 'classnames';
import _ from 'lodash';
import { interpolateNumber } from 'd3-interpolate';
import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, LEGEND_TYPES,
  getPresentationAttributes, filterEventsOfChild, isSsr, findAllByType } from '../util/ReactUtils';
import ZAxis from './ZAxis';
import Curve from '../shape/Curve';
import Symbols from '../shape/Symbols';
import ErrorBar from './ErrorBar';
import Cell from '../component/Cell';
import { uniqueId, isNumOrStr } from '../util/DataUtils';
import { getValueByDataKey } from '../util/ChartUtils';

@pureRender
class Scatter extends Component {

  static displayName = 'Scatter';

  static propTypes = {
    ...EVENT_ATTRIBUTES,
    ...PRESENTATION_ATTRIBUTES,

    xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    zAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    line: PropTypes.oneOfType([
      PropTypes.bool, PropTypes.object, PropTypes.func, PropTypes.element,
    ]),
    lineType: PropTypes.oneOf(['fitting', 'joint']),
    lineJointType: PropTypes.oneOfType([PropTypes.oneOf([
      'basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural',
      'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter',
    ]), PropTypes.func]),
    legendType: PropTypes.oneOf(LEGEND_TYPES),
    className: PropTypes.string,

    activeIndex: PropTypes.number,
    activeShape: PropTypes.oneOfType([
      PropTypes.object, PropTypes.func, PropTypes.element,
    ]),
    shape: PropTypes.oneOfType([
      PropTypes.oneOf(['circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),
      PropTypes.element,
      PropTypes.func,
    ]),
    points: PropTypes.arrayOf(PropTypes.shape({
      cx: PropTypes.number,
      cy: PropTypes.number,
      size: PropTypes.number,
      node: PropTypes.shape({
        x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        z: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      }),
      payload: PropTypes.any,
    })),
    hide: PropTypes.bool,

    isAnimationActive: PropTypes.bool,
    animationId: PropTypes.number,
    animationBegin: PropTypes.number,
    animationDuration: PropTypes.number,
    animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
  };

  static defaultProps = {
    xAxisId: 0,
    yAxisId: 0,
    zAxisId: 0,
    legendType: 'circle',
    lineType: 'joint',
    lineJointType: 'linear',
    data: [],
    shape: 'circle',
    hide: false,

    isAnimationActive: !isSsr(),
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: 'linear',
  };

  /**
   * Compose the data of each group
   * @param  {Object} xAxis   The configuration of x-axis
   * @param  {Object} yAxis   The configuration of y-axis
   * @param  {String} dataKey The unique key of a group
   * @return {Array}  Composed data
   */
  static getComposedData = ({ xAxis, yAxis, zAxis, item, displayedData, onItemMouseLeave,
    onItemMouseEnter, offset }) => {
    const cells = findAllByType(item.props.children, Cell);
    const xAxisDataKey = _.isNil(xAxis.dataKey) ? item.props.dataKey : xAxis.dataKey;
    const yAxisDataKey = _.isNil(yAxis.dataKey) ? item.props.dataKey : yAxis.dataKey;
    const zAxisDataKey = zAxis && zAxis.dataKey;
    const defaultRangeZ = zAxis ? zAxis.range : ZAxis.defaultProps.range;
    const defaultZ = defaultRangeZ && defaultRangeZ[0];
    const xOffset = xAxis.scale.bandwidth ? xAxis.scale.bandwidth() / 2 : 0;
    const yOffset = yAxis.scale.bandwidth ? yAxis.scale.bandwidth() / 2 : 0;
    const points = displayedData.map((entry, index) => {
      const x = entry[xAxisDataKey];
      const y = entry[yAxisDataKey];
      const z = (!_.isNil(zAxisDataKey) && entry[zAxisDataKey]) || '-';
      const tooltipPayload = [
        { name: xAxis.name || xAxis.dataKey, unit: xAxis.unit || '', value: x, payload: entry },
        { name: yAxis.name || yAxis.dataKey, unit: yAxis.unit || '', value: y, payload: entry },
      ];

      if (z !== '-') {
        tooltipPayload.push({
          name: zAxis.name || zAxis.dataKey, unit: zAxis.unit || '', value: z, payload: entry,
        });
      }
      const cx = isNumOrStr(x) ? xAxis.scale(x) + xOffset : null;
      const cy = isNumOrStr(y) ? yAxis.scale(y) + yOffset : null;
      return {
        ...entry, cx, cy,
        size: z !== '-' ? zAxis.scale(z) : defaultZ,
        node: { x, y, z },
        tooltipPayload,
        tooltipPosition: { x: cx, y: cy },
        payload: entry,
        ...(cells && cells[index] && cells[index].props),
      };
    });

    return {
      onMouseLeave: onItemMouseLeave,
      onMouseEnter: onItemMouseEnter,
      points,
      ...offset,
    };
  };

  state = { activeIndex: -1, isAnimationFinished: false };

  componentWillReceiveProps(nextProps) {
    const { animationId, points } = this.props;

    if (nextProps.animationId !== animationId) {
      this.cachePrevPoints(points);
    }
  }

  cachePrevPoints = (points) => {
    this.setState({ prevPoints: points });
  };

  handleAnimationEnd = () => {
    this.setState({ isAnimationFinished: true });
  };

  handleAnimationStart = () => {
    this.setState({ isAnimationFinished: false });
  };

  id = uniqueId('recharts-scatter-');

  renderSymbolItem(option, props) {
    let symbol;

    if (React.isValidElement(option)) {
      symbol = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      symbol = option(props);
    } else {
      symbol = <Symbols {...props} type={option} />;
    }

    return symbol;
  }

  renderSymbolsStatically(points) {
    const { shape, activeShape, activeIndex } = this.props;
    const baseProps = getPresentationAttributes(this.props);

    return points.map((entry, i) => {
      const props = { key: `symbol-${i}`, ...baseProps, ...entry };

      return (
        <Layer
          className="recharts-scatter-symbol"
          {...filterEventsOfChild(this.props, entry, i)}
          key={`symbol-${i}`}
        >
          {this.renderSymbolItem(activeIndex === i ? activeShape : shape, props)}
        </Layer>
      );
    });
  }

  renderSymbolsWithAnimation() {
    const { points, isAnimationActive, animationBegin, animationDuration,
      animationEasing, animationId } = this.props;
    const { prevPoints } = this.state;

    return (
      <Animate
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        from={{ t: 0 }}
        to={{ t: 1 }}
        key={`pie-${animationId}`}
        onAnimationEnd={this.handleAnimationEnd}
        onAnimationStart={this.handleAnimationStart}
      >
        {
          ({ t }) => {
            const stepData = points.map((entry, index) => {
              const prev = prevPoints && prevPoints[index];

              if (prev) {
                const interpolatorCx = interpolateNumber(prev.cx, entry.cx);
                const interpolatorCy = interpolateNumber(prev.cy, entry.cy);
                const interpolatorSize = interpolateNumber(prev.size, entry.size);

                return {
                  ...entry,
                  cx: interpolatorCx(t),
                  cy: interpolatorCy(t),
                  size: interpolatorSize(t),
                };
              }

              const interpolator = interpolateNumber(0, entry.size);

              return { ...entry, size: interpolator(t) };
            });

            return (
              <Layer>
                {this.renderSymbolsStatically(stepData)}
              </Layer>
            );
          }
        }
      </Animate>
    );
  }

  renderSymbols() {
    const { points, isAnimationActive } = this.props;
    const { prevPoints } = this.state;

    if (isAnimationActive && points && points.length &&
      (!prevPoints || !_.isEqual(prevPoints, points))) {
      return this.renderSymbolsWithAnimation();
    }

    return this.renderSymbolsStatically(points);
  }

  renderErrorBar() {
    if (!this.state.isAnimationFinished) { return null; }

    const { points, xAxis, yAxis, children } = this.props;
    const errorBarItems = findAllByType(children, ErrorBar);

    if (!errorBarItems) { return null; }

    function dataPointFormatterY(dataPoint, dataKey) {
      return {
        x: dataPoint.cx,
        y: dataPoint.cy,
        value: dataPoint.y,
        errorVal: getValueByDataKey(dataPoint, dataKey),
      };
    }

    function dataPointFormatterX(dataPoint, dataKey) {
      return {
        x: dataPoint.cx,
        y: dataPoint.cy,
        value: dataPoint.x,
        errorVal: getValueByDataKey(dataPoint, dataKey),
      };
    }

    return errorBarItems.map((item, i) => {
      const { direction } = item.props;

      return React.cloneElement(item, {
        key: i,
        data: points,
        xAxis,
        yAxis,
        layout: direction === 'x' ? 'vertical' : 'horizontal',
        dataPointFormatter: direction === 'x' ? dataPointFormatterX : dataPointFormatterY,
      });
    });
  }

  renderLine() {
    const { points, line, lineType, lineJointType } = this.props;
    const scatterProps = getPresentationAttributes(this.props);
    const customLineProps = getPresentationAttributes(line);
    let linePoints, lineItem;

    if (lineType === 'joint') {
      linePoints = points.map(entry => ({ x: entry.cx, y: entry.cy }));
    }
    const lineProps = {
      ...scatterProps,
      fill: 'none',
      stroke: scatterProps && scatterProps.fill,
      ...customLineProps,
      points: linePoints,
    };

    if (React.isValidElement(line)) {
      lineItem = React.cloneElement(line, lineProps);
    } else if (_.isFunction(line)) {
      lineItem = line(lineProps);
    } else {
      lineItem = <Curve {...lineProps} type={lineJointType} />;
    }

    return (
      <Layer className="recharts-scatter-line" key="recharts-scatter-line">
        {lineItem}
      </Layer>
    );
  }

  render() {
    const { hide, points, line, className, xAxis, yAxis, left, top, width,
      height } = this.props;

    if (hide || !points || !points.length) { return null; }

    const layerClass = classNames('recharts-scatter', className);
    const needClip = (xAxis && xAxis.allowDataOverflow) || (yAxis && yAxis.allowDataOverflow);

    return (
      <Layer
        className={layerClass}
        clipPath={needClip ? `url(#clipPath-${this.id})` : null}
      >
        {needClip ? (
          <defs>
            <clipPath id={`clipPath-${this.id}`}>
              <rect x={left} y={top} width={width} height={height} />
            </clipPath>
          </defs>
        ) : null}
        {line && this.renderLine()}
        {this.renderErrorBar()}
        <Layer key="recharts-scatter-symbols">
          {this.renderSymbols()}
        </Layer>
      </Layer>
    );
  }
}

export default Scatter;
