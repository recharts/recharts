'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2; /**
                              * @fileOverview Render a group of radial bar
                              */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactSmooth = require('react-smooth');

var _reactSmooth2 = _interopRequireDefault(_reactSmooth);

var _Sector = require('../shape/Sector');

var _Sector2 = _interopRequireDefault(_Sector);

var _Layer = require('../container/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _DOMUtils = require('../util/DOMUtils');

var _ReactUtils = require('../util/ReactUtils');

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _PolarUtils = require('../util/PolarUtils');

var _DataUtils = require('../util/DataUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RADIAN = Math.PI / 180;

var RadialBar = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(RadialBar, _Component);

  function RadialBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RadialBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadialBar.__proto__ || Object.getPrototypeOf(RadialBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isAnimationFinished: false
    }, _this.handleAnimationEnd = function () {
      _this.setState({ isAnimationFinished: true });
    }, _this.handleAnimationStart = function () {
      _this.setState({ isAnimationFinished: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RadialBar, [{
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
    value: function getSectors() {
      var _props2 = this.props,
          cx = _props2.cx,
          cy = _props2.cy,
          startAngle = _props2.startAngle,
          data = _props2.data,
          minAngle = _props2.minAngle,
          maxAngle = _props2.maxAngle;

      var maxValue = Math.max.apply(null, data.map(function (entry) {
        return Math.abs(entry.value);
      }));
      var absMinAngle = Math.abs(minAngle);
      var absMaxAngle = Math.abs(maxAngle);
      var deltaAngle = this.getDeltaAngle();
      var gapAngle = Math.min(Math.abs(absMaxAngle - absMinAngle), 360);

      var sectors = data.map(function (entry) {
        var value = entry.value;
        var tempEndAngle = maxValue === 0 ? startAngle : startAngle + Math.sign(value * deltaAngle) * (absMinAngle + gapAngle * Math.abs(entry.value) / maxValue);

        return _extends({}, entry, {
          cx: cx, cy: cy,
          startAngle: startAngle,
          endAngle: tempEndAngle,
          payload: entry
        });
      });

      return sectors;
    }
  }, {
    key: 'getLabelPathArc',
    value: function getLabelPathArc(data, labelContent, style) {
      var label = this.props.label;

      var labelProps = _react2.default.isValidElement(label) ? label.props : label;
      var offsetRadius = labelProps.offsetRadius || 2;
      var orientation = labelProps.orientation || 'inner';
      var cx = data.cx,
          cy = data.cy,
          innerRadius = data.innerRadius,
          outerRadius = data.outerRadius,
          startAngle = data.startAngle,
          endAngle = data.endAngle;

      var clockWise = this.getDeltaAngle() < 0 && data.value > 0;
      var radius = clockWise ? innerRadius + offsetRadius : Math.max(outerRadius - offsetRadius, 0);

      if (radius <= 0) {
        return '';
      }

      var labelSize = (0, _DOMUtils.getStringSize)(labelContent, style);
      var deltaAngle = labelSize.width / (radius * RADIAN);
      var tempStartAngle = void 0,
          tempEndAngle = void 0;

      if (clockWise) {
        tempStartAngle = orientation === 'inner' ? Math.min(endAngle + deltaAngle, startAngle) : endAngle;
        tempEndAngle = tempStartAngle - deltaAngle;
      } else {
        tempStartAngle = orientation === 'inner' ? Math.max(endAngle - deltaAngle, startAngle) : endAngle;
        tempEndAngle = tempStartAngle + deltaAngle;
      }

      var startPoint = (0, _PolarUtils.polarToCartesian)(cx, cy, radius, tempStartAngle);
      var endPoint = (0, _PolarUtils.polarToCartesian)(cx, cy, radius, tempEndAngle);

      return 'M' + startPoint.x + ',' + startPoint.y + '\n            A' + radius + ',' + radius + ',0,\n            ' + (deltaAngle >= 180 ? 1 : 0) + ',\n            ' + (clockWise ? 1 : 0) + ',\n            ' + endPoint.x + ',' + endPoint.y;
    }
  }, {
    key: 'renderSectorShape',
    value: function renderSectorShape(shape, props) {
      var sectorShape = void 0;

      if (_react2.default.isValidElement(shape)) {
        sectorShape = _react2.default.cloneElement(shape, props);
      } else if ((0, _isFunction3.default)(shape)) {
        sectorShape = shape(props);
      } else {
        sectorShape = _react2.default.createElement(_Sector2.default, props);
      }

      return sectorShape;
    }
  }, {
    key: 'renderSectors',
    value: function renderSectors(sectors) {
      var _this2 = this;

      var _props3 = this.props,
          shape = _props3.shape,
          activeShape = _props3.activeShape,
          activeIndex = _props3.activeIndex,
          cornerRadius = _props3.cornerRadius;
      var _props4 = this.props,
          animationEasing = _props4.animationEasing,
          animationDuration = _props4.animationDuration,
          animationBegin = _props4.animationBegin,
          isAnimationActive = _props4.isAnimationActive;

      var baseProps = (0, _ReactUtils.getPresentationAttributes)(this.props);

      return sectors.map(function (entry, i) {
        var startAngle = entry.startAngle,
            endAngle = entry.endAngle;


        return _react2.default.createElement(
          _reactSmooth2.default,
          {
            from: { angle: startAngle },
            to: { angle: endAngle },
            begin: animationBegin,
            isActive: isAnimationActive,
            duration: animationDuration,
            easing: animationEasing,
            shouldReAnimate: true,
            key: 'aniamte-' + i,
            onAnimationStart: _this2.handleAnimationStart,
            onAnimationEnd: _this2.handleAnimationEnd
          },
          function (_ref2) {
            var angle = _ref2.angle;

            var props = _extends({}, baseProps, {
              cornerRadius: cornerRadius
            }, entry, (0, _ReactUtils.filterEventsOfChild)(_this2.props, entry, i), {
              endAngle: angle,
              key: 'sector-' + i,
              className: 'recharts-radial-bar-sector'
            });

            return _this2.renderSectorShape(i === activeIndex ? activeShape : shape, props);
          }
        );
      });
    }
  }, {
    key: 'renderBackground',
    value: function renderBackground(sectors) {
      var _this3 = this;

      var _props5 = this.props,
          startAngle = _props5.startAngle,
          endAngle = _props5.endAngle,
          background = _props5.background,
          cornerRadius = _props5.cornerRadius;

      var backgroundProps = (0, _ReactUtils.getPresentationAttributes)(background);

      return sectors.map(function (entry, i) {
        // eslint-disable-next-line no-unused-vars
        var value = entry.value,
            rest = _objectWithoutProperties(entry, ['value']);

        var props = _extends({
          cornerRadius: cornerRadius
        }, rest, {
          fill: '#eee'
        }, backgroundProps, (0, _ReactUtils.filterEventsOfChild)(_this3.props, entry, i), {
          startAngle: startAngle,
          endAngle: endAngle,
          index: i,
          key: 'sector-' + i,
          className: 'recharts-radial-bar-background-sector'
        });

        return _this3.renderSectorShape(background, props);
      });
    }
  }, {
    key: 'renderLabelItem',
    value: function renderLabelItem(option, props, value) {
      var labelItem = void 0;

      if (_react2.default.isValidElement(option)) {
        labelItem = _react2.default.cloneElement(option, props);
      } else if ((0, _isFunction3.default)(option)) {
        labelItem = option(props);
      } else {
        var id = (0, _DataUtils.uniqueId)('recharts-defs-');
        var filteredProps = (0, _ReactUtils.getPresentationAttributes)(props);
        var path = this.getLabelPathArc(props, value, filteredProps);

        labelItem = _react2.default.createElement(
          'text',
          _extends({}, filteredProps, { key: props.key, className: 'recharts-radial-bar-label' }),
          _react2.default.createElement(
            'defs',
            null,
            _react2.default.createElement('path', { id: id, d: path })
          ),
          _react2.default.createElement(
            'textPath',
            { xlinkHref: '#' + id },
            value
          )
        );
      }

      return labelItem;
    }
  }, {
    key: 'renderLabels',
    value: function renderLabels(sectors) {
      var _this4 = this;

      var isAnimationActive = this.props.isAnimationActive;

      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }

      var label = this.props.label;


      return sectors.map(function (entry, i) {
        var props = _extends({
          fontSize: 10
        }, entry, (0, _ReactUtils.getPresentationAttributes)(label), {
          index: i,
          key: 'label-' + i
        });

        return _this4.renderLabelItem(label, props, entry.value);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props6 = this.props,
          data = _props6.data,
          className = _props6.className,
          background = _props6.background,
          label = _props6.label;


      if (!data || !data.length) {
        return null;
      }

      var sectors = this.getSectors();
      var layerClass = (0, _classnames2.default)('recharts-area', className);

      return _react2.default.createElement(
        _Layer2.default,
        { className: layerClass },
        background && _react2.default.createElement(
          _Layer2.default,
          { className: 'recharts-radial-bar-background' },
          this.renderBackground(sectors)
        ),
        _react2.default.createElement(
          _Layer2.default,
          { className: 'recharts-radial-bar-sectors' },
          this.renderSectors(sectors)
        ),
        label && _react2.default.createElement(
          _Layer2.default,
          { className: 'recharts-radial-bar-labels' },
          this.renderLabels(sectors)
        )
      );
    }
  }]);

  return RadialBar;
}(_react.Component), _class2.displayName = 'RadialBar', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
  className: _react.PropTypes.string,
  shape: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.element]),
  activeShape: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func, _react.PropTypes.element]),
  activeIndex: _react.PropTypes.number,

  cornerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  cx: _react.PropTypes.number,
  cy: _react.PropTypes.number,
  startAngle: _react.PropTypes.number,
  endAngle: _react.PropTypes.number,
  maxAngle: _react.PropTypes.number,
  minAngle: _react.PropTypes.number,
  data: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    cx: _react.PropTypes.number,
    cy: _react.PropTypes.number,
    innerRadius: _react.PropTypes.number,
    outerRadius: _react.PropTypes.number,
    value: _react.PropTypes.value
  })),
  legendType: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),
  label: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func, _react.PropTypes.element, _react.PropTypes.object]),
  background: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func, _react.PropTypes.object, _react.PropTypes.element]),

  onMouseEnter: _react.PropTypes.func,
  onMouseLeave: _react.PropTypes.func,
  onClick: _react.PropTypes.func,

  isAnimationActive: _react.PropTypes.bool,
  animationBegin: _react.PropTypes.number,
  animationDuration: _react.PropTypes.number,
  animationEasing: _react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'spring'])
}), _class2.defaultProps = {
  startAngle: 180,
  endAngle: 0,
  maxAngle: 135,
  minAngle: 0,
  legendType: 'rect',
  data: [],
  isAnimationActive: !(0, _ReactUtils.isSsr)(),
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease'
}, _temp2)) || _class;

exports.default = RadialBar;