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
  corner: PropTypes.bool,
  separator: PropTypes.string,
  formatter: PropTypes.func,
  offset: PropTypes.number,

  cornerSettings: PropTypes.object,
  layout: PropTypes.string,

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
  filterNull: PropTypes.bool,
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
    const { content, viewBox, coordinate, position, active, offset, wrapperStyle } = this.props;
    const { layout, corner, cornerSettings } = this.props;
    let outerStyle = {
      pointerEvents: 'none',
      visibility: active && hasPayload ? 'visible' : 'hidden',
      position: 'absolute',
      top: 0,
      ...wrapperStyle,
    };

    let translateX, translateY, cornerBeforeStyle, cornerAfterStyle;

    const cornerStyle = {
      position: 'absolute',
      margin: 'auto',
      width: 0,
      height: 0,
      zIndex: 1,
    };
    let offsetCorner = 0;
    let cornerDefaults = {
      width: 8,
      height: 8,
      colorAfter: '#fff',
      colorBefore: '#ccc',
    };
    cornerDefaults = {
      ...cornerDefaults,
      ...cornerSettings,
    };

    if (position && isNumber(position.x) && isNumber(position.y)) {
      translateX = position.x;
      translateY = position.y;
    } else {
      const { boxWidth, boxHeight } = this.state;

      // if corner enabled in the props
      if (corner) {
        offsetCorner += cornerDefaults.width;
        if (_.isString(layout) && layout.toLowerCase() === 'horizontal') {
          const cornerDirection = (coordinate.x + boxWidth + offset > (viewBox.x + viewBox.width)) ? 'left' : 'right';
          cornerAfterStyle = {
            top: 0,
            bottom: 0,
            [`${cornerDirection}`]: '100%',
            [`border${_.startCase(cornerDirection)}`]: `${cornerDefaults.width}px solid ${cornerDefaults.colorAfter}`,
            borderTop: `${cornerDefaults.height}px solid transparent`,
            borderBottom: `${cornerDefaults.height}px solid transparent`,
            [`margin${_.startCase(cornerDirection)}`]: '-2px',
          };
          cornerBeforeStyle = {
            ...cornerAfterStyle,
            [`margin${_.startCase(cornerDirection)}`]: 0,
            [`border${_.startCase(cornerDirection)}`]: `${cornerDefaults.width}px solid ${cornerDefaults.colorBefore}`,
            zIndex: -1,
          };
        } else if (_.isString(layout) && layout.toLowerCase() === 'vertical') {
          const cornerDirection = (coordinate.y + boxHeight + offset > (viewBox.y + viewBox.height)) ? 'top' : 'bottom';
          cornerAfterStyle = {
            left: 0,
            right: 0,
            [`${cornerDirection}`]: '100%',
            [`border${_.startCase(cornerDirection)}`]: `${cornerDefaults.width}px solid ${cornerDefaults.colorAfter}`,
            borderLeft: `${cornerDefaults.height}px solid transparent`,
            borderRight: `${cornerDefaults.height}px solid transparent`,
            [`margin${_.startCase(cornerDirection)}`]: '-2px',
          };
          cornerBeforeStyle = {
            ...cornerAfterStyle,
            [`margin${_.startCase(cornerDirection)}`]: 0,
            [`border${_.startCase(cornerDirection)}`]: `${cornerDefaults.width}px solid ${cornerDefaults.colorBefore}`,
            zIndex: -1,
          };
        }
      }

      if (boxWidth > 0 && boxHeight > 0 && coordinate) {
        translateX = position && isNumber(position.x) ? position.x : Math.max(
          coordinate.x + boxWidth + offset > (viewBox.x + viewBox.width) ?
          coordinate.x - boxWidth - offset - offsetCorner :
          coordinate.x + offset + offsetCorner, viewBox.x);

        translateY = position && isNumber(position.y) ? position.y : Math.max(
          coordinate.y + boxHeight + offset > (viewBox.y + viewBox.height) ?
          coordinate.y - boxHeight - offset - offsetCorner :
          coordinate.y + offset + offsetCorner, viewBox.y);
      } else {
        outerStyle.visibility = 'hidden';
      }
    }

    outerStyle = {
      ...outerStyle,
      ...translateStyle({
        transform: `translate(${translateX}px, ${translateY}px)`,
      }),
    };

    if (isAnimationActive && active) {
      outerStyle = {
        ...outerStyle,
        ...translateStyle({
          transition: `transform ${animationDuration}ms ${animationEasing}`,
        }),
      };
    }

    cornerAfterStyle = {
      ...cornerStyle,
      ...cornerAfterStyle,
    };

    cornerBeforeStyle = {
      ...cornerStyle,
      ...cornerBeforeStyle,
    };
    return (
      <div
        className="recharts-tooltip-wrapper"
        style={outerStyle}
        ref={(node) => { this.wrapperNode = node; }}
      >
        {_.isBoolean(corner) && corner && <div className="recharts-tooltip-wrapper-corner"><span style={cornerAfterStyle} /><span style={cornerBeforeStyle} /></div>}
        {renderContent(content, { ...this.props, payload: finalPayload })}
      </div>
    );
  }
}

export default Tooltip;
