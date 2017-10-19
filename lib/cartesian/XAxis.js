'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; /**
                             * @fileOverview X Axis
                             */


var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _ReactUtils = require('../util/ReactUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XAxis = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(XAxis, _Component);

  function XAxis() {
    _classCallCheck(this, XAxis);

    return _possibleConstructorReturn(this, (XAxis.__proto__ || Object.getPrototypeOf(XAxis)).apply(this, arguments));
  }

  _createClass(XAxis, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return XAxis;
}(_react.Component), _class2.displayName = 'XAxis', _class2.propTypes = {
  allowDecimals: _propTypes2.default.bool,
  hide: _propTypes2.default.bool,
  // The name of data displayed in the axis
  name: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  // The unit of data displayed in the axis
  unit: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  // The unique id of x-axis
  xAxisId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  domain: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.oneOf(['auto', 'dataMin', 'dataMax'])])),
  // The key of data displayed in the axis
  dataKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.func]),
  // The width of axis which is usually calculated internally
  width: _propTypes2.default.number,
  // The height of axis, which need to be setted by user
  height: _propTypes2.default.number,
  mirror: _propTypes2.default.bool,
  // The orientation of axis
  orientation: _propTypes2.default.oneOf(['top', 'bottom']),
  type: _propTypes2.default.oneOf(['number', 'category']),
  // Ticks can be any type when the axis is the type of category
  // Ticks must be numbers when the axis is the type of number
  ticks: _propTypes2.default.array,
  // The count of ticks
  tickCount: _propTypes2.default.number,
  // The formatter function of tick
  tickFormatter: _propTypes2.default.func,
  padding: _propTypes2.default.shape({
    left: _propTypes2.default.number,
    right: _propTypes2.default.number
  }),
  allowDataOverflow: _propTypes2.default.bool,
  scale: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(_ReactUtils.SCALE_TYPES), _propTypes2.default.func]),
  tick: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func, _propTypes2.default.object, _propTypes2.default.element]),
  axisLine: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
  tickLine: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
  minTickGap: _propTypes2.default.number,
  tickSize: _propTypes2.default.number,
  interval: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['preserveStart', 'preserveEnd', 'preserveStartEnd'])]),
  reversed: _propTypes2.default.bool
}, _class2.defaultProps = {
  allowDecimals: true,
  hide: false,
  orientation: 'bottom',
  width: 0,
  height: 30,
  mirror: false,
  xAxisId: 0,
  tickCount: 5,
  type: 'category',
  domain: [0, 'auto'],
  padding: { left: 0, right: 0 },
  allowDataOverflow: false,
  scale: 'auto',
  reversed: false
}, _temp)) || _class;

exports.default = XAxis;