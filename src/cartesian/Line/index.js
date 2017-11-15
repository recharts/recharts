/**
 * @fileOverview Line
 */
import React, { Component } from 'react';
import Animate from 'react-smooth';
import classNames from 'classnames';
import _ from 'lodash';
import pureRender from '../../util/PureRender';
import Curve from '../../shape/Curve';
import Layer from '../../container/Layer';
import LabelList from '../../component/LabelList';
import { uniqueId, interpolateNumber } from '../../util/DataUtils';
import { filterEventAttributes, getPresentationAttributes } from '../../util/ReactUtils';
import PropTypes from './propTypes';
import DefaultProps from './defaultProps';
import getComposedData from './getComposedData';
import InitialState from './initialState';
import renderErrorBar from './render/ErrorBar';
import renderDots from './render/Dots';

const FACTOR = 1.0000001;

@pureRender
class Line extends Component {

  static displayName = 'Line';

  static propTypes = PropTypes;

  static defaultProps = DefaultProps;

  static getComposedData = getComposedData;

  state = InitialState;

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
      animationDuration, animationEasing, animationId, ...other } = this.props;
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
        {renderErrorBar(this)}
        {renderDots(this)}
        {(!isAnimationActive || isAnimationFinished) &&
          LabelList.renderCallByParent(this.props, points)}
      </Layer>
    );
  }
}

export default Line;
