/**
 * @fileOverview Area Chart
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Smooth from 'react-smooth';
import _ from 'lodash';
import Layer from '../container/Layer';
import Tooltip from '../component/Tooltip';
import Dot from '../shape/Dot';
import Curve from '../shape/Curve';
import { getPresentationAttributes, findChildByType } from '../util/ReactUtils';
import { getMainColorOfGraphicItem } from '../util/CartesianUtils';
import { isNumber, getValueByDataKey } from '../util/DataUtils';
import generateCategoricalChart from './generateCategoricalChart';
import Area from '../cartesian/Area';
import AnimationDecorator from '../util/AnimationDecorator';
import composedDataDecorator from '../util/ComposedDataDecorator';


const getCategoryAxisCoordinate = ({ axis, ticks, bandSize, entry, index }) => {
  if (axis.type === 'category') {
    return ticks[index] ? ticks[index].coordinate + bandSize / 2 : null;
  }

  const value = getValueByDataKey(entry, axis.dataKey);

  return !_.isNil(value) ? axis.scale(value) : null;
};

const getBaseValue = (props, xAxis, yAxis) => {
  const { layout, baseValue } = props;

  if (isNumber(baseValue)) { return baseValue; }

  const numberAxis = layout === 'horizontal' ? yAxis : xAxis;
  const domain = numberAxis.scale.domain();

  if (numberAxis.type === 'number') {
    const max = Math.max(domain[0], domain[1]);
    const min = Math.min(domain[0], domain[1]);

    if (baseValue === 'dataMin') { return min; }
    if (baseValue === 'dataMax') { return max; }

    return max < 0 ? max : Math.max(Math.min(domain[0], domain[1]), 0);
  }

  if (baseValue === 'dataMin') { return domain[0]; }
  if (baseValue === 'dataMax') { return domain[1]; }

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
  let isRange = false;

  const points = data.map((entry, index) => {
    let value;

    if (hasStack) {
      value = stackedData[dataStartIndex + index];
    } else {
      value = getValueByDataKey(entry, dataKey);

      if (!_.isArray(value)) {
        value = [baseValue, value];
      } else {
        isRange = true;
      }
    }

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
  if (hasStack || isRange) {
    baseLine = points.map(entry => ({
      x: layout === 'horizontal' ? entry.x : xAxis.scale(entry && entry.value[0]),
      y: layout === 'horizontal' ? yAxis.scale(entry && entry.value[0]) : entry.y,
    }));
  } else if (layout === 'horizontal') {
    baseLine = yAxis.scale(baseValue);
  } else {
    baseLine = xAxis.scale(baseValue);
  }

  return { points, baseLine, layout, isRange };
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
    baseValue: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['dataMin', 'dataMax', 'auto']),
    ]),
    // used internally
    isComposed: PropTypes.bool,
    animationId: PropTypes.number,
  };

  static defaultProps = {
    baseValue: 'auto',
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
      dot = <Dot {...props} />;
    }

    return (
      <Smooth
        from="scale(0)"
        to="scale(1)"
        duration={400}
        key={`dot-${childIndex}-${props.pointType}`}
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
      const { isRange } = currentComposedData;
      const activePoint = currentComposedData.points &&
        currentComposedData.points[activeTooltipIndex];
      const basePoint = isRange && currentComposedData.baseLine &&
        currentComposedData.baseLine[activeTooltipIndex];

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
          pointType: 'activePoint',
          ...getPresentationAttributes(activeDot),
        };

        dotItems.push(this.renderActiveDot(activeDot, dotProps, i));

        if (basePoint) {
          dotItems.push(this.renderActiveDot(activeDot, {
            ...dotProps,
            cx: basePoint.x,
            cy: basePoint.y,
            pointType: 'basePoint',
          }, i));
        }
      }

      const area = React.cloneElement(child, {
        key: child.key || `area-${i}`,
        ...currentComposedData,
        ...offset,
        animationId,
        layout,
        xAxis: xAxisMap[child.props.xAxisId],
        yAxis: yAxisMap[child.props.yAxisId],
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
