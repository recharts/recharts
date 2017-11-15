/**
 * @fileOverview Line
 */
import React, { Component } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import pureRender from '../../util/PureRender';
import Layer from '../../container/Layer';
import LabelList from '../../component/LabelList';
import { uniqueId } from '../../util/DataUtils';
import PropTypes from './propTypes';
import DefaultProps from './defaultProps';
import getComposedData from './getComposedData';
import InitialState from './initialState';
import renderErrorBar from './render/ErrorBar';
import renderDots from './render/Dots';
import renderCurve from './render/Curve';

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

  id = uniqueId('recharts-line-');

  cachePrevData = (points) => {
    this.setState({ prevPoints: points });
  };

  render() {
    const { hide, dot, points, className, xAxis, yAxis, top, left,
      width, height, isAnimationActive } = this.props;

    if (hide || !points || !points.length) { return null; }

    const { isAnimationFinished } = this.state;
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
        {renderCurve(this, needClip)}
        {renderErrorBar(this)}
        {renderDots(this)}
        {(!isAnimationActive || isAnimationFinished) &&
          LabelList.renderCallByParent(this.props, points)}
      </Layer>
    );
  }
}

export default Line;
