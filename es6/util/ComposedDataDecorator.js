import _isNil from 'lodash/isNil';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from 'react';

import { shallowEqual } from './PureRender';
import { getDisplayName, findAllByType } from './ReactUtils';
import { getStackedDataOfItem, getTicksOfAxis, getBarSizeList, getBarPosition } from './CartesianUtils';
import { getBandSizeOfAxis } from './DataUtils';

/*
 * ComposedDataDecorator is a wrapper component that calculates expensive,
 * reusable data like ticks of an axis, stores it in state on this component,
 * and passes it in as props to the wrapped component.
 */
export default (function (_ref) {
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

          var items = graphicalItems || findAllByType(children, ChildComponent);

          var sizeList = getBarSizeList({ barSize: barSize, stackGroups: stackGroups });

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

              xTicks = getTicksOfAxis(xAxis);
              yTicks = getTicksOfAxis(yAxis);

              // axisTicks is more global - only need to set once
              axisTicks = axisTicks || (layout === 'horizontal' ? xTicks : yTicks);

              var numericAxisId = layout === 'horizontal' ? yAxisId : xAxisId;
              var cateAxisId = layout === 'horizontal' ? xAxisId : yAxisId;
              var cateAxis = layout === 'horizontal' ? xAxis : yAxis;
              var cateTicks = layout === 'horizontal' ? xTicks : yTicks;

              stackedData = stackGroups && stackGroups[numericAxisId] && stackGroups[numericAxisId].hasStack && getStackedDataOfItem(item, stackGroups[numericAxisId].stackGroups);

              bandSize = getBandSizeOfAxis(cateAxis, cateTicks);
              var maxBarSize = _isNil(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
              barPosition = getBarPosition({
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


          if (!shallowEqual(graphicalItems, graphicalItemsOld) || !shallowEqual(children, childrenOld) || !shallowEqual(restNextProps, restOldProps)) {
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

          return !shallowEqual(graphicalItems, graphicalItemsOld) || !shallowEqual(restProps, restPropsOld) || !shallowEqual(nextState, this.state);
        }
      }, {
        key: 'render',
        value: function render() {
          return React.createElement(WrappedComponent, _extends({}, this.props, this.state));
        }
      }]);

      return ComposedDataDecorator;
    }(Component), _class.displayName = 'ComposedDataDecorator(' + getDisplayName(WrappedComponent) + ')', _class.propTypes = _extends({}, WrappedComponent.propTypes, {
      chartX: PropTypes.number,
      chartY: PropTypes.number,
      data: PropTypes.array
    }), _class.defaultProps = WrappedComponent.defaultProps, _temp2;
  };
});