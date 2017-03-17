'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2; /**
                              * @fileOverview Tooltip
                              */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSmooth = require('react-smooth');

var _DefaultTooltipContent = require('./DefaultTooltipContent');

var _DefaultTooltipContent2 = _interopRequireDefault(_DefaultTooltipContent);

var _ReactUtils = require('../util/ReactUtils');

var _DataUtils = require('../util/DataUtils');

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EPS = 1;

var propTypes = {
  content: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]),
  viewBox: _react.PropTypes.shape({
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number
  }),

  active: _react.PropTypes.bool,
  separator: _react.PropTypes.string,
  formatter: _react.PropTypes.func,
  offset: _react.PropTypes.number,

  itemStyle: _react.PropTypes.object,
  labelStyle: _react.PropTypes.object,
  wrapperStyle: _react.PropTypes.object,
  cursor: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.element, _react.PropTypes.object]),

  coordinate: _react.PropTypes.shape({
    x: _react.PropTypes.number,
    y: _react.PropTypes.number
  }),
  position: _react.PropTypes.shape({
    x: _react.PropTypes.number,
    y: _react.PropTypes.number
  }),

  label: _react.PropTypes.any,
  payload: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    name: _react.PropTypes.any,
    value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.array]),
    unit: _react.PropTypes.any
  })),

  isAnimationActive: _react.PropTypes.bool,
  animationDuration: _react.PropTypes.number,
  animationEasing: _react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
  itemSorter: _react.PropTypes.func
};

var defaultProps = {
  active: false,
  offset: 10,
  viewBox: { x1: 0, x2: 0, y1: 0, y2: 0 },
  coordinate: { x: 0, y: 0 },
  cursorStyle: {},
  separator: ' : ',
  wrapperStyle: {},
  itemStyle: {},
  labelStyle: {},
  cursor: true,
  isAnimationActive: !(0, _ReactUtils.isSsr)(),
  animationEasing: 'ease',
  animationDuration: 400,
  itemSorter: function itemSorter() {
    return -1;
  }
};

var renderContent = function renderContent(content, props) {
  if (_react2.default.isValidElement(content)) {
    return _react2.default.cloneElement(content, props);
  } else if ((0, _isFunction3.default)(content)) {
    return content(props);
  }

  return _react2.default.createElement(_DefaultTooltipContent2.default, props);
};

var Tooltip = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      boxWidth: -1,
      boxHeight: -1
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tooltip, [{
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
    key: 'updateBBox',
    value: function updateBBox() {
      var _state = this.state,
          boxWidth = _state.boxWidth,
          boxHeight = _state.boxHeight;


      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var box = this.wrapperNode.getBoundingClientRect();

        if (Math.abs(box.width - boxWidth) > EPS || Math.abs(box.height - boxHeight) > EPS) {
          this.setState({
            boxWidth: box.width,
            boxHeight: box.height
          });
        }
      } else if (boxWidth !== -1 || boxHeight !== -1) {
        this.setState({
          boxWidth: -1,
          boxHeight: -1
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          payload = _props.payload,
          isAnimationActive = _props.isAnimationActive,
          animationDuration = _props.animationDuration,
          animationEasing = _props.animationEasing;

      var hasPayload = payload && payload.length && payload.filter(function (entry) {
        return !(0, _isNil3.default)(entry.value);
      }).length;
      var _props2 = this.props,
          content = _props2.content,
          viewBox = _props2.viewBox,
          coordinate = _props2.coordinate,
          position = _props2.position,
          active = _props2.active,
          offset = _props2.offset,
          wrapperStyle = _props2.wrapperStyle;

      var outerStyle = _extends({
        pointerEvents: 'none',
        visibility: active && hasPayload ? 'visible' : 'hidden',
        position: 'absolute',
        top: 0
      }, wrapperStyle);
      var translateX = void 0,
          translateY = void 0;

      if (position && (0, _DataUtils.isNumber)(position.x) && (0, _DataUtils.isNumber)(position.y)) {
        translateX = position.x;
        translateY = position.y;
      } else {
        var _state2 = this.state,
            boxWidth = _state2.boxWidth,
            boxHeight = _state2.boxHeight;


        if (boxWidth > 0 && boxHeight > 0 && coordinate) {
          translateX = position && (0, _DataUtils.isNumber)(position.x) ? position.x : Math.max(coordinate.x + boxWidth + offset > viewBox.x + viewBox.width ? coordinate.x - boxWidth - offset : coordinate.x + offset, viewBox.x);

          translateY = position && (0, _DataUtils.isNumber)(position.y) ? position.y : Math.max(coordinate.y + boxHeight + offset > viewBox.y + viewBox.height ? coordinate.y - boxHeight - offset : coordinate.y + offset, viewBox.y);
        } else {
          outerStyle.visibility = 'hidden';
        }
      }

      outerStyle = _extends({}, outerStyle, (0, _reactSmooth.translateStyle)({
        transform: 'translate(' + translateX + 'px, ' + translateY + 'px)'
      }));

      if (isAnimationActive && active) {
        outerStyle = _extends({}, outerStyle, (0, _reactSmooth.translateStyle)({
          transition: 'transform ' + animationDuration + 'ms ' + animationEasing
        }));
      }

      return _react2.default.createElement(
        'div',
        {
          className: 'recharts-tooltip-wrapper',
          style: outerStyle,
          ref: function ref(node) {
            _this2.wrapperNode = node;
          }
        },
        renderContent(content, this.props)
      );
    }
  }]);

  return Tooltip;
}(_react.Component), _class2.displayName = 'Tooltip', _class2.propTypes = propTypes, _class2.defaultProps = defaultProps, _temp2)) || _class;

exports.default = Tooltip;