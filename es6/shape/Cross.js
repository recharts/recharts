var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Cross
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import pureRender from '../util/PureRender';
import { isNumber } from '../util/DataUtils';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';

var Cross = pureRender(_class = (_temp = _class2 = function (_Component) {
  _inherits(Cross, _Component);

  function Cross() {
    _classCallCheck(this, Cross);

    return _possibleConstructorReturn(this, (Cross.__proto__ || Object.getPrototypeOf(Cross)).apply(this, arguments));
  }

  _createClass(Cross, [{
    key: 'getPath',
    value: function getPath(x, y, width, height, top, left) {
      return 'M' + x + ',' + top + 'v' + height + 'M' + left + ',' + y + 'h' + width;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          x = _props.x,
          y = _props.y,
          width = _props.width,
          height = _props.height,
          top = _props.top,
          left = _props.left,
          className = _props.className;


      if (!isNumber(x) || !isNumber(y) || !isNumber(width) || !isNumber(height) || !isNumber(top) || !isNumber(left)) {
        return null;
      }

      return React.createElement('path', _extends({}, getPresentationAttributes(this.props), {
        className: classNames('recharts-cross', className),
        d: this.getPath(x, y, width, height, top, left)
      }));
    }
  }]);

  return Cross;
}(Component), _class2.displayName = 'Cross', _class2.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  top: PropTypes.number,
  left: PropTypes.number,
  className: PropTypes.string
}), _class2.defaultProps = {
  x: 0,
  y: 0,
  top: 0,
  left: 0,
  width: 0,
  height: 0
}, _temp)) || _class;

export default Cross;