'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isPlainObject2 = require('lodash/isPlainObject');

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2; /**
                              * @fileOverview Render sectors of a pie
                              */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSmooth = require('react-smooth');

var _reactSmooth2 = _interopRequireDefault(_reactSmooth);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _Layer = require('../container/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _Sector = require('../shape/Sector');

var _Sector2 = _interopRequireDefault(_Sector);

var _Curve = require('../shape/Curve');

var _Curve2 = _interopRequireDefault(_Curve);

var _Text = require('../component/Text');

var _Text2 = _interopRequireDefault(_Text);

var _ReactUtils = require('../util/ReactUtils');

var _PolarUtils = require('../util/PolarUtils');

var _AnimationDecorator = require('../util/AnimationDecorator');

var _AnimationDecorator2 = _interopRequireDefault(_AnimationDecorator);

var _DataUtils = require('../util/DataUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pie = (0, _AnimationDecorator2.default)(_class = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Pie, _Component);

  function Pie() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Pie);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pie.__proto__ || Object.getPrototypeOf(Pie)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isAnimationFinished: false }, _this.id = (0, _DataUtils.uniqueId)('recharts-pie-'), _this.handleAnimationEnd = function () {
      _this.setState({
        isAnimationFinished: true
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Pie, [{
    key: 'getDeltaAngle',
    value: function getDeltaAngle() {
      var _props = this.props,
          startAngle = _props.startAngle,
          endAngle = _props.endAngle;

      var sign = Math.sign(endAngle - startAngle);
      var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);

      return sign * deltaAngle;
    }
  }, {
    key: 'getSectors',
    value: function getSectors(data) {
      var _props2 = this.props,
          cx = _props2.cx,
          cy = _props2.cy,
          innerRadius = _props2.innerRadius,
          outerRadius = _props2.outerRadius,
          cornerRadius = _props2.cornerRadius,
          startAngle = _props2.startAngle,
          paddingAngle = _props2.paddingAngle,
          minAngle = _props2.minAngle,
          nameKey = _props2.nameKey,
          valueKey = _props2.valueKey;

      var len = data.length;
      var deltaAngle = this.getDeltaAngle();
      var absDeltaAngle = Math.abs(deltaAngle);
      var totalPadingAngle = (absDeltaAngle >= 360 ? len : len - 1) * paddingAngle;
      var sum = data.reduce(function (result, entry) {
        return result + (0, _DataUtils.getValueByDataKey)(entry, valueKey, 0);
      }, 0);

      var sectors = [];
      var prev = void 0;

      if (sum > 0) {
        sectors = data.map(function (entry, i) {
          var percent = (0, _DataUtils.getValueByDataKey)(entry, valueKey, 0) / sum;

          var tempStartAngle = void 0;

          if (i) {
            tempStartAngle = (deltaAngle < 0 ? prev.endAngle : prev.startAngle) + Math.sign(deltaAngle) * paddingAngle;
          } else {
            tempStartAngle = startAngle;
          }

          var tempEndAngle = tempStartAngle + Math.sign(deltaAngle) * (minAngle + percent * (absDeltaAngle - len * minAngle - totalPadingAngle));

          prev = _extends({
            percent: percent,
            cornerRadius: cornerRadius
          }, entry, {
            cx: cx,
            cy: cy,
            innerRadius: innerRadius,
            outerRadius: outerRadius,
            name: (0, _DataUtils.getValueByDataKey)(entry, nameKey),
            value: (0, _DataUtils.getValueByDataKey)(entry, valueKey),
            startAngle: deltaAngle < 0 ? tempStartAngle : tempEndAngle,
            endAngle: deltaAngle < 0 ? tempEndAngle : tempStartAngle,
            midAngle: (tempStartAngle + tempEndAngle) / 2
          });

          return prev;
        });
      }

      return sectors;
    }
  }, {
    key: 'getTextAnchor',
    value: function getTextAnchor(x, cx) {
      if (x > cx) {
        return 'start';
      } else if (x < cx) {
        return 'end';
      }

      return 'middle';
    }
  }, {
    key: 'isActiveIndex',
    value: function isActiveIndex(i) {
      var activeIndex = this.props.activeIndex;


      if (Array.isArray(activeIndex)) {
        return activeIndex.indexOf(i) !== -1;
      }

      return i === activeIndex;
    }
  }, {
    key: 'renderClipPath',
    value: function renderClipPath() {
      var _props3 = this.props,
          cx = _props3.cx,
          cy = _props3.cy,
          maxRadius = _props3.maxRadius,
          startAngle = _props3.startAngle,
          isAnimationActive = _props3.isAnimationActive,
          animationDuration = _props3.animationDuration,
          animationEasing = _props3.animationEasing,
          animationBegin = _props3.animationBegin,
          animationId = _props3.animationId;


      return _react2.default.createElement(
        'defs',
        null,
        _react2.default.createElement(
          'clipPath',
          { id: this.id },
          _react2.default.createElement(
            _reactSmooth2.default,
            {
              easing: animationEasing,
              isActive: isAnimationActive,
              duration: animationDuration,
              key: animationId,
              animationBegin: animationBegin,
              onAnimationEnd: this.handleAnimationEnd,
              from: {
                endAngle: startAngle
              },
              to: {
                outerRadius: Math.max(this.props.outerRadius, maxRadius || 0),
                innerRadius: 0,
                endAngle: this.props.endAngle
              }
            },
            function (_ref2) {
              var outerRadius = _ref2.outerRadius,
                  innerRadius = _ref2.innerRadius,
                  endAngle = _ref2.endAngle;
              return _react2.default.createElement(_Sector2.default, {
                cx: cx,
                cy: cy,
                outerRadius: outerRadius,
                innerRadius: innerRadius,
                startAngle: startAngle,
                endAngle: endAngle
              });
            }
          )
        )
      );
    }
  }, {
    key: 'renderLabelLineItem',
    value: function renderLabelLineItem(option, props) {
      if (_react2.default.isValidElement(option)) {
        return _react2.default.cloneElement(option, props);
      } else if ((0, _isFunction3.default)(option)) {
        return option(props);
      }

      return _react2.default.createElement(_Curve2.default, _extends({}, props, { type: 'linear', className: 'recharts-pie-label-line' }));
    }
  }, {
    key: 'renderLabelItem',
    value: function renderLabelItem(option, props, value) {
      if (_react2.default.isValidElement(option)) {
        return _react2.default.cloneElement(option, props);
      }
      var label = value;
      if ((0, _isFunction3.default)(option)) {
        label = option(props);
        if (_react2.default.isValidElement(label)) {
          return label;
        }
      }

      return _react2.default.createElement(
        _Text2.default,
        _extends({}, props, {
          alignmentBaseline: 'middle',
          className: 'recharts-pie-label-text'
        }),
        label
      );
    }
  }, {
    key: 'renderLabels',
    value: function renderLabels(sectors) {
      var _this2 = this;

      var isAnimationActive = this.props.isAnimationActive;


      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }
      var _props4 = this.props,
          label = _props4.label,
          labelLine = _props4.labelLine,
          valueKey = _props4.valueKey;

      var pieProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
      var customLabelProps = (0, _ReactUtils.getPresentationAttributes)(label);
      var customLabelLineProps = (0, _ReactUtils.getPresentationAttributes)(labelLine);
      var offsetRadius = label && label.offsetRadius || 20;

      var labels = sectors.map(function (entry, i) {
        var midAngle = (entry.startAngle + entry.endAngle) / 2;
        var endPoint = (0, _PolarUtils.polarToCartesian)(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);
        var labelProps = _extends({}, pieProps, entry, {
          stroke: 'none'
        }, customLabelProps, {
          index: i,
          textAnchor: _this2.getTextAnchor(endPoint.x, entry.cx)
        }, endPoint);
        var lineProps = _extends({}, pieProps, entry, {
          fill: 'none',
          stroke: entry.fill
        }, customLabelLineProps, {
          points: [(0, _PolarUtils.polarToCartesian)(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint]
        });

        return _react2.default.createElement(
          _Layer2.default,
          { key: 'label-' + i },
          labelLine && _this2.renderLabelLineItem(labelLine, lineProps),
          _this2.renderLabelItem(label, labelProps, (0, _DataUtils.getValueByDataKey)(entry, valueKey))
        );
      });

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-pie-labels' },
        labels
      );
    }
  }, {
    key: 'renderSectorItem',
    value: function renderSectorItem(option, props) {
      if (_react2.default.isValidElement(option)) {
        return _react2.default.cloneElement(option, props);
      } else if ((0, _isFunction3.default)(option)) {
        return option(props);
      } else if ((0, _isPlainObject3.default)(option)) {
        return _react2.default.createElement(_Sector2.default, _extends({}, props, option));
      }

      return _react2.default.createElement(_Sector2.default, props);
    }
  }, {
    key: 'renderSectors',
    value: function renderSectors(sectors) {
      var _this3 = this;

      var activeShape = this.props.activeShape;


      return sectors.map(function (entry, i) {
        return _react2.default.createElement(
          _Layer2.default,
          _extends({
            className: 'recharts-pie-sector'
          }, (0, _ReactUtils.filterEventsOfChild)(_this3.props, entry, i), {
            key: 'sector-' + i
          }),
          _this3.renderSectorItem(_this3.isActiveIndex(i) ? activeShape : null, entry)
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          data = _props5.data,
          composedData = _props5.composedData,
          className = _props5.className,
          label = _props5.label,
          cx = _props5.cx,
          cy = _props5.cy,
          innerRadius = _props5.innerRadius,
          outerRadius = _props5.outerRadius;

      var pieData = composedData || data;

      if (!pieData || !pieData.length || !(0, _DataUtils.isNumber)(cx) || !(0, _DataUtils.isNumber)(cy) || !(0, _DataUtils.isNumber)(innerRadius) || !(0, _DataUtils.isNumber)(outerRadius)) {
        return null;
      }

      var sectors = this.getSectors(pieData);
      var layerClass = (0, _classnames2.default)('recharts-pie', className);

      return _react2.default.createElement(
        _Layer2.default,
        { className: layerClass },
        this.renderClipPath(),
        _react2.default.createElement(
          'g',
          { clipPath: 'url(#' + this.id + ')' },
          this.renderSectors(sectors)
        ),
        label && this.renderLabels(sectors)
      );
    }
  }]);

  return Pie;
}(_react.Component), _class2.displayName = 'Pie', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, _ReactUtils.EVENT_ATTRIBUTES, {
  className: _react.PropTypes.string,
  animationId: _react.PropTypes.number,
  cx: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  cy: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  startAngle: _react.PropTypes.number,
  endAngle: _react.PropTypes.number,
  paddingAngle: _react.PropTypes.number,
  innerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  outerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  cornerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  nameKey: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  valueKey: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  data: _react.PropTypes.arrayOf(_react.PropTypes.object),
  composedData: _react.PropTypes.arrayOf(_react.PropTypes.object),
  minAngle: _react.PropTypes.number,
  legendType: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),
  maxRadius: _react.PropTypes.number,

  labelLine: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func, _react.PropTypes.element, _react.PropTypes.bool]),
  label: _react.PropTypes.oneOfType([_react.PropTypes.shape({
    offsetRadius: _react.PropTypes.number
  }), _react.PropTypes.func, _react.PropTypes.element, _react.PropTypes.bool]),
  activeShape: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func, _react.PropTypes.element]),
  activeIndex: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.number)]),

  isAnimationActive: _react.PropTypes.bool,
  animationBegin: _react.PropTypes.number,
  animationDuration: _react.PropTypes.number,
  animationEasing: _react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'spring', 'linear'])
}), _class2.defaultProps = {
  stroke: '#fff',
  fill: '#808080',
  legendType: 'rect',
  // The abscissa of pole
  cx: '50%',
  // The ordinate of pole
  cy: '50%',
  // The start angle of first sector
  startAngle: 0,
  // The direction of drawing sectors
  endAngle: 360,
  // The inner radius of sectors
  innerRadius: 0,
  // The outer radius of sectors
  outerRadius: '80%',
  paddingAngle: 0,
  nameKey: 'name',
  valueKey: 'value',
  labelLine: true,
  data: [],
  minAngle: 0,
  isAnimationActive: !(0, _ReactUtils.isSsr)(),
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: 'ease'
}, _temp2)) || _class) || _class;

exports.default = Pie;