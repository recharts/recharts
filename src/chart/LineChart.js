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
import _ from 'lodash';
import Smooth from 'react-smooth';
import AnimationDecorator from '../util/AnimationDecorator';

@AnimationDecorator
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
    animationId: PropTypes.number,
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

    return data.map((entry, index) => {
      const value = entry[dataKey];

      if (layout === 'horizontal') {
        return {
          x: xTicks[index].coordinate + bandSize / 2,
          y: _.isNil(value) ? null : yAxis.scale(value),
          value,
        };
      }

      return {
        x: _.isNil(value) ? null : xAxis.scale(value),
        y: yTicks[index].coordinate + bandSize / 2,
        value,
      };
    });
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

  renderActiveDot(option, props, index) {
    let dot;

    if (React.isValidElement(option)) {
      dot = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      dot = option(props);
    } else {
      dot = <Dot {...props} className="recharts-line-active-dot" />;
    }

    return (
      <Smooth
        from="scale(0)"
        to="scale(1)"
        duration={400}
        key={`dot-${props.dataKey}`}
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
    const { children, layout, isTooltipActive, activeTooltipIndex, animationId } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);
    const hasDot = tooltipItem && isTooltipActive;
    const dotItems = [];

    const lineItems = items.map((child, i) => {
      const { xAxisId, yAxisId, dataKey, stroke, activeDot } = child.props;
      const points = this.getComposedData(xAxisMap[xAxisId], yAxisMap[yAxisId], dataKey);
      const activePoint = points[activeTooltipIndex];

      if (hasDot && activeDot && activePoint) {
        const dotProps = {
          index: i,
          dataKey,
          cx: activePoint.x, cy: activePoint.y, r: 4,
          fill: stroke, strokeWidth: 2, stroke: '#fff',
          ...getPresentationAttributes(activeDot),
        };
        dotItems.push(this.renderActiveDot(activeDot, dotProps, i));
      }

      return React.cloneElement(child, {
        key: `line-${i}`,
        ...offset,
        layout,
        points,
        animationId,
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
