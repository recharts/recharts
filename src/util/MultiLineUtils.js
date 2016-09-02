/**
 * @fileOverview Multiline Chart Utils
 */
 /*eslint max-len: ["error", { "ignoreComments": true }]*/
import React, { PropTypes, Component } from 'react';
import { findChildByType } from './ReactUtils';
import { getBandSizeOfScale } from './DataUtils';
import { getTicksOfAxis } from './CartesianUtils';
import _ from 'lodash';

const defaultColor = '#8e8e8e';

/**
 * Compose the data of each group
 * @param  {Object} chartProps  The props from the parent chart (e.g. LineChart)
 * @param  {String} type        The type of line (e.g. 'linear', 'step')
 * @param  {Object} xAxis       The configuration of x-axis
 * @param  {Object} yAxis       The configuration of y-axis
 * @param  {String} dataKey     The unique key of a group for the data item
 * @param  {Number} startIndex  The starting point of the data for the segment
 * @param  {Number} endIndex    The end point of the data for the segment
 * @param  {Number | String} regionValue  The region value used for step chart regions
 * @return {Array}  Composed data
 */
export const getComposedData = (chartProps, type, xAxis, yAxis, dataKey,
    startIndex, endIndex, regionValue = null) => {
  const { layout, dataStartIndex, dataEndIndex, isComposed } = chartProps;
  const bandSize = getBandSizeOfScale(layout === 'horizontal' ? xAxis.scale : yAxis.scale);
  const xTicks = getTicksOfAxis(xAxis);
  const yTicks = getTicksOfAxis(yAxis);

  const data = [];
  let prevYPointWasNull = false
  for (var i = startIndex; i <= endIndex; i++) {
    const dataPoint = chartProps.data[i];
    const yDataPoint = i === endIndex && (type === 'stepAfter' || prevYPointWasNull)
      ? chartProps.data[i - 1] : chartProps.data[i];
    const yPoint = regionValue !== null ? regionValue : _.get(yDataPoint, dataKey, null);
    prevYPointWasNull = yPoint === null
    const value = _.get(dataPoint, dataKey, null)
    const hasNullEndValue = type === 'linear' && value === null && i === endIndex;
    const bottomOfGraph = yAxis.scale && yAxis.scale.range && yAxis.scale.range() && yAxis.scale.range()[0]

    if (!hasNullEndValue) {
      data.push({
        x: layout === 'horizontal' ?
          xTicks[i].coordinate + bandSize / 2 :
          xAxis.scale(_.get(dataPoint, dataKey, null)),
        y: layout === 'horizontal' ?
          yPoint === null ? bottomOfGraph : yAxis.scale(yPoint) :
          yTicks[i].coordinate + bandSize / 2,
        value: value,
        nullVals: yPoint === null
      });
    }
  }
  return data;
};

/**
 * Find Stroke colour based on variables given on init
 * @param  {Object} lineProps     The props from the line React component
 * @param  {String} region        The region key if using strokeRegions
 * @param  {Number} segmentCount  The count of the segment if using a stroke array to pick colours
 * @return {String} Stroke Colour
 **/
const findStroke = (lineProps, region, segmentCount, previousDataItem) => {
  if (lineProps.strokeThresholds && lineProps.strokeThresholdKey && previousDataItem) {
    const diVal = _.get(previousDataItem, lineProps.strokeThresholdKey, null);
    const threshold = findThreshold(lineProps.strokeThresholds, diVal);
    return thresholdColor(threshold);
  } else if (lineProps.strokeRegions) {
    if (lineProps.strokeRegions[region] && lineProps.strokeRegions[region].color) {
      return lineProps.strokeRegions[region].color;
    }
    return defaultColor;
  } else if (lineProps.strokeArray && segmentCount >= 0) {
    const strokeIndex = segmentCount % lineProps.strokeArray.length;
    return lineProps.strokeArray[strokeIndex];
  }
  return lineProps.stroke;
};

const findRegionValue = (lineProps, region, dataItem) => {
  if (lineProps.strokeRegions
    && lineProps.strokeRegions[region] !== undefined
    && lineProps.strokeRegions[region].value !== null) {
    return lineProps.strokeRegions[region].value;
  }
  return dataItem;
};

const checkThreshold = (thr, val) => {
  if (thr === null || val === null) {
    return thr === null && val === null;
  }

  if (!thr.min) {
    return val < thr.max;
  } else if (!thr.max) {
    return val >= thr.min;
  }
  return val >= thr.min && val < thr.max;
};

const findThreshold = (thresholds, dataVal) => {
  if (dataVal === null || dataVal === undefined) { return null; };
  return _.find(thresholds, function (thr) { // eslint-disable-line prefer-arrow-callback,func-names,max-len
    return checkThreshold(thr, dataVal);
  });
};

const thresholdColor = (threshold) => {
  return threshold && threshold.color ? threshold.color : defaultColor;
};

/**
 * Find points where the line transitions to a different segment based on regions
 * @param  {Object} lineProps The props from the line React component
 * @param  {Array} data       The data used for points on the chart
 * @param  {String} dataKey   The key specifying which property on data holds the value
 * @return {Array} Data Segments, i.e. the different sections the line is split into
 **/
const findDataSegmentsByRegion = (lineProps, data, dataKey) => {
  const { regionKey } = lineProps;
  const dataSegments = [];
  let currentRegion = null;
  let previousRegionValue = null;
  let previousItem = null;
  let start = 0;

  for (var i = 0; i < data.length; i++) {
    const currItem = data[i];
    const dataItem = _.get(currItem, dataKey, null);
    const dataSegment = _.get(currItem, regionKey, null);
    if (i === 0) {
      currentRegion = dataSegment;
      previousItem = currItem;
      previousRegionValue = findRegionValue(lineProps, currentRegion, dataItem)
    } else if (currentRegion !== dataSegment) {
      if (previousRegionValue !== null) {
        const stroke = findStroke(lineProps, currentRegion, dataSegments.length, previousItem);
        dataSegments.push({ start, end: i, regionValue: previousRegionValue, stroke });
      } else {
        dataSegments.push({ start, end: i, regionValue: previousRegionValue, stroke: null });
      }

      currentRegion = dataSegment;
      const regionValue = findRegionValue(lineProps, currentRegion, dataItem);
      start = i;
      previousItem = currItem;
      previousRegionValue = regionValue;
    }
  }

  const dataVal = _.get(data[data.length - 1], dataKey, null);
  const finalRegionVal = findRegionValue(lineProps, currentRegion, dataVal);
  if (finalRegionVal !== null) {
    const finalStroke = findStroke(lineProps, currentRegion, dataSegments.length, data[data.length - 1]);
    dataSegments.push({start, end: data.length - 1, regionValue: finalRegionVal, stroke: finalStroke});
  } else {
    dataSegments.push({start, end: data.length - 1, regionValue: finalRegionVal, stroke: null});
  }
  return dataSegments;
};

const findDataSegmentsNormal = (lineProps, data, dataKey) => {
  const {stroke} = lineProps;
  const dataSegments = [];
  let start = 0;
  let previousDataItem = null;

  for (var i = 0; i < data.length; i++) {
    const dataItem = _.get(data[i], dataKey, null);
    if (i === 0) {
      previousDataItem = dataItem;
    } else if (i === (data.length - 1)) {
      dataSegments.push({ start, end: i, stroke: previousDataItem !== null ? stroke : null });
    } else if (dataItem === null && previousDataItem !== null) { // end of line with values
      dataSegments.push({ start, end: i, stroke });
      previousDataItem = null;
      start = i;
    } else if (dataItem !== null && previousDataItem === null) { // end of line without values
      dataSegments.push({ start, end: i, stroke: null });
      previousDataItem = dataItem;
      start = i;
    }
  }
  return dataSegments;
};

/**
 * Find points where the line transitions to a different segment based on thresholds
 * @param  {Object} lineProps The props from the line React component
 * @param  {Array} data       The data used for points on the chart
 * @param  {String} dataKey   The key specifying which property on data holds the value
 * @return {Array} Data Segments, i.e. the different sections the line is split into
 **/
const findDataSegmentsByThreshold = (lineProps, data, dataKey) => {
  function checkDataKey(prevItem, currItemm, dk) {
    const prevDataItemTemp = _.get(prevItem, dk, null);
    const prevDataItem = prevDataItemTemp !== null ? Number(prevDataItemTemp) : null;
    const currentDataItemTemp = _.get(currItemm, dk, null);
    const currentDataItem = currentDataItemTemp !== null ? Number(currentDataItemTemp) : null;
    return prevDataItem === currentDataItem;
  }

  const { thresholds } = lineProps;
  const orderedThresholds = _.orderBy(thresholds, ['min']);

  // Threshold checks
  let lastThreshold = null;
  for (const threshold of orderedThresholds) {
    if (lastThreshold === null) {
      lastThreshold = threshold;
    } else {
      const hasThreshError = lastThreshold.max !== threshold.min;
      if (hasThreshError) {
        console.log(`Thresholds max and min do not match, [${lastThreshold.min} - ${lastThreshold.max}] and [${threshold.min} - ${threshold.max}]`); // eslint-disable-line
      }
    }
    lastThreshold = threshold;
  }

  const dataSegments = [];
  let currentThreshold = null;
  let start = 0;
  const thresholdKey = lineProps.thresholdKey || dataKey;
  let previousDataItem = null;

  for (var i = 0; i < data.length; i++) {
    const currItem = data[i];
    const dataItem = _.get(currItem, thresholdKey, null) !== null
      ? Number(_.get(currItem, thresholdKey, null)) : null;
    if (currentThreshold === null && i === 0) {
      let newThreshold = findThreshold(thresholds, dataItem);
      if (newThreshold !== null) {
        currentThreshold = newThreshold;
        previousDataItem = dataItem;
      }
    } else {
      let isSame = checkThreshold(currentThreshold, dataItem);
      if (isSame && dataKey !== thresholdKey && i > 0) {
        // if statement to check for scenario where threshold does not change, but data changes, so step must create a new line.
        isSame = checkDataKey(data[i - 1], data[i], dataKey);
      }
      if (!isSame) {
        if (previousDataItem !== null) {
          dataSegments.push({ start, end: i, stroke: thresholdColor(currentThreshold) });
        } else {
          dataSegments.push({ start, end: i, stroke: null });
        }

        // New Segment
        start = i;
        currentThreshold = findThreshold(thresholds, dataItem);
        previousDataItem = dataItem;
      }
    }
  }
  if (previousDataItem !== null) {
    dataSegments.push({
      start,
      end: data.length - 1,
      stroke: thresholdColor(currentThreshold),
    });
  } else {
    dataSegments.push({
      start,
      end: data.length - 1,
      stroke: null,
    });
  }
  return dataSegments;
};

/**
 * Find the data segmentation where the line transitions, choosing logic
 * @param  {Object} lineProps The props from the line React component
 * @param  {Array} data       The data used for points on the chart
 * @param  {String} dataKey   The key specifying which property on data holds the value
 * @return {Array} Data Segments, i.e. the different sections the line is split into
 **/
const findDataSegments = (lineProps, data, dataKey) => {
  if (lineProps.thresholds) {
    return findDataSegmentsByThreshold(lineProps, data, dataKey);
  } else if (lineProps.regionKey) {
    return findDataSegmentsByRegion(lineProps, data, dataKey);
  }
  return findDataSegmentsNormal(lineProps, data, dataKey);
};

/**
 * Draw the main part of multi-line chart
 * @param  {Object} chartProps  The props from the parent chart (e.g. LineChart)
 * @param  {Object} child       The react child component of the LineChart (e.g. Line)
 * @param  {Object} xAxisMap    The configuration of all x-axes
 * @param  {Object} yAxisMap    The configuration of all y-axes
 * @param  {Object} offset      The offset of main part in the svg element
 * @param  {Number} i           The line count
 * @return {ReactComponent}     All the instances of Line
 */
export const renderMultiLine = (chartProps, child, xAxisMap, yAxisMap, offset, i) => {
  const { data, layout } = chartProps; // Parent (LineChart) props
  const { xAxisId, yAxisId, dataKey, type } = child.props;

  const dataSegments = findDataSegments(child.props, data, dataKey);

  return dataSegments.map((segment, l) => {
    const { start, end, stroke, regionValue } = segment;

    const points = getComposedData(chartProps, type, xAxisMap[xAxisId],
        yAxisMap[yAxisId], dataKey, start, end, regionValue);

    return React.cloneElement(child, {
      key: `line-${i}-${l}`,
      ...offset,
      layout,
      points,
      stroke,
    });
  }, this);
};
