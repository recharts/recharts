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
  };

  getScaledValue(axis, entryValue, threshold, i) {
    if (threshold === null || threshold === undefined) return axis.scale(entryValue);
    if (i === 0) {
      return entryValue <= threshold ? axis.scale(entryValue) : null;
    }
    return entryValue >= threshold ? axis.scale(entryValue) : null;
  }

  /**
   * Compose the data of each group
   * @param  {Object} xAxis   The configuration of x-axis
   * @param  {Object} yAxis   The configuration of y-axis
   * @param  {String} dataKey The unique key of a group
   * @return {Array}  Composed data
   */
  getComposedData(xAxis, yAxis, dataKey, startSegmentIndex, endSegmentIndex, l) {
    const { layout, dataStartIndex, dataEndIndex, isComposed } = this.props;
    // const data = this.props.data.slice(startSegmentIndex, endSegmentIndex + 1);
    const bandSize = getBandSizeOfScale(layout === 'horizontal' ? xAxis.scale : yAxis.scale);
    const xTicks = getTicksOfAxis(xAxis);
    const yTicks = getTicksOfAxis(yAxis);

    const data = [];
    for (var i = startSegmentIndex; i <= endSegmentIndex; i++) {
      const dataPoint = this.props.data[i];
      data.push({
        x: layout === 'horizontal' ?
          xTicks[i].coordinate + bandSize / 2 :
          xAxis.scale(dataPoint[dataKey]),
        y: layout === 'horizontal' ?
          yAxis.scale(dataPoint[dataKey]) :
          yTicks[i].coordinate + bandSize / 2,
        value: dataPoint[dataKey],
      });
    }
    return data;
  }

  // getComposedData(xAxis, yAxis, dataKey, threshold, i) {
  //   const { layout, dataStartIndex, dataEndIndex, isComposed } = this.props;
  //   const data = this.props.data.slice(dataStartIndex, dataEndIndex + 1);
  //   const bandSize = getBandSizeOfScale(layout === 'horizontal' ? xAxis.scale : yAxis.scale);
  //   const xTicks = getTicksOfAxis(xAxis);
  //   const yTicks = getTicksOfAxis(yAxis);
  //
  //   return data.map((entry, index) => ({
  //     x: layout === 'horizontal' ?
  //       xTicks[index].coordinate + bandSize / 2 :
  //       xAxis.scale(entry[dataKey]),
  //     y: layout === 'horizontal' ?
  //       this.getScaledValue(yAxis, entry[dataKey], threshold, i) :
  //       yTicks[index].coordinate + bandSize / 2,
  //     value: entry[dataKey],
  //   }));
  // }

  renderCursor(xAxisMap, yAxisMap, offset) {
    const { children, isTooltipActive } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

    if (!tooltipItem || !tooltipItem.props.cursor || !isTooltipActive) { return null; }

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
    const { children, layout, isTooltipActive, activeTooltipIndex } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);
    const hasDot = tooltipItem && isTooltipActive;
    const dotItems = [];

    // const thresholds = [80];
    // let splitItems = []
    // for (var j = 0; j < items.length; j++) {
    //   splitItems.push(Object.assign({}, items[j], { threshold: thresholds[0] }));
    //   for (var k = 0; k < thresholds.length; k++) {
    //     let nextLine = Object.assign({}, splitItems[0]);
    //     nextLine.threshold = thresholds[k];
    //     splitItems.push(nextLine);
    //   }
    // }

        // for (var j = 1; j =< xAxisMap[0].tickCount; j++) {
        //   if (true) {
        //
        //   }
        //
        //   splitItems.push(Object.assign({}, items[j], { threshold: thresholds[0] }));
        //   for (var k = 0; k < thresholds.length; k++) {
        //     let nextLine = Object.assign({}, splitItems[0]);
        //     nextLine.threshold = thresholds[k];
        //     splitItems.push(nextLine);
        //   }
        // }


    const lineItems = items.map((child, i) => {
      const { xAxisId, yAxisId, dataKey, stroke, activeDot, strokeArray } = child.props;

      const threshold = 80;
      const data = this.props.data;
      const dataSegments = [];
      const dk = child.props.dataKey;
      const strokeSectors = {
        good: '#11d919',
        warning: '#fcec0b',
        bad: '#ff1111',
      };
      const stepKey = 'status';
      let sector = null;

      for (var j = 0; j < data.length; j++) {
        const currItem = data[j];
        const dataItem = currItem[dk];
        const dataSegment = currItem[stepKey];
        if (sector === null) {
          sector = dataSegment;
        } else if (sector !== dataSegment) {
          sector = dataSegment;
          dataSegments.push(j);
        }
      }
      dataSegments.push(data.length - 1);


      const lineSections = dataSegments.map((endSegmentIndex, l) => {
        const startSegmentIndex = l === 0 ? 0 : dataSegments[l - 1];

        let lineStroke;
        if (strokeSectors) {
          const dataPoint = data[startSegmentIndex];
          lineStroke = strokeSectors[dataPoint[stepKey]];
        } else if (strokeArray) {
          const strokeIndex = l % strokeArray.length;
          lineStroke = strokeArray[strokeIndex];
        } else {
          lineStroke = stroke;
        }

        const points = this.getComposedData(xAxisMap[xAxisId],
            yAxisMap[yAxisId], dataKey, startSegmentIndex, endSegmentIndex, l);
        // startSegmentIndex = endSegmentIndex;
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
          key: `line-${i}-${l}`,
          ...offset,
          layout,
          points,
          stroke: lineStroke,
        });
      }, this);
      return lineSections;
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
