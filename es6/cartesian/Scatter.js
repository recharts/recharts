import _isFunction from 'lodash/isFunction';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Render a group of scatters
 */
import React, { Component, PropTypes } from 'react';
import Animate from 'react-smooth';
import classNames from 'classnames';

import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, getPresentationAttributes, filterEventsOfChild, isSsr, findAllByType } from '../util/ReactUtils';
import Curve from '../shape/Curve';
import Symbols from '../shape/Symbols';
import ErrorBar from './ErrorBar';
import { getValueByDataKey, uniqueId } from '../util/DataUtils';
import AnimationDecorator from '../util/AnimationDecorator';

var Scatter = AnimationDecorator(_class = pureRender(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Scatter, _Component);

  function Scatter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Scatter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Scatter.__proto__ || Object.getPrototypeOf(Scatter)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeIndex: -1, isAnimationFinished: false }, _this.id = uniqueId('recharts-scatter-'), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Scatter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var animationDuration = this.props.animationDuration;

      window.setTimeout(function () {
        return _this2.setState({ isAnimationFinished: true });
      }, animationDuration);
    }
  }, {
    key: 'renderSymbolItem',
    value: function renderSymbolItem(option, props) {
      var symbol = void 0;

      if (React.isValidElement(option)) {
        symbol = React.cloneElement(option, props);
      } else if (_isFunction(option)) {
        symbol = option(props);
      } else {
        symbol = React.createElement(Symbols, _extends({}, props, { type: option }));
      }

      return symbol;
    }
  }, {
    key: 'renderSymbols',
    value: function renderSymbols() {
      var _this3 = this;

      var _props = this.props,
          points = _props.points,
          shape = _props.shape,
          activeShape = _props.activeShape,
          activeIndex = _props.activeIndex,
          animationBegin = _props.animationBegin,
          animationDuration = _props.animationDuration,
          isAnimationActive = _props.isAnimationActive,
          animationEasing = _props.animationEasing,
          animationId = _props.animationId;

      var baseProps = getPresentationAttributes(this.props);

      return points.map(function (entry, i) {
        var props = _extends({
          key: 'symbol-' + i
        }, baseProps, entry);
        return React.createElement(
          Layer,
          _extends({
            className: 'recharts-scatter-symbol'
          }, filterEventsOfChild(_this3.props, entry, i), {
            key: 'symbol-' + i
          }),
          React.createElement(
            Animate,
            {
              from: { size: 0 },
              to: { size: props.size },
              duration: animationDuration,
              begin: animationBegin,
              isActive: isAnimationActive,
              key: animationId,
              easing: animationEasing
            },
            function (_ref2) {
              var size = _ref2.size;

              var finalProps = _extends({}, props, { size: size });

              return _this3.renderSymbolItem(activeIndex === i ? activeShape : shape, finalProps);
            }
          )
        );
      });
    }
  }, {
    key: 'renderErrorBar',
    value: function renderErrorBar() {
      if (!this.state.isAnimationFinished) {
        return null;
      }

      var _props2 = this.props,
          points = _props2.points,
          xAxis = _props2.xAxis,
          yAxis = _props2.yAxis,
          children = _props2.children;

      var errorBarItems = findAllByType(children, ErrorBar);

      if (!errorBarItems) {
        return null;
      }

      function dataPointFormatterY(dataPoint, dataKey) {
        return {
          x: dataPoint.cx,
          y: dataPoint.cy,
          value: dataPoint.y,
          errorVal: getValueByDataKey(dataPoint, dataKey)
        };
      }

      function dataPointFormatterX(dataPoint, dataKey) {
        return {
          x: dataPoint.cx,
          y: dataPoint.cy,
          value: dataPoint.x,
          errorVal: getValueByDataKey(dataPoint, dataKey)
        };
      }

      return errorBarItems.map(function (item, i) {
        var direction = item.props.direction;


        return React.cloneElement(item, {
          key: i,
          data: points,
          xAxis: xAxis,
          yAxis: yAxis,
          layout: direction === 'x' ? 'vertical' : 'horizontal',
          dataPointFormatter: direction === 'x' ? dataPointFormatterX : dataPointFormatterY
        });
      });
    }
  }, {
    key: 'renderLine',
    value: function renderLine() {
      var _props3 = this.props,
          points = _props3.points,
          line = _props3.line,
          lineType = _props3.lineType,
          lineJointType = _props3.lineJointType;

      var scatterProps = getPresentationAttributes(this.props);
      var customLineProps = getPresentationAttributes(line);
      var linePoints = void 0,
          lineItem = void 0;

      if (lineType === 'joint') {
        linePoints = points.map(function (entry) {
          return { x: entry.cx, y: entry.cy };
        });
      }
      var lineProps = _extends({}, scatterProps, {
        fill: 'none',
        stroke: scatterProps && scatterProps.fill
      }, customLineProps, {
        points: linePoints
      });

      if (React.isValidElement(line)) {
        lineItem = React.cloneElement(line, lineProps);
      } else if (_isFunction(line)) {
        lineItem = line(lineProps);
      } else {
        lineItem = React.createElement(Curve, _extends({}, lineProps, { type: lineJointType }));
      }

      return React.createElement(
        Layer,
        { className: 'recharts-scatter-line', key: 'recharts-scatter-line' },
        lineItem
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          points = _props4.points,
          line = _props4.line,
          className = _props4.className,
          xAxis = _props4.xAxis,
          yAxis = _props4.yAxis,
          left = _props4.left,
          top = _props4.top,
          width = _props4.width,
          height = _props4.height;


      if (!points || !points.length) {
        return null;
      }

      var layerClass = classNames('recharts-scatter', className);
      var needClip = xAxis && xAxis.allowDataOverflow || yAxis && yAxis.allowDataOverflow;

      return React.createElement(
        Layer,
        {
          className: layerClass,
          clipPath: needClip ? 'url(#clipPath-' + this.id + ')' : null
        },
        needClip ? React.createElement(
          'defs',
          null,
          React.createElement(
            'clipPath',
            { id: 'clipPath-' + this.id },
            React.createElement('rect', { x: left, y: top, width: width, height: height })
          )
        ) : null,
        line && this.renderLine(),
        this.renderErrorBar(),
        React.createElement(
          Layer,
          { key: 'recharts-scatter-symbols' },
          this.renderSymbols()
        )
      );
    }
  }]);

  return Scatter;
}(Component), _class2.displayName = 'Scatter', _class2.propTypes = _extends({}, EVENT_ATTRIBUTES, PRESENTATION_ATTRIBUTES, {

  xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  zAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  line: PropTypes.oneOfType([PropTypes.bool, PropTypes.object, PropTypes.func, PropTypes.element]),
  lineType: PropTypes.oneOf(['fitting', 'joint']),
  lineJointType: PropTypes.oneOfType([PropTypes.oneOf(['basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural', 'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter']), PropTypes.func]),
  legendType: PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'star', 'triangle', 'wye']),
  className: PropTypes.string,

  activeIndex: PropTypes.number,
  activeShape: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.element]),
  shape: PropTypes.oneOfType([PropTypes.oneOf(['circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']), PropTypes.element, PropTypes.func]),
  points: PropTypes.arrayOf(PropTypes.shape({
    cx: PropTypes.number,
    cy: PropTypes.number,
    size: PropTypes.number,
    node: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      z: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }),
    payload: PropTypes.any
  })),

  isAnimationActive: PropTypes.bool,
  animationId: PropTypes.number,
  animationBegin: PropTypes.number,
  animationDuration: PropTypes.number,
  animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
}), _class2.defaultProps = {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: 'circle',
  lineType: 'joint',
  lineJointType: 'linear',
  data: [],
  shape: 'circle',

  isAnimationActive: !isSsr(),
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: 'linear'
}, _temp2)) || _class) || _class;

export default Scatter;