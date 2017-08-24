var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Render a group of error bar
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layer from '../container/Layer';
import { getPresentationAttributes } from '../util/ReactUtils';

var ErrorBar = (_temp = _class = function (_Component) {
  _inherits(ErrorBar, _Component);

  function ErrorBar() {
    _classCallCheck(this, ErrorBar);

    return _possibleConstructorReturn(this, (ErrorBar.__proto__ || Object.getPrototypeOf(ErrorBar)).apply(this, arguments));
  }

  _createClass(ErrorBar, [{
    key: 'renderErrorBars',
    value: function renderErrorBars() {
      var _props = this.props,
          offset = _props.offset,
          layout = _props.layout,
          width = _props.width,
          dataKey = _props.dataKey,
          data = _props.data,
          dataPointFormatter = _props.dataPointFormatter,
          xAxis = _props.xAxis,
          yAxis = _props.yAxis,
          others = _objectWithoutProperties(_props, ['offset', 'layout', 'width', 'dataKey', 'data', 'dataPointFormatter', 'xAxis', 'yAxis']);

      var props = getPresentationAttributes(others);

      return data.map(function (entry, i) {
        var _dataPointFormatter = dataPointFormatter(entry, dataKey),
            x = _dataPointFormatter.x,
            y = _dataPointFormatter.y,
            value = _dataPointFormatter.value,
            errorVal = _dataPointFormatter.errorVal;

        if (!errorVal) {
          return null;
        }

        var xMid = void 0,
            yMid = void 0,
            xMin = void 0,
            yMin = void 0,
            xMax = void 0,
            yMax = void 0,
            scale = void 0,
            coordsTop = void 0,
            coordsMid = void 0,
            coordsBot = void 0,
            lowBound = void 0,
            highBound = void 0;

        if (Array.isArray(errorVal)) {
          lowBound = errorVal[0];
          highBound = errorVal[1];
        } else {
          lowBound = errorVal;
          highBound = errorVal;
        }

        if (layout === 'vertical') {
          scale = xAxis.scale;
          xMid = value;
          yMid = y + offset;
          xMin = scale(xMid - lowBound);
          yMin = yMid + width;
          xMax = scale(xMid + highBound);
          yMax = yMid - width;
          coordsTop = { x1: xMax, y1: yMin, x2: xMax, y2: yMax };
          coordsMid = { x1: xMin, y1: yMid, x2: xMax, y2: yMid };
          coordsBot = { x1: xMin, y1: yMin, x2: xMin, y2: yMax };
        } else if (layout === 'horizontal') {
          scale = yAxis.scale;
          xMid = x + offset;
          yMid = value;
          xMin = xMid - width;
          xMax = xMid + width;
          yMin = scale(yMid - lowBound);
          yMax = scale(yMid + highBound);
          coordsTop = { x1: xMin, y1: yMax, x2: xMax, y2: yMax };
          coordsMid = { x1: xMid, y1: yMin, x2: xMid, y2: yMax };
          coordsBot = { x1: xMin, y1: yMin, x2: xMax, y2: yMin };
        }

        return React.createElement(
          Layer,
          _extends({ className: 'recharts-errorBar', key: i }, props),
          React.createElement('line', coordsTop),
          React.createElement('line', coordsMid),
          React.createElement('line', coordsBot)
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        Layer,
        { className: 'recharts-errorBars' },
        this.renderErrorBars()
      );
    }
  }]);

  return ErrorBar;
}(Component), _class.propTypes = {
  dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]).isRequired,
  data: PropTypes.array,
  xAxis: PropTypes.object,
  yAxis: PropTypes.object,
  layout: PropTypes.string,
  dataPointFormatter: PropTypes.func,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  width: PropTypes.number,
  offset: PropTypes.number
}, _class.defaultProps = {
  stroke: 'black',
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: 'horizontal'
}, _temp);


export default ErrorBar;