/**
 * @fileOverview Composed Chart
 */
import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Surface from '../container/Surface';
import Tooltip from '../component/Tooltip';

import CartesianChart from './CartesianChart';
import Line from '../cartesian/Line';
import Bar from '../cartesian/Bar';
import Area from '../cartesian/Area';

import Curve from '../shape/Curve';
import Dot from '../shape/Dot';
import Rectangle from '../shape/Rectangle';

import { getPercentValue } from '../util/DataUtils';
import { getPresentationAttributes, findChildByType,
  findAllByType, validateWidthHeight } from '../util/ReactUtils';

class ComposedChart extends CartesianChart {

  static displayName = 'ComposedChart';

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
    style: PropTypes.object,
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
  /**
   * Compose the data of each line
   * @param  {Object} xAxis   The configuration of x-axis
   * @param  {Object} yAxis   The configuration of y-axis
   * @param  {String} dataKey The unique key of a group
   * @return {Array}  Composed data
   */
  getLineComposedData(xAxis, yAxis, dataKey) {
    const { data, layout } = this.props;
    const bandSize = this.getBandSize(layout === 'horizontal' ? xAxis.scale : yAxis.scale);
    const xTicks = this.getAxisTicks(xAxis);
    const yTicks = this.getAxisTicks(yAxis);

    return data.map((entry, index) => ({
      x: layout === 'horizontal' ?
        xTicks[index].coord + bandSize / 2 :
        xAxis.scale(entry[dataKey]),
      y: layout === 'horizontal' ?
        yAxis.scale(entry[dataKey]) :
        yTicks[index].coord + bandSize / 2,
      value: entry[dataKey],
    }));
  }
  /**
   * Compose the data of each area
   * @param  {Object} xAxis   The configuration of x-axis
   * @param  {Object} yAxis   The configuration of y-axis
   * @param  {String} dataKey The unique key of a group
   * @param  {Array} stackedData The stacked data of a area item
   * @return {Array} Composed data
   */
  getAreaComposedData(xAxis, yAxis, dataKey, stackedData) {
    const { data, layout } = this.props;
    const xTicks = this.getAxisTicks(xAxis);
    const yTicks = this.getAxisTicks(yAxis);
    const bandSize = this.getBandSize(layout === 'horizontal' ? xAxis.scale : yAxis.scale);
    const hasStack = stackedData && stackedData.length;

    const points = data.map((entry, index) => {
      const value = hasStack ? stackedData[index] : [0, entry[dataKey]];
      return {
        x: layout === 'horizontal' ? xTicks[index].coord + bandSize / 2 : xAxis.scale(value[1]),
        y: layout === 'horizontal' ? yAxis.scale(value[1]) : yTicks[index].coord + bandSize / 2,
        value: entry[dataKey],
      };
    });

    let range;
    let baseLine;
    let baseLineType;
    if (hasStack) {
      baseLineType = 'curve';
      baseLine = stackedData.map((entry, index) => ({
        x: layout === 'horizontal' ? xTicks[index].coord + bandSize / 2 : xAxis.scale(entry[0]),
        y: layout === 'horizontal' ? yAxis.scale(entry[0]) : yTicks[index].coord + bandSize / 2,
      }));
    } else if (layout === 'horizontal') {
      baseLineType = layout;
      range = yAxis.scale.range();
      baseLine = xAxis.orientation === 'top' ?
        Math.min(range[0], range[1]) :
        Math.max(range[0], range[1]);
    } else {
      baseLineType = layout;
      range = xAxis.scale.range();
      baseLine = yAxis.orientation === 'left' ?
        Math.min(range[0], range[1]) :
        Math.max(range[0], range[1]);
    }

    return { points, baseLine, baseLineType };
  }
  /**
   * Compose the data of each bar
   * @param  {Array}  barPosition The offset and size of each bar
   * @param  {Object} xAxis       The configuration of x-axis
   * @param  {Object} yAxis       The configuration of y-axis
   * @param  {Object} offset      The offset of main part in the svg element
   * @param  {String} dataKey     The unique key of a group
   * @param  {Array} stackedData  The stacked data of a bar item
   * @return {Array} Composed data
   */
  getBarComposedData(barPosition, xAxis, yAxis, offset, dataKey, stackedData) {
    const { layout } = this.props;
    const { dataStartIndex, dataEndIndex } = this.state;
    const data = this.props.data.slice(dataStartIndex, dataEndIndex + 1);
    const pos = barPosition[dataKey];
    const xTicks = this.getAxisTicks(xAxis);
    const yTicks = this.getAxisTicks(yAxis);
    const baseValue = this.getBaseValue(xAxis, yAxis);
    const hasStack = stackedData && stackedData.length;

    return data.map((entry, index) => {
      const value = stackedData ? stackedData[dataStartIndex + index] : [baseValue, entry[dataKey]];
      let x;
      let y;
      let width;
      let height;

      if (layout === 'horizontal') {
        x = xTicks[index].coord + pos.offset;
        y = yAxis.scale(xAxis.orientation === 'top' ? value[0] : value[1]);
        width = pos.size;
        height = xAxis.orientation === 'top' ?
                yAxis.scale(value[1]) - yAxis.scale(value[0]) :
                yAxis.scale(value[0]) - yAxis.scale(value[1]);
      } else {
        x = xAxis.scale(yAxis.orientation === 'left' ? value[0] : value[1]);
        y = yTicks[index].coord + pos.offset;
        width = yAxis.orientation === 'left' ?
                xAxis.scale(value[1]) - xAxis.scale(value[0]) :
                xAxis.scale(value[0]) - xAxis.scale(value[1]);
        height = pos.size;
      }

      return { ...entry, x, y, width, height, value: value[1] };
    });
  }

  getBaseValue(xAxis, yAxis) {
    const { layout } = this.props;
    const scale = layout === 'horizontal' ? yAxis.scale : xAxis.scale;
    const domain = scale.domain();


    return Math.max(Math.min(domain[0], domain[1]), 0);
  }
  /**
   * Calculate the size of each bar and the gap between two bars
   * @param  {Number}   bandSize  The size of each category
   * @param  {sizeList} sizeList  The size of all groups
   * @return {Number} The size of each bar and the gap between two bars
   */
  getBarPosition(bandSize, sizeList) {
    const { barGap, barCategoryGap } = this.props;
    const len = sizeList.length;
    let result;

    // whether or not is barSize setted by user
    if (sizeList[0].barSize === +sizeList[0].barSize) {
      let sum = sizeList.reduce((res, entry) => (res + entry.barSize), 0);
      sum += (len - 1) * barGap;
      const offset = ((bandSize - sum) / 2) >> 0;
      let prev = { offset: offset - barGap, size: 0 };

      result = sizeList.reduce((res, entry) => {
        res[entry.dataKey] = {
          offset: prev.offset + prev.size + barGap,
          size: entry.barSize,
        };
        prev = res[entry.dataKey];

        if (entry.stackList && entry.stackList.length) {
          entry.stackList.forEach(key => {
            res[key] = res[entry.dataKey];
          });
        }
        return res;
      }, {});
    } else {
      const offset = getPercentValue(barCategoryGap, bandSize);
      const size = (bandSize - 2 * offset - (len - 1) * barGap) / len >> 0;

      result = sizeList.reduce((res, entry, i) => {
        res[entry.dataKey] = {
          offset: offset + (size + barGap) * i,
          size,
        };
        if (entry.stackList && entry.stackList.length) {
          entry.stackList.forEach(key => {
            res[key] = res[entry.dataKey];
          });
        }
        return res;
      }, {});
    }

    return result;
  }
  /**
   * Calculate the size of all groups
   * @param  {Object} stackGroups The items grouped by axisId and stackId
   * @return {Object} The size of all groups
   */
  getSizeList(stackGroups) {
    const { layout, barSize } = this.props;

    return Object.keys(stackGroups).reduce((result, axisId) => {
      const sgs = stackGroups[axisId].stackGroups;

      result[axisId] = Object.keys(sgs).reduce((res, stackId) => {
        const { items } = sgs[stackId];
        const firstItem = items[0];

        if (firstItem.type.displayName === 'Bar') {
          const { dataKey } = firstItem.props;

          res.push({
            dataKey,
            stackList: items.slice(1).map(item => item.props.dataKey),
            barSize: firstItem.props.barSize || barSize,
          });
        }

        return res;
      }, []);

      return result;
    }, {});
  }
  /**
   * Calculate the size between two category
   * @param  {Function} scale Scale function
   * @return {Number} Size
   */
  getBandSize(scale) {
    if (scale && scale.bandwidth) {
      return scale.bandwidth();
    }
    return 0;
  }
  /**
   * Handler of mouse entering bar chart
   * @param {String} key  The unique key of a group of data
   * @return {Object}     null
   */
  handleBarMouseEnter(key) {
    this.setState({
      activeBarKey: key,
    });
  }
  /**
   * Handler of mouse leaving area chart
   * @return {Object} null
   */
  handleBarMouseLeave() {
    this.setState({
      activeBarKey: null,
    });
  }
  /**
   * Handler of mouse entering line chart
   * @param {String}       key The unique key of a group of data
   * @return {Object} no return
   */
  handleLineMouseEnter(key) {
    this.setState({
      activeLineKey: key,
    });
  }
  /**
   * Handler of mouse leaving line chart
   * @return {Object} no return
   */
  handleLineMouseLeave() {
    this.setState({
      activeLineKey: null,
    });
  }
  /**
   * Handler of mouse entering area chart
   * @param {String} key  The unique key of a group of data
   * @return {Object} null
   */
  handleAreaMouseEnter(key) {
    this.setState({
      activeAreaKey: key,
    });
  }
  /**
   * Handler of mouse leaving area chart
   * @return {Object} null
   */
  handleAreaMouseLeave() {
    this.setState({
      activeAreaKey: null,
    });
  }

  renderCursor(xAxisMap, yAxisMap, offset) {
    const { children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);
    if (!tooltipItem || !tooltipItem.props.cursor || !this.state.isTooltipActive) {return null;}

    const { layout } = this.props;
    const { activeTooltipIndex } = this.state;
    const axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
    const ids = Object.keys(axisMap);
    const axis = axisMap[ids[0]];
    const bandSize = this.getBandSize(axis.scale);

    const ticks = this.getAxisTicks(axis);
    const start = ticks[activeTooltipIndex].coord;
    const cursorProps = {
      fill: '#f1f1f1',
      ...getPresentationAttributes(tooltipItem.props.cursor),
      x: layout === 'horizontal' ? start : offset.left + 0.5,
      y: layout === 'horizontal' ? offset.top + 0.5 : start,
      width: layout === 'horizontal' ? bandSize : offset.width - 1,
      height: layout === 'horizontal' ? offset.height - 1 : bandSize,
    };

    return React.isValidElement(tooltipItem.props.cursor) ?
      React.cloneElement(tooltipItem.props.cursor, cursorProps) :
      React.createElement(Rectangle, cursorProps);
  }

  /**
   * Draw the lines
   * @param  {Array} items     All the instance of Line
   * @param  {Object} xAxisMap The configuration of all x-axes
   * @param  {Object} yAxisMap The configuration of all y-axes
   * @param  {Object} offset   The offset of main part in the svg element
   * @return {ReactComponent}  All the instances of Line
   */
  renderLineItems(items, xAxisMap, yAxisMap, offset) {
    const { children } = this.props;
    const { activeLineKey, isTooltipActive, activeTooltipIndex } = this.state;
    const tooltipItem = findChildByType(children, Tooltip);
    const hasDot = tooltipItem && isTooltipActive;
    const dotItems = [];

    const lineItems = items.map((child, i) => {
      const { xAxisId, yAxisId, dataKey, strokeWidth, stroke } = child.props;
      const points = this.getLineComposedData(xAxisMap[xAxisId], yAxisMap[yAxisId], dataKey);
      const activePoint = points[activeTooltipIndex];
      const pointStyle = { fill: stroke, strokeWidth: 2, stroke: '#fff' };

      let finalStrokeWidth = strokeWidth === +strokeWidth ? strokeWidth : 1;
      finalStrokeWidth = activeLineKey === dataKey ? finalStrokeWidth + 2 : finalStrokeWidth;

      if (hasDot && activePoint) {
        dotItems.push(<Dot key={`area-dot-${i}`} cx={activePoint.x} cy={activePoint.y} r={4} {...pointStyle}/>);
      }

      return React.cloneElement(child, {
        key: `line-${i}`,
        ...offset,
        strokeWidth: finalStrokeWidth,
        onMouseLeave: ::this.handleLineMouseLeave,
        onMouseEnter: this.handleLineMouseEnter.bind(this, dataKey),
        points,
      });
    }, this);

    return (
      <g key="recharts-line-wrapper">
        <g key="recharts-line">{lineItems}</g>
        <g key="recharts-line-dot">{dotItems}</g>
      </g>
    );
  }

  /**
   * Draw the areas
   * @param  {Array} items     React elements of Area
   * @param  {Object} xAxisMap The configuration of all x-axis
   * @param  {Object} yAxisMap The configuration of all y-axis
   * @param  {Object} offset   The offset of main part in the svg element
   * @param  {Object} stackGroups The items grouped by axisId and stackId
   * @return {ReactComponent} The instances of Area
   */
  renderAreaItems(items, xAxisMap, yAxisMap, offset, stackGroups) {
    const { children, layout } = this.props;
    const { activeAreaKey, isTooltipActive, activeTooltipIndex } = this.state;
    const tooltipItem = findChildByType(children, Tooltip);
    const hasDot = tooltipItem && isTooltipActive;
    const dotItems = [];

    const areaItems = items.reduce((result, child, i) => {
      const { xAxisId, yAxisId, dataKey, fillOpacity, fill } = child.props;
      const axisId = layout === 'horizontal' ? xAxisId : yAxisId;
      const stackedData = stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack
                        && this.getStackedDataOfItem(child, stackGroups[axisId].stackGroups);
      const composeData = this.getAreaComposedData(xAxisMap[xAxisId], yAxisMap[yAxisId], dataKey, stackedData);

      const activePoint = composeData.points && composeData.points[activeTooltipIndex];
      const pointStyle = { fill, strokeWidth: 2, stroke: '#fff' };

      if (hasDot && activePoint) {
        dotItems.push(<Dot key={`area-dot-${i}`} cx={activePoint.x} cy={activePoint.y} r={4} {...pointStyle}/>);
      }

      let finalFillOpacity = fillOpacity === +fillOpacity ? fillOpacity : Area.defaultProps.fillOpacity;
      finalFillOpacity = activeAreaKey === dataKey ? Math.min(finalFillOpacity * 1.2, 1) : finalFillOpacity;

      const area = React.cloneElement(child, {
        key: `area-${i}`,
        ...offset,
        ...composeData,
        fillOpacity: finalFillOpacity,
        onMouseLeave: ::this.handleAreaMouseLeave,
        onMouseEnter: this.handleAreaMouseEnter.bind(this, dataKey),
      });

      return activeAreaKey === dataKey ? [...result, area] : [area, ...result];
    }, []);

    return (
      <g key="recharts-area-wrapper">
        <g key="recharts-area">{areaItems}</g>
        <g key="recharts-area-dot">{dotItems}</g>
      </g>
    );
  }

  /**
   * Draw the bars
   * @param  {Array} items     All the instance of Bar
   * @param  {Object} xAxisMap The configuration of all x-axis
   * @param  {Object} yAxisMap The configuration of all y-axis
   * @param  {Object} offset   The offset of main part in the svg element
   * @param  {Object} stackGroups The items grouped by axisId and stackId
   * @return {ReactComponent}  All the instances of Bar
   */
  renderBarItems(items, xAxisMap, yAxisMap, offset, stackGroups) {
    if (!items || !items.length) {return null;}

    const { layout } = this.props;
    const sizeList = this.getSizeList(stackGroups);

    const barPositionMap = {};

    return items.map((child, i) => {
      const { xAxisId, yAxisId, dataKey } = child.props;
      const axisId = layout === 'horizontal' ? xAxisId : yAxisId;
      const bandSize = this.getBandSize(
                        layout === 'horizontal' ?
                        xAxisMap[xAxisId].scale :
                        yAxisMap[yAxisId].scale
                      );
      const barPosition = barPositionMap[axisId] || this.getBarPosition(bandSize, sizeList[axisId]);
      const stackedData = stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack
                        && this.getStackedDataOfItem(child, stackGroups[axisId].stackGroups);

      return React.cloneElement(child, {
        key: `bar-${i}`,
        layout,
        onMouseLeave: ::this.handleBarMouseLeave,
        onMouseEnter: this.handleBarMouseEnter.bind(this, dataKey),
        data: this.getBarComposedData(barPosition, xAxisMap[xAxisId], yAxisMap[yAxisId], offset, dataKey, stackedData),
      });
    }, this);
  }

  render() {
    if (!validateWidthHeight(this)) {return null;}

    const { style, children, className, layout, width, height } = this.props;
    const numberAxisName = layout === 'horizontal' ? 'yAxis' : 'xAxis';
    const lineItems = findAllByType(children, Line);
    const barItems = findAllByType(children, Bar);
    const areaItems = findAllByType(children, Area);
    const items = [...lineItems, ...barItems, ...areaItems];

    const stackGroups = this.getStackGroupsByAxisId(items, `${numberAxisName}Id`);

    let xAxisMap = this.getAxisMap('xAxis', items, numberAxisName === 'xAxis' && stackGroups);
    let yAxisMap = this.getAxisMap('yAxis', items, numberAxisName === 'yAxis' && stackGroups);
    const offset = this.getOffset(xAxisMap, yAxisMap);

    xAxisMap = this.getFormatAxisMap(xAxisMap, offset, 'xAxis');
    yAxisMap = this.getFormatAxisMap(yAxisMap, offset, 'yAxis');

    return (
      <div className={classNames('recharts-wrapper', className)}
        style={{ position: 'relative', cursor: 'default', ...style }}
        onMouseEnter={this.handleMouseEnter.bind(this, offset, xAxisMap, yAxisMap)}
        onMouseMove={this.handleMouseMove.bind(this, offset, xAxisMap, yAxisMap)}
        onMouseLeave={::this.handleMouseLeave}
      >
        <Surface width={width} height={height}>
          {this.renderGrid(xAxisMap, yAxisMap, offset)}
          {this.renderReferenceLines(xAxisMap, yAxisMap, offset)}
          {this.renderXAxis(xAxisMap)}
          {this.renderYAxis(yAxisMap)}
          {this.renderCursor(xAxisMap, yAxisMap, offset)}
          {this.renderAreaItems(areaItems, xAxisMap, yAxisMap, offset, stackGroups)}
          {this.renderBarItems(barItems, xAxisMap, yAxisMap, offset, stackGroups)}
          {this.renderLineItems(lineItems, xAxisMap, yAxisMap, offset)}
        </Surface>

        {this.renderLegend(items)}
        {this.renderTooltip(items, offset)}
      </div>
    );
  }
}

export default ComposedChart;
