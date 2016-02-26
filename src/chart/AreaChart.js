/**
 * @fileOverview Area Chart
 */
import React, { Component, PropTypes } from 'react';
import Layer from '../container/Layer';
import Tooltip from '../component/Tooltip';
import Dot from '../shape/Dot';
import Curve from '../shape/Curve';
import { getPresentationAttributes, findChildByType,
  findAllByType, validateWidthHeight } from '../util/ReactUtils';
import { getTicksOfAxis, getStackedDataOfItem } from '../util/CartesianUtils';
import generateCategoricalChart from './generateCategoricalChart';
import Area from '../cartesian/Area';
import pureRender from '../util/PureRender';
import { getBandSizeOfScale, getAnyElementOfObject } from '../util/DataUtils';

@pureRender
class AreaChart extends Component {
  static displayName = 'AreaChart';

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
    stackGroups: PropTypes.object,
    // used internally
    isComposed: PropTypes.bool,
  };
  /**
   * Compose the data of each area
   * @param  {Object} xAxis       The configuration of x-axis
   * @param  {Object} yAxis       The configuration of y-axis
   * @param  {String} dataKey     The unique key of a group
   * @param  {Array}  stackedData If the area is stacked,
   * the stackedData is an array of min value and max value
   * @return {Array} Composed data
   */
  getComposedData(xAxis, yAxis, dataKey, stackedData) {
    const { layout, dataStartIndex, dataEndIndex } = this.props;
    const data = this.props.data.slice(dataStartIndex, dataEndIndex + 1);
    const xTicks = getTicksOfAxis(xAxis);
    const yTicks = getTicksOfAxis(yAxis);
    const bandSize = getBandSizeOfScale(layout === 'horizontal' ? xAxis.scale : yAxis.scale);
    const hasStack = stackedData && stackedData.length;

    const points = data.map((entry, index) => {
      const value = hasStack ? stackedData[dataStartIndex + index] : [0, entry[dataKey]];
      return {
        x: layout === 'horizontal' ?
            xTicks[index].coordinate + bandSize / 2 :
            xAxis.scale(value[1]),
        y: layout === 'horizontal' ?
            yAxis.scale(value[1]) :
            yTicks[index].coordinate + bandSize / 2,
        value: entry[dataKey],
      };
    });

    let range;
    let baseLine;
    if (hasStack) {
      baseLine = stackedData.slice(dataStartIndex, dataEndIndex + 1).map((entry, index) => ({
        x: layout === 'horizontal' ?
            xTicks[index].coordinate + bandSize / 2 :
            xAxis.scale(entry[0]),
        y: layout === 'horizontal' ?
            yAxis.scale(entry[0]) :
            yTicks[index].coordinate + bandSize / 2,
      }));
    } else if (layout === 'horizontal') {
      range = yAxis.scale.range();
      baseLine = xAxis.orientation === 'top' ?
        Math.min(range[0], range[1]) :
        Math.max(range[0], range[1]);
    } else {
      range = xAxis.scale.range();
      baseLine = yAxis.orientation === 'left' ?
        Math.min(range[0], range[1]) :
        Math.max(range[0], range[1]);
    }

    return { points, baseLine, layout };
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
   * Draw the main part of area chart
   * @param  {Array} items     React elements of Area
   * @param  {Object} xAxisMap The configuration of all x-axis
   * @param  {Object} yAxisMap The configuration of all y-axis
   * @param  {Object} offset   The offset of main part in the svg element
   * @param  {Object} stackGroups The items grouped by axisId and stackId
   * @return {ReactComponent} The instances of Area
   */
  renderItems(items, xAxisMap, yAxisMap, offset, stackGroups) {
    const { children, layout, isTooltipActive, activeTooltipIndex } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);
    const hasDot = tooltipItem && isTooltipActive;
    const dotItems = [];

    const areaItems = items.reduce((result, child, i) => {
      const { xAxisId, yAxisId, dataKey, fillOpacity, fill } = child.props;
      const axisId = layout === 'horizontal' ? xAxisId : yAxisId;
      const stackedData = stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack
                        && getStackedDataOfItem(child, stackGroups[axisId].stackGroups);
      const composeData = this.getComposedData(
        xAxisMap[xAxisId], yAxisMap[yAxisId], dataKey, stackedData
      );

      const activePoint = composeData.points && composeData.points[activeTooltipIndex];
      const pointStyle = { fill, strokeWidth: 2, stroke: '#fff' };

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

      const area = React.cloneElement(child, {
        key: `area-${i}`,
        ...offset,
        ...composeData,
        layout,
        fillOpacity: finalFillOpacity,
        onMouseLeave: ::this.handleAreaMouseLeave,
        onMouseEnter: this.handleAreaMouseEnter.bind(this, dataKey),
      });

      return [...result, area];
    }, []);

    return (
      <g key="recharts-area-wrapper">
        <g key="recharts-area">{areaItems}</g>
        <g key="recharts-area-dot">{dotItems}</g>
      </g>
    );
  }

  render() {
    const { isComposed, graphicalItems, xAxisMap, yAxisMap, offset, stackGroups } = this.props;

    return (
      <Layer className="recharts-area-graphical">
        {!isComposed && this.renderCursor(xAxisMap, yAxisMap, offset)}
        {this.renderItems(graphicalItems, xAxisMap, yAxisMap, offset, stackGroups)}
      </Layer>
    );
  }
}

export default generateCategoricalChart(AreaChart, Area);

export { AreaChart };
