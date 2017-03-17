import _isFunction from 'lodash/isFunction';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Radar
 */
import React, { Component, PropTypes } from 'react';
import Animate from 'react-smooth';
import classNames from 'classnames';

import pureRender from '../util/PureRender';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes, isSsr } from '../util/ReactUtils';
import Polygon from '../shape/Polygon';
import Dot from '../shape/Dot';
import Layer from '../container/Layer';
import Text from '../component/Text';

var Radar = pureRender(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Radar, _Component);

  function Radar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Radar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Radar.__proto__ || Object.getPrototypeOf(Radar)).call.apply(_ref, [this].concat(args))), _this), _this.handleMouseEnter = function (e) {
      var onMouseEnter = _this.props.onMouseEnter;


      if (onMouseEnter) {
        onMouseEnter(_this.props, e);
      }
    }, _this.handleMouseLeave = function (e) {
      var onMouseLeave = _this.props.onMouseLeave;


      if (onMouseLeave) {
        onMouseLeave(_this.props, e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Radar, [{
    key: 'renderPolygon',
    value: function renderPolygon() {
      /* eslint-disable no-unused-vars */
      var _props = this.props,
          shape = _props.shape,
          points = _props.points,
          animationDuration = _props.animationDuration,
          animationEasing = _props.animationEasing,
          animationBegin = _props.animationBegin,
          isAnimationActive = _props.isAnimationActive,
          animationId = _props.animationId,
          dataKey = _props.dataKey,
          className = _props.className,
          others = _objectWithoutProperties(_props, ['shape', 'points', 'animationDuration', 'animationEasing', 'animationBegin', 'isAnimationActive', 'animationId', 'dataKey', 'className']);
      /* eslint-enable no-unused-vars */

      if (React.isValidElement(shape)) {
        return React.cloneElement(shape, _extends({}, others, { points: points }));
      } else if (_isFunction(shape)) {
        return shape(this.props);
      }

      var point = points[0];
      var transformPoints = points.map(function (p) {
        return { x: p.x - point.cx, y: p.y - point.cy };
      });

      return React.createElement(
        Layer,
        { className: 'recharts-radar-polygon', transform: 'translate(' + point.cx + ', ' + point.cy + ')' },
        React.createElement(
          Animate,
          {
            from: 'scale(0)',
            to: 'scale(1)',
            attributeName: 'transform',
            isActive: isAnimationActive,
            begin: animationBegin,
            easing: animationEasing,
            duration: animationDuration,
            key: animationId
          },
          React.createElement(Polygon, _extends({
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave
          }, getPresentationAttributes(this.props), {
            points: transformPoints
          }))
        )
      );
    }
  }, {
    key: 'renderLabelItem',
    value: function renderLabelItem(option, props, value) {
      var labelItem = void 0;

      if (React.isValidElement(option)) {
        labelItem = React.cloneElement(option, props);
      } else if (_isFunction(option)) {
        labelItem = option(props);
      } else {
        labelItem = React.createElement(
          Text,
          _extends({
            key: props.key
          }, props, {
            className: 'recharts-radar-label'
          }),
          value
        );
      }

      return labelItem;
    }
  }, {
    key: 'renderLabels',
    value: function renderLabels() {
      var _this2 = this;

      var _props2 = this.props,
          points = _props2.points,
          label = _props2.label;

      var baseProps = getPresentationAttributes(this.props);
      var customLabelProps = getPresentationAttributes(label);

      var labels = points.map(function (entry, i) {
        var labelProps = _extends({
          textAnchor: 'middle'
        }, baseProps, {
          stroke: 'none',
          fill: baseProps && baseProps.stroke || '#666'
        }, customLabelProps, entry, {
          index: i,
          key: 'label-' + i,
          payload: entry
        });

        return _this2.renderLabelItem(label, labelProps, entry.value);
      });

      return React.createElement(
        Layer,
        { className: 'recharts-radar-labels' },
        labels
      );
    }
  }, {
    key: 'renderDotItem',
    value: function renderDotItem(option, props) {
      var dotItem = void 0;

      if (React.isValidElement(option)) {
        dotItem = React.cloneElement(option, props);
      } else if (_isFunction(option)) {
        dotItem = option(props);
      } else {
        dotItem = React.createElement(Dot, _extends({}, props, { className: 'recharts-radar-dot' }));
      }

      return dotItem;
    }
  }, {
    key: 'renderDots',
    value: function renderDots() {
      var _this3 = this;

      var _props3 = this.props,
          dot = _props3.dot,
          points = _props3.points;

      var baseProps = getPresentationAttributes(this.props);
      var customDotProps = getPresentationAttributes(dot);

      var dots = points.map(function (entry, i) {
        var dotProps = _extends({
          key: 'dot-' + i,
          r: 3
        }, baseProps, customDotProps, {
          cx: entry.x,
          cy: entry.y,
          index: i,
          playload: entry
        });

        return _this3.renderDotItem(dot, dotProps);
      });

      return React.createElement(
        Layer,
        { className: 'recharts-radar-dots' },
        dots
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          className = _props4.className,
          points = _props4.points,
          label = _props4.label,
          dot = _props4.dot;


      if (!points || !points.length) {
        return null;
      }

      var layerClass = classNames('recharts-radar', className);

      return React.createElement(
        Layer,
        { className: layerClass },
        this.renderPolygon(),
        label && this.renderLabels(),
        dot && this.renderDots()
      );
    }
  }]);

  return Radar;
}(Component), _class2.displayName = 'Radar', _class2.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, {
  className: PropTypes.string,
  dataKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]).isRequired,

  points: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    cx: PropTypes.number,
    cy: PropTypes.number,
    angle: PropTypes.number,
    radius: PropTypes.number,
    value: PropTypes.number,
    payload: PropTypes.object
  })),
  shape: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  dot: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.object, PropTypes.bool]),
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.object, PropTypes.bool]),
  legendType: PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),

  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
  isAnimationActive: PropTypes.bool,
  animationId: PropTypes.number,
  animationBegin: PropTypes.number,
  animationDuration: PropTypes.number,
  animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
}), _class2.defaultProps = {
  dot: false,
  label: false,
  legendType: 'rect',
  isAnimationActive: !isSsr(),
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease'
}, _temp2)) || _class;

export default Radar;