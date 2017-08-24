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
import Label from '../component/Label';
import { PRESENTATION_ATTRIBUTES } from '../util/ReactUtils';
import { isNumOrStr } from '../util/DataUtils';
import { validateCoordinateInRange } from '../util/ChartUtils';
import Rectangle from '../shape/Rectangle';

var ReferenceArea = pureRender(_class = (_temp = _class2 = function (_Component) {
  _inherits(ReferenceArea, _Component);

  function ReferenceArea() {
    _classCallCheck(this, ReferenceArea);

    return _possibleConstructorReturn(this, (ReferenceArea.__proto__ || Object.getPrototypeOf(ReferenceArea)).apply(this, arguments));
  }

  _createClass(ReferenceArea, [{
    key: 'getRect',
    value: function getRect(hasX, hasY) {
      var _props = this.props,
          xValue1 = _props.x1,
          xValue2 = _props.x2,
          yValue1 = _props.y1,
          yValue2 = _props.y2,
          xAxis = _props.xAxis,
          yAxis = _props.yAxis;

      var xScale = xAxis.scale;
      var yScale = yAxis.scale;
      var xOffset = xScale.bandwidth ? xScale.bandwidth() / 2 : 0;
      var yOffset = yScale.bandwidth ? yScale.bandwidth() / 2 : 0;
      var xRange = xScale.range();
      var yRange = yScale.range();
      var x1 = void 0,
          x2 = void 0,
          y1 = void 0,
          y2 = void 0;

      if (hasX && isNumOrStr(xValue1)) {
        x1 = xScale(xValue1) + xOffset;
      } else if (hasY) {
        x1 = xRange[0];
      }
      if (hasX && isNumOrStr(xValue2)) {
        x2 = xScale(xValue2) + xOffset;
      } else if (hasY) {
        x2 = xRange[1];
      }
      if (hasY && isNumOrStr(yValue1)) {
        y1 = yScale(yValue1) + yOffset;
      } else if (hasX) {
        y1 = yRange[0];
      }
      if (hasY && isNumOrStr(yValue2)) {
        y2 = yScale(yValue2) + yOffset;
      } else if (hasX) {
        y2 = yRange[1];
      }

      if (validateCoordinateInRange(x1, xScale) && validateCoordinateInRange(x2, xScale) && validateCoordinateInRange(y1, yScale) && validateCoordinateInRange(y2, yScale)) {
        return {
          x: Math.min(x1, x2),
          y: Math.min(y1, y2),
          width: Math.abs(x2 - x1),
          height: Math.abs(y2 - y1)
        };
      }

      return null;
    }
  }, {
    key: 'renderRect',
    value: function renderRect(option, props) {
      var rect = void 0;

      if (React.isValidElement(option)) {
        rect = React.cloneElement(option, props);
      } else if (_isFunction(option)) {
        rect = option(props);
      } else {
        rect = React.createElement(Rectangle, _extends({}, props, {
          className: 'recharts-reference-area-rect'
        }));
      }

      return rect;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          x1 = _props2.x1,
          x2 = _props2.x2,
          y1 = _props2.y1,
          y2 = _props2.y2,
          className = _props2.className;

      var hasX = isNumOrStr(x1) && isNumOrStr(x2);
      var hasY = isNumOrStr(y1) && isNumOrStr(y2);

      if (!hasX && !hasY) {
        return null;
      }

      var rect = this.getRect(hasX, hasY);

      if (!rect) {
        return null;
      }

      var shape = this.props.shape;


      return React.createElement(
        Layer,
        { className: classNames('recharts-reference-area', className) },
        this.renderRect(shape, _extends({}, this.props, rect)),
        Label.renderCallByParent(this.props, rect)
      );
    }
  }]);

  return ReferenceArea;
}(Component), _class2.displayName = 'ReferenceArea', _class2.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, {
  viewBox: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
  }),

  xAxis: PropTypes.object,
  yAxis: PropTypes.object,

  isFront: PropTypes.bool,
  alwaysShow: PropTypes.bool,
  x1: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  x2: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y1: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y2: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

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
  fill: '#ccc',
  fillOpacity: 0.5,
  stroke: 'none',
  strokeWidth: 1
}, _temp)) || _class;

export default ReferenceArea;