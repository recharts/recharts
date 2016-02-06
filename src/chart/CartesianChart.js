/**
 * @fileOverview Cartesian Chart
 */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { getNiceTickValues } from 'recharts-scale';
import D3Scale from 'd3-scale';
import D3Shape from 'd3-shape';
import invariant from 'invariant';
import OuiDomUtils from 'oui-dom-utils';

import Layer from '../container/Layer';
import Tooltip from '../component/Tooltip';
import Legend from '../component/Legend';

import { findAllByType, findChildByType } from '../util/ReactUtils';
import _ from 'lodash';

import CartesianAxis from '../cartesian/CartesianAxis';
import CartesianGrid from '../cartesian/CartesianGrid';
import ReferenceLine from '../cartesian/ReferenceLine';
import XAxis from '../cartesian/XAxis';
import YAxis from '../cartesian/YAxis';
import Brush from '../cartesian/Brush';

const ORIENT_MAP = {
  xAxis: ['bottom', 'top'],
  yAxis: ['left', 'right'],
};

/**
 * The base class of chart in cartesian coordinate system
 */
class CartesianChart extends Component {

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.object),
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    margin: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number,
    }),

    className: PropTypes.string,
    stackType: PropTypes.oneOf(['value', 'percent']),
    title: PropTypes.string,
    style: PropTypes.object,
    barCategoryGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    barGap: PropTypes.number,
    barSize: PropTypes.number,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  static defaultProps = {
    style: {},
    barCategoryGap: '10%',
    barGap: 4,
    layout: 'horizontal',
    margin: { top: 5, right: 5, bottom: 5, left: 5 },
  };

  constructor(props) {
    super(props);

    this.validateAxes();
  }

  state = {
    dataStartIndex: 0,
    dataEndIndex: this.props.data.length - 1,
    activeTooltipIndex: -1,
    activeTooltipLabel: '',
    activeTooltipCoord: { x: 0, y: 0 },
    isTooltipActive: false,
    activeLineKey: null,
    activeBarKey: null,
  };

  getStackGroupsByAxisId(items, axisIdKey) {
    const stackGroups = items.reduce((result, item) => {
      const { stackId, dataKey } = item.props;
      const axisId = item.props[axisIdKey];

      if (!result[axisId]) {
        result[axisId] = { hasStack: false, stackGroups: {} };
      }

      if (_.isNumber(stackId) || _.isString(stackId)) {
        if (!result[axisId].stackGroups[stackId]) {
          result[axisId].stackGroups[stackId] = {
            items: [],
          };
        }
        result[axisId].stackGroups[stackId].items.push(item);

        if (result[axisId].stackGroups[stackId].items.length >= 2) {
          result[axisId].hasStack = true;
        }
      } else {
        result[axisId].stackGroups[_.uniqueId('_stackId_')] = {
          items: [item],
        };
      }

      return result;
    }, {});

    return Object.keys(stackGroups).reduce((result, axisId) => {
      const group = stackGroups[axisId];

      if (group.hasStack) {
        group.stackGroups = Object.keys(group.stackGroups).reduce((res, stackId) => {
          const g = group.stackGroups[stackId];
          res[stackId] = {
            items: g.items,
            stackedData: this.getStackedData(g.items),
          };

          return res;
        }, {});
      }
      result[axisId] = group;
      return result;
    }, {});
  }

  getStackedData(stackItems) {
    const { data } = this.props;
    const dataKeys = stackItems.map(item => item.props.dataKey);
    const stack = D3Shape.stack()
                  .keys(dataKeys)
                  .value((d, key) => (+d[key] || 0))
                  .order(D3Shape.stackOrderNone)
                  .offset(D3Shape.stackOffsetNone);

    return stack(data);
  }

  getStackedDataOfItem(item, stackGroups) {
    const { stackId } = item.props;

    if (_.isNumber(stackId) || _.isString(stackId)) {
      const group = stackGroups[stackId];

      if (group && group.items.length) {
        let itemIndex = -1;

        for (let i = 0, len = group.items.length; i < len; i++) {
          if (group.items[i] === item) {
            itemIndex = i;
            break;
          }
        }
        return itemIndex >= 0 ? group.stackedData[itemIndex] : null;
      }
    }

    return null;
  }
  /**
   * Calculate coordinate of cursor in chart
   * @param  {Object} e               Event object
   * @param  {Object} containerOffset The offset of main part in the svg element
   * @return {Object}                 {chartX, chartY}
   */
  getChartPosition(e, containerOffset) {
    return {
      chartX: Math.round(e.pageX - containerOffset.left),
      chartY: Math.round(e.pageY - containerOffset.top),
    };
  }

  /**
   * get domain of ticks
   * @param  {Array} ticks Ticks of axis
   * @param  {String} type  The type of axis
   * @return {Array} domain
   */
  getDomainOfTicks(ticks, type) {
    if (type === 'number') {
      return [Math.min.apply(null, ticks), Math.max.apply(null, ticks)];
    }

    return ticks;
  }
  /**
   * Get domain of data by key
   * @param  {String} key  The unique key of a group of data
   * @param  {String} type The type of axis
   * @return {Array} Domain of data
   */
  getDomainByKey(key, type) {
    const { data } = this.props;
    const { dataStartIndex, dataEndIndex } = this.state;
    const domain = data.slice(dataStartIndex, dataEndIndex + 1)
                       .map(entry => entry[key] || 0);

    return type === 'number' ? [
      Math.min.apply(null, domain),
      Math.max.apply(null, domain),
    ] : domain;
  }

  getDomainOfStackGroups(stackGroups) {
    const { dataStartIndex, dataEndIndex } = this.state;

    return Object.keys(stackGroups).reduce((result, stackId) => {
      const group = stackGroups[stackId];
      const { stackedData } = group;
      const minList = stackedData[0].slice(dataStartIndex, dataEndIndex + 1);
      const maxList = stackedData[stackedData.length - 1].slice(dataStartIndex, dataEndIndex + 1);
      const min = minList.reduce((res, entry) => Math.min(res, entry[0]), Infinity);
      const max = maxList.reduce((res, entry) => Math.max(res, entry[1]), -Infinity);

      return [Math.min(min, result[0]), Math.max(max, result[1])];
    }, [Infinity, -Infinity]);
  }
  /**
   * Get domain of data by the configuration of item element
   * @param  {Array} items  The instances of item
   * @param  {String} type  The type of axis, number - Number Axis, category - Category Axis
   * @return {Array}        Domain
   */
  getDomainOfItemsWithSameAxis(items, type) {
    const domains = items.map(item => this.getDomainByKey(item.props.dataKey, type));

    if (type === 'number') {
      // Calculate the domain of number axis
      return domains.reduce((result, entry) => [
        Math.min(result[0], entry[0]),
        Math.max(result[1], entry[1]),
      ], [Infinity, -Infinity]);
    }

    const tag = {};
    // Get the union set of category axis
    return domains.reduce((result, entry) => {
      for (let i = 0, len = entry.length; i < len; i++) {
        if (!tag[entry[i]]) {
          tag[entry[i]] = true;

          result.push(entry[i]);
        }
      }
      return result;
    }, []);
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
    const { layout } = this.props;
    const { dataEndIndex, dataStartIndex } = this.state;
    const len = dataEndIndex - dataStartIndex + 1;
    const isCategoryAxis = (layout === 'horizontal' && axisType === 'xAxis') ||
                        (layout === 'vertical' && axisType === 'yAxis');

    // Eliminate duplicated axes
    const axisMap = axes.reduce((result, child) => {
      const { type, dataKey } = child.props;
      const axisId = child.props[axisIdKey];

      if (!result[axisId]) {
        let domain;
        let isDomainFixed = false;

        if (dataKey) {
          domain = this.getDomainByKey(dataKey, type);
        } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack
          && type === 'number') {
          domain = this.getDomainOfStackGroups(stackGroups[axisId].stackGroups);
        } else if (isCategoryAxis) {
          domain = _.range(0, len);
        } else {
          domain = this.getDomainOfItemsWithSameAxis(items.filter(entry =>
            entry.props[axisIdKey] === axisId
          ), type);
        }
        if (type === 'number' && child.props.domain) {
          isDomainFixed = true;
          domain = this.parseSpecifiedDomain(child.props.domain, domain);
        }

        return { ...result, [axisId]: {
          ...child.props,
          axisType,
          domain,
          isDomainFixed,
        } };
      }

      return result;
    }, {});

    return axisMap;
  }

  /**
   * Get the configuration of axis by the options of item, this kind of axis does not display in chart
   * @param  {Array} items       The instances of item
   * @param  {ReactElement} Axis Axis Component
   * @param  {String} axisType   The type of axis, xAxis - x-axis, yAxis - y-axis
   * @param  {String} axisIdKey  The unique id of an axis
   * @param  {Object} stackGroups The items grouped by axisId and stackId
   * @return {Object}            Configuration
   */
  getAxisMapByItems(items, Axis, axisType, axisIdKey, stackGroups) {
    const { layout } = this.props;
    const { dataEndIndex, dataStartIndex } = this.state;
    const len = dataEndIndex - dataStartIndex + 1;
    let index = -1;
    const isCategoryAxis = (layout === 'horizontal' && axisType === 'xAxis') ||
                        (layout === 'vertical' && axisType === 'yAxis');

    // The default type of x-axis is category axis,
    // The default contents of x-axis is the serial numbers of data
    // The default type of y-axis is number axis
    // The default contents of y-axis is the domain of data
    const axisMap = items.reduce((result, child) => {
      const axisId = child.props[axisIdKey];

      if (!result[axisId]) {
        index++;

        let domain;
        if (isCategoryAxis) {
          domain = _.range(0, len);
        } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack) {
          domain = this.getDomainOfStackGroups(stackGroups[axisId].stackGroups);
        } else {
          domain = this.getDomainOfItemsWithSameAxis(
            items.filter(entry => entry.props[axisIdKey] === axisId), 'number'
          );
        }

        return {
          ...result,
          [axisId]: {
            axisType,
            type: Axis.defaultProps.type,
            hide: true,
            isAutoGenerated: true,
            width: Axis.defaultProps.width,
            height: Axis.defaultProps.height,
            tickCount: Axis.defaultProps.tickCount,
            orientation: ORIENT_MAP[axisType][index % 2],
            domain,
          },
        };
      }

      return result;
    }, {});

    return axisMap;
  }

  /**
   * Calculate the offset of main part in the svg element
   * @param  {Object} xAxisMap  The configuration of x-axis
   * @param  {Object} yAxisMap  The configuration of y-axis
   * @return {Object} The offset of main part in the svg element
   */
  getOffset(xAxisMap, yAxisMap) {
    const { width, height, margin, children } = this.props;
    const brushItem = findChildByType(children, Brush);

    const offsetH = Object.keys(yAxisMap).reduce((result, id) => {
      const entry = yAxisMap[id];
      const orientation = entry.orientation;

      result[orientation] += entry.hide ? 0 : entry.width;

      return result;
    }, { left: margin.left || 0, right: margin.right || 0 });

    const offsetV = Object.keys(xAxisMap).reduce((result, id) => {
      const entry = xAxisMap[id];
      const orientation = entry.orientation;

      result[orientation] += entry.hide ? 0 : entry.height;

      return result;
    }, { top: margin.top || 0, bottom: margin.bottom || 0 });

    if (brushItem) {
      offsetV.bottom += brushItem.props.height || Brush.defaultProps.height;
    }

    return {
      ...offsetH,
      ...offsetV,
      width: width - offsetH.left - offsetH.right,
      height: height - offsetV.top - offsetV.bottom,
    };
  }
  /**
   * Get the main color of each graphic item
   * @param  {ReactElement} item A graphic item
   * @return {String}            Color
   */
  getMainColorOfItem(item) {
    const displayName = item.type.displayName;
    let result;

    switch (displayName) {
      case 'Line':
        result = item.props.stroke;
        break;
      default:
        result = item.props.fill;
        break;
    }

    return result;
  }
  /**
   * Configure the scale function of axis
   * @param {Object} scale The scale function
   * @param {Object} opts  The configuration of axis
   * @return {Object}      null
   */
  setTicksOfScale(scale, opts) {
    // Give priority to use the options of ticks
    if (opts.ticks && opts.ticks) {
      scale.domain(this.getDomainOfTicks(opts.ticks, opts.type));

      return;
    }
    if (opts.type === 'number' && opts.isAutoGenerated) {
      scale.domain([0, scale.domain()[1]]);
    } else if (opts.tickCount && opts.type === 'number' && !opts.isDomainFixed) {
      // Calculate the ticks by the number of grid when the axis is a number axis
      const domain = scale.domain();
      const tickValues = getNiceTickValues(domain, opts.tickCount);

      opts.ticks = tickValues;
      scale.domain(this.getDomainOfTicks(tickValues, opts.type));
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
        scale = D3Scale.linear().domain(domain).range(range);
      } else if (displayName === 'LineChart' || displayName === 'AreaChart') {
        scale = D3Scale.point().domain(domain).range(range);
      } else {
        scale = D3Scale.band().domain(domain).range(range);
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

      result[id] = { ...axis,
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
   * Get the ticks of an axis
   * @param  {Object}  axis The configuration of an axis
   * @param {Boolean} isGrid Whether or not are the ticks in grid
   * @return {Array}  Ticks
   */
  getAxisTicks(axis, isGrid = false) {
    const scale = axis.scale;
    const offset = isGrid && axis.type === 'category' ? scale.bandwidth() / 2 : 0;

    if (axis.ticks) {
      return axis.ticks.map(entry => (
        { coord: scale(entry) + offset, value: entry }
      ));
    }

    if (scale.ticks) {
      return scale.ticks(axis.tickCount).map(entry => (
        { coord: scale(entry) + offset, value: entry }
      ));
    }

    return scale.domain().map((entry) => (
      { coord: scale(entry) + offset, value: entry }
    ));
  }

  /**
   * Calculate the ticks of grid
   * @param  {Array} ticks The ticks in axis
   * @param {Number} min   The minimun value of axis
   * @param {Number} max   The maximun value of axis
   * @return {Array}       Ticks
   */
  getGridTicks(ticks, min, max) {
    let hasMin;
    let hasMax;
    let values;

    values = ticks.map(entry => {
      if (entry.coord === min) { hasMin = true;}
      if (entry.coord === max) { hasMax = true;}

      return entry.coord;
    });

    if (!hasMin) { values.push(min);}
    if (!hasMax) { values.push(max);}

    return values;
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
    const isIn = e.chartX >= offset.left && e.chartX <= offset.left + offset.width
      && e.chartY >= offset.top && e.chartY <= offset.top + offset.height;

    if (!isIn) {return null;}

    const { layout } = this.props;
    const axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
    const pos = layout === 'horizontal' ? e.chartX : e.chartY;
    const ids = Object.keys(axisMap);
    const axis = axisMap[ids[0]];
    const ticks = this.getAxisTicks(axis, true);

    let index = 0;
    const len = ticks.length;

    if (len > 1) {
      for (let i = 0; i < len; i++) {
        if ((i === 0 && pos <= (ticks[i].coord + ticks[i + 1].coord) / 2)
          || (i > 0 && i < len - 1 && pos > (ticks[i].coord + ticks[i - 1].coord) / 2
            && pos <= (ticks[i].coord + ticks[i + 1].coord) / 2)
          || (i === len - 1 && pos > (ticks[i].coord + ticks[i - 1].coord) / 2)) {
          index = i;
          break;
        }
      }
    }

    return {
      activeTooltipIndex: index,
      activeTooltipLabel: ticks[index].value,
      activeTooltipCoord: {
        x: layout === 'horizontal' ? ticks[index].coord : e.chartX,
        y: layout === 'horizontal' ? e.chartY : ticks[index].coord,
      },
    };
  }
  /**
   * Get the content to be displayed in the tooltip
   * @param  {Array} items The instances of item
   * @return {Array}       The content of tooltip
   */
  getTooltipContent(items) {
    const { activeLineKey, activeBarKey, activeAreaKey, activeTooltipIndex, dataStartIndex, dataEndIndex } = this.state;
    const data = this.props.data.slice(dataStartIndex, dataEndIndex + 1);

    if (activeTooltipIndex < 0 || !items || !items.length) {
      return null;
    }

    let activeItems = items;

    if (activeLineKey) {
      activeItems = items.filter(item => item.props.dataKey === activeLineKey && item.type.displayName === 'Line');
    } else if (activeBarKey) {
      activeItems = items.filter(item => item.props.dataKey === activeBarKey && item.type.displayName === 'Bar');
    } else if (activeAreaKey) {
      activeItems = items.filter(item => item.props.dataKey === activeAreaKey && item.type.displayName === 'Area');
    }

    return activeItems.map((child) => {
      const { dataKey, name, unit, formatter } = child.props;

      return {
        key: name || dataKey,
        unit: unit || '',
        color: this.getMainColorOfItem(child),
        value: data[activeTooltipIndex][dataKey],
        formatter,
      };
    });
  }

  validateAxes() {
    const { layout, children } = this.props;
    const xAxes = findAllByType(children, XAxis);
    const yAxes = findAllByType(children, YAxis);

    if (layout === 'horizontal' && xAxes && xAxes.length) {
      xAxes.forEach(axis => {
        invariant(axis.props.type === 'category',
          'x-axis should be category axis when the layout is horizontal'
        );
      });
    } else if (layout === 'vertical') {
      const displayName = this.constructor.displayName;

      invariant(yAxes && yAxes.length,
        `You should add <YAxis type="number"/> in ${displayName}.` +
        `The layout is vertical now, y-axis should be category axis,` +
        `but y-axis is number axis when no YAxis is added.`
      );
      invariant(xAxes && xAxes.length,
        `You should add <XAxis /> in ${displayName}.` +
        `The layout is vertical now, x-axis is category when no XAxis is added.`
      );

      if (yAxes && yAxes.length) {
        yAxes.forEach(axis => {
          invariant(axis.props.type === 'category',
            'y-axis should be category axis when the layout is vertical'
          );
        });
      }
    }

    return null;
  }

  parseSpecifiedDomain(specifiedDomain, autoDomain) {
    if (!_.isArray(specifiedDomain)) {
      return autoDomain;
    }
    const domain = [];
    if (!_.isNumber(specifiedDomain[0]) || specifiedDomain[0] > autoDomain[0]) {
      domain[0] = autoDomain[0];
    } else {
      domain[0] = specifiedDomain[0];
    }
    if (!_.isNumber(specifiedDomain[1]) || specifiedDomain[1] < autoDomain[1]) {
      domain[1] = autoDomain[1];
    } else {
      domain[1] = specifiedDomain[1];
    }

    return domain;
  }

  handleBrushChange({ startIndex, endIndex }) {
    this.setState({
      dataStartIndex: startIndex,
      dataEndIndex: endIndex,
    });
  }

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
    const containerOffset = OuiDomUtils.getOffset(container);
    const ne = this.getChartPosition(e, containerOffset);
    const mouse = this.getMouseInfo(xAxisMap, yAxisMap, offset, ne);

    if (mouse) {
      this.setState({
        ...mouse,
        isTooltipActive: true,
        chartX: ne.chartX,
        chartY: ne.chartY,
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
    const containerOffset = OuiDomUtils.getOffset(container);
    const ne = this.getChartPosition(e, containerOffset);
    const mouse = this.getMouseInfo(xAxisMap, yAxisMap, offset, ne);

    if (mouse) {
      this.setState({
        ...mouse,
        isTooltipActive: true,
        chartX: ne.chartX,
        chartY: ne.chartY,
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
  handleMouseLeave() {
    this.setState({
      isTooltipActive: false,
    });
  }

   /**
   * Draw x-axes
   * @param {Object} xAxisMap The configuration of all x-axes
   * @return {ReactElement} The instance of x-axes
   */
  renderXAxis(xAxisMap) {
    const { width, height } = this.props;
    const ids = xAxisMap && Object.keys(xAxisMap);

    if (ids && ids.length) {
      const xAxes = [];

      for (let i = 0, len = ids.length; i < len; i++) {
        const axis = xAxisMap[ids[i]];

        if (!axis.hide) {
          xAxes.push((
            <CartesianAxis
              {...axis}
              x={axis.x}
              y={axis.y}
              width={axis.width}
              height={axis.height}
              key={`x-axis-${ids[i]}`}
              orientation={axis.orientation}
              viewBox={{ x: 0, y: 0, width, height }}
              ticks={this.getAxisTicks(axis, true)}
            />
          ));
        }
      }

      return xAxes.length ? <Layer key="x-axis-layer" className="recharts-x-axis">{xAxes}</Layer> : null;
    }
  }

  /**
   * Draw y-axes
   * @param  {Object} yAxisMap The configuration of all y-axes
   * @return {ReactElement} The instance of y-axes
   */
  renderYAxis(yAxisMap) {
    const { width, height } = this.props;
    const ids = yAxisMap && Object.keys(yAxisMap);

    if (ids && ids.length) {
      const yAxes = [];
      for (let i = 0, len = ids.length; i < len; i++) {
        const axis = yAxisMap[ids[i]];

        if (!axis.hide) {
          yAxes.push((
            <CartesianAxis
              {...axis}
              key={'y-axis-' + ids[i]}
              x={axis.x}
              y={axis.y}
              width={axis.width}
              height={axis.height}
              orientation={axis.orientation}
              viewBox={{ x: 0, y: 0, width, height }}
              ticks={this.getAxisTicks(axis, true)}
            />
          ));
        }
      }

      return yAxes.length ? <Layer key="y-axis-layer" className="recharts-y-axis">{yAxes}</Layer> : null;
    }
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

    if (!gridItem) {return null;}

    const xIds = Object.keys(xAxisMap);
    const yIds = Object.keys(yAxisMap);
    const xAxis = xAxisMap[xIds[0]];
    const yAxis = yAxisMap[yIds[0]];

    const verticalPoints = this.getGridTicks(CartesianAxis.getTicks({
      ...CartesianAxis.defaultProps, ...xAxis,
      ticks: this.getAxisTicks(xAxis, true),
      viewBox: { x: 0, y: 0, width, height },
    }), offset.left, offset.left + offset.width);

    const horizontalPoints = this.getGridTicks(CartesianAxis.getTicks({
      ...CartesianAxis.defaultProps, ...yAxis,
      ticks: this.getAxisTicks(yAxis, true),
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
    const legendItem = findChildByType(children, Legend);
    if (!legendItem) {return null;}

    const legendData = items.map((child) => {
      const { dataKey, name, legendType } = child.props;

      return {
        type: legendType || 'square',
        color: this.getMainColorOfItem(child),
        value: name || dataKey,
      };
    }, this);

    return React.cloneElement(legendItem, {
      ...Legend.getWithHeight(legendItem, width, height),
      payload: legendData,
    });
  }
  /**
   * Draw Tooltip
   * @param  {Array} items   The instances of item
   * @param  {Object} offset The offset of main part in the svg element
   * @return {ReactElement}  The instance of Tooltip
   */
  renderTooltip(items, offset) {
    const { children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

    if (!tooltipItem) {
      return null;
    }

    const { chartX, chartY, isTooltipActive,
          activeTooltipLabel, activeTooltipCoord } = this.state;
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
      mouseX: chartX,
      mouseY: chartY,
    });
  }

  renderBrush(xAxisMap, yAxisMap, offset) {
    const { children, data } = this.props;
    const brushItem = findChildByType(children, Brush);

    if (!brushItem) {return null;}

    const dataKey = brushItem.props.dataKey;
    const height = (brushItem.props.height || Brush.defaultProps.height) + 1;

    return React.cloneElement(brushItem, {
      onChange: ::this.handleBrushChange,
      data: data.map(entry => entry[dataKey]),
      x: offset.left,
      y: offset.top + offset.height + offset.bottom - height,
      width: offset.width,
    });

  }

  renderReferenceLines(xAxisMap, yAxisMap, offset) {
    const { children } = this.props;
    const lines = findAllByType(children, ReferenceLine);

    if (!lines || !lines.length) {return null;}

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
}

export default CartesianChart;
