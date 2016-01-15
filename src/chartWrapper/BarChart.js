import React from 'react';
import CartesianChart from './CartesianChart';
import LodashUtils from '../util/LodashUtils';

import Surface from '../container/Surface';
import ReactUtils from '../util/ReactUtils';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';
import Bar from '../chart/Bar';
import BarItem from './BarItem';
import Rectangle from '../shape/Rectangle';


class BarChart extends CartesianChart {

  static displayName = 'BarChart';

  static defaultProps = {
    style: {},
    barOffset: '10%',
    barGap: 4,
    layout: 'horizontal',
    margin: { top: 5, right: 5, bottom: 5, left: 5 },
  };

  displayName = 'BarChart';

  constructor(props) {
    super(props);
  }
    /**
   * Compose the data of each group
   * @param  {Array}  barPosition The offset and size of each bar
   * @param  {Object} xAxis       The configuration of x-axis
   * @param  {Object} yAxis       The configuration of y-axis
   * @param  {Object} offset      The offset of main part in the svg element
   * @param  {String} dataKey     The unique key of a group
   * @return {Array} Composed data
   */
  getComposeData(barPosition, xAxis, yAxis, offset, dataKey) {
    const { layout } = this.props;
    const { dataStartIndex, dataEndIndex } = this.state;
    const data = this.props.data.slice(dataStartIndex, dataEndIndex + 1);
    const pos = barPosition[dataKey];
    const xTicks = this.getAxisTicks(xAxis);
    const yTicks = this.getAxisTicks(yAxis);
    const baseline = this.getBaseLine(xAxis, yAxis);
    return data.map((entry, index) => {
      const value = entry[dataKey];
      let x;
      let y;
      let width;
      let height;

      if (layout === 'horizontal') {
        x = xTicks[index].coord + pos.offset;
        y = xAxis.orient === 'top' ? offset.top : yAxis.scale(value);
        width = pos.size;
        height = xAxis.orient === 'top' ?
                yAxis.scale(value) - baseline :
                baseline - yAxis.scale(value);
      } else {
        x = yAxis.orient === 'left' ? offset.left : xAxis.scale(value);
        y = yTicks[index].coord + pos.offset;
        width = yAxis.orient === 'left' ?
                xAxis.scale(value) - baseline :
                baseline - xAxis.scale(value);
        height = pos.size;
      }

      return { ...entry, x, y, width, height, value };
    });
  }

  getBaseLine(xAxis, yAxis) {
    const { layout } = this.props;
    const scale = layout === 'horizontal' ? yAxis.scale : xAxis.scale;
    const domain = scale.domain();
    const min = Math.max(Math.min(domain[0], domain[1]), 0);

    return scale(min);
  }
  /**
   * Calculate the size of each bar and the gap between two bars
   * @param  {Number}   bandSize  The size of each category
   * @param  {sizeList} sizeList  The size of all groups
   * @return {Number} The size of each bar and the gap between two bars
   */
  getBarPosition(bandSize, sizeList) {
    const { barGap, barOffset } = this.props;
    const len = sizeList.length;
    let result;

    // 判断用户是否设置了柱子的大小
    if (sizeList[0].barSize === +sizeList[0].barSize) {
      let sum = sizeList.reduce((res, entry) => {
        return res + entry.barSize;
      }, 0);
      sum += (len - 1) * barGap;
      const offset = ((bandSize - sum) / 2) >> 0;
      let prev = { offset: offset - barGap, size: 0 };

      result = sizeList.reduce((res, entry) => {
        res[entry.dataKey] = {
          offset: prev.offset + prev.size + barGap,
          size: entry.barSize,
        };
        prev = res[entry.dataKey];

        return res;
      }, {});
    } else {
      const offset = LodashUtils.getPercentValue(barOffset, bandSize);
      const size = (bandSize - 2 * offset - (len - 1) * barGap) / len >> 0;

      result = sizeList.reduce((res, entry, i) => {
        res[entry.dataKey] = {
          offset: offset + (size + barGap) * i,
          size,
        };

        return res;
      }, {});
    }

    return result;
  }
  /**
   * Calculate the size of all groups
   * @param  {Array} items All the instance of BarItem
   * @return {Object} The size of all groups
   */
  getSizeList(items) {
    const { layout, barSize } = this.props;

    const sizeList = items.reduce((result, child) => {
      const { xAxisId, yAxisId, dataKey } = child.props;
      const axisId = layout === 'horizontal' ? xAxisId : yAxisId;

      const list = result[axisId] || [];

      list.push({ dataKey, barSize: child.props.barSize || barSize });

      result[axisId] = list;

      return result;
    }, {});

    return sizeList;
  }
  /**
   * Calculate the size between two category
   * @param  {Function} scale Scale function
   * @return {Number} Size
   */
  getBandSize(scale) {
    return scale.bandwidth();
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

  renderCursor(xAxisMap, yAxisMap, offset) {
    const { children } = this.props;
    const tooltipItem = ReactUtils.findChildByType(children, Tooltip);

    if (!tooltipItem || !this.state.isTooltipActive) {return null;}

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
      ...ReactUtils.getPresentationAttributes(tooltipItem.props.cursor),
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
   * @param  {Array} items     All the instance of BarItem
   * @param  {Object} xAxisMap The configuration of all x-axis
   * @param  {Object} yAxisMap The configuration of all y-axis
   * @param  {Object} offset   The offset of main part in the svg element
   * @return {ReactComponent}  All the instances of Bar
   */
  renderItems(items, xAxisMap, yAxisMap, offset) {
    if (!items || !items.length) {return null;}

    const { layout } = this.props;
    const sizeList = this.getSizeList(items);

    const barPositionMap = {};

    return items.map((child, i) => {
      const { xAxisId, yAxisId, dataKey, ...other } = child.props;
      const axisId = layout === 'horizontal' ? xAxisId : yAxisId;
      const bandSize = this.getBandSize(
                        layout === 'horizontal' ?
                        xAxisMap[xAxisId].scale :
                        yAxisMap[yAxisId].scale
                      );
      const barPosition = barPositionMap[axisId] || this.getBarPosition(bandSize, sizeList[axisId]);

      return (
        <Bar
          {...other}
          key={'bar-' + i}
          onMouseLeave={::this.handleBarMouseLeave}
          onMouseEnter={this.handleBarMouseEnter.bind(this, dataKey)}
          data={this.getComposeData(barPosition, xAxisMap[xAxisId], yAxisMap[yAxisId], offset, dataKey)}
        />
      );
    }, this);
  }

  render() {
    const { style, children, className } = this.props;
    const items = ReactUtils.findAllByType(children, BarItem);
    const legendItem = ReactUtils.findChildByType(children, Legend);

    let xAxisMap = this.getAxisMap('xAxis', items);
    let yAxisMap = this.getAxisMap('yAxis', items);
    const offset = this.getOffset(xAxisMap, yAxisMap);

    xAxisMap = this.getFormatAxisMap(xAxisMap, offset, 'xAxis');
    yAxisMap = this.getFormatAxisMap(yAxisMap, offset, 'yAxis');

    return (
      <div className={`recharts-wrapper ${className || ''}`}
        style={{ position: 'relative', cursor: 'default', ...style }}
        onMouseEnter={this.handleMouseEnter.bind(this, offset, xAxisMap, yAxisMap)}
        onMouseMove={this.handleMouseMove.bind(this, offset, xAxisMap, yAxisMap)}
        onMouseLeave={::this.handleMouseLeave}
      >

        {legendItem && legendItem.props.layout === 'horizontal'
          && legendItem.props.verticalAlign === 'top'
          && this.renderLegend(items, offset, legendItem)
        }

        <Surface {...this.props}>
          {this.renderGrid(xAxisMap, yAxisMap, offset)}
          {this.renderReferenceLines(xAxisMap, yAxisMap, offset)}
          {this.renderXAxis(xAxisMap)}
          {this.renderYAxis(yAxisMap)}
          {this.renderCursor(xAxisMap, yAxisMap, offset)}
          {this.renderItems(items, xAxisMap, yAxisMap, offset)}
          {this.renderBrush(xAxisMap, yAxisMap, offset)}
        </Surface>

        {legendItem && (legendItem.props.layout !== 'horizontal'
          || legendItem.props.verticalAlign !== 'top')
        && this.renderLegend(items, offset, legendItem)}
        {this.renderTooltip(items, offset)}
      </div>
    );
  }
}

export default BarChart;
