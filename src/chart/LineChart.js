/**
 * @fileOverview Line Chart
 */
import React, { PropTypes, Component } from 'react';
import Layer from '../container/Layer';
import Tooltip from '../component/Tooltip';
import Curve from '../shape/Curve';
import Dot from '../shape/Dot';
import generateCategoricalChart from './generateCategoricalChart';
import Line from '../cartesian/Line';
import { getPresentationAttributes, findChildByType,
  findAllByType, validateWidthHeight } from '../util/ReactUtils';
import pureRender from '../util/PureRender';
import { getTicksOfAxis } from '../util/CartesianUtils';
import { getBandSizeOfScale, getAnyElementOfObject } from '../util/DataUtils';

@pureRender
class LineChart extends Component {

  static displayName = 'LineChart';

  static propTypes = {
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    dataStartIndex: PropTypes.number,
    dataEndIndex: PropTypes.number,
    data: PropTypes.array,
    isTooltipActive: PropTypes.bool,
    activeTooltipIndex: PropTypes.number,
    xAxisMap: PropTypes.object,
    yAxisMap: PropTypes.object,
    offset: PropTypes.object,
    graphicalItems: PropTypes.array,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    // used internally
    isComposed: PropTypes.bool,
  };

  /**
   * Compose the data of each group
   * @param  {Object} xAxis   The configuration of x-axis
   * @param  {Object} yAxis   The configuration of y-axis
   * @param  {String} dataKey The unique key of a group
   * @return {Array}  Composed data
   */
  getComposedData(xAxis, yAxis, dataKey) {
    const { layout, dataStartIndex, dataEndIndex, isComposed } = this.props;
    const data = this.props.data.slice(dataStartIndex, dataEndIndex + 1);
    const bandSize = getBandSizeOfScale(layout === 'horizontal' ? xAxis.scale : yAxis.scale);
    const xTicks = getTicksOfAxis(xAxis);
    const yTicks = getTicksOfAxis(yAxis);

    return data.map((entry, index) => ({
      x: layout === 'horizontal' ?
        xTicks[index].coordinate + bandSize / 2 :
        xAxis.scale(entry[dataKey]),
      y: layout === 'horizontal' ?
        yAxis.scale(entry[dataKey]) :
        yTicks[index].coordinate + bandSize / 2,
      value: entry[dataKey],
    }));
  }

  renderCursor(xAxisMap, yAxisMap, offset) {
    const { children, isTooltipActive } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

    if (!tooltipItem || !tooltipItem.props.cursor || !isTooltipActive) {return null;}

    const { layout, activeTooltipIndex } = this.props;
    const axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
    const axis = getAnyElementOfObject(axisMap);
    const ticks = getTicksOfAxis(axis);
    const start = ticks[activeTooltipIndex].coordinate;
    const x1 = layout === 'horizontal' ? start : offset.left;
    const y1 = layout === 'horizontal' ? offset.top : start;
    const x2 = layout === 'horizontal' ? start : offset.left + offset.width;
    const y2 = layout === 'horizontal' ? offset.top + offset.height : start;
    const cursorProps = {
      stroke: '#ccc',
      ...getPresentationAttributes(tooltipItem.props.cursor),
      points: [{ x: x1, y: y1 }, { x: x2, y: y2 }],
    };

    return React.isValidElement(tooltipItem.props.cursor) ?
      React.cloneElement(tooltipItem.props.cursor, cursorProps) :
      <Curve {...cursorProps} type="linear" className="recharts-tooltip-cursor" />;
  }

  /**
   * Draw the main part of line chart
   * @param  {Array} items     All the instance of Line
   * @param  {Object} xAxisMap The configuration of all x-axes
   * @param  {Object} yAxisMap The configuration of all y-axes
   * @param  {Object} offset   The offset of main part in the svg element
   * @return {ReactComponent}  All the instances of Line
   */
  renderItems(items, xAxisMap, yAxisMap, offset) {
    const { children, layout, isTooltipActive, activeTooltipIndex } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);
    const hasDot = tooltipItem && isTooltipActive;
    const dotItems = [];

    const lineItems = items.map((child, i) => {
      const { xAxisId, yAxisId, dataKey, stroke } = child.props;
      const points = this.getComposedData(xAxisMap[xAxisId], yAxisMap[yAxisId], dataKey);
      const activePoint = points[activeTooltipIndex];
      const pointStyle = { fill: stroke, strokeWidth: 2, stroke: '#fff' };

      if (hasDot && activePoint) {
        dotItems.push(
          <Dot
            key={`area-dot-${i}`}
            cx={activePoint.x}
            cy={activePoint.y}
            r={4}
            {...pointStyle}
          />
        );
      }

      return React.cloneElement(child, {
        key: `line-${i}`,
        ...offset,
        layout,
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

  render() {
    const { isComposed, xAxisMap, yAxisMap, offset, graphicalItems } = this.props;

    return (
      <Layer className="recharts-line-graphical">
        {!isComposed && this.renderCursor(xAxisMap, yAxisMap, offset)}
        {this.renderItems(graphicalItems, xAxisMap, yAxisMap, offset)}
      </Layer>
    );
  }
}

export default generateCategoricalChart(LineChart, Line);
export { LineChart };
