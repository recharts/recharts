'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PureRender = require('./PureRender');

var _ReactUtils = require('./ReactUtils');

var _CartesianUtils = require('./CartesianUtils');

var _DataUtils = require('./DataUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * ComposedDataDecorator is a wrapper component that calculates expensive,
 * reusable data like ticks of an axis, stores it in state on this component,
 * and passes it in as props to the wrapped component.
 */
exports.default = function (_ref) {
  var getComposedData = _ref.getComposedData,
      ChildComponent = _ref.ChildComponent;
  return function (WrappedComponent) {
    var _class, _temp2;

    return _temp2 = _class = function (_Component) {
      _inherits(ComposedDataDecorator, _Component);

      function ComposedDataDecorator() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, ComposedDataDecorator);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = ComposedDataDecorator.__proto__ || Object.getPrototypeOf(ComposedDataDecorator)).call.apply(_ref2, [this].concat(args))), _this), _this.state = _this.calculateExpensiveState({ props: _this.props }), _temp), _possibleConstructorReturn(_this, _ret);
      }

      // static WrappedComponent = WrappedComponent;

      _createClass(ComposedDataDecorator, [{
        key: 'calculateExpensiveState',


        /**
         * @param {Object} props The props object to operate on
         * @return {Object} returnObj
         *  returnObj {Array} axisTicks Used by renderCursor and anything
         *          else that needs the ticks of the axisTicks
         *  returObj {Array} allComposedData An array or arrays.
         *          Each top-level element is the composedData {points, baseLine, layout}
         *          for a given child(graphcalItem) of the overall Chart
         */
        value: function calculateExpensiveState(_ref3) {
          var props = _ref3.props;
          var children = props.children,
              graphicalItems = props.graphicalItems,
              xAxisMap = props.xAxisMap,
              yAxisMap = props.yAxisMap,
              stackGroups = props.stackGroups,
              layout = props.layout,
              offset = props.offset,
              barSize = props.barSize,
              barGap = props.barGap,
              barCategoryGap = props.barCategoryGap,
              globalMaxBarSize = props.maxBarSize;

          // Some charts pre-filter their items into the graphicalItems prop,
          // others filter it in render of the children

          var items = graphicalItems || (0, _ReactUtils.findAllByType)(children, ChildComponent);

          var sizeList = (0, _CartesianUtils.getBarSizeList)({ barSize: barSize, stackGroups: stackGroups });

          var axisTicks = void 0;
          var allComposedData = [];
          items.forEach(function (item) {
            var _item$props = item.props,
                xAxisId = _item$props.xAxisId,
                yAxisId = _item$props.yAxisId,
                dataKey = _item$props.dataKey,
                childMaxBarSize = _item$props.maxBarSize;

            var xAxis = void 0,
                yAxis = void 0,
                xTicks = void 0,
                yTicks = void 0,
                barPosition = void 0,
                stackedData = void 0,
                bandSize = void 0;

            if (xAxisMap || yAxisMap) {

              xAxis = xAxisMap[xAxisId];
              yAxis = yAxisMap[yAxisId];

              xTicks = (0, _CartesianUtils.getTicksOfAxis)(xAxis);
              yTicks = (0, _CartesianUtils.getTicksOfAxis)(yAxis);

              // axisTicks is more global - only need to set once
              axisTicks = axisTicks || (layout === 'horizontal' ? xTicks : yTicks);

              var numericAxisId = layout === 'horizontal' ? yAxisId : xAxisId;
              var cateAxisId = layout === 'horizontal' ? xAxisId : yAxisId;
              var cateAxis = layout === 'horizontal' ? xAxis : yAxis;
              var cateTicks = layout === 'horizontal' ? xTicks : yTicks;

              stackedData = stackGroups && stackGroups[numericAxisId] && stackGroups[numericAxisId].hasStack && (0, _CartesianUtils.getStackedDataOfItem)(item, stackGroups[numericAxisId].stackGroups);

              bandSize = (0, _DataUtils.getBandSizeOfAxis)(cateAxis, cateTicks);
              var maxBarSize = (0, _isNil3.default)(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
              barPosition = (0, _CartesianUtils.getBarPosition)({
                barGap: barGap, barCategoryGap: barCategoryGap, bandSize: bandSize, sizeList: sizeList[cateAxisId], maxBarSize: maxBarSize
              });
            }

            var composedData = getComposedData && getComposedData({ props: props,
              xAxis: xAxis, yAxis: yAxis, xTicks: xTicks, yTicks: yTicks, dataKey: dataKey, item: item, bandSize: bandSize, barPosition: barPosition, offset: offset, stackedData: stackedData
            }) || {};
            allComposedData.push(composedData);
          });

          return { axisTicks: axisTicks, allComposedData: allComposedData };
        }
        /*
        * Update the state of the composedData if anything relevant changed
        */
        /* eslint-disable no-unused-vars */

      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          var graphicalItems = nextProps.graphicalItems,
              children = nextProps.children,
              chartX = nextProps.chartX,
              chartY = nextProps.chartY,
              activeTooltipIndex = nextProps.activeTooltipIndex,
              activeLabel = nextProps.activeLabel,
              activeCoordinate = nextProps.activeCoordinate,
              activePayload = nextProps.activePayload,
              isTooltipActive = nextProps.isTooltipActive,
              restNextProps = _objectWithoutProperties(nextProps, ['graphicalItems', 'children', 'chartX', 'chartY', 'activeTooltipIndex', 'activeLabel', 'activeCoordinate', 'activePayload', 'isTooltipActive']);

          var _props = this.props,
              graphicalItemsOld = _props.graphicalItems,
              childrenOld = _props.children,
              chartXOld = _props.chartX,
              chartYOld = _props.chartY,
              aTIOld = _props.activeTooltipIndex,
              aLOld = _props.activeLabel,
              aCOld = _props.activeCoordinate,
              aPOld = _props.activePayload,
              iTAOld = _props.isTooltipActive,
              restOldProps = _objectWithoutProperties(_props, ['graphicalItems', 'children', 'chartX', 'chartY', 'activeTooltipIndex', 'activeLabel', 'activeCoordinate', 'activePayload', 'isTooltipActive']);

          /* eslint-enable no-unused-vars */


          if (!(0, _PureRender.shallowEqual)(graphicalItems, graphicalItemsOld) || !(0, _PureRender.shallowEqual)(children, childrenOld) || !(0, _PureRender.shallowEqual)(restNextProps, restOldProps)) {
            this.setState(this.calculateExpensiveState({ props: nextProps }));
          }
        }
        /*
         * Ignore the state generated by calculateExpensiveState when determining
         * whether to update
         */

      }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(_ref4, nextState) {
          var graphicalItems = _ref4.graphicalItems,
              restProps = _objectWithoutProperties(_ref4, ['graphicalItems']);

          // props.graphicalItems is sometimes generated every time -
          // check that specially as object equality is likely to fail
          var _props2 = this.props,
              graphicalItemsOld = _props2.graphicalItems,
              restPropsOld = _objectWithoutProperties(_props2, ['graphicalItems']);

          return !(0, _PureRender.shallowEqual)(graphicalItems, graphicalItemsOld) || !(0, _PureRender.shallowEqual)(restProps, restPropsOld) || !(0, _PureRender.shallowEqual)(nextState, this.state);
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, _extends({}, this.props, this.state));
        }
      }]);

      return ComposedDataDecorator;
    }(_react.Component), _class.displayName = 'ComposedDataDecorator(' + (0, _ReactUtils.getDisplayName)(WrappedComponent) + ')', _class.propTypes = _extends({}, WrappedComponent.propTypes, {
      chartX: _react.PropTypes.number,
      chartY: _react.PropTypes.number,
      data: _react.PropTypes.array
    }), _class.defaultProps = WrappedComponent.defaultProps, _temp2;
  };
};