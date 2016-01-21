import React from 'react';
import CartesianChart from './CartesianChart';

import Surface from '../container/Surface';
import ReactUtils from '../util/ReactUtils';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';
import Line from '../chart/Line';
import Curve from '../shape/Curve';


class LineChart extends CartesianChart {
  static displayName = 'LineChart';

  static defaultProps = {
    style: {},
    layout: 'horizontal',
    margin: { top: 5, right: 5, bottom: 5, left: 5 },
  };

  constructor(props) {
    super(props);
  }
  /**
   * Compose the data of each group
   * @param  {Object} xAxis   The configuration of x-axis
   * @param  {Object} yAxis   The configuration of y-axis
   * @param  {String} dataKey The unique key of a group
   * @return {Array}  Composed data
   */
  getComposeData(xAxis, yAxis, dataKey) {
    const { data, layout } = this.props;
    const xTicks = this.getAxisTicks(xAxis);
    const yTicks = this.getAxisTicks(yAxis);

    return data.map((entry, index) => {
      return {
        x: layout === 'horizontal' ? xTicks[index].coord : xAxis.scale(entry[dataKey]),
        y: layout === 'horizontal' ? yAxis.scale(entry[dataKey]) : yTicks[index].coord,
        value: entry[dataKey],
      };
    });
  }
  /**
   * Handler of mouse entering line chart
   * @param {String} key  The unique key of a group of data
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
   * Draw the main part of bar chart
   * @param  {Array} items     All the instance of Bar
   * @param  {Object} xAxisMap The configuration of all x-axes
   * @param  {Object} yAxisMap The configuration of all y-axes
   * @param  {Object} offset   The offset of main part in the svg element
   * @return {ReactComponent}  All the instances of Line
   */
  renderItems(items, xAxisMap, yAxisMap, offset) {
    const { activeLineKey } = this.state;

    return items.map((child, i) => {
      const { xAxisId, yAxisId, dataKey, strokeWidth } = child.props;

      let finalStrokeWidth = strokeWidth === +strokeWidth ? strokeWidth : 1;
      finalStrokeWidth = activeLineKey === dataKey ? finalStrokeWidth + 2 : finalStrokeWidth;

      return React.cloneElement(child, {
        key: 'line-' + i,
        ...offset,
        strokeWidth: finalStrokeWidth,
        onMouseLeave: ::this.handleLineMouseLeave,
        onMouseEnter: this.handleLineMouseEnter.bind(this, dataKey),
        points: this.getComposeData(xAxisMap[xAxisId], yAxisMap[yAxisId], dataKey),
      });
    }, this);
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
    const x1 = layout === 'horizontal' ? start : offset.left;
    const y1 = layout === 'horizontal' ? offset.top : start;
    const x2 = layout === 'horizontal' ? start : offset.left + offset.width;
    const y2 = layout === 'horizontal' ? offset.top + offset.height : start;
    const cursorProps = {
      stroke: '#ccc',
      ...ReactUtils.getPresentationAttributes(tooltipItem.props.cursor),
      points: [{ x: x1, y: y1 }, { x: x2, y: y2 }],
    };

    return React.isValidElement(tooltipItem.props.cursor) ?
          React.cloneElement(tooltipItem.props.cursor, cursorProps) :
          <Curve {...cursorProps} type="linear" className="recharts-cursor"/>;
  }

  render() {
    const { style, children } = this.props;
    const items = ReactUtils.findAllByType(children, Line);
    const legendItem = ReactUtils.findChildByType(children, Legend);

    let xAxisMap = this.getAxisMap('xAxis', items);
    let yAxisMap = this.getAxisMap('yAxis', items);
    const offset = this.getOffset(xAxisMap, yAxisMap);

    xAxisMap = this.getFormatAxisMap(xAxisMap, offset, 'xAxis');
    yAxisMap = this.getFormatAxisMap(yAxisMap, offset, 'yAxis');

    return (
      <div className="recharts-wrapper"
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
        </Surface>

        {legendItem && (legendItem.props.layout !== 'horizontal'
          || legendItem.props.verticalAlign !== 'top')
        && this.renderLegend(items, offset, legendItem)}
        {this.renderTooltip(items, offset)}
      </div>
    );
  }
}

export default LineChart;
