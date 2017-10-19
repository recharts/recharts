'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2; /**
                              * @fileOverview Render a group of bar
                              */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactSmooth = require('react-smooth');

var _reactSmooth2 = _interopRequireDefault(_reactSmooth);

var _Rectangle = require('../shape/Rectangle');

var _Rectangle2 = _interopRequireDefault(_Rectangle);

var _Layer = require('../container/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _ErrorBar = require('./ErrorBar');

var _ErrorBar2 = _interopRequireDefault(_ErrorBar);

var _Cell = require('../component/Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _LabelList = require('../component/LabelList');

var _LabelList2 = _interopRequireDefault(_LabelList);

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _DataUtils = require('../util/DataUtils');

var _ReactUtils = require('../util/ReactUtils');

var _ChartUtils = require('../util/ChartUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bar = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Bar, _Component);

  function Bar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Bar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bar.__proto__ || Object.getPrototypeOf(Bar)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isAnimationFinished: false }, _this.id = (0, _DataUtils.uniqueId)('recharts-bar-'), _this.cachePrevData = function (data) {
      _this.setState({ prevData: data });
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
   * @param {Object} props Props for the component
   * @param {Object} item        An instance of Bar
   * @param {Array} barPosition  The offset and size of each bar
   * @param {Object} xAxis       The configuration of x-axis
   * @param {Object} yAxis       The configuration of y-axis
   * @param {Array} stackedData  The stacked data of a bar item
   * @return{Array} Composed data
   */


  _createClass(Bar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props,
          animationId = _props.animationId,
          data = _props.data;


      if (nextProps.animationId !== animationId) {
        this.cachePrevData(data);
      }
    }
  }, {
    key: 'renderRectangle',
    value: function renderRectangle(option, props) {
      var rectangle = void 0;

      if (_react2.default.isValidElement(option)) {
        rectangle = _react2.default.cloneElement(option, props);
      } else if ((0, _isFunction3.default)(option)) {
        rectangle = option(props);
      } else {
        rectangle = _react2.default.createElement(_Rectangle2.default, props);
      }

      return rectangle;
    }
  }, {
    key: 'renderRectanglesStatically',
    value: function renderRectanglesStatically(data) {
      var _this2 = this;

      var shape = this.props.shape;

      var baseProps = (0, _ReactUtils.getPresentationAttributes)(this.props);

      return data && data.map(function (entry, i) {
        var props = _extends({}, baseProps, entry, { index: i });

        return _react2.default.createElement(
          _Layer2.default,
          _extends({
            className: 'recharts-bar-rectangle'
          }, (0, _ReactUtils.filterEventsOfChild)(_this2.props, entry, i), {
            key: 'rectangle-' + i
          }),
          _this2.renderRectangle(shape, props)
        );
      });
    }
  }, {
    key: 'renderRectanglesWithAnimation',
    value: function renderRectanglesWithAnimation() {
      var _this3 = this;

      var _props2 = this.props,
          data = _props2.data,
          layout = _props2.layout,
          isAnimationActive = _props2.isAnimationActive,
          animationBegin = _props2.animationBegin,
          animationDuration = _props2.animationDuration,
          animationEasing = _props2.animationEasing,
          animationId = _props2.animationId;
      var prevData = this.state.prevData;


      return _react2.default.createElement(
        _reactSmooth2.default,
        {
          begin: animationBegin,
          duration: animationDuration,
          isActive: isAnimationActive,
          easing: animationEasing,
          from: { t: 0 },
          to: { t: 1 },
          key: 'bar-' + animationId,
          onAnimationEnd: this.handleAnimationEnd,
          onAnimationStart: this.handleAnimationStart
        },
        function (_ref2) {
          var t = _ref2.t;

          var stepData = data.map(function (entry, index) {
            var prev = prevData && prevData[index];

            if (prev) {
              var interpolatorX = (0, _DataUtils.interpolateNumber)(prev.x, entry.x);
              var interpolatorY = (0, _DataUtils.interpolateNumber)(prev.y, entry.y);
              var interpolatorWidth = (0, _DataUtils.interpolateNumber)(prev.width, entry.width);
              var interpolatorHeight = (0, _DataUtils.interpolateNumber)(prev.height, entry.height);

              return _extends({}, entry, {
                x: interpolatorX(t),
                y: interpolatorY(t),
                width: interpolatorWidth(t),
                height: interpolatorHeight(t)
              });
            }

            if (layout === 'horizontal') {
              var _interpolator = (0, _DataUtils.interpolateNumber)(0, entry.height);
              var h = _interpolator(t);

              return _extends({}, entry, { y: entry.y + entry.height - h, height: h });
            }

            var interpolator = (0, _DataUtils.interpolateNumber)(0, entry.width);
            var w = interpolator(t);

            return _extends({}, entry, { width: w });
          });

          return _react2.default.createElement(
            _Layer2.default,
            null,
            _this3.renderRectanglesStatically(stepData)
          );
        }
      );
    }
  }, {
    key: 'renderRectangles',
    value: function renderRectangles() {
      var _props3 = this.props,
          data = _props3.data,
          isAnimationActive = _props3.isAnimationActive;
      var prevData = this.state.prevData;


      if (isAnimationActive && data && data.length && (!prevData || !(0, _isEqual3.default)(prevData, data))) {
        return this.renderRectanglesWithAnimation();
      }

      return this.renderRectanglesStatically(data);
    }
  }, {
    key: 'renderErrorBar',
    value: function renderErrorBar() {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }

      var _props4 = this.props,
          data = _props4.data,
          xAxis = _props4.xAxis,
          yAxis = _props4.yAxis,
          layout = _props4.layout,
          children = _props4.children;

      var errorBarItem = (0, _ReactUtils.findChildByType)(children, _ErrorBar2.default);

      if (!errorBarItem) {
        return null;
      }

      var offset = layout === 'vertical' ? data[0].height / 2 : data[0].width / 2;

      function dataPointFormatter(dataPoint, dataKey) {
        return {
          x: dataPoint.x,
          y: dataPoint.y,
          value: dataPoint.value,
          errorVal: (0, _ChartUtils.getValueByDataKey)(dataPoint, dataKey)
        };
      }

      return _react2.default.cloneElement(errorBarItem, {
        data: data,
        xAxis: xAxis,
        yAxis: yAxis,
        layout: layout,
        offset: offset,
        dataPointFormatter: dataPointFormatter
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          hide = _props5.hide,
          data = _props5.data,
          className = _props5.className,
          xAxis = _props5.xAxis,
          yAxis = _props5.yAxis,
          left = _props5.left,
          top = _props5.top,
          width = _props5.width,
          height = _props5.height,
          isAnimationActive = _props5.isAnimationActive;

      if (hide || !data || !data.length) {
        return null;
      }

      var isAnimationFinished = this.state.isAnimationFinished;

      var layerClass = (0, _classnames2.default)('recharts-bar', className);
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
        _react2.default.createElement(
          _Layer2.default,
          {
            className: 'recharts-bar-rectangles',
            clipPath: needClip ? 'url(#clipPath-' + this.id + ')' : null
          },
          this.renderRectangles()
        ),
        this.renderErrorBar(),
        (!isAnimationActive || isAnimationFinished) && _LabelList2.default.renderCallByParent(this.props, data)
      );
    }
  }]);

  return Bar;
}(_react.Component), _class2.displayName = 'Bar', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, _ReactUtils.EVENT_ATTRIBUTES, {
  className: _propTypes2.default.string,
  layout: _propTypes2.default.oneOf(['vertical', 'horizontal']),
  xAxisId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  yAxisId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  yAxis: _propTypes2.default.object,
  xAxis: _propTypes2.default.object,
  stackId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  barSize: _propTypes2.default.number,
  unit: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  name: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  dataKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.func]).isRequired,
  legendType: _propTypes2.default.oneOf(_ReactUtils.LEGEND_TYPES),
  minPointSize: _propTypes2.default.number,
  maxBarSize: _propTypes2.default.number,
  hide: _propTypes2.default.bool,

  shape: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    x: _propTypes2.default.number,
    y: _propTypes2.default.number,
    width: _propTypes2.default.number,
    height: _propTypes2.default.number,
    radius: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.array]),
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array])
  })),
  onAnimationStart: _propTypes2.default.func,
  onAnimationEnd: _propTypes2.default.func,

  animationId: _propTypes2.default.number,
  isAnimationActive: _propTypes2.default.bool,
  animationBegin: _propTypes2.default.number,
  animationDuration: _propTypes2.default.number,
  animationEasing: _propTypes2.default.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
}), _class2.defaultProps = {
  xAxisId: 0,
  yAxisId: 0,
  legendType: 'rect',
  minPointSize: 0,
  hide: false,
  // data of bar
  data: [],
  layout: 'vertical',
  isAnimationActive: !(0, _ReactUtils.isSsr)(),
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: 'ease',

  onAnimationStart: function onAnimationStart() {},
  onAnimationEnd: function onAnimationEnd() {}
}, _class2.getComposedData = function (_ref3) {
  var props = _ref3.props,
      item = _ref3.item,
      barPosition = _ref3.barPosition,
      bandSize = _ref3.bandSize,
      xAxis = _ref3.xAxis,
      yAxis = _ref3.yAxis,
      xAxisTicks = _ref3.xAxisTicks,
      yAxisTicks = _ref3.yAxisTicks,
      stackedData = _ref3.stackedData,
      dataStartIndex = _ref3.dataStartIndex,
      displayedData = _ref3.displayedData,
      offset = _ref3.offset;

  var pos = (0, _ChartUtils.findPositionOfBar)(barPosition, item);
  if (!pos) {
    return [];
  }

  var layout = props.layout;
  var _item$props = item.props,
      dataKey = _item$props.dataKey,
      children = _item$props.children,
      minPointSize = _item$props.minPointSize;

  var numericAxis = layout === 'horizontal' ? yAxis : xAxis;
  var stackedDomain = stackedData ? numericAxis.scale.domain() : null;
  var baseValue = (0, _ChartUtils.getBaseValueOfBar)({ props: props, numericAxis: numericAxis });
  var cells = (0, _ReactUtils.findAllByType)(children, _Cell2.default);

  var rects = displayedData.map(function (entry, index) {
    var value = void 0,
        x = void 0,
        y = void 0,
        width = void 0,
        height = void 0;

    if (stackedData) {
      value = (0, _ChartUtils.truncateByDomain)(stackedData[dataStartIndex + index], stackedDomain);
    } else {
      value = (0, _ChartUtils.getValueByDataKey)(entry, dataKey);

      if (!(0, _isArray3.default)(value)) {
        value = [baseValue, value];
      }
    }

    if (layout === 'horizontal') {
      x = (0, _ChartUtils.getCateCoordinateOfBar)({
        axis: xAxis,
        ticks: xAxisTicks,
        bandSize: bandSize,
        offset: pos.offset,
        entry: entry,
        index: index
      });
      y = yAxis.scale(value[1]);
      width = pos.size;
      height = yAxis.scale(value[0]) - yAxis.scale(value[1]);

      if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
        var delta = (0, _DataUtils.mathSign)(height || minPointSize) * (Math.abs(minPointSize) - Math.abs(height));

        y -= delta;
        height += delta;
      }
    } else {
      x = xAxis.scale(value[0]);
      y = (0, _ChartUtils.getCateCoordinateOfBar)({
        axis: yAxis,
        ticks: yAxisTicks,
        bandSize: bandSize,
        offset: pos.offset,
        entry: entry,
        index: index
      });
      width = xAxis.scale(value[1]) - xAxis.scale(value[0]);
      height = pos.size;

      if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
        var _delta = (0, _DataUtils.mathSign)(width || minPointSize) * (Math.abs(minPointSize) - Math.abs(width));
        width += _delta;
      }
    }

    return _extends({}, entry, {
      x: x, y: y, width: width, height: height, value: stackedData ? value : value[1],
      payload: entry
    }, cells && cells[index] && cells[index].props);
  });

  return _extends({ data: rects, layout: layout }, offset);
}, _temp2)) || _class;

exports.default = Bar;