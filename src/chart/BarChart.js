/**
 * @fileOverview Bar Chart
 */
import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import Layer from '../container/Layer';
import Tooltip from '../component/Tooltip';
import Rectangle from '../shape/Rectangle';
import { getBandSizeOfAxis, getAnyElementOfObject } from '../util/DataUtils';
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

  const dataKey = axis.dataKey;

  return dataKey && !_.isNil(entry[dataKey]) ?
    axis.scale(entry[dataKey]) - bandSize / 2 + offset :
    null;
};

const getBaseValue = ({ props, xAxis, yAxis }) => {
  const { layout } = props;
  const numberAxis = layout === 'horizontal' ? yAxis : xAxis;
  const domain = numberAxis.scale.domain();

  if (numberAxis.type === 'number') {
    return Math.max(Math.min(domain[0], domain[1]), 0);
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
  const pos = barPosition[dataKey];
  const data = props.data.slice(dataStartIndex, dataEndIndex + 1);
  const baseValue = getBaseValue({ props, xAxis, yAxis });
  const cells = findAllByType(children, Cell);

  return data.map((entry, index) => {
    const value = stackedData ? stackedData[dataStartIndex + index] : [baseValue, entry[dataKey]];
    let x, y, width, height;

    if (layout === 'horizontal') {
      x = getCategoryAxisCoordinate({
        axis: xAxis,
        ticks: xTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index,
      });
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
      y = getCategoryAxisCoordinate({
        axis: yAxis,
        ticks: yTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index,
      });
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
   * @return {ReactComponent}  All the instances of Bar
   */
  renderItems(items) {
    if (!items || !items.length) { return null; }

    const { layout, xAxisMap, yAxisMap } = this.props;

    const { animationId, allComposedData } = this.props;

    return items.map((child, i) =>
      React.cloneElement(child, {
        key: `bar-${i}`,
        layout,
        animationId,
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
        {this.renderItems(graphicalItems)}
      </Layer>
    );
  }
}

export default generateCategoricalChart(BarChart, Bar);
export { BarChart };
