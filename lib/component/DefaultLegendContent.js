'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; /**
                             * @fileOverview Default Legend Content
                             */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _Surface = require('../container/Surface');

var _Surface2 = _interopRequireDefault(_Surface);

var _Symbols = require('../shape/Symbols');

var _Symbols2 = _interopRequireDefault(_Symbols);

var _ReactUtils = require('../util/ReactUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SIZE = 32;

var DefaultLegendContent = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
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
      var color = data.color;

      var halfSize = SIZE / 2;
      var sixthSize = SIZE / 6;
      var thirdSize = SIZE / 3;

      if (data.type === 'line') {
        return _react2.default.createElement('path', {
          strokeWidth: 4,
          fill: 'none',
          stroke: color,
          d: 'M0,' + halfSize + 'h' + thirdSize + '\n            A' + sixthSize + ',' + sixthSize + ',0,1,1,' + 2 * thirdSize + ',' + halfSize + '\n            H' + SIZE + 'M' + 2 * thirdSize + ',' + halfSize + '\n            A' + sixthSize + ',' + sixthSize + ',0,1,1,' + thirdSize + ',' + halfSize,
          className: 'recharts-legend-icon'
        });
      } else if (data.type === 'rect') {
        return _react2.default.createElement('path', {
          stroke: 'none',
          fill: color,
          d: 'M0,' + SIZE / 8 + 'h' + SIZE + 'v' + SIZE * 3 / 4 + 'h' + -SIZE + 'z',
          className: 'recharts-legend-icon'
        });
      }

      return _react2.default.createElement(_Symbols2.default, {
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
        var finalFormatter = entry.formatter || formatter;

        return _react2.default.createElement(
          'li',
          _extends({
            className: 'recharts-legend-item legend-item-' + i,
            style: itemStyle,
            key: 'legend-item-' + i
          }, (0, _ReactUtils.filterEventsOfChild)(_this2.props, entry, i)),
          _react2.default.createElement(
            _Surface2.default,
            { width: iconSize, height: iconSize, viewBox: viewBox, style: svgStyle },
            _this2.renderIcon(entry, iconSize)
          ),
          _react2.default.createElement(
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

      return _react2.default.createElement(
        'ul',
        { className: 'recharts-default-legend', style: finalStyle },
        this.renderItems()
      );
    }
  }]);

  return DefaultLegendContent;
}(_react.Component), _class2.displayName = 'Legend', _class2.propTypes = {
  content: _react.PropTypes.element,
  iconSize: _react.PropTypes.number,
  iconType: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'star', 'triangle', 'wye']),
  layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
  align: _react.PropTypes.oneOf(['center', 'left', 'right']),
  verticalAlign: _react.PropTypes.oneOf(['top', 'bottom', 'middle']),
  payload: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    value: _react.PropTypes.any,
    id: _react.PropTypes.any,
    type: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye'])
  })),
  formatter: _react.PropTypes.func,
  onMouseEnter: _react.PropTypes.func,
  onMouseLeave: _react.PropTypes.func,
  onClick: _react.PropTypes.func
}, _class2.defaultProps = {
  iconSize: 14,
  layout: 'horizontal',
  align: 'center',
  verticalAlign: 'middle'
}, _temp)) || _class;

exports.default = DefaultLegendContent;