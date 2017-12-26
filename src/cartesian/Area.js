/**
 * @fileOverview Area
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Animate from 'react-smooth';
import _ from 'lodash';
import Curve from '../shape/Curve';
import Dot from '../shape/Dot';
import Layer from '../container/Layer';
import LabelList from '../component/LabelList';
import pureRender from '../util/PureRender';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, LEGEND_TYPES,
  getPresentationAttributes, isSsr, filterEventAttributes } from '../util/ReactUtils';
import { isNumber, uniqueId, interpolateNumber } from '../util/DataUtils';
import { getCateCoordinateOfLine, getValueByDataKey } from '../util/ChartUtils';


@pureRender
class Area extends Component {

  static displayName = 'Area';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    className: PropTypes.string,
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]).isRequired,
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
    stackId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    legendType: PropTypes.oneOf(LEGEND_TYPES),
    connectNulls: PropTypes.bool,

    activeDot: PropTypes.oneOfType([
      PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool,
    ]),
    // dot configuration
    dot: PropTypes.oneOfType([
      PropTypes.func, PropTypes.element, PropTypes.object, PropTypes.bool,
    ]),
    label: PropTypes.oneOfType([
      PropTypes.func, PropTypes.element, PropTypes.object, PropTypes.bool,
    ]),
    hide: PropTypes.bool,
    // have curve configuration
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    baseLine: PropTypes.oneOfType([
      PropTypes.number, PropTypes.array,
    ]),
    isRange: PropTypes.bool,
    points: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    })),

    onAnimationStart: PropTypes.func,
    onAnimationEnd: PropTypes.func,
    animationId: PropTypes.number,
    isAnimationActive: PropTypes.bool,
    animationBegin: PropTypes.number,
    animationDuration: PropTypes.number,
    animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),

    id: PropTypes.string,
  };

  static defaultProps = {
    stroke: '#3182bd',
    fill: '#3182bd',
    fillOpacity: 0.6,
    xAxisId: 0,
    yAxisId: 0,
    legendType: 'line',
    connectNulls: false,
    // points of area
    points: [],
    dot: false,
    activeDot: true,
    hide: false,

    isAnimationActive: !isSsr(),
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
  };

  static getBaseValue = (props, xAxis, yAxis) => {
    const { layout, baseValue } = props;

    if (isNumber(baseValue)) { return baseValue; }

    const numericAxis = layout === 'horizontal' ? yAxis : xAxis;
    const domain = numericAxis.scale.domain();

    if (numericAxis.type === 'number') {
      const max = Math.max(domain[0], domain[1]);
      const min = Math.min(domain[0], domain[1]);

      if (baseValue === 'dataMin') { return min; }
      if (baseValue === 'dataMax') { return max; }

      return max < 0 ? max : Math.max(Math.min(domain[0], domain[1]), 0);
    }

    if (baseValue === 'dataMin') { return domain[0]; }
    if (baseValue === 'dataMax') { return domain[1]; }

    return domain[0];
  };

  static getComposedData = ({ props, xAxis, yAxis, xAxisTicks, yAxisTicks, bandSize,
    dataKey, stackedData, dataStartIndex, displayedData, offset }) => {
    const { layout } = props;
    const hasStack = stackedData && stackedData.length;
    const baseValue = Area.getBaseValue(props, xAxis, yAxis);
    let isRange = false;

    const points = displayedData.map((entry, index) => {
      let value;

      if (hasStack) {
        value = stackedData[dataStartIndex + index];
      } else {
        value = getValueByDataKey(entry, dataKey);

        if (!_.isArray(value)) {
          value = [baseValue, value];
        } else {
          isRange = true;
        }
      }

      if (layout === 'horizontal') {
        return {
          x: getCateCoordinateOfLine({ axis: xAxis, ticks: xAxisTicks, bandSize, entry, index }),
          y: _.isNil(value[1]) ? null : yAxis.scale(value[1]),
          value,
          payload: entry,
        };
      }

      return {
        x: _.isNil(value[1]) ? null : xAxis.scale(value[1]),
        y: getCateCoordinateOfLine({ axis: yAxis, ticks: yAxisTicks, bandSize, entry, index }),
        value,
        payload: entry,
      };
    });

    let baseLine;
    if (hasStack || isRange) {
      baseLine = points.map(entry => ({
        x: layout === 'horizontal' ? entry.x : xAxis.scale(entry && entry.value[0]),
        y: layout === 'horizontal' ? yAxis.scale(entry && entry.value[0]) : entry.y,
      }));
    } else if (layout === 'horizontal') {
      baseLine = yAxis.scale(baseValue);
    } else {
      baseLine = xAxis.scale(baseValue);
    }

    return { points, baseLine, layout, isRange, ...offset };
  };

  static renderDotItem = (option, props) => {
    let dotItem;

    if (React.isValidElement(option)) {
      dotItem = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      dotItem = option(props);
    } else {
      dotItem = <Dot {...props} className="recharts-area-dot" />;
    }

    return dotItem;
  };

  state = { isAnimationFinished: true };

  componentWillReceiveProps(nextProps) {
    const { animationId, points, baseLine } = this.props;

    if (nextProps.animationId !== animationId) {
      this.cachePrevData(points, baseLine);
    }
  }

  id = uniqueId('recharts-area-');

  cachePrevData = (points, baseLine) => {
    this.setState({
      prevPoints: points,
      prevBaseLine: baseLine,
    });
  };

  handleAnimationEnd = () => {
    const { onAnimationEnd } = this.props;

    this.setState({ isAnimationFinished: true });

    if (_.isFunction(onAnimationEnd)) {
      onAnimationEnd();
    }
  };

  handleAnimationStart = () => {
    const { onAnimationStart } = this.props;
    this.setState({ isAnimationFinished: false });

    if (_.isFunction(onAnimationStart)) {
      onAnimationStart();
    }
  };

  renderDots() {
    const { isAnimationActive } = this.props;

    if (isAnimationActive && !this.state.isAnimationFinished) { return null; }

    const { dot, points, dataKey } = this.props;
    const areaProps = getPresentationAttributes(this.props);
    const customDotProps = getPresentationAttributes(dot);
    const dotEvents = filterEventAttributes(dot);

    const dots = points.map((entry, i) => {
      const dotProps = {
        key: `dot-${i}`,
        r: 3,
        ...areaProps,
        ...customDotProps,
        ...dotEvents,
        dataKey,
        cx: entry.x,
        cy: entry.y,
        index: i,
        value: entry.value,
        payload: entry.payload,
      };

      return this.constructor.renderDotItem(dot, dotProps);
    });

    return <Layer className="recharts-area-dots">{dots}</Layer>;
  }

  renderHorizontalRect(alpha) {
    const { baseLine, points, strokeWidth } = this.props;
    const startX = points[0].x;
    const endX = points[points.length - 1].x;
    const width = alpha * Math.abs(startX - endX);
    let maxY = Math.max.apply(null, points.map(entry => (entry.y || 0)));

    if (isNumber(baseLine)) {
      maxY = Math.max(baseLine, maxY);
    } else if (baseLine && _.isArray(baseLine) && baseLine.length) {
      maxY = Math.max(Math.max.apply(null, baseLine.map(entry => (entry.y || 0))), maxY);
    }

    if (isNumber(maxY)) {
      return (
        <rect
          x={startX < endX ? startX : startX - width}
          y={0}
          width={width}
          height={maxY + (strokeWidth || 1)}
        />
      );
    }

    return null;
  }

  renderVerticalRect(alpha) {
    const { baseLine, points, strokeWidth } = this.props;
    const startY = points[0].y;
    const endY = points[points.length - 1].y;
    const height = alpha * Math.abs(startY - endY);
    let maxX = Math.max.apply(null, points.map(entry => (entry.x || 0)));

    if (isNumber(baseLine)) {
      maxX = Math.max(baseLine, maxX);
    } else if (baseLine && _.isArray(baseLine) && baseLine.length) {
      maxX = Math.max(Math.max.apply(null, baseLine.map(entry => (entry.x || 0))), maxX);
    }

    if (isNumber(maxX)) {
      return (
        <rect
          x={0}
          y={startY < endY ? startY : startY - height}
          width={maxX + (strokeWidth || 1)}
          height={height}
        />
      );
    }

    return null;
  }

  renderClipRect(alpha) {
    const { layout } = this.props;

    if (layout === 'vertical') {
      return this.renderVerticalRect(alpha);
    }

    return this.renderHorizontalRect(alpha);
  }

  renderAreaStatically(points, baseLine, needClip) {
    const { layout, type, stroke, connectNulls, isRange } = this.props;

    return (
      <Layer clipPath={needClip ? `url(#clipPath-${this.id})` : null}>
        <Curve
          {...this.props}
          points={points}
          baseLine={baseLine}
          stroke="none"
          className="recharts-area-area"
        />
        {stroke !== 'none' && (
          <Curve
            {...getPresentationAttributes(this.props)}
            className="recharts-area-curve"
            layout={layout}
            type={type}
            connectNulls={connectNulls}
            fill="none"
            points={points}
          />
        )}
        {stroke !== 'none' && isRange && (
          <Curve
            {...getPresentationAttributes(this.props)}
            className="recharts-area-curve"
            layout={layout}
            type={type}
            connectNulls={connectNulls}
            fill="none"
            points={baseLine}
          />
        )}
      </Layer>
    );
  }

  renderAreaWithAnimation(needClip) {
    const { points, baseLine, isAnimationActive, animationBegin,
      animationDuration, animationEasing, animationId, id } = this.props;
    const { prevPoints, prevBaseLine } = this.state;
    const clipPathId = _.isNil(id) ? this.id : id;

    return (
      <Animate
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        from={{ t: 0 }}
        to={{ t: 1 }}
        key={`area-${animationId}`}
        onAnimationEnd={this.handleAnimationEnd}
        onAnimationStart={this.handleAnimationStart}
      >
        {
          ({ t }) => {
            if (prevPoints) {
              // update animtaion
              const stepPoints = points.map((entry, index) => {
                if (prevPoints[index]) {
                  const prev = prevPoints[index];
                  const interpolatorX = interpolateNumber(prev.x, entry.x);
                  const interpolatorY = interpolateNumber(prev.y, entry.y);

                  return { ...entry, x: interpolatorX(t), y: interpolatorY(t) };
                }

                return entry;
              });
              let stepBaseLine;

              if (isNumber(baseLine)) {
                const interpolator = interpolateNumber(prevBaseLine, baseLine);
                stepBaseLine = interpolator(t);
              } else if (_.isNil(baseLine) || _.isNaN(baseLine)) {
                const interpolator = interpolateNumber(prevBaseLine, 0);
                stepBaseLine = interpolator(t);
              } else {
                stepBaseLine = baseLine.map((entry, index) => {
                  if (prevBaseLine[index]) {
                    const prev = prevBaseLine[index];
                    const interpolatorX = interpolateNumber(prev.x, entry.x);
                    const interpolatorY = interpolateNumber(prev.y, entry.y);

                    return { ...entry, x: interpolatorX(t), y: interpolatorY(t) };
                  }

                  return entry;
                });
              }

              return this.renderAreaStatically(stepPoints, stepBaseLine, needClip);
            }

            return (
              <Layer>
                <defs>
                  <clipPath id={`animationClipPath-${clipPathId}`}>
                    {this.renderClipRect(t)}
                  </clipPath>
                </defs>
                <Layer clipPath={`url(#animationClipPath-${clipPathId})`}>
                  {this.renderAreaStatically(points, baseLine, needClip)}
                </Layer>
              </Layer>
            );
          }
        }
      </Animate>
    );
  }

  renderArea(needClip) {
    const { points, baseLine, isAnimationActive } = this.props;
    const { prevPoints, prevBaseLine, totalLength } = this.state;

    if (isAnimationActive && points && points.length &&
      ((!prevPoints && totalLength > 0) || !_.isEqual(prevPoints, points) ||
        !_.isEqual(prevBaseLine, baseLine))) {
      return this.renderAreaWithAnimation(needClip);
    }

    return this.renderAreaStatically(points, baseLine, needClip);
  }

  render() {
    const { hide, dot, points, className, top, left, xAxis, yAxis,
      width, height, isAnimationActive, id } = this.props;

    if (hide || !points || !points.length) { return null; }

    const { isAnimationFinished } = this.state;
    const hasSinglePoint = points.length === 1;
    const layerClass = classNames('recharts-area', className);
    const needClip = (xAxis && xAxis.allowDataOverflow) || (yAxis && yAxis.allowDataOverflow);
    const clipPathId = _.isNil(id) ? this.id : id;

    return (
      <Layer className={layerClass}>
        {needClip ? (
          <defs>
            <clipPath id={`clipPath-${clipPathId}`}>
              <rect x={left} y={top} width={width} height={height} />
            </clipPath>
          </defs>
        ) : null}
        {!hasSinglePoint ? this.renderArea(needClip) : null}
        {(dot || hasSinglePoint) && this.renderDots()}
        {(!isAnimationActive || isAnimationFinished) &&
          LabelList.renderCallByParent(this.props, points)}
      </Layer>
    );
  }
}

export default Area;
