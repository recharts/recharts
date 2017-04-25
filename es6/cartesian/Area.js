import _isArray from 'lodash/isArray';
import _isFunction from 'lodash/isFunction';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Area
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Animate from 'react-smooth';

import Curve from '../shape/Curve';
import Dot from '../shape/Dot';
import Layer from '../container/Layer';
import Text from '../component/Text';
import pureRender from '../util/PureRender';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, LEGEND_TYPES, getPresentationAttributes, isSsr } from '../util/ReactUtils';
import { isNumber, uniqueId } from '../util/DataUtils';

var Area = pureRender(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Area, _Component);

  function Area() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Area);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Area.__proto__ || Object.getPrototypeOf(Area)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isAnimationFinished: true }, _this.id = uniqueId('recharts-area-'), _this.handleAnimationEnd = function () {
      _this.setState({ isAnimationFinished: true });
      _this.props.onAnimationEnd();
    }, _this.handleAnimationStart = function () {
      _this.setState({ isAnimationFinished: false });
      _this.props.onAnimationStart();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Area, [{
    key: 'renderCurve',
    value: function renderCurve() {
      var _props = this.props,
          layout = _props.layout,
          type = _props.type,
          stroke = _props.stroke,
          points = _props.points,
          baseLine = _props.baseLine,
          connectNulls = _props.connectNulls,
          isRange = _props.isRange;


      return React.createElement(
        'g',
        null,
        stroke !== 'none' && React.createElement(Curve, _extends({}, getPresentationAttributes(this.props), {
          className: 'recharts-area-curve',
          layout: layout,
          type: type,
          connectNulls: connectNulls,
          fill: 'none',
          points: points
        })),
        stroke !== 'none' && isRange && React.createElement(Curve, _extends({}, getPresentationAttributes(this.props), {
          className: 'recharts-area-curve',
          layout: layout,
          type: type,
          connectNulls: connectNulls,
          fill: 'none',
          points: baseLine
        })),
        React.createElement(Curve, _extends({}, this.props, {
          stroke: 'none',
          className: 'recharts-area-area'
        }))
      );
    }
  }, {
    key: 'renderHorizontalRect',
    value: function renderHorizontalRect(alpha) {
      var _props2 = this.props,
          baseLine = _props2.baseLine,
          points = _props2.points,
          strokeWidth = _props2.strokeWidth;

      var startX = points[0].x;
      var endX = points[points.length - 1].x;
      var width = alpha * Math.abs(startX - endX);
      var maxY = Math.max.apply(null, points.map(function (entry) {
        return entry.y || 0;
      }));

      if (isNumber(baseLine)) {
        maxY = Math.max(baseLine, maxY);
      } else {
        maxY = Math.max(Math.max.apply(null, baseLine.map(function (entry) {
          return entry.y || 0;
        })), maxY);
      }

      return React.createElement('rect', {
        x: startX < endX ? startX : startX - width,
        y: 0,
        width: width,
        height: maxY + (strokeWidth || 1)
      });
    }
  }, {
    key: 'renderVerticalRect',
    value: function renderVerticalRect(alpha) {
      var _props3 = this.props,
          baseLine = _props3.baseLine,
          points = _props3.points,
          strokeWidth = _props3.strokeWidth;

      var startY = points[0].y;
      var endY = points[points.length - 1].y;
      var height = alpha * Math.abs(startY - endY);
      var maxX = Math.max.apply(null, points.map(function (entry) {
        return entry.x || 0;
      }));

      if (isNumber(baseLine)) {
        maxX = Math.max(baseLine, maxX);
      } else {
        maxX = Math.max(Math.max.apply(null, baseLine.map(function (entry) {
          return entry.x || 0;
        })), maxX);
      }

      return React.createElement('rect', {
        x: 0,
        y: startY < endY ? startY : startY - height,
        width: maxX + (strokeWidth || 1),
        height: height
      });
    }
  }, {
    key: 'renderClipRect',
    value: function renderClipRect(alpha) {
      var layout = this.props.layout;


      if (layout === 'vertical') {
        return this.renderVerticalRect(alpha);
      }

      return this.renderHorizontalRect(alpha);
    }
  }, {
    key: 'renderClipPath',
    value: function renderClipPath() {
      var _this2 = this;

      var _props4 = this.props,
          isAnimationActive = _props4.isAnimationActive,
          animationDuration = _props4.animationDuration,
          animationEasing = _props4.animationEasing,
          animationBegin = _props4.animationBegin,
          animationId = _props4.animationId;


      return React.createElement(
        'defs',
        null,
        React.createElement(
          'clipPath',
          { id: 'animationClipPath-' + this.id },
          React.createElement(
            Animate,
            {
              easing: animationEasing,
              isActive: isAnimationActive,
              duration: animationDuration,
              key: animationId,
              animationBegin: animationBegin,
              onAnimationStart: this.handleAnimationStart,
              onAnimationEnd: this.handleAnimationEnd,
              from: { alpha: 0 },
              to: { alpha: 1 }
            },
            function (_ref2) {
              var alpha = _ref2.alpha;
              return _this2.renderClipRect(alpha);
            }
          )
        )
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
        dotItem = React.createElement(Dot, _extends({}, props, { className: 'recharts-area-dot' }));
      }

      return dotItem;
    }
  }, {
    key: 'renderDots',
    value: function renderDots() {
      var _this3 = this;

      var isAnimationActive = this.props.isAnimationActive;


      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }

      var _props5 = this.props,
          dot = _props5.dot,
          points = _props5.points;

      var areaProps = getPresentationAttributes(this.props);
      var customDotProps = getPresentationAttributes(dot);

      var dots = points.map(function (entry, i) {
        var dotProps = _extends({
          key: 'dot-' + i,
          r: 3
        }, areaProps, customDotProps, {
          cx: entry.x,
          cy: entry.y,
          index: i,
          value: entry.value,
          payload: entry.payload
        });

        return _this3.renderDotItem(dot, dotProps);
      });

      return React.createElement(
        Layer,
        { className: 'recharts-area-dots' },
        dots
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
            className: 'recharts-area-label'
          }),
          _isArray(value) ? value[1] : value
        );
      }

      return labelItem;
    }
  }, {
    key: 'renderLabels',
    value: function renderLabels() {
      var _this4 = this;

      var isAnimationActive = this.props.isAnimationActive;


      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }

      var _props6 = this.props,
          points = _props6.points,
          label = _props6.label;

      var areaProps = getPresentationAttributes(this.props);
      var customLabelProps = getPresentationAttributes(label);

      var labels = points.map(function (entry, i) {
        var labelProps = _extends({
          textAnchor: 'middle'
        }, entry, areaProps, customLabelProps, {
          index: i,
          key: 'label-' + i,
          value: entry.value,
          payload: entry.payload
        });

        return _this4.renderLabelItem(label, labelProps, entry.value);
      });

      return React.createElement(
        Layer,
        { className: 'recharts-area-labels' },
        labels
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props7 = this.props,
          dot = _props7.dot,
          label = _props7.label,
          points = _props7.points,
          className = _props7.className,
          top = _props7.top,
          left = _props7.left,
          xAxis = _props7.xAxis,
          yAxis = _props7.yAxis,
          width = _props7.width,
          height = _props7.height;


      if (!points || !points.length) {
        return null;
      }

      var hasSinglePoint = points.length === 1;
      var layerClass = classNames('recharts-area', className);
      var needClip = xAxis && xAxis.allowDataOverflow || yAxis && yAxis.allowDataOverflow;

      return React.createElement(
        Layer,
        { className: layerClass },
        needClip ? React.createElement(
          'defs',
          null,
          React.createElement(
            'clipPath',
            { id: 'clipPath-' + this.id },
            React.createElement('rect', { x: left, y: top, width: width, height: height })
          )
        ) : null,
        !hasSinglePoint ? this.renderClipPath() : null,
        !hasSinglePoint ? React.createElement(
          Layer,
          { clipPath: needClip ? 'url(#clipPath-' + this.id + ')' : null },
          React.createElement(
            Layer,
            { clipPath: 'url(#animationClipPath-' + this.id + ')' },
            this.renderCurve()
          )
        ) : null,
        (dot || hasSinglePoint) && this.renderDots(),
        label && this.renderLabels()
      );
    }
  }]);

  return Area;
}(Component), _class2.displayName = 'Area', _class2.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, {
  className: PropTypes.string,
  dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]).isRequired,
  type: PropTypes.oneOfType([PropTypes.oneOf(['basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural', 'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter']), PropTypes.func]),
  unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  yAxis: PropTypes.object,
  xAxis: PropTypes.object,
  stackId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  legendType: PropTypes.oneOf(LEGEND_TYPES),
  connectNulls: PropTypes.bool,

  activeDot: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool]),
  // dot configuration
  dot: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.object, PropTypes.bool]),
  label: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.object, PropTypes.bool]),

  // have curve configuration
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  baseLine: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  isRange: PropTypes.bool,
  points: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.array])
  })),
  onAnimationStart: PropTypes.func,
  onAnimationEnd: PropTypes.func,

  animationId: PropTypes.number,
  isAnimationActive: PropTypes.bool,
  animationBegin: PropTypes.number,
  animationDuration: PropTypes.number,
  animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
}), _class2.defaultProps = {
  stroke: '#3182bd',
  fill: '#3182bd',
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: 'line',
  connectNulls: false,
  // points of area
  points: [],
  dot: false,
  label: false,
  activeDot: true,

  isAnimationActive: !isSsr(),
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',

  onAnimationStart: function onAnimationStart() {},
  onAnimationEnd: function onAnimationEnd() {}
}, _temp2)) || _class;

export default Area;