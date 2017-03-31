import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';
import Smooth from 'react-smooth';
import Surface from '../container/Surface';
import Layer from '../container/Layer';
import Tooltip from '../component/Tooltip';
import Legend from '../component/Legend';
import Curve from '../shape/Curve';
import Cross from '../shape/Cross';
import Dot from '../shape/Dot';
import Rectangle from '../shape/Rectangle';

import { warn } from '../util/LogUtils';
import { findAllByType, findChildByType, getDisplayName,
  getPresentationAttributes, validateWidthHeight, isChildrenEqual,
  renderByOrder, getReactEventByType, filterEventAttributes } from '../util/ReactUtils';

import CartesianAxis from '../cartesian/CartesianAxis';
import XAxis from '../cartesian/XAxis';
import YAxis from '../cartesian/YAxis';
import ZAxis from '../cartesian/ZAxis';
import Brush from '../cartesian/Brush';
import { getOffset, calculateChartCoordinate } from '../util/DOMUtils';
import { parseSpecifiedDomain, getAnyElementOfObject, hasDuplicate,
  combineEventHandlers, parseScale, getValueByDataKey, uniqueId,
  getStackGroupsByAxisId, isNumber, getBandSizeOfAxis, checkDomainOfScale } from '../util/DataUtils';
import { calculateActiveTickIndex,
  detectReferenceElementsDomain, getMainColorOfGraphicItem, getDomainOfStackGroups,
  getDomainOfDataByKey, getLegendProps, getDomainOfItemsWithSameAxis, getCoordinatesOfGrid,
  getTicksOfAxis, isCategorialAxis, getTicksOfScale,
  appendOffsetOfLegend, getBarSizeList, getBarPosition, getStackedDataOfItem,
} from '../util/CartesianUtils';
import { shallowEqual } from '../util/PureRender';
import { eventCenter, SYNC_EVENT } from '../util/Events';
import { getComposeFnOfItem } from './composedDataUtils';

const ORIENT_MAP = {
  xAxis: ['bottom', 'top'],
  yAxis: ['left', 'right'],
};

const originCoordinate = { x: 0, y: 0 };

const generateCategoricalChart = (chartName, GraphicalChild, eventType = 'axis') => {
  class CategoricalChartWrapper extends Component {
    static displayName = chartName;

    static propTypes = {
      syncId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      compact: PropTypes.bool,
      width: PropTypes.number,
      height: PropTypes.number,
      data: PropTypes.arrayOf(PropTypes.object),
      layout: PropTypes.oneOf(['horizontal', 'vertical']),
      stackOffset: PropTypes.oneOf(['sign', 'expand', 'none', 'wiggle', 'silhouette']),
      throttleDelay: PropTypes.number,
      margin: PropTypes.shape({
        top: PropTypes.number,
        right: PropTypes.number,
        bottom: PropTypes.number,
        left: PropTypes.number,
      }),
      barCategoryGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      barGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      barSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      maxBarSize: PropTypes.number,
      style: PropTypes.object,
      className: PropTypes.string,
      children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
      ]),
      onClick: PropTypes.func,
      onMouseLeave: PropTypes.func,
      onMouseEnter: PropTypes.func,
      onMouseMove: PropTypes.func,
      onMouseDown: PropTypes.func,
      onMouseUp: PropTypes.func,
    };

    static defaultProps = {
      layout: 'horizontal',
      stackOffset: 'none',
      barCategoryGap: '10%',
      barGap: 4,
      margin: { top: 5, right: 5, bottom: 5, left: 5 },
    };

     /**
     * Returns default, reset state for the categorical chart.
     * @param {Object} props Props object to use when creating the default state
     * @return {Object} Whole new state
     */
    static createDefaultState = (props) => {
      const { children } = props;
      const brushItem = findChildByType(children, Brush);
      const startIndex = (brushItem && brushItem.props && brushItem.props.startIndex) || 0;
      const endIndex = (brushItem && brushItem.props && brushItem.props.endIndex)
      || ((props.data && (props.data.length - 1)) || 0);
      return {
        chartX: 0,
        chartY: 0,
        dataStartIndex: startIndex,
        dataEndIndex: endIndex,
        activeTooltipIndex: -1,
        isTooltipActive: false,
      };
    };

    static hasBar = (graphicalItems) => {
      if (!graphicalItems || !graphicalItems.length) { return false; }

      return graphicalItems.some((item) => {
        const name = getDisplayName(item && item.type);

        return name && name.indexOf('Bar') >= 0;
      });
    };

    static getDisplayedData = (props, { graphicalItems, dataStartIndex, dataEndIndex }, item) => {
      const { data } = props;

      if (data && data.length && isNumber(dataStartIndex) && isNumber(dataEndIndex)) {
        return data.slice(dataStartIndex, dataEndIndex + 1);
      }

      if (item && item.props) {
        return item.props.data || [];
      }

      return graphicalItems.reduce((result, child) => {
        const itemData = child.props.data;

        if (itemData && itemData.length) {
          return [...result, ...itemData];
        }

        return result;
      }, []);
    };

    /**
     * Calculate the scale function, position, width, height of axes
     * @param  {Object} props    Latest props
     * @param  {Object} axisMap  The configuration of axes
     * @param  {Object} offset   The offset of main part in the svg element
     * @param  {Object} axisType The type of axes, x-axis or y-axis
     * @return {Object} Configuration
     */
    static getFormatAxisMap = (props, axisMap, offset, axisType) => {
      const { width, height, layout } = props;
      const ids = Object.keys(axisMap);
      const steps = {
        left: offset.left,
        leftMirror: offset.left,
        right: width - offset.right,
        rightMirror: width - offset.right,
        top: offset.top,
        topMirror: offset.top,
        bottom: height - offset.bottom,
        bottomMirror: height - offset.bottom,
      };

      return ids.reduce((result, id) => {
        const axis = axisMap[id];
        const { orientation, domain, padding = {}, mirror, reversed } = axis;
        const offsetKey = `${orientation}${mirror ? 'Mirror' : ''}`;

        let range, x, y, needSpace;

        if (axisType === 'xAxis') {
          range = [
            offset.left + (padding.left || 0),
            offset.left + offset.width - (padding.right || 0),
          ];
        } else if (axisType === 'yAxis') {
          range = layout === 'horizontal' ? [
            offset.top + offset.height - (padding.bottom || 0),
            offset.top + (padding.top || 0),
          ] : [
            offset.top + (padding.top || 0),
            offset.top + offset.height - (padding.bottom || 0),
          ];
        } else {
          range = axis.range;
        }

        if (reversed) {
          range = [range[1], range[0]];
        }

        const scale = parseScale(axis, chartName);
        scale.domain(domain).range(range);
        checkDomainOfScale(scale);
        const ticks = getTicksOfScale(scale, axis);

        if (axisType === 'xAxis') {
          needSpace = (orientation === 'top' && !mirror) || (orientation === 'bottom' && mirror);
          x = offset.left;
          y = steps[offsetKey] - needSpace * axis.height;
        } else if (axisType === 'yAxis') {
          needSpace = (orientation === 'left' && !mirror) || (orientation === 'right' && mirror);
          x = steps[offsetKey] - needSpace * axis.width;
          y = offset.top;
        }

        const finalAxis = {
          ...axis,
          ...ticks,
          x, y, scale,
          width: axisType === 'xAxis' ? offset.width : axis.width,
          height: axisType === 'yAxis' ? offset.height : axis.height,
        };
        if (!axis.hide && axisType === 'xAxis') {
          steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.height;
        } else if (!axis.hide) {
          steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.width;
        }

        return { ...result, [id]: finalAxis };
      }, {});
    };

    constructor(props) {
      super(props);

      const defaultState = this.constructor.createDefaultState(props);
      this.state = { ...defaultState, updateId: 0,
        ...this.updateStateOfAxisMapsOffsetAndStackGroups({ props, ...defaultState }) };
      this.validateAxes();
      this.uniqueChartId = uniqueId('recharts');

      if (props.throttleDelay) {
        this.triggeredAfterMouseMove = _.throttle(this.triggeredAfterMouseMove,
          props.throttleDelay);
      }
    }

    /* eslint-disable  react/no-did-mount-set-state */
    componentDidMount() {
      if (!_.isNil(this.props.syncId)) {
        this.addListener();
      }
    }

    componentWillReceiveProps(nextProps) {
      const { data, children, width, height, layout, stackOffset, margin } = this.props;

      if (nextProps.data !== data || nextProps.width !== width ||
        nextProps.height !== height || nextProps.layout !== layout ||
        nextProps.stackOffset !== stackOffset || !shallowEqual(nextProps.margin, margin)) {
        const defaultState = this.constructor.createDefaultState(nextProps);
        this.setState({ ...defaultState, updateId: this.state.updateId + 1,
          ...this.updateStateOfAxisMapsOffsetAndStackGroups(
            { props: nextProps, ...defaultState }) }
        );
      } else if (!isChildrenEqual(nextProps.children, children)) {
        const { dataStartIndex, dataEndIndex } = this.state;
        // Don't update brush
        const defaultState = {
          ...this.constructor.createDefaultState(nextProps), dataEndIndex, dataStartIndex,
        };
        this.setState({ ...defaultState,
          ...this.updateStateOfAxisMapsOffsetAndStackGroups(
            { props: nextProps, ...defaultState }) }
        );
      }
      // add syncId
      if (_.isNil(this.props.syncId) && !_.isNil(nextProps.syncId)) {
        this.addListener();
      }
      // remove syncId
      if (!_.isNil(this.props.syncId) && _.isNil(nextProps.syncId)) {
        this.removeListener();
      }
    }

    componentWillUnmount() {
      if (!_.isNil(this.props.syncId)) {
        this.removeListener();
      }
      if (typeof this.triggeredAfterMouseMove.cancel === 'function') {
        this.triggeredAfterMouseMove.cancel();
      }
    }
    /**
   * Get the configuration of all x-axis or y-axis
   * @param  {Object} props          Latest props
   * @param  {String} axisType       The type of axis
   * @param  {Array}  graphicalItems The instances of item
   * @param  {Object} stackGroups    The items grouped by axisId and stackId
   * @param {Number} dataStartIndex  The start index of the data series when a brush is applied
   * @param {Number} dataEndIndex    The end index of the data series when a brush is applied
   * @return {Object}          Configuration
   */
    getAxisMap(props, { axisType = 'xAxis', AxisComp, graphicalItems, stackGroups, dataStartIndex,
      dataEndIndex }) {
      const { children } = props;
      const axisIdKey = `${axisType}Id`;
      // Get all the instance of Axis
      const axes = findAllByType(children, AxisComp);

      let axisMap = {};

      if (axes && axes.length) {
        axisMap = this.getAxisMapByAxes(props, { axes, graphicalItems, axisType, axisIdKey,
          stackGroups, dataStartIndex, dataEndIndex });
      } else if (graphicalItems && graphicalItems.length) {
        axisMap = this.getAxisMapByItems(props, {
          Axis: AxisComp,
          graphicalItems, axisType, axisIdKey, stackGroups, dataStartIndex, dataEndIndex });
      }

      return axisMap;
    }
    /**
     * Get the configuration of axis by the options of axis instance
     * @param  {Object} props         Latest props
     * @param {Array}  axes           The instance of axes
     * @param  {Array} graphicalItems The instances of item
     * @param  {String} axisType      The type of axis, xAxis - x-axis, yAxis - y-axis
     * @param  {String} axisIdKey     The unique id of an axis
     * @param  {Object} stackGroups   The items grouped by axisId and stackId
     * @param {Number} dataStartIndex The start index of the data series when a brush is applied
     * @param {Number} dataEndIndex   The end index of the data series when a brush is applied
     * @return {Object}      Configuration
     */
    getAxisMapByAxes(props, { axes, graphicalItems, axisType, axisIdKey,
      stackGroups, dataStartIndex, dataEndIndex }) {
      const { layout, children, stackOffset } = props;
      const displayedData = this.constructor.getDisplayedData(props, {
        graphicalItems, dataStartIndex, dataEndIndex,
      });
      const len = displayedData.length;
      const isCategorial = isCategorialAxis(layout, axisType);

      // Eliminate duplicated axes
      const axisMap = axes.reduce((result, child) => {
        const { type, dataKey, allowDataOverflow, scale } = child.props;
        const axisId = child.props[axisIdKey];

        if (!result[axisId]) {
          let domain, duplicateDomain, categoricalDomain;

          if (dataKey) {
            domain = getDomainOfDataByKey(displayedData, dataKey, type);

            if (type === 'category' && isCategorial) {
              const duplicate = hasDuplicate(domain);
              duplicateDomain = duplicate ? domain : null;

              // When category axis has duplicated text, serial numbers are used to generate scale
              domain = duplicate ? _.range(0, len) : domain;
            } else if (type === 'category') {
              // eliminate undefined or null or empty string
              domain = domain.filter(entry => (entry !== '' && !_.isNil(entry)));
            }

            if (isCategorial && (type === 'number' || scale !== 'auto')) {
              categoricalDomain = getDomainOfDataByKey(displayedData, dataKey, 'category');
            }
          } else if (isCategorial) {
            domain = _.range(0, len);
          } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack
            && type === 'number') {
            // when stackOffset is 'expand', the domain may be calculated as [0, 1.000000000002]
            domain = stackOffset === 'expand' ? [0, 1] : getDomainOfStackGroups(
              stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex
            );
          } else {
            domain = getDomainOfItemsWithSameAxis(
              displayedData,
              graphicalItems.filter(item => (
                item.props[axisIdKey] === axisId && !item.props.hide
              )),
              type,
              true
            );
          }
          if (type === 'number') {
            // To detect wether there is any reference lines whose props alwaysShow is true
            domain = detectReferenceElementsDomain(children, domain, axisId, axisType);

            if (child.props.domain) {
              domain = parseSpecifiedDomain(child.props.domain, domain, allowDataOverflow);
            }
          }

          return {
            ...result,
            [axisId]: {
              ...child.props,
              axisType,
              domain,
              categoricalDomain,
              duplicateDomain,
              originalDomain: child.props.domain,
              isCategorial,
            },
          };
        }

        return result;
      }, {});
      return axisMap;
    }
    /**
     * Get the configuration of axis by the options of item,
     * this kind of axis does not display in chart
     * @param  {Object} props         Latest props
     * @param  {Array} graphicalItems The instances of item
     * @param  {ReactElement} Axis    Axis Component
     * @param  {String} axisType      The type of axis, xAxis - x-axis, yAxis - y-axis
     * @param  {String} axisIdKey     The unique id of an axis
     * @param  {Object} stackGroups   The items grouped by axisId and stackId
     * @param {Number} dataStartIndex The start index of the data series when a brush is applied
     * @param {Number} dataEndIndex   The end index of the data series when a brush is applied
     * @return {Object}               Configuration
     */
    getAxisMapByItems(props, { graphicalItems, Axis, axisType, axisIdKey,
      stackGroups, dataStartIndex, dataEndIndex }) {
      const { layout, children } = props;
      const displayedData = this.constructor.getDisplayedData(props, {
        graphicalItems, dataStartIndex, dataEndIndex,
      });
      const len = displayedData.length;
      const isCategorial = isCategorialAxis(layout, axisType);
      let index = -1;

      // The default type of x-axis is category axis,
      // The default contents of x-axis is the serial numbers of data
      // The default type of y-axis is number axis
      // The default contents of y-axis is the domain of data
      const axisMap = graphicalItems.reduce((result, child) => {
        const axisId = child.props[axisIdKey];

        if (!result[axisId]) {
          index++;
          let domain;

          if (isCategorial) {
            domain = _.range(0, len);
          } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack) {
            domain = getDomainOfStackGroups(
              stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex
            );
            domain = detectReferenceElementsDomain(children, domain, axisId, axisType);
          } else {
            domain = parseSpecifiedDomain(Axis.defaultProps.domain,
              getDomainOfItemsWithSameAxis(
                displayedData,
                graphicalItems.filter(item => (
                  item.props[axisIdKey] === axisId && !item.props.hide
                )),
                'number'
              ),
              Axis.defaultProps.allowDataOverflow
            );
            domain = detectReferenceElementsDomain(children, domain, axisId, axisType);
          }

          return {
            ...result,
            [axisId]: {
              axisType,
              ...Axis.defaultProps,
              hide: true,
              orientation: ORIENT_MAP[axisType] && ORIENT_MAP[axisType][index % 2],
              domain,
              originalDomain: Axis.defaultProps.domain,
              isCategorial,
            },
          };
        }

        return result;
      }, {});

      return axisMap;
    }
    /**
     * Get the information of mouse in chart, return null when the mouse is not in the chart
     * @param  {Object} event    The event object
     * @return {Object}          Mouse data
     */
    getMouseInfo(event) {
      if (!this.container) { return null; }

      const { offset, xAxisMap, yAxisMap } = this.state;
      const containerOffset = getOffset(this.container);
      const e = calculateChartCoordinate(event, containerOffset);
      const isIn = e.chartX >= offset.left
        && e.chartX <= offset.left + offset.width
        && e.chartY >= offset.top
        && e.chartY <= offset.top + offset.height;

      if (!isIn) { return null; }

      const xScale = getAnyElementOfObject(xAxisMap).scale;
      const yScale = getAnyElementOfObject(yAxisMap).scale;
      const xValue = xScale && xScale.invert ? xScale.invert(e.chartX) : null;
      const yValue = yScale && yScale.invert ? yScale.invert(e.chartY) : null;

      if (eventType !== 'axis') {
        return { ...e, xValue, yValue };
      }

      const { layout } = this.props;
      const { orderedTooltipTicks: ticks, tooltipAxis: axis, tooltipTicks } = this.state;
      const pos = layout === 'horizontal' ? e.chartX : e.chartY;
      const activeIndex = calculateActiveTickIndex(pos, ticks, axis);

      if (activeIndex >= 0) {
        const activeLabel = tooltipTicks[activeIndex] && tooltipTicks[activeIndex].value;
        const activePayload = this.getTooltipContent(activeIndex);
        const activeCoordinate = tooltipTicks[activeIndex] ? {
          x: layout === 'horizontal' ? tooltipTicks[activeIndex].coordinate : e.chartX,
          y: layout === 'horizontal' ? e.chartY : tooltipTicks[activeIndex].coordinate,
        } : originCoordinate;

        return {
          ...e,
          activeTooltipIndex: activeIndex,
          activeLabel,
          activePayload,
          activeCoordinate,
        };
      }

      return null;
    }
    /**
     * Get the content to be displayed in the tooltip
     * @param  {Number} activeIndex    Active index of data
     * @return {Array}                 The content of tooltip
     */
    getTooltipContent(activeIndex) {
      const { graphicalItems } = this.state;
      const displayedData = this.constructor.getDisplayedData(this.props, this.state);

      if (activeIndex < 0 || !graphicalItems || !graphicalItems.length
        || activeIndex >= displayedData.length) {
        return null;
      }

      return graphicalItems.reduce((result, child) => {
        const { hide } = child.props;
        if (hide) { return result; }

        const { dataKey, name, unit, formatter } = child.props;

        return [...result, {
          ...getPresentationAttributes(child),
          dataKey, unit, formatter,
          name: name || dataKey,
          color: getMainColorOfGraphicItem(child),
          value: getValueByDataKey(displayedData[activeIndex], dataKey),
          payload: displayedData[activeIndex],
        }];
      }, []);
    }

    getFormatItems(props, { graphicalItems, stackGroups, xAxisMap, yAxisMap,
      zAxisMap, offset, dataStartIndex, dataEndIndex }) {
      const { barSize, layout, barGap, barCategoryGap, maxBarSize: globalMaxBarSize } = props;
      const hasBar = this.constructor.hasBar(graphicalItems);
      const sizeList = hasBar && getBarSizeList({ barSize, stackGroups });
      const formatedItems = [];

      graphicalItems.forEach((item, index) => {
        const displayedData = this.constructor.getDisplayedData(
          props, { dataStartIndex, dataEndIndex }, item
        );
        const { xAxisId, yAxisId, zAxisId, dataKey, maxBarSize: childMaxBarSize } = item.props;
        let xAxis, yAxis, zAxis, xTicks, yTicks, barPosition, stackedData, bandSize;

        if (xAxisMap && yAxisMap) {
          xAxis = xAxisMap[xAxisId];
          yAxis = yAxisMap[yAxisId];
          zAxis = (zAxisMap && !_.isNil(zAxisId)) ? zAxisMap[zAxisId] : null;

          xTicks = getTicksOfAxis(xAxis);
          yTicks = getTicksOfAxis(yAxis);

          const numericAxisId = layout === 'horizontal' ? yAxisId : xAxisId;
          const cateAxisId = layout === 'horizontal' ? xAxisId : yAxisId;
          const cateAxis = layout === 'horizontal' ? xAxis : yAxis;
          const cateTicks = layout === 'horizontal' ? xTicks : yTicks;

          stackedData = stackGroups && stackGroups[numericAxisId] &&
            stackGroups[numericAxisId].hasStack &&
            getStackedDataOfItem(item, stackGroups[numericAxisId].stackGroups);

          bandSize = getBandSizeOfAxis(cateAxis, cateTicks);
          const maxBarSize = _.isNil(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
          barPosition = hasBar && getBarPosition({
            barGap, barCategoryGap, bandSize, sizeList: sizeList[cateAxisId], maxBarSize,
          });
        }
        const componsedFn = getComposeFnOfItem(item);

        if (componsedFn) {
          formatedItems.push({
            props: {
              ...componsedFn({
                displayedData, props, xAxis, yAxis, zAxis, xTicks, yTicks, dataKey, item, bandSize,
                barPosition, offset, stackedData, layout, dataStartIndex, dataEndIndex,
                onItemMouseLeave: this.handleItemMouseLeave,
                onItemMouseEnter: this.handleItemMouseEnter,
              }),
              ...offset,
              key: item.key || `item-${index}`,
              xAxis, yAxis,
            },
            item,
          });
        }
      });

      return formatedItems;
    }
    /**
     * The AxisMaps are expensive to render on large data sets
     * so provide the ability to store them in state and only update them when necessary
     * they are dependent upon the start and end index of
     * the brush so it's important that this method is called _after_
     * the state is updated with any new start/end indices
     *
     * @param {Object} props The props object to be used for updating the axismaps
     * @param {Number} dataStartIndex The start index of the data series when a brush is applied
     * @param {Number} dataEndIndex The end index of the data series when a brush is applied
     * @return {Object} state New state to set
     */
    updateStateOfAxisMapsOffsetAndStackGroups({ props, dataStartIndex, dataEndIndex }) {
      if (!validateWidthHeight({ props })) { return null; }

      const { children, layout, stackOffset, data } = props;
      const numericIdName = layout === 'horizontal' ? 'yAxis' : 'xAxis';
      const cateIdName = layout === 'horizontal' ? 'xAxis' : 'yAxis';
      const graphicalItems = findAllByType(children, GraphicalChild);
      const stackGroups = getStackGroupsByAxisId(
        data, graphicalItems, `${numericIdName}Id`, `${cateIdName}Id`, stackOffset
      );

      let xAxisMap = this.getAxisMap(props, {
        AxisComp: XAxis,
        axisType: 'xAxis',
        graphicalItems,
        stackGroups: numericIdName === 'xAxis' && stackGroups,
        dataStartIndex,
        dataEndIndex,
      });

      let yAxisMap = this.getAxisMap(props, {
        AxisComp: YAxis,
        axisType: 'yAxis',
        graphicalItems,
        stackGroups: numericIdName === 'yAxis' && stackGroups,
        dataStartIndex,
        dataEndIndex,
      });

      let zAxisMap = this.getAxisMap(props, {
        AxisComp: ZAxis,
        axisType: 'zAxis',
        graphicalItems,
        dataStartIndex,
        dataEndIndex,
      });

      const offset = this.calculateOffset(props, graphicalItems, xAxisMap, yAxisMap);

      xAxisMap = this.constructor.getFormatAxisMap(props, xAxisMap, offset, 'xAxis');
      yAxisMap = this.constructor.getFormatAxisMap(props, yAxisMap, offset, 'yAxis');
      zAxisMap = this.constructor.getFormatAxisMap(props, zAxisMap, offset, 'zAxis');

      const ticksObj = this.tooltipTicksGenerator({
        layout, xAxisMap, yAxisMap,
      });

      const formatedGraphicalItems = this.getFormatItems(props, {
        dataStartIndex, dataEndIndex,
        graphicalItems, stackGroups, xAxisMap, yAxisMap, zAxisMap, offset,
      });

      return {
        formatedGraphicalItems, graphicalItems, xAxisMap, yAxisMap, zAxisMap,
        offset, stackGroups, ...ticksObj,
      };
    }

    /* eslint-disable  no-underscore-dangle */
    addListener() {
      eventCenter.on(SYNC_EVENT, this.handleReceiveSyncEvent);

      if (eventCenter.setMaxListeners && eventCenter._maxListeners) {
        eventCenter.setMaxListeners(eventCenter._maxListeners + 1);
      }
    }
    removeListener() {
      eventCenter.removeListener(SYNC_EVENT, this.handleReceiveSyncEvent);

      if (eventCenter.setMaxListeners && eventCenter._maxListeners) {
        eventCenter.setMaxListeners(eventCenter._maxListeners - 1);
      }
    }
    /**
     * Calculate the offset of main part in the svg element
     * @param  {Object} props          Latest props
     * @param  {Array}  graphicalItems The instances of item
     * @param  {Object} xAxisMap       The configuration of x-axis
     * @param  {Object} yAxisMap       The configuration of y-axis
     * @return {Object} The offset of main part in the svg element
     */
    calculateOffset(props, graphicalItems, xAxisMap, yAxisMap) {
      const { width, height, children } = props;
      const margin = props.margin || {};
      const brushItem = findChildByType(children, Brush);
      const legendItem = findChildByType(children, Legend);

      const offsetH = Object.keys(yAxisMap).reduce((result, id) => {
        const entry = yAxisMap[id];
        const orientation = entry.orientation;

        if (!entry.mirror && !entry.hide) {
          return { ...result, [orientation]: result[orientation] + entry.width };
        }

        return result;
      }, { left: margin.left || 0, right: margin.right || 0 });

      const offsetV = Object.keys(xAxisMap).reduce((result, id) => {
        const entry = xAxisMap[id];
        const orientation = entry.orientation;

        if (!entry.mirror && !entry.hide) {
          return { ...result, [orientation]: result[orientation] + entry.height };
        }

        return result;
      }, { top: margin.top || 0, bottom: margin.bottom || 0 });

      let offset = { ...offsetV, ...offsetH };

      const brushBottom = offset.bottom;

      if (brushItem) {
        offset.bottom += brushItem.props.height || Brush.defaultProps.height;
      }

      if (legendItem && this.legendInstance) {
        const legendBox = this.legendInstance.getBBox();
        offset = appendOffsetOfLegend(offset, graphicalItems, props, legendBox);
      }

      return {
        brushBottom,
        ...offset,
        width: width - offset.left - offset.right,
        height: height - offset.top - offset.bottom,
      };
    }

    handleLegendBBoxUpdate = (box) => {
      if (box && this.legendInstance) {
        const { dataStartIndex, dataEndIndex } = this.state;

        this.setState(
          this.updateStateOfAxisMapsOffsetAndStackGroups({
            props: this.props, dataStartIndex, dataEndIndex,
          })
        );
      }
    };

    handleReceiveSyncEvent = (cId, chartId, data) => {
      const { syncId, layout } = this.props;

      if (syncId === cId && chartId !== this.uniqueChartId) {
        const { dataStartIndex, dataEndIndex } = data;

        if (!_.isNil(data.dataStartIndex) || !_.isNil(data.dataEndIndex)) {
          this.setState({
            dataStartIndex,
            dataEndIndex,
            ...this.updateStateOfAxisMapsOffsetAndStackGroups(
              { props: this.props, dataStartIndex, dataEndIndex }
            ),
          });
        } else if (!_.isNil(data.activeTooltipIndex)) {
          const { chartX, chartY, activeTooltipIndex } = data;
          const { offset, tooltipTicks } = this.state;
          if (!offset) { return; }
          const viewBox = { ...offset, x: offset.left, y: offset.top };
          // When a categotical chart is combined with another chart, the value of chartX
          // and chartY may beyond the boundaries.
          const validateChartX = Math.min(chartX, viewBox.x + viewBox.width);
          const validateChartY = Math.min(chartY, viewBox.y + viewBox.height);
          const activeLabel = tooltipTicks[activeTooltipIndex] &&
            tooltipTicks[activeTooltipIndex].value;
          const activePayload = this.getTooltipContent(activeTooltipIndex);
          const activeCoordinate = tooltipTicks[activeTooltipIndex] ? {
            x: layout === 'horizontal' ? tooltipTicks[activeTooltipIndex].coordinate : validateChartX,
            y: layout === 'horizontal' ? validateChartY : tooltipTicks[activeTooltipIndex].coordinate,
          } : originCoordinate;

          this.setState({ ...data, activeLabel, activeCoordinate, activePayload });
        } else {
          this.setState(data);
        }
      }
    };

    handleBrushChange = ({ startIndex, endIndex }) => {
      // Only trigger changes if the extents of the brush have actually changed
      if (startIndex !== this.state.dataStartIndex || endIndex !== this.state.dataEndIndex) {
        this.setState({
          dataStartIndex: startIndex,
          dataEndIndex: endIndex,
          ...this.updateStateOfAxisMapsOffsetAndStackGroups(
            { props: this.props, dataStartIndex: startIndex, dataEndIndex: endIndex }
          ),
        });

        this.triggerSyncEvent({
          dataStartIndex: startIndex,
          dataEndIndex: endIndex,
        });
      }
    };
    /**
     * The handler of mouse entering chart
     * @param  {Object} e              Event object
     * @return {Null}                  null
     */
    handleMouseEnter = (e) => {
      const { onMouseEnter } = this.props;
      const mouse = this.getMouseInfo(e);

      if (mouse) {
        const nextState = { ...mouse, isTooltipActive: true };
        this.setState(nextState);
        this.triggerSyncEvent(nextState);

        if (_.isFunction(onMouseEnter)) {
          onMouseEnter(nextState, e);
        }
      }
    };

    triggeredAfterMouseMove = (e) => {
      const { onMouseMove } = this.props;
      const mouse = this.getMouseInfo(e);
      const nextState = mouse ? { ...mouse, isTooltipActive: true } : { isTooltipActive: false };

      this.setState(nextState);
      this.triggerSyncEvent(nextState);

      if (_.isFunction(onMouseMove)) {
        onMouseMove(nextState, e);
      }
    }
    /**
     * The handler of mouse entering a scatter
     * @param {Object} el     The active scatter
     * @return {Object} no return
     */
    handleItemMouseEnter = (el) => {
      this.setState({
        isTooltipActive: true,
        activeItem: el,
        activePayload: el.tooltipPayload,
        activeCoordinate: { x: el.cx, y: el.cy },
      });
    };
    /**
     * The handler of mouse leaving a scatter
     * @return {Object} no return
     */
    handleItemMouseLeave = () => {
      this.setState({
        isTooltipActive: false,
      });
    };
    /**
     * The handler of mouse moving in chart
     * @param  {Object} e        Event object
     * @return {Null} no return
     */
    handleMouseMove = (e) => {
      if (e && _.isFunction(e.persist)) {
        e.persist();
        this.triggeredAfterMouseMove(e);
      }
    }
    /**
     * The handler if mouse leaving chart
     * @param {Object} e Event object
     * @return {Null} no return
     */
    handleMouseLeave = (e) => {
      const { onMouseLeave } = this.props;
      const nextState = { isTooltipActive: false };

      this.setState(nextState);
      this.triggerSyncEvent(nextState);

      if (_.isFunction(onMouseLeave)) {
        onMouseLeave(nextState, e);
      }
    };

    handleOuterEvent = (e) => {
      const eventName = getReactEventByType(e);

      if (eventName && _.isFunction(this.props[eventName])) {
        const mouse = this.getMouseInfo(e);
        const handler = this.props[eventName];

        handler(mouse);
      }
    };

    handleClick = (e) => {
      const { onClick } = this.props;

      if (_.isFunction(onClick)) {
        const mouse = this.getMouseInfo(e);

        onClick(mouse, e);
      }
    };

    handleMouseDown = (e) => {
      const { onMouseDown } = this.props;

      if (_.isFunction(onMouseDown)) {
        const mouse = this.getMouseInfo(e);

        onMouseDown(mouse, e);
      }
    };

    handleMouseUp = (e) => {
      const { onMouseUp } = this.props;

      if (_.isFunction(onMouseUp)) {
        const mouse = this.getMouseInfo(e);

        onMouseUp(mouse, e);
      }
    };

    handleTouchMove = (e) => {
      if (e.changedTouches != null && e.changedTouches.length > 0) {
        this.handleMouseMove(e.changedTouches[0]);
      }
    };

    validateAxes() {
      const { layout, children } = this.props;
      const xAxes = findAllByType(children, XAxis);
      const yAxes = findAllByType(children, YAxis);

      if (layout === 'horizontal' && xAxes && xAxes.length) {
        xAxes.forEach((axis) => {
          warn(axis.props.type === 'category' || (axis.props.type === 'number' &&
            !_.isNil(axis.props.dataKey)),
            `x-axis should be a category axis or a number axis which has specifed dataKey
             when the layout is horizontal`
          );
        });
      } else if (layout === 'vertical') {
        warn(yAxes && yAxes.length,
          `You should add <YAxis type="number" /> in ${chartName}.
           The layout is vertical now, y-axis should be category axis,
           but y-axis is number axis when no YAxis is added.`
        );
        warn(xAxes && xAxes.length,
          `You should add <XAxis /> in ${chartName}.
          The layout is vertical now, x-axis is category when no XAxis is added.`
        );

        if (yAxes && yAxes.length) {
          yAxes.forEach((axis) => {
            warn(axis.props.type === 'category' || (axis.props.type === 'number' &&
              !_.isNil(axis.props.dataKey)),
              `y-axis should be a category axis or a number axis which has specifed dataKey
               when the layout is vertical`
            );
          });
        }
      }

      return null;
    }

    triggerSyncEvent(data) {
      const { syncId } = this.props;

      if (!_.isNil(syncId)) {
        eventCenter.emit(SYNC_EVENT, syncId, this.uniqueChartId, data);
      }
    }

    verticalCoordinatesGenerator = ({ xAxis, width, height, offset }) =>
      getCoordinatesOfGrid(CartesianAxis.getTicks({
        ...CartesianAxis.defaultProps,
        ...xAxis,
        ticks: getTicksOfAxis(xAxis, true),
        viewBox: { x: 0, y: 0, width, height },
      }), offset.left, offset.left + offset.width);

    horizontalCoordinatesGenerator = ({ yAxis, width, height, offset }) =>
      getCoordinatesOfGrid(CartesianAxis.getTicks({
        ...CartesianAxis.defaultProps, ...yAxis,
        ticks: getTicksOfAxis(yAxis, true),
        viewBox: { x: 0, y: 0, width, height },
      }), offset.top, offset.top + offset.height);

    axesTicksGenerator = axis => getTicksOfAxis(axis, true);

    tooltipTicksGenerator = ({ layout, xAxisMap, yAxisMap }) => {
      const axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
      const axis = getAnyElementOfObject(axisMap);
      const tooltipTicks = getTicksOfAxis(axis, false, true);

      return {
        tooltipTicks,
        orderedTooltipTicks: _.sortBy(tooltipTicks, o => o.coordinate),
        tooltipAxis: axis,
        tooltipAxisBandSize: getBandSizeOfAxis(axis),
      };
    }

    filterFormatItem(item) {
      const { formatedGraphicalItems } = this.state;

      for (let i = 0, len = formatedGraphicalItems.length; i < len; i++) {
        const entry = formatedGraphicalItems[i];

        if (entry.item === item) {
          return entry;
        }
      }

      return null;
    }

    renderCursor = (element) => {
      const { isTooltipActive, activeCoordinate, activePayload, offset } = this.state;

      if (!element || !element.props.cursor || !isTooltipActive || !activeCoordinate) {
        return null;
      }
      let restProps;
      let cursorComp = Curve;

      if (chartName === 'ScatterChart') {
        restProps = activeCoordinate;
        cursorComp = Cross;
      } else if (chartName === 'BarChart') {
        restProps = this.getCursorRectangle();
        cursorComp = Rectangle;
      } else {
        restProps = { points: this.getCursorPoints() };
        cursorComp = Curve;
      }
      const key = element.key || '_recharts-cursor';
      const cursorProps = {
        stroke: '#ccc',
        ...offset,
        ...restProps,
        ...getPresentationAttributes(element.props.cursor),
        payload: activePayload,
        key,
        className: 'recharts-tooltip-cursor',
      };

      return React.isValidElement(element.props.cursor) ?
        React.cloneElement(element.props.cursor, cursorProps) :
        React.createElement(cursorComp, cursorProps);
    };

    renderXAxis = (element, displayName, index) => {
      const { xAxisMap } = this.state;
      const axisObj = xAxisMap[element.props.xAxisId];

      return this.renderAxis(axisObj, element, displayName, index);
    };

    renderYAxis = (element, displayName, index) => {
      const { yAxisMap } = this.state;
      const axisObj = yAxisMap[element.props.yAxisId];

      return this.renderAxis(axisObj, element, displayName, index);
    };
    /**
     * Draw axis
     * @param {Object} axisOptions The options of axis
     * @param {Object} element      The axis element
     * @param {String} displayName  The display name of axis
     * @param {Number} index        The index of element
     * @return {ReactElement}       The instance of x-axes
     */
    renderAxis(axisOptions, element, displayName, index) {
      const { width, height } = this.props;

      return (
        <CartesianAxis
          {...axisOptions}
          className={axisOptions.axisType}
          key={element.key || `${displayName}-${index}`}
          viewBox={{ x: 0, y: 0, width, height }}
          ticksGenerator={this.axesTicksGenerator}
        />
      );
    }
    /**
     * Draw grid
     * @param  {ReactElement} element the grid item
     * @return {ReactElement} The instance of grid
     */
    renderGrid = (element) => {
      const { xAxisMap, yAxisMap, offset } = this.state;
      const { width, height } = this.props;
      const xAxis = getAnyElementOfObject(xAxisMap);
      const yAxis = getAnyElementOfObject(yAxisMap);

      return React.cloneElement(element, {
        key: element.key || 'grid',
        x: offset.left,
        y: offset.top,
        width: offset.width,
        height: offset.height,
        xAxis,
        yAxis,
        offset,
        chartWidth: width,
        chartHeight: height,
        verticalCoordinatesGenerator: this.verticalCoordinatesGenerator,
        horizontalCoordinatesGenerator: this.horizontalCoordinatesGenerator,
      });
    };
    /**
     * Draw legend
     * @return {ReactElement}            The instance of Legend
     */
    renderLegend() {
      const { graphicalItems } = this.state;
      const { children, width, height } = this.props;
      const margin = this.props.margin || {};
      const legendWidth = width - (margin.left || 0) - (margin.right || 0);
      const legendHeight = height - (margin.top || 0) - (margin.bottom || 0);
      const props = getLegendProps(children, graphicalItems, legendWidth, legendHeight);

      if (!props) { return null; }

      return React.createElement(Legend, {
        ...props,
        chartWidth: width,
        chartHeight: height,
        margin,
        ref: (legend) => { this.legendInstance = legend; },
        onBBoxUpdate: this.handleLegendBBoxUpdate,
      });
    }
    /**
     * Draw Tooltip
     * @return {ReactElement}  The instance of Tooltip
     */
    renderTooltip() {
      const { children } = this.props;
      const tooltipItem = findChildByType(children, Tooltip);

      if (!tooltipItem) { return null; }

      const { isTooltipActive, activeCoordinate, activePayload,
        activeLabel, offset } = this.state;

      return React.cloneElement(tooltipItem, {
        viewBox: { ...offset, x: offset.left, y: offset.top },
        active: isTooltipActive,
        label: activeLabel,
        payload: isTooltipActive ? activePayload : [],
        coordinate: activeCoordinate,
      });
    }

    renderBrush = (element) => {
      const { margin, data } = this.props;
      const { offset, dataStartIndex, dataEndIndex, updateId } = this.state;

      // TODO: update brush when children update
      return React.cloneElement(element, {
        key: element.key || '_recharts-brush',
        onChange: combineEventHandlers(this.handleBrushChange, null, element.props.onChange),
        data,
        x: offset.left,
        y: offset.top + offset.height + offset.brushBottom - (margin.bottom || 0),
        width: offset.width,
        startIndex: dataStartIndex,
        endIndex: dataEndIndex,
        updateId: `brush-${updateId}`,
      });
    };

    renderReferenceElement = (element, displayName, index) => {
      if (!element) { return null; }
      const { xAxisMap, yAxisMap, offset } = this.state;
      const { xAxisId, yAxisId } = element.props;

      return React.cloneElement(element, {
        key: element.key || `${displayName}-${index}`,
        xAxis: xAxisMap[xAxisId],
        yAxis: yAxisMap[yAxisId],
        viewBox: {
          x: offset.left,
          y: offset.top,
          width: offset.width,
          height: offset.height,
        },
      });
    };

    renderActiveDot(option, props) {
      let dot;

      if (React.isValidElement(option)) {
        dot = React.cloneElement(option, props);
      } else if (_.isFunction(option)) {
        dot = option(props);
      } else {
        dot = <Dot {...props} />;
      }

      return (
        <Smooth
          from="scale(0)"
          to="scale(1)"
          duration={400}
          key={props.key}
          attributeName="transform"
        >
          <Layer style={{ transformOrigin: 'center center' }}>
            {dot}
          </Layer>
        </Smooth>
      );
    }

    renderActivePoints({ item, activePoint, basePoint, childIndex, isRange }) {
      const result = [];
      const { key } = item.props;
      const { activeDot, dataKey } = item.item.props;
      const dotProps = {
        index: childIndex,
        dataKey,
        cx: activePoint.x,
        cy: activePoint.y,
        r: 4,
        fill: getMainColorOfGraphicItem(item.item),
        strokeWidth: 2,
        stroke: '#fff',
        payload: activePoint.payload,
        value: activePoint.value,
        key: `${key}-activePoint-${childIndex}`,
        ...getPresentationAttributes(activeDot),
      };

      result.push(this.renderActiveDot(activeDot, dotProps, childIndex));

      if (basePoint) {
        result.push(this.renderActiveDot(activeDot, {
          ...dotProps,
          cx: basePoint.x,
          cy: basePoint.y,
          key: `${key}-basePoint-${childIndex}`,
        }, childIndex));
      } else if (isRange) {
        result.push(null);
      }

      return result;
    }

    renderGraphicChild = (element) => {
      const item = this.filterFormatItem(element);
      if (!item) { return null; }

      const graphicalItem = React.cloneElement(item.item, item.props);
      const { isTooltipActive, activeTooltipIndex } = this.state;
      const { children } = this.props;
      const tooltipItem = findChildByType(children, Tooltip);
      const { points, isRange, baseLine } = item.props;
      const { activeDot, hide } = item.item.props;
      const hasActive = !hide && isTooltipActive && tooltipItem && activeDot &&
        activeTooltipIndex >= 0 && points[activeTooltipIndex];

      if (hasActive) {
        const activePoint = points[activeTooltipIndex];
        const basePoint = isRange && baseLine && baseLine[activeTooltipIndex];

        return [
          graphicalItem,
          ...this.renderActivePoints({
            item, activePoint, basePoint, childIndex: activeTooltipIndex,
            isRange,
          }),
        ];
      }

      if (isRange) { return [graphicalItem, null, null]; }

      return [graphicalItem, null];
      // return graphicalItem;
    };

    render() {
      if (!validateWidthHeight(this)) { return null; }

      const { children, className, width, height, style, compact, ...others } = this.props;
      const attrs = getPresentationAttributes(others);
      const map = {
        CartesianGrid: { handler: this.renderGrid, once: true },
        ReferenceArea: { handler: this.renderReferenceElement },
        ReferenceLine: { handler: this.renderReferenceElement },
        ReferenceDot: { handler: this.renderReferenceElement },
        XAxis: { handler: this.renderXAxis },
        YAxis: { handler: this.renderYAxis },
        Brush: { handler: this.renderBrush, once: true },
        Bar: { handler: this.renderGraphicChild },
        Line: { handler: this.renderGraphicChild },
        Area: { handler: this.renderGraphicChild },
        'AnimationDecorator(Scatter)': {
          handler: this.renderGraphicChild,
        },
        Tooltip: { handler: this.renderCursor, once: true },
      };

      // The "compact" mode is mainly used as the panorama within Brush
      if (compact) {
        return (
          <Surface {...attrs} width={width} height={height}>
            {
              renderByOrder(children, map)
            }
          </Surface>
        );
      }

      const events = this.parseEventsOfWrapper();
      return (
        <div
          className={classNames('recharts-wrapper', className)}
          style={{ ...style, position: 'relative', cursor: 'default', width, height }}
          {...events}
          ref={(node) => { this.container = node; }}
        >
          <Surface {...attrs} width={width} height={height}>
            {
              renderByOrder(children, map)
            }
          </Surface>
          {this.renderLegend()}
          {this.renderTooltip()}
        </div>
      );
    }
  }

  return CategoricalChartWrapper;
};

export default generateCategoricalChart;