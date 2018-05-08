'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; /**
                             * @fileOverview Default Tooltip Content
                             */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _DataUtils = require('../util/DataUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultFormatter = function defaultFormatter(value) {
  return (0, _isArray3.default)(value) && (0, _DataUtils.isNumOrStr)(value[0]) && (0, _DataUtils.isNumOrStr)(value[1]) ? value.join(' ~ ') : value;
};

var DefaultTooltipContent = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(DefaultTooltipContent, _Component);

  function DefaultTooltipContent() {
    _classCallCheck(this, DefaultTooltipContent);

    return _possibleConstructorReturn(this, (DefaultTooltipContent.__proto__ || Object.getPrototypeOf(DefaultTooltipContent)).apply(this, arguments));
  }

  _createClass(DefaultTooltipContent, [{
    key: 'renderContent',
    value: function renderContent() {
      var _props = this.props,
          payload = _props.payload,
          separator = _props.separator,
          formatter = _props.formatter,
          itemStyle = _props.itemStyle,
          itemSorter = _props.itemSorter;


      if (payload && payload.length) {
        var listStyle = { padding: 0, margin: 0 };

        var items = payload.sort(itemSorter).map(function (entry, i) {
          var finalItemStyle = _extends({
            display: 'block',
            paddingTop: 4,
            paddingBottom: 4,
            color: entry.color || '#000'
          }, itemStyle);
          var hasName = (0, _DataUtils.isNumOrStr)(entry.name);
          var finalFormatter = entry.formatter || formatter || defaultFormatter;

          return _react2.default.createElement(
            'li',
            { className: 'recharts-tooltip-item', key: 'tooltip-item-' + i, style: finalItemStyle },
            hasName ? _react2.default.createElement(
              'span',
              { className: 'recharts-tooltip-item-name' },
              entry.name
            ) : null,
            hasName ? _react2.default.createElement(
              'span',
              { className: 'recharts-tooltip-item-separator' },
              separator
            ) : null,
            _react2.default.createElement(
              'span',
              { className: 'recharts-tooltip-item-value' },
              finalFormatter ? finalFormatter(entry.value, entry.name, entry, i) : entry.value
            ),
            _react2.default.createElement(
              'span',
              { className: 'recharts-tooltip-item-unit' },
              entry.unit || ''
            )
          );
        });

        return _react2.default.createElement(
          'ul',
          { className: 'recharts-tooltip-item-list', style: listStyle },
          items
        );
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          labelStyle = _props2.labelStyle,
          label = _props2.label,
          labelFormatter = _props2.labelFormatter,
          wrapperStyle = _props2.wrapperStyle;

      var finalStyle = _extends({
        margin: 0,
        padding: 10,
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        whiteSpace: 'nowrap'
      }, wrapperStyle);
      var finalLabelStyle = _extends({
        margin: 0
      }, labelStyle);
      var hasLabel = (0, _DataUtils.isNumOrStr)(label);
      var finalLabel = hasLabel ? label : '';

      if (hasLabel && labelFormatter) {
        finalLabel = labelFormatter(label);
      }

      return _react2.default.createElement(
        'div',
        { className: 'recharts-default-tooltip', style: finalStyle },
        _react2.default.createElement(
          'p',
          { className: 'recharts-tooltip-label', style: finalLabelStyle },
          finalLabel
        ),
        this.renderContent()
      );
    }
  }]);

  return DefaultTooltipContent;
}(_react.Component), _class2.displayName = 'DefaultTooltipContent', _class2.propTypes = {
  separator: _propTypes2.default.string,
  formatter: _propTypes2.default.func,
  wrapperStyle: _propTypes2.default.object,
  itemStyle: _propTypes2.default.object,
  labelStyle: _propTypes2.default.object,
  labelFormatter: _propTypes2.default.func,
  label: _propTypes2.default.any,
  payload: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.any,
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),
    unit: _propTypes2.default.any
  })),
  itemSorter: _propTypes2.default.func
}, _class2.defaultProps = {
  separator: ' : ',
  itemStyle: {},
  labelStyle: {}
}, _temp)) || _class;

exports.default = DefaultTooltipContent;