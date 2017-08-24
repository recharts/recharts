import _isFunction from 'lodash/isFunction';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Cartesian Axis
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { shallowEqual } from '../util/PureRender';
import { getStringSize } from '../util/DOMUtils';
import Layer from '../container/Layer';
import Text from '../component/Text';
import Label from '../component/Label';
import { isSsr, PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, getPresentationAttributes, filterEventsOfChild } from '../util/ReactUtils';
import { isNumber, mathSign } from '../util/DataUtils';

var CartesianAxis = (_temp = _class = function (_Component) {
  _inherits(CartesianAxis, _Component);

  function CartesianAxis() {
    _classCallCheck(this, CartesianAxis);

    return _possibleConstructorReturn(this, (CartesianAxis.__proto__ || Object.getPrototypeOf(CartesianAxis)).apply(this, arguments));
  }

  _createClass(CartesianAxis, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref, state) {
      var viewBox = _ref.viewBox,
          restProps = _objectWithoutProperties(_ref, ['viewBox']);

      // props.viewBox is sometimes generated every time -
      // check that specially as object equality is likely to fail
      var _props = this.props,
          viewBoxOld = _props.viewBox,
          restPropsOld = _objectWithoutProperties(_props, ['viewBox']);

      return !shallowEqual(viewBox, viewBoxOld) || !shallowEqual(restProps, restPropsOld) || !shallowEqual(state, this.state);
    }

    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  {Object} data The data of a simple tick
     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */

  }, {
    key: 'getTickLineCoord',
    value: function getTickLineCoord(data) {
      var _props2 = this.props,
          x = _props2.x,
          y = _props2.y,
          width = _props2.width,
          height = _props2.height,
          orientation = _props2.orientation,
          tickSize = _props2.tickSize,
          mirror = _props2.mirror;

      var x1 = void 0,
          x2 = void 0,
          y1 = void 0,
          y2 = void 0,
          tx = void 0,
          ty = void 0;

      var sign = mirror ? -1 : 1;
      var finalTickSize = data.tickSize || tickSize;
      var tickCoord = isNumber(data.tickCoord) ? data.tickCoord : data.coordinate;

      switch (orientation) {
        case 'top':
          x1 = x2 = data.coordinate;
          y2 = y + !mirror * height;
          y1 = ty = y2 - sign * finalTickSize;
          tx = tickCoord;
          break;
        case 'left':
          y1 = y2 = data.coordinate;
          x2 = x + !mirror * width;
          x1 = tx = x2 - sign * finalTickSize;
          ty = tickCoord;
          break;
        case 'right':
          y1 = y2 = data.coordinate;
          x2 = x + mirror * width;
          x1 = tx = x2 + sign * finalTickSize;
          ty = tickCoord;
          break;
        default:
          x1 = x2 = data.coordinate;
          y2 = y + mirror * height;
          y1 = ty = y2 + sign * finalTickSize;
          tx = tickCoord;
          break;
      }

      return { line: { x1: x1, y1: y1, x2: x2, y2: y2 }, tick: { x: tx, y: ty } };
    }
  }, {
    key: 'getTickTextAnchor',
    value: function getTickTextAnchor() {
      var _props3 = this.props,
          orientation = _props3.orientation,
          mirror = _props3.mirror;

      var textAnchor = void 0;

      switch (orientation) {
        case 'left':
          textAnchor = mirror ? 'start' : 'end';
          break;
        case 'right':
          textAnchor = mirror ? 'end' : 'start';
          break;
        default:
          textAnchor = 'middle';
          break;
      }

      return textAnchor;
    }
  }, {
    key: 'getTickVerticalAnchor',
    value: function getTickVerticalAnchor() {
      var _props4 = this.props,
          orientation = _props4.orientation,
          mirror = _props4.mirror;

      var verticalAnchor = 'end';

      switch (orientation) {
        case 'left':
        case 'right':
          verticalAnchor = 'middle';
          break;
        case 'top':
          verticalAnchor = mirror ? 'start' : 'end';
          break;
        default:
          verticalAnchor = mirror ? 'end' : 'start';
          break;
      }

      return verticalAnchor;
    }
  }, {
    key: 'renderAxisLine',
    value: function renderAxisLine() {
      var _props5 = this.props,
          x = _props5.x,
          y = _props5.y,
          width = _props5.width,
          height = _props5.height,
          orientation = _props5.orientation,
          axisLine = _props5.axisLine,
          mirror = _props5.mirror;

      var props = _extends({}, getPresentationAttributes(this.props), {
        fill: 'none'
      }, getPresentationAttributes(axisLine));

      if (orientation === 'top' || orientation === 'bottom') {
        var needHeight = orientation === 'top' && !mirror || orientation === 'bottom' && mirror;
        props = _extends({}, props, {
          x1: x,
          y1: y + needHeight * height,
          x2: x + width,
          y2: y + needHeight * height
        });
      } else {
        var needWidth = orientation === 'left' && !mirror || orientation === 'right' && mirror;
        props = _extends({}, props, {
          x1: x + needWidth * width,
          y1: y,
          x2: x + needWidth * width,
          y2: y + height
        });
      }

      return React.createElement('line', _extends({ className: 'recharts-cartesian-axis-line' }, props));
    }
  }, {
    key: 'renderTickItem',
    value: function renderTickItem(option, props, value) {
      var tickItem = void 0;

      if (React.isValidElement(option)) {
        tickItem = React.cloneElement(option, props);
      } else if (_isFunction(option)) {
        tickItem = option(props);
      } else {
        tickItem = React.createElement(
          Text,
          _extends({}, props, {
            className: 'recharts-cartesian-axis-tick-value'
          }),
          value
        );
      }

      return tickItem;
    }

    /**
     * render the ticks
     * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
     * @return {ReactComponent} renderedTicks
     */

  }, {
    key: 'renderTicks',
    value: function renderTicks(ticks) {
      var _this2 = this;

      var _props6 = this.props,
          tickLine = _props6.tickLine,
          stroke = _props6.stroke,
          tick = _props6.tick,
          tickFormatter = _props6.tickFormatter,
          unit = _props6.unit;

      var finalTicks = CartesianAxis.getTicks(_extends({}, this.props, { ticks: ticks }));
      var textAnchor = this.getTickTextAnchor();
      var verticalAnchor = this.getTickVerticalAnchor();
      var axisProps = getPresentationAttributes(this.props);
      var customTickProps = getPresentationAttributes(tick);
      var tickLineProps = _extends({}, axisProps, { fill: 'none' }, getPresentationAttributes(tickLine));
      var items = finalTicks.map(function (entry, i) {
        var _getTickLineCoord = _this2.getTickLineCoord(entry),
            lineCoord = _getTickLineCoord.line,
            tickCoord = _getTickLineCoord.tick;

        var tickProps = _extends({
          textAnchor: textAnchor,
          verticalAnchor: verticalAnchor
        }, axisProps, {
          stroke: 'none', fill: stroke
        }, customTickProps, tickCoord, {
          index: i, payload: entry
        });

        return React.createElement(
          Layer,
          _extends({
            className: 'recharts-cartesian-axis-tick',
            key: 'tick-' + i
          }, filterEventsOfChild(_this2.props, entry, i)),
          tickLine && React.createElement('line', _extends({
            className: 'recharts-cartesian-axis-tick-line'
          }, tickLineProps, lineCoord)),
          tick && _this2.renderTickItem(tick, tickProps, '' + (_isFunction(tickFormatter) ? tickFormatter(entry.value) : entry.value) + (unit || ''))
        );
      });

      return React.createElement(
        'g',
        { className: 'recharts-cartesian-axis-ticks' },
        items
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props7 = this.props,
          axisLine = _props7.axisLine,
          width = _props7.width,
          height = _props7.height,
          ticksGenerator = _props7.ticksGenerator,
          className = _props7.className,
          hide = _props7.hide;


      if (hide) {
        return null;
      }

      var _props8 = this.props,
          ticks = _props8.ticks,
          noTicksProps = _objectWithoutProperties(_props8, ['ticks']);

      var finalTicks = ticks;

      if (_isFunction(ticksGenerator)) {
        finalTicks = ticks && ticks.length > 0 ? ticksGenerator(this.props) : ticksGenerator(noTicksProps);
      }

      if (width <= 0 || height <= 0 || !finalTicks || !finalTicks.length) {
        return null;
      }

      return React.createElement(
        Layer,
        { className: classNames('recharts-cartesian-axis', className) },
        axisLine && this.renderAxisLine(),
        this.renderTicks(finalTicks),
        Label.renderCallByParent(this.props)
      );
    }
  }], [{
    key: 'getTicks',
    value: function getTicks(props) {
      var tick = props.tick,
          ticks = props.ticks,
          viewBox = props.viewBox,
          minTickGap = props.minTickGap,
          orientation = props.orientation,
          interval = props.interval,
          tickFormatter = props.tickFormatter,
          unit = props.unit;


      if (!ticks || !ticks.length || !tick) {
        return [];
      }

      if (isNumber(interval) || isSsr()) {
        return CartesianAxis.getNumberIntervalTicks(ticks, isNumber(interval) ? interval : 0);
      }

      if (interval === 'preserveStartEnd') {
        return CartesianAxis.getTicksStart({
          ticks: ticks, tickFormatter: tickFormatter, viewBox: viewBox, orientation: orientation, minTickGap: minTickGap, unit: unit
        }, true);
      } else if (interval === 'preserveStart') {
        return CartesianAxis.getTicksStart({
          ticks: ticks, tickFormatter: tickFormatter, viewBox: viewBox, orientation: orientation, minTickGap: minTickGap, unit: unit
        });
      }

      return CartesianAxis.getTicksEnd({
        ticks: ticks, tickFormatter: tickFormatter, viewBox: viewBox, orientation: orientation, minTickGap: minTickGap, unit: unit
      });
    }
  }, {
    key: 'getNumberIntervalTicks',
    value: function getNumberIntervalTicks(ticks, interval) {
      return ticks.filter(function (entry, i) {
        return i % (interval + 1) === 0;
      });
    }
  }, {
    key: 'getTicksStart',
    value: function getTicksStart(_ref2, preserveEnd) {
      var ticks = _ref2.ticks,
          tickFormatter = _ref2.tickFormatter,
          viewBox = _ref2.viewBox,
          orientation = _ref2.orientation,
          minTickGap = _ref2.minTickGap,
          unit = _ref2.unit;
      var x = viewBox.x,
          y = viewBox.y,
          width = viewBox.width,
          height = viewBox.height;

      var sizeKey = orientation === 'top' || orientation === 'bottom' ? 'width' : 'height';
      var result = (ticks || []).slice();
      var unitSize = unit ? getStringSize(unit)[sizeKey] : 0;
      var len = result.length;
      var sign = len >= 2 ? mathSign(result[1].coordinate - result[0].coordinate) : 1;

      var start = void 0,
          end = void 0;

      if (sign === 1) {
        start = sizeKey === 'width' ? x : y;
        end = sizeKey === 'width' ? x + width : y + height;
      } else {
        start = sizeKey === 'width' ? x + width : y + height;
        end = sizeKey === 'width' ? x : y;
      }

      if (preserveEnd) {
        // Try to guarantee the tail to be displayed
        var tail = ticks[len - 1];
        var tailContent = _isFunction(tickFormatter) ? tickFormatter(tail.value) : tail.value;
        var tailSize = getStringSize(tailContent)[sizeKey] + unitSize;
        var tailGap = sign * (tail.coordinate + sign * tailSize / 2 - end);
        result[len - 1] = tail = _extends({}, tail, {
          tickCoord: tailGap > 0 ? tail.coordinate - tailGap * sign : tail.coordinate
        });

        var isTailShow = sign * (tail.tickCoord - sign * tailSize / 2 - start) >= 0 && sign * (tail.tickCoord + sign * tailSize / 2 - end) <= 0;

        if (isTailShow) {
          end = tail.tickCoord - sign * (tailSize / 2 + minTickGap);
          result[len - 1] = _extends({}, tail, { isShow: true });
        }
      }

      var count = preserveEnd ? len - 1 : len;
      for (var i = 0; i < count; i++) {
        var entry = result[i];
        var content = _isFunction(tickFormatter) ? tickFormatter(entry.value) : entry.value;
        var size = getStringSize(content)[sizeKey] + unitSize;

        if (i === 0) {
          var gap = sign * (entry.coordinate - sign * size / 2 - start);
          result[i] = entry = _extends({}, entry, {
            tickCoord: gap < 0 ? entry.coordinate - gap * sign : entry.coordinate
          });
        } else {
          result[i] = entry = _extends({}, entry, { tickCoord: entry.coordinate });
        }

        var isShow = sign * (entry.tickCoord - sign * size / 2 - start) >= 0 && sign * (entry.tickCoord + sign * size / 2 - end) <= 0;

        if (isShow) {
          start = entry.tickCoord + sign * (size / 2 + minTickGap);
          result[i] = _extends({}, entry, { isShow: true });
        }
      }

      return result.filter(function (entry) {
        return entry.isShow;
      });
    }
  }, {
    key: 'getTicksEnd',
    value: function getTicksEnd(_ref3) {
      var ticks = _ref3.ticks,
          tickFormatter = _ref3.tickFormatter,
          viewBox = _ref3.viewBox,
          orientation = _ref3.orientation,
          minTickGap = _ref3.minTickGap,
          unit = _ref3.unit;
      var x = viewBox.x,
          y = viewBox.y,
          width = viewBox.width,
          height = viewBox.height;

      var sizeKey = orientation === 'top' || orientation === 'bottom' ? 'width' : 'height';
      var unitSize = unit ? getStringSize(unit)[sizeKey] : 0;
      var result = (ticks || []).slice();
      var len = result.length;
      var sign = len >= 2 ? mathSign(result[1].coordinate - result[0].coordinate) : 1;

      var start = void 0,
          end = void 0;

      if (sign === 1) {
        start = sizeKey === 'width' ? x : y;
        end = sizeKey === 'width' ? x + width : y + height;
      } else {
        start = sizeKey === 'width' ? x + width : y + height;
        end = sizeKey === 'width' ? x : y;
      }

      for (var i = len - 1; i >= 0; i--) {
        var entry = result[i];
        var content = _isFunction(tickFormatter) ? tickFormatter(entry.value) : entry.value;
        var size = getStringSize(content)[sizeKey] + unitSize;

        if (i === len - 1) {
          var gap = sign * (entry.coordinate + sign * size / 2 - end);
          result[i] = entry = _extends({}, entry, {
            tickCoord: gap > 0 ? entry.coordinate - gap * sign : entry.coordinate
          });
        } else {
          result[i] = entry = _extends({}, entry, { tickCoord: entry.coordinate });
        }

        var isShow = sign * (entry.tickCoord - sign * size / 2 - start) >= 0 && sign * (entry.tickCoord + sign * size / 2 - end) <= 0;

        if (isShow) {
          end = entry.tickCoord - sign * (size / 2 + minTickGap);
          result[i] = _extends({}, entry, { isShow: true });
        }
      }

      return result.filter(function (entry) {
        return entry.isShow;
      });
    }
  }]);

  return CartesianAxis;
}(Component), _class.displayName = 'CartesianAxis', _class.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, {
  className: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  orientation: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  // The viewBox of svg
  viewBox: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
  }),
  tick: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.object, PropTypes.element]),
  axisLine: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  tickLine: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  mirror: PropTypes.bool,

  minTickGap: PropTypes.number,
  ticks: PropTypes.array,
  tickSize: PropTypes.number,
  stroke: PropTypes.string,
  tickFormatter: PropTypes.func,
  ticksGenerator: PropTypes.func,
  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['preserveStart', 'preserveEnd', 'preserveStartEnd'])])
}), _class.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  // The orientation of axis
  orientation: 'bottom',
  // The ticks
  ticks: [],

  stroke: '#666',
  tickLine: true,
  axisLine: true,
  tick: true,
  mirror: false,

  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  interval: 'preserveEnd'
}, _temp);


export default CartesianAxis;