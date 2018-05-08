'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _isPlainObject2 = require('lodash/isPlainObject');

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2; /**
                              * @fileOverview Render sectors of a pie
                              */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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

var _Label = require('../component/Label');

var _Label2 = _interopRequireDefault(_Label);

var _LabelList = require('../component/LabelList');

var _LabelList2 = _interopRequireDefault(_LabelList);

var _Cell = require('../component/Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _ReactUtils = require('../util/ReactUtils');

var _PolarUtils = require('../util/PolarUtils');

var _DataUtils = require('../util/DataUtils');

var _ChartUtils = require('../util/ChartUtils');

var _LogUtils = require('../util/LogUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pie = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Pie, _Component);

  function Pie() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Pie);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pie.__proto__ || Object.getPrototypeOf(Pie)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isAnimationFinished: false, isAnimationStarted: false }, _this.id = (0, _DataUtils.uniqueId)('recharts-pie-'), _this.cachePrevData = function (sectors) {
      _this.setState({ prevSectors: sectors });
    }, _this.handleAnimationEnd = function () {
      _this.setState({
        isAnimationFinished: true
      });
    }, _this.handleAnimationStart = function () {
      _this.setState({
        isAnimationStarted: true
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Pie, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props,
          animationId = _props.animationId,
          sectors = _props.sectors;


      if (nextProps.isAnimationActive !== this.props.isAnimationActive) {
        this.cachePrevData([]);
      } else if (nextProps.animationId !== animationId) {
        this.cachePrevData(sectors);
      }
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
      var _props2 = this.props,
          label = _props2.label,
          labelLine = _props2.labelLine,
          dataKey = _props2.dataKey,
          valueKey = _props2.valueKey;

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
          index: i,
          points: [(0, _PolarUtils.polarToCartesian)(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint]
        });
        var realDataKey = dataKey;
        // TODO: compatible to lower versions
        if ((0, _isNil3.default)(dataKey) && (0, _isNil3.default)(valueKey)) {
          realDataKey = 'value';
        } else if ((0, _isNil3.default)(dataKey)) {
          realDataKey = valueKey;
        }

        return _react2.default.createElement(
          _Layer2.default,
          { key: 'label-' + i },
          labelLine && _this2.renderLabelLineItem(labelLine, lineProps),
          _this2.renderLabelItem(label, labelProps, (0, _ChartUtils.getValueByDataKey)(entry, realDataKey))
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
    key: 'renderSectorsStatically',
    value: function renderSectorsStatically(sectors) {
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
    key: 'renderSectorsWithAnimation',
    value: function renderSectorsWithAnimation() {
      var _this4 = this;

      var _props3 = this.props,
          sectors = _props3.sectors,
          isAnimationActive = _props3.isAnimationActive,
          animationBegin = _props3.animationBegin,
          animationDuration = _props3.animationDuration,
          animationEasing = _props3.animationEasing,
          animationId = _props3.animationId;
      var prevSectors = this.state.prevSectors;


      return _react2.default.createElement(
        _reactSmooth2.default,
        {
          begin: animationBegin,
          duration: animationDuration,
          isActive: isAnimationActive,
          easing: animationEasing,
          from: { t: 0 },
          to: { t: 1 },
          key: 'pie-' + animationId,
          onAnimationEnd: this.handleAnimationEnd
        },
        function (_ref2) {
          var t = _ref2.t;

          var stepData = [];
          var first = sectors && sectors[0];
          var curAngle = first.startAngle;

          sectors.forEach(function (entry, index) {
            var prev = prevSectors && prevSectors[index];
            var paddingAngle = index > 0 ? entry.paddingAngle : 0;

            if (prev) {
              var angleIp = (0, _DataUtils.interpolateNumber)(prev.endAngle - prev.startAngle, entry.endAngle - entry.startAngle);
              var latest = _extends({}, entry, {
                startAngle: curAngle + paddingAngle,
                endAngle: curAngle + angleIp(t) + paddingAngle
              });

              stepData.push(latest);
              curAngle = latest.endAngle;
            } else {
              var endAngle = entry.endAngle,
                  startAngle = entry.startAngle;

              var interpolatorAngle = (0, _DataUtils.interpolateNumber)(0, endAngle - startAngle);
              var deltaAngle = interpolatorAngle(t);
              var _latest = _extends({}, entry, {
                startAngle: curAngle + paddingAngle,
                endAngle: curAngle + deltaAngle + paddingAngle
              });

              stepData.push(_latest);
              curAngle = _latest.endAngle;
            }
          });

          return _react2.default.createElement(
            _Layer2.default,
            null,
            _this4.renderSectorsStatically(stepData)
          );
        }
      );
    }
  }, {
    key: 'renderSectors',
    value: function renderSectors() {
      var _props4 = this.props,
          sectors = _props4.sectors,
          isAnimationActive = _props4.isAnimationActive;
      var prevSectors = this.state.prevSectors;


      if (isAnimationActive && sectors && sectors.length && (!prevSectors || !(0, _isEqual3.default)(prevSectors, sectors))) {
        return this.renderSectorsWithAnimation();
      }
      return this.renderSectorsStatically(sectors);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          hide = _props5.hide,
          sectors = _props5.sectors,
          className = _props5.className,
          label = _props5.label,
          cx = _props5.cx,
          cy = _props5.cy,
          innerRadius = _props5.innerRadius,
          outerRadius = _props5.outerRadius,
          isAnimationActive = _props5.isAnimationActive,
          id = _props5.id;


      if (hide || !sectors || !sectors.length || !(0, _DataUtils.isNumber)(cx) || !(0, _DataUtils.isNumber)(cy) || !(0, _DataUtils.isNumber)(innerRadius) || !(0, _DataUtils.isNumber)(outerRadius)) {
        return null;
      }

      var isAnimationFinished = this.state.isAnimationFinished;

      var layerClass = (0, _classnames2.default)('recharts-pie', className);

      return _react2.default.createElement(
        _Layer2.default,
        { className: layerClass },
        _react2.default.createElement(
          'g',
          { clipPath: 'url(#' + ((0, _isNil3.default)(id) ? this.id : id) + ')' },
          this.renderSectors()
        ),
        label && this.renderLabels(sectors),
        _Label2.default.renderCallByParent(this.props, null, false),
        (!isAnimationActive || isAnimationFinished) && _LabelList2.default.renderCallByParent(this.props, sectors, false)
      );
    }
  }]);

  return Pie;
}(_react.Component), _class2.displayName = 'Pie', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, _ReactUtils.EVENT_ATTRIBUTES, {
  className: _propTypes2.default.string,
  animationId: _propTypes2.default.number,
  cx: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  cy: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  startAngle: _propTypes2.default.number,
  endAngle: _propTypes2.default.number,
  paddingAngle: _propTypes2.default.number,
  innerRadius: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  outerRadius: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  cornerRadius: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  dataKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.func]).isRequired,
  nameKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.func]),
  valueKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.func]),
  data: _propTypes2.default.arrayOf(_propTypes2.default.object),
  minAngle: _propTypes2.default.number,
  legendType: _propTypes2.default.oneOf(_ReactUtils.LEGEND_TYPES),
  maxRadius: _propTypes2.default.number,

  sectors: _propTypes2.default.arrayOf(_propTypes2.default.object),
  hide: _propTypes2.default.bool,
  labelLine: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func, _propTypes2.default.element, _propTypes2.default.bool]),
  label: _propTypes2.default.oneOfType([_propTypes2.default.shape({
    offsetRadius: _propTypes2.default.number
  }), _propTypes2.default.func, _propTypes2.default.element, _propTypes2.default.bool]),
  activeShape: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func, _propTypes2.default.element]),
  activeIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number)]),

  isAnimationActive: _propTypes2.default.bool,
  animationBegin: _propTypes2.default.number,
  animationDuration: _propTypes2.default.number,
  animationEasing: _propTypes2.default.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'spring', 'linear']),
  id: _propTypes2.default.string
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
  labelLine: true,
  hide: false,
  minAngle: 0,
  isAnimationActive: !(0, _ReactUtils.isSsr)(),
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: 'ease',
  nameKey: 'name'
}, _class2.parseDeltaAngle = function (_ref3) {
  var startAngle = _ref3.startAngle,
      endAngle = _ref3.endAngle;

  var sign = (0, _DataUtils.mathSign)(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);

  return sign * deltaAngle;
}, _class2.getRealPieData = function (item) {
  var _item$props = item.props,
      data = _item$props.data,
      children = _item$props.children;

  var presentationProps = (0, _ReactUtils.getPresentationAttributes)(item.props);
  var cells = (0, _ReactUtils.findAllByType)(children, _Cell2.default);

  if (data && data.length) {
    return data.map(function (entry, index) {
      return _extends({
        payload: entry
      }, presentationProps, entry, cells && cells[index] && cells[index].props);
    });
  }

  if (cells && cells.length) {
    return cells.map(function (cell) {
      return _extends({}, presentationProps, cell.props);
    });
  }

  return [];
}, _class2.parseCoordinateOfPie = function (item, offset) {
  var top = offset.top,
      left = offset.left,
      width = offset.width,
      height = offset.height;

  var maxPieRadius = (0, _PolarUtils.getMaxRadius)(width, height);
  var cx = left + (0, _DataUtils.getPercentValue)(item.props.cx, width, width / 2);
  var cy = top + (0, _DataUtils.getPercentValue)(item.props.cy, height, height / 2);
  var innerRadius = (0, _DataUtils.getPercentValue)(item.props.innerRadius, maxPieRadius, 0);
  var outerRadius = (0, _DataUtils.getPercentValue)(item.props.outerRadius, maxPieRadius, maxPieRadius * 0.8);
  var maxRadius = item.props.maxRadius || Math.sqrt(width * width + height * height) / 2;

  return { cx: cx, cy: cy, innerRadius: innerRadius, outerRadius: outerRadius, maxRadius: maxRadius };
}, _class2.getComposedData = function (_ref4) {
  var item = _ref4.item,
      offset = _ref4.offset,
      onItemMouseLeave = _ref4.onItemMouseLeave,
      onItemMouseEnter = _ref4.onItemMouseEnter;

  var pieData = Pie.getRealPieData(item);
  if (!pieData || !pieData.length) {
    return [];
  }

  var _item$props2 = item.props,
      cornerRadius = _item$props2.cornerRadius,
      startAngle = _item$props2.startAngle,
      endAngle = _item$props2.endAngle,
      paddingAngle = _item$props2.paddingAngle,
      dataKey = _item$props2.dataKey,
      nameKey = _item$props2.nameKey,
      valueKey = _item$props2.valueKey;

  var minAngle = Math.abs(item.props.minAngle);
  var coordinate = Pie.parseCoordinateOfPie(item, offset);
  var len = pieData.length;
  var deltaAngle = Pie.parseDeltaAngle({ startAngle: startAngle, endAngle: endAngle });
  var absDeltaAngle = Math.abs(deltaAngle);
  var totalPadingAngle = (absDeltaAngle >= 360 ? len : len - 1) * paddingAngle;
  var realTotalAngle = absDeltaAngle - len * minAngle - totalPadingAngle;
  var realDataKey = dataKey;

  if ((0, _isNil3.default)(dataKey) && (0, _isNil3.default)(valueKey)) {
    (0, _LogUtils.warn)(false, 'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0');
    realDataKey = 'value';
  } else if ((0, _isNil3.default)(dataKey)) {
    (0, _LogUtils.warn)(false, 'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0');
    realDataKey = valueKey;
  }

  var sum = pieData.reduce(function (result, entry) {
    var val = (0, _ChartUtils.getValueByDataKey)(entry, realDataKey, 0);
    return result + ((0, _DataUtils.isNumber)(val) ? val : 0);
  }, 0);
  var sectors = void 0;

  if (sum > 0) {
    var prev = void 0;
    sectors = pieData.map(function (entry, i) {
      var val = (0, _ChartUtils.getValueByDataKey)(entry, realDataKey, 0);
      var name = (0, _ChartUtils.getValueByDataKey)(entry, nameKey, i);
      var percent = ((0, _DataUtils.isNumber)(val) ? val : 0) / sum;
      var tempStartAngle = void 0;

      if (i) {
        tempStartAngle = prev.endAngle + (0, _DataUtils.mathSign)(deltaAngle) * paddingAngle;
      } else {
        tempStartAngle = startAngle;
      }

      var tempEndAngle = tempStartAngle + (0, _DataUtils.mathSign)(deltaAngle) * (minAngle + percent * realTotalAngle);
      var midAngle = (tempStartAngle + tempEndAngle) / 2;
      var middleRadius = (coordinate.innerRadius + coordinate.outerRadius) / 2;
      var tooltipPayload = [{ name: name, value: val, payload: entry }];
      var tooltipPosition = (0, _PolarUtils.polarToCartesian)(coordinate.cx, coordinate.cy, middleRadius, midAngle);

      prev = _extends({
        percent: percent, cornerRadius: cornerRadius, name: name, tooltipPayload: tooltipPayload, midAngle: midAngle, middleRadius: middleRadius, tooltipPosition: tooltipPosition
      }, entry, coordinate, {
        value: (0, _ChartUtils.getValueByDataKey)(entry, realDataKey),
        startAngle: tempStartAngle,
        endAngle: tempEndAngle,
        payload: entry,
        paddingAngle: (0, _DataUtils.mathSign)(deltaAngle) * paddingAngle
      });

      return prev;
    });
  }

  return _extends({}, coordinate, {
    sectors: sectors,
    data: pieData,
    onMouseLeave: onItemMouseLeave,
    onMouseEnter: onItemMouseEnter
  });
}, _temp2)) || _class;

exports.default = Pie;