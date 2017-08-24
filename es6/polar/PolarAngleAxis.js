import _isFunction from 'lodash/isFunction';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Axis of radial direction
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, SCALE_TYPES, getPresentationAttributes, filterEventsOfChild } from '../util/ReactUtils';
import Dot from '../shape/Dot';
import Polygon from '../shape/Polygon';
import Text from '../component/Text';
import { polarToCartesian } from '../util/PolarUtils';

var RADIAN = Math.PI / 180;
var eps = 1e-5;

var PolarAngleAxis = pureRender(_class = (_temp = _class2 = function (_Component) {
  _inherits(PolarAngleAxis, _Component);

  function PolarAngleAxis() {
    _classCallCheck(this, PolarAngleAxis);

    return _possibleConstructorReturn(this, (PolarAngleAxis.__proto__ || Object.getPrototypeOf(PolarAngleAxis)).apply(this, arguments));
  }

  _createClass(PolarAngleAxis, [{
    key: 'getTickLineCoord',


    /**
     * Calculate the coordinate of line endpoint
     * @param  {Object} data The Data if ticks
     * @return {Object} (x0, y0): The start point of text,
     *                  (x1, y1): The end point close to text,
     *                  (x2, y2): The end point close to axis
     */
    value: function getTickLineCoord(data) {
      var _props = this.props,
          cx = _props.cx,
          cy = _props.cy,
          radius = _props.radius,
          orientation = _props.orientation,
          tickLine = _props.tickLine;

      var tickLineSize = tickLine && tickLine.size || 8;
      var p1 = polarToCartesian(cx, cy, radius, data.coordinate);
      var p2 = polarToCartesian(cx, cy, radius + (orientation === 'inner' ? -1 : 1) * tickLineSize, data.coordinate);

      return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y };
    }
    /**
     * Get the text-anchor of each tick
     * @param  {Object} data Data of ticks
     * @return {String} text-anchor
     */

  }, {
    key: 'getTickTextAnchor',
    value: function getTickTextAnchor(data) {
      var orientation = this.props.orientation;

      var cos = Math.cos(-data.coordinate * RADIAN);
      var textAnchor = void 0;

      if (cos > eps) {
        textAnchor = orientation === 'outer' ? 'start' : 'end';
      } else if (cos < -eps) {
        textAnchor = orientation === 'outer' ? 'end' : 'start';
      } else {
        textAnchor = 'middle';
      }

      return textAnchor;
    }
  }, {
    key: 'renderAxisLine',
    value: function renderAxisLine() {
      var _props2 = this.props,
          cx = _props2.cx,
          cy = _props2.cy,
          radius = _props2.radius,
          axisLine = _props2.axisLine,
          axisLineType = _props2.axisLineType;

      var props = _extends({}, getPresentationAttributes(this.props), {
        fill: 'none'
      }, getPresentationAttributes(axisLine));

      if (axisLineType === 'circle') {
        return React.createElement(Dot, _extends({
          className: 'recharts-polar-angle-axis-line'
        }, props, {
          cx: cx,
          cy: cy,
          r: radius
        }));
      }
      var ticks = this.props.ticks;

      var points = ticks.map(function (entry) {
        return polarToCartesian(cx, cy, radius, entry.coordinate);
      });

      return React.createElement(Polygon, _extends({ className: 'recharts-polar-angle-axis-line' }, props, { points: points }));
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
            className: 'recharts-polar-angle-axis-tick-value'
          }),
          value
        );
      }

      return tickItem;
    }
  }, {
    key: 'renderTicks',
    value: function renderTicks() {
      var _this2 = this;

      var _props3 = this.props,
          ticks = _props3.ticks,
          tick = _props3.tick,
          tickLine = _props3.tickLine,
          tickFormatter = _props3.tickFormatter,
          stroke = _props3.stroke;

      var axisProps = getPresentationAttributes(this.props);
      var customTickProps = getPresentationAttributes(tick);
      var tickLineProps = _extends({}, axisProps, { fill: 'none' }, getPresentationAttributes(tickLine));

      var items = ticks.map(function (entry, i) {
        var lineCoord = _this2.getTickLineCoord(entry);
        var textAnchor = _this2.getTickTextAnchor(entry);
        var tickProps = _extends({
          textAnchor: textAnchor
        }, axisProps, {
          stroke: 'none', fill: stroke
        }, customTickProps, {
          index: i, payload: entry,
          x: lineCoord.x2, y: lineCoord.y2
        });

        return React.createElement(
          Layer,
          _extends({
            className: 'recharts-polar-angle-axis-tick',
            key: 'tick-' + i
          }, filterEventsOfChild(_this2.props, entry, i)),
          tickLine && React.createElement('line', _extends({
            className: 'recharts-polar-angle-axis-tick-line'
          }, tickLineProps, lineCoord)),
          tick && _this2.renderTickItem(tick, tickProps, tickFormatter ? tickFormatter(entry.value) : entry.value)
        );
      });

      return React.createElement(
        Layer,
        { className: 'recharts-polar-angle-axis-ticks' },
        items
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          ticks = _props4.ticks,
          radius = _props4.radius,
          axisLine = _props4.axisLine;


      if (radius <= 0 || !ticks || !ticks.length) {
        return null;
      }

      return React.createElement(
        Layer,
        { className: 'recharts-polar-angle-axis' },
        axisLine && this.renderAxisLine(),
        this.renderTicks()
      );
    }
  }]);

  return PolarAngleAxis;
}(Component), _class2.displayName = 'PolarAngleAxis', _class2.axisType = 'angleAxis', _class2.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, {
  type: PropTypes.oneOf(['number', 'category']),
  angleAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dataKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  cx: PropTypes.number,
  cy: PropTypes.number,
  radius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  hide: PropTypes.bool,
  scale: PropTypes.oneOfType([PropTypes.oneOf(SCALE_TYPES), PropTypes.func]),

  axisLine: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  axisLineType: PropTypes.oneOf(['polygon', 'circle']),
  tickLine: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  tick: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.object, PropTypes.element]),

  ticks: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any,
    coordinate: PropTypes.number
  })),
  stroke: PropTypes.string,
  orientation: PropTypes.oneOf(['inner', 'outer']),
  tickFormatter: PropTypes.func
}), _class2.defaultProps = {
  type: 'category',
  angleAxisId: 0,
  scale: 'auto',
  cx: 0,
  cy: 0,
  domain: [0, 'auto'],
  orientation: 'outer',
  axisLine: true,
  tickLine: true,
  tick: true,
  hide: false
}, _temp)) || _class;

export default PolarAngleAxis;