import React from 'react';
import CartesianChart from './CartesianChart';
import LodashUtils from '../util/LodashUtils';

import Surface from '../container/Surface';
import ReactUtils from '../util/ReactUtils';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';
import Bar from '../chart/Bar';
import BarItem from './BarItem';
/**
 *  <BarChart className='my-line-cahrt'>
 *    <BarItem data={} yAxis={0}/>
 *    <BarItem data={} yAxis={1}>
 *  </BarChart>
 */

class BarChart extends CartesianChart {

  static displayName = 'BarChart';

  displayName = 'BarChart';

  constructor(props) {
    super(props);
  }
    /**
   * 组装曲线数据
   * @param  {Array}  barPosition 每个柱子的大小和偏移量
   * @param  {Object} xAxis    x轴刻度
   * @param  {Object} yAxis    y轴刻度
   * @param  {Object} offset   图形区域的偏移量
   * @param  {String} dataKey  该组数据所对应的key
   * @return {Array} 组装后的数据
   */
  getComposeData(barPosition, xAxis, yAxis, offset, dataKey) {
    const {layout} = this.props;
    const {dataStartIndex, dataEndIndex} = this.state;
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

      return {...entry, x, y, width, height, value};
    });
  }

  getBaseLine(xAxis, yAxis) {
    const {layout} = this.props;
    const scale = layout === 'horizontal' ? yAxis.scale : xAxis.scale;
    const domain = scale.domain();
    const min = Math.max(Math.min(domain[0], domain[1]), 0);

    return scale(min);
  }
  /**
   * 获取柱子的宽度以及柱子间的间距
   * @param  {Number}   bandSize 每一个类别所占的宽度或者高度
   * @param  {sizeList} sizeList  所有group设置的size
   * @return {Number} 柱子的宽度以及柱子间的间距
   */
  getBarPosition(bandSize, sizeList) {
    const {barGap, barOffset} = this.props;
    const len = sizeList.length;
    let result;

    // 判断用户是否设置了柱子的大小
    if (sizeList[0].barSize === +sizeList[0].barSize) {
      let sum = sizeList.reduce((res, entry) => {
        return res + entry.barSize;
      }, 0);
      sum += (len - 1) * barGap;
      const offset = ((bandSize - sum) / 2) >> 0;
      let prev = {offset: offset - barGap, size: 0};

      result = sizeList.reduce((res, entry) => {
        res[entry.dataKey] = {
          offset: prev.offset + prev.size + barGap,
          size: entry.barSize,
        };
        prev = res[entry.dataKey];

        return res;
      }, {});
    } else {
      let offset = LodashUtils.getPercentValue(barOffset, bandSize);
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
   * 计算每组柱子的大小
   * @param  {Array} items 所有的柱图对象
   * @return {Object} 每组柱子的大小
   */
  getSizeList(items) {
    const {layout, barSize} = this.props;

    const sizeList = items.reduce((result, child) => {
      const {xAxisId, yAxisId, dataKey} = child.props;
      const axisId = layout === 'horizontal' ? xAxisId : yAxisId;

      const list = result[axisId] || [];

      list.push({dataKey, barSize: child.props.barSize || barSize});

      result[axisId] = list;

      return result;
    }, {});

    return sizeList;
  }
  /**
   * 计算类目轴的两个区块间隔的大小
   * @param  {Function} scale 刻度函数
   * @return {Number} 间隔大小
   */
  getBandSize(scale) {
    return scale.bandwidth();
  }
  /**
   * 鼠标进入柱子的响应事件
   * @param {String} key 曲线唯一对应的key
   * @return {Object} no return
   */
  handleBarMouseEnter = (key) => {
    this.setState({
      activeBarKey: key,
    });
  }
  /**
   * 鼠标离开柱子的响应事件
   * @return {Object} no return
   */
  handleBarMouseLeave = () => {
    this.setState({
      activeBarKey: null,
    });
  }

  renderCursor(xAxisMap, yAxisMap, offset) {
    const { children } = this.props;
    const tooltipItem = ReactUtils.findChildByType(children, Tooltip);

    if (!tooltipItem || !this.state.isTooltipActive) {return null;}

    const {layout} = this.props;
    const {activeTooltipIndex} = this.state;
    const axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
    const ids = Object.keys(axisMap);
    const axis = axisMap[ids[0]];
    const bandSize = axis.scale.bandwidth();

    const ticks = this.getAxisTicks(axis);
    const start = ticks[activeTooltipIndex].coord;
    const style = { fill: '#f1f1f1', ...tooltipItem.cursorStyle };

    return (
      <rect
        {...style}
        x={layout === 'horizontal' ? start : offset.left + 0.5}
        y={layout === 'horizontal' ? offset.top + 0.5 : start}
        width={layout === 'horizontal' ? bandSize : offset.width - 1}
        height={layout === 'horizontal' ? offset.height - 1 : bandSize}/>
    );
  }
  /**
   * 绘制图形部分
   * @param  {Array} items 柱图元素
   * @param  {Object} xAxisMap x轴刻度
   * @param  {Object} yAxisMap y轴刻度
   * @param  {Object} offset   图形区域的偏移量
   * @return {ReactComponent} 柱子元素
   */
  renderItems(items, xAxisMap, yAxisMap, offset) {
    if (!items || !items.length) {return null;}

    const {layout} = this.props;
    const sizeList = this.getSizeList(items);

    const barPositionMap = {};

    return items.map((child, i) => {
      const {xAxisId, yAxisId, dataKey, ...other} = child.props;
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
          onMouseLeave={this.handleBarMouseLeave}
          onMouseEnter={this.handleBarMouseEnter.bind(null, dataKey)}
          data={this.getComposeData(barPosition, xAxisMap[xAxisId], yAxisMap[yAxisId], offset, dataKey)}/>
      );
    }, this);
  }

  render() {
    const {style, children} = this.props;
    const items = ReactUtils.findAllByType(children, BarItem);
    const legendItem = ReactUtils.findChildByType(children, Legend);

    let xAxisMap = this.getAxisMap('xAxis', items);
    let yAxisMap = this.getAxisMap('yAxis', items);
    const offset = this.getOffset(xAxisMap, yAxisMap);

    xAxisMap = this.getFormatAxisMap(xAxisMap, offset, 'xAxis');
    yAxisMap = this.getFormatAxisMap(yAxisMap, offset, 'yAxis');

    return (
      <div className="recharts-wrapper"
        style={{position: 'relative', cursor: 'default', ...style}}
        onMouseEnter={this.handleMouseEnter.bind(null, offset, xAxisMap, yAxisMap)}
        onMouseMove={this.handleMouseMove.bind(null, offset, xAxisMap, yAxisMap)}
        onMouseLeave={this.handleMouseLeave}>

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
