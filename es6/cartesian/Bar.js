import _isArray from 'lodash/isArray';
import _isNil from 'lodash/isNil';
import _isFunction from 'lodash/isFunction';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Render a group of bar
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Animate, { translateStyle } from 'react-smooth';

import Rectangle from '../shape/Rectangle';
import Layer from '../container/Layer';
import Text from '../component/Text';
import ErrorBar from './ErrorBar';
import pureRender from '../util/PureRender';
import { getValueByDataKey, uniqueId } from '../util/DataUtils';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, getPresentationAttributes, filterEventsOfChild, isSsr, findChildByType } from '../util/ReactUtils';

var Bar = pureRender(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Bar, _Component);

  function Bar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Bar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bar.__proto__ || Object.getPrototypeOf(Bar)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isAnimationFinished: false }, _this.id = uniqueId('recharts-bar-'), _this.handleAnimationEnd = function () {
      _this.setState({ isAnimationFinished: true });
      _this.props.onAnimationEnd();
    }, _this.handleAnimationStart = function () {
      _this.setState({ isAnimationFinished: false });
      _this.props.onAnimationStart();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Bar, [{
    key: 'renderRectangle',
    value: function renderRectangle(option, props) {
      var rectangle = void 0;

      if (React.isValidElement(option)) {
        rectangle = React.cloneElement(option, props);
      } else if (_isFunction(option)) {
        rectangle = option(props);
      } else {
        rectangle = React.createElement(Rectangle, props);
      }

      return rectangle;
    }
  }, {
    key: 'renderRectangles',
    value: function renderRectangles() {
      var _this2 = this;

      var _props = this.props,
          data = _props.data,
          shape = _props.shape,
          layout = _props.layout,
          isAnimationActive = _props.isAnimationActive,
          animationBegin = _props.animationBegin,
          animationDuration = _props.animationDuration,
          animationEasing = _props.animationEasing,
          animationId = _props.animationId;

      var baseProps = getPresentationAttributes(this.props);
      var getStyle = function getStyle(isBegin) {
        return {
          transform: 'scale' + (layout === 'vertical' ? 'X' : 'Y') + '(' + (isBegin ? 0 : 1) + ')'
        };
      };

      return data.map(function (entry, index) {
        var x = entry.x,
            y = entry.y,
            width = entry.width,
            height = entry.height;

        var props = _extends({}, baseProps, entry, { index: index });

        if (_isNil(entry.value) || !isAnimationActive) {
          return React.createElement(
            Layer,
            _extends({
              className: 'recharts-bar-rectangle'
            }, filterEventsOfChild(_this2.props, entry, index), {
              key: 'rectangle-' + index
            }),
            _this2.renderRectangle(shape, props)
          );
        }

        var transformOrigin = '';

        if (layout === 'vertical') {
          transformOrigin = x + 'px ' + (y + height / 2) + 'px';
        } else {
          transformOrigin = x + width / 2 + 'px ' + (y + height) + 'px';
        }

        return React.createElement(
          Animate,
          {
            begin: animationBegin,
            duration: animationDuration,
            isActive: isAnimationActive,
            easing: animationEasing,
            from: getStyle(true),
            to: getStyle(false),
            key: 'rectangle-' + index + '-' + animationId,
            onAnimationEnd: _this2.handleAnimationEnd,
            onAnimationStart: _this2.handleAnimationStart
          },
          React.createElement(
            Layer,
            _extends({
              className: 'recharts-bar-rectangle',
              style: translateStyle({ transformOrigin: transformOrigin })
            }, filterEventsOfChild(_this2.props, entry, index), {
              key: 'rectangle-' + index
            }),
            _this2.renderRectangle(shape, props)
          )
        );
      });
    }
  }, {
    key: 'renderLabelItem',
    value: function renderLabelItem(option, props, value) {
      var labelItem = null;

      if (React.isValidElement(option)) {
        labelItem = React.cloneElement(option, props);
      } else if (_isFunction(option)) {
        labelItem = option(props);
      } else {
        labelItem = React.createElement(
          Text,
          _extends({}, props, {
            key: props.key,
            className: 'recharts-bar-label'
          }),
          _isArray(value) ? value[1] : value
        );
      }

      return labelItem;
    }
  }, {
    key: 'renderLabels',
    value: function renderLabels() {
      var _this3 = this;

      var isAnimationActive = this.props.isAnimationActive;


      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }

      var _props2 = this.props,
          data = _props2.data,
          label = _props2.label,
          layout = _props2.layout;

      var barProps = getPresentationAttributes(this.props);
      var customLabelProps = getPresentationAttributes(label);
      var textAnchor = layout === 'vertical' ? 'start' : 'middle';
      var labels = data.map(function (entry, i) {
        var x = 0;
        var y = 0;

        if (layout === 'vertical') {
          x = 5 + entry.x + entry.width;
          y = 5 + entry.y + entry.height / 2;
        } else {
          x = entry.x + entry.width / 2;
          y = entry.y - 5;
        }

        var labelProps = _extends({
          textAnchor: textAnchor
        }, barProps, entry, customLabelProps, {
          x: x,
          y: y,
          index: i,
          key: 'label-' + i,
          payload: entry.payload
        });

        var labelValue = entry.value;
        if (label === true && entry.value && labelProps.label) {
          labelValue = labelProps.label;
        }
        return _this3.renderLabelItem(label, labelProps, labelValue);
      });

      return React.createElement(
        Layer,
        { className: 'recharts-bar-labels' },
        labels
      );
    }
  }, {
    key: 'renderErrorBar',
    value: function renderErrorBar() {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }

      var _props3 = this.props,
          data = _props3.data,
          xAxis = _props3.xAxis,
          yAxis = _props3.yAxis,
          layout = _props3.layout,
          children = _props3.children;

      var errorBarItem = findChildByType(children, ErrorBar);

      if (!errorBarItem) {
        return null;
      }

      var offset = layout === 'vertical' ? data[0].height / 2 : data[0].width / 2;

      function dataPointFormatter(dataPoint, dataKey) {
        return {
          x: dataPoint.x,
          y: dataPoint.y,
          value: dataPoint.value,
          errorVal: getValueByDataKey(dataPoint, dataKey)
        };
      }

      return React.cloneElement(errorBarItem, {
        data: data,
        xAxis: xAxis,
        yAxis: yAxis,
        layout: layout,
        offset: offset,
        dataPointFormatter: dataPointFormatter
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          data = _props4.data,
          className = _props4.className,
          label = _props4.label,
          xAxis = _props4.xAxis,
          yAxis = _props4.yAxis,
          left = _props4.left,
          top = _props4.top,
          width = _props4.width,
          height = _props4.height;


      if (!data || !data.length) {
        return null;
      }

      var layerClass = classNames('recharts-bar', className);
      var needClip = xAxis && xAxis.allowDataOverflow || yAxis && yAxis.allowDataOverflow;

      return React.createElement(
        Layer,
        { className: layerClass },
        needClip ? React.createElement(
          'defs',
          null,
          React.createElement(
            'clipPath',
            { id: 'clipPath-' + this.id },
            React.createElement('rect', { x: left, y: top, width: width, height: height })
          )
        ) : null,
        React.createElement(
          Layer,
          {
            className: 'recharts-bar-rectangles',
            clipPath: needClip ? 'url(#clipPath-' + this.id + ')' : null
          },
          this.renderRectangles()
        ),
        label && React.createElement(
          Layer,
          { className: 'recharts-bar-rectangle-labels' },
          this.renderLabels()
        ),
        this.renderErrorBar()
      );
    }
  }]);

  return Bar;
}(Component), _class2.displayName = 'Bar', _class2.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, {
  className: PropTypes.string,
  layout: PropTypes.oneOf(['vertical', 'horizontal']),
  xAxisId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  yAxisId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  yAxis: PropTypes.object,
  xAxis: PropTypes.object,
  stackId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  barSize: PropTypes.number,
  unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]).isRequired,
  legendType: PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),
  minPointSize: PropTypes.number,
  maxBarSize: PropTypes.number,

  shape: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  label: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.object, PropTypes.element]),
  data: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    radius: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.array])
  })),
  onAnimationStart: PropTypes.func,
  onAnimationEnd: PropTypes.func,

  animationId: PropTypes.number,
  isAnimationActive: PropTypes.bool,
  animationBegin: PropTypes.number,
  animationDuration: PropTypes.number,
  animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
}), _class2.defaultProps = {
  xAxisId: 0,
  yAxisId: 0,
  legendType: 'rect',
  minPointSize: 0,
  // data of bar
  data: [],
  layout: 'vertical',
  isAnimationActive: !isSsr(),
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',

  onAnimationStart: function onAnimationStart() {},
  onAnimationEnd: function onAnimationEnd() {}
}, _temp2)) || _class;

export default Bar;