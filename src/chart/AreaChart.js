/**
 * @fileOverview Area Chart
 */
import React, { Component, PropTypes } from 'react';
import Smooth from 'react-smooth';
import _ from 'lodash';
import Layer from '../container/Layer';
import Tooltip from '../component/Tooltip';
import Dot from '../shape/Dot';
import Curve from '../shape/Curve';
import { getPresentationAttributes, findChildByType } from '../util/ReactUtils';
import { getMainColorOfGraphicItem } from '../util/CartesianUtils';
import generateCategoricalChart from './generateCategoricalChart';
import Area from '../cartesian/Area';
import AnimationDecorator from '../util/AnimationDecorator';
import composedDataDecorator from '../util/ComposedDataDecorator';


const getCategoryAxisCoordinate = ({ axis, ticks, bandSize, entry, index }) => {
  if (axis.type === 'category') {
    return ticks[index] ? ticks[index].coordinate + bandSize / 2 : null;
  }

  const dataKey = axis.dataKey;

  return dataKey && !_.isNil(entry[dataKey]) ? axis.scale(entry[dataKey]) : null;
};

const getBaseValue = (props, xAxis, yAxis) => {
  const { layout } = props;
  const numberAxis = layout === 'horizontal' ? yAxis : xAxis;
  const domain = numberAxis.scale.domain();

  if (numberAxis.type === 'number') {
    const max = Math.max(domain[0], domain[1]);
    return max < 0 ? max : Math.max(Math.min(domain[0], domain[1]), 0);
  }

  return domain[0];
};

/**
 * Compose the data of each area
 * @param {Object} props The props that are passed to the component
 * @param {Object} xAxis       The configuration of x-axis
 * @param {Object} yAxis       The configuration of y-axis
 * @param {String} dataKey     The unique key of a group
 * @param {Array} stackedData If the area is stacked,
 * the stackedData is an array of min value and max value
 * @return {Array} Composed data
 */
const getComposedData = ({ props, xAxis, yAxis, xTicks, yTicks, bandSize, dataKey,
  stackedData }) => {
  const { layout, dataStartIndex, dataEndIndex } = props;
  const data = props.data.slice(dataStartIndex, dataEndIndex + 1);
  const hasStack = stackedData && stackedData.length;
  const baseValue = getBaseValue(props, xAxis, yAxis);

  const points = data.map((entry, index) => {
    const value = hasStack ? stackedData[dataStartIndex + index] : [baseValue, entry[dataKey]];

    if (layout === 'horizontal') {
      return {
        x: getCategoryAxisCoordinate({ axis: xAxis, ticks: xTicks, bandSize, entry, index }),
        y: _.isNil(value[1]) ? null : yAxis.scale(value[1]),
        value,
        payload: entry,
      };
    }

    return {
      x: _.isNil(value[1]) ? null : xAxis.scale(value[1]),
      y: getCategoryAxisCoordinate({ axis: yAxis, ticks: yTicks, bandSize, entry, index }),
      value,
      payload: entry,
    };
  });

  let baseLine;
  if (hasStack) {
    baseLine = stackedData.slice(dataStartIndex, dataEndIndex + 1).map((entry, index) => ({
      x: layout === 'horizontal' ?
          getCategoryAxisCoordinate({ axis: xAxis, ticks: xTicks, bandSize, entry, index }) :
          xAxis.scale(entry[0]),
      y: layout === 'horizontal' ?
         yAxis.scale(entry[0]) :
         getCategoryAxisCoordinate({ axis: yAxis, ticks: yTicks, bandSize, entry, index }),
    }));
  } else if (layout === 'horizontal') {
    baseLine = yAxis.scale(baseValue);
  } else {
    baseLine = xAxis.scale(baseValue);
  }

  return { points, baseLine, layout };
};

@AnimationDecorator
@composedDataDecorator({ getComposedData })
export class AreaChart extends Component {
  static displayName = 'AreaChart';

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
   * @param  {Array} allComposedData The array of pre-created composedData
   *                                 {points, basedLine, layout} for each item
   * @return {ReactComponent} The instances of Area
   */
  renderItems(items, xAxisMap, yAxisMap, offset, allComposedData) {
    const { children, layout, isTooltipActive, activeTooltipIndex } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);
    const hasDot = tooltipItem && isTooltipActive;
    const dotItems = [];
    const { animationId } = this.props;

    const areaItems = items.reduce((result, child, i) => {

      const { dataKey, activeDot } = child.props;
      const currentComposedData = allComposedData[i];
      const activePoint = currentComposedData.points &&
        currentComposedData.points[activeTooltipIndex];

      if (hasDot && activeDot && activePoint) {
        const dotProps = {
          index: activeTooltipIndex,
          dataKey,
          animationId,
          cx: activePoint.x, cy: activePoint.y, r: 4,
          fill: getMainColorOfGraphicItem(child),
          strokeWidth: 2, stroke: '#fff',
          payload: activePoint.payload,
          value: activePoint.value,
          ...getPresentationAttributes(activeDot),
        };
        dotItems.push(this.renderActiveDot(activeDot, dotProps));
      }

      const area = React.cloneElement(child, {
        key: `area-${i}`,
        ...offset,
        ...currentComposedData,
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
    const { isComposed, graphicalItems, xAxisMap, yAxisMap, offset, allComposedData } = this.props;

    return (
      <Layer className="recharts-area-graphical">
        {!isComposed && this.renderCursor({ xAxisMap, yAxisMap, offset })}
        {this.renderItems(graphicalItems, xAxisMap, yAxisMap, offset, allComposedData)}
      </Layer>
    );
  }
}

export default generateCategoricalChart(AreaChart, Area);
