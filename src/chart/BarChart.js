/**
 * @fileOverview Bar Chart
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Layer from '../container/Layer';
import Tooltip from '../component/Tooltip';
import Rectangle from '../shape/Rectangle';
import { getBandSizeOfAxis, getAnyElementOfObject, getValueByDataKey,
  findPositionOfBar, truncateByDomain, mathSign } from '../util/DataUtils';
import { getPresentationAttributes, findChildByType, findAllByType } from '../util/ReactUtils';
import generateCategoricalChart from './generateCategoricalChart';
import Cell from '../component/Cell';
import Bar from '../cartesian/Bar';
import AnimationDecorator from '../util/AnimationDecorator';
import composedDataDecorator from '../util/ComposedDataDecorator';

const getCategoryAxisCoordinate = ({ axis, ticks, offset, bandSize, entry, index }) => {
  if (axis.type === 'category') {
    return ticks[index] ? ticks[index].coordinate + offset : null;
  }

  const value = getValueByDataKey(entry, axis.dataKey);

  return !_.isNil(value) ? axis.scale(value) - bandSize / 2 + offset : null;
};

const getBaseValue = ({ props, xAxis, yAxis }) => {
  const { layout } = props;
  const numberAxis = layout === 'horizontal' ? yAxis : xAxis;
  const domain = numberAxis.scale.domain();

  if (numberAxis.type === 'number') {
    const min = Math.min(domain[0], domain[1]);
    const max = Math.max(domain[0], domain[1]);

    if (min <= 0 && max >= 0) { return 0; }
    if (max < 0) { return max; }

    return min;
  }

  return domain[0];
};

/**
 * Compose the data of each group
 * @param {Object} props Props for the component
 * @param {Object} item        An instance of Bar
 * @param {Array} barPosition The offset and size of each bar
 * @param {Object} xAxis       The configuration of x-axis
 * @param {Object} yAxis       The configuration of y-axis
 * @param {Array} stackedData  The stacked data of a bar item
 * @return{Array} Composed data
 */
const getComposedData = ({ props, item, barPosition, bandSize, xAxis, yAxis,
  xTicks, yTicks, stackedData }) => {
  const { layout, dataStartIndex, dataEndIndex } = props;
  const { dataKey, children, minPointSize } = item.props;
  const pos = findPositionOfBar(barPosition, item);
  const stackedDomain = stackedData && layout === 'horizontal' ?
    yAxis.scale.domain() : xAxis.scale.domain();

  if (!pos) { return []; }

  const data = props.data.slice(dataStartIndex, dataEndIndex + 1);
  const baseValue = getBaseValue({ props, xAxis, yAxis });
  const cells = findAllByType(children, Cell);

  return data.map((entry, index) => {
    let value, x, y, width, height;

    if (stackedData) {
      value = truncateByDomain(stackedData[dataStartIndex + index], stackedDomain);
    } else {
      value = getValueByDataKey(entry, dataKey);

      if (!_.isArray(value)) {
        value = [baseValue, value];
      }
    }

    if (layout === 'horizontal') {
      x = getCategoryAxisCoordinate({
        axis: xAxis,
        ticks: xTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index,
      });
      y = yAxis.scale(value[1]);
      width = pos.size;
      height = yAxis.scale(value[0]) - yAxis.scale(value[1]);

      if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
        const delta = mathSign(height || minPointSize) *
          (Math.abs(minPointSize) - Math.abs(height));

        y -= delta;
        height += delta;
      }
    } else {
      x = xAxis.scale(value[0]);
      y = getCategoryAxisCoordinate({
        axis: yAxis,
        ticks: yTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index,
      });
      width = xAxis.scale(value[1]) - xAxis.scale(value[0]);
      height = pos.size;

      if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
        const delta = mathSign(width || minPointSize) *
          (Math.abs(minPointSize) - Math.abs(width));
        width += delta;
      }
    }

    return {
      ...entry,
      x, y, width, height, value: stackedData ? value : value[1],
      payload: entry,
      ...(cells && cells[index] && cells[index].props),
    };
  });
};

@AnimationDecorator
@composedDataDecorator({ getComposedData })
class BarChart extends Component {

  static displayName = 'BarChart';

  static propTypes = {
    allComposedData: PropTypes.array,
    axisTicks: PropTypes.array,
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
    barGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    barSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxBarSize: PropTypes.number,
    // used internally
    isComposed: PropTypes.bool,
    animationId: PropTypes.number,
  };

  static defaultProps = {
    barCategoryGap: '10%',
    barGap: 4,
  };

  renderCursor({ xAxisMap, yAxisMap, offset }) {
    const { children, isTooltipActive, layout, activeTooltipIndex, axisTicks } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);
    if (!tooltipItem || !tooltipItem.props.cursor || !isTooltipActive ||
      activeTooltipIndex < 0) { return null; }

    const axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
    const axis = getAnyElementOfObject(axisMap);
    const ticks = axisTicks;

    if (!ticks || !ticks[activeTooltipIndex]) { return null; }

    const bandSize = getBandSizeOfAxis(axis);
    const start = ticks[activeTooltipIndex].coordinate;
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
   * @param  {Object} offset   The offset of main part in the svg element
   * @return {ReactComponent}  All the instances of Bar
   */
  renderItems(items, offset) {
    if (!items || !items.length) { return null; }

    const { layout, xAxisMap, yAxisMap } = this.props;

    const { animationId, allComposedData } = this.props;

    return items.map((child, i) =>
      React.cloneElement(child, {
        key: child.key || `bar-${i}`,
        layout,
        animationId,
        ...offset,
        data: allComposedData[i],
        xAxis: xAxisMap[child.props.xAxisId],
        yAxis: yAxisMap[child.props.yAxisId],
      })
    , this);
  }

  render() {
    const { isComposed, graphicalItems, xAxisMap, yAxisMap, offset } = this.props;

    return (
      <Layer className="recharts-bar-graphical">
        {!isComposed && this.renderCursor({ xAxisMap, yAxisMap, offset })}
        {this.renderItems(graphicalItems, offset)}
      </Layer>
    );
  }
}

export default generateCategoricalChart(BarChart, Bar);
export { BarChart };
