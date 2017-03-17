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

var _Dot = require('../shape/Dot');

var _Dot2 = _interopRequireDefault(_Dot);

var _Text = require('../component/Text');

var _Text2 = _interopRequireDefault(_Text);

var _ReactUtils = require('../util/ReactUtils');

var _DataUtils = require('../util/DataUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReferenceDot = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(ReferenceDot, _Component);

  function ReferenceDot() {
    _classCallCheck(this, ReferenceDot);

    return _possibleConstructorReturn(this, (ReferenceDot.__proto__ || Object.getPrototypeOf(ReferenceDot)).apply(this, arguments));
  }

  _createClass(ReferenceDot, [{
    key: 'getCoordinate',
    value: function getCoordinate() {
      var _props = this.props,
          x = _props.x,
          y = _props.y,
          xAxis = _props.xAxis,
          yAxis = _props.yAxis;

      var xScale = xAxis.scale;
      var yScale = yAxis.scale;
      var result = {
        cx: xScale(x) + (xScale.bandwidth ? xScale.bandwidth() / 2 : 0),
        cy: yScale(y) + (yScale.bandwidth ? yScale.bandwidth() / 2 : 0)
      };

      if ((0, _DataUtils.validateCoordinateInRange)(result.cx, xScale) && (0, _DataUtils.validateCoordinateInRange)(result.cy, yScale)) {
        return result;
      }

      return null;
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel(coordinate) {
      var _props2 = this.props,
          label = _props2.label,
          stroke = _props2.stroke;

      var props = _extends({}, (0, _ReactUtils.getPresentationAttributes)(label), {
        stroke: 'none',
        fill: stroke,
        x: coordinate.cx,
        y: coordinate.cy,
        textAnchor: 'middle',
        verticalAnchor: 'middle'
      });

      if (_react2.default.isValidElement(label)) {
        return _react2.default.cloneElement(label, props);
      } else if ((0, _isFunction3.default)(label)) {
        return label(props);
      } else if ((0, _DataUtils.isNumOrStr)(label)) {
        return _react2.default.createElement(
          'g',
          { className: 'recharts-reference-dot-label' },
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
    key: 'renderDot',
    value: function renderDot(option, props) {
      var dot = void 0;

      if (_react2.default.isValidElement(option)) {
        dot = _react2.default.cloneElement(option, props);
      } else if ((0, _isFunction3.default)(option)) {
        dot = option(props);
      } else {
        dot = _react2.default.createElement(_Dot2.default, _extends({}, props, {
          cx: props.cx,
          cy: props.cy,
          className: 'recharts-reference-dot-dot'
        }));
      }

      return dot;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          x = _props3.x,
          y = _props3.y;

      var isX = (0, _DataUtils.isNumOrStr)(x);
      var isY = (0, _DataUtils.isNumOrStr)(y);

      if (!isX || !isY) {
        return null;
      }

      var coordinate = this.getCoordinate();

      if (!coordinate) {
        return null;
      }

      var shape = this.props.shape;


      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-reference-dot' },
        this.renderDot(shape, _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), coordinate)),
        this.renderLabel(coordinate)
      );
    }
  }]);

  return ReferenceDot;
}(_react.Component), _class2.displayName = 'ReferenceDot', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
  r: _react.PropTypes.number,

  label: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.func, _react.PropTypes.element]),

  xAxis: _react.PropTypes.shape({ scale: _react.PropTypes.func }),
  yAxis: _react.PropTypes.shape({ scale: _react.PropTypes.func }),

  isFront: _react.PropTypes.bool,
  alwaysShow: _react.PropTypes.bool,
  x: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  y: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

  yAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  xAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  shape: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.element])
}), _class2.defaultProps = {
  isFront: false,
  alwaysShow: false,
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: '#fff',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1
}, _temp)) || _class;

exports.default = ReferenceDot;