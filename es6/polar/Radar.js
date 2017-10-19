import _isEqual from 'lodash/isEqual';
import _isFunction from 'lodash/isFunction';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Radar
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Animate from 'react-smooth';
import classNames from 'classnames';

import { interpolateNumber } from '../util/DataUtils';
import pureRender from '../util/PureRender';
import { PRESENTATION_ATTRIBUTES, LEGEND_TYPES, filterEventAttributes, getPresentationAttributes, isSsr } from '../util/ReactUtils';
import { polarToCartesian } from '../util/PolarUtils';
import { getValueByDataKey } from '../util/ChartUtils';
import Polygon from '../shape/Polygon';
import Dot from '../shape/Dot';
import Layer from '../container/Layer';
import LabelList from '../component/LabelList';

var Radar = pureRender(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Radar, _Component);

  function Radar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Radar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Radar.__proto__ || Object.getPrototypeOf(Radar)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isAnimationFinished: false }, _this.cachePrevData = function (points) {
      _this.setState({ prevPoints: points });
    }, _this.handleAnimationEnd = function () {
      _this.setState({ isAnimationFinished: true });
    }, _this.handleAnimationStart = function () {
      _this.setState({ isAnimationFinished: false });
    }, _this.handleMouseEnter = function (e) {
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
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props,
          animationId = _props.animationId,
          points = _props.points;


      if (nextProps.animationId !== animationId) {
        this.cachePrevData(points);
      }
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
    value: function renderDots(points) {
      var _this2 = this;

      var dot = this.props.dot;

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

        return _this2.renderDotItem(dot, dotProps);
      });

      return React.createElement(
        Layer,
        { className: 'recharts-radar-dots' },
        dots
      );
    }
  }, {
    key: 'renderPolygonStatically',
    value: function renderPolygonStatically(points) {
      var _props2 = this.props,
          shape = _props2.shape,
          dot = _props2.dot;


      var radar = void 0;
      if (React.isValidElement(shape)) {
        radar = React.cloneElement(shape, _extends({}, this.props, { points: points }));
      } else if (_isFunction(shape)) {
        radar = shape(_extends({}, this.props, { points: points }));
      } else {
        radar = React.createElement(Polygon, _extends({}, filterEventAttributes(this.props), {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        }, getPresentationAttributes(this.props), {
          points: points
        }));
      }

      return React.createElement(
        Layer,
        { className: 'recharts-radar-polygon' },
        radar,
        dot ? this.renderDots(points) : null
      );
    }
  }, {
    key: 'renderPolygonWithAnimation',
    value: function renderPolygonWithAnimation() {
      var _this3 = this;

      var _props3 = this.props,
          points = _props3.points,
          isAnimationActive = _props3.isAnimationActive,
          animationBegin = _props3.animationBegin,
          animationDuration = _props3.animationDuration,
          animationEasing = _props3.animationEasing,
          animationId = _props3.animationId;
      var prevPoints = this.state.prevPoints;


      return React.createElement(
        Animate,
        {
          begin: animationBegin,
          duration: animationDuration,
          isActive: isAnimationActive,
          easing: animationEasing,
          from: { t: 0 },
          to: { t: 1 },
          key: 'radar-' + animationId,
          onAnimationEnd: this.handleAnimationEnd,
          onAnimationStart: this.handleAnimationStart
        },
        function (_ref2) {
          var t = _ref2.t;

          var stepData = points.map(function (entry, index) {
            var prev = prevPoints && prevPoints[index];

            if (prev) {
              var _interpolatorX = interpolateNumber(prev.x, entry.x);
              var _interpolatorY = interpolateNumber(prev.y, entry.y);

              return _extends({}, entry, {
                x: _interpolatorX(t),
                y: _interpolatorY(t)
              });
            }

            var interpolatorX = interpolateNumber(entry.cx, entry.x);
            var interpolatorY = interpolateNumber(entry.cy, entry.y);

            return _extends({}, entry, {
              x: interpolatorX(t),
              y: interpolatorY(t)
            });
          });

          return _this3.renderPolygonStatically(stepData);
        }
      );
    }
  }, {
    key: 'renderPolygon',
    value: function renderPolygon() {
      var _props4 = this.props,
          points = _props4.points,
          isAnimationActive = _props4.isAnimationActive;
      var prevPoints = this.state.prevPoints;


      if (isAnimationActive && points && points.length && (!prevPoints || !_isEqual(prevPoints, points))) {
        return this.renderPolygonWithAnimation();
      }

      return this.renderPolygonStatically(points);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          hide = _props5.hide,
          className = _props5.className,
          points = _props5.points,
          isAnimationActive = _props5.isAnimationActive;


      if (hide || !points || !points.length) {
        return null;
      }

      var isAnimationFinished = this.state.isAnimationFinished;

      var layerClass = classNames('recharts-radar', className);

      return React.createElement(
        Layer,
        { className: layerClass },
        this.renderPolygon(),
        (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, points)
      );
    }
  }]);

  return Radar;
}(Component), _class2.displayName = 'Radar', _class2.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, {
  className: PropTypes.string,
  dataKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]).isRequired,
  angleAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  radiusAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
  activeDot: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool]),
  // whether have dot in poly line
  dot: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool]),
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.object, PropTypes.bool]),
  legendType: PropTypes.oneOf(LEGEND_TYPES),
  hide: PropTypes.bool,

  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
  isAnimationActive: PropTypes.bool,
  animationId: PropTypes.number,
  animationBegin: PropTypes.number,
  animationDuration: PropTypes.number,
  animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
}), _class2.defaultProps = {
  angleAxisId: 0,
  radiusAxisId: 0,
  hide: false,
  activeDot: true,
  dot: false,
  legendType: 'rect',
  isAnimationActive: !isSsr(),
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease'
}, _class2.getComposedData = function (_ref3) {
  var radiusAxis = _ref3.radiusAxis,
      angleAxis = _ref3.angleAxis,
      displayedData = _ref3.displayedData,
      dataKey = _ref3.dataKey;
  var cx = angleAxis.cx,
      cy = angleAxis.cy;

  var points = displayedData.map(function (entry, i) {
    var name = getValueByDataKey(entry, angleAxis.dataKey, i);
    var value = getValueByDataKey(entry, dataKey, 0);
    var angle = angleAxis.scale(name);
    var radius = radiusAxis.scale(value);

    return _extends({}, polarToCartesian(cx, cy, radius, angle), {
      name: name, value: value, cx: cx, cy: cy, radius: radius, angle: angle,
      payload: entry
    });
  });

  return { points: points };
}, _temp2)) || _class;

export default Radar;