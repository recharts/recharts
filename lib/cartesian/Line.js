'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2; /**
                              * @fileOverview Line
                              */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var _Text = require('../component/Text');

var _Text2 = _interopRequireDefault(_Text);

var _ErrorBar = require('./ErrorBar');

var _ErrorBar2 = _interopRequireDefault(_ErrorBar);

var _DataUtils = require('../util/DataUtils');

var _ReactUtils = require('../util/ReactUtils');

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
    }, _this.id = (0, _DataUtils.uniqueId)('recharts-line-'), _this.pathRef = function (node) {
      _this.animate = node;
    }, _this.handleAnimationEnd = function () {
      _this.setState({ isAnimationFinished: true });
      _this.props.onAnimationEnd();
    }, _this.handleAnimationStart = function () {
      _this.setState({ isAnimationFinished: false });
      _this.props.onAnimationStart();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Line, [{
    key: 'componentDidMount',


    /* eslint-disable  react/no-did-mount-set-state */
    value: function componentDidMount() {
      var isAnimationActive = this.props.isAnimationActive;


      if (!isAnimationActive) {
        return;
      }

      var totalLength = this.getTotalLength();

      this.setState({ totalLength: totalLength });
    }

    /* eslint-disable  react/no-did-update-set-state */

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var animationId = this.props.animationId;


      if (animationId !== prevProps.animationId) {
        var cur = this.getTotalLength();
        var totalLength = prevState.totalLength;
        // A hack method to trigger animation

        this.setState({
          totalLength: cur === totalLength ? cur * FACTOR : cur
        });
      }
    }
  }, {
    key: 'getTotalLength',
    value: function getTotalLength() {
      var curveDom = this.animate;
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
    key: 'renderLabelItem',
    value: function renderLabelItem(option, props, value) {
      var labelItem = void 0;

      if (_react2.default.isValidElement(option)) {
        labelItem = _react2.default.cloneElement(option, props);
      } else if ((0, _isFunction3.default)(option)) {
        labelItem = option(props);
      } else {
        labelItem = _react2.default.createElement(
          _Text2.default,
          _extends({
            key: props.key
          }, props, {
            className: 'recharts-line-label'
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

      var isAnimationActive = this.props.isAnimationActive;


      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }

      var _props = this.props,
          points = _props.points,
          label = _props.label;

      var lineProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
      var customLabelProps = (0, _ReactUtils.getPresentationAttributes)(label);

      var labels = points.map(function (entry, i) {
        var labelProps = _extends({
          textAnchor: 'middle'
        }, entry, lineProps, customLabelProps, {
          index: i,
          key: 'label-' + i
        });

        return _this2.renderLabelItem(label, labelProps, entry.value);
      });

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-line-labels' },
        labels
      );
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
          errorVal: (0, _DataUtils.getValueByDataKey)(dataPoint.payload, dataKey)
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
        dotItem = _react2.default.createElement(_Dot2.default, _extends({}, props, { className: 'recharts-line-dot' }));
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

        return _this3.renderDotItem(dot, dotProps);
      });

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-line-dots', key: 'dots' },
        dots
      );
    }
  }, {
    key: 'renderCurve',
    value: function renderCurve(needClip) {
      var _this4 = this;

      var _props4 = this.props,
          points = _props4.points,
          strokeDasharray = _props4.strokeDasharray,
          isAnimationActive = _props4.isAnimationActive,
          animationBegin = _props4.animationBegin,
          animationDuration = _props4.animationDuration,
          animationEasing = _props4.animationEasing,
          onClick = _props4.onClick,
          onMouseEnter = _props4.onMouseEnter,
          onMouseLeave = _props4.onMouseLeave,
          other = _objectWithoutProperties(_props4, ['points', 'strokeDasharray', 'isAnimationActive', 'animationBegin', 'animationDuration', 'animationEasing', 'onClick', 'onMouseEnter', 'onMouseLeave']);

      var totalLength = this.state.totalLength;

      var animationProps = {
        isActive: isAnimationActive,
        begin: animationBegin,
        canBegin: totalLength > 0,
        easing: animationEasing,
        duration: animationDuration,
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart,
        shouldReAnimate: true,
        pathRef: this.pathRef
      };
      var curveProps = _extends({}, other, {
        fill: 'none',
        className: 'recharts-line-curve',
        clipPath: needClip ? 'url(#clipPath-' + this.id + ')' : null,
        onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, points: points
      });

      if (!isAnimationActive) {
        return _react2.default.createElement(_Curve2.default, _extends({}, curveProps, { strokeDasharray: strokeDasharray }));
      }

      if (strokeDasharray && totalLength) {
        var _ret2 = function () {
          var lines = strokeDasharray.split(/[,\s]+/gim).map(function (num) {
            return parseFloat(num);
          });

          return {
            v: _react2.default.createElement(
              _reactSmooth2.default,
              _extends({}, animationProps, {
                from: { curveLen: 0 },
                to: { curveLen: totalLength }
              }),
              function (_ref2) {
                var curveLen = _ref2.curveLen;
                return _react2.default.createElement(_Curve2.default, _extends({}, curveProps, {
                  strokeDasharray: _this4.getStrokeDasharray(curveLen, totalLength, lines)
                }));
              }
            )
          };
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
      } else if (strokeDasharray) {
        return _react2.default.createElement(_Curve2.default, _extends({}, curveProps, {
          pathRef: this.pathRef,
          strokeDasharray: strokeDasharray
        }));
      }

      return _react2.default.createElement(
        _reactSmooth2.default,
        _extends({}, animationProps, {
          from: '0px ' + (totalLength === 0 ? 1 : totalLength) + 'px',
          to: totalLength + 'px 0px',
          attributeName: 'strokeDasharray'
        }),
        _react2.default.createElement(_Curve2.default, curveProps)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          dot = _props5.dot,
          points = _props5.points,
          label = _props5.label,
          className = _props5.className,
          xAxis = _props5.xAxis,
          yAxis = _props5.yAxis,
          top = _props5.top,
          left = _props5.left,
          width = _props5.width,
          height = _props5.height;


      if (!points || !points.length) {
        return null;
      }

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
        label && this.renderLabels()
      );
    }
  }]);

  return Line;
}(_react.Component), _class2.displayName = 'Line', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, _ReactUtils.EVENT_ATTRIBUTES, {
  className: _react.PropTypes.string,
  type: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural', 'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter']), _react.PropTypes.func]),
  unit: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  name: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  yAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  xAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  yAxis: _react.PropTypes.object,
  xAxis: _react.PropTypes.object,
  legendType: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),
  layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
  connectNulls: _react.PropTypes.bool,

  // whether have dot in line
  activeDot: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.bool]),
  dot: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.bool]),
  label: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.bool]),

  top: _react.PropTypes.number,
  left: _react.PropTypes.number,
  width: _react.PropTypes.number,
  height: _react.PropTypes.number,
  points: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    value: _react.PropTypes.value
  })),
  onAnimationStart: _react.PropTypes.func,
  onAnimationEnd: _react.PropTypes.func,

  isAnimationActive: _react.PropTypes.bool,
  animationBegin: _react.PropTypes.number,
  animationDuration: _react.PropTypes.number,
  animationEasing: _react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
  animationId: _react.PropTypes.number
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

  onAnimationStart: function onAnimationStart() {},
  onAnimationEnd: function onAnimationEnd() {}
}, _temp2)) || _class;

exports.default = Line;