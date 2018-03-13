var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Dot
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import pureRender from '../util/PureRender';
import { getPresentationAttributes, filterEventAttributes } from '../util/ReactUtils';

var Dot = pureRender(_class = (_temp = _class2 = function (_Component) {
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

      var layerClass = classNames('recharts-dot', className);

      if (cx === +cx && cy === +cy && r === +r) {
        return React.createElement('circle', _extends({}, getPresentationAttributes(this.props), filterEventAttributes(this.props, null, true), {
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
}(Component), _class2.displayName = 'Dot', _class2.propTypes = {
  className: PropTypes.string,
  cx: PropTypes.number,
  cy: PropTypes.number,
  r: PropTypes.number
}, _temp)) || _class;

export default Dot;