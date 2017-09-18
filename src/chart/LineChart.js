/**
 * @fileOverview Line Chart
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Smooth from 'react-smooth';
import _ from 'lodash';
import classNames from 'classnames';
import Layer from '../container/Layer';
import Tooltip from '../component/Tooltip';
import Curve from '../shape/Curve';
import Dot from '../shape/Dot';
import generateCategoricalChart from './generateCategoricalChart';
import Line from '../cartesian/Line';
import { getPresentationAttributes, findChildByType } from '../util/ReactUtils';
import AnimationDecorator from '../util/AnimationDecorator';
import composedDataDecorator from '../util/ComposedDataDecorator';
import { getValueByDataKey } from '../util/DataUtils';

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
const getComposedData = ({ props, xAxis, yAxis, xTicks, yTicks, dataKey, bandSize }) => {
  const { layout, dataStartIndex, dataEndIndex } = props;
  const data = props.data.slice(dataStartIndex, dataEndIndex + 1);

  return data.map((entry, index) => {
    const value = getValueByDataKey(entry, dataKey);

    if (layout === 'horizontal') {
      return {
        x: getCategoryAxisCoordinate({ axis: xAxis, ticks: xTicks, bandSize, entry, index }),
        y: _.isNil(value) ? null : yAxis.scale(value),
        value,
        payload: entry,
      };
    }

    return {
      x: _.isNil(value) ? null : xAxis.scale(value),
      y: getCategoryAxisCoordinate({ axis: yAxis, ticks: yTicks, bandSize, entry, index }),
      value,
      payload: entry,
    };
  });
};

@AnimationDecorator
@composedDataDecorator({ getComposedData })
export class LineChart extends Component {

  static displayName = 'LineChart';

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
    // used internally
    isComposed: PropTypes.bool,
    animationId: PropTypes.number,
  };

  renderCursor({ offset }) {
    const { children, isTooltipActive, layout, activeTooltipIndex, axisTicks } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

    if (!tooltipItem || !tooltipItem.props.cursor || !isTooltipActive ||
      activeTooltipIndex < 0) { return null; }

    const ticks = axisTicks;

    if (!ticks || !ticks[activeTooltipIndex]) { return null; }

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

  renderActiveDot(option, props, childIndex) {
    let dot;

    if (React.isValidElement(option)) {
      dot = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      dot = option(props);
    } else {
      const className = classNames('recharts-line-active-dot', option.className);
      dot = <Dot {...props} className={className} />;
    }

    return (
      <Smooth
        from="scale(0)"
        to="scale(1)"
        duration={400}
        key={`dot-${childIndex}`}
        attributeName="transform"
      >
        <Layer style={{ transformOrigin: 'center center' }}>{dot}</Layer>
      </Smooth>
    );
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
    const { children, layout, isTooltipActive, activeTooltipIndex,
      animationId, allComposedData } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);
    const hasDot = tooltipItem && isTooltipActive;
    const dotItems = [];

    const lineItems = items.map((child, i) => {
      const { dataKey, stroke, activeDot } = child.props;
      const points = allComposedData[i];
      const activePoint = points[activeTooltipIndex];

      if (hasDot && activeDot && activePoint) {
        const dotProps = {
          index: activeTooltipIndex,
          dataKey,
          cx: activePoint.x, cy: activePoint.y, r: 4,
          fill: stroke, strokeWidth: 2, stroke: '#fff',
          payload: activePoint.payload,
          value: activePoint.value,
          ...getPresentationAttributes(activeDot),
        };
        dotItems.push(this.renderActiveDot(activeDot, dotProps, i));
      }

      return React.cloneElement(child, {
        key: child.key || `line-${i}`,
        ...offset,
        layout,
        points,
        animationId,
        xAxis: xAxisMap[child.props.xAxisId],
        yAxis: yAxisMap[child.props.yAxisId],
      });
    }, this);

    return (
      <Layer className="recharts-line-chart-wrapper">
        <Layer className="recharts-line-chart">{lineItems}</Layer>
        <Layer className="recharts-line-chart-dot">{dotItems}</Layer>
      </Layer>
    );
  }

  render() {
    const { isComposed, xAxisMap, yAxisMap, offset, graphicalItems } = this.props;

    return (
      <Layer className="recharts-line-graphical">
        {!isComposed && this.renderCursor({ offset })}
        {this.renderItems(graphicalItems, xAxisMap, yAxisMap, offset)}
      </Layer>
    );
  }
}

export default generateCategoricalChart(LineChart, Line);
