import React, { Component, PropTypes, Children } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import Surface from '../container/Surface';
import Layer from '../container/Layer';
import Tooltip from '../component/Tooltip';
import Legend from '../component/Legend';

import { warn } from '../util/LogUtils';
import { findAllByType, findChildByType, filterSvgElements, getDisplayName,
  getPresentationAttributes, validateWidthHeight, isChildrenEqual } from '../util/ReactUtils';

import CartesianAxis from '../cartesian/CartesianAxis';
import CartesianGrid from '../cartesian/CartesianGrid';
import ReferenceLine from '../cartesian/ReferenceLine';
import ReferenceDot from '../cartesian/ReferenceDot';
import ReferenceArea from '../cartesian/ReferenceArea';
import XAxis from '../cartesian/XAxis';
import YAxis from '../cartesian/YAxis';
import Brush from '../cartesian/Brush';
import { getOffset, calculateChartCoordinate } from '../util/DOMUtils';
import { parseSpecifiedDomain, getAnyElementOfObject, hasDuplicate,
  combineEventHandlers, parseScale } from '../util/DataUtils';
import { calculateActiveTickIndex,
  detectReferenceElementsDomain, getMainColorOfGraphicItem, getDomainOfStackGroups,
  getDomainOfDataByKey, getLegendProps, getDomainOfItemsWithSameAxis, getCoordinatesOfGrid,
  getStackGroupsByAxisId, getTicksOfAxis, isCategorialAxis, getTicksOfScale,
  appendOffsetOfLegend,
} from '../util/CartesianUtils';
import pureRender, { shallowEqual } from '../util/PureRender';
import { eventCenter, SYNC_EVENT } from '../util/Events';

const ORIENT_MAP = {
  xAxis: ['bottom', 'top'],
  yAxis: ['left', 'right'],
};

const originCoordinate = { x: 0, y: 0 };

const generateCategoricalChart = (ChartComponent, GraphicalChild) => {
  class CategoricalChartWrapper extends Component {
    static displayName = getDisplayName(ChartComponent);

    static propTypes = {
      ...ChartComponent.propTypes,
      syncId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
    };

    static defaultProps = {
      layout: 'horizontal',
      stackOffset: 'none',
      margin: { top: 5, right: 5, bottom: 5, left: 5 },
    };

    constructor(props) {
      super(props);

      const defaultState = this.createDefaultState(props);
      this.state = { ...defaultState, updateId: 0, isLegendReady: true,
        ...this.updateStateOfAxisMapsOffsetAndStackGroups({ props, ...defaultState }) };
      this.validateAxes();
      this.uniqueChartId = _.uniqueId('recharts');

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

      if (this.legendInstance) {
        const { dataStartIndex, dataEndIndex } = this.state;

        this.setState(
          this.updateStateOfAxisMapsOffsetAndStackGroups({
            props: this.props, dataStartIndex, dataEndIndex,
          })
        );
      }
    }

    componentWillReceiveProps(nextProps) {
      const { data, children, width, height, layout, stackOffset, margin } = this.props;

      if (nextProps.data !== data || nextProps.width !== width ||
        nextProps.height !== height || nextProps.layout !== layout ||
        nextProps.stackOffset !== stackOffset || !shallowEqual(nextProps.margin, margin)) {
        const defaultState = this.createDefaultState(nextProps);
        this.setState({ ...defaultState, updateId: this.state.updateId + 1,
          ...this.updateStateOfAxisMapsOffsetAndStackGroups(
            { props: nextProps, ...defaultState }) }
        );
      } else if (!isChildrenEqual(nextProps.children, children)) {
        const defaultState = this.createDefaultState(nextProps);
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
    getAxisMap(props, { axisType = 'xAxis', graphicalItems, stackGroups, dataStartIndex,
      dataEndIndex }) {
      const { children } = props;
      const Axis = axisType === 'xAxis' ? XAxis : YAxis;
      const axisIdKey = axisType === 'xAxis' ? 'xAxisId' : 'yAxisId';
      // Get all the instance of Axis
      const axes = findAllByType(children, Axis);

      let axisMap = {};

      if (axes && axes.length) {
        axisMap = this.getAxisMapByAxes(props, { axes, graphicalItems, axisType, axisIdKey,
          stackGroups, dataStartIndex, dataEndIndex });
      } else if (graphicalItems && graphicalItems.length) {
        axisMap = this.getAxisMapByItems(props, { graphicalItems, Axis, axisType, axisIdKey,
          stackGroups, dataStartIndex, dataEndIndex });
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
      const { layout, children, data, stackOffset } = props;
      const displayedData = data.slice(dataStartIndex, dataEndIndex + 1);
      const len = displayedData.length;
      const isCategorial = isCategorialAxis(layout, axisType);

      // Eliminate duplicated axes
      const axisMap = axes.reduce((result, child) => {
        const { type, dataKey, allowDataOverflow } = child.props;
        const axisId = child.props[axisIdKey];

        if (!result[axisId]) {
          let domain, duplicateDomain, categoricalDomain;

          if (dataKey) {
            domain = getDomainOfDataByKey(displayedData, dataKey, type);

            if (type === 'category') {
              const duplicate = hasDuplicate(domain);
              duplicateDomain = duplicate ? domain : null;

              // When category axis has duplicated text, serial numbers are used to generate scale
              domain = duplicate ? _.range(0, len) : domain;
            }

            if (isCategorial && type === 'number') {
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
              displayedData, graphicalItems.filter(entry => entry.props[axisIdKey] === axisId), type
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
      const { layout, children, data } = props;
      const displayedData = data.slice(dataStartIndex, dataEndIndex + 1);
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
                graphicalItems.filter(entry => entry.props[axisIdKey] === axisId), 'number'
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
              orientation: ORIENT_MAP[axisType][index % 2],
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
     * Calculate the scale function, position, width, height of axes
     * @param  {Object} props    Latest props
     * @param  {Object} axisMap  The configuration of axes
     * @param  {Object} offset   The offset of main part in the svg element
     * @param  {Object} axisType The type of axes, x-axis or y-axis
     * @return {Object} Configuration
     */
    getFormatAxisMap(props, axisMap, offset, axisType) {
      const { width, height, layout } = props;
      const displayName = this.constructor.displayName;
      const ids = Object.keys(axisMap);
      const steps = {
        left: offset.left,
        right: width - offset.right,
        top: offset.top,
        bottom: height - offset.bottom,
      };

      return ids.reduce((result, id) => {
        const axis = axisMap[id];
        const { orientation, type, domain, padding = {} } = axis;
        let range, x, y;

        if (axisType === 'xAxis') {
          range = [
            offset.left + (padding.left || 0),
            offset.left + offset.width - (padding.right || 0),
          ];
        } else {
          range = layout === 'horizontal' ? [
            offset.top + offset.height - (padding.bottom || 0),
            offset.top + (padding.top || 0),
          ] : [
            offset.top + (padding.top || 0),
            offset.top + offset.height - (padding.bottom || 0),
          ];
        }

        const scale = parseScale(axis, displayName);
        scale.domain(domain).range(range);
        const ticks = getTicksOfScale(scale, axis);

        if (axisType === 'xAxis') {
          x = offset.left;
          y = orientation === 'top' ? steps[orientation] - axis.height : steps[orientation];
        } else {
          x = orientation === 'left' ? steps[orientation] - axis.width : steps[orientation];
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
          steps[orientation] += (orientation === 'top' ? -1 : 1) * finalAxis.height;
        } else if (!axis.hide) {
          steps[orientation] += (orientation === 'left' ? -1 : 1) * finalAxis.width;
        }

        return { ...result, [id]: finalAxis };
      }, {});
    }
    /**
     * Get the information of mouse in chart, return null when the mouse is not in the chart
     * @param  {Object} event    The event object
     * @return {Object}          Mouse data
     */
    getMouseInfo(event) {
      if (!this.container) { return null; }

      const { offset } = this.state;
      const containerOffset = getOffset(this.container);
      const e = calculateChartCoordinate(event, containerOffset);
      const isIn = e.chartX >= offset.left
        && e.chartX <= offset.left + offset.width
        && e.chartY >= offset.top
        && e.chartY <= offset.top + offset.height;

      if (!isIn) { return null; }

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
      const { dataStartIndex, dataEndIndex, graphicalItems } = this.state;
      const data = this.props.data.slice(dataStartIndex, dataEndIndex + 1);

      if (activeIndex < 0 || !graphicalItems || !graphicalItems.length
        || activeIndex >= data.length) {
        return null;
      }

      return graphicalItems.map((child) => {
        const { dataKey, name, unit, formatter } = child.props;

        return {
          ...getPresentationAttributes(child),
          dataKey, unit, formatter,
          name: name || dataKey,
          color: getMainColorOfGraphicItem(child),
          value: data[activeIndex] && data[activeIndex][dataKey],
          payload: data[activeIndex],
        };
      });
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
      const { data } = props;
      if (!validateWidthHeight({ props }) || !data || !data.length) { return null; }

      const { children, layout, stackOffset } = props;
      const numericIdName = layout === 'horizontal' ? 'yAxis' : 'xAxis';
      const cateIdName = layout === 'horizontal' ? 'xAxis' : 'yAxis';
      const graphicalItems = findAllByType(children, GraphicalChild);
      const stackGroups = getStackGroupsByAxisId(
        data, graphicalItems, `${numericIdName}Id`, `${cateIdName}Id`, stackOffset
      );

      let xAxisMap = this.getAxisMap(props, {
        axisType: 'xAxis',
        graphicalItems,
        stackGroups: numericIdName === 'xAxis' && stackGroups,
        dataStartIndex,
        dataEndIndex,
      });

      let yAxisMap = this.getAxisMap(props, {
        axisType: 'yAxis',
        graphicalItems,
        stackGroups: numericIdName === 'yAxis' && stackGroups,
        dataStartIndex,
        dataEndIndex,
      });

      const offset = this.calculateOffset(props, graphicalItems, xAxisMap, yAxisMap);

      xAxisMap = this.getFormatAxisMap(props, xAxisMap, offset, 'xAxis');
      yAxisMap = this.getFormatAxisMap(props, yAxisMap, offset, 'yAxis');

      const ticksObj = this.tooltipTicksGenerator({
        layout, xAxisMap, yAxisMap,
      });

      return { graphicalItems, xAxisMap, yAxisMap, offset, stackGroups, ...ticksObj };
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
     * Returns default, reset state for the categorical chart.
     * @param {Object} props Props object to use when creating the default state
     * @return {Object} Whole new state
     */
    createDefaultState(props) {
      return {
        chartX: 0,
        chartY: 0,
        dataStartIndex: 0,
        dataEndIndex: (props.data && (props.data.length - 1)) || 0,
        activeTooltipIndex: -1,
        isTooltipActive: false,
      };
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

        return { ...result, [orientation]: result[orientation] + (entry.hide ? 0 : entry.width) };
      }, { left: margin.left || 0, right: margin.right || 0 });

      const offsetV = Object.keys(xAxisMap).reduce((result, id) => {
        const entry = xAxisMap[id];
        const orientation = entry.orientation;

        return { ...result, [orientation]: result[orientation] + (entry.hide ? 0 : entry.height) };
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

    handleReceiveSyncEvent = (cId, chartId, data) => {
      const { syncId, layout } = this.props;

      if (syncId === cId && chartId !== this.uniqueChartId) {
        const { dataStartIndex, dataEndIndex } = data;

        if (!_.isNil(data.dataStartIndex) || !_.isNil(data.dataEndIndex)) {
          this.setState(this.updateStateOfAxisMapsOffsetAndStackGroups(
            { props: this.props, dataStartIndex, dataEndIndex }
          ));
        } else if (!_.isNil(data.activeTooltipIndex)) {
          const { chartX, chartY, activeTooltipIndex } = data;
          const { offset, tooltipTicks } = this.state;
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

    handleClick = (e) => {
      const { onClick } = this.props;

      if (_.isFunction(onClick)) {
        const mouse = this.getMouseInfo(e);

        onClick(mouse, e);
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
        const displayName = this.constructor.displayName;

        warn(yAxes && yAxes.length,
          `You should add <YAxis type="number" /> in ${displayName}.
           The layout is vertical now, y-axis should be category axis,
           but y-axis is number axis when no YAxis is added.`
        );
        warn(xAxes && xAxes.length,
          `You should add <XAxis /> in ${displayName}.
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
      };
    }

    /**
     * Draw axes
     * @param {Object} axisMap The configuration of all x-axes or y-axes
     * @param {String} name    The name of axes
     * @return {ReactElement}  The instance of x-axes
     */
    renderAxes(axisMap, name) {
      const { width, height } = this.props;
      const ids = axisMap && Object.keys(axisMap);

      if (ids && ids.length) {
        const axes = [];

        for (let i = 0, len = ids.length; i < len; i++) {
          const axis = axisMap[ids[i]];

          if (!axis.hide) {

            axes.push((
              <CartesianAxis
                {...axis}
                key={`${name}-${ids[i]}`}
                viewBox={{ x: 0, y: 0, width, height }}
                ticksGenerator={this.axesTicksGenerator}
              />
            ));
          }
        }

        return axes.length ?
          <Layer key={`${name}-layer`} className={`recharts-${name}`}>{axes}</Layer> : null;
      }

      return null;
    }

    /**
     * Draw grid
     * @return {ReactElement} The instance of grid
     */
    renderGrid() {
      const { xAxisMap, yAxisMap, offset } = this.state;
      const { children, width, height } = this.props;
      const gridItem = findChildByType(children, CartesianGrid);

      if (!gridItem) { return null; }

      const xAxis = getAnyElementOfObject(xAxisMap);
      const yAxis = getAnyElementOfObject(yAxisMap);

      return React.cloneElement(gridItem, {
        key: 'grid',
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
    }
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

    renderBrush() {
      const { children, margin, data } = this.props;
      const { offset, dataStartIndex, dataEndIndex, updateId } = this.state;
      const brushItem = findChildByType(children, Brush);

      if (!brushItem) { return null; }

      // TODO: update brush when children update
      return React.cloneElement(brushItem, {
        onChange: combineEventHandlers(this.handleBrushChange, null, brushItem.props.onChange),
        data,
        x: offset.left,
        y: offset.top + offset.height + offset.brushBottom - (margin.bottom || 0),
        width: offset.width,
        startIndex: dataStartIndex,
        endIndex: dataEndIndex,
        updateId: `brush-${updateId}`,
      });

    }

    renderReferenceElements(isFront, Compt) {
      const { children } = this.props;
      const elements = findAllByType(children, Compt);

      if (!elements || !elements.length) { return null; }

      const { xAxisMap, yAxisMap, offset } = this.state;
      const keyPrefix = `${getDisplayName(Compt)}-${isFront ? 'front' : 'back'}`;

      return elements.filter(entry => (isFront === entry.props.isFront)).map((entry, i) => {
        const { xAxisId, yAxisId } = entry.props;

        return React.cloneElement(entry, {
          key: `${keyPrefix}-${i}`,
          xAxis: xAxisMap[xAxisId],
          yAxis: yAxisMap[yAxisId],
          viewBox: {
            x: offset.left,
            y: offset.top,
            width: offset.width,
            height: offset.height,
          },
        });
      });
    }

    render() {
      const { data } = this.props;
      if (!validateWidthHeight(this) || !data || !data.length) { return null; }

      const { children, className, width, height, style, ...others } = this.props;
      const { xAxisMap, yAxisMap } = this.state;

      const events = {
        onMouseEnter: this.handleMouseEnter,
        onMouseMove: this.handleMouseMove,
        onMouseLeave: this.handleMouseLeave,
        onClick: this.handleClick,
        onTouchMove: this.handleTouchMove,
      };
      const attrs = getPresentationAttributes(others);

      return (
        <div
          className={classNames('recharts-wrapper', className)}
          style={{ ...style, position: 'relative', cursor: 'default', width, height }}
          {...events}
          ref={(node) => { this.container = node; }}
        >
          <Surface {...attrs} width={width} height={height}>
            {this.renderGrid()}
            {this.renderReferenceElements(false, ReferenceArea)}
            {this.renderReferenceElements(false, ReferenceLine)}
            {this.renderReferenceElements(false, ReferenceDot)}
            {this.renderAxes(xAxisMap, 'x-axis')}
            {this.renderAxes(yAxisMap, 'y-axis')}
            <ChartComponent
              {...this.props}
              {...this.state}
            />
            {this.renderReferenceElements(true, ReferenceArea)}
            {this.renderReferenceElements(true, ReferenceLine)}
            {this.renderReferenceElements(true, ReferenceDot)}
            {this.renderBrush()}
            {filterSvgElements(children)}
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
