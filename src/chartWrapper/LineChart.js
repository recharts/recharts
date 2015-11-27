import React, {PropTypes} from 'react';
import CartesianChart from './CartesianChart';

import Surface from '../container/Surface';
import ReactUtils from '../util/ReactUtils';
import Legend from '../component/Legend';
import Line from '../chart/Line';
import LineItem from './LineItem';

/**
 *  <LineChart className="my-line-cahrt">
 *    <LineItem data={} yAxis={0}/>
 *    <LineItem data={} yAxis={1}>
 *  </LineChart>
 */

class LineChart extends CartesianChart {
  displayName = 'LineChart';
  /**
   * 组装曲线数据
   * @param  {Object} xAxis   x轴刻度
   * @param  {Object} yAxis   y轴刻度
   * @param  {String} dataKey 该组数据所对应的key
   * @return {Array}
   */
  getComposeData(xAxis, yAxis, dataKey) {
    let {data, layout} = this.props;
    let xTicks = this.getAxisTicks(xAxis);
    let yTicks = this.getAxisTicks(yAxis);

    return data.map((entry, index) => {
      return {
        x: layout === 'horizontal' ? xTicks[index].coord : xAxis.scale(entry[dataKey]),
        y: layout === 'horizontal' ? yAxis.scale(entry[dataKey]) : yTicks[index].coord,
        value: entry[dataKey]
      };
    });
  }
  /**
   * 鼠标进入曲线的响应事件
   * @param {String} key 曲线唯一对应的key
   * @param {Object} e   事件对象
   */
  handleLineMouseEnter = (key, e) => {
    this.setState({
      activeLineKey: key
    });
  }
  /**
   * 鼠标离开曲线的响应事件
   */
  handleLineMouseLeave = () => {
    this.setState({
      activeLineKey: null
    });
  }
  /**
   * 绘制图形部分
   * @param  {Array[ReactComponet]} items 线图元素
   * @param  {Object} xAxisMap x轴刻度
   * @param  {Object} yAxisMap y轴刻度
   * @param  {Object} offset   图形区域的偏移量
   * @return {ReactComponent}
   */
  renderItems(items, xAxisMap, yAxisMap, offset) {
    const {activeLineKey} = this.state;

    return items.map((child, i) => {
      let {xAxisId, yAxisId, dataKey, strokeWidth, ...other} = child.props;

      strokeWidth = strokeWidth === +strokeWidth ? strokeWidth : 1;
      strokeWidth = activeLineKey === dataKey ? strokeWidth + 2 : strokeWidth;

      return (
        <Line
          {...other}
          key={'line-' + i}
          x={offset.x}
          y={offset.y}
          width={offset.width}
          height={offset.height}
          strokeWidth={strokeWidth}
          onMouseLeave={this.handleLineMouseLeave}
          onMouseEnter={this.handleLineMouseEnter.bind(null, dataKey)}
          data={this.getComposeData(xAxisMap[xAxisId], yAxisMap[yAxisId], dataKey)}/>
      );
    }, this);
  }

  render() {
    const {style, children} = this.props;
    const items = ReactUtils.findAllByType(children, LineItem);
    const legendItem = ReactUtils.findChildByType(children, Legend);

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

        {legendItem && legendItem.props.layout === 'horizontal'
          && legendItem.props.verticalAlign === 'top'
          && this.renderLegend(items, offset, legendItem)
        }

        <Surface {...this.props}>
          {this.renderXAxis(xAxisMap)}
          {this.renderYAxis(yAxisMap)}
          {this.renderGrid(xAxisMap, yAxisMap, offset)}
          {this.renderItems(items, xAxisMap, yAxisMap, offset)}
        </Surface>

        {legendItem && (legendItem.props.layout !== 'horizontal'
          || legendItem.props.verticalAlign !== 'top')
        && this.renderLegend(items, offset, legendItem)}
        {this.renderTooltip(items)}
      </div>
    );
  }
};

export default LineChart;
