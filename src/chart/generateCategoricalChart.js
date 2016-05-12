import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { getNiceTickValues } from 'recharts-scale';
import { scaleLinear, scaleBand, scalePoint } from 'd3-scale';
import classNames from 'classnames';
import Surface from '../container/Surface';
import Layer from '../container/Layer';
import Tooltip from '../component/Tooltip';
import Legend from '../component/Legend';

import { warn } from '../util/LogUtils';
import { findAllByType, findChildByType, getDisplayName,
  validateWidthHeight } from '../util/ReactUtils';
import _ from 'lodash';

import CartesianAxis from '../cartesian/CartesianAxis';
import CartesianGrid from '../cartesian/CartesianGrid';
import ReferenceLine from '../cartesian/ReferenceLine';
import ReferenceDot from '../cartesian/ReferenceDot';
import XAxis from '../cartesian/XAxis';
import YAxis from '../cartesian/YAxis';
import Brush from '../cartesian/Brush';
import pureRender from '../util/PureRender';
import { getOffset } from '../util/DOMUtils';
import { parseSpecifiedDomain, getAnyElementOfObject, hasDuplicate } from '../util/DataUtils';
import { calculateDomainOfTicks, calculateChartCoordinate, calculateActiveTickIndex,
  detectReferenceElementsDomain, getMainColorOfGraphicItem, getDomainOfStackGroups,
  getDomainOfDataByKey, getLegendProps, getDomainOfItemsWithSameAxis, getCoordinatesOfGrid,
  getStackGroupsByAxisId, getTicksOfAxis, isCategorialAxis } from '../util/CartesianUtils';

const ORIENT_MAP = {
  xAxis: ['bottom', 'top'],
  yAxis: ['left', 'right'],
};

const generateCategoricalChart = (ChartComponent, GraphicalChild) => {
  class CategoricalChartWrapper extends Component {
    static displayName = getDisplayName(ChartComponent);

    static propTypes = {
      width: PropTypes.number,
      height: PropTypes.number,
      data: PropTypes.arrayOf(PropTypes.object),
      layout: PropTypes.oneOf(['horizontal', 'vertical']),
      // if the chart should render above the reference line or dot.
      isAbove: PropTypes.bool,
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
      margin: { top: 5, right: 5, bottom: 5, left: 5 },
      isAbove: false,
    };

    constructor(props) {
      super(props);
      this.validateAxes();
    }

    state = {
      dataStartIndex: 0,
      dataEndIndex: (this.props.data && (this.props.data.length - 1)) || 0,
      activeTooltipIndex: -1,
      activeTooltipLabel: '',
      activeTooltipCoord: { x: 0, y: 0 },
      isTooltipActive: false,
    };

    componentWillReceiveProps(nextProps) {
      if (nextProps.data !== this.props.data) {
        this.setState({
          dataStartIndex: 0,
          dataEndIndex: (nextProps.data && (nextProps.data.length - 1)) || 0,
        });
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
        const { type, dataKey } = child.props;
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
              domain = parseSpecifiedDomain(child.props.domain, domain);
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
              )
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
     * Configure the scale function of axis
     * @param {Object} scale The scale function
     * @param {Object} opts  The configuration of axis
     * @return {Object}      null
     */
    setTicksOfScale(scale, opts) {
      const { type } = opts;

      if (opts.tickCount && type === 'number' && opts.originalDomain && (
        opts.originalDomain[0] === 'auto' || opts.originalDomain[1] === 'auto')) {
        // Calculate the ticks by the number of grid when the axis is a number axis
        const domain = scale.domain();
        const tickValues = getNiceTickValues(domain, opts.tickCount);

        opts.niceTicks = tickValues;
        scale.domain(calculateDomainOfTicks(tickValues, type));
      }
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
        const { orientation, type, domain } = axis;
        let range;

        if (axisType === 'xAxis') {
          range = [offset.left, offset.left + offset.width];
        } else {
          range = layout === 'horizontal' ?
                  [offset.top + offset.height, offset.top] :
                  [offset.top, offset.top + offset.height];
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

        this.setTicksOfScale(scale, axis);

        let x;
        let y;

        if (axisType === 'xAxis') {
          x = offset.left;
          y = orientation === 'top' ? steps[orientation] - axis.height : steps[orientation];
        } else {
          x = orientation === 'left' ? steps[orientation] - axis.width : steps[orientation];
          y = offset.top;
        }

        result[id] = {
          ...axis,
          x, y, scale,
          width: axisType === 'xAxis' ? offset.width : axis.width,
          height: axisType === 'yAxis' ? offset.height : axis.height,
        };

        if (!axis.hide && axisType === 'xAxis') {
          steps[orientation] += (orientation === 'top' ? -1 : 1) * result[id].height;
        } else if (!axis.hide) {
          steps[orientation] += (orientation === 'left' ? -1 : 1) * result[id].width;
        }

        return result;
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
      const ticks = getTicksOfAxis(axis, true);
      const activeIndex = calculateActiveTickIndex(pos, ticks);

      if (activeIndex >= 0) {
        return {
          activeTooltipIndex: activeIndex,
          activeTooltipLabel: ticks[activeIndex].value,
          activeTooltipCoord: {
            x: layout === 'horizontal' ? ticks[activeIndex].coordinate : e.chartX,
            y: layout === 'horizontal' ? e.chartY : ticks[activeIndex].coordinate,
          },
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

      if (activeTooltipIndex < 0 || !items || !items.length) {
        return null;
      }

      return items.map((child) => {
        const { dataKey, name, unit, formatter } = child.props;

        return {
          name: name || dataKey,
          unit: unit || '',
          color: getMainColorOfGraphicItem(child),
          value: data[activeTooltipIndex][dataKey],
          payload: data[activeTooltipIndex],
          formatter,
        };
      });
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

    handleBrushChange = ({ startIndex, endIndex }) => {
      this.setState({
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
        this.setState({
          ...mouse,
          isTooltipActive: true,
        });
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

      if (mouse) {
        this.setState({
          ...mouse,
          isTooltipActive: true,
        });
      } else {
        this.setState({
          isTooltipActive: false,
        });
      }
    }
    /**
     * The handler if mouse leaving chart
     * @return {Null} no return
     */
    handleMouseLeave = () => {
      this.setState({
        isTooltipActive: false,
      });
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
      const { children, width, height } = this.props;
      const props = getLegendProps(children, items, width, height);

      if (!props) { return null; }

      const { margin } = this.props;

      return React.createElement(Legend, {
        ...props,
        chartWidth: width,
        chartHeight: height,
        margin,
      });
    }

    /**
     * Draw Tooltip
     * @param  {ReactElement} tooltipItem  The instance of Tooltip
     * @param  {Array}  items  The instances of GraphicalChild
     * @param  {Object} offset The offset of main part in the svg element
     * @return {ReactElement}  The instance of Tooltip
     */
    renderTooltip(tooltipItem, items, offset) {
      const { isTooltipActive, activeTooltipLabel, activeTooltipCoord } = this.state;
      const viewBox = {
        x: offset.left,
        y: offset.top,
        width: offset.width,
        height: offset.height,
      };

      return React.cloneElement(tooltipItem, {
        viewBox,
        active: isTooltipActive,
        label: activeTooltipLabel,
        payload: isTooltipActive ? this.getTooltipContent(items) : [],
        coordinate: activeTooltipCoord,
      });
    }

    renderBrush(xAxisMap, yAxisMap, offset) {
      const { children, data, margin } = this.props;
      const brushItem = findChildByType(children, Brush);

      if (!brushItem) { return null; }

      const dataKey = brushItem.props.dataKey;

      return React.cloneElement(brushItem, {
        onChange: this.handleBrushChange,
        data: data.map(entry => entry[dataKey]),
        x: offset.left,
        y: offset.top + offset.height + offset.brushBottom - (margin.bottom || 0),
        width: offset.width,
      });

    }

    renderReferenceLines(xAxisMap, yAxisMap, offset, isBeforeRender) {
      const { children, isAbove } = this.props;

      if (isAbove && !isBeforeRender || !isAbove && isBeforeRender) {
        return null;
      }

      const lines = findAllByType(children, ReferenceLine);

      if (!lines || !lines.length) { return null; }

      return lines.map((entry, i) =>
        React.cloneElement(entry, {
          key: `reference-line-${i}`,
          xAxisMap, yAxisMap,
          viewBox: {
            x: offset.left,
            y: offset.top,
            width: offset.width,
            height: offset.height,
          },
        })
      );
    }

    renderReferenceDots(xAxisMap, yAxisMap, offset, isBeforeRender) {
      const { children, isAbove } = this.props;

      if (isAbove && !isBeforeRender || !isAbove && isBeforeRender) {
        return null;
      }

      const dots = findAllByType(children, ReferenceDot);

      if (!dots || !dots.length) { return null; }

      return dots.map((entry, i) =>
        React.cloneElement(entry, {
          key: `reference-dot-${i}`,
          xAxisMap, yAxisMap,
        })
      );
    }

    render() {
      const { data } = this.props;
      if (!validateWidthHeight(this) || !data || !data.length) { return null; }

      const { style, children, layout, className, width, height } = this.props;
      const numberAxisName = layout === 'horizontal' ? 'yAxis' : 'xAxis';
      const items = findAllByType(children, GraphicalChild);
      const stackGroups = getStackGroupsByAxisId(data, items, `${numberAxisName}Id`);

      let xAxisMap = this.getAxisMap('xAxis', items, numberAxisName === 'xAxis' && stackGroups);
      let yAxisMap = this.getAxisMap('yAxis', items, numberAxisName === 'yAxis' && stackGroups);

      const offset = this.calculateOffset(items, xAxisMap, yAxisMap);

      xAxisMap = this.getFormatAxisMap(xAxisMap, offset, 'xAxis');
      yAxisMap = this.getFormatAxisMap(yAxisMap, offset, 'yAxis');

      const tooltipItem = findChildByType(children, Tooltip);
      const events = tooltipItem ? {
        onMouseEnter: this.handleMouseEnter.bind(this, offset, xAxisMap, yAxisMap),
        onMouseMove: this.handleMouseMove.bind(this, offset, xAxisMap, yAxisMap),
        onMouseLeave: this.handleMouseLeave,
      } : null;

      return (
        <div
          className={classNames('recharts-wrapper', className)}
          style={{ position: 'relative', cursor: 'default', ...style }}
          {...events}
        >
          <Surface width={width} height={height}>
            {this.renderGrid(xAxisMap, yAxisMap, offset)}
            {this.renderReferenceLines(xAxisMap, yAxisMap, offset, true)}
            {this.renderReferenceDots(xAxisMap, yAxisMap, offset, true)}
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
            {this.renderReferenceLines(xAxisMap, yAxisMap, offset, false)}
            {this.renderReferenceDots(xAxisMap, yAxisMap, offset, false)}
            {this.renderBrush(xAxisMap, yAxisMap, offset)}
          </Surface>
          {this.renderLegend(items)}
          {tooltipItem && this.renderTooltip(tooltipItem, items, offset)}
        </div>
      );
    }
  }

  return CategoricalChartWrapper;
};

export default generateCategoricalChart;
