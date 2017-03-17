'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var renderLine = function renderLine(option, props) {
  var line = void 0;

  if (_react2.default.isValidElement(option)) {
    line = _react2.default.cloneElement(option, props);
  } else if ((0, _isFunction3.default)(option)) {
    line = option(props);
  } else {
    line = _react2.default.createElement('line', _extends({}, props, {
      className: 'recharts-reference-line-line'
    }));
  }

  return line;
};

var ReferenceLine = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(ReferenceLine, _Component);

  function ReferenceLine() {
    _classCallCheck(this, ReferenceLine);

    return _possibleConstructorReturn(this, (ReferenceLine.__proto__ || Object.getPrototypeOf(ReferenceLine)).apply(this, arguments));
  }

  _createClass(ReferenceLine, [{
    key: 'getEndPoints',
    value: function getEndPoints(isX, isY) {
      var _props = this.props,
          xAxis = _props.xAxis,
          yAxis = _props.yAxis,
          viewBox = _props.viewBox;
      var x = viewBox.x,
          y = viewBox.y,
          width = viewBox.width,
          height = viewBox.height;


      if (isY) {
        var value = this.props.y;
        var scale = yAxis.scale;

        var offset = scale.bandwidth ? scale.bandwidth() / 2 : 0;
        var coord = scale(value) + offset;

        if ((0, _DataUtils.validateCoordinateInRange)(coord, scale)) {
          return yAxis.orientation === 'left' ? [{ x: x, y: coord }, { x: x + width, y: coord }] : [{ x: x + width, y: coord }, { x: x, y: coord }];
        }
      } else if (isX) {
        var _value = this.props.x;
        var _scale = xAxis.scale;

        var _offset = _scale.bandwidth ? _scale.bandwidth() / 2 : 0;
        var _coord = _scale(_value) + _offset;

        if ((0, _DataUtils.validateCoordinateInRange)(_coord, _scale)) {
          return xAxis.orientation === 'top' ? [{ x: _coord, y: y }, { x: _coord, y: y + height }] : [{ x: _coord, y: y + height }, { x: _coord, y: y }];
        }
      }

      return null;
    }
  }, {
    key: 'getLabelProps',
    value: function getLabelProps(isX, isY) {
      var _props2 = this.props,
          xAxis = _props2.xAxis,
          yAxis = _props2.yAxis,
          labelPosition = _props2.labelPosition;


      if (isY) {
        var axis = yAxis;

        if (axis.orientation === 'left' && labelPosition === 'end') {
          return { dx: 6, dy: 6, textAnchor: 'start' };
        }
        if (axis.orientation === 'right' && labelPosition === 'start') {
          return { dx: 6, dy: 6, textAnchor: 'start' };
        }
        return { dx: -6, dy: 6, textAnchor: 'end' };
      } else if (isX) {
        var _axis = xAxis;

        if (_axis.orientation === 'top') {
          return { dy: 6, textAnchor: 'middle' };
        }
        return { dy: -6, textAnchor: 'middle' };
      }

      return null;
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel(isX, isY, end) {
      var _props3 = this.props,
          label = _props3.label,
          stroke = _props3.stroke;

      var props = _extends({}, (0, _ReactUtils.getPresentationAttributes)(label), {
        stroke: 'none',
        fill: stroke
      }, end, this.getLabelProps(isX, isY));

      if (_react2.default.isValidElement(label)) {
        return _react2.default.cloneElement(label, props);
      } else if ((0, _isFunction3.default)(label)) {
        return label(props);
      } else if ((0, _DataUtils.isNumOrStr)(label)) {
        return _react2.default.createElement(
          'g',
          { className: 'recharts-reference-line-label' },
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
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          x = _props4.x,
          y = _props4.y,
          labelPosition = _props4.labelPosition,
          shape = _props4.shape;

      var isX = (0, _DataUtils.isNumOrStr)(x);
      var isY = (0, _DataUtils.isNumOrStr)(y);

      if (!isX && !isY) {
        return null;
      }

      var endPoints = this.getEndPoints(isX, isY);

      if (!endPoints) {
        return null;
      }

      var _endPoints = _slicedToArray(endPoints, 2),
          start = _endPoints[0],
          end = _endPoints[1];

      var props = _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), (0, _ReactUtils.filterEventAttributes)(this.props), {
        x1: start.x,
        y1: start.y,
        x2: end.x,
        y2: end.y
      });

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-reference-line' },
        renderLine(shape, props),
        this.renderLabel(isX, isY, labelPosition === 'start' ? start : end)
      );
    }
  }]);

  return ReferenceLine;
}(_react.Component), _class2.displayName = 'ReferenceLine', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
  viewBox: _react.PropTypes.shape({
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number
  }),

  label: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.element, _react.PropTypes.func]),

  xAxis: _react.PropTypes.object,
  yAxis: _react.PropTypes.object,

  isFront: _react.PropTypes.bool,
  alwaysShow: _react.PropTypes.bool,
  x: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  y: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

  yAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  xAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),

  labelPosition: _react.PropTypes.oneOf(['start', 'end']),
  shape: _react.PropTypes.func
}), _class2.defaultProps = {
  isFront: false,
  alwaysShow: false,
  xAxisId: 0,
  yAxisId: 0,
  fill: 'none',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1,
  labelPosition: 'end'
}, _temp)) || _class;

exports.default = ReferenceLine;