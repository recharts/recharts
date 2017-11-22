/**
 * @fileOverview Line
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Animate from 'react-smooth';
import classNames from 'classnames';
import _ from 'lodash';
import pureRender from '../util/PureRender';
import Curve from '../shape/Curve';
import Dot from '../shape/Dot';
import Layer from '../container/Layer';
import LabelList from '../component/LabelList';
import ErrorBar from './ErrorBar';
import { uniqueId, interpolateNumber } from '../util/DataUtils';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, LEGEND_TYPES, filterEventAttributes,
  getPresentationAttributes, isSsr, findAllByType } from '../util/ReactUtils';
import { getCateCoordinateOfLine, getValueByDataKey } from '../util/ChartUtils';

@pureRender
class Line extends Component {

  static displayName = 'Line';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    className: PropTypes.string,
    type: PropTypes.oneOfType([PropTypes.oneOf([
      'basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural',
      'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter',
    ]), PropTypes.func]),
    unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    yAxis: PropTypes.object,
    xAxis: PropTypes.object,
    legendType: PropTypes.oneOf(LEGEND_TYPES),
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    connectNulls: PropTypes.bool,
    hide: PropTypes.bool,

    // whether have dot in line
    activeDot: PropTypes.oneOfType([
      PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool,
    ]),
    dot: PropTypes.oneOfType([
      PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool,
    ]),

    top: PropTypes.number,
    left: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    points: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      value: PropTypes.value,
    })),
    onAnimationStart: PropTypes.func,
    onAnimationEnd: PropTypes.func,

    isAnimationActive: PropTypes.bool,
    animationBegin: PropTypes.number,
    animationDuration: PropTypes.number,
    animationEasing: PropTypes.oneOf([
      'ease',
      'ease-in',
      'ease-out',
      'ease-in-out',
      'linear',
    ]),
    animationId: PropTypes.number,
  };

  static defaultProps = {
    xAxisId: 0,
    yAxisId: 0,
    connectNulls: false,
    activeDot: true,
    dot: true,
    legendType: 'line',
    stroke: '#3182bd',
    strokeWidth: 1,
    fill: '#fff',
    points: [],
    isAnimationActive: !isSsr(),
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
    hide: false,

    onAnimationStart: () => {},
    onAnimationEnd: () => {},
  };

  /**
   * Compose the data of each group
   * @param {Object} props The props from the component
   * @param  {Object} xAxis   The configuration of x-axis
   * @param  {Object} yAxis   The configuration of y-axis
   * @param  {String} dataKey The unique key of a group
   * @return {Array}  Composed data
   */
  static getComposedData = ({ props, xAxis, yAxis, xAxisTicks, yAxisTicks, dataKey,
    bandSize, displayedData, offset }) => {
    const { layout } = props;

    const points = displayedData.map((entry, index) => {
      const value = getValueByDataKey(entry, dataKey);

      if (layout === 'horizontal') {
        return {
          x: getCateCoordinateOfLine({ axis: xAxis, ticks: xAxisTicks, bandSize, entry, index }),
          y: _.isNil(value) ? null : yAxis.scale(value),
          value,
          payload: entry,
        };
      }

      return {
        x: _.isNil(value) ? null : xAxis.scale(value),
        y: getCateCoordinateOfLine({ axis: yAxis, ticks: yAxisTicks, bandSize, entry, index }),
        value,
        payload: entry,
      };
    });

    return { points, layout, ...offset };
  };


  state = {
    isAnimationFinished: true,
    totalLength: 0,
  };

  /* eslint-disable  react/no-did-mount-set-state */
  componentDidMount() {
    if (!this.props.isAnimationActive) { return; }

    const totalLength = this.getTotalLength();
    this.setState({ totalLength });
  }

  componentWillReceiveProps(nextProps) {
    const { animationId, points } = this.props;

    if (nextProps.animationId !== animationId) {
      this.cachePrevData(points);
    }
  }

  getTotalLength() {
    const curveDom = this.mainCurve;
    const totalLength = (curveDom && curveDom.getTotalLength && curveDom.getTotalLength()) || 0;

    return totalLength;
  }

  getStrokeDasharray(length, totalLength, lines) {
    const lineLength = lines.reduce((pre, next) => pre + next);

    const count = parseInt(length / lineLength, 10);
    const remainLength = length % lineLength;
    const restLength = totalLength - length;

    let remainLines = [];
    for (let i = 0, sum = 0; ; sum += lines[i], ++i) {
      if (sum + lines[i] > remainLength) {
        remainLines = [...lines.slice(0, i), remainLength - sum];
        break;
      }
    }

    const emptyLines = remainLines.length % 2 === 0 ? [0, restLength] : [restLength];

    return [...this.repeat(lines, count), ...remainLines, ...emptyLines]
      .map(line => `${line}px`)
      .join(', ');
  }

  id = uniqueId('recharts-line-');

  cachePrevData = (points) => {
    this.setState({ prevPoints: points });
  };

  pathRef = (node) => {
    this.mainCurve = node;
  };

  repeat(lines, count) {
    const linesUnit = lines.length % 2 !== 0 ? [...lines, 0] : lines;
    let result = [];

    for (let i = 0; i < count; ++i) {
      result = [...result, ...linesUnit];
    }

    return result;
  }

  handleAnimationEnd = () => {
    this.setState({ isAnimationFinished: true });
    this.props.onAnimationEnd();
  };

  handleAnimationStart = () => {
    this.setState({ isAnimationFinished: false });
    this.props.onAnimationStart();
  };

  renderErrorBar() {
    if (this.props.isAnimationActive && !this.state.isAnimationFinished) { return null; }

    const { points, xAxis, yAxis, layout, children } = this.props;
    const errorBarItems = findAllByType(children, ErrorBar);

    if (!errorBarItems) { return null; }

    function dataPointFormatter(dataPoint, dataKey) {
      return {
        x: dataPoint.x,
        y: dataPoint.y,
        value: dataPoint.value,
        errorVal: getValueByDataKey(dataPoint.payload, dataKey),
      };
    }

    return errorBarItems.map((item, i) => React.cloneElement(item, {
      key: i,
      data: points,
      xAxis,
      yAxis,
      layout,
      dataPointFormatter,
    }));
  }

  renderDotItem(option, props) {
    let dotItem;

    if (React.isValidElement(option)) {
      dotItem = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      dotItem = option(props);
    } else {
      const className = classNames('recharts-line-dot', option ? option.className : '');
      dotItem = <Dot {...props} className={className} />;
    }

    return dotItem;
  }

  renderDots() {
    const { isAnimationActive } = this.props;

    if (isAnimationActive && !this.state.isAnimationFinished) {
      return null;
    }
    const { dot, points, dataKey } = this.props;
    const lineProps = getPresentationAttributes(this.props);
    const customDotProps = getPresentationAttributes(dot);
    const dotEvents = filterEventAttributes(dot);
    const dots = points.map((entry, i) => {
      const dotProps = {
        key: `dot-${i}`,
        r: 3,
        ...lineProps,
        ...customDotProps,
        ...dotEvents,
        value: entry.value,
        dataKey,
        cx: entry.x, cy: entry.y, index: i, payload: entry.payload,
      };

      return this.renderDotItem(dot, dotProps);
    });

    return <Layer className="recharts-line-dots" key="dots">{dots}</Layer>;
  }

  renderCurveStatically(points, needClip, props) {
    const { type, layout, connectNulls } = this.props;
    const curveProps = {
      ...getPresentationAttributes(this.props),
      ...filterEventAttributes(this.props),
      fill: 'none',
      className: 'recharts-line-curve',
      clipPath: needClip ? `url(#clipPath-${this.id})` : null,
      points,
      ...props,
      type, layout, connectNulls,
    };

    return <Curve {...curveProps} pathRef={this.pathRef} />;
  }

  renderCurveWithAnimation(needClip) {
    const { points, strokeDasharray, isAnimationActive, animationBegin,
      animationDuration, animationEasing, animationId, width, height, ...other
    } = this.props;
    const { prevPoints, totalLength } = this.state;

    return (
      <Animate
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        from={{ t: 0 }}
        to={{ t: 1 }}
        key={`line-${animationId}`}
        onAnimationEnd={this.handleAnimationEnd}
        onAnimationStart={this.handleAnimationStart}
      >
        {
          ({ t }) => {
            if (prevPoints) {
              const stepData = points.map((entry, index) => {
                if (prevPoints[index]) {
                  const prev = prevPoints[index];
                  const interpolatorX = interpolateNumber(prev.x, entry.x);
                  const interpolatorY = interpolateNumber(prev.y, entry.y);

                  return { ...entry, x: interpolatorX(t), y: interpolatorY(t) };
                }

                // magic number of faking previous x and y location
                const interpolatorX = interpolateNumber(width * 2, entry.x);
                const interpolatorY = interpolateNumber(height / 2, entry.y);
                return { ...entry, x: interpolatorX(t), y: interpolatorY(t) };
              });
              return this.renderCurveStatically(stepData, needClip);
            }
            const interpolator = interpolateNumber(0, totalLength);
            const curLength = interpolator(t);
            let currentStrokeDasharray;

            if (strokeDasharray) {
              const lines = strokeDasharray.split(/[,\s]+/gim)
                .map(num => parseFloat(num));
              currentStrokeDasharray = this.getStrokeDasharray(
                curLength, totalLength, lines
              );
            } else {
              currentStrokeDasharray = `${curLength}px ${totalLength - curLength}px`;
            }

            return this.renderCurveStatically(points, needClip, {
              strokeDasharray: currentStrokeDasharray,
            });
          }
        }
      </Animate>
    );
  }

  renderCurve(needClip) {
    const { points, isAnimationActive } = this.props;
    const { prevPoints, totalLength } = this.state;

    if (isAnimationActive && points && points.length &&
      ((!prevPoints && totalLength > 0) || !_.isEqual(prevPoints, points))) {
      return this.renderCurveWithAnimation(needClip);
    }

    return this.renderCurveStatically(points, needClip);
  }

  render() {
    const { hide, dot, points, className, xAxis, yAxis, top, left,
      width, height, isAnimationActive } = this.props;

    if (hide || !points || !points.length) { return null; }

    const { isAnimationFinished } = this.state;
    const hasSinglePoint = points.length === 1;
    const layerClass = classNames('recharts-line', className);
    const needClip = (xAxis && xAxis.allowDataOverflow) || (yAxis && yAxis.allowDataOverflow);

    return (
      <Layer className={layerClass}>
        {needClip ? (
          <defs>
            <clipPath id={`clipPath-${this.id}`}>
              <rect x={left} y={top} width={width} height={height} />
            </clipPath>
          </defs>
        ) : null}
        {!hasSinglePoint && this.renderCurve(needClip)}
        {this.renderErrorBar()}
        {(hasSinglePoint || dot) && this.renderDots()}
        {(!isAnimationActive || isAnimationFinished) &&
          LabelList.renderCallByParent(this.props, points)}
      </Layer>
    );
  }
}

export default Line;
