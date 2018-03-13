'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; /**
                             * @fileOverview Dot
                             */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _ReactUtils = require('../util/ReactUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dot = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Dot, _Component);

  function Dot() {
    _classCallCheck(this, Dot);

    return _possibleConstructorReturn(this, (Dot.__proto__ || Object.getPrototypeOf(Dot)).apply(this, arguments));
  }

  _createClass(Dot, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          cx = _props.cx,
          cy = _props.cy,
          r = _props.r,
          className = _props.className;

      var layerClass = (0, _classnames2.default)('recharts-dot', className);

      if (cx === +cx && cy === +cy && r === +r) {
        return _react2.default.createElement('circle', _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), (0, _ReactUtils.filterEventAttributes)(this.props, null, true), {
          className: layerClass,
          cx: cx,
          cy: cy,
          r: r
        }));
      }

      return null;
    }
  }]);

  return Dot;
}(_react.Component), _class2.displayName = 'Dot', _class2.propTypes = {
  className: _propTypes2.default.string,
  cx: _propTypes2.default.number,
  cy: _propTypes2.default.number,
  r: _propTypes2.default.number
}, _temp)) || _class;

exports.default = Dot;