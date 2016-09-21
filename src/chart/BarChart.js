/**
 * @fileOverview Bar Chart
 */
import React, { PropTypes, Component } from 'react';
import Layer from '../container/Layer';
import Tooltip from '../component/Tooltip';
import Rectangle from '../shape/Rectangle';
import { getPercentValue, getBandSizeOfScale, getAnyElementOfObject } from '../util/DataUtils';
import { getPresentationAttributes, findChildByType, findAllByType,
  validateWidthHeight, filterEventAttributes } from '../util/ReactUtils';
import generateCategoricalChart from './generateCategoricalChart';
import Cell from '../component/Cell';
import Bar from '../cartesian/Bar';
import pureRender from '../util/PureRender';
import { getTicksOfAxis, getStackedDataOfItem } from '../util/CartesianUtils';
import AnimationDecorator from '../util/AnimationDecorator';

@AnimationDecorator
@pureRender
class BarChart extends Component {

  static displayName = 'BarChart';

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
    barCategoryGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    barGap: PropTypes.number,
    barSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    // used internally
    isComposed: PropTypes.bool,
    animationId: PropTypes.number,
  };

  static defaultProps = {
    barCategoryGap: '10%',
    barGap: 4,
  };

  /**
   * Compose the data of each group
   * @param  {Object} item        An instance of Bar
   * @param  {Array}  barPosition The offset and size of each bar
   * @param  {Object} xAxis       The configuration of x-axis
   * @param  {Object} yAxis       The configuration of y-axis
   * @param  {Object} offset      The offset of main part in the svg element
   * @param  {Array} stackedData  The stacked data of a bar item
   * @return {Array} Composed data
   */
  getComposedData(item, barPosition, xAxis, yAxis, offset, stackedData) {
    const { layout, dataStartIndex, dataEndIndex } = this.props;
    const { dataKey, children, minPointSize } = item.props;
    const pos = barPosition[dataKey];
    const data = this.props.data.slice(dataStartIndex, dataEndIndex + 1);
    const xTicks = getTicksOfAxis(xAxis);
    const yTicks = getTicksOfAxis(yAxis);
    const baseValue = this.getBaseValue(xAxis, yAxis);
    const hasStack = stackedData && stackedData.length;
    const cells = findAllByType(children, Cell);

    return data.map((entry, index) => {
      const value = stackedData ? stackedData[dataStartIndex + index] : [baseValue, entry[dataKey]];
      let x;
      let y;
      let width;
      let height;

      if (layout === 'horizontal') {
        x = xTicks[index].coordinate + pos.offset;
        y = yAxis.scale(xAxis.orientation === 'top' ? value[0] : value[1]);
        width = pos.size;
        height = xAxis.orientation === 'top' ?
                yAxis.scale(value[1]) - yAxis.scale(value[0]) :
                yAxis.scale(value[0]) - yAxis.scale(value[1]);
        if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
          const delta = Math.sign(height || minPointSize) *
            (Math.abs(minPointSize) - Math.abs(height));

          y -= delta;
          height += delta;
        }
      } else {
        x = xAxis.scale(yAxis.orientation === 'left' ? value[0] : value[1]);
        y = yTicks[index].coordinate + pos.offset;
        width = yAxis.orientation === 'left' ?
                xAxis.scale(value[1]) - xAxis.scale(value[0]) :
                xAxis.scale(value[0]) - xAxis.scale(value[1]);
        height = pos.size;

        if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
          const delta = Math.sign(width || minPointSize) *
            (Math.abs(minPointSize) - Math.abs(width));
          width += delta;
        }
      }

      return {
        ...entry,
        x, y, width, height, value: stackedData ? value : value[1],
        ...(cells && cells[index] && cells[index].props),
      };
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
      let sum = sizeList.reduce((res, entry) => (res + entry.barSize || 0), 0);
      sum += (len - 1) * barGap;
      const offset = ((bandSize - sum) / 2) >> 0;
      let prev = { offset: offset - barGap, size: 0 };

      result = sizeList.reduce((res, entry) => {
        const newRes = {
          ...res,
          [entry.dataKey]: {
            offset: prev.offset + prev.size + barGap,
            size: entry.barSize,
          },
        };

        prev = newRes[entry.dataKey];

        if (entry.stackList && entry.stackList.length) {
          entry.stackList.forEach(key => {
            newRes[key] = newRes[entry.dataKey];
          });
        }
        return newRes;
      }, {});
    } else {
      const offset = getPercentValue(barCategoryGap, bandSize, 0, true);
      const size = (bandSize - 2 * offset - (len - 1) * barGap) / len >> 0;

      result = sizeList.reduce((res, entry, i) => {
        const newRes = {
          ...res,
          [entry.dataKey]: {
            offset: offset + (size + barGap) * i,
            size,
          },
        };

        if (entry.stackList && entry.stackList.length) {
          entry.stackList.forEach(key => {
            newRes[key] = newRes[entry.dataKey];
          });
        }
        return newRes;
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
    const result = {};
    const numericAxisIds = Object.keys(stackGroups);

    for (let i = 0, len = numericAxisIds.length; i < len; i++) {
      const sgs = stackGroups[numericAxisIds[i]].stackGroups;
      const stackIds = Object.keys(sgs);

      for (let j = 0, sLen = stackIds.length; j < sLen; j++) {
        const { items, numericAxisId, cateAxisId } = sgs[stackIds[j]];

        const barItems = items.filter(item => item.type.displayName === 'Bar');

        if (barItems && barItems.length) {
          const { dataKey } = barItems[0].props;
          const cateId = barItems[0].props[cateAxisId];

          if (!result[cateId]) {
            result[cateId] = [];
          }

          result[cateId].push({
            dataKey,
            stackList: barItems.slice(1).map(item => item.props.dataKey),
            barSize: barItems[0].props.barSize || barSize,
          });
        }
      }
    }

    return result;
  }

  renderCursor(xAxisMap, yAxisMap, offset) {
    const { children, isTooltipActive, layout, activeTooltipIndex } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

    if (!tooltipItem || !tooltipItem.props.cursor || !isTooltipActive ||
      activeTooltipIndex < 0) { return null; }

    const axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
    const axis = getAnyElementOfObject(axisMap);
    const ticks = getTicksOfAxis(axis);

    if (!ticks || !ticks[activeTooltipIndex]) { return null; }

    const start = ticks[activeTooltipIndex].coordinate;
    const bandSize = axis.scale.bandwidth();
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
      React.createElement(Rectangle, { ...cursorProps, className: 'recharts-bar-cursor' });
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
    if (!items || !items.length) { return null; }

    const { layout } = this.props;
    const sizeList = this.getSizeList(stackGroups);
    const { animationId } = this.props;

    const barPositionMap = {};

    return items.map((child, i) => {
      const { xAxisId, yAxisId } = child.props;
      const numericAxisId = layout === 'horizontal' ? yAxisId : xAxisId;
      const cateAxisId = layout === 'horizontal' ? xAxisId : yAxisId;
      const cateAxis = layout === 'horizontal' ? xAxisMap[xAxisId] : yAxisMap[yAxisId];
      const bandSize = getBandSizeOfScale(cateAxis.scale);
      const barPosition = barPositionMap[cateAxisId] ||
        this.getBarPosition(bandSize, sizeList[cateAxisId]);
      const stackedData = stackGroups && stackGroups[numericAxisId] &&
        stackGroups[numericAxisId].hasStack &&
        getStackedDataOfItem(child, stackGroups[numericAxisId].stackGroups);

      return React.cloneElement(child, {
        key: `bar-${i}`,
        ...filterEventAttributes(this.props),
        layout,
        animationId,
        data: this.getComposedData(
          child, barPosition, xAxisMap[xAxisId], yAxisMap[yAxisId], offset, stackedData
        ),
      });
    }, this);
  }

  render() {
    const { isComposed, graphicalItems, xAxisMap, yAxisMap, offset, stackGroups } = this.props;

    return (
      <Layer className="recharts-bar-graphical">
        {!isComposed && this.renderCursor(xAxisMap, yAxisMap, offset)}
        {this.renderItems(graphicalItems, xAxisMap, yAxisMap, offset, stackGroups)}
      </Layer>
    );
  }
}

export default generateCategoricalChart(BarChart, Bar);
export { BarChart };
