/**
 * @fileOverview Tooltip
 */
import React, { Component, PropTypes } from 'react';
import Animate from 'react-smooth';
import _ from 'lodash';
import DefaultTooltipContent from './DefaultTooltipContent';
import { getStyleString } from '../util/DOMUtils';
import { isSsr } from '../util/ReactUtils';
import { isNumOrStr, isNumber } from '../util/DataUtils';

const propTypes = {
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  viewBox: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  }),

  active: PropTypes.bool,
  separator: PropTypes.string,
  formatter: PropTypes.func,
  offset: PropTypes.number,

  itemStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  wrapperStyle: PropTypes.object,
  cursor: PropTypes.oneOfType([PropTypes.bool, PropTypes.element, PropTypes.object]),

  coordinate: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),

  label: PropTypes.any,
  payload: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.any,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    unit: PropTypes.any,
  })),

  isAnimationActive: PropTypes.bool,
  animationDuration: PropTypes.number,
  animationEasing: PropTypes.oneOf([
    'ease',
    'ease-in',
    'ease-out',
    'ease-in-out',
    'linear',
  ]),
  itemSorter: PropTypes.func,
};

const defaultProps = {
  active: false,
  offset: 10,
  viewBox: { x1: 0, x2: 0, y1: 0, y2: 0 },
  coordinate: { x: 0, y: 0 },
  cursorStyle: {},
  separator: ' : ',
  wrapperStyle: {},
  itemStyle: {},
  labelStyle: {},
  cursor: true,
  isAnimationActive: !isSsr(),
  animationEasing: 'ease',
  animationDuration: 400,
  itemSorter: () => -1,
};

const renderContent = (content, props) => {
  if (React.isValidElement(content)) {
    return React.cloneElement(content, props);
  } else if (_.isFunction(content)) {
    return content(props);
  }

  return React.createElement(DefaultTooltipContent, props);
};

class Tooltip extends Component {
  static displayName = 'Tooltip';
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  getBBox() {
    if (!this.wrapperNode) { return null; }

    return this.wrapperNode.getBoundingClientRect ? this.wrapperNode.getBoundingClientRect() : null;
  }

  render() {
    const { payload, isAnimationActive, animationDuration, animationEasing } = this.props;
    const hasPayload = payload && payload.length &&
      payload.filter(entry => isNumOrStr(entry.value)).length;
    const { content, viewBox, coordinate, position, active, offset, wrapperStyle } = this.props;
    const outerStyle = {
      pointerEvents: 'none',
      display: active && hasPayload ? 'block' : 'none',
      position: 'absolute',
      top: 0,
      ...wrapperStyle,
    };
    let translateX, translateY;

    if (position && isNumber(position.x) && isNumber(position.y)) {
      translateX = position.x;
      translateY = position.y;
    } else {
      const box = this.getBBox();

      if (box) {
        translateX = position && isNumber(position.x) ? position.x : Math.max(
          coordinate.x + box.width + offset > (viewBox.x + viewBox.width) ?
          coordinate.x - box.width - offset :
          coordinate.x + offset, viewBox.x);

        translateY = position && isNumber(position.y) ? position.y : Math.max(
          coordinate.y + box.height + offset > (viewBox.y + viewBox.height) ?
          coordinate.y - box.height - offset :
          coordinate.y + offset, viewBox.y);
      } else {
        outerStyle.display = 'none';
      }
    }

    return (
      <Animate
        from={`translate(${translateX}px, ${translateY}px)`}
        to={`translate(${translateX}px, ${translateY}px)`}
        duration={animationDuration}
        isActive={outerStyle.display === 'block'}
        easing={animationEasing}
        attributeName="transform"
      >
        <div
          className="recharts-tooltip-wrapper"
          style={outerStyle}
          ref={(node) => { this.wrapperNode = node; }}
        >
          {renderContent(content, this.props)}
        </div>
      </Animate>
    );
  }
}

export default Tooltip;
