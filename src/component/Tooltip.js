/**
 * @fileOverview Tooltip
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translateStyle } from 'react-smooth';
import _ from 'lodash';
import classNames from 'classnames';
import DefaultTooltipContent from './DefaultTooltipContent';
import { TOOLTIP_TYPES, isSsr } from '../util/ReactUtils';
import { isNumber } from '../util/DataUtils';

const CLS_PREFIX = 'recharts-tooltip-wrapper';

const EPS = 1;

const defaultUniqBy = entry => entry.dataKey;
const getUniqPaylod = (option, payload) => {
  if (option === true) {
    return _.uniqBy(payload, defaultUniqBy);
  }

  if (_.isFunction(option)) {
    return _.uniqBy(payload, option);
  }

  return payload;
};

const propTypes = {
  allowEscapeViewBox: PropTypes.shape({
    x: PropTypes.bool,
    y: PropTypes.bool,
  }),
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
  contentStyle: PropTypes.object,
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
    type: PropTypes.oneOf(TOOLTIP_TYPES)
  })),
  paylodUniqBy: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),

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
  allowEscapeViewBox: { x: false, y: false },
  offset: 10,
  viewBox: { x1: 0, x2: 0, y1: 0, y2: 0 },
  coordinate: { x: 0, y: 0 },
  cursorStyle: {},
  separator: ' : ',
  wrapperStyle: {},
  contentStyle: {},
  itemStyle: {},
  labelStyle: {},
  cursor: true,
  isAnimationActive: !isSsr(),
  animationEasing: 'ease',
  animationDuration: 400,
  filterNull: true,
  useTranslate3d: false,
};

const renderContent = (content, props) => {
  if (React.isValidElement(content)) {
    return React.cloneElement(content, props);
  } if (_.isFunction(content)) {
    return content(props);
  }

  return React.createElement(DefaultTooltipContent, props);
};

class Tooltip extends PureComponent {
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

  getTranslate = ({ key, tooltipDimension, viewBoxDimension }) => {
    const { allowEscapeViewBox, coordinate, offset, position, viewBox } = this.props;

    if (position && isNumber(position[key])) {
      return position[key];
    }

    const restricted = coordinate[key] - tooltipDimension - offset;
    const unrestricted = coordinate[key] + offset;
    if (allowEscapeViewBox[key]) {
      return unrestricted;
    }

    const tooltipBoundary = coordinate[key] + tooltipDimension + offset;
    const viewBoxBoundary = viewBox[key] + viewBoxDimension;
    if (tooltipBoundary > viewBoxBoundary) {
      return Math.max(restricted, viewBox[key]);
    }
    return Math.max(unrestricted, viewBox[key]);
  };

  render() {
    const { payload, isAnimationActive, animationDuration, animationEasing,
      filterNull, paylodUniqBy } = this.props;
    const finalPayload = getUniqPaylod(paylodUniqBy, filterNull && payload && payload.length ?
      payload.filter(entry => !_.isNil(entry.value)) : payload);
    const hasPayload = finalPayload && finalPayload.length;
    const { content, viewBox, coordinate, position, active, wrapperStyle } = this.props;
    let outerStyle = {
      pointerEvents: 'none',
      visibility: active && hasPayload ? 'visible' : 'hidden',
      position: 'absolute',
      top: 0,
      ...wrapperStyle,
    };
    let translateX, translateY;

    if (position && isNumber(position.x) && isNumber(position.y)) {
      translateX = position.x;
      translateY = position.y;
    } else {
      const { boxWidth, boxHeight } = this.state;

      if (boxWidth > 0 && boxHeight > 0 && coordinate) {
        translateX = this.getTranslate({
          key: 'x',
          tooltipDimension: boxWidth,
          viewBoxDimension: viewBox.width,
        });

        translateY = this.getTranslate({
          key: 'y',
          tooltipDimension: boxHeight,
          viewBoxDimension: viewBox.height,
        });
      } else {
        outerStyle.visibility = 'hidden';
      }
    }

    outerStyle = {
      ...translateStyle({
        transform: this.props.useTranslate3d ? `translate3d(${translateX}px, ${translateY}px, 0)` : `translate(${translateX}px, ${translateY}px)`,
      }),
      ...outerStyle,
    };

    if (isAnimationActive && active) {
      outerStyle = {
        ...translateStyle({
          transition: `transform ${animationDuration}ms ${animationEasing}`,
        }),
        ...outerStyle,
      };
    }

    const cls = classNames(CLS_PREFIX, {
      [`${CLS_PREFIX}-right`]: isNumber(translateX) && coordinate && isNumber(coordinate.x) && translateX >= coordinate.x,
      [`${CLS_PREFIX}-left`]: isNumber(translateX) && coordinate && isNumber(coordinate.x) && translateX < coordinate.x,
      [`${CLS_PREFIX}-bottom`]: isNumber(translateY) && coordinate && isNumber(coordinate.y) && translateY >= coordinate.y,
      [`${CLS_PREFIX}-top`]: isNumber(translateY) && coordinate && isNumber(coordinate.y) && translateY < coordinate.y,
    });

    return (
      <div
        className={cls}
        style={outerStyle}
        ref={(node) => { this.wrapperNode = node; }}
      >
        {renderContent(content, { ...this.props, payload: finalPayload })}
      </div>
    );
  }
}

export default Tooltip;
