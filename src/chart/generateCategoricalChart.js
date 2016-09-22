import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { scaleLinear, scaleBand, scalePoint } from 'd3-scale';
import classNames from 'classnames';
import Surface from '../container/Surface';
import Layer from '../container/Layer';
import Tooltip from '../component/Tooltip';
import Legend from '../component/Legend';

import { warn } from '../util/LogUtils';
import { findAllByType, findChildByType, filterSvgElements, getDisplayName,
  getPresentationAttributes, validateWidthHeight } from '../util/ReactUtils';
import _ from 'lodash';

import CartesianAxis from '../cartesian/CartesianAxis';
import CartesianGrid from '../cartesian/CartesianGrid';
import ReferenceLine from '../cartesian/ReferenceLine';
import ReferenceDot from '../cartesian/ReferenceDot';
import ReferenceArea from '../cartesian/ReferenceArea';
import XAxis from '../cartesian/XAxis';
import YAxis from '../cartesian/YAxis';
import Brush from '../cartesian/Brush';
import pureRender from '../util/PureRender';
import { getOffset, calculateChartCoordinate } from '../util/DOMUtils';
import { parseSpecifiedDomain, getAnyElementOfObject, hasDuplicate } from '../util/DataUtils';
import { calculateDomainOfTicks, calculateActiveTickIndex,
  detectReferenceElementsDomain, getMainColorOfGraphicItem, getDomainOfStackGroups,
  getDomainOfDataByKey, getLegendProps, getDomainOfItemsWithSameAxis, getCoordinatesOfGrid,
  getStackGroupsByAxisId, getTicksOfAxis, isCategorialAxis, getTicksOfScale,
} from '../util/CartesianUtils';
import { eventCenter, SYNC_EVENT } from '../util/Events';

const ORIENT_MAP = {
  xAxis: ['bottom', 'top'],
  yAxis: ['left', 'right'],
};

const generateCategoricalChart = (ChartComponent, GraphicalChild) => {
  class CategoricalChartWrapper extends Component {
    static displayName = getDisplayName(ChartComponent);

    static propTypes = {
      syncId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      width: PropTypes.number,
      height: PropTypes.number,
      data: PropTypes.arrayOf(PropTypes.object),
      layout: PropTypes.oneOf(['horizontal', 'vertical']),
      stackOffset: PropTypes.oneOf(['sign', 'expand', 'none', 'wiggle', 'silhouette']),
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
    };

    static defaultProps = {
      layout: 'horizontal',
      stackOffset: 'none',
      margin: { top: 5, right: 5, bottom: 5, left: 5 },
    };

    constructor(props) {
      super(props);
      this.state = this.createDefaultState(this.props);
      this.validateAxes();
      this.uniqueChartId = _.uniqueId('recharts');
    }

    componentDidMount() {
      if (!_.isNil(this.props.syncId)) {
        this.addListener();
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.data !== this.props.data) {
        this.setState(this.createDefaultState(nextProps));
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
    }
    /**
   * Get the configuration of all x-axis or y-axis
   * @param  {String} axisType    The type of axis
   * @param  {Array} items        The instances of item
   * @param  {Object} stackGroups The items grouped by axisId and stackId
   * @return {Object}          Configuration
   */
    getAxisMap(axisType = 'xAxis', items, stackGroups) {
      const { children } = this.props;
      const Axis = axisType === 'xAxis' ? XAxis : YAxis;
      const axisIdKey = axisType === 'xAxis' ? 'xAxisId' : 'yAxisId';
      // Get all the instance of Axis
      const axes = findAllByType(children, Axis);

      let axisMap = {};

      if (axes && axes.length) {
        axisMap = this.getAxisMapByAxes(axes, items, axisType, axisIdKey, stackGroups);
      } else if (items && items.length) {
        axisMap = this.getAxisMapByItems(items, Axis, axisType, axisIdKey, stackGroups);
      }

      return axisMap;
    }

    /**
     * Get the configuration of axis by the options of axis instance
     * @param {Array}  axes  The instance of axes
     * @param  {Array} items The instances of item
     * @param  {String} axisType The type of axis, xAxis - x-axis, yAxis - y-axis
     * @param  {String} axisIdKey The unique id of an axis
     * @param  {Object} stackGroups The items grouped by axisId and stackId
     * @return {Object}      Configuration
     */
    getAxisMapByAxes(axes, items, axisType, axisIdKey, stackGroups) {
      const { layout, children, data } = this.props;
      const { dataEndIndex, dataStartIndex } = this.state;
      const displayedData = data.slice(dataStartIndex, dataEndIndex + 1);
      const len = displayedData.length;
      const isCategorial = isCategorialAxis(layout, axisType);

      // Eliminate duplicated axes
      const axisMap = axes.reduce((result, child) => {
        const { type, dataKey, allowDataOverflow } = child.props;
        const axisId = child.props[axisIdKey];

        if (!result[axisId]) {
          let domain;
          let duplicateDomain;

          if (dataKey) {
            domain = getDomainOfDataByKey(displayedData, dataKey, type);
            const duplicate = hasDuplicate(domain);

            duplicateDomain = duplicate ? domain : null;
            // When axis has duplicated text, serial numbers are used to generate scale
            domain = duplicate ? _.range(0, len) : domain;
          } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack
            && type === 'number') {
            domain = getDomainOfStackGroups(
              stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex
            );
          } else if (isCategorial) {
            domain = _.range(0, len);
          } else {
            domain = getDomainOfItemsWithSameAxis(
              displayedData, items.filter(entry => entry.props[axisIdKey] === axisId), type
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
              duplicateDomain,
              originalDomain: child.props.domain,
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
     * @param  {Array} items       The instances of item
     * @param  {ReactElement} Axis Axis Component
     * @param  {String} axisType   The type of axis, xAxis - x-axis, yAxis - y-axis
     * @param  {String} axisIdKey  The unique id of an axis
     * @param  {Object} stackGroups The items grouped by axisId and stackId
     * @return {Object}            Configuration
     */
    getAxisMapByItems(items, Axis, axisType, axisIdKey, stackGroups) {
      const { layout, children, data } = this.props;
      const { dataEndIndex, dataStartIndex } = this.state;
      const displayedData = data.slice(dataStartIndex, dataEndIndex + 1);
      const len = displayedData.length;
      const isCategorial = isCategorialAxis(layout, axisType);
      let index = -1;

      // The default type of x-axis is category axis,
      // The default contents of x-axis is the serial numbers of data
      // The default type of y-axis is number axis
      // The default contents of y-axis is the domain of data
      const axisMap = items.reduce((result, child) => {
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
                items.filter(entry => entry.props[axisIdKey] === axisId), 'number'
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
            },
          };
        }

        return result;
      }, {});

      return axisMap;
    }
    /**
     * Calculate the scale function, position, width, height of axes
     * @param  {Object} axisMap  The configuration of axes
     * @param  {Object} offset   The offset of main part in the svg element
     * @param  {Object} axisType The type of axes, x-axis or y-axis
     * @return {Object} Configuration
     */
    getFormatAxisMap(axisMap, offset, axisType) {
      const { width, height, layout } = this.props;
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
        let range;

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
        let scale;

        if (type === 'number') {
          scale = scaleLinear().domain(domain).range(range);
        } else if (displayName.indexOf('LineChart') >= 0 ||
          displayName.indexOf('AreaChart') >= 0) {
          scale = scalePoint().domain(domain).range(range);
        } else {
          scale = scaleBand().domain(domain).range(range);
        }

        const ticks = getTicksOfScale(scale, axis);

        let x;
        let y;

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
     * @param  {Object}  xAxisMap The configuration of all x-axes
     * @param  {Object}  yAxisMap The configuration of all y-axes
     * @param  {Object}  offset   The offset of main part in the svg element
     * @param  {Object}  e        The event object
     * @return {Object}           Mouse data
     */
    getMouseInfo(xAxisMap, yAxisMap, offset, e) {
      const isIn = e.chartX >= offset.left
        && e.chartX <= offset.left + offset.width
        && e.chartY >= offset.top
        && e.chartY <= offset.top + offset.height;

      if (!isIn) { return null; }

      const { layout } = this.props;
      const axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
      const pos = layout === 'horizontal' ? e.chartX : e.chartY;
      const axis = getAnyElementOfObject(axisMap);
      const ticks = getTicksOfAxis(axis, false, true);
      const activeIndex = calculateActiveTickIndex(pos, ticks);

      if (activeIndex >= 0) {
        return {
          ...e,
          activeTooltipIndex: activeIndex,
        };
      }

      return null;
    }
    /**
     * Get the content to be displayed in the tooltip
     * @param  {Array} items The instances of item
     * @return {Array}       The content of tooltip
     */
    getTooltipContent(items) {
      const { activeTooltipIndex, dataStartIndex, dataEndIndex } = this.state;
      const data = this.props.data.slice(dataStartIndex, dataEndIndex + 1);

      if (activeTooltipIndex < 0 || !items || !items.length
        || activeTooltipIndex >= data.length) {
        return null;
      }

      return items.map((child) => {
        const { dataKey, name, unit, formatter } = child.props;

        return {
          ...getPresentationAttributes(child),
          dataKey, unit, formatter,
          name: name || dataKey,
          color: getMainColorOfGraphicItem(child),
          value: data[activeTooltipIndex][dataKey],
          payload: data[activeTooltipIndex],
        };
      });
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
     * @param  {Array} items       The instances of item
     * @param  {Object} xAxisMap  The configuration of x-axis
     * @param  {Object} yAxisMap  The configuration of y-axis
     * @return {Object} The offset of main part in the svg element
     */
    calculateOffset(items, xAxisMap, yAxisMap) {
      const { width, height, margin, children } = this.props;
      const brushItem = findChildByType(children, Brush);

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

      const brushBottom = offsetV.bottom;

      if (brushItem) {
        offsetV.bottom += brushItem.props.height || Brush.defaultProps.height;
      }

      const legendProps = getLegendProps(children, items, width, height);
      if (legendProps) {
        const box = Legend.getLegendBBox(legendProps, width, height) || {};
        if (legendProps.layout === 'horizontal' &&
          _.isNumber(offsetV[legendProps.verticalAlign])) {
          offsetV[legendProps.verticalAlign] += box.height || 0;
        } else if (legendProps.layout === 'vertical' &&
          _.isNumber(offsetH[legendProps.align])) {
          offsetH[legendProps.align] += box.width || 0;
        }
      }

      return {
        brushBottom,
        ...offsetH,
        ...offsetV,
        width: width - offsetH.left - offsetH.right,
        height: height - offsetV.top - offsetV.bottom,
      };
    }

    handleReceiveSyncEvent = (cId, chartId, data) => {
      const { syncId } = this.props;

      if (syncId === cId && chartId !== this.chartId) {
        this.setState(data);
      }
    };

    handleBrushChange = ({ startIndex, endIndex }) => {
      this.setState({
        dataStartIndex: startIndex,
        dataEndIndex: endIndex,
      });

      this.triggerSyncEvent({
        dataStartIndex: startIndex,
        dataEndIndex: endIndex,
      });
    };
    /**
     * The handler of mouse entering chart
     * @param  {Object} offset   The offset of main part in the svg element
     * @param  {Object} xAxisMap The configuration of all x-axes
     * @param  {Object} yAxisMap The configuration of all y-axes
     * @param  {Object} e        Event object
     * @return {Null}            null
     */
    handleMouseEnter(offset, xAxisMap, yAxisMap, e) {
      const container = ReactDOM.findDOMNode(this);
      const containerOffset = getOffset(container);
      const ne = calculateChartCoordinate(e, containerOffset);
      const mouse = this.getMouseInfo(xAxisMap, yAxisMap, offset, ne);

      if (mouse) {
        const nextState = { ...mouse, isTooltipActive: true };
        this.setState(nextState);
        this.triggerSyncEvent(nextState);
      }
    }

    /**
     * The handler of mouse moving in chart
     * @param  {Object} offset   The offset of main part in the svg element
     * @param  {Object} xAxisMap The configuration of all x-axes
     * @param  {Object} yAxisMap The configuration of all y-axes
     * @param  {Object} e        Event object
     * @return {Null} no return
     */
    handleMouseMove(offset, xAxisMap, yAxisMap, e) {
      const container = ReactDOM.findDOMNode(this);
      const containerOffset = getOffset(container);
      const ne = calculateChartCoordinate(e, containerOffset);
      const mouse = this.getMouseInfo(xAxisMap, yAxisMap, offset, ne);
      const nextState = mouse ? { ...mouse, isTooltipActive: true } : { isTooltipActive: false };

      this.setState(nextState);
      this.triggerSyncEvent(nextState);
    }
    /**
     * The handler if mouse leaving chart
     * @return {Null} no return
     */
    handleMouseLeave = () => {
      const nextState = { isTooltipActive: false };

      this.setState(nextState);
      this.triggerSyncEvent(nextState);
    };

    validateAxes() {
      const { layout, children } = this.props;
      const xAxes = findAllByType(children, XAxis);
      const yAxes = findAllByType(children, YAxis);

      if (layout === 'horizontal' && xAxes && xAxes.length) {
        xAxes.forEach(axis => {
          warn(axis.props.type === 'category',
            'x-axis should be category axis when the layout is horizontal'
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
          yAxes.forEach(axis => {
            warn(axis.props.type === 'category',
              'y-axis should be category axis when the layout is vertical'
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
                ticks={getTicksOfAxis(axis, true)}
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
     * @param  {Object} xAxisMap The configuration of all x-axes
     * @param  {Object} yAxisMap The configuration of all y-axes
     * @param  {Object} offset   The offset of main part in the svg element
     * @return {ReactElement} The instance of grid
     */
    renderGrid(xAxisMap, yAxisMap, offset) {
      const { children, width, height } = this.props;
      const gridItem = findChildByType(children, CartesianGrid);

      if (!gridItem) { return null; }

      const xAxis = getAnyElementOfObject(xAxisMap);
      const yAxis = getAnyElementOfObject(yAxisMap);

      const verticalPoints = getCoordinatesOfGrid(CartesianAxis.getTicks({
        ...CartesianAxis.defaultProps, ...xAxis,
        ticks: getTicksOfAxis(xAxis, true),
        viewBox: { x: 0, y: 0, width, height },
      }), offset.left, offset.left + offset.width);

      const horizontalPoints = getCoordinatesOfGrid(CartesianAxis.getTicks({
        ...CartesianAxis.defaultProps, ...yAxis,
        ticks: getTicksOfAxis(yAxis, true),
        viewBox: { x: 0, y: 0, width, height },
      }), offset.top, offset.top + offset.height);

      return React.cloneElement(gridItem, {
        key: 'grid',
        x: offset.left,
        y: offset.top,
        width: offset.width,
        height: offset.height,
        verticalPoints, horizontalPoints,
      });
    }
    /**
     * Draw legend
     * @param  {Array} items             The instances of item
     * @return {ReactElement}            The instance of Legend
     */
    renderLegend(items) {
      const { children, width, height, margin } = this.props;
      const legendWidth = width - margin.left - margin.right;
      const legendHeight = height - margin.top - margin.bottom;
      const props = getLegendProps(children, items, legendWidth, legendHeight);

      if (!props) { return null; }

      return React.createElement(Legend, {
        ...props,
        chartWidth: width,
        chartHeight: height,
        margin,
      });
    }

    /**
     * Draw Tooltip
     * @param  {Object} xAxisMap The configuration of all x-axes
     * @param  {Object} yAxisMap The configuration of all y-axes
     * @param  {ReactElement} tooltipItem  The instance of Tooltip
     * @param  {Array}  items  The instances of GraphicalChild
     * @param  {Object} offset The offset of main part in the svg element
     * @return {ReactElement}  The instance of Tooltip
     */
    renderTooltip(xAxisMap, yAxisMap, tooltipItem, items, offset) {
      const { layout } = this.props;
      const { isTooltipActive, activeTooltipIndex, chartX, chartY } = this.state;
      const axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
      const pos = layout === 'horizontal' ? chartX : chartY;
      const axis = getAnyElementOfObject(axisMap);
      const ticks = getTicksOfAxis(axis, false, true);
      const viewBox = { ...offset, x: offset.left, y: offset.top };
      // When a categotical chart is combined with another chart, the value of chartX
      // and chartY may beyond the boundaries.
      const validateChartX = Math.min(chartX, viewBox.x + viewBox.width);
      const validateChartY = Math.min(chartY, viewBox.y + viewBox.height);

      return React.cloneElement(tooltipItem, {
        viewBox,
        active: isTooltipActive,
        label: ticks[activeTooltipIndex] && ticks[activeTooltipIndex].value,
        payload: isTooltipActive ? this.getTooltipContent(items) : [],
        coordinate: ticks[activeTooltipIndex] ? {
          x: layout === 'horizontal' ? ticks[activeTooltipIndex].coordinate : validateChartX,
          y: layout === 'horizontal' ? validateChartY : ticks[activeTooltipIndex].coordinate,
        } : { x: 0, y: 0 },
      });
    }

    renderBrush(xAxisMap, yAxisMap, offset) {
      const { children, margin, data } = this.props;
      const { dataStartIndex, dataEndIndex } = this.state;
      const brushItem = findChildByType(children, Brush);

      if (!brushItem) { return null; }

      return React.cloneElement(brushItem, {
        onChange: this.handleBrushChange,
        data,
        x: offset.left,
        y: offset.top + offset.height + offset.brushBottom - (margin.bottom || 0),
        width: offset.width,
        startIndex: dataStartIndex,
        endIndex: dataEndIndex,
      });

    }

    renderReferenceElements(xAxisMap, yAxisMap, offset, isFront, Compt) {
      const { children } = this.props;
      const elements = findAllByType(children, Compt);

      if (!elements || !elements.length) { return null; }

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

      const { children, layout, className, width, height, stackOffset, style,
        ...others } = this.props;
      const numericIdName = layout === 'horizontal' ? 'yAxis' : 'xAxis';
      const cateIdName = layout === 'horizontal' ? 'xAxis' : 'yAxis';
      const items = findAllByType(children, GraphicalChild);
      const stackGroups = getStackGroupsByAxisId(
        data, items, `${numericIdName}Id`, `${cateIdName}Id`, stackOffset
      );

      let xAxisMap = this.getAxisMap('xAxis', items, numericIdName === 'xAxis' && stackGroups);
      let yAxisMap = this.getAxisMap('yAxis', items, numericIdName === 'yAxis' && stackGroups);

      const offset = this.calculateOffset(items, xAxisMap, yAxisMap);

      xAxisMap = this.getFormatAxisMap(xAxisMap, offset, 'xAxis');
      yAxisMap = this.getFormatAxisMap(yAxisMap, offset, 'yAxis');

      const tooltipItem = findChildByType(children, Tooltip);
      const events = tooltipItem ? {
        onMouseEnter: this.handleMouseEnter.bind(this, offset, xAxisMap, yAxisMap),
        onMouseMove: this.handleMouseMove.bind(this, offset, xAxisMap, yAxisMap),
        onMouseLeave: this.handleMouseLeave,
      } : null;
      const attrs = getPresentationAttributes(others);

      return (
        <div
          className={classNames('recharts-wrapper', className)}
          style={{ ...style, position: 'relative', cursor: 'default', width, height }}
          {...events}
        >
          <Surface {...attrs} width={width} height={height}>
            {this.renderGrid(xAxisMap, yAxisMap, offset)}
            {this.renderReferenceElements(xAxisMap, yAxisMap, offset, false, ReferenceArea)}
            {this.renderReferenceElements(xAxisMap, yAxisMap, offset, false, ReferenceLine)}
            {this.renderReferenceElements(xAxisMap, yAxisMap, offset, false, ReferenceDot)}
            {this.renderAxes(xAxisMap, 'x-axis')}
            {this.renderAxes(yAxisMap, 'y-axis')}
            <ChartComponent
              {...this.props}
              {...this.state}
              graphicalItems={items}
              xAxisMap={xAxisMap}
              yAxisMap={yAxisMap}
              offset={offset}
              stackGroups={stackGroups}
            />
            {this.renderReferenceElements(xAxisMap, yAxisMap, offset, true, ReferenceArea)}
            {this.renderReferenceElements(xAxisMap, yAxisMap, offset, true, ReferenceLine)}
            {this.renderReferenceElements(xAxisMap, yAxisMap, offset, true, ReferenceDot)}
            {this.renderBrush(xAxisMap, yAxisMap, offset)}
            {filterSvgElements(children)}
          </Surface>
          {this.renderLegend(items)}
          {tooltipItem && this.renderTooltip(xAxisMap, yAxisMap, tooltipItem, items, offset)}
        </div>
      );
    }
  }

  return CategoricalChartWrapper;
};

export default generateCategoricalChart;
