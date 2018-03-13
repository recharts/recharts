import _isFunction from 'lodash/isFunction';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Cartesian Grid
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import pureRender from '../util/PureRender';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';
import { isNumber } from '../util/DataUtils';

var CartesianGrid = pureRender(_class = (_temp = _class2 = function (_Component) {
  _inherits(CartesianGrid, _Component);

  function CartesianGrid() {
    _classCallCheck(this, CartesianGrid);

    return _possibleConstructorReturn(this, (CartesianGrid.__proto__ || Object.getPrototypeOf(CartesianGrid)).apply(this, arguments));
  }

  _createClass(CartesianGrid, [{
    key: 'renderLineItem',
    value: function renderLineItem(option, props) {
      var lineItem = void 0;

      if (React.isValidElement(option)) {
        lineItem = React.cloneElement(option, props);
      } else if (_isFunction(option)) {
        lineItem = option(props);
      } else {
        var x1 = props.x1,
            y1 = props.y1,
            x2 = props.x2,
            y2 = props.y2,
            key = props.key,
            others = _objectWithoutProperties(props, ['x1', 'y1', 'x2', 'y2', 'key']);

        lineItem = React.createElement('line', _extends({}, getPresentationAttributes(others), {
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2,
          fill: 'none',
          key: key
        }));
      }

      return lineItem;
    }

    /**
     * Draw the horizontal grid lines
     * @param {Array} horizontalPoints either passed in as props or generated from function
     * @return {Group} Horizontal lines
     */

  }, {
    key: 'renderHorizontal',
    value: function renderHorizontal(horizontalPoints) {
      var _this2 = this;

      var _props = this.props,
          x = _props.x,
          width = _props.width,
          horizontal = _props.horizontal;


      if (!horizontalPoints || !horizontalPoints.length) {
        return null;
      }

      var items = horizontalPoints.map(function (entry, i) {
        var props = _extends({}, _this2.props, {
          x1: x,
          y1: entry,
          x2: x + width,
          y2: entry,
          key: 'line-' + i,
          index: i
        });

        return _this2.renderLineItem(horizontal, props);
      });

      return React.createElement(
        'g',
        { className: 'recharts-cartesian-grid-horizontal' },
        items
      );
    }

    /**
     * Draw vertical grid lines
     * @param {Array} verticalPoints either passed in as props or generated from function
     * @return {Group} Vertical lines
     */

  }, {
    key: 'renderVertical',
    value: function renderVertical(verticalPoints) {
      var _this3 = this;

      var _props2 = this.props,
          y = _props2.y,
          height = _props2.height,
          vertical = _props2.vertical;


      if (!verticalPoints || !verticalPoints.length) {
        return null;
      }

      var items = verticalPoints.map(function (entry, i) {
        var props = _extends({}, _this3.props, {
          x1: entry,
          y1: y,
          x2: entry,
          y2: y + height,
          key: 'line-' + i,
          index: i
        });

        return _this3.renderLineItem(vertical, props);
      });

      return React.createElement(
        'g',
        { className: 'recharts-cartesian-grid-vertical' },
        items
      );
    }

    /**
     * Draw vertical grid stripes filled by colors
     * @param {Array} verticalPoints either passed in as props or generated from function
     * @return {Group} Vertical stripes
     */

  }, {
    key: 'renderVerticalStripes',
    value: function renderVerticalStripes(verticalPoints) {
      var verticalFill = this.props.verticalFill;

      if (!verticalFill || !verticalFill.length) {
        return null;
      }

      var _props3 = this.props,
          fillOpacity = _props3.fillOpacity,
          x = _props3.x,
          y = _props3.y,
          width = _props3.width,
          height = _props3.height;

      var verticalPointsUpdated = verticalPoints.slice().sort(function (a, b) {
        return a - b > 0;
      });

      if (x !== verticalPointsUpdated[0]) {
        verticalPointsUpdated.unshift(0);
      }

      var items = verticalPointsUpdated.map(function (entry, i) {
        var lineWidth = verticalPointsUpdated[i + 1] ? verticalPointsUpdated[i + 1] - entry : x + width - entry;
        if (lineWidth <= 0) {
          return null;
        }
        var colorIndex = i % verticalFill.length;
        return React.createElement('rect', {
          key: i,
          x: Math.round(entry + x - x),
          y: y,
          width: lineWidth,
          height: height,
          stroke: 'none',
          fill: verticalFill[colorIndex],
          fillOpacity: fillOpacity,
          className: 'recharts-cartesian-grid-bg'
        });
      });

      return React.createElement(
        'g',
        { className: 'recharts-cartesian-gridstripes-vertical' },
        items
      );
    }

    /**
     * Draw horizontal grid stripes filled by colors
     * @param {Array} horizontalPoints either passed in as props or generated from function
     * @return {Group} Horizontal stripes
     */

  }, {
    key: 'renderHorizontalStripes',
    value: function renderHorizontalStripes(horizontalPoints) {
      var horizontalFill = this.props.horizontalFill;

      if (!horizontalFill || !horizontalFill.length) {
        return null;
      }

      var _props4 = this.props,
          fillOpacity = _props4.fillOpacity,
          x = _props4.x,
          y = _props4.y,
          width = _props4.width,
          height = _props4.height;

      var horizontalPointsUpdated = horizontalPoints.slice().sort(function (a, b) {
        return a - b > 0;
      });
      if (y !== horizontalPointsUpdated[0]) {
        horizontalPointsUpdated.unshift(0);
      }

      var items = horizontalPointsUpdated.map(function (entry, i) {
        var lineHeight = horizontalPointsUpdated[i + 1] ? horizontalPointsUpdated[i + 1] - entry : y + height - entry;
        if (lineHeight <= 0) {
          return null;
        }
        var colorIndex = i % horizontalFill.length;
        return React.createElement('rect', {
          key: i,
          y: Math.round(entry + y - y),
          x: x,
          height: lineHeight,
          width: width,
          stroke: 'none',
          fill: horizontalFill[colorIndex],
          fillOpacity: fillOpacity,
          className: 'recharts-cartesian-grid-bg'
        });
      });

      return React.createElement(
        'g',
        { className: 'recharts-cartesian-gridstripes-horizontal' },
        items
      );
    }
  }, {
    key: 'renderBackground',
    value: function renderBackground() {
      var fill = this.props.fill;


      if (!fill || fill === 'none') {
        return null;
      }

      var _props5 = this.props,
          fillOpacity = _props5.fillOpacity,
          x = _props5.x,
          y = _props5.y,
          width = _props5.width,
          height = _props5.height;


      return React.createElement('rect', {
        x: x,
        y: y,
        width: width,
        height: height,
        stroke: 'none',
        fill: fill,
        fillOpacity: fillOpacity,
        className: 'recharts-cartesian-grid-bg'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props6 = this.props,
          x = _props6.x,
          y = _props6.y,
          width = _props6.width,
          height = _props6.height,
          horizontal = _props6.horizontal,
          vertical = _props6.vertical,
          horizontalCoordinatesGenerator = _props6.horizontalCoordinatesGenerator,
          verticalCoordinatesGenerator = _props6.verticalCoordinatesGenerator,
          xAxis = _props6.xAxis,
          yAxis = _props6.yAxis,
          offset = _props6.offset,
          chartWidth = _props6.chartWidth,
          chartHeight = _props6.chartHeight;


      if (!isNumber(width) || width <= 0 || !isNumber(height) || height <= 0 || !isNumber(x) || x !== +x || !isNumber(y) || y !== +y) {
        return null;
      }

      var _props7 = this.props,
          horizontalPoints = _props7.horizontalPoints,
          verticalPoints = _props7.verticalPoints;

      // No horizontal points are specified

      if ((!horizontalPoints || !horizontalPoints.length) && _isFunction(horizontalCoordinatesGenerator)) {
        horizontalPoints = horizontalCoordinatesGenerator({ yAxis: yAxis, width: chartWidth,
          height: chartHeight, offset: offset });
      }

      // No vertical points are specified
      if ((!verticalPoints || !verticalPoints.length) && _isFunction(verticalCoordinatesGenerator)) {
        verticalPoints = verticalCoordinatesGenerator({ xAxis: xAxis, width: chartWidth,
          height: chartHeight, offset: offset });
      }

      return React.createElement(
        'g',
        { className: 'recharts-cartesian-grid' },
        this.renderBackground(),
        horizontal && this.renderHorizontal(horizontalPoints),
        vertical && this.renderVertical(verticalPoints),
        horizontal && this.renderHorizontalStripes(horizontalPoints),
        vertical && this.renderVerticalStripes(verticalPoints)
      );
    }
  }]);

  return CartesianGrid;
}(Component), _class2.displayName = 'CartesianGrid', _class2.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  horizontal: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool]),
  vertical: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool]),
  horizontalPoints: PropTypes.arrayOf(PropTypes.number),
  verticalPoints: PropTypes.arrayOf(PropTypes.number),
  horizontalCoordinatesGenerator: PropTypes.func,
  verticalCoordinatesGenerator: PropTypes.func,
  xAxis: PropTypes.object,
  yAxis: PropTypes.object,
  offset: PropTypes.object,
  chartWidth: PropTypes.number,
  chartHeight: PropTypes.number,
  verticalFill: PropTypes.arrayOf(PropTypes.string),
  horizontalFill: PropTypes.arrayOf(PropTypes.string)
}), _class2.defaultProps = {
  horizontal: true,
  vertical: true,
  // The ordinates of horizontal grid lines
  horizontalPoints: [],
  // The abscissas of vertical grid lines
  verticalPoints: [],

  stroke: '#ccc',
  fill: 'none',
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
}, _temp)) || _class;

export default CartesianGrid;