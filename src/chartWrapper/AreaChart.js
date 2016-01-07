import React from 'react';
import CartesianChart from './CartesianChart';

import Surface from '../container/Surface';
import ReactUtils from '../util/ReactUtils';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';
import Area from '../chart/Area';
import AreaItem from './AreaItem';

class AreaChart extends CartesianChart {
  static displayName = 'AreaChart';

  displayName = 'AreaChart';

  constructor(props) {
    super(props);
  }
  /**
   * 组装曲线数据
   * @param  {Object} xAxis   x轴刻度
   * @param  {Object} yAxis   y轴刻度
   * @param  {String} dataKey 该组数据所对应的key
   * @return {Array} 组合后的数据
   */
  getComposeData(xAxis, yAxis, dataKey) {
    const { data, layout } = this.props;
    const xTicks = this.getAxisTicks(xAxis);
    const yTicks = this.getAxisTicks(yAxis);
    const points = data.map((entry, index) => {
      return {
        x: layout === 'horizontal' ? xTicks[index].coord : xAxis.scale(entry[dataKey]),
        y: layout === 'horizontal' ? yAxis.scale(entry[dataKey]) : yTicks[index].coord,
        value: entry[dataKey],
      };
    });

    let range;
    let baseLine;

    if (layout === 'horizontal') {
      range = yAxis.scale.range();
      baseLine = xAxis.orient === 'top' ? Math.min(range[0], range[1]) : Math.max(range[0], range[1]);
    } else {
      range = xAxis.scale.range();
      baseLine = yAxis.orient === 'left' ? Math.min(range[0], range[1]) : Math.max(range[0], range[1]);
    }

    return {
      points,
      baseLine,
      baseLineType: layout,
    };
  }
  /**
   * 鼠标进入曲线的响应事件
   * @param {String} key 曲线唯一对应的key
   * @return {Object} no return
   */
  handleAreaMouseEnter(key) {
    this.setState({
      activeAreaKey: key,
    });
  }
  /**
   * 鼠标离开曲线的响应事件
   * @return {Object} no return
   */
  handleAreaMouseLeave() {
    this.setState({
      activeAreaKey: null,
    });
  }
  /**
   * 绘制图形部分
   * @param  {Array} items 线图元素
   * @param  {Object} xAxisMap x轴刻度
   * @param  {Object} yAxisMap y轴刻度
   * @param  {Object} offset   图形区域的偏移量
   * @return {ReactComponent} 图形元素
   */
  renderItems(items, xAxisMap, yAxisMap, offset) {
    const { children } = this.props;
    const { activeAreaKey, isTooltipActive, activeTooltipIndex } = this.state;
    const tooltipItem = ReactUtils.findChildByType(children, Tooltip);
    const hasDot = tooltipItem && isTooltipActive;
    let areaItems = [];
    const dotItems = [];

    items.forEach((child, i) => {
      const { xAxisId, yAxisId, dataKey, fillOpacity, ...other } = child.props;
      const xAxis = xAxisMap[xAxisId];
      const yAxis = yAxisMap[yAxisId];
      const composeData = this.getComposeData(xAxis, yAxis, dataKey);
      const activePoint = composeData.points && composeData.points[activeTooltipIndex];
      const pointStyle = { fill: other.fill, strokeWidth: 4, stroke: '#fff' };

      let finalFillOpacity = fillOpacity === +fillOpacity ? fillOpacity : AreaItem.defaultProps.fillOpacity;
      finalFillOpacity = activeAreaKey === dataKey ? Math.min(finalFillOpacity * 1.2, 1) : finalFillOpacity;

      const area = (
        <Area
          key={'area-' + i}
          {...other}
          x={offset.x}
          y={offset.y}
          width={offset.width}
          height={offset.height}
          fillOpacity={finalFillOpacity}
          onMouseLeave={::this.handleAreaMouseLeave}
          onMouseEnter={this.handleAreaMouseEnter.bind(null, dataKey)}
          {...composeData}
        />
      );

      areaItems = activeAreaKey === dataKey ? [...areaItems, area] : [area, ...areaItems];

      if (hasDot && activePoint) {
        dotItems.push(<circle key={'area-dot-' + i} cx={activePoint.x} cy={activePoint.y} r={8} {...pointStyle}/>);
      }
    });

    return (
      <g key="recharts-area-wrapper">
        <g key="recharts-area">{areaItems}</g>
        <g key="recharts-area-dot">{dotItems}</g>
      </g>
    );
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
    const ticks = this.getAxisTicks(axis);
    const start = ticks[activeTooltipIndex].coord;
    const style = { stroke: '#ccc', ...tooltipItem.cursorStyle };

    if (layout === 'horizontal') {
      return <line className="recharts-cursor" {...style} x1={start} x2={start} y1={offset.top} y2={offset.top + offset.height}/>;
    }

    return <line className="recharts-cursor" {...style} x1={offset.left} x2={offset.left + offset.width} y1={start} y2={start}/>;
  }

  render() {
    const { style, children } = this.props;
    const items = ReactUtils.findAllByType(children, AreaItem);
    const legendItem = ReactUtils.findChildByType(children, Legend);

    let xAxisMap = this.getAxisMap('xAxis', items);
    let yAxisMap = this.getAxisMap('yAxis', items);
    const offset = this.getOffset(xAxisMap, yAxisMap);

    xAxisMap = this.getFormatAxisMap(xAxisMap, offset, 'xAxis');
    yAxisMap = this.getFormatAxisMap(yAxisMap, offset, 'yAxis');

    return (
      <div className="recharts-wrapper"
        style={{ position: 'relative', cursor: 'default', ...style }}
        onMouseEnter={this.handleMouseEnter.bind(null, offset, xAxisMap, yAxisMap)}
        onMouseMove={this.handleMouseMove.bind(null, offset, xAxisMap, yAxisMap)}
        onMouseLeave={this.handleMouseLeave}
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
        </Surface>

        {legendItem && (legendItem.props.layout !== 'horizontal'
          || legendItem.props.verticalAlign !== 'top')
        && this.renderLegend(items, offset, legendItem)}
        {this.renderTooltip(items, offset)}
      </div>
    );
  }
}

export default AreaChart;
