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
import { getTicksOfAxis, getStackedDataOfItem,
  getMainColorOfGraphicItem } from '../util/CartesianUtils';
import generateCategoricalChart from './generateCategoricalChart';
import Area from '../cartesian/Area';
import pureRender from '../util/PureRender';
import { getBandSizeOfScale, getAnyElementOfObject } from '../util/DataUtils';
import _ from 'lodash';
import Smooth from 'react-smooth';
import AnimationDecorator from '../util/AnimationDecorator';

@AnimationDecorator
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
    animationId: PropTypes.number,
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
    const baseValue = this.getBaseValue(xAxis, yAxis);

    const points = data.map((entry, index) => {
      const value = hasStack ? stackedData[dataStartIndex + index] : [baseValue, entry[dataKey]];

      if (layout === 'horizontal') {
        return {
          x: xTicks[index].coordinate + bandSize / 2,
          y: _.isNil(value[1]) ? null : yAxis.scale(value[1]),
          value,
        };
      }

      return {
        x: _.isNil(value[1]) ? null : xAxis.scale(value[1]),
        y: yTicks[index].coordinate + bandSize / 2,
        value,
      };
    });

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
      baseLine = yAxis.scale(baseValue);
    } else {
      baseLine = xAxis.scale(baseValue);
    }

    return { points, baseLine, layout };
  }

  getBaseValue(xAxis, yAxis) {
    const { layout } = this.props;
    const numberAxis = layout === 'horizontal' ? yAxis : xAxis;
    const domain = numberAxis.scale.domain();

    if (numberAxis.type === 'number') {
      const max = Math.max(domain[0], domain[1]);
      return max < 0 ? max : Math.max(Math.min(domain[0], domain[1]), 0);
    }

    return domain[0];
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

  renderActiveDot(option, props) {
    let dot;

    if (React.isValidElement(option)) {
      dot = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      dot = option(props);
    } else {
      dot = <Dot {...props} />;
    }

    return (
      <Smooth
        from="scale(0)"
        to="scale(1)"
        duration={400}
        key={`dot-${props.dataKey}`}
        attributeName="transform"
      >
        <Layer style={{ transformOrigin: 'center center' }}>
          {dot}
        </Layer>
      </Smooth>
    );
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
    const { animationId } = this.props;

    const areaItems = items.reduce((result, child, i) => {
      const { xAxisId, yAxisId, dataKey, fillOpacity, fill, activeDot } = child.props;
      const numericAxisId = layout === 'horizontal' ? yAxisId : xAxisId;
      const stackedData = stackGroups && stackGroups[numericAxisId] &&
        stackGroups[numericAxisId].hasStack &&
        getStackedDataOfItem(child, stackGroups[numericAxisId].stackGroups);
      const composeData = this.getComposedData(
        xAxisMap[xAxisId], yAxisMap[yAxisId], dataKey, stackedData
      );
      const activePoint = composeData.points && composeData.points[activeTooltipIndex];

      if (hasDot && activeDot && activePoint) {
        const dotProps = {
          index: i,
          dataKey,
          animationId,
          cx: activePoint.x, cy: activePoint.y, r: 4,
          fill: getMainColorOfGraphicItem(child),
          strokeWidth: 2, stroke: '#fff',
          ...getPresentationAttributes(activeDot),
        };
        dotItems.push((
          <Layer key={`dot-${dataKey}`}>
            {this.renderActiveDot(activeDot, dotProps)}
          </Layer>
        ));
      }

      const area = React.cloneElement(child, {
        key: `area-${i}`,
        ...offset,
        ...composeData,
        animationId,
        layout,
      });

      return [...result, area];
    }, []);

    return (
      <Layer className="recharts-area-chart-group">
        <Layer className="recharts-area-chart-shapes">{areaItems}</Layer>
        <Layer className="recharts-area-chart-dots">{dotItems}</Layer>
      </Layer>
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
