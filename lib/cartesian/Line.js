'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2; /**
                              * @fileOverview Line
                              */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSmooth = require('react-smooth');

var _reactSmooth2 = _interopRequireDefault(_reactSmooth);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _Curve = require('../shape/Curve');

var _Curve2 = _interopRequireDefault(_Curve);

var _Dot = require('../shape/Dot');

var _Dot2 = _interopRequireDefault(_Dot);

var _Layer = require('../container/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _LabelList = require('../component/LabelList');

var _LabelList2 = _interopRequireDefault(_LabelList);

var _ErrorBar = require('./ErrorBar');

var _ErrorBar2 = _interopRequireDefault(_ErrorBar);

var _DataUtils = require('../util/DataUtils');

var _ReactUtils = require('../util/ReactUtils');

var _ChartUtils = require('../util/ChartUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FACTOR = 1.0000001;

var Line = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Line, _Component);

  function Line() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Line);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Line.__proto__ || Object.getPrototypeOf(Line)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isAnimationFinished: true,
      totalLength: 0
    }, _this.id = (0, _DataUtils.uniqueId)('recharts-line-'), _this.cachePrevData = function (points) {
      _this.setState({ prevPoints: points });
    }, _this.pathRef = function (node) {
      _this.mainCurve = node;
    }, _this.handleAnimationEnd = function () {
      _this.setState({ isAnimationFinished: true });
      _this.props.onAnimationEnd();
    }, _this.handleAnimationStart = function () {
      _this.setState({ isAnimationFinished: false });
      _this.props.onAnimationStart();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  /**
   * Compose the data of each group
   * @param {Object} props The props from the component
   * @param  {Object} xAxis   The configuration of x-axis
   * @param  {Object} yAxis   The configuration of y-axis
   * @param  {String} dataKey The unique key of a group
   * @return {Array}  Composed data
   */


  _createClass(Line, [{
    key: 'componentDidMount',


    /* eslint-disable  react/no-did-mount-set-state */
    value: function componentDidMount() {
      if (!this.props.isAnimationActive) {
        return;
      }

      var totalLength = this.getTotalLength();
      this.setState({ totalLength: totalLength });
    }
  }, {
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
    key: 'getTotalLength',
    value: function getTotalLength() {
      var curveDom = this.mainCurve;
      var totalLength = curveDom && curveDom.getTotalLength && curveDom.getTotalLength() || 0;

      return totalLength;
    }
  }, {
    key: 'getStrokeDasharray',
    value: function getStrokeDasharray(length, totalLength, lines) {
      var lineLength = lines.reduce(function (pre, next) {
        return pre + next;
      });

      var count = parseInt(length / lineLength, 10);
      var remainLength = length % lineLength;
      var restLength = totalLength - length;

      var remainLines = [];
      for (var i = 0, sum = 0;; sum += lines[i], ++i) {
        if (sum + lines[i] > remainLength) {
          remainLines = [].concat(_toConsumableArray(lines.slice(0, i)), [remainLength - sum]);
          break;
        }
      }

      var emptyLines = remainLines.length % 2 === 0 ? [0, restLength] : [restLength];

      return [].concat(_toConsumableArray(this.repeat(lines, count)), _toConsumableArray(remainLines), emptyLines).map(function (line) {
        return line + 'px';
      }).join(', ');
    }
  }, {
    key: 'repeat',
    value: function repeat(lines, count) {
      var linesUnit = lines.length % 2 !== 0 ? [].concat(_toConsumableArray(lines), [0]) : lines;
      var result = [];

      for (var i = 0; i < count; ++i) {
        result = [].concat(_toConsumableArray(result), _toConsumableArray(linesUnit));
      }

      return result;
    }
  }, {
    key: 'renderErrorBar',
    value: function renderErrorBar() {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }

      var _props2 = this.props,
          points = _props2.points,
          xAxis = _props2.xAxis,
          yAxis = _props2.yAxis,
          layout = _props2.layout,
          children = _props2.children;

      var errorBarItem = (0, _ReactUtils.findChildByType)(children, _ErrorBar2.default);

      if (!errorBarItem) {
        return null;
      }

      function dataPointFormatter(dataPoint, dataKey) {
        return {
          x: dataPoint.x,
          y: dataPoint.y,
          value: dataPoint.value,
          errorVal: (0, _ChartUtils.getValueByDataKey)(dataPoint.payload, dataKey)
        };
      }

      return _react2.default.cloneElement(errorBarItem, {
        data: points,
        xAxis: xAxis,
        yAxis: yAxis,
        layout: layout,
        dataPointFormatter: dataPointFormatter
      });
    }
  }, {
    key: 'renderDotItem',
    value: function renderDotItem(option, props) {
      var dotItem = void 0;

      if (_react2.default.isValidElement(option)) {
        dotItem = _react2.default.cloneElement(option, props);
      } else if ((0, _isFunction3.default)(option)) {
        dotItem = option(props);
      } else {
        var className = (0, _classnames2.default)('recharts-line-dot', option.className);
        dotItem = _react2.default.createElement(_Dot2.default, _extends({}, props, { className: className }));
      }

      return dotItem;
    }
  }, {
    key: 'renderDots',
    value: function renderDots() {
      var _this2 = this;

      var isAnimationActive = this.props.isAnimationActive;


      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }
      var _props3 = this.props,
          dot = _props3.dot,
          points = _props3.points;

      var lineProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
      var customDotProps = (0, _ReactUtils.getPresentationAttributes)(dot);
      var dots = points.map(function (entry, i) {
        var dotProps = _extends({
          key: 'dot-' + i,
          r: 3
        }, lineProps, customDotProps, {
          value: entry.value,
          cx: entry.x, cy: entry.y, index: i, payload: entry.payload
        });

        return _this2.renderDotItem(dot, dotProps);
      });

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-line-dots', key: 'dots' },
        dots
      );
    }
  }, {
    key: 'renderCurveStatically',
    value: function renderCurveStatically(points, needClip, props) {
      var _props4 = this.props,
          type = _props4.type,
          layout = _props4.layout,
          connectNulls = _props4.connectNulls;

      var curveProps = _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), (0, _ReactUtils.filterEventAttributes)(this.props), {
        fill: 'none',
        className: 'recharts-line-curve',
        clipPath: needClip ? 'url(#clipPath-' + this.id + ')' : null,
        points: points
      }, props, {
        type: type, layout: layout, connectNulls: connectNulls
      });

      return _react2.default.createElement(_Curve2.default, _extends({}, curveProps, { pathRef: this.pathRef }));
    }
  }, {
    key: 'renderCurveWithAnimation',
    value: function renderCurveWithAnimation(needClip) {
      var _this3 = this;

      var _props5 = this.props,
          points = _props5.points,
          strokeDasharray = _props5.strokeDasharray,
          isAnimationActive = _props5.isAnimationActive,
          animationBegin = _props5.animationBegin,
          animationDuration = _props5.animationDuration,
          animationEasing = _props5.animationEasing,
          animationId = _props5.animationId,
          other = _objectWithoutProperties(_props5, ['points', 'strokeDasharray', 'isAnimationActive', 'animationBegin', 'animationDuration', 'animationEasing', 'animationId']);

      var _state = this.state,
          prevPoints = _state.prevPoints,
          totalLength = _state.totalLength;


      return _react2.default.createElement(
        _reactSmooth2.default,
        {
          begin: animationBegin,
          duration: animationDuration,
          isActive: isAnimationActive,
          easing: animationEasing,
          from: { t: 0 },
          to: { t: 1 },
          key: 'line-' + animationId,
          onAnimationEnd: this.handleAnimationEnd,
          onAnimationStart: this.handleAnimationStart
        },
        function (_ref2) {
          var t = _ref2.t;

          if (prevPoints) {
            var stepData = points.map(function (entry, index) {
              if (prevPoints[index]) {
                var prev = prevPoints[index];
                var interpolatorX = (0, _DataUtils.interpolateNumber)(prev.x, entry.x);
                var interpolatorY = (0, _DataUtils.interpolateNumber)(prev.y, entry.y);

                return _extends({}, entry, { x: interpolatorX(t), y: interpolatorY(t) });
              }

              return entry;
            });
            return _this3.renderCurveStatically(stepData, needClip);
          }
          var interpolator = (0, _DataUtils.interpolateNumber)(0, totalLength);
          var curLength = interpolator(t);
          var currentStrokeDasharray = void 0;

          if (strokeDasharray) {
            var lines = strokeDasharray.split(/[,\s]+/gim).map(function (num) {
              return parseFloat(num);
            });
            currentStrokeDasharray = _this3.getStrokeDasharray(curLength, totalLength, lines);
          } else {
            currentStrokeDasharray = curLength + 'px ' + (totalLength - curLength) + 'px';
          }

          return _this3.renderCurveStatically(points, needClip, {
            strokeDasharray: currentStrokeDasharray
          });
        }
      );
    }
  }, {
    key: 'renderCurve',
    value: function renderCurve(needClip) {
      var _props6 = this.props,
          points = _props6.points,
          isAnimationActive = _props6.isAnimationActive;
      var _state2 = this.state,
          prevPoints = _state2.prevPoints,
          totalLength = _state2.totalLength;


      if (isAnimationActive && points && points.length && (!prevPoints && totalLength > 0 || !(0, _isEqual3.default)(prevPoints, points))) {
        return this.renderCurveWithAnimation(needClip);
      }

      return this.renderCurveStatically(points, needClip);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props7 = this.props,
          hide = _props7.hide,
          dot = _props7.dot,
          points = _props7.points,
          className = _props7.className,
          xAxis = _props7.xAxis,
          yAxis = _props7.yAxis,
          top = _props7.top,
          left = _props7.left,
          width = _props7.width,
          height = _props7.height,
          isAnimationActive = _props7.isAnimationActive;


      if (hide || !points || !points.length) {
        return null;
      }

      var isAnimationFinished = this.state.isAnimationFinished;

      var hasSinglePoint = points.length === 1;
      var layerClass = (0, _classnames2.default)('recharts-line', className);
      var needClip = xAxis && xAxis.allowDataOverflow || yAxis && yAxis.allowDataOverflow;

      return _react2.default.createElement(
        _Layer2.default,
        { className: layerClass },
        needClip ? _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement(
            'clipPath',
            { id: 'clipPath-' + this.id },
            _react2.default.createElement('rect', { x: left, y: top, width: width, height: height })
          )
        ) : null,
        !hasSinglePoint && this.renderCurve(needClip),
        this.renderErrorBar(),
        (hasSinglePoint || dot) && this.renderDots(),
        (!isAnimationActive || isAnimationFinished) && _LabelList2.default.renderCallByParent(this.props, points)
      );
    }
  }]);

  return Line;
}(_react.Component), _class2.displayName = 'Line', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, _ReactUtils.EVENT_ATTRIBUTES, {
  className: _propTypes2.default.string,
  type: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural', 'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter']), _propTypes2.default.func]),
  unit: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  name: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  yAxisId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  xAxisId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  yAxis: _propTypes2.default.object,
  xAxis: _propTypes2.default.object,
  legendType: _propTypes2.default.oneOf(_ReactUtils.LEGEND_TYPES),
  layout: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  connectNulls: _propTypes2.default.bool,
  hide: _propTypes2.default.bool,

  // whether have dot in line
  activeDot: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.bool]),
  dot: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.bool]),

  top: _propTypes2.default.number,
  left: _propTypes2.default.number,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  points: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    x: _propTypes2.default.number,
    y: _propTypes2.default.number,
    value: _propTypes2.default.value
  })),
  onAnimationStart: _propTypes2.default.func,
  onAnimationEnd: _propTypes2.default.func,

  isAnimationActive: _propTypes2.default.bool,
  animationBegin: _propTypes2.default.number,
  animationDuration: _propTypes2.default.number,
  animationEasing: _propTypes2.default.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
  animationId: _propTypes2.default.number
}), _class2.defaultProps = {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: false,
  activeDot: true,
  dot: true,
  legendType: 'line',
  stroke: '#3182bd',
  strokeWidth: 1,
  fill: '#fff',
  points: [],
  isAnimationActive: !(0, _ReactUtils.isSsr)(),
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',
  hide: false,

  onAnimationStart: function onAnimationStart() {},
  onAnimationEnd: function onAnimationEnd() {}
}, _class2.getComposedData = function (_ref3) {
  var props = _ref3.props,
      xAxis = _ref3.xAxis,
      yAxis = _ref3.yAxis,
      xAxisTicks = _ref3.xAxisTicks,
      yAxisTicks = _ref3.yAxisTicks,
      dataKey = _ref3.dataKey,
      bandSize = _ref3.bandSize,
      displayedData = _ref3.displayedData,
      offset = _ref3.offset;
  var layout = props.layout;


  var points = displayedData.map(function (entry, index) {
    var value = (0, _ChartUtils.getValueByDataKey)(entry, dataKey);

    if (layout === 'horizontal') {
      return {
        x: (0, _ChartUtils.getCateCoordinateOfLine)({ axis: xAxis, ticks: xAxisTicks, bandSize: bandSize, entry: entry, index: index }),
        y: (0, _isNil3.default)(value) ? null : yAxis.scale(value),
        value: value,
        payload: entry
      };
    }

    return {
      x: (0, _isNil3.default)(value) ? null : xAxis.scale(value),
      y: (0, _ChartUtils.getCateCoordinateOfLine)({ axis: yAxis, ticks: yAxisTicks, bandSize: bandSize, entry: entry, index: index }),
      value: value,
      payload: entry
    };
  });

  return _extends({ points: points, layout: layout }, offset);
}, _temp2)) || _class;

exports.default = Line;