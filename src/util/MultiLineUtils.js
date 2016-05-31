/**
 * @fileOverview Multiline Chart Utils
 */
import React, { PropTypes, Component } from 'react';
import { findChildByType } from './ReactUtils';
import { getBandSizeOfScale } from './DataUtils';
import { getTicksOfAxis } from './CartesianUtils';


// export const getScaledValue = (el, axis, entryValue, threshold, i) => {
//   if (threshold === null || threshold === undefined) return axis.scale(entryValue);
//   if (i === 0) {
//     return entryValue <= threshold ? axis.scale(entryValue) : null;
//   }
//   return entryValue >= threshold ? axis.scale(entryValue) : null;
// };

/**
 * Compose the data of each group
 * @param  {Object} xAxis   The configuration of x-axis
 * @param  {Object} yAxis   The configuration of y-axis
 * @param  {String} dataKey The unique key of a group
 * @return {Array}  Composed data
 */
export const getComposedData = (props, xAxis, yAxis, dataKey, startIndex, endIndex) => {
  const { layout, dataStartIndex, dataEndIndex, isComposed } = props;
  const bandSize = getBandSizeOfScale(layout === 'horizontal' ? xAxis.scale : yAxis.scale);
  const xTicks = getTicksOfAxis(xAxis);
  const yTicks = getTicksOfAxis(yAxis);

  const data = [];
  for (var i = startIndex; i <= endIndex; i++) {
    const dataPoint = props.data[i];
    const yDataPoint = i === endIndex ? props.data[i - 1] : props.data[i];
    data.push({
      x: layout === 'horizontal' ?
        xTicks[i].coordinate + bandSize / 2 :
        xAxis.scale(dataPoint[dataKey]),
      y: layout === 'horizontal' ?
        yAxis.scale(yDataPoint[dataKey]) :
        yTicks[i].coordinate + bandSize / 2,
      value: dataPoint[dataKey],
    });
  }
  return data;
};

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

/**
 * Get Stroke coloured based on variables given on init
 **/
const findStroke = (props, region, segmentCount) => {
  if (props.strokeRegions) {
    return props.strokeRegions[region];
  } else if (props.strokeArray && segmentCount >= 0) {
    const strokeIndex = segmentCount % props.strokeArray.length;
    return props.strokeArray[strokeIndex];
  }
  return props.stroke;
};

/**
 * Find points where the line transitions to a different region
 **/
const findDataSegments = (props, data, dataKey, regionKey) => {
  const dataSegments = [];
  let currentRegion = null;
  let start = 0;

  for (var i = 0; i < data.length; i++) {
    const currItem = data[i];
    const dataItem = currItem[dataKey];
    const dataSegment = currItem[regionKey];
    if (currentRegion === null) {
      currentRegion = dataSegment;
    } else if (currentRegion !== dataSegment) {
      const stroke = findStroke(props, currentRegion, dataSegments.length);
      dataSegments.push({ start, end: i, stroke });
      currentRegion = dataSegment;
      start = i;
    }
  }
  dataSegments.push({
    start,
    end: data.length - 1,
    stroke: findStroke(props, currentRegion, dataSegments.length),
  });
  return dataSegments;
};

/**
 * Draw the main part of line chart
 * @param  {Array} items     All the instance of Line
 * @param  {Object} xAxisMap The configuration of all x-axes
 * @param  {Object} yAxisMap The configuration of all y-axes
 * @param  {Object} offset   The offset of main part in the svg element
 * @return {ReactComponent}  All the instances of Line
 */
export const renderMultiLine = (props, child, xAxisMap, yAxisMap, offset, i) => {
  const { data, layout } = props;
  const { xAxisId, yAxisId, dataKey, regionKey } = child.props;

  const dataSegments = findDataSegments(child.props, data, dataKey, regionKey);

  return dataSegments.map((segment, l) => {
    const { start, end, stroke } = segment;

    const points = getComposedData(props, xAxisMap[xAxisId],
        yAxisMap[yAxisId], dataKey, start, end);

    return React.cloneElement(child, {
      key: `line-${i}-${l}`,
      ...offset,
      layout,
      points,
      stroke,
    });
  }, this);
};
