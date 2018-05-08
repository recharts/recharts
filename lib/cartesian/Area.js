'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _isNaN2 = require('lodash/isNaN');

var _isNaN3 = _interopRequireDefault(_isNaN2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2; /**
                              * @fileOverview Area
                              */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactSmooth = require('react-smooth');

var _reactSmooth2 = _interopRequireDefault(_reactSmooth);

var _Curve = require('../shape/Curve');

var _Curve2 = _interopRequireDefault(_Curve);

var _Dot = require('../shape/Dot');

var _Dot2 = _interopRequireDefault(_Dot);

var _Layer = require('../container/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _LabelList = require('../component/LabelList');

var _LabelList2 = _interopRequireDefault(_LabelList);

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _ReactUtils = require('../util/ReactUtils');

var _DataUtils = require('../util/DataUtils');

var _ChartUtils = require('../util/ChartUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Area = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Area, _Component);

  function Area() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Area);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Area.__proto__ || Object.getPrototypeOf(Area)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isAnimationFinished: true }, _this.id = (0, _DataUtils.uniqueId)('recharts-area-'), _this.cachePrevData = function (points, baseLine) {
      _this.setState({
        prevPoints: points,
        prevBaseLine: baseLine
      });
    }, _this.handleAnimationEnd = function () {
      var onAnimationEnd = _this.props.onAnimationEnd;


      _this.setState({ isAnimationFinished: true });

      if ((0, _isFunction3.default)(onAnimationEnd)) {
        onAnimationEnd();
      }
    }, _this.handleAnimationStart = function () {
      var onAnimationStart = _this.props.onAnimationStart;

      _this.setState({ isAnimationFinished: false });

      if ((0, _isFunction3.default)(onAnimationStart)) {
        onAnimationStart();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Area, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props,
          animationId = _props.animationId,
          points = _props.points,
          baseLine = _props.baseLine;


      if (nextProps.animationId !== animationId) {
        this.cachePrevData(points, baseLine);
      }
    }
  }, {
    key: 'renderDots',
    value: function renderDots() {
      var _this2 = this;

      var isAnimationActive = this.props.isAnimationActive;


      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }

      var _props2 = this.props,
          dot = _props2.dot,
          points = _props2.points,
          dataKey = _props2.dataKey;

      var areaProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
      var customDotProps = (0, _ReactUtils.getPresentationAttributes)(dot);
      var dotEvents = (0, _ReactUtils.filterEventAttributes)(dot);

      var dots = points.map(function (entry, i) {
        var dotProps = _extends({
          key: 'dot-' + i,
          r: 3
        }, areaProps, customDotProps, dotEvents, {
          dataKey: dataKey,
          cx: entry.x,
          cy: entry.y,
          index: i,
          value: entry.value,
          payload: entry.payload
        });

        return _this2.constructor.renderDotItem(dot, dotProps);
      });

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-area-dots' },
        dots
      );
    }
  }, {
    key: 'renderHorizontalRect',
    value: function renderHorizontalRect(alpha) {
      var _props3 = this.props,
          baseLine = _props3.baseLine,
          points = _props3.points,
          strokeWidth = _props3.strokeWidth;

      var startX = points[0].x;
      var endX = points[points.length - 1].x;
      var width = alpha * Math.abs(startX - endX);
      var maxY = Math.max.apply(null, points.map(function (entry) {
        return entry.y || 0;
      }));

      if ((0, _DataUtils.isNumber)(baseLine)) {
        maxY = Math.max(baseLine, maxY);
      } else if (baseLine && (0, _isArray3.default)(baseLine) && baseLine.length) {
        maxY = Math.max(Math.max.apply(null, baseLine.map(function (entry) {
          return entry.y || 0;
        })), maxY);
      }

      if ((0, _DataUtils.isNumber)(maxY)) {
        return _react2.default.createElement('rect', {
          x: startX < endX ? startX : startX - width,
          y: 0,
          width: width,
          height: maxY + (strokeWidth || 1)
        });
      }

      return null;
    }
  }, {
    key: 'renderVerticalRect',
    value: function renderVerticalRect(alpha) {
      var _props4 = this.props,
          baseLine = _props4.baseLine,
          points = _props4.points,
          strokeWidth = _props4.strokeWidth;

      var startY = points[0].y;
      var endY = points[points.length - 1].y;
      var height = alpha * Math.abs(startY - endY);
      var maxX = Math.max.apply(null, points.map(function (entry) {
        return entry.x || 0;
      }));

      if ((0, _DataUtils.isNumber)(baseLine)) {
        maxX = Math.max(baseLine, maxX);
      } else if (baseLine && (0, _isArray3.default)(baseLine) && baseLine.length) {
        maxX = Math.max(Math.max.apply(null, baseLine.map(function (entry) {
          return entry.x || 0;
        })), maxX);
      }

      if ((0, _DataUtils.isNumber)(maxX)) {
        return _react2.default.createElement('rect', {
          x: 0,
          y: startY < endY ? startY : startY - height,
          width: maxX + (strokeWidth || 1),
          height: height
        });
      }

      return null;
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
    key: 'renderAreaStatically',
    value: function renderAreaStatically(points, baseLine, needClip) {
      var _props5 = this.props,
          layout = _props5.layout,
          type = _props5.type,
          stroke = _props5.stroke,
          connectNulls = _props5.connectNulls,
          isRange = _props5.isRange;


      return _react2.default.createElement(
        _Layer2.default,
        { clipPath: needClip ? 'url(#clipPath-' + this.id + ')' : null },
        _react2.default.createElement(_Curve2.default, _extends({}, this.props, {
          points: points,
          baseLine: baseLine,
          stroke: 'none',
          className: 'recharts-area-area'
        })),
        stroke !== 'none' && _react2.default.createElement(_Curve2.default, _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
          className: 'recharts-area-curve',
          layout: layout,
          type: type,
          connectNulls: connectNulls,
          fill: 'none',
          points: points
        })),
        stroke !== 'none' && isRange && _react2.default.createElement(_Curve2.default, _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
          className: 'recharts-area-curve',
          layout: layout,
          type: type,
          connectNulls: connectNulls,
          fill: 'none',
          points: baseLine
        }))
      );
    }
  }, {
    key: 'renderAreaWithAnimation',
    value: function renderAreaWithAnimation(needClip) {
      var _this3 = this;

      var _props6 = this.props,
          points = _props6.points,
          baseLine = _props6.baseLine,
          isAnimationActive = _props6.isAnimationActive,
          animationBegin = _props6.animationBegin,
          animationDuration = _props6.animationDuration,
          animationEasing = _props6.animationEasing,
          animationId = _props6.animationId,
          id = _props6.id;
      var _state = this.state,
          prevPoints = _state.prevPoints,
          prevBaseLine = _state.prevBaseLine;

      var clipPathId = (0, _isNil3.default)(id) ? this.id : id;

      return _react2.default.createElement(
        _reactSmooth2.default,
        {
          begin: animationBegin,
          duration: animationDuration,
          isActive: isAnimationActive,
          easing: animationEasing,
          from: { t: 0 },
          to: { t: 1 },
          key: 'area-' + animationId,
          onAnimationEnd: this.handleAnimationEnd,
          onAnimationStart: this.handleAnimationStart
        },
        function (_ref2) {
          var t = _ref2.t;

          if (prevPoints) {
            // update animtaion
            var stepPoints = points.map(function (entry, index) {
              if (prevPoints[index]) {
                var prev = prevPoints[index];
                var interpolatorX = (0, _DataUtils.interpolateNumber)(prev.x, entry.x);
                var interpolatorY = (0, _DataUtils.interpolateNumber)(prev.y, entry.y);

                return _extends({}, entry, { x: interpolatorX(t), y: interpolatorY(t) });
              }

              return entry;
            });
            var stepBaseLine = void 0;

            if ((0, _DataUtils.isNumber)(baseLine)) {
              var interpolator = (0, _DataUtils.interpolateNumber)(prevBaseLine, baseLine);
              stepBaseLine = interpolator(t);
            } else if ((0, _isNil3.default)(baseLine) || (0, _isNaN3.default)(baseLine)) {
              var _interpolator = (0, _DataUtils.interpolateNumber)(prevBaseLine, 0);
              stepBaseLine = _interpolator(t);
            } else {
              stepBaseLine = baseLine.map(function (entry, index) {
                if (prevBaseLine[index]) {
                  var prev = prevBaseLine[index];
                  var interpolatorX = (0, _DataUtils.interpolateNumber)(prev.x, entry.x);
                  var interpolatorY = (0, _DataUtils.interpolateNumber)(prev.y, entry.y);

                  return _extends({}, entry, { x: interpolatorX(t), y: interpolatorY(t) });
                }

                return entry;
              });
            }

            return _this3.renderAreaStatically(stepPoints, stepBaseLine, needClip);
          }

          return _react2.default.createElement(
            _Layer2.default,
            null,
            _react2.default.createElement(
              'defs',
              null,
              _react2.default.createElement(
                'clipPath',
                { id: 'animationClipPath-' + clipPathId },
                _this3.renderClipRect(t)
              )
            ),
            _react2.default.createElement(
              _Layer2.default,
              { clipPath: 'url(#animationClipPath-' + clipPathId + ')' },
              _this3.renderAreaStatically(points, baseLine, needClip)
            )
          );
        }
      );
    }
  }, {
    key: 'renderArea',
    value: function renderArea(needClip) {
      var _props7 = this.props,
          points = _props7.points,
          baseLine = _props7.baseLine,
          isAnimationActive = _props7.isAnimationActive;
      var _state2 = this.state,
          prevPoints = _state2.prevPoints,
          prevBaseLine = _state2.prevBaseLine,
          totalLength = _state2.totalLength;


      if (isAnimationActive && points && points.length && (!prevPoints && totalLength > 0 || !(0, _isEqual3.default)(prevPoints, points) || !(0, _isEqual3.default)(prevBaseLine, baseLine))) {
        return this.renderAreaWithAnimation(needClip);
      }

      return this.renderAreaStatically(points, baseLine, needClip);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props8 = this.props,
          hide = _props8.hide,
          dot = _props8.dot,
          points = _props8.points,
          className = _props8.className,
          top = _props8.top,
          left = _props8.left,
          xAxis = _props8.xAxis,
          yAxis = _props8.yAxis,
          width = _props8.width,
          height = _props8.height,
          isAnimationActive = _props8.isAnimationActive,
          id = _props8.id;


      if (hide || !points || !points.length) {
        return null;
      }

      var isAnimationFinished = this.state.isAnimationFinished;

      var hasSinglePoint = points.length === 1;
      var layerClass = (0, _classnames2.default)('recharts-area', className);
      var needClip = xAxis && xAxis.allowDataOverflow || yAxis && yAxis.allowDataOverflow;
      var clipPathId = (0, _isNil3.default)(id) ? this.id : id;

      return _react2.default.createElement(
        _Layer2.default,
        { className: layerClass },
        needClip ? _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement(
            'clipPath',
            { id: 'clipPath-' + clipPathId },
            _react2.default.createElement('rect', { x: left, y: top, width: width, height: height })
          )
        ) : null,
        !hasSinglePoint ? this.renderArea(needClip) : null,
        (dot || hasSinglePoint) && this.renderDots(),
        (!isAnimationActive || isAnimationFinished) && _LabelList2.default.renderCallByParent(this.props, points)
      );
    }
  }]);

  return Area;
}(_react.Component), _class2.displayName = 'Area', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, _ReactUtils.EVENT_ATTRIBUTES, {
  className: _propTypes2.default.string,
  dataKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.func]).isRequired,
  type: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural', 'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter']), _propTypes2.default.func]),
  unit: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  name: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  yAxisId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  xAxisId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  yAxis: _propTypes2.default.object,
  xAxis: _propTypes2.default.object,
  stackId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  legendType: _propTypes2.default.oneOf(_ReactUtils.LEGEND_TYPES),
  connectNulls: _propTypes2.default.bool,

  activeDot: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.bool]),
  // dot configuration
  dot: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element, _propTypes2.default.object, _propTypes2.default.bool]),
  label: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element, _propTypes2.default.object, _propTypes2.default.bool]),
  hide: _propTypes2.default.bool,
  // have curve configuration
  layout: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  baseLine: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.array]),
  isRange: _propTypes2.default.bool,
  points: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    x: _propTypes2.default.number,
    y: _propTypes2.default.number,
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.array])
  })),

  onAnimationStart: _propTypes2.default.func,
  onAnimationEnd: _propTypes2.default.func,
  animationId: _propTypes2.default.number,
  isAnimationActive: _propTypes2.default.bool,
  animationBegin: _propTypes2.default.number,
  animationDuration: _propTypes2.default.number,
  animationEasing: _propTypes2.default.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),

  id: _propTypes2.default.string
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
  activeDot: true,
  hide: false,

  isAnimationActive: !(0, _ReactUtils.isSsr)(),
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease'
}, _class2.getBaseValue = function (props, xAxis, yAxis) {
  var layout = props.layout,
      baseValue = props.baseValue;


  if ((0, _DataUtils.isNumber)(baseValue)) {
    return baseValue;
  }

  var numericAxis = layout === 'horizontal' ? yAxis : xAxis;
  var domain = numericAxis.scale.domain();

  if (numericAxis.type === 'number') {
    var max = Math.max(domain[0], domain[1]);
    var min = Math.min(domain[0], domain[1]);

    if (baseValue === 'dataMin') {
      return min;
    }
    if (baseValue === 'dataMax') {
      return max;
    }

    return max < 0 ? max : Math.max(Math.min(domain[0], domain[1]), 0);
  }

  if (baseValue === 'dataMin') {
    return domain[0];
  }
  if (baseValue === 'dataMax') {
    return domain[1];
  }

  return domain[0];
}, _class2.getComposedData = function (_ref3) {
  var props = _ref3.props,
      xAxis = _ref3.xAxis,
      yAxis = _ref3.yAxis,
      xAxisTicks = _ref3.xAxisTicks,
      yAxisTicks = _ref3.yAxisTicks,
      bandSize = _ref3.bandSize,
      dataKey = _ref3.dataKey,
      stackedData = _ref3.stackedData,
      dataStartIndex = _ref3.dataStartIndex,
      displayedData = _ref3.displayedData,
      offset = _ref3.offset;
  var layout = props.layout;

  var hasStack = stackedData && stackedData.length;
  var baseValue = Area.getBaseValue(props, xAxis, yAxis);
  var isRange = false;

  var points = displayedData.map(function (entry, index) {
    var value = void 0;

    if (hasStack) {
      value = stackedData[dataStartIndex + index];
    } else {
      value = (0, _ChartUtils.getValueByDataKey)(entry, dataKey);

      if (!(0, _isArray3.default)(value)) {
        value = [baseValue, value];
      } else {
        isRange = true;
      }
    }

    if (layout === 'horizontal') {
      return {
        x: (0, _ChartUtils.getCateCoordinateOfLine)({ axis: xAxis, ticks: xAxisTicks, bandSize: bandSize, entry: entry, index: index }),
        y: (0, _isNil3.default)(value[1]) ? null : yAxis.scale(value[1]),
        value: value,
        payload: entry
      };
    }

    return {
      x: (0, _isNil3.default)(value[1]) ? null : xAxis.scale(value[1]),
      y: (0, _ChartUtils.getCateCoordinateOfLine)({ axis: yAxis, ticks: yAxisTicks, bandSize: bandSize, entry: entry, index: index }),
      value: value,
      payload: entry
    };
  });

  var baseLine = void 0;
  if (hasStack || isRange) {
    baseLine = points.map(function (entry) {
      return {
        x: layout === 'horizontal' ? entry.x : xAxis.scale(entry && entry.value[0]),
        y: layout === 'horizontal' ? yAxis.scale(entry && entry.value[0]) : entry.y
      };
    });
  } else if (layout === 'horizontal') {
    baseLine = yAxis.scale(baseValue);
  } else {
    baseLine = xAxis.scale(baseValue);
  }

  return _extends({ points: points, baseLine: baseLine, layout: layout, isRange: isRange }, offset);
}, _class2.renderDotItem = function (option, props) {
  var dotItem = void 0;

  if (_react2.default.isValidElement(option)) {
    dotItem = _react2.default.cloneElement(option, props);
  } else if ((0, _isFunction3.default)(option)) {
    dotItem = option(props);
  } else {
    dotItem = _react2.default.createElement(_Dot2.default, _extends({}, props, { className: 'recharts-area-dot' }));
  }

  return dotItem;
}, _temp2)) || _class;

exports.default = Area;