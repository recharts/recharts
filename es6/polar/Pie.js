import _isEqual from 'lodash/isEqual';
import _isPlainObject from 'lodash/isPlainObject';
import _isFunction from 'lodash/isFunction';
import _isNil from 'lodash/isNil';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Render sectors of a pie
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Animate from 'react-smooth';
import classNames from 'classnames';

import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import Sector from '../shape/Sector';
import Curve from '../shape/Curve';
import Text from '../component/Text';
import Label from '../component/Label';
import LabelList from '../component/LabelList';
import Cell from '../component/Cell';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, LEGEND_TYPES, getPresentationAttributes, findAllByType, filterEventsOfChild, isSsr } from '../util/ReactUtils';
import { polarToCartesian, getMaxRadius } from '../util/PolarUtils';
import { isNumber, getPercentValue, mathSign, interpolateNumber, uniqueId } from '../util/DataUtils';
import { getValueByDataKey } from '../util/ChartUtils';
import { warn } from '../util/LogUtils';

var Pie = pureRender(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Pie, _Component);

  function Pie() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Pie);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pie.__proto__ || Object.getPrototypeOf(Pie)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isAnimationFinished: false, isAnimationStarted: false }, _this.id = uniqueId('recharts-pie-'), _this.cachePrevData = function (sectors) {
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
      if (React.isValidElement(option)) {
        return React.cloneElement(option, props);
      } else if (_isFunction(option)) {
        return option(props);
      }

      return React.createElement(Curve, _extends({}, props, { type: 'linear', className: 'recharts-pie-label-line' }));
    }
  }, {
    key: 'renderLabelItem',
    value: function renderLabelItem(option, props, value) {
      if (React.isValidElement(option)) {
        return React.cloneElement(option, props);
      }
      var label = value;
      if (_isFunction(option)) {
        label = option(props);
        if (React.isValidElement(label)) {
          return label;
        }
      }

      return React.createElement(
        Text,
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

      var pieProps = getPresentationAttributes(this.props);
      var customLabelProps = getPresentationAttributes(label);
      var customLabelLineProps = getPresentationAttributes(labelLine);
      var offsetRadius = label && label.offsetRadius || 20;

      var labels = sectors.map(function (entry, i) {
        var midAngle = (entry.startAngle + entry.endAngle) / 2;
        var endPoint = polarToCartesian(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);
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
          points: [polarToCartesian(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint]
        });
        var realDataKey = dataKey;
        // TODO: compatible to lower versions
        if (_isNil(dataKey) && _isNil(valueKey)) {
          realDataKey = 'value';
        } else if (_isNil(dataKey)) {
          realDataKey = valueKey;
        }

        return React.createElement(
          Layer,
          { key: 'label-' + i },
          labelLine && _this2.renderLabelLineItem(labelLine, lineProps),
          _this2.renderLabelItem(label, labelProps, getValueByDataKey(entry, realDataKey))
        );
      });

      return React.createElement(
        Layer,
        { className: 'recharts-pie-labels' },
        labels
      );
    }
  }, {
    key: 'renderSectorItem',
    value: function renderSectorItem(option, props) {
      if (React.isValidElement(option)) {
        return React.cloneElement(option, props);
      } else if (_isFunction(option)) {
        return option(props);
      } else if (_isPlainObject(option)) {
        return React.createElement(Sector, _extends({}, props, option));
      }

      return React.createElement(Sector, props);
    }
  }, {
    key: 'renderSectorsStatically',
    value: function renderSectorsStatically(sectors) {
      var _this3 = this;

      var activeShape = this.props.activeShape;


      return sectors.map(function (entry, i) {
        return React.createElement(
          Layer,
          _extends({
            className: 'recharts-pie-sector'
          }, filterEventsOfChild(_this3.props, entry, i), {
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


      return React.createElement(
        Animate,
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
              var angleIp = interpolateNumber(prev.endAngle - prev.startAngle, entry.endAngle - entry.startAngle);
              var latest = _extends({}, entry, {
                startAngle: curAngle + paddingAngle,
                endAngle: curAngle + angleIp(t) + paddingAngle
              });

              stepData.push(latest);
              curAngle = latest.endAngle;
            } else {
              var endAngle = entry.endAngle,
                  startAngle = entry.startAngle;

              var interpolatorAngle = interpolateNumber(0, endAngle - startAngle);
              var deltaAngle = interpolatorAngle(t);
              var _latest = _extends({}, entry, {
                startAngle: curAngle + paddingAngle,
                endAngle: curAngle + deltaAngle + paddingAngle
              });

              stepData.push(_latest);
              curAngle = _latest.endAngle;
            }
          });

          return React.createElement(
            Layer,
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


      if (isAnimationActive && sectors && sectors.length && (!prevSectors || !_isEqual(prevSectors, sectors))) {
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


      if (hide || !sectors || !sectors.length || !isNumber(cx) || !isNumber(cy) || !isNumber(innerRadius) || !isNumber(outerRadius)) {
        return null;
      }

      var isAnimationFinished = this.state.isAnimationFinished;

      var layerClass = classNames('recharts-pie', className);

      return React.createElement(
        Layer,
        { className: layerClass },
        React.createElement(
          'g',
          { clipPath: 'url(#' + (_isNil(id) ? this.id : id) + ')' },
          this.renderSectors()
        ),
        label && this.renderLabels(sectors),
        Label.renderCallByParent(this.props, null, false),
        (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, sectors, false)
      );
    }
  }]);

  return Pie;
}(Component), _class2.displayName = 'Pie', _class2.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, {
  className: PropTypes.string,
  animationId: PropTypes.number,
  cx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cy: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  startAngle: PropTypes.number,
  endAngle: PropTypes.number,
  paddingAngle: PropTypes.number,
  innerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  outerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cornerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]).isRequired,
  nameKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]),
  valueKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]),
  data: PropTypes.arrayOf(PropTypes.object),
  minAngle: PropTypes.number,
  legendType: PropTypes.oneOf(LEGEND_TYPES),
  maxRadius: PropTypes.number,

  sectors: PropTypes.arrayOf(PropTypes.object),
  hide: PropTypes.bool,
  labelLine: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.element, PropTypes.bool]),
  label: PropTypes.oneOfType([PropTypes.shape({
    offsetRadius: PropTypes.number
  }), PropTypes.func, PropTypes.element, PropTypes.bool]),
  activeShape: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.element]),
  activeIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

  isAnimationActive: PropTypes.bool,
  animationBegin: PropTypes.number,
  animationDuration: PropTypes.number,
  animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'spring', 'linear']),
  id: PropTypes.string
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
  isAnimationActive: !isSsr(),
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: 'ease',
  nameKey: 'name'
}, _class2.parseDeltaAngle = function (_ref3) {
  var startAngle = _ref3.startAngle,
      endAngle = _ref3.endAngle;

  var sign = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);

  return sign * deltaAngle;
}, _class2.getRealPieData = function (item) {
  var _item$props = item.props,
      data = _item$props.data,
      children = _item$props.children;

  var presentationProps = getPresentationAttributes(item.props);
  var cells = findAllByType(children, Cell);

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

  var maxPieRadius = getMaxRadius(width, height);
  var cx = left + getPercentValue(item.props.cx, width, width / 2);
  var cy = top + getPercentValue(item.props.cy, height, height / 2);
  var innerRadius = getPercentValue(item.props.innerRadius, maxPieRadius, 0);
  var outerRadius = getPercentValue(item.props.outerRadius, maxPieRadius, maxPieRadius * 0.8);
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

  if (_isNil(dataKey) && _isNil(valueKey)) {
    warn(false, 'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0');
    realDataKey = 'value';
  } else if (_isNil(dataKey)) {
    warn(false, 'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0');
    realDataKey = valueKey;
  }

  var sum = pieData.reduce(function (result, entry) {
    var val = getValueByDataKey(entry, realDataKey, 0);
    return result + (isNumber(val) ? val : 0);
  }, 0);
  var sectors = void 0;

  if (sum > 0) {
    var prev = void 0;
    sectors = pieData.map(function (entry, i) {
      var val = getValueByDataKey(entry, realDataKey, 0);
      var name = getValueByDataKey(entry, nameKey, i);
      var percent = (isNumber(val) ? val : 0) / sum;
      var tempStartAngle = void 0;

      if (i) {
        tempStartAngle = prev.endAngle + mathSign(deltaAngle) * paddingAngle;
      } else {
        tempStartAngle = startAngle;
      }

      var tempEndAngle = tempStartAngle + mathSign(deltaAngle) * (minAngle + percent * realTotalAngle);
      var midAngle = (tempStartAngle + tempEndAngle) / 2;
      var middleRadius = (coordinate.innerRadius + coordinate.outerRadius) / 2;
      var tooltipPayload = [{ name: name, value: val, payload: entry }];
      var tooltipPosition = polarToCartesian(coordinate.cx, coordinate.cy, middleRadius, midAngle);

      prev = _extends({
        percent: percent, cornerRadius: cornerRadius, name: name, tooltipPayload: tooltipPayload, midAngle: midAngle, middleRadius: middleRadius, tooltipPosition: tooltipPosition
      }, entry, coordinate, {
        value: getValueByDataKey(entry, realDataKey),
        startAngle: tempStartAngle,
        endAngle: tempEndAngle,
        payload: entry,
        paddingAngle: mathSign(deltaAngle) * paddingAngle
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

export default Pie;