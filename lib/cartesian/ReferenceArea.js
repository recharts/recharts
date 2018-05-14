'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; /**
                             * @fileOverview Reference Line
                             */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _Layer = require('../container/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _Label = require('../component/Label');

var _Label2 = _interopRequireDefault(_Label);

var _ReactUtils = require('../util/ReactUtils');

var _DataUtils = require('../util/DataUtils');

var _ChartUtils = require('../util/ChartUtils');

var _Rectangle = require('../shape/Rectangle');

var _Rectangle2 = _interopRequireDefault(_Rectangle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReferenceArea = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(ReferenceArea, _Component);

  function ReferenceArea() {
    _classCallCheck(this, ReferenceArea);

    return _possibleConstructorReturn(this, (ReferenceArea.__proto__ || Object.getPrototypeOf(ReferenceArea)).apply(this, arguments));
  }

  _createClass(ReferenceArea, [{
    key: 'getRect',
    value: function getRect(hasX1, hasX2, hasY1, hasY2) {
      var _props = this.props,
          xValue1 = _props.x1,
          xValue2 = _props.x2,
          yValue1 = _props.y1,
          yValue2 = _props.y2,
          xAxis = _props.xAxis,
          yAxis = _props.yAxis;

      var xScale = xAxis.scale;
      var yScale = yAxis.scale;
      var xOffset = xScale.bandwidth ? xScale.bandwidth() / 2 : 0;
      var yOffset = yScale.bandwidth ? yScale.bandwidth() / 2 : 0;
      var xRange = xScale.range();
      var yRange = yScale.range();
      var x1 = void 0,
          x2 = void 0,
          y1 = void 0,
          y2 = void 0;

      if (hasX1) {
        x1 = xScale(xValue1) + xOffset;
      } else {
        x1 = xRange[0];
      }

      if (hasX2) {
        x2 = xScale(xValue2) + xOffset;
      } else {
        x2 = xRange[1];
      }

      if (hasY1) {
        y1 = yScale(yValue1) + yOffset;
      } else {
        y1 = yRange[0];
      }

      if (hasY2) {
        y2 = yScale(yValue2) + yOffset;
      } else {
        y2 = yRange[1];
      }

      if ((0, _ChartUtils.validateCoordinateInRange)(x1, xScale) && (0, _ChartUtils.validateCoordinateInRange)(x2, xScale) && (0, _ChartUtils.validateCoordinateInRange)(y1, yScale) && (0, _ChartUtils.validateCoordinateInRange)(y2, yScale)) {
        return {
          x: Math.min(x1, x2),
          y: Math.min(y1, y2),
          width: Math.abs(x2 - x1),
          height: Math.abs(y2 - y1)
        };
      }

      return null;
    }
  }, {
    key: 'renderRect',
    value: function renderRect(option, props) {
      var rect = void 0;

      if (_react2.default.isValidElement(option)) {
        rect = _react2.default.cloneElement(option, props);
      } else if ((0, _isFunction3.default)(option)) {
        rect = option(props);
      } else {
        rect = _react2.default.createElement(_Rectangle2.default, _extends({}, props, {
          className: 'recharts-reference-area-rect'
        }));
      }

      return rect;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          x1 = _props2.x1,
          x2 = _props2.x2,
          y1 = _props2.y1,
          y2 = _props2.y2,
          className = _props2.className;


      var hasX1 = (0, _DataUtils.isNumOrStr)(x1);
      var hasX2 = (0, _DataUtils.isNumOrStr)(x2);
      var hasY1 = (0, _DataUtils.isNumOrStr)(y1);
      var hasY2 = (0, _DataUtils.isNumOrStr)(y2);

      if (!hasX1 && !hasX2 && !hasY1 && !hasY2) {
        return null;
      }

      var rect = this.getRect(hasX1, hasX2, hasY1, hasY2);

      if (!rect) {
        return null;
      }

      var shape = this.props.shape;


      return _react2.default.createElement(
        _Layer2.default,
        { className: (0, _classnames2.default)('recharts-reference-area', className) },
        this.renderRect(shape, _extends({}, this.props, rect)),
        _Label2.default.renderCallByParent(this.props, rect)
      );
    }
  }]);

  return ReferenceArea;
}(_react.Component), _class2.displayName = 'ReferenceArea', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
  viewBox: _propTypes2.default.shape({
    x: _propTypes2.default.number,
    y: _propTypes2.default.number,
    width: _propTypes2.default.number,
    height: _propTypes2.default.number
  }),

  xAxis: _propTypes2.default.object,
  yAxis: _propTypes2.default.object,

  isFront: _propTypes2.default.bool,
  alwaysShow: _propTypes2.default.bool,
  x1: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  x2: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  y1: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  y2: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  className: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  yAxisId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  xAxisId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  shape: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element])
}), _class2.defaultProps = {
  isFront: false,
  alwaysShow: false,
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: '#ccc',
  fillOpacity: 0.5,
  stroke: 'none',
  strokeWidth: 1
}, _temp)) || _class;

exports.default = ReferenceArea;