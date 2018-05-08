'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; /**
                             * @fileOverview Reference Dot
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

var _Dot = require('../shape/Dot');

var _Dot2 = _interopRequireDefault(_Dot);

var _ReactUtils = require('../util/ReactUtils');

var _Label = require('../component/Label');

var _Label2 = _interopRequireDefault(_Label);

var _DataUtils = require('../util/DataUtils');

var _ChartUtils = require('../util/ChartUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReferenceDot = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(ReferenceDot, _Component);

  function ReferenceDot() {
    _classCallCheck(this, ReferenceDot);

    return _possibleConstructorReturn(this, (ReferenceDot.__proto__ || Object.getPrototypeOf(ReferenceDot)).apply(this, arguments));
  }

  _createClass(ReferenceDot, [{
    key: 'getCoordinate',
    value: function getCoordinate() {
      var _props = this.props,
          x = _props.x,
          y = _props.y,
          xAxis = _props.xAxis,
          yAxis = _props.yAxis;

      var xScale = xAxis.scale;
      var yScale = yAxis.scale;
      var result = {
        cx: xScale(x) + (xScale.bandwidth ? xScale.bandwidth() / 2 : 0),
        cy: yScale(y) + (yScale.bandwidth ? yScale.bandwidth() / 2 : 0)
      };

      if ((0, _ChartUtils.validateCoordinateInRange)(result.cx, xScale) && (0, _ChartUtils.validateCoordinateInRange)(result.cy, yScale)) {
        return result;
      }

      return null;
    }
  }, {
    key: 'renderDot',
    value: function renderDot(option, props) {
      var dot = void 0;

      if (_react2.default.isValidElement(option)) {
        dot = _react2.default.cloneElement(option, props);
      } else if ((0, _isFunction3.default)(option)) {
        dot = option(props);
      } else {
        dot = _react2.default.createElement(_Dot2.default, _extends({}, props, {
          cx: props.cx,
          cy: props.cy,
          className: 'recharts-reference-dot-dot'
        }));
      }

      return dot;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          x = _props2.x,
          y = _props2.y,
          r = _props2.r;

      var isX = (0, _DataUtils.isNumOrStr)(x);
      var isY = (0, _DataUtils.isNumOrStr)(y);

      if (!isX || !isY) {
        return null;
      }

      var coordinate = this.getCoordinate();

      if (!coordinate) {
        return null;
      }

      var _props3 = this.props,
          shape = _props3.shape,
          className = _props3.className;


      var dotProps = _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), (0, _ReactUtils.filterEventAttributes)(this.props), coordinate);

      return _react2.default.createElement(
        _Layer2.default,
        { className: (0, _classnames2.default)('recharts-reference-dot', className) },
        this.renderDot(shape, dotProps),
        _Label2.default.renderCallByParent(this.props, {
          x: coordinate.cx - r,
          y: coordinate.cy - r,
          width: 2 * r,
          height: 2 * r
        })
      );
    }
  }]);

  return ReferenceDot;
}(_react.Component), _class2.displayName = 'ReferenceDot', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, _ReactUtils.EVENT_ATTRIBUTES, {
  r: _propTypes2.default.number,

  xAxis: _propTypes2.default.shape({ scale: _propTypes2.default.func }),
  yAxis: _propTypes2.default.shape({ scale: _propTypes2.default.func }),

  isFront: _propTypes2.default.bool,
  alwaysShow: _propTypes2.default.bool,
  x: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  y: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

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
  fill: '#fff',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1
}, _temp)) || _class;

exports.default = ReferenceDot;