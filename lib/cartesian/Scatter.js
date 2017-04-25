'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

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

var _ReactUtils = require('../util/ReactUtils');

var _Curve = require('../shape/Curve');

var _Curve2 = _interopRequireDefault(_Curve);

var _Symbols = require('../shape/Symbols');

var _Symbols2 = _interopRequireDefault(_Symbols);

var _ErrorBar = require('./ErrorBar');

var _ErrorBar2 = _interopRequireDefault(_ErrorBar);

var _DataUtils = require('../util/DataUtils');

var _AnimationDecorator = require('../util/AnimationDecorator');

var _AnimationDecorator2 = _interopRequireDefault(_AnimationDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scatter = (0, _AnimationDecorator2.default)(_class = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Scatter, _Component);

  function Scatter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Scatter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Scatter.__proto__ || Object.getPrototypeOf(Scatter)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeIndex: -1, isAnimationFinished: false }, _this.id = (0, _DataUtils.uniqueId)('recharts-scatter-'), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Scatter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var animationDuration = this.props.animationDuration;

      window.setTimeout(function () {
        return _this2.setState({ isAnimationFinished: true });
      }, animationDuration);
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
    key: 'renderSymbols',
    value: function renderSymbols() {
      var _this3 = this;

      var _props = this.props,
          points = _props.points,
          shape = _props.shape,
          activeShape = _props.activeShape,
          activeIndex = _props.activeIndex,
          animationBegin = _props.animationBegin,
          animationDuration = _props.animationDuration,
          isAnimationActive = _props.isAnimationActive,
          animationEasing = _props.animationEasing,
          animationId = _props.animationId;

      var baseProps = (0, _ReactUtils.getPresentationAttributes)(this.props);

      return points.map(function (entry, i) {
        var props = _extends({
          key: 'symbol-' + i
        }, baseProps, entry);
        return _react2.default.createElement(
          _Layer2.default,
          _extends({
            className: 'recharts-scatter-symbol'
          }, (0, _ReactUtils.filterEventsOfChild)(_this3.props, entry, i), {
            key: 'symbol-' + i
          }),
          _react2.default.createElement(
            _reactSmooth2.default,
            {
              from: { size: 0 },
              to: { size: props.size },
              duration: animationDuration,
              begin: animationBegin,
              isActive: isAnimationActive,
              key: animationId,
              easing: animationEasing
            },
            function (_ref2) {
              var size = _ref2.size;

              var finalProps = _extends({}, props, { size: size });

              return _this3.renderSymbolItem(activeIndex === i ? activeShape : shape, finalProps);
            }
          )
        );
      });
    }
  }, {
    key: 'renderErrorBar',
    value: function renderErrorBar() {
      if (!this.state.isAnimationFinished) {
        return null;
      }

      var _props2 = this.props,
          points = _props2.points,
          xAxis = _props2.xAxis,
          yAxis = _props2.yAxis,
          children = _props2.children;

      var errorBarItems = (0, _ReactUtils.findAllByType)(children, _ErrorBar2.default);

      if (!errorBarItems) {
        return null;
      }

      function dataPointFormatterY(dataPoint, dataKey) {
        return {
          x: dataPoint.cx,
          y: dataPoint.cy,
          value: dataPoint.y,
          errorVal: (0, _DataUtils.getValueByDataKey)(dataPoint, dataKey)
        };
      }

      function dataPointFormatterX(dataPoint, dataKey) {
        return {
          x: dataPoint.cx,
          y: dataPoint.cy,
          value: dataPoint.x,
          errorVal: (0, _DataUtils.getValueByDataKey)(dataPoint, dataKey)
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
      var _props3 = this.props,
          points = _props3.points,
          line = _props3.line,
          lineType = _props3.lineType,
          lineJointType = _props3.lineJointType;

      var scatterProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
      var customLineProps = (0, _ReactUtils.getPresentationAttributes)(line);
      var linePoints = void 0,
          lineItem = void 0;

      if (lineType === 'joint') {
        linePoints = points.map(function (entry) {
          return { x: entry.cx, y: entry.cy };
        });
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
      var _props4 = this.props,
          points = _props4.points,
          line = _props4.line,
          className = _props4.className,
          xAxis = _props4.xAxis,
          yAxis = _props4.yAxis,
          left = _props4.left,
          top = _props4.top,
          width = _props4.width,
          height = _props4.height;


      if (!points || !points.length) {
        return null;
      }

      var layerClass = (0, _classnames2.default)('recharts-scatter', className);
      var needClip = xAxis && xAxis.allowDataOverflow || yAxis && yAxis.allowDataOverflow;

      return _react2.default.createElement(
        _Layer2.default,
        {
          className: layerClass,
          clipPath: needClip ? 'url(#clipPath-' + this.id + ')' : null
        },
        needClip ? _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement(
            'clipPath',
            { id: 'clipPath-' + this.id },
            _react2.default.createElement('rect', { x: left, y: top, width: width, height: height })
          )
        ) : null,
        line && this.renderLine(),
        this.renderErrorBar(),
        _react2.default.createElement(
          _Layer2.default,
          { key: 'recharts-scatter-symbols' },
          this.renderSymbols()
        )
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

  activeIndex: _propTypes2.default.number,
  activeShape: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func, _propTypes2.default.element]),
  shape: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']), _propTypes2.default.element, _propTypes2.default.func]),
  points: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    cx: _propTypes2.default.number,
    cy: _propTypes2.default.number,
    size: _propTypes2.default.number,
    node: _propTypes2.default.shape({
      x: _propTypes2.default.number,
      y: _propTypes2.default.number,
      z: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
    }),
    payload: _propTypes2.default.any
  })),

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

  isAnimationActive: !(0, _ReactUtils.isSsr)(),
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: 'linear'
}, _temp2)) || _class) || _class;

exports.default = Scatter;