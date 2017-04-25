'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ReactUtils = require('../util/ReactUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * @fileOverview Surface
                                                                                                                                                                                                                              */


var propTypes = {
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  viewBox: _propTypes2.default.shape({
    x: _propTypes2.default.number,
    y: _propTypes2.default.number,
    width: _propTypes2.default.number,
    height: _propTypes2.default.number
  }),
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};
function Surface(props) {
  var children = props.children,
      width = props.width,
      height = props.height,
      viewBox = props.viewBox,
      className = props.className,
      style = props.style,
      others = _objectWithoutProperties(props, ['children', 'width', 'height', 'viewBox', 'className', 'style']);

  var svgView = viewBox || { width: width, height: height, x: 0, y: 0 };
  var layerClass = (0, _classnames2.default)('recharts-surface', className);
  var attrs = (0, _ReactUtils.getPresentationAttributes)(others);

  return _react2.default.createElement(
    'svg',
    _extends({}, attrs, {
      className: layerClass,
      width: width,
      height: height,
      style: style,
      viewBox: svgView.x + ' ' + svgView.y + ' ' + svgView.width + ' ' + svgView.height,
      version: '1.1'
    }),
    children
  );
}

Surface.propTypes = propTypes;

exports.default = Surface;