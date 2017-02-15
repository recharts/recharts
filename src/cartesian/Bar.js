/**
 * @fileOverview Render a group of bar
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Animate, { translateStyle } from 'react-smooth';
import _ from 'lodash';
import Rectangle from '../shape/Rectangle';
import Layer from '../container/Layer';
import ErrorBar from './ErrorBar';
import LabelList from '../component/LabelList';
import pureRender from '../util/PureRender';
import { getValueByDataKey, uniqueId } from '../util/DataUtils';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, LEGEND_TYPES,
  getPresentationAttributes, filterEventsOfChild, isSsr, findChildByType } from '../util/ReactUtils';

@pureRender
class Bar extends Component {

  static displayName = 'Bar';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    className: PropTypes.string,
    layout: PropTypes.oneOf(['vertical', 'horizontal']),
    xAxisId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    yAxisId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    yAxis: PropTypes.object,
    xAxis: PropTypes.object,
    stackId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    barSize: PropTypes.number,
    unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]).isRequired,
    legendType: PropTypes.oneOf(LEGEND_TYPES),
    minPointSize: PropTypes.number,
    maxBarSize: PropTypes.number,

    shape: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    data: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
      radius: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    })),
    onAnimationStart: PropTypes.func,
    onAnimationEnd: PropTypes.func,

    animationId: PropTypes.number,
    isAnimationActive: PropTypes.bool,
    animationBegin: PropTypes.number,
    animationDuration: PropTypes.number,
    animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
  };

  static defaultProps = {
    xAxisId: 0,
    yAxisId: 0,
    legendType: 'rect',
    minPointSize: 0,
    // data of bar
    data: [],
    layout: 'vertical',
    isAnimationActive: !isSsr(),
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',

    onAnimationStart: () => {},
    onAnimationEnd: () => {},
  };

  state = { isAnimationFinished: false };
  id = uniqueId('recharts-bar-');

  handleAnimationEnd = () => {
    this.setState({ isAnimationFinished: true });
    this.props.onAnimationEnd();
  };

  handleAnimationStart = () => {
    this.setState({ isAnimationFinished: false });
    this.props.onAnimationStart();
  };

  renderRectangle(option, props) {
    let rectangle;

    if (React.isValidElement(option)) {
      rectangle = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      rectangle = option(props);
    } else {
      rectangle = <Rectangle {...props} />;
    }

    return rectangle;
  }

  renderRectangles() {
    const { data, shape, layout, isAnimationActive, animationBegin,
      animationDuration, animationEasing, animationId } = this.props;
    const baseProps = getPresentationAttributes(this.props);
    const getStyle = isBegin => ({
      transform: `scale${layout === 'vertical' ? 'X' : 'Y'}(${isBegin ? 0 : 1})`,
    });

    return data.map((entry, index) => {
      const { x, y, width, height } = entry;
      const props = { ...baseProps, ...entry, index };

      if (_.isNil(entry.value) || !isAnimationActive) {
        return (
          <Layer
            className="recharts-bar-rectangle"
            {...filterEventsOfChild(this.props, entry, index)}
            key={`rectangle-${index}`}
          >
            {this.renderRectangle(shape, props)}
          </Layer>
        );
      }

      let transformOrigin = '';

      if (layout === 'vertical') {
        transformOrigin = `${x}px ${y + height / 2}px`;
      } else {
        transformOrigin = `${x + width / 2}px ${y + height}px`;
      }

      return (
        <Animate
          begin={animationBegin}
          duration={animationDuration}
          isActive={isAnimationActive}
          easing={animationEasing}
          from={getStyle(true)}
          to={getStyle(false)}
          key={`rectangle-${index}-${animationId}`}
          onAnimationEnd={this.handleAnimationEnd}
          onAnimationStart={this.handleAnimationStart}
        >
          <Layer
            className="recharts-bar-rectangle"
            style={translateStyle({ transformOrigin })}
            {...filterEventsOfChild(this.props, entry, index)}
            key={`rectangle-${index}`}
          >
            {this.renderRectangle(shape, props)}
          </Layer>
        </Animate>
      );
    });
  }

  renderErrorBar() {
    if (this.props.isAnimationActive && !this.state.isAnimationFinished) { return null; }

    const { data, xAxis, yAxis, layout, children } = this.props;
    const errorBarItem = findChildByType(children, ErrorBar);

    if (!errorBarItem) { return null; }

    const offset = (layout === 'vertical') ? data[0].height / 2 : data[0].width / 2;

    function dataPointFormatter(dataPoint, dataKey) {
      return {
        x: dataPoint.x,
        y: dataPoint.y,
        value: dataPoint.value,
        errorVal: getValueByDataKey(dataPoint, dataKey),
      };
    }

    return React.cloneElement(errorBarItem, {
      data,
      xAxis,
      yAxis,
      layout,
      offset,
      dataPointFormatter,
    });
  }

  render() {
    const { data, className, xAxis, yAxis, left, top, width, height,
      isAnimationActive } = this.props;

    if (!data || !data.length) { return null; }

    const { isAnimationFinished } = this.state;
    const layerClass = classNames('recharts-bar', className);
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
        <Layer
          className="recharts-bar-rectangles"
          clipPath={needClip ? `url(#clipPath-${this.id})` : null}
        >
          {this.renderRectangles()}
        </Layer>
        {this.renderErrorBar()}
        {(!isAnimationActive || isAnimationFinished) &&
          LabelList.renderCallByParent(this.props, data)}
      </Layer>
    );
  }
}

export default Bar;
