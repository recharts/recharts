var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Z Axis
 */
import { Component } from 'react';
import PropTypes from 'prop-types';
import pureRender from '../util/PureRender';

var ZAxis = pureRender(_class = (_temp = _class2 = function (_Component) {
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
}(Component), _class2.displayName = 'ZAxis', _class2.propTypes = {
  type: PropTypes.oneOf(['number', 'category']),
  // The name of data displayed in the axis
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // The unit of data displayed in the axis
  unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // The unique id of z-axis
  zAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // The key of data displayed in the axis
  dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]),
  // The range of axis
  range: PropTypes.arrayOf(PropTypes.number),
  scale: PropTypes.oneOfType([PropTypes.oneOf(['auto', 'linear', 'pow', 'sqrt', 'log', 'identity', 'time', 'band', 'point', 'ordinal', 'quantile', 'quantize', 'utcTime', 'sequential', 'threshold']), PropTypes.func])
}, _class2.defaultProps = {
  zAxisId: 0,
  range: [64, 64],
  scale: 'auto',
  type: 'number'
}, _temp)) || _class;

export default ZAxis;