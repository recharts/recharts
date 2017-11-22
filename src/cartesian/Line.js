/**
 * @fileOverview Line
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';
import animationDecorator from '../util/AnimationDecorator/';
import pureRender from '../util/PureRender';
import Curve from '../shape/Curve';
import Dot from '../shape/Dot';
import Layer from '../container/Layer';
import LabelList from '../component/LabelList';
import ErrorBar from './ErrorBar';
import { uniqueId, interpolateNumber } from '../util/DataUtils';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, LEGEND_TYPES, filterEventAttributes,
  getPresentationAttributes, findAllByType, getReactEventByType } from '../util/ReactUtils';
import { getCateCoordinateOfLine, getValueByDataKey } from '../util/ChartUtils';

const FACTOR = 1.0000001;

@animationDecorator
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
    hide: false,
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

  constructor(props) {
    super(props);
    this.state = this.createDefaultState();
  }

  /* eslint-disable  react/no-did-mount-set-state */
  componentDidMount() {
    const totalLength = this.getTotalLength();
    this.setState({ totalLength });
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

  // eslint-disable-next-line class-methods-use-this
  createDefaultState() {
    return {
      totalLength: 0,
    };
  }

  id = uniqueId('recharts-line-');

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

  renderErrorBar() {
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
    const { dot, points } = this.props;
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
        cx: entry.x, cy: entry.y, index: i, payload: entry.payload,
      };

      return this.renderDotItem(dot, dotProps);
    });

    return <Layer className="recharts-line-dots" key="dots">{dots}</Layer>;
  }

  renderLabelList() {
    const { points } = this.props;
    return LabelList.renderCallByParent(this.props, points);
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

  renderCurveWithAnimation({ t }, needClip) {
    const { points, strokeDasharray, ...other } = this.props;
    const { prevPoints, totalLength } = this.state;

    if (prevPoints) {
      const stepData = points.map((entry, index) => {
        if (prevPoints[index]) {
          const prev = prevPoints[index];
          const interpolatorX = interpolateNumber(prev.x, entry.x);
          const interpolatorY = interpolateNumber(prev.y, entry.y);

          return { ...entry, x: interpolatorX(t), y: interpolatorY(t) };
        }

        return entry;
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

  renderCurve(needClip) {
    const { points, isAnimationActive } = this.props;
    const { prevPoints, totalLength } = this.state;

    if (isAnimationActive && points && points.length &&
      ((!prevPoints && totalLength > 0) || !_.isEqual(prevPoints, points))) {
      return this.renderWithAnimation(this.renderCurveWithAnimation, needClip);
    }

    return this.renderCurveStatically(points, needClip);
  }

  render() {
    const { hide, dot, points, className, xAxis, yAxis, top, left,
      width, height } = this.props;

    if (hide || !points || !points.length) { return null; }

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
        {this.renderLabelList()}
      </Layer>
    );
  }
}

export default Line;
