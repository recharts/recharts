'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2; /**
                              * @fileOverview Legend
                              */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _DefaultLegendContent = require('./DefaultLegendContent');

var _DefaultLegendContent2 = _interopRequireDefault(_DefaultLegendContent);

var _DataUtils = require('../util/DataUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var renderContent = function renderContent(content, props) {
  if (_react2.default.isValidElement(content)) {
    return _react2.default.cloneElement(content, props);
  } else if ((0, _isFunction3.default)(content)) {
    return content(props);
  }

  return _react2.default.createElement(_DefaultLegendContent2.default, props);
};

var EPS = 1;

var Legend = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
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
      var _this2 = this;

      var _state2 = this.state,
          boxWidth = _state2.boxWidth,
          boxHeight = _state2.boxHeight;
      var onBBoxUpdate = this.props.onBBoxUpdate;


      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        (function () {
          var box = _this2.wrapperNode.getBoundingClientRect();

          if (Math.abs(box.width - boxWidth) > EPS || Math.abs(box.height - boxHeight) > EPS) {
            _this2.setState({
              boxWidth: box.width,
              boxHeight: box.height
            }, function () {
              if (onBBoxUpdate) {
                onBBoxUpdate(box);
              }
            });
          }
        })();
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
      var _this3 = this;

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

      return _react2.default.createElement(
        'div',
        {
          className: 'recharts-legend-wrapper',
          style: outerStyle,
          ref: function ref(node) {
            _this3.wrapperNode = node;
          }
        },
        renderContent(content, this.props)
      );
    }
  }], [{
    key: 'getWithHeight',
    value: function getWithHeight(item, chartWidth) {
      var layout = item.props.layout;


      if (layout === 'vertical' && (0, _DataUtils.isNumber)(item.props.height)) {
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
}(_react.Component), _class2.displayName = 'Legend', _class2.propTypes = {
  content: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]),
  wrapperStyle: _react.PropTypes.object,
  chartWidth: _react.PropTypes.number,
  chartHeight: _react.PropTypes.number,
  width: _react.PropTypes.number,
  height: _react.PropTypes.number,
  iconSize: _react.PropTypes.number,
  iconType: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'star', 'triangle', 'wye']),
  layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
  align: _react.PropTypes.oneOf(['center', 'left', 'right']),
  verticalAlign: _react.PropTypes.oneOf(['top', 'bottom', 'middle']),
  margin: _react.PropTypes.shape({
    top: _react.PropTypes.number,
    left: _react.PropTypes.number,
    bottom: _react.PropTypes.number,
    right: _react.PropTypes.number
  }),
  payload: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    value: _react.PropTypes.any,
    id: _react.PropTypes.any,
    type: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'star', 'triangle', 'wye'])
  })),
  formatter: _react.PropTypes.func,
  onMouseEnter: _react.PropTypes.func,
  onMouseLeave: _react.PropTypes.func,
  onClick: _react.PropTypes.func,
  onBBoxUpdate: _react.PropTypes.func
}, _class2.defaultProps = {
  iconSize: 14,
  layout: 'horizontal',
  align: 'center',
  verticalAlign: 'bottom'
}, _temp2)) || _class;

exports.default = Legend;