import _isArray from 'lodash/isArray'; /**
                                        * @fileOverview Default Tooltip Content
                                        */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pureRender from '../util/PureRender';
import { isNumOrStr } from '../util/DataUtils';

var defaultFormatter = function defaultFormatter(value) {
  return _isArray(value) && isNumOrStr(value[0]) && isNumOrStr(value[1]) ? value.join(' ~ ') : value;
};

var DefaultTooltipContent = pureRender(_class = (_temp = _class2 = function (_Component) {
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
          var hasName = isNumOrStr(entry.name);
          var finalFormatter = entry.formatter || formatter || defaultFormatter;

          return React.createElement(
            'li',
            { className: 'recharts-tooltip-item', key: 'tooltip-item-' + i, style: finalItemStyle },
            hasName ? React.createElement(
              'span',
              { className: 'recharts-tooltip-item-name' },
              entry.name
            ) : null,
            hasName ? React.createElement(
              'span',
              { className: 'recharts-tooltip-item-separator' },
              separator
            ) : null,
            React.createElement(
              'span',
              { className: 'recharts-tooltip-item-value' },
              finalFormatter ? finalFormatter(entry.value, entry.name, entry, i) : entry.value
            ),
            React.createElement(
              'span',
              { className: 'recharts-tooltip-item-unit' },
              entry.unit || ''
            )
          );
        });

        return React.createElement(
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
      var hasLabel = isNumOrStr(label);
      var finalLabel = hasLabel ? label : '';

      if (hasLabel && labelFormatter) {
        finalLabel = labelFormatter(label);
      }

      return React.createElement(
        'div',
        { className: 'recharts-default-tooltip', style: finalStyle },
        React.createElement(
          'p',
          { className: 'recharts-tooltip-label', style: finalLabelStyle },
          finalLabel
        ),
        this.renderContent()
      );
    }
  }]);

  return DefaultTooltipContent;
}(Component), _class2.displayName = 'DefaultTooltipContent', _class2.propTypes = {
  separator: PropTypes.string,
  formatter: PropTypes.func,
  wrapperStyle: PropTypes.object,
  itemStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  labelFormatter: PropTypes.func,
  label: PropTypes.any,
  payload: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.any,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
    unit: PropTypes.any
  })),
  itemSorter: PropTypes.func
}, _class2.defaultProps = {
  separator: ' : ',
  itemStyle: {},
  labelStyle: {}
}, _temp)) || _class;

export default DefaultTooltipContent;