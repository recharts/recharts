'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; /**
                             * @fileOverview Z Axis
                             */


var _react = require('react');

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ZAxis = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(ZAxis, _Component);

  function ZAxis() {
    _classCallCheck(this, ZAxis);

    return _possibleConstructorReturn(this, (ZAxis.__proto__ || Object.getPrototypeOf(ZAxis)).apply(this, arguments));
  }

  _createClass(ZAxis, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return ZAxis;
}(_react.Component), _class2.displayName = 'ZAxis', _class2.propTypes = {
  // The name of data displayed in the axis
  name: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  // The unit of data displayed in the axis
  unit: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  // The unique id of z-axis
  zAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  // The key of data displayed in the axis
  dataKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.func]),
  // The range of axis
  range: _react.PropTypes.arrayOf(_react.PropTypes.number),
  scale: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['auto', 'linear', 'pow', 'sqrt', 'log', 'identity', 'time', 'band', 'point', 'ordinal', 'quantile', 'quantize', 'utcTime', 'sequential', 'threshold']), _react.PropTypes.func])
}, _class2.defaultProps = {
  zAxisId: 0,
  range: [64, 64],
  scale: 'auto'
}, _temp)) || _class;

exports.default = ZAxis;