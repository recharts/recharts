'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * @fileOverview Layer
                                                                                                                                                                                                                              */


var propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
};

function Layer(props) {
  var children = props.children,
      className = props.className,
      others = _objectWithoutProperties(props, ['children', 'className']);

  var layerClass = (0, _classnames2.default)('recharts-layer', className);

  return _react2.default.createElement(
    'g',
    _extends({ className: layerClass }, others),
    children
  );
}

Layer.propTypes = propTypes;

exports.default = Layer;