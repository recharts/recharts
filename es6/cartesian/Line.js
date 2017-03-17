import _isFunction from 'lodash/isFunction';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Line
 */
import React, { Component, PropTypes } from 'react';
import Animate from 'react-smooth';
import classNames from 'classnames';

import pureRender from '../util/PureRender';
import Curve from '../shape/Curve';
import Dot from '../shape/Dot';
import Layer from '../container/Layer';
import Text from '../component/Text';
import ErrorBar from './ErrorBar';
import { getValueByDataKey, uniqueId } from '../util/DataUtils';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, getPresentationAttributes, isSsr, findChildByType } from '../util/ReactUtils';

var FACTOR = 1.0000001;

var Line = pureRender(_class = (_temp2 = _class2 = function (_Component) {
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
    }, _this.id = uniqueId('recharts-line-'), _this.pathRef = function (node) {
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

      var lineProps = getPresentationAttributes(this.props);
      var customLabelProps = getPresentationAttributes(label);

      var labels = points.map(function (entry, i) {
        var labelProps = _extends({
          textAnchor: 'middle'
        }, entry, lineProps, customLabelProps, {
          index: i,
          key: 'label-' + i
        });

        return _this2.renderLabelItem(label, labelProps, entry.value);
      });

      return React.createElement(
        Layer,
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

      var errorBarItem = findChildByType(children, ErrorBar);

      if (!errorBarItem) {
        return null;
      }

      function dataPointFormatter(dataPoint, dataKey) {
        return {
          x: dataPoint.x,
          y: dataPoint.y,
          value: dataPoint.value,
          errorVal: getValueByDataKey(dataPoint.payload, dataKey)
        };
      }

      return React.cloneElement(errorBarItem, {
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

      if (React.isValidElement(option)) {
        dotItem = React.cloneElement(option, props);
      } else if (_isFunction(option)) {
        dotItem = option(props);
      } else {
        dotItem = React.createElement(Dot, _extends({}, props, { className: 'recharts-line-dot' }));
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

      var lineProps = getPresentationAttributes(this.props);
      var customDotProps = getPresentationAttributes(dot);
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

      return React.createElement(
        Layer,
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
        return React.createElement(Curve, _extends({}, curveProps, { strokeDasharray: strokeDasharray }));
      }

      if (strokeDasharray && totalLength) {
        var _ret2 = function () {
          var lines = strokeDasharray.split(/[,\s]+/gim).map(function (num) {
            return parseFloat(num);
          });

          return {
            v: React.createElement(
              Animate,
              _extends({}, animationProps, {
                from: { curveLen: 0 },
                to: { curveLen: totalLength }
              }),
              function (_ref2) {
                var curveLen = _ref2.curveLen;
                return React.createElement(Curve, _extends({}, curveProps, {
                  strokeDasharray: _this4.getStrokeDasharray(curveLen, totalLength, lines)
                }));
              }
            )
          };
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
      } else if (strokeDasharray) {
        return React.createElement(Curve, _extends({}, curveProps, {
          pathRef: this.pathRef,
          strokeDasharray: strokeDasharray
        }));
      }

      return React.createElement(
        Animate,
        _extends({}, animationProps, {
          from: '0px ' + (totalLength === 0 ? 1 : totalLength) + 'px',
          to: totalLength + 'px 0px',
          attributeName: 'strokeDasharray'
        }),
        React.createElement(Curve, curveProps)
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
      var layerClass = classNames('recharts-line', className);
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
        !hasSinglePoint && this.renderCurve(needClip),
        this.renderErrorBar(),
        (hasSinglePoint || dot) && this.renderDots(),
        label && this.renderLabels()
      );
    }
  }]);

  return Line;
}(Component), _class2.displayName = 'Line', _class2.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, {
  className: PropTypes.string,
  type: PropTypes.oneOfType([PropTypes.oneOf(['basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural', 'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter']), PropTypes.func]),
  unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  yAxis: PropTypes.object,
  xAxis: PropTypes.object,
  legendType: PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  connectNulls: PropTypes.bool,

  // whether have dot in line
  activeDot: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool]),
  dot: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool]),
  label: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool]),

  top: PropTypes.number,
  left: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  points: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    value: PropTypes.value
  })),
  onAnimationStart: PropTypes.func,
  onAnimationEnd: PropTypes.func,

  isAnimationActive: PropTypes.bool,
  animationBegin: PropTypes.number,
  animationDuration: PropTypes.number,
  animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
  animationId: PropTypes.number
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
  isAnimationActive: !isSsr(),
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',

  onAnimationStart: function onAnimationStart() {},
  onAnimationEnd: function onAnimationEnd() {}
}, _temp2)) || _class;

export default Line;