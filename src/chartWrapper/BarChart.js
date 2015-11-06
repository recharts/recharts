'use strict';

import React, {PropTypes} from 'react/addons';
import CartesianChart from './CartesianChart';

import Surface from '../container/Surface';
import ReactUtils from '../util/ReactUtils';
import Bar from '../chart/Bar';
import BarItem from './BarItem';
/**
 *  <BarChart className="my-line-cahrt">
 *    <BarItem data={} yAxis={0}/>
 *    <BarItem data={} yAxis={1}>
 *  </BarChart>
 */

class BarChart extends CartesianChart {
  displayName = 'BarChart';
    /**
   * 组装曲线数据
   * @param  {Array}  barPosition 每个柱子的大小和偏移量
   * @param  {Object} xAxis    x轴刻度
   * @param  {Object} yAxis    y轴刻度
   * @param  {Object} offset   图形区域的偏移量
   * @param  {String} dataKey  该组数据所对应的key
   * @return {Array}
   */
  getComposeData(barPosition, xAxis, yAxis, offset, dataKey) {
    const {barSize, barGap, data, layout} = this.props;
    const pos = barPosition[dataKey];
    const xTicks = this.getAxisTicks(xAxis);
    const yTicks = this.getAxisTicks(yAxis);

    return data.map((entry, index) => {
      const value = entry[dataKey];
      const width = layout === 'horizontal' ?
                    pos.size :
                    (yAxis.orient === 'left' ?
                      xAxis.scale(value) - offset.left :
                      offset.left + offset.width - xAxis.scale(value)
                    );
      const height = layout === 'horizontal' ?
              (xAxis.orient === 'top' ?
                yAxis.scale(value) - offset.left :
                offset.top + offset.height - yAxis.scale(value)
              ) :
              pos.size;

      return {
        x: layout === 'horizontal' ?
            xTicks[index].coord + pos.offset :
            (yAxis.orient === 'left' ?
              offset.left :
              xAxis.scale(value)
            ),
        y: layout === 'horizontal' ?
            (xAxis.orient === 'top' ?
              offset.top :
              yAxis.scale(value)
            ) :
            yTicks[index].coord + pos.offset,
        width, height, value
      };
    });
  }
  /**
   * 获取柱子的宽度以及柱子间的间距
   * @param  {Number}   bandSize 每一个类别所占的宽度或者高度
   * @param  {sizeList} sizeList  所有group设置的size
   * @return {Number}
   */
  getBarPosition (bandSize, sizeList) {
    const {barGap} = this.props;
    const len = sizeList.length;
    let result;

    // 判断用户是否设置了柱子的大小
    if (sizeList[0].barSize === +sizeList[0].barSize) {
      let sum = sizeList.reduce((result, entry) => {
        return result + entry.barSize;
      }, 0);
      sum += (len - 1) * barGap;
      let offset =  - sum / 2   >> 0;
      let prev = {offset: offset - barGap, size: 0};

      result = sizeList.reduce((result, entry, i) => {
        result[entry.dataKey] = {
          offset: prev.offset + prev.size + barGap,
          size: entry.barSize
        };
        prev = result[entry.dataKey];

        return result;
      }, {});
    } else {
      let offset = bandSize * 0.1 >> 0;
      let size = (bandSize - 2 * offset - (len - 1) * barGap) / len >> 0;
      offset = -bandSize * 0.4;

      result = sizeList.reduce((result, entry, i) => {
        result[entry.dataKey] = {
          offset: offset + (size + barGap) * i,
          size
        };

        return result;
      }, {});
    }

    return result;
  }
  /**
   * 计算每组柱子的大小
   * @param  {Array[ReactComponent]} items 所有的柱图对象
   * @return {Object}
   */
  getSizeList (items) {
    const {layout, barSize} = this.props;

    const sizeList = items.reduce((result, child) => {
      const {xAxisId, yAxisId, dataKey} = child.props;
      const axisId = layout === 'horizontal' ? xAxisId : yAxisId;

      let list = result[axisId] || [];

      list.push({dataKey, barSize: child.props.barSize || barSize});

      result[axisId] = list;

      return result;
    }, {});

    return sizeList;
  }
  /**
   * 计算类目轴的两个区块间隔的大小
   * @param  {Function} scale 刻度函数
   * @return {Number}
   */
  getBandSize (scale) {
    let ranges = scale.range();

    return ranges[1] - ranges[0];
  }
  /**
   * 鼠标进入柱子的响应事件
   * @param {String} key 曲线唯一对应的key
   * @param {Object} e   事件对象
   */
  handleBarMouseEnter = (key, e) => {
    this.setState({
      activeBarKey: key
    });
  }
  /**
   * 鼠标离开柱子的响应事件
   */
  handleBarMouseLeave = () => {
    this.setState({
      activeBarKey: null
    });
  }
  /**
   * 绘制图形部分
   * @param  {Array[ReactComponet]} items 柱图元素
   * @param  {Object} xAxisMap x轴刻度
   * @param  {Object} yAxisMap y轴刻度
   * @param  {Object} offset   图形区域的偏移量
   * @return {ReactComponent}
   */
  renderItems(items, xAxisMap, yAxisMap, offset) {
    if (!items || !items.length) {return;}

    const {children, layout} = this.props;
    const {activeLineKey} = this.state;
    const sizeList = this.getSizeList(items);

    let barPositionMap = {};

    return items.map((child, i) => {
      const {xAxisId, yAxisId, dataKey, ...other} = child.props;
      const axisId = layout === 'horizontal' ? xAxisId : yAxisId;
      const bandSize = this.getBandSize(
                        layout === 'horizontal' ?
                        xAxisMap[xAxisId].scale:
                        yAxisMap[yAxisId].scale
                      );
      const barPosition = barPositionMap[axisId] || this.getBarPosition(bandSize, sizeList[axisId])

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

    let xAxisMap = this.getAxisMap('xAxis', items);
    let yAxisMap = this.getAxisMap('yAxis', items);
    const offset = this.getOffset(xAxisMap, yAxisMap);

    xAxisMap = this.getFormatAxisMap(xAxisMap, offset, 'xAxis');
    yAxisMap = this.getFormatAxisMap(yAxisMap, offset, 'yAxis');

    return (
      <div className='recharts-wrapper'
        style={{position: 'relative', cursor: 'default', ...style}}
        onMouseEnter={this.handleMouseEnter.bind(null, offset, xAxisMap, yAxisMap)}
        onMouseMove={this.handleMouseMove.bind(null, offset, xAxisMap, yAxisMap)}
        onMouseLeave={this.handleMouseLeave}>

        <Surface {...this.props}>
          {this.renderXAxis(xAxisMap)}
          {this.renderYAxis(yAxisMap)}
          {this.renderGrid(xAxisMap, yAxisMap, offset)}
          {this.renderItems(items, xAxisMap, yAxisMap, offset)}
        </Surface>

        {this.renderLegend(items, offset)}
        {this.renderTooltip(items)}
      </div>
    );
  }
};

export default BarChart;
