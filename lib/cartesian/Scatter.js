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
                              * @fileOverview Render a group of scatters
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

var _Layer = require('../container/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _LabelList = require('../component/LabelList');

var _LabelList2 = _interopRequireDefault(_LabelList);

var _ReactUtils = require('../util/ReactUtils');

var _ZAxis = require('./ZAxis');

var _ZAxis2 = _interopRequireDefault(_ZAxis);

var _Curve = require('../shape/Curve');

var _Curve2 = _interopRequireDefault(_Curve);

var _Symbols = require('../shape/Symbols');

var _Symbols2 = _interopRequireDefault(_Symbols);

var _ErrorBar = require('./ErrorBar');

var _ErrorBar2 = _interopRequireDefault(_ErrorBar);

var _Cell = require('../component/Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _DataUtils = require('../util/DataUtils');

var _ChartUtils = require('../util/ChartUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scatter = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Scatter, _Component);

  function Scatter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Scatter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Scatter.__proto__ || Object.getPrototypeOf(Scatter)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isAnimationFinished: false }, _this.cachePrevPoints = function (points) {
      _this.setState({ prevPoints: points });
    }, _this.handleAnimationEnd = function () {
      _this.setState({ isAnimationFinished: true });
    }, _this.handleAnimationStart = function () {
      _this.setState({ isAnimationFinished: false });
    }, _this.id = (0, _DataUtils.uniqueId)('recharts-scatter-'), _temp), _possibleConstructorReturn(_this, _ret);
  }

  /**
   * Compose the data of each group
   * @param  {Object} xAxis   The configuration of x-axis
   * @param  {Object} yAxis   The configuration of y-axis
   * @param  {String} dataKey The unique key of a group
   * @return {Array}  Composed data
   */


  _createClass(Scatter, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props,
          animationId = _props.animationId,
          points = _props.points;


      if (nextProps.animationId !== animationId) {
        this.cachePrevPoints(points);
      }
    }
  }, {
    key: 'renderSymbolItem',
    value: function renderSymbolItem(option, props) {
      var symbol = void 0;

      if (_react2.default.isValidElement(option)) {
        symbol = _react2.default.cloneElement(option, props);
      } else if ((0, _isFunction3.default)(option)) {
        symbol = option(props);
      } else {
        symbol = _react2.default.createElement(_Symbols2.default, _extends({}, props, { type: option }));
      }

      return symbol;
    }
  }, {
    key: 'renderSymbolsStatically',
    value: function renderSymbolsStatically(points) {
      var _this2 = this;

      var _props2 = this.props,
          shape = _props2.shape,
          activeShape = _props2.activeShape,
          activeIndex = _props2.activeIndex;

      var baseProps = (0, _ReactUtils.getPresentationAttributes)(this.props);

      return points.map(function (entry, i) {
        var props = _extends({ key: 'symbol-' + i }, baseProps, entry);

        return _react2.default.createElement(
          _Layer2.default,
          _extends({
            className: 'recharts-scatter-symbol'
          }, (0, _ReactUtils.filterEventsOfChild)(_this2.props, entry, i), {
            key: 'symbol-' + i
          }),
          _this2.renderSymbolItem(activeIndex === i ? activeShape : shape, props)
        );
      });
    }
  }, {
    key: 'renderSymbolsWithAnimation',
    value: function renderSymbolsWithAnimation() {
      var _this3 = this;

      var _props3 = this.props,
          points = _props3.points,
          isAnimationActive = _props3.isAnimationActive,
          animationBegin = _props3.animationBegin,
          animationDuration = _props3.animationDuration,
          animationEasing = _props3.animationEasing,
          animationId = _props3.animationId;
      var prevPoints = this.state.prevPoints;


      return _react2.default.createElement(
        _reactSmooth2.default,
        {
          begin: animationBegin,
          duration: animationDuration,
          isActive: isAnimationActive,
          easing: animationEasing,
          from: { t: 0 },
          to: { t: 1 },
          key: 'pie-' + animationId,
          onAnimationEnd: this.handleAnimationEnd,
          onAnimationStart: this.handleAnimationStart
        },
        function (_ref2) {
          var t = _ref2.t;

          var stepData = points.map(function (entry, index) {
            var prev = prevPoints && prevPoints[index];

            if (prev) {
              var interpolatorCx = (0, _DataUtils.interpolateNumber)(prev.cx, entry.cx);
              var interpolatorCy = (0, _DataUtils.interpolateNumber)(prev.cy, entry.cy);
              var interpolatorSize = (0, _DataUtils.interpolateNumber)(prev.size, entry.size);

              return _extends({}, entry, {
                cx: interpolatorCx(t),
                cy: interpolatorCy(t),
                size: interpolatorSize(t)
              });
            }

            var interpolator = (0, _DataUtils.interpolateNumber)(0, entry.size);

            return _extends({}, entry, { size: interpolator(t) });
          });

          return _react2.default.createElement(
            _Layer2.default,
            null,
            _this3.renderSymbolsStatically(stepData)
          );
        }
      );
    }
  }, {
    key: 'renderSymbols',
    value: function renderSymbols() {
      var _props4 = this.props,
          points = _props4.points,
          isAnimationActive = _props4.isAnimationActive;
      var prevPoints = this.state.prevPoints;


      if (isAnimationActive && points && points.length && (!prevPoints || !(0, _isEqual3.default)(prevPoints, points))) {
        return this.renderSymbolsWithAnimation();
      }

      return this.renderSymbolsStatically(points);
    }
  }, {
    key: 'renderErrorBar',
    value: function renderErrorBar() {
      var isAnimationActive = this.props.isAnimationActive;

      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }

      var _props5 = this.props,
          points = _props5.points,
          xAxis = _props5.xAxis,
          yAxis = _props5.yAxis,
          children = _props5.children;

      var errorBarItems = (0, _ReactUtils.findAllByType)(children, _ErrorBar2.default);

      if (!errorBarItems) {
        return null;
      }

      function dataPointFormatterY(dataPoint, dataKey) {
        return {
          x: dataPoint.cx,
          y: dataPoint.cy,
          value: dataPoint.y,
          errorVal: (0, _ChartUtils.getValueByDataKey)(dataPoint, dataKey)
        };
      }

      function dataPointFormatterX(dataPoint, dataKey) {
        return {
          x: dataPoint.cx,
          y: dataPoint.cy,
          value: dataPoint.x,
          errorVal: (0, _ChartUtils.getValueByDataKey)(dataPoint, dataKey)
        };
      }

      return errorBarItems.map(function (item, i) {
        var direction = item.props.direction;


        return _react2.default.cloneElement(item, {
          key: i,
          data: points,
          xAxis: xAxis,
          yAxis: yAxis,
          layout: direction === 'x' ? 'vertical' : 'horizontal',
          dataPointFormatter: direction === 'x' ? dataPointFormatterX : dataPointFormatterY
        });
      });
    }
  }, {
    key: 'renderLine',
    value: function renderLine() {
      var _props6 = this.props,
          points = _props6.points,
          line = _props6.line,
          lineType = _props6.lineType,
          lineJointType = _props6.lineJointType;

      var scatterProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
      var customLineProps = (0, _ReactUtils.getPresentationAttributes)(line);
      var linePoints = void 0,
          lineItem = void 0;

      if (lineType === 'joint') {
        linePoints = points.map(function (entry) {
          return { x: entry.cx, y: entry.cy };
        });
      } else if (lineType === 'fitting') {
        var _getLinearRegression = (0, _DataUtils.getLinearRegression)(points),
            xmin = _getLinearRegression.xmin,
            xmax = _getLinearRegression.xmax,
            a = _getLinearRegression.a,
            b = _getLinearRegression.b;

        var linearExp = function linearExp(x) {
          return a * x + b;
        };
        linePoints = [{ x: xmin, y: linearExp(xmin) }, { x: xmax, y: linearExp(xmax) }];
      }
      var lineProps = _extends({}, scatterProps, {
        fill: 'none',
        stroke: scatterProps && scatterProps.fill
      }, customLineProps, {
        points: linePoints
      });

      if (_react2.default.isValidElement(line)) {
        lineItem = _react2.default.cloneElement(line, lineProps);
      } else if ((0, _isFunction3.default)(line)) {
        lineItem = line(lineProps);
      } else {
        lineItem = _react2.default.createElement(_Curve2.default, _extends({}, lineProps, { type: lineJointType }));
      }

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-scatter-line', key: 'recharts-scatter-line' },
        lineItem
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props7 = this.props,
          hide = _props7.hide,
          points = _props7.points,
          line = _props7.line,
          className = _props7.className,
          xAxis = _props7.xAxis,
          yAxis = _props7.yAxis,
          left = _props7.left,
          top = _props7.top,
          width = _props7.width,
          height = _props7.height,
          id = _props7.id;

      if (hide || !points || !points.length) {
        return null;
      }
      var _state = this.state,
          isAnimationActive = _state.isAnimationActive,
          isAnimationFinished = _state.isAnimationFinished;

      var layerClass = (0, _classnames2.default)('recharts-scatter', className);
      var needClip = xAxis && xAxis.allowDataOverflow || yAxis && yAxis.allowDataOverflow;
      var clipPathId = (0, _isNil3.default)(id) ? this.id : id;

      return _react2.default.createElement(
        _Layer2.default,
        {
          className: layerClass,
          clipPath: needClip ? 'url(#clipPath-' + clipPathId + ')' : null
        },
        needClip ? _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement(
            'clipPath',
            { id: 'clipPath-' + clipPathId },
            _react2.default.createElement('rect', { x: left, y: top, width: width, height: height })
          )
        ) : null,
        line && this.renderLine(),
        this.renderErrorBar(),
        _react2.default.createElement(
          _Layer2.default,
          { key: 'recharts-scatter-symbols' },
          this.renderSymbols()
        ),
        (!isAnimationActive || isAnimationFinished) && _LabelList2.default.renderCallByParent(this.props, points)
      );
    }
  }]);

  return Scatter;
}(_react.Component), _class2.displayName = 'Scatter', _class2.propTypes = _extends({}, _ReactUtils.EVENT_ATTRIBUTES, _ReactUtils.PRESENTATION_ATTRIBUTES, {

  xAxisId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  yAxisId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  zAxisId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  line: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object, _propTypes2.default.func, _propTypes2.default.element]),
  lineType: _propTypes2.default.oneOf(['fitting', 'joint']),
  lineJointType: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural', 'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter']), _propTypes2.default.func]),
  legendType: _propTypes2.default.oneOf(_ReactUtils.LEGEND_TYPES),
  className: _propTypes2.default.string,
  name: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

  activeIndex: _propTypes2.default.number,
  activeShape: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func, _propTypes2.default.element]),
  shape: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']), _propTypes2.default.element, _propTypes2.default.func]),
  points: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    cx: _propTypes2.default.number,
    cy: _propTypes2.default.number,
    size: _propTypes2.default.number,
    node: _propTypes2.default.shape({
      x: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
      y: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
      z: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
    }),
    payload: _propTypes2.default.any
  })),
  hide: _propTypes2.default.bool,

  isAnimationActive: _propTypes2.default.bool,
  animationId: _propTypes2.default.number,
  animationBegin: _propTypes2.default.number,
  animationDuration: _propTypes2.default.number,
  animationEasing: _propTypes2.default.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
}), _class2.defaultProps = {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: 'circle',
  lineType: 'joint',
  lineJointType: 'linear',
  data: [],
  shape: 'circle',
  hide: false,

  isAnimationActive: !(0, _ReactUtils.isSsr)(),
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: 'linear'
}, _class2.getComposedData = function (_ref3) {
  var xAxis = _ref3.xAxis,
      yAxis = _ref3.yAxis,
      zAxis = _ref3.zAxis,
      item = _ref3.item,
      displayedData = _ref3.displayedData,
      onItemMouseLeave = _ref3.onItemMouseLeave,
      onItemMouseEnter = _ref3.onItemMouseEnter,
      offset = _ref3.offset,
      xAxisTicks = _ref3.xAxisTicks;

  var cells = (0, _ReactUtils.findAllByType)(item.props.children, _Cell2.default);
  var xAxisDataKey = (0, _isNil3.default)(xAxis.dataKey) ? item.props.dataKey : xAxis.dataKey;
  var yAxisDataKey = (0, _isNil3.default)(yAxis.dataKey) ? item.props.dataKey : yAxis.dataKey;
  var zAxisDataKey = zAxis && zAxis.dataKey;
  var defaultRangeZ = zAxis ? zAxis.range : _ZAxis2.default.defaultProps.range;
  var defaultZ = defaultRangeZ && defaultRangeZ[0];
  var xBandSize = xAxis.scale.bandwidth ? xAxis.scale.bandwidth() : 0;
  var yBandSize = yAxis.scale.bandwidth ? yAxis.scale.bandwidth() : 0;
  var points = displayedData.map(function (entry, index) {
    var x = entry[xAxisDataKey];
    var y = entry[yAxisDataKey];
    var z = !(0, _isNil3.default)(zAxisDataKey) && entry[zAxisDataKey] || '-';
    var tooltipPayload = [{ name: xAxis.name || xAxis.dataKey, unit: xAxis.unit || '', value: x, payload: entry }, { name: yAxis.name || yAxis.dataKey, unit: yAxis.unit || '', value: y, payload: entry }];

    if (z !== '-') {
      tooltipPayload.push({
        name: zAxis.name || zAxis.dataKey, unit: zAxis.unit || '', value: z, payload: entry
      });
    }
    var cx = (0, _ChartUtils.getCateCoordinateOfLine)({
      axis: xAxis, ticks: xAxisTicks, bandSize: xBandSize, entry: entry, index: index
    });
    var cy = (0, _ChartUtils.getCateCoordinateOfLine)({
      axis: yAxis, ticks: xAxisTicks, bandSize: yBandSize, entry: entry, index: index
    });
    var size = z !== '-' ? zAxis.scale(z) : defaultZ;
    var radius = Math.sqrt(Math.max(size, 0) / Math.PI);

    return _extends({}, entry, { cx: cx, cy: cy,
      x: cx - radius,
      y: cy - radius,
      xAxis: xAxis, yAxis: yAxis, zAxis: zAxis,
      width: 2 * radius,
      height: 2 * radius,
      size: size,
      node: { x: x, y: y, z: z },
      tooltipPayload: tooltipPayload,
      tooltipPosition: { x: cx, y: cy },
      payload: entry
    }, cells && cells[index] && cells[index].props);
  });

  return _extends({
    onMouseLeave: onItemMouseLeave,
    onMouseEnter: onItemMouseEnter,
    points: points
  }, offset);
}, _temp2)) || _class;

exports.default = Scatter;