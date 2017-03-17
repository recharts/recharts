'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; /**
                             * @fileOverview Curve
                             */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d3Shape = require('d3-shape');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _ReactUtils = require('../util/ReactUtils');

var _DataUtils = require('../util/DataUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CURVE_FACTORIES = {
  curveBasisClosed: _d3Shape.curveBasisClosed, curveBasisOpen: _d3Shape.curveBasisOpen, curveBasis: _d3Shape.curveBasis, curveLinearClosed: _d3Shape.curveLinearClosed, curveLinear: _d3Shape.curveLinear,
  curveMonotoneX: _d3Shape.curveMonotoneX, curveMonotoneY: _d3Shape.curveMonotoneY, curveNatural: _d3Shape.curveNatural, curveStep: _d3Shape.curveStep, curveStepAfter: _d3Shape.curveStepAfter,
  curveStepBefore: _d3Shape.curveStepBefore
};

var defined = function defined(p) {
  return p.x === +p.x && p.y === +p.y;
};
var getX = function getX(p) {
  return p.x;
};
var getY = function getY(p) {
  return p.y;
};

var getCurveFactory = function getCurveFactory(type, layout) {
  if ((0, _isFunction3.default)(type)) {
    return type;
  }

  var name = 'curve' + type.slice(0, 1).toUpperCase() + type.slice(1);

  if (name === 'curveMonotone' && layout) {
    return CURVE_FACTORIES['' + name + (layout === 'vertical' ? 'Y' : 'X')];
  }
  return CURVE_FACTORIES[name] || _d3Shape.curveLinear;
};

var Curve = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Curve, _Component);

  function Curve() {
    _classCallCheck(this, Curve);

    return _possibleConstructorReturn(this, (Curve.__proto__ || Object.getPrototypeOf(Curve)).apply(this, arguments));
  }

  _createClass(Curve, [{
    key: 'getPath',

    /**
     * Calculate the path of curve
     * @return {String} path
     */
    value: function getPath() {
      var _props = this.props,
          type = _props.type,
          points = _props.points,
          baseLine = _props.baseLine,
          layout = _props.layout,
          connectNulls = _props.connectNulls;

      var curveFactory = getCurveFactory(type, layout);
      var formatPoints = connectNulls ? points.filter(function (entry) {
        return defined(entry);
      }) : points;
      var lineFunction = void 0;

      if ((0, _isArray3.default)(baseLine)) {
        var areaPoints = formatPoints.map(function (entry, index) {
          return _extends({}, entry, { base: baseLine[index] });
        });
        if (layout === 'vertical') {
          lineFunction = (0, _d3Shape.area)().y(getY).x1(getX).x0(function (d) {
            return d.base.x;
          });
        } else {
          lineFunction = (0, _d3Shape.area)().x(getX).y1(getY).y0(function (d) {
            return d.base.y;
          });
        }
        lineFunction.defined(defined).curve(curveFactory);

        return lineFunction(areaPoints);
      } else if (layout === 'vertical' && (0, _DataUtils.isNumber)(baseLine)) {
        lineFunction = (0, _d3Shape.area)().y(getY).x1(getX).x0(baseLine);
      } else if ((0, _DataUtils.isNumber)(baseLine)) {
        lineFunction = (0, _d3Shape.area)().x(getX).y1(getY).y0(baseLine);
      } else {
        lineFunction = (0, _d3Shape.line)().x(getX).y(getY);
      }

      lineFunction.defined(defined).curve(curveFactory);

      return lineFunction(formatPoints);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          points = _props2.points,
          pathRef = _props2.pathRef;


      if (!points || !points.length) {
        return null;
      }

      return _react2.default.createElement('path', _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), (0, _ReactUtils.filterEventAttributes)(this.props), {
        className: (0, _classnames2.default)('recharts-curve', className),
        d: this.getPath(),
        ref: pathRef
      }));
    }
  }]);

  return Curve;
}(_react.Component), _class2.displayName = 'Curve', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
  className: _react.PropTypes.string,
  type: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural', 'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter']), _react.PropTypes.func]),
  layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
  baseLine: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.array]),
  points: _react.PropTypes.arrayOf(_react.PropTypes.object),
  connectNulls: _react.PropTypes.bool,
  pathRef: _react.PropTypes.func
}), _class2.defaultProps = {
  type: 'linear',
  points: [],
  connectNulls: false
}, _temp)) || _class;

exports.default = Curve;