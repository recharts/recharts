import _isEqual from 'lodash/isEqual';
import _isFunction from 'lodash/isFunction';
import _isNil from 'lodash/isNil';

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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Animate from 'react-smooth';
import classNames from 'classnames';

import pureRender from '../util/PureRender';
import Curve from '../shape/Curve';
import Dot from '../shape/Dot';
import Layer from '../container/Layer';
import LabelList from '../component/LabelList';
import ErrorBar from './ErrorBar';
import { uniqueId, interpolateNumber } from '../util/DataUtils';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, LEGEND_TYPES, filterEventAttributes, getPresentationAttributes, isSsr, findChildByType } from '../util/ReactUtils';
import { getCateCoordinateOfLine, getValueByDataKey } from '../util/ChartUtils';

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
    }, _this.id = uniqueId('recharts-line-'), _this.cachePrevData = function (points) {
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
        var className = classNames('recharts-line-dot', option.className);
        dotItem = React.createElement(Dot, _extends({}, props, { className: className }));
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

        return _this2.renderDotItem(dot, dotProps);
      });

      return React.createElement(
        Layer,
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

      var curveProps = _extends({}, getPresentationAttributes(this.props), filterEventAttributes(this.props), {
        fill: 'none',
        className: 'recharts-line-curve',
        clipPath: needClip ? 'url(#clipPath-' + this.id + ')' : null,
        points: points
      }, props, {
        type: type, layout: layout, connectNulls: connectNulls
      });

      return React.createElement(Curve, _extends({}, curveProps, { pathRef: this.pathRef }));
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


      return React.createElement(
        Animate,
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
                var interpolatorX = interpolateNumber(prev.x, entry.x);
                var interpolatorY = interpolateNumber(prev.y, entry.y);

                return _extends({}, entry, { x: interpolatorX(t), y: interpolatorY(t) });
              }

              return entry;
            });
            return _this3.renderCurveStatically(stepData, needClip);
          }
          var interpolator = interpolateNumber(0, totalLength);
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


      if (isAnimationActive && points && points.length && (!prevPoints && totalLength > 0 || !_isEqual(prevPoints, points))) {
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
        (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, points)
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
  legendType: PropTypes.oneOf(LEGEND_TYPES),
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  connectNulls: PropTypes.bool,
  hide: PropTypes.bool,

  // whether have dot in line
  activeDot: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool]),
  dot: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool]),

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
    var value = getValueByDataKey(entry, dataKey);

    if (layout === 'horizontal') {
      return {
        x: getCateCoordinateOfLine({ axis: xAxis, ticks: xAxisTicks, bandSize: bandSize, entry: entry, index: index }),
        y: _isNil(value) ? null : yAxis.scale(value),
        value: value,
        payload: entry
      };
    }

    return {
      x: _isNil(value) ? null : xAxis.scale(value),
      y: getCateCoordinateOfLine({ axis: yAxis, ticks: yAxisTicks, bandSize: bandSize, entry: entry, index: index }),
      value: value,
      payload: entry
    };
  });

  return _extends({ points: points, layout: layout }, offset);
}, _temp2)) || _class;

export default Line;