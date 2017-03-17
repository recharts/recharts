'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; /**
                             * @fileOverview Y Axis
                             */


var _react = require('react');

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YAxis = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(YAxis, _Component);

  function YAxis() {
    _classCallCheck(this, YAxis);

    return _possibleConstructorReturn(this, (YAxis.__proto__ || Object.getPrototypeOf(YAxis)).apply(this, arguments));
  }

  _createClass(YAxis, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return YAxis;
}(_react.Component), _class2.displayName = 'YAxis', _class2.propTypes = {
  allowDecimals: _react.PropTypes.bool,
  hide: _react.PropTypes.bool,
  // The name of data displayed in the axis
  name: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  // The unit of data displayed in the axis
  unit: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  // The unique id of y-axis
  yAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  domain: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.oneOf(['auto', 'dataMin', 'dataMax'])])),
  // The key of data displayed in the axis
  dataKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.func]),
  // Ticks can be any type when the axis is the type of category
  // Ticks must be numbers when the axis is the type of number
  ticks: _react.PropTypes.array,
  // The count of ticks
  tickCount: _react.PropTypes.number,
  // The formatter function of tick
  tickFormatter: _react.PropTypes.func,
  // The width of axis, which need to be setted by user
  width: _react.PropTypes.number,
  // The height of axis which is usually calculated in Chart
  height: _react.PropTypes.number,
  mirror: _react.PropTypes.bool,
  // The orientation of axis
  orientation: _react.PropTypes.oneOf(['left', 'right']),
  type: _react.PropTypes.oneOf(['number', 'category']),
  padding: _react.PropTypes.shape({
    top: _react.PropTypes.number,
    bottom: _react.PropTypes.number
  }),
  allowDataOverflow: _react.PropTypes.bool,
  scale: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['auto', 'linear', 'pow', 'sqrt', 'log', 'identity', 'time', 'band', 'point', 'ordinal', 'quantile', 'quantize', 'utcTime', 'sequential', 'threshold']), _react.PropTypes.func]),
  label: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.func, _react.PropTypes.element]),
  tick: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func, _react.PropTypes.object, _react.PropTypes.element]),
  axisLine: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
  tickLine: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
  minTickGap: _react.PropTypes.number,
  tickSize: _react.PropTypes.number,
  interval: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.oneOf(['preserveStart', 'preserveEnd', 'preserveStartEnd'])])
}, _class2.defaultProps = {
  allowDecimals: true,
  hide: false,
  orientation: 'left',
  width: 60,
  height: 0,
  mirror: false,
  yAxisId: 0,
  tickCount: 5,
  type: 'number',
  domain: [0, 'auto'],
  padding: { top: 0, bottom: 0 },
  allowDataOverflow: false,
  scale: 'auto'
}, _temp)) || _class;

exports.default = YAxis;