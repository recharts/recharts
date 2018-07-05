/**
 * @fileOverview Tooltip
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translateStyle } from 'react-smooth';
import _ from 'lodash';
import DefaultTooltipContent from './DefaultTooltipContent';
import { isSsr } from '../util/ReactUtils';
import { isNumber } from '../util/DataUtils';
import pureRender from '../util/PureRender';

const EPS = 1;

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
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
    unit: PropTypes.any
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
  filterNull: PropTypes.bool,
  useTranslate3d: PropTypes.bool,
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
  filterNull: true,
  useTranslate3d: false,
};

const renderContent = (content, props) => {
  if (React.isValidElement(content)) {
    return React.cloneElement(content, props);
  } else if (_.isFunction(content)) {
    return content(props);
  }

  return React.createElement(DefaultTooltipContent, props);
};

@pureRender
class Tooltip extends Component {
  static displayName = 'Tooltip';
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  state = {
    boxWidth: -1,
    boxHeight: -1,
  };

  componentDidMount() {
    this.updateBBox();
  }

  componentDidUpdate() {
    this.updateBBox();
  }

  updateBBox() {
    const { boxWidth, boxHeight } = this.state;

    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
      const box = this.wrapperNode.getBoundingClientRect();

      if (Math.abs(box.width - boxWidth) > EPS || Math.abs(box.height - boxHeight) > EPS) {
        this.setState({
          boxWidth: box.width,
          boxHeight: box.height,
        });
      }
    } else if (boxWidth !== -1 || boxHeight !== -1) {
      this.setState({
        boxWidth: -1,
        boxHeight: -1,
      });
    }
  }

  render() {
    const { payload, isAnimationActive, animationDuration, animationEasing,
      filterNull } = this.props;
    const finalPayload = filterNull && payload && payload.length ?
      payload.filter(entry => !_.isNil(entry.value)) : payload;
    const hasPayload = finalPayload && finalPayload.length;
    const { content, viewBox, coordinate, position, active, offset } = this.props;
    const wrapperStyle = { ...this.props.wrapperStyle };
    let translateX, translateY;
    const { boxWidth, boxHeight } = this.state;

    const dataToRight =
      coordinate.x + boxWidth + offset > viewBox.x + viewBox.width;

    if (boxWidth > 0 && boxHeight > 0 && coordinate) {
      translateX = position && isNumber(position.x) ? position.x : Math.max(
        dataToRight ?
          coordinate.x - boxWidth - offset :
          coordinate.x + offset, viewBox.x);

      translateY = position && isNumber(position.y) ? position.y : Math.max(
        coordinate.y + boxHeight + offset > viewBox.y + viewBox.height ?
          coordinate.y - boxHeight - offset :
          coordinate.y + offset, viewBox.y);
    } else {
      wrapperStyle.visibility = 'hidden';
    }

    let positionStyle = {
      ...translateStyle({
        transform: this.props.useTranslate3d ? `translate3d(${translateX}px, ${translateY}px, 0)` : `translate(${translateX}px, ${translateY}px)`,
      }),
    };

    if (isAnimationActive && active) {
      positionStyle = {
        ...positionStyle,
        ...translateStyle({
          transition: `transform ${animationDuration}ms ${animationEasing}`,
        }),
      };
    }

    const arrowStyle = {
      position: 'absolute',
      width: 0,
      height: 0,
      top: 10,
      right: dataToRight ? -5 : boxWidth,
      borderTop: '5px solid transparent',
      borderBottom: '5px solid transparent',
      borderLeft: dataToRight ? `5px solid ${wrapperStyle.borderColor || 'black'}` : '',
      borderRight: dataToRight ? '' : `5px solid ${wrapperStyle.borderColor || 'black'}`,
    };

    return (
      <div
        style={{
          ...positionStyle,
          position: 'absolute',
          top: 0,
          pointerEvents: 'none',
          visibility: active && hasPayload ? 'visible' : 'hidden',
        }}
      >
        <div className="reacharts-tooltip-arrow" style={arrowStyle} />
        <div
          className="recharts-tooltip-wrapper"
          style={wrapperStyle}
          ref={node => {
            this.wrapperNode = node;
          }}
        >
          {renderContent(content, { ...this.props, payload: finalPayload })}
        </div>
      </div>
    );
  }
}

export default Tooltip;
