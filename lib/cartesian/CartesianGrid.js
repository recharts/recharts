'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; /**
                             * @fileOverview Cartesian Grid
                             */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _ReactUtils = require('../util/ReactUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CartesianGrid = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(CartesianGrid, _Component);

  function CartesianGrid() {
    _classCallCheck(this, CartesianGrid);

    return _possibleConstructorReturn(this, (CartesianGrid.__proto__ || Object.getPrototypeOf(CartesianGrid)).apply(this, arguments));
  }

  _createClass(CartesianGrid, [{
    key: 'renderLineItem',
    value: function renderLineItem(option, props) {
      var lineItem = void 0;

      if (_react2.default.isValidElement(option)) {
        lineItem = _react2.default.cloneElement(option, props);
      } else if ((0, _isFunction3.default)(option)) {
        lineItem = option(props);
      } else {
        var x1 = props.x1,
            y1 = props.y1,
            x2 = props.x2,
            y2 = props.y2,
            key = props.key,
            others = _objectWithoutProperties(props, ['x1', 'y1', 'x2', 'y2', 'key']);

        lineItem = _react2.default.createElement('line', _extends({}, (0, _ReactUtils.getPresentationAttributes)(others), {
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

      return _react2.default.createElement(
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

      return _react2.default.createElement(
        'g',
        { className: 'recharts-cartesian-grid-vertical' },
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

      var _props3 = this.props,
          fillOpacity = _props3.fillOpacity,
          x = _props3.x,
          y = _props3.y,
          width = _props3.width,
          height = _props3.height;


      return _react2.default.createElement('rect', {
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
      var _props4 = this.props,
          x = _props4.x,
          y = _props4.y,
          width = _props4.width,
          height = _props4.height,
          horizontal = _props4.horizontal,
          vertical = _props4.vertical,
          horizontalCoordinatesGenerator = _props4.horizontalCoordinatesGenerator,
          verticalCoordinatesGenerator = _props4.verticalCoordinatesGenerator,
          xAxis = _props4.xAxis,
          yAxis = _props4.yAxis,
          offset = _props4.offset,
          chartWidth = _props4.chartWidth,
          chartHeight = _props4.chartHeight;


      if (width <= 0 || height <= 0 || x !== +x || y !== +y) {
        return null;
      }

      var _props5 = this.props,
          horizontalPoints = _props5.horizontalPoints,
          verticalPoints = _props5.verticalPoints;


      if ((0, _isFunction3.default)(horizontalCoordinatesGenerator)) {
        horizontalPoints = horizontalCoordinatesGenerator({ yAxis: yAxis, width: chartWidth,
          height: chartHeight, offset: offset });
      }

      if ((0, _isFunction3.default)(verticalCoordinatesGenerator)) {
        verticalPoints = verticalCoordinatesGenerator({ xAxis: xAxis, width: chartWidth,
          height: chartHeight, offset: offset });
      }

      return _react2.default.createElement(
        'g',
        { className: 'recharts-cartesian-grid' },
        this.renderBackground(),
        horizontal && this.renderHorizontal(horizontalPoints),
        vertical && this.renderVertical(verticalPoints)
      );
    }
  }]);

  return CartesianGrid;
}(_react.Component), _class2.displayName = 'CartesianGrid', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
  x: _propTypes2.default.number,
  y: _propTypes2.default.number,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  horizontal: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.bool]),
  vertical: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.bool]),
  horizontalPoints: _propTypes2.default.arrayOf(_propTypes2.default.number),
  verticalPoints: _propTypes2.default.arrayOf(_propTypes2.default.number),
  horizontalCoordinatesGenerator: _propTypes2.default.func,
  verticalCoordinatesGenerator: _propTypes2.default.func,
  xAxis: _propTypes2.default.object,
  yAxis: _propTypes2.default.object,
  offset: _propTypes2.default.object,
  chartWidth: _propTypes2.default.number,
  chartHeight: _propTypes2.default.number
}), _class2.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  horizontal: true,
  vertical: true,
  // The ordinates of horizontal grid lines
  horizontalPoints: [],
  // The abscissas of vertical grid lines
  verticalPoints: [],

  stroke: '#ccc',
  fill: 'none'
}, _temp)) || _class;

exports.default = CartesianGrid;