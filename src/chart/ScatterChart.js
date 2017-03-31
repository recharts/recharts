/**
 * @fileOverview Scatter Chart
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Layer from '../container/Layer';
import Tooltip from '../component/Tooltip';
import Cell from '../component/Cell';
import Cross from '../shape/Cross';
import Dot from '../shape/Dot';
import ZAxis from '../cartesian/ZAxis';
import generateCategoricalChart from './generateCategoricalChart';
import Scatter from '../cartesian/Scatter';
import { getPresentationAttributes, findAllByType, findChildByType } from '../util/ReactUtils';
import AnimationDecorator from '../util/AnimationDecorator';
import composedDataDecorator from '../util/ComposedDataDecorator';
import { getValueByDataKey, isNumOrStr } from '../util/DataUtils';

const getCategoryAxisCoordinate = ({ axis, ticks, bandSize, entry, index }) => {
  if (axis.type === 'category') {
    return ticks[index] ? ticks[index].coordinate + bandSize / 2 : null;
  }

  const value = getValueByDataKey(entry, axis.dataKey);

  return !_.isNil(value) ? axis.scale(value) : null;
};
/**
 * Compose the data of each group
 * @param {Object} props The props from the component
 * @param  {Object} xAxis   The configuration of x-axis
 * @param  {Object} yAxis   The configuration of y-axis
 * @param  {String} dataKey The unique key of a group
 * @return {Array}  Composed data
 */
export const getComposedData = ({ props, xAxis, yAxis, zAxis, xTicks, yTicks, dataKey, item }) => {
  const { layout, dataStartIndex, dataEndIndex } = props;
  const cells = findAllByType(item.props.children, Cell);
  const xAxisDataKey = _.isNil(xAxis.dataKey) ? item.props.dataKey : xAxis.dataKey;
  const yAxisDataKey = _.isNil(yAxis.dataKey) ? item.props.dataKey : yAxis.dataKey;
  const zAxisDataKey = zAxis && zAxis.dataKey;
  const data = props.data ?
    props.data.slice(dataStartIndex, dataEndIndex + 1) :
    item.props.data;
  const defaultRangeZ = zAxis ? zAxis.range : ZAxis.defaultProps.range;
  const defaultZ = defaultRangeZ && defaultRangeZ[0];
  const xOffset = xAxis.scale.bandwidth ? xAxis.scale.bandwidth() / 2 : 0;
  const yOffset = yAxis.scale.bandwidth ? yAxis.scale.bandwidth() / 2 : 0;

  return data.map((entry, index) => {
    return {
      ...entry,
      cx: isNumOrStr(entry[xAxisDataKey]) ? xAxis.scale(entry[xAxisDataKey]) + xOffset : null,
      cy: isNumOrStr(entry[yAxisDataKey]) ? yAxis.scale(entry[yAxisDataKey]) + yOffset : null,
      size: !_.isNil(zAxisDataKey) && isNumOrStr(entry[zAxisDataKey]) ?
        zAxis.scale(entry[zAxisDataKey]) :
        defaultZ,
      node: {
        x: entry[xAxisDataKey],
        y: entry[yAxisDataKey],
        z: (!_.isNil(zAxisDataKey) && entry[zAxisDataKey]) || '-',
      },
      payload: entry,
      ...(cells && cells[index] && cells[index].props),
    };
  });
};

@composedDataDecorator({ getComposedData })
export class ScatterChart extends Component {

  static displayName = 'ScatterChart';

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
    onItemMouseEnter: PropTypes.func,
    onItemMouseLeave: PropTypes.func,
    // used internally
    isComposed: PropTypes.bool,
  };

  renderCursor(offset) {
    const { children, isTooltipActive, activeItem } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

    if (!tooltipItem || !tooltipItem.props.cursor || !isTooltipActive || !activeItem) {
      return null;
    }

    const cursorProps = {
      stroke: '#ccc',
      strokeDasharray: '5 5',
      ...getPresentationAttributes(tooltipItem.props.cursor),
      ...offset,
      x: activeItem.cx,
      y: activeItem.cy,
      payload: activeItem,
    };

    return React.isValidElement(tooltipItem.props.cursor) ?
      React.cloneElement(tooltipItem.props.cursor, cursorProps) :
      React.createElement(Cross, cursorProps);
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
    const { allComposedData, onItemMouseEnter, onItemMouseLeave } = this.props;

    return items.map((child, i) => {
      const { data, xAxisId, yAxisId } = child.props;

      return React.cloneElement(child, {
        key: child.key || `scatter-${i}`,
        points: allComposedData[i],
        onMouseLeave: onItemMouseLeave,
        onMouseEnter: onItemMouseEnter,
        ...offset,
        xAxis: xAxisMap[xAxisId],
        yAxis: yAxisMap[yAxisId],
      });
    }, this);
  }

  render() {
    const { isComposed, xAxisMap, yAxisMap, offset, graphicalItems } = this.props;

    return (
      <Layer className="recharts-scatter-graphical">
        {!isComposed && this.renderCursor(offset)}
        {this.renderItems(graphicalItems, xAxisMap, yAxisMap, offset)}
      </Layer>
    );
  }
}

export default generateCategoricalChart('ScatterChart', Scatter, 'single');
