import _isFunction from 'lodash/isFunction';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Reference Line
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import Dot from '../shape/Dot';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, getPresentationAttributes, filterEventAttributes } from '../util/ReactUtils';
import Label from '../component/Label';
import { isNumOrStr } from '../util/DataUtils';
import { validateCoordinateInRange } from '../util/ChartUtils';

var ReferenceDot = pureRender(_class = (_temp = _class2 = function (_Component) {
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

      if (validateCoordinateInRange(result.cx, xScale) && validateCoordinateInRange(result.cy, yScale)) {
        return result;
      }

      return null;
    }
  }, {
    key: 'renderDot',
    value: function renderDot(option, props) {
      var dot = void 0;

      if (React.isValidElement(option)) {
        dot = React.cloneElement(option, props);
      } else if (_isFunction(option)) {
        dot = option(props);
      } else {
        dot = React.createElement(Dot, _extends({}, props, {
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

      var isX = isNumOrStr(x);
      var isY = isNumOrStr(y);

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


      var dotProps = _extends({}, getPresentationAttributes(this.props), filterEventAttributes(this.props), coordinate);

      return React.createElement(
        Layer,
        { className: classNames('recharts-reference-dot', className) },
        this.renderDot(shape, dotProps),
        Label.renderCallByParent(this.props, {
          x: coordinate.cx - r,
          y: coordinate.cy - r,
          width: 2 * r,
          height: 2 * r
        })
      );
    }
  }]);

  return ReferenceDot;
}(Component), _class2.displayName = 'ReferenceDot', _class2.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, {
  r: PropTypes.number,

  xAxis: PropTypes.shape({ scale: PropTypes.func }),
  yAxis: PropTypes.shape({ scale: PropTypes.func }),

  isFront: PropTypes.bool,
  alwaysShow: PropTypes.bool,
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  className: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  shape: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
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

export default ReferenceDot;