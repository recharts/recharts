import _isNil from 'lodash/isNil';
import _isFunction from 'lodash/isFunction';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Tooltip
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translateStyle } from 'react-smooth';

import DefaultTooltipContent from './DefaultTooltipContent';
import { isSsr } from '../util/ReactUtils';
import { isNumber } from '../util/DataUtils';
import pureRender from '../util/PureRender';

var EPS = 1;

var propTypes = {
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  viewBox: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
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
    y: PropTypes.number
  }),
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),

  label: PropTypes.any,
  payload: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.any,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
    unit: PropTypes.any
  })),

  isAnimationActive: PropTypes.bool,
  animationDuration: PropTypes.number,
  animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
  itemSorter: PropTypes.func,
  filterNull: PropTypes.bool,
  useTranslate3d: PropTypes.bool
};

var defaultProps = {
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
  itemSorter: function itemSorter() {
    return -1;
  },
  filterNull: true,
  useTranslate3d: false
};

var renderContent = function renderContent(content, props) {
  if (React.isValidElement(content)) {
    return React.cloneElement(content, props);
  } else if (_isFunction(content)) {
    return content(props);
  }

  return React.createElement(DefaultTooltipContent, props);
};

var Tooltip = pureRender(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      boxWidth: -1,
      boxHeight: -1
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateBBox();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateBBox();
    }
  }, {
    key: 'updateBBox',
    value: function updateBBox() {
      var _state = this.state,
          boxWidth = _state.boxWidth,
          boxHeight = _state.boxHeight;


      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var box = this.wrapperNode.getBoundingClientRect();

        if (Math.abs(box.width - boxWidth) > EPS || Math.abs(box.height - boxHeight) > EPS) {
          this.setState({
            boxWidth: box.width,
            boxHeight: box.height
          });
        }
      } else if (boxWidth !== -1 || boxHeight !== -1) {
        this.setState({
          boxWidth: -1,
          boxHeight: -1
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          payload = _props.payload,
          isAnimationActive = _props.isAnimationActive,
          animationDuration = _props.animationDuration,
          animationEasing = _props.animationEasing,
          filterNull = _props.filterNull;

      var finalPayload = filterNull && payload && payload.length ? payload.filter(function (entry) {
        return !_isNil(entry.value);
      }) : payload;
      var hasPayload = finalPayload && finalPayload.length;
      var _props2 = this.props,
          content = _props2.content,
          viewBox = _props2.viewBox,
          coordinate = _props2.coordinate,
          position = _props2.position,
          active = _props2.active,
          offset = _props2.offset,
          wrapperStyle = _props2.wrapperStyle;

      var outerStyle = _extends({
        pointerEvents: 'none',
        visibility: active && hasPayload ? 'visible' : 'hidden',
        position: 'absolute',
        top: 0
      }, wrapperStyle);
      var translateX = void 0,
          translateY = void 0;

      if (position && isNumber(position.x) && isNumber(position.y)) {
        translateX = position.x;
        translateY = position.y;
      } else {
        var _state2 = this.state,
            boxWidth = _state2.boxWidth,
            boxHeight = _state2.boxHeight;


        if (boxWidth > 0 && boxHeight > 0 && coordinate) {
          translateX = position && isNumber(position.x) ? position.x : Math.max(coordinate.x + boxWidth + offset > viewBox.x + viewBox.width ? coordinate.x - boxWidth - offset : coordinate.x + offset, viewBox.x);

          translateY = position && isNumber(position.y) ? position.y : Math.max(coordinate.y + boxHeight + offset > viewBox.y + viewBox.height ? coordinate.y - boxHeight - offset : coordinate.y + offset, viewBox.y);
        } else {
          outerStyle.visibility = 'hidden';
        }
      }

      outerStyle = _extends({}, outerStyle, translateStyle({
        transform: this.props.useTranslate3d ? 'translate3d(' + translateX + 'px, ' + translateY + 'px, 0)' : 'translate(' + translateX + 'px, ' + translateY + 'px)'
      }));

      if (isAnimationActive && active) {
        outerStyle = _extends({}, outerStyle, translateStyle({
          transition: 'transform ' + animationDuration + 'ms ' + animationEasing
        }));
      }

      return React.createElement(
        'div',
        {
          className: 'recharts-tooltip-wrapper',
          style: outerStyle,
          ref: function ref(node) {
            _this2.wrapperNode = node;
          }
        },
        renderContent(content, _extends({}, this.props, { payload: finalPayload }))
      );
    }
  }]);

  return Tooltip;
}(Component), _class2.displayName = 'Tooltip', _class2.propTypes = propTypes, _class2.defaultProps = defaultProps, _temp2)) || _class;

export default Tooltip;