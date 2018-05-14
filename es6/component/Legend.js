import _isFunction from 'lodash/isFunction';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Legend
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import pureRender from '../util/PureRender';
import DefaultLegendContent from './DefaultLegendContent';
import { isNumber } from '../util/DataUtils';
import { LEGEND_TYPES } from '../util/ReactUtils';

var renderContent = function renderContent(content, props) {
  if (React.isValidElement(content)) {
    return React.cloneElement(content, props);
  } else if (_isFunction(content)) {
    return content(props);
  }

  return React.createElement(DefaultLegendContent, props);
};

var EPS = 1;
var ICON_TYPES = LEGEND_TYPES.filter(function (type) {
  return type !== 'none';
});

var Legend = pureRender(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Legend, _Component);

  function Legend() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Legend);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Legend.__proto__ || Object.getPrototypeOf(Legend)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      boxWidth: -1,
      boxHeight: -1
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Legend, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateBBox();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateBBox();
    }
  }, {
    key: 'getBBox',
    value: function getBBox() {
      var _state = this.state,
          boxWidth = _state.boxWidth,
          boxHeight = _state.boxHeight;


      if (boxWidth >= 0 && boxHeight >= 0) {
        return { width: boxWidth, height: boxHeight };
      }

      return null;
    }
  }, {
    key: 'getDefaultPosition',
    value: function getDefaultPosition(style) {
      var _props = this.props,
          layout = _props.layout,
          align = _props.align,
          verticalAlign = _props.verticalAlign,
          margin = _props.margin,
          chartWidth = _props.chartWidth,
          chartHeight = _props.chartHeight;

      var hPos = void 0,
          vPos = void 0;

      if (!style || (style.left === undefined || style.left === null) && (style.right === undefined || style.right === null)) {
        if (align === 'center' && layout === 'vertical') {
          var box = this.getBBox() || { width: 0 };
          hPos = { left: ((chartWidth || 0) - box.width) / 2 };
        } else {
          hPos = align === 'right' ? { right: margin && margin.right || 0 } : { left: margin && margin.left || 0 };
        }
      }

      if (!style || (style.top === undefined || style.top === null) && (style.bottom === undefined || style.bottom === null)) {
        if (verticalAlign === 'middle') {
          var _box = this.getBBox() || { height: 0 };
          vPos = { top: ((chartHeight || 0) - _box.height) / 2 };
        } else {
          vPos = verticalAlign === 'bottom' ? { bottom: margin && margin.bottom || 0 } : { top: margin && margin.top || 0 };
        }
      }

      return _extends({}, hPos, vPos);
    }
  }, {
    key: 'updateBBox',
    value: function updateBBox() {
      var _state2 = this.state,
          boxWidth = _state2.boxWidth,
          boxHeight = _state2.boxHeight;
      var onBBoxUpdate = this.props.onBBoxUpdate;


      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var box = this.wrapperNode.getBoundingClientRect();

        if (Math.abs(box.width - boxWidth) > EPS || Math.abs(box.height - boxHeight) > EPS) {
          this.setState({
            boxWidth: box.width,
            boxHeight: box.height
          }, function () {
            if (onBBoxUpdate) {
              onBBoxUpdate(box);
            }
          });
        }
      } else if (boxWidth !== -1 || boxHeight !== -1) {
        this.setState({
          boxWidth: -1,
          boxHeight: -1
        }, function () {
          if (onBBoxUpdate) {
            onBBoxUpdate(null);
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          content = _props2.content,
          width = _props2.width,
          height = _props2.height,
          wrapperStyle = _props2.wrapperStyle;

      var outerStyle = _extends({
        position: 'absolute',
        width: width || 'auto',
        height: height || 'auto'
      }, this.getDefaultPosition(wrapperStyle), wrapperStyle);

      return React.createElement(
        'div',
        {
          className: 'recharts-legend-wrapper',
          style: outerStyle,
          ref: function ref(node) {
            _this2.wrapperNode = node;
          }
        },
        renderContent(content, this.props)
      );
    }
  }], [{
    key: 'getWithHeight',
    value: function getWithHeight(item, chartWidth) {
      var layout = item.props.layout;


      if (layout === 'vertical' && isNumber(item.props.height)) {
        return {
          height: item.props.height
        };
      } else if (layout === 'horizontal') {
        return {
          width: item.props.width || chartWidth
        };
      }

      return null;
    }
  }]);

  return Legend;
}(Component), _class2.displayName = 'Legend', _class2.propTypes = {
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  wrapperStyle: PropTypes.object,
  chartWidth: PropTypes.number,
  chartHeight: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  iconSize: PropTypes.number,
  iconType: PropTypes.oneOf(ICON_TYPES),
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  align: PropTypes.oneOf(['center', 'left', 'right']),
  verticalAlign: PropTypes.oneOf(['top', 'bottom', 'middle']),
  margin: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
    bottom: PropTypes.number,
    right: PropTypes.number
  }),
  payload: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any,
    id: PropTypes.any,
    type: PropTypes.oneOf(LEGEND_TYPES)
  })),
  formatter: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
  onBBoxUpdate: PropTypes.func
}, _class2.defaultProps = {
  iconSize: 14,
  layout: 'horizontal',
  align: 'center',
  verticalAlign: 'bottom'
}, _temp2)) || _class;

export default Legend;