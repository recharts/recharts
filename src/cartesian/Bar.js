/**
 * @fileOverview Render a group of bar
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Animate, { translateStyle } from 'react-smooth';
import _ from 'lodash';
import Rectangle from '../shape/Rectangle';
import Layer from '../container/Layer';
import Text from '../component/Text';
import pureRender from '../util/PureRender';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, getPresentationAttributes,
  filterEventsOfChild, isSsr } from '../util/ReactUtils';

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
    stackId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    barSize: PropTypes.number,
    unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    legendType: PropTypes.oneOf([
      'line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star',
      'triangle', 'wye',
    ]),
    minPointSize: PropTypes.number,
    maxBarSize: PropTypes.number,

    shape: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    label: PropTypes.oneOfType([
      PropTypes.bool, PropTypes.func, PropTypes.object, PropTypes.element,
    ]),
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
    errorBarStrokeWidth: 2,
    errorBarFill: 'black',
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

  state = {
    isAnimationFinished: false,
  };

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

  renderLabelItem(option, props, value) {
    let labelItem = null;

    if (React.isValidElement(option)) {
      labelItem = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      labelItem = option(props);
    } else {
      labelItem = (
        <Text
          {...props}
          key={props.key}
          className="recharts-bar-label"
        >
          {_.isArray(value) ? value[1] : value}
        </Text>
      );
    }

    return labelItem;
  }

  renderErrorbars() {
    const { isAnimationActive } = this.props;
    if (isAnimationActive && !this.state.isAnimationFinished) { return null; }

    const { data, errorBarFill, errorBarStrokeWidth } = this.props;
    const errorKey = `${this.props.dataKey}Error`;
    const errorBars = data.map((entry, i) => {
      let xMid, yMid, xMin, yMin, xMax, yMax, scale, coordsTop, coordsMid, coordsBot;
      const errorVal = entry[errorKey];

      if (errorVal) {
        if (this.props.layout === 'vertical') {
          scale = entry.width / entry.value;
          xMid = entry.x + entry.width;
          yMid = entry.y + entry.height / 2;
          xMin = xMid - errorVal / 2 * scale;
          yMin = yMid + entry.height / 5;
          xMax = xMid + errorVal / 2 * scale;
          yMax = yMid - entry.height / 5;
          coordsTop = { x1: xMax, y1: yMin, x2: xMax, y2: yMax };
          coordsMid = { x1: xMin, y1: yMid, x2: xMax, y2: yMid };
          coordsBot = { x1: xMin, y1: yMin, x2: xMin, y2: yMax };
        } else if (this.props.layout === 'horizontal') {
          scale = entry.height / entry.value;
          xMid = entry.x + entry.width / 2;
          yMid = entry.y;
          xMin = xMid - entry.width / 5;
          xMax = xMid + entry.width / 5;
          yMin = yMid + errorVal / 2 * scale;
          yMax = yMid - errorVal / 2 * scale;
          coordsTop = { x1: xMin, y1: yMax, x2: xMax, y2: yMax };
          coordsMid = { x1: xMid, y1: yMin, x2: xMid, y2: yMax };
          coordsBot = { x1: xMin, y1: yMin, x2: xMax, y2: yMin };
        }

        return (
          <Layer className={`recharts-bar-errorBar-${i}`} key={i}>
            <line {...coordsTop} stroke={errorBarFill} strokeWidth={errorBarStrokeWidth} />;
            <line {...coordsMid} stroke={errorBarFill} strokeWidth={errorBarStrokeWidth} />;
            <line {...coordsBot} stroke={errorBarFill} strokeWidth={errorBarStrokeWidth} />;
          </Layer>
        );
      }

      return null;
    });

    return <Layer className="recharts-bar-errorBars">{errorBars}</Layer>;
  }

  renderLabels() {
    const { isAnimationActive } = this.props;

    if (isAnimationActive && !this.state.isAnimationFinished) { return null; }

    const { data, label, layout } = this.props;
    const barProps = getPresentationAttributes(this.props);
    const customLabelProps = getPresentationAttributes(label);
    const textAnchor = layout === 'vertical' ? 'start' : 'middle';
    const labels = data.map((entry, i) => {
      let x = 0;
      let y = 0;

      if (layout === 'vertical') {
        x = 5 + entry.x + entry.width;
        y = 5 + entry.y + entry.height / 2;
      } else {
        x = entry.x + entry.width / 2;
        y = entry.y - 5;
      }

      const labelProps = {
        textAnchor,
        ...barProps,
        ...entry,
        ...customLabelProps,
        x,
        y,
        index: i,
        key: `label-${i}`,
        payload: entry.payload,
      };

      let labelValue = entry.value;
      if (label === true && entry.value && labelProps.label) {
        labelValue = labelProps.label;
      }
      return this.renderLabelItem(label, labelProps, labelValue);
    });

    return <Layer className="recharts-bar-labels">{labels}</Layer>;
  }

  render() {
    const { data, className, label, shouldShowErrorBar } = this.props;

    if (!data || !data.length) { return null; }

    const layerClass = classNames('recharts-bar', className);

    return (
      <Layer className={layerClass}>
        <Layer className="recharts-bar-rectangles">
          {this.renderRectangles()}
        </Layer>
        {label && (
          <Layer className="recharts-bar-rectangle-labels">
            {this.renderLabels()}
          </Layer>
        )}
        {shouldShowErrorBar && this.renderErrorbars()}
      </Layer>
    );
  }
}

export default Bar;
