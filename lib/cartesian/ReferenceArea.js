'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; /**
                             * @fileOverview Reference Line
                             */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _Layer = require('../container/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _Text = require('../component/Text');

var _Text2 = _interopRequireDefault(_Text);

var _ReactUtils = require('../util/ReactUtils');

var _DataUtils = require('../util/DataUtils');

var _Rectangle = require('../shape/Rectangle');

var _Rectangle2 = _interopRequireDefault(_Rectangle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReferenceArea = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(ReferenceArea, _Component);

  function ReferenceArea() {
    _classCallCheck(this, ReferenceArea);

    return _possibleConstructorReturn(this, (ReferenceArea.__proto__ || Object.getPrototypeOf(ReferenceArea)).apply(this, arguments));
  }

  _createClass(ReferenceArea, [{
    key: 'getRect',
    value: function getRect(hasX, hasY) {
      var _props = this.props,
          xValue1 = _props.x1,
          xValue2 = _props.x2,
          yValue1 = _props.y1,
          yValue2 = _props.y2,
          xAxis = _props.xAxis,
          yAxis = _props.yAxis;

      var xScale = xAxis.scale;
      var yScale = yAxis.scale;
      var xOffset = xScale.bandwidth ? xScale.bandwidth() / 2 : 0;
      var yOffset = yScale.bandwidth ? yScale.bandwidth() / 2 : 0;
      var xRange = xScale.range();
      var yRange = yScale.range();
      var x1 = void 0,
          x2 = void 0,
          y1 = void 0,
          y2 = void 0;

      if (hasX && (0, _DataUtils.isNumOrStr)(xValue1)) {
        x1 = xScale(xValue1) + xOffset;
      } else if (hasY) {
        x1 = xRange[0];
      }
      if (hasX && (0, _DataUtils.isNumOrStr)(xValue2)) {
        x2 = xScale(xValue2) + xOffset;
      } else if (hasY) {
        x2 = xRange[1];
      }
      if (hasY && (0, _DataUtils.isNumOrStr)(yValue1)) {
        y1 = yScale(yValue1) + yOffset;
      } else if (hasX) {
        y1 = yRange[0];
      }
      if (hasY && (0, _DataUtils.isNumOrStr)(yValue2)) {
        y2 = yScale(yValue2) + yOffset;
      } else if (hasX) {
        y2 = yRange[1];
      }

      if ((0, _DataUtils.validateCoordinateInRange)(x1, xScale) && (0, _DataUtils.validateCoordinateInRange)(x2, xScale) && (0, _DataUtils.validateCoordinateInRange)(y1, yScale) && (0, _DataUtils.validateCoordinateInRange)(y2, yScale)) {
        return {
          x: Math.min(x1, x2),
          y: Math.min(y1, y2),
          width: Math.abs(x2 - x1),
          height: Math.abs(y2 - y1)
        };
      }

      return null;
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel(_ref) {
      var x = _ref.x,
          y = _ref.y,
          width = _ref.width,
          height = _ref.height;
      var _props2 = this.props,
          label = _props2.label,
          stroke = _props2.stroke;

      var props = _extends({}, label, {
        stroke: 'none',
        fill: stroke,
        x: x + width / 2,
        y: y + height / 2,
        textAnchor: 'middle'
      });

      if (_react2.default.isValidElement(label)) {
        return _react2.default.cloneElement(label, props);
      } else if ((0, _isFunction3.default)(label)) {
        return label(props);
      } else if ((0, _DataUtils.isNumOrStr)(label)) {
        return _react2.default.createElement(
          'g',
          { className: 'recharts-reference-area-label' },
          _react2.default.createElement(
            _Text2.default,
            props,
            label
          )
        );
      }

      return null;
    }
  }, {
    key: 'renderRect',
    value: function renderRect(option, props) {
      var rect = void 0;

      if (_react2.default.isValidElement(option)) {
        rect = _react2.default.cloneElement(option, props);
      } else if ((0, _isFunction3.default)(option)) {
        rect = option(props);
      } else {
        rect = _react2.default.createElement(_Rectangle2.default, _extends({}, props, {
          className: 'recharts-reference-area-rect'
        }));
      }

      return rect;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          x1 = _props3.x1,
          x2 = _props3.x2,
          y1 = _props3.y1,
          y2 = _props3.y2;

      var hasX = (0, _DataUtils.isNumOrStr)(x1) && (0, _DataUtils.isNumOrStr)(x2);
      var hasY = (0, _DataUtils.isNumOrStr)(y1) && (0, _DataUtils.isNumOrStr)(y2);

      if (!hasX && !hasY) {
        return null;
      }

      var rect = this.getRect(hasX, hasY);

      if (!rect) {
        return null;
      }

      var shape = this.props.shape;


      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-reference-area' },
        this.renderRect(shape, _extends({}, this.props, rect)),
        this.renderLabel(rect)
      );
    }
  }]);

  return ReferenceArea;
}(_react.Component), _class2.displayName = 'ReferenceArea', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
  viewBox: _react.PropTypes.shape({
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number
  }),

  label: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.func, _react.PropTypes.element]),

  xAxis: _react.PropTypes.object,
  yAxis: _react.PropTypes.object,

  isFront: _react.PropTypes.bool,
  alwaysShow: _react.PropTypes.bool,
  x1: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  x2: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  y1: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  y2: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

  yAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  xAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  shape: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.element])
}), _class2.defaultProps = {
  isFront: false,
  alwaysShow: false,
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: '#ccc',
  fillOpacity: 0.5,
  stroke: 'none',
  strokeWidth: 1
}, _temp)) || _class;

exports.default = ReferenceArea;