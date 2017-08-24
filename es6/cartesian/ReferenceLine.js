import _isFunction from 'lodash/isFunction';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes, filterEventAttributes } from '../util/ReactUtils';
import Label from '../component/Label';
import { isNumOrStr } from '../util/DataUtils';
import { validateCoordinateInRange } from '../util/ChartUtils';

var renderLine = function renderLine(option, props) {
  var line = void 0;

  if (React.isValidElement(option)) {
    line = React.cloneElement(option, props);
  } else if (_isFunction(option)) {
    line = option(props);
  } else {
    line = React.createElement('line', _extends({}, props, {
      className: 'recharts-reference-line-line'
    }));
  }

  return line;
};

var ReferenceLine = pureRender(_class = (_temp = _class2 = function (_Component) {
  _inherits(ReferenceLine, _Component);

  function ReferenceLine() {
    _classCallCheck(this, ReferenceLine);

    return _possibleConstructorReturn(this, (ReferenceLine.__proto__ || Object.getPrototypeOf(ReferenceLine)).apply(this, arguments));
  }

  _createClass(ReferenceLine, [{
    key: 'getEndPoints',
    value: function getEndPoints(isX, isY) {
      var _props = this.props,
          xAxis = _props.xAxis,
          yAxis = _props.yAxis,
          viewBox = _props.viewBox;
      var x = viewBox.x,
          y = viewBox.y,
          width = viewBox.width,
          height = viewBox.height;


      if (isY) {
        var value = this.props.y;
        var scale = yAxis.scale;

        var offset = scale.bandwidth ? scale.bandwidth() / 2 : 0;
        var coord = scale(value) + offset;

        if (validateCoordinateInRange(coord, scale)) {
          return yAxis.orientation === 'left' ? [{ x: x, y: coord }, { x: x + width, y: coord }] : [{ x: x + width, y: coord }, { x: x, y: coord }];
        }
      } else if (isX) {
        var _value = this.props.x;
        var _scale = xAxis.scale;

        var _offset = _scale.bandwidth ? _scale.bandwidth() / 2 : 0;
        var _coord = _scale(_value) + _offset;

        if (validateCoordinateInRange(_coord, _scale)) {
          return xAxis.orientation === 'top' ? [{ x: _coord, y: y }, { x: _coord, y: y + height }] : [{ x: _coord, y: y + height }, { x: _coord, y: y }];
        }
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          x = _props2.x,
          y = _props2.y,
          shape = _props2.shape,
          className = _props2.className;

      var isX = isNumOrStr(x);
      var isY = isNumOrStr(y);

      if (!isX && !isY) {
        return null;
      }

      var endPoints = this.getEndPoints(isX, isY);

      if (!endPoints) {
        return null;
      }

      var _endPoints = _slicedToArray(endPoints, 2),
          start = _endPoints[0],
          end = _endPoints[1];

      var props = _extends({}, getPresentationAttributes(this.props), filterEventAttributes(this.props), {
        x1: start.x,
        y1: start.y,
        x2: end.x,
        y2: end.y
      });

      return React.createElement(
        Layer,
        { className: classNames('recharts-reference-line', className) },
        renderLine(shape, props),
        Label.renderCallByParent(this.props, {
          x: Math.min(props.x1, props.x2),
          y: Math.min(props.y1, props.y2),
          width: Math.abs(props.x2 - props.x1),
          height: Math.abs(props.y2 - props.y1)
        })
      );
    }
  }]);

  return ReferenceLine;
}(Component), _class2.displayName = 'ReferenceLine', _class2.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, {
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
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  className: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  shape: PropTypes.func
}), _class2.defaultProps = {
  isFront: false,
  alwaysShow: false,
  xAxisId: 0,
  yAxisId: 0,
  fill: 'none',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1
}, _temp)) || _class;

export default ReferenceLine;