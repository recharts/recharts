import _isEqual from 'lodash/isEqual';
import _isFunction from 'lodash/isFunction';
import _isArray from 'lodash/isArray';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Render a group of bar
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Animate from 'react-smooth';

import Rectangle from '../shape/Rectangle';
import Layer from '../container/Layer';
import ErrorBar from './ErrorBar';
import Cell from '../component/Cell';
import LabelList from '../component/LabelList';
import pureRender from '../util/PureRender';
import { uniqueId, mathSign, interpolateNumber } from '../util/DataUtils';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, LEGEND_TYPES, findChildByType, findAllByType, getPresentationAttributes, filterEventsOfChild, isSsr } from '../util/ReactUtils';
import { getCateCoordinateOfBar, getValueByDataKey, truncateByDomain, getBaseValueOfBar, findPositionOfBar } from '../util/ChartUtils';

var Bar = pureRender(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Bar, _Component);

  function Bar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Bar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bar.__proto__ || Object.getPrototypeOf(Bar)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isAnimationFinished: false }, _this.id = uniqueId('recharts-bar-'), _this.cachePrevData = function (data) {
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

      if (React.isValidElement(option)) {
        rectangle = React.cloneElement(option, props);
      } else if (_isFunction(option)) {
        rectangle = option(props);
      } else {
        rectangle = React.createElement(Rectangle, props);
      }

      return rectangle;
    }
  }, {
    key: 'renderRectanglesStatically',
    value: function renderRectanglesStatically(data) {
      var _this2 = this;

      var shape = this.props.shape;

      var baseProps = getPresentationAttributes(this.props);

      return data && data.map(function (entry, i) {
        var props = _extends({}, baseProps, entry, { index: i });

        return React.createElement(
          Layer,
          _extends({
            className: 'recharts-bar-rectangle'
          }, filterEventsOfChild(_this2.props, entry, i), {
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


      return React.createElement(
        Animate,
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
              var interpolatorX = interpolateNumber(prev.x, entry.x);
              var interpolatorY = interpolateNumber(prev.y, entry.y);
              var interpolatorWidth = interpolateNumber(prev.width, entry.width);
              var interpolatorHeight = interpolateNumber(prev.height, entry.height);

              return _extends({}, entry, {
                x: interpolatorX(t),
                y: interpolatorY(t),
                width: interpolatorWidth(t),
                height: interpolatorHeight(t)
              });
            }

            if (layout === 'horizontal') {
              var _interpolator = interpolateNumber(0, entry.height);
              var h = _interpolator(t);

              return _extends({}, entry, { y: entry.y + entry.height - h, height: h });
            }

            var interpolator = interpolateNumber(0, entry.width);
            var w = interpolator(t);

            return _extends({}, entry, { width: w });
          });

          return React.createElement(
            Layer,
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


      if (isAnimationActive && data && data.length && (!prevData || !_isEqual(prevData, data))) {
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

      var errorBarItem = findChildByType(children, ErrorBar);

      if (!errorBarItem) {
        return null;
      }

      var offset = layout === 'vertical' ? data[0].height / 2 : data[0].width / 2;

      function dataPointFormatter(dataPoint, dataKey) {
        return {
          x: dataPoint.x,
          y: dataPoint.y,
          value: dataPoint.value,
          errorVal: getValueByDataKey(dataPoint, dataKey)
        };
      }

      return React.cloneElement(errorBarItem, {
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

      var layerClass = classNames('recharts-bar', className);
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
        React.createElement(
          Layer,
          {
            className: 'recharts-bar-rectangles',
            clipPath: needClip ? 'url(#clipPath-' + this.id + ')' : null
          },
          this.renderRectangles()
        ),
        this.renderErrorBar(),
        (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, data)
      );
    }
  }]);

  return Bar;
}(Component), _class2.displayName = 'Bar', _class2.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, {
  className: PropTypes.string,
  layout: PropTypes.oneOf(['vertical', 'horizontal']),
  xAxisId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  yAxisId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  yAxis: PropTypes.object,
  xAxis: PropTypes.object,
  stackId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  barSize: PropTypes.number,
  unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]).isRequired,
  legendType: PropTypes.oneOf(LEGEND_TYPES),
  minPointSize: PropTypes.number,
  maxBarSize: PropTypes.number,
  hide: PropTypes.bool,

  shape: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  data: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    radius: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array])
  })),
  onAnimationStart: PropTypes.func,
  onAnimationEnd: PropTypes.func,

  animationId: PropTypes.number,
  isAnimationActive: PropTypes.bool,
  animationBegin: PropTypes.number,
  animationDuration: PropTypes.number,
  animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
}), _class2.defaultProps = {
  xAxisId: 0,
  yAxisId: 0,
  legendType: 'rect',
  minPointSize: 0,
  hide: false,
  // data of bar
  data: [],
  layout: 'vertical',
  isAnimationActive: !isSsr(),
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

  var pos = findPositionOfBar(barPosition, item);
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
  var baseValue = getBaseValueOfBar({ props: props, numericAxis: numericAxis });
  var cells = findAllByType(children, Cell);

  var rects = displayedData.map(function (entry, index) {
    var value = void 0,
        x = void 0,
        y = void 0,
        width = void 0,
        height = void 0;

    if (stackedData) {
      value = truncateByDomain(stackedData[dataStartIndex + index], stackedDomain);
    } else {
      value = getValueByDataKey(entry, dataKey);

      if (!_isArray(value)) {
        value = [baseValue, value];
      }
    }

    if (layout === 'horizontal') {
      x = getCateCoordinateOfBar({
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
        var delta = mathSign(height || minPointSize) * (Math.abs(minPointSize) - Math.abs(height));

        y -= delta;
        height += delta;
      }
    } else {
      x = xAxis.scale(value[0]);
      y = getCateCoordinateOfBar({
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
        var _delta = mathSign(width || minPointSize) * (Math.abs(minPointSize) - Math.abs(width));
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

export default Bar;