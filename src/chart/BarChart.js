/**
 * @fileOverview Bar Chart
 */
import React from 'react';
import classNames from 'classnames';
import Surface from '../container/Surface';
import Tooltip from '../component/Tooltip';
import Rectangle from '../shape/Rectangle';
import { getPercentValue } from '../util/DataUtils';
import { getPresentationAttributes, findChildByType,
  findAllByType, validateWidthHeight } from '../util/ReactUtils';
import CartesianChart from './CartesianChart';
import Bar from '../cartesian/Bar';
import pureRender from '../util/PureRender';

@pureRender
class BarChart extends CartesianChart {

  static displayName = 'BarChart';

  static defaultProps = {
    style: {},
    barCategoryGap: '10%',
    barGap: 4,
    layout: 'horizontal',
    margin: { top: 5, right: 5, bottom: 5, left: 5 },
  };

  /**
   * Compose the data of each group
   * @param  {Array}  barPosition The offset and size of each bar
   * @param  {Object} xAxis       The configuration of x-axis
   * @param  {Object} yAxis       The configuration of y-axis
   * @param  {Object} offset      The offset of main part in the svg element
   * @param  {String} dataKey     The unique key of a group
   * @param  {Array} stackedData  The stacked data of a bar item
   * @return {Array} Composed data
   */
  getComposedData(barPosition, xAxis, yAxis, offset, dataKey, stackedData) {
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
    const numberAxis = layout === 'horizontal' ? yAxis : xAxis;
    const domain = numberAxis.scale.domain();

    if (numberAxis.type === 'number') {
      return Math.max(Math.min(domain[0], domain[1]), 0);
    }

    return domain[0];
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

      result[axisId] = Object.keys(sgs).map(stackId => {
        const { items } = sgs[stackId];
        const { dataKey } = items[0].props;

        return {
          dataKey,
          stackList: items.slice(1).map(item => item.props.dataKey),
          barSize: items[0].props.barSize || barSize,
        };
      });

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
  handleBarMouseLeave = () => {
    this.setState({
      activeBarKey: null,
    });
  };

  renderCursor(xAxisMap, yAxisMap, offset) {
    const { children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

    if (!tooltipItem || !tooltipItem.props.cursor || !this.state.isTooltipActive) {return null;}

    const { layout } = this.props;
    const { activeTooltipIndex } = this.state;
    const axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
    const ids = Object.keys(axisMap);
    const axis = axisMap[ids[0]];
    const bandSize = axis.scale.bandwidth();

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
   * Draw the main part of bar chart
   * @param  {Array} items     All the instance of Bar
   * @param  {Object} xAxisMap The configuration of all x-axis
   * @param  {Object} yAxisMap The configuration of all y-axis
   * @param  {Object} offset   The offset of main part in the svg element
   * @param  {Object} stackGroups The items grouped by axisId and stackId
   * @return {ReactComponent}  All the instances of Bar
   */
  renderItems(items, xAxisMap, yAxisMap, offset, stackGroups) {
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
        onMouseLeave: this.handleBarMouseLeave,
        onMouseEnter: this.handleBarMouseEnter.bind(this, dataKey),
        data: this.getComposedData(
          barPosition, xAxisMap[xAxisId], yAxisMap[yAxisId], offset, dataKey, stackedData
        ),
      });
    }, this);
  }

  render() {
    if (!validateWidthHeight(this)) {return null;}

    const { style, children, className, layout, width, height } = this.props;
    const numberAxisName = layout === 'horizontal' ? 'yAxis' : 'xAxis';
    const items = findAllByType(children, Bar);
    const stackGroups = this.getStackGroupsByAxisId(items, `${numberAxisName}Id`);

    let xAxisMap = this.getAxisMap('xAxis', items, numberAxisName === 'xAxis' && stackGroups);
    let yAxisMap = this.getAxisMap('yAxis', items, numberAxisName === 'yAxis' && stackGroups);
    const offset = this.getOffset(items, xAxisMap, yAxisMap);

    xAxisMap = this.getFormatAxisMap(xAxisMap, offset, 'xAxis');
    yAxisMap = this.getFormatAxisMap(yAxisMap, offset, 'yAxis');

    return (
      <div
        className={classNames('recharts-wrapper', className)}
        style={{ position: 'relative', cursor: 'default', ...style }}
        onMouseEnter={this.handleMouseEnter.bind(this, offset, xAxisMap, yAxisMap)}
        onMouseMove={this.handleMouseMove.bind(this, offset, xAxisMap, yAxisMap)}
        onMouseLeave={this.handleMouseLeave}
      >
        <Surface width={width} height={height}>
          {this.renderGrid(xAxisMap, yAxisMap, offset)}
          {this.renderReferenceLines(xAxisMap, yAxisMap, offset)}
          {this.renderXAxis(xAxisMap)}
          {this.renderYAxis(yAxisMap)}
          {this.renderCursor(xAxisMap, yAxisMap, offset)}
          {this.renderItems(items, xAxisMap, yAxisMap, offset, stackGroups)}
          {this.renderBrush(xAxisMap, yAxisMap, offset)}
        </Surface>

        {this.renderLegend(items)}
        {this.renderTooltip(items, offset)}
      </div>
    );
  }
}

export default BarChart;
