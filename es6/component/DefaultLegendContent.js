var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Default Legend Content
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import pureRender from '../util/PureRender';
import Surface from '../container/Surface';
import Symbols from '../shape/Symbols';
import { filterEventsOfChild, LEGEND_TYPES } from '../util/ReactUtils';

var SIZE = 32;
var ICON_TYPES = LEGEND_TYPES.filter(function (type) {
  return type !== 'none';
});

var DefaultLegendContent = pureRender(_class = (_temp = _class2 = function (_Component) {
  _inherits(DefaultLegendContent, _Component);

  function DefaultLegendContent() {
    _classCallCheck(this, DefaultLegendContent);

    return _possibleConstructorReturn(this, (DefaultLegendContent.__proto__ || Object.getPrototypeOf(DefaultLegendContent)).apply(this, arguments));
  }

  _createClass(DefaultLegendContent, [{
    key: 'renderIcon',


    /**
     * Render the path of icon
     * @param {Object} data Data of each legend item
     * @return {String} Path element
     */
    value: function renderIcon(data) {
      var inactiveColor = this.props.inactiveColor;

      var halfSize = SIZE / 2;
      var sixthSize = SIZE / 6;
      var thirdSize = SIZE / 3;
      var color = data.inactive ? inactiveColor : data.color;

      if (data.type === 'line') {
        return React.createElement('path', {
          strokeWidth: 4,
          fill: 'none',
          stroke: color,
          d: 'M0,' + halfSize + 'h' + thirdSize + '\n            A' + sixthSize + ',' + sixthSize + ',0,1,1,' + 2 * thirdSize + ',' + halfSize + '\n            H' + SIZE + 'M' + 2 * thirdSize + ',' + halfSize + '\n            A' + sixthSize + ',' + sixthSize + ',0,1,1,' + thirdSize + ',' + halfSize,
          className: 'recharts-legend-icon'
        });
      } else if (data.type === 'rect') {
        return React.createElement('path', {
          stroke: 'none',
          fill: color,
          d: 'M0,' + SIZE / 8 + 'h' + SIZE + 'v' + SIZE * 3 / 4 + 'h' + -SIZE + 'z',
          className: 'recharts-legend-icon'
        });
      }

      return React.createElement(Symbols, {
        fill: color,
        cx: halfSize,
        cy: halfSize,
        size: SIZE,
        sizeType: 'diameter',
        type: data.type
      });
    }

    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */

  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _this2 = this;

      var _props = this.props,
          payload = _props.payload,
          iconSize = _props.iconSize,
          layout = _props.layout,
          formatter = _props.formatter;

      var viewBox = { x: 0, y: 0, width: SIZE, height: SIZE };
      var itemStyle = {
        display: layout === 'horizontal' ? 'inline-block' : 'block',
        marginRight: 10
      };
      var svgStyle = { display: 'inline-block', verticalAlign: 'middle', marginRight: 4 };

      return payload.map(function (entry, i) {
        var _classNames;

        var finalFormatter = entry.formatter || formatter;
        var className = classNames((_classNames = {
          'recharts-legend-item': true
        }, _defineProperty(_classNames, 'legend-item-' + i, true), _defineProperty(_classNames, 'inactive', entry.inactive), _classNames));

        if (entry.type === 'none') {
          return null;
        }

        return React.createElement(
          'li',
          _extends({
            className: className,
            style: itemStyle,
            key: 'legend-item-' + i
          }, filterEventsOfChild(_this2.props, entry, i)),
          React.createElement(
            Surface,
            { width: iconSize, height: iconSize, viewBox: viewBox, style: svgStyle },
            _this2.renderIcon(entry)
          ),
          React.createElement(
            'span',
            { className: 'recharts-legend-item-text' },
            finalFormatter ? finalFormatter(entry.value, entry, i) : entry.value
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          payload = _props2.payload,
          layout = _props2.layout,
          align = _props2.align;


      if (!payload || !payload.length) {
        return null;
      }

      var finalStyle = {
        padding: 0,
        margin: 0,
        textAlign: layout === 'horizontal' ? align : 'left'
      };

      return React.createElement(
        'ul',
        { className: 'recharts-default-legend', style: finalStyle },
        this.renderItems()
      );
    }
  }]);

  return DefaultLegendContent;
}(Component), _class2.displayName = 'Legend', _class2.propTypes = {
  content: PropTypes.element,
  iconSize: PropTypes.number,
  iconType: PropTypes.oneOf(ICON_TYPES),
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  align: PropTypes.oneOf(['center', 'left', 'right']),
  verticalAlign: PropTypes.oneOf(['top', 'bottom', 'middle']),
  payload: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any,
    id: PropTypes.any,
    type: PropTypes.oneOf(LEGEND_TYPES)
  })),
  inactiveColor: PropTypes.string,
  formatter: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func
}, _class2.defaultProps = {
  iconSize: 14,
  layout: 'horizontal',
  align: 'center',
  verticalAlign: 'middle',
  inactiveColor: '#ccc'
}, _temp)) || _class;

export default DefaultLegendContent;