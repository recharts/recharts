import _isEqual from 'lodash/isEqual';
import _isFunction from 'lodash/isFunction';
import _isNil from 'lodash/isNil';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Render a group of scatters
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Animate from 'react-smooth';
import classNames from 'classnames';

import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, LEGEND_TYPES, getPresentationAttributes, filterEventsOfChild, isSsr, findAllByType } from '../util/ReactUtils';
import ZAxis from './ZAxis';
import Curve from '../shape/Curve';
import Symbols from '../shape/Symbols';
import ErrorBar from './ErrorBar';
import Cell from '../component/Cell';
import { uniqueId, isNumOrStr, interpolateNumber } from '../util/DataUtils';
import { getValueByDataKey } from '../util/ChartUtils';

var Scatter = pureRender(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Scatter, _Component);

  function Scatter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Scatter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Scatter.__proto__ || Object.getPrototypeOf(Scatter)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeIndex: -1, isAnimationFinished: false }, _this.cachePrevPoints = function (points) {
      _this.setState({ prevPoints: points });
    }, _this.handleAnimationEnd = function () {
      _this.setState({ isAnimationFinished: true });
    }, _this.handleAnimationStart = function () {
      _this.setState({ isAnimationFinished: false });
    }, _this.id = uniqueId('recharts-scatter-'), _temp), _possibleConstructorReturn(_this, _ret);
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

      if (React.isValidElement(option)) {
        symbol = React.cloneElement(option, props);
      } else if (_isFunction(option)) {
        symbol = option(props);
      } else {
        symbol = React.createElement(Symbols, _extends({}, props, { type: option }));
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

      var baseProps = getPresentationAttributes(this.props);

      return points.map(function (entry, i) {
        var props = _extends({ key: 'symbol-' + i }, baseProps, entry);

        return React.createElement(
          Layer,
          _extends({
            className: 'recharts-scatter-symbol'
          }, filterEventsOfChild(_this2.props, entry, i), {
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


      return React.createElement(
        Animate,
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
              var interpolatorCx = interpolateNumber(prev.cx, entry.cx);
              var interpolatorCy = interpolateNumber(prev.cy, entry.cy);
              var interpolatorSize = interpolateNumber(prev.size, entry.size);

              return _extends({}, entry, {
                cx: interpolatorCx(t),
                cy: interpolatorCy(t),
                size: interpolatorSize(t)
              });
            }

            var interpolator = interpolateNumber(0, entry.size);

            return _extends({}, entry, { size: interpolator(t) });
          });

          return React.createElement(
            Layer,
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


      if (isAnimationActive && points && points.length && (!prevPoints || !_isEqual(prevPoints, points))) {
        return this.renderSymbolsWithAnimation();
      }

      return this.renderSymbolsStatically(points);
    }
  }, {
    key: 'renderErrorBar',
    value: function renderErrorBar() {
      if (!this.state.isAnimationFinished) {
        return null;
      }

      var _props5 = this.props,
          points = _props5.points,
          xAxis = _props5.xAxis,
          yAxis = _props5.yAxis,
          children = _props5.children;

      var errorBarItems = findAllByType(children, ErrorBar);

      if (!errorBarItems) {
        return null;
      }

      function dataPointFormatterY(dataPoint, dataKey) {
        return {
          x: dataPoint.cx,
          y: dataPoint.cy,
          value: dataPoint.y,
          errorVal: getValueByDataKey(dataPoint, dataKey)
        };
      }

      function dataPointFormatterX(dataPoint, dataKey) {
        return {
          x: dataPoint.cx,
          y: dataPoint.cy,
          value: dataPoint.x,
          errorVal: getValueByDataKey(dataPoint, dataKey)
        };
      }

      return errorBarItems.map(function (item, i) {
        var direction = item.props.direction;


        return React.cloneElement(item, {
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

      var scatterProps = getPresentationAttributes(this.props);
      var customLineProps = getPresentationAttributes(line);
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

      if (React.isValidElement(line)) {
        lineItem = React.cloneElement(line, lineProps);
      } else if (_isFunction(line)) {
        lineItem = line(lineProps);
      } else {
        lineItem = React.createElement(Curve, _extends({}, lineProps, { type: lineJointType }));
      }

      return React.createElement(
        Layer,
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
          height = _props7.height;


      if (hide || !points || !points.length) {
        return null;
      }

      var layerClass = classNames('recharts-scatter', className);
      var needClip = xAxis && xAxis.allowDataOverflow || yAxis && yAxis.allowDataOverflow;

      return React.createElement(
        Layer,
        {
          className: layerClass,
          clipPath: needClip ? 'url(#clipPath-' + this.id + ')' : null
        },
        needClip ? React.createElement(
          'defs',
          null,
          React.createElement(
            'clipPath',
            { id: 'clipPath-' + this.id },
            React.createElement('rect', { x: left, y: top, width: width, height: height })
          )
        ) : null,
        line && this.renderLine(),
        this.renderErrorBar(),
        React.createElement(
          Layer,
          { key: 'recharts-scatter-symbols' },
          this.renderSymbols()
        )
      );
    }
  }]);

  return Scatter;
}(Component), _class2.displayName = 'Scatter', _class2.propTypes = _extends({}, EVENT_ATTRIBUTES, PRESENTATION_ATTRIBUTES, {

  xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  zAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  line: PropTypes.oneOfType([PropTypes.bool, PropTypes.object, PropTypes.func, PropTypes.element]),
  lineType: PropTypes.oneOf(['fitting', 'joint']),
  lineJointType: PropTypes.oneOfType([PropTypes.oneOf(['basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural', 'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter']), PropTypes.func]),
  legendType: PropTypes.oneOf(LEGEND_TYPES),
  className: PropTypes.string,

  activeIndex: PropTypes.number,
  activeShape: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.element]),
  shape: PropTypes.oneOfType([PropTypes.oneOf(['circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']), PropTypes.element, PropTypes.func]),
  points: PropTypes.arrayOf(PropTypes.shape({
    cx: PropTypes.number,
    cy: PropTypes.number,
    size: PropTypes.number,
    node: PropTypes.shape({
      x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      z: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }),
    payload: PropTypes.any
  })),
  hide: PropTypes.bool,

  isAnimationActive: PropTypes.bool,
  animationId: PropTypes.number,
  animationBegin: PropTypes.number,
  animationDuration: PropTypes.number,
  animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
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

  isAnimationActive: !isSsr(),
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
      offset = _ref3.offset;

  var cells = findAllByType(item.props.children, Cell);
  var xAxisDataKey = _isNil(xAxis.dataKey) ? item.props.dataKey : xAxis.dataKey;
  var yAxisDataKey = _isNil(yAxis.dataKey) ? item.props.dataKey : yAxis.dataKey;
  var zAxisDataKey = zAxis && zAxis.dataKey;
  var defaultRangeZ = zAxis ? zAxis.range : ZAxis.defaultProps.range;
  var defaultZ = defaultRangeZ && defaultRangeZ[0];
  var xOffset = xAxis.scale.bandwidth ? xAxis.scale.bandwidth() / 2 : 0;
  var yOffset = yAxis.scale.bandwidth ? yAxis.scale.bandwidth() / 2 : 0;
  var points = displayedData.map(function (entry, index) {
    var x = entry[xAxisDataKey];
    var y = entry[yAxisDataKey];
    var z = !_isNil(zAxisDataKey) && entry[zAxisDataKey] || '-';
    var tooltipPayload = [{ name: xAxis.name || xAxis.dataKey, unit: xAxis.unit || '', value: x, payload: entry }, { name: yAxis.name || yAxis.dataKey, unit: yAxis.unit || '', value: y, payload: entry }];

    if (z !== '-') {
      tooltipPayload.push({
        name: zAxis.name || zAxis.dataKey, unit: zAxis.unit || '', value: z, payload: entry
      });
    }
    var cx = isNumOrStr(x) ? xAxis.scale(x) + xOffset : null;
    var cy = isNumOrStr(y) ? yAxis.scale(y) + yOffset : null;
    return _extends({}, entry, { cx: cx, cy: cy,
      size: z !== '-' ? zAxis.scale(z) : defaultZ,
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

export default Scatter;