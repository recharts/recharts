import _isPlainObject from 'lodash/isPlainObject';
import _isFunction from 'lodash/isFunction';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Render sectors of a pie
 */
import React, { Component, PropTypes } from 'react';
import Animate from 'react-smooth';
import classNames from 'classnames';

import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import Sector from '../shape/Sector';
import Curve from '../shape/Curve';
import Text from '../component/Text';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, getPresentationAttributes, filterEventsOfChild, isSsr } from '../util/ReactUtils';
import { polarToCartesian } from '../util/PolarUtils';
import AnimationDecorator from '../util/AnimationDecorator';
import { isNumber, getValueByDataKey, uniqueId } from '../util/DataUtils';

var Pie = AnimationDecorator(_class = pureRender(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Pie, _Component);

  function Pie() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Pie);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pie.__proto__ || Object.getPrototypeOf(Pie)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isAnimationFinished: false }, _this.id = uniqueId('recharts-pie-'), _this.handleAnimationEnd = function () {
      _this.setState({
        isAnimationFinished: true
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Pie, [{
    key: 'getDeltaAngle',
    value: function getDeltaAngle() {
      var _props = this.props,
          startAngle = _props.startAngle,
          endAngle = _props.endAngle;

      var sign = Math.sign(endAngle - startAngle);
      var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);

      return sign * deltaAngle;
    }
  }, {
    key: 'getSectors',
    value: function getSectors(data) {
      var _props2 = this.props,
          cx = _props2.cx,
          cy = _props2.cy,
          innerRadius = _props2.innerRadius,
          outerRadius = _props2.outerRadius,
          cornerRadius = _props2.cornerRadius,
          startAngle = _props2.startAngle,
          paddingAngle = _props2.paddingAngle,
          minAngle = _props2.minAngle,
          nameKey = _props2.nameKey,
          valueKey = _props2.valueKey;

      var len = data.length;
      var deltaAngle = this.getDeltaAngle();
      var absDeltaAngle = Math.abs(deltaAngle);
      var totalPadingAngle = (absDeltaAngle >= 360 ? len : len - 1) * paddingAngle;
      var sum = data.reduce(function (result, entry) {
        return result + getValueByDataKey(entry, valueKey, 0);
      }, 0);

      var sectors = [];
      var prev = void 0;

      if (sum > 0) {
        sectors = data.map(function (entry, i) {
          var percent = getValueByDataKey(entry, valueKey, 0) / sum;

          var tempStartAngle = void 0;

          if (i) {
            tempStartAngle = (deltaAngle < 0 ? prev.endAngle : prev.startAngle) + Math.sign(deltaAngle) * paddingAngle;
          } else {
            tempStartAngle = startAngle;
          }

          var tempEndAngle = tempStartAngle + Math.sign(deltaAngle) * (minAngle + percent * (absDeltaAngle - len * minAngle - totalPadingAngle));

          prev = _extends({
            percent: percent,
            cornerRadius: cornerRadius
          }, entry, {
            cx: cx,
            cy: cy,
            innerRadius: innerRadius,
            outerRadius: outerRadius,
            name: getValueByDataKey(entry, nameKey),
            value: getValueByDataKey(entry, valueKey),
            startAngle: deltaAngle < 0 ? tempStartAngle : tempEndAngle,
            endAngle: deltaAngle < 0 ? tempEndAngle : tempStartAngle,
            midAngle: (tempStartAngle + tempEndAngle) / 2
          });

          return prev;
        });
      }

      return sectors;
    }
  }, {
    key: 'getTextAnchor',
    value: function getTextAnchor(x, cx) {
      if (x > cx) {
        return 'start';
      } else if (x < cx) {
        return 'end';
      }

      return 'middle';
    }
  }, {
    key: 'isActiveIndex',
    value: function isActiveIndex(i) {
      var activeIndex = this.props.activeIndex;


      if (Array.isArray(activeIndex)) {
        return activeIndex.indexOf(i) !== -1;
      }

      return i === activeIndex;
    }
  }, {
    key: 'renderClipPath',
    value: function renderClipPath() {
      var _props3 = this.props,
          cx = _props3.cx,
          cy = _props3.cy,
          maxRadius = _props3.maxRadius,
          startAngle = _props3.startAngle,
          isAnimationActive = _props3.isAnimationActive,
          animationDuration = _props3.animationDuration,
          animationEasing = _props3.animationEasing,
          animationBegin = _props3.animationBegin,
          animationId = _props3.animationId;


      return React.createElement(
        'defs',
        null,
        React.createElement(
          'clipPath',
          { id: this.id },
          React.createElement(
            Animate,
            {
              easing: animationEasing,
              isActive: isAnimationActive,
              duration: animationDuration,
              key: animationId,
              animationBegin: animationBegin,
              onAnimationEnd: this.handleAnimationEnd,
              from: {
                endAngle: startAngle
              },
              to: {
                outerRadius: Math.max(this.props.outerRadius, maxRadius || 0),
                innerRadius: 0,
                endAngle: this.props.endAngle
              }
            },
            function (_ref2) {
              var outerRadius = _ref2.outerRadius,
                  innerRadius = _ref2.innerRadius,
                  endAngle = _ref2.endAngle;
              return React.createElement(Sector, {
                cx: cx,
                cy: cy,
                outerRadius: outerRadius,
                innerRadius: innerRadius,
                startAngle: startAngle,
                endAngle: endAngle
              });
            }
          )
        )
      );
    }
  }, {
    key: 'renderLabelLineItem',
    value: function renderLabelLineItem(option, props) {
      if (React.isValidElement(option)) {
        return React.cloneElement(option, props);
      } else if (_isFunction(option)) {
        return option(props);
      }

      return React.createElement(Curve, _extends({}, props, { type: 'linear', className: 'recharts-pie-label-line' }));
    }
  }, {
    key: 'renderLabelItem',
    value: function renderLabelItem(option, props, value) {
      if (React.isValidElement(option)) {
        return React.cloneElement(option, props);
      }
      var label = value;
      if (_isFunction(option)) {
        label = option(props);
        if (React.isValidElement(label)) {
          return label;
        }
      }

      return React.createElement(
        Text,
        _extends({}, props, {
          alignmentBaseline: 'middle',
          className: 'recharts-pie-label-text'
        }),
        label
      );
    }
  }, {
    key: 'renderLabels',
    value: function renderLabels(sectors) {
      var _this2 = this;

      var isAnimationActive = this.props.isAnimationActive;


      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }
      var _props4 = this.props,
          label = _props4.label,
          labelLine = _props4.labelLine,
          valueKey = _props4.valueKey;

      var pieProps = getPresentationAttributes(this.props);
      var customLabelProps = getPresentationAttributes(label);
      var customLabelLineProps = getPresentationAttributes(labelLine);
      var offsetRadius = label && label.offsetRadius || 20;

      var labels = sectors.map(function (entry, i) {
        var midAngle = (entry.startAngle + entry.endAngle) / 2;
        var endPoint = polarToCartesian(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);
        var labelProps = _extends({}, pieProps, entry, {
          stroke: 'none'
        }, customLabelProps, {
          index: i,
          textAnchor: _this2.getTextAnchor(endPoint.x, entry.cx)
        }, endPoint);
        var lineProps = _extends({}, pieProps, entry, {
          fill: 'none',
          stroke: entry.fill
        }, customLabelLineProps, {
          points: [polarToCartesian(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint]
        });

        return React.createElement(
          Layer,
          { key: 'label-' + i },
          labelLine && _this2.renderLabelLineItem(labelLine, lineProps),
          _this2.renderLabelItem(label, labelProps, getValueByDataKey(entry, valueKey))
        );
      });

      return React.createElement(
        Layer,
        { className: 'recharts-pie-labels' },
        labels
      );
    }
  }, {
    key: 'renderSectorItem',
    value: function renderSectorItem(option, props) {
      if (React.isValidElement(option)) {
        return React.cloneElement(option, props);
      } else if (_isFunction(option)) {
        return option(props);
      } else if (_isPlainObject(option)) {
        return React.createElement(Sector, _extends({}, props, option));
      }

      return React.createElement(Sector, props);
    }
  }, {
    key: 'renderSectors',
    value: function renderSectors(sectors) {
      var _this3 = this;

      var activeShape = this.props.activeShape;


      return sectors.map(function (entry, i) {
        return React.createElement(
          Layer,
          _extends({
            className: 'recharts-pie-sector'
          }, filterEventsOfChild(_this3.props, entry, i), {
            key: 'sector-' + i
          }),
          _this3.renderSectorItem(_this3.isActiveIndex(i) ? activeShape : null, entry)
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          data = _props5.data,
          composedData = _props5.composedData,
          className = _props5.className,
          label = _props5.label,
          cx = _props5.cx,
          cy = _props5.cy,
          innerRadius = _props5.innerRadius,
          outerRadius = _props5.outerRadius;

      var pieData = composedData || data;

      if (!pieData || !pieData.length || !isNumber(cx) || !isNumber(cy) || !isNumber(innerRadius) || !isNumber(outerRadius)) {
        return null;
      }

      var sectors = this.getSectors(pieData);
      var layerClass = classNames('recharts-pie', className);

      return React.createElement(
        Layer,
        { className: layerClass },
        this.renderClipPath(),
        React.createElement(
          'g',
          { clipPath: 'url(#' + this.id + ')' },
          this.renderSectors(sectors)
        ),
        label && this.renderLabels(sectors)
      );
    }
  }]);

  return Pie;
}(Component), _class2.displayName = 'Pie', _class2.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, {
  className: PropTypes.string,
  animationId: PropTypes.number,
  cx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cy: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  startAngle: PropTypes.number,
  endAngle: PropTypes.number,
  paddingAngle: PropTypes.number,
  innerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  outerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cornerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  nameKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  valueKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  data: PropTypes.arrayOf(PropTypes.object),
  composedData: PropTypes.arrayOf(PropTypes.object),
  minAngle: PropTypes.number,
  legendType: PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),
  maxRadius: PropTypes.number,

  labelLine: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.element, PropTypes.bool]),
  label: PropTypes.oneOfType([PropTypes.shape({
    offsetRadius: PropTypes.number
  }), PropTypes.func, PropTypes.element, PropTypes.bool]),
  activeShape: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.element]),
  activeIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

  isAnimationActive: PropTypes.bool,
  animationBegin: PropTypes.number,
  animationDuration: PropTypes.number,
  animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'spring', 'linear'])
}), _class2.defaultProps = {
  stroke: '#fff',
  fill: '#808080',
  legendType: 'rect',
  // The abscissa of pole
  cx: '50%',
  // The ordinate of pole
  cy: '50%',
  // The start angle of first sector
  startAngle: 0,
  // The direction of drawing sectors
  endAngle: 360,
  // The inner radius of sectors
  innerRadius: 0,
  // The outer radius of sectors
  outerRadius: '80%',
  paddingAngle: 0,
  nameKey: 'name',
  valueKey: 'value',
  labelLine: true,
  data: [],
  minAngle: 0,
  isAnimationActive: !isSsr(),
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: 'ease'
}, _temp2)) || _class) || _class;

export default Pie;