/**
 * @fileOverview Multiline Chart Utils
 */
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
  for (var i = startIndex; i <= endIndex; i++) {
    const dataPoint = chartProps.data[i];
    const yDataPoint = i === endIndex &&
      (type === 'stepBefore' || type === 'stepAfter') ? chartProps.data[i - 1] : chartProps.data[i];
    const yPoint = regionValue !== null ? regionValue : yDataPoint[dataKey];

    data.push({
      x: layout === 'horizontal' ?
        xTicks[i].coordinate + bandSize / 2 :
        xAxis.scale(dataPoint[dataKey]),
      y: layout === 'horizontal' ?
        yAxis.scale(yPoint) :
        yTicks[i].coordinate + bandSize / 2,
      value: dataPoint[dataKey],
    });
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
const findStroke = (lineProps, region, segmentCount) => {
  if (lineProps.strokeRegions) {
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
  if (lineProps.strokeRegions && lineProps.strokeRegions[region].value !== null) {
    return lineProps.strokeRegions[region].value;
  }
  return dataItem;
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
  let start = 0;

  for (var i = 0; i < data.length; i++) {
    const currItem = data[i];
    const dataItem = currItem[dataKey];
    const dataSegment = currItem[regionKey];
    if (currentRegion === null) {
      currentRegion = dataSegment;
    } else if (currentRegion !== dataSegment) {
      const stroke = findStroke(lineProps, currentRegion, dataSegments.length);
      const regionValue = findRegionValue(lineProps, currentRegion, dataItem);
      dataSegments.push({ start, end: i, regionValue, stroke });
      currentRegion = dataSegment;
      start = i;
    }
  }
  dataSegments.push({
    start,
    end: data.length - 1,
    regionValue: findRegionValue(lineProps, currentRegion, data[data.length - 1][dataKey]),
    stroke: findStroke(lineProps, currentRegion, dataSegments.length),
  });
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
  function checkThreshold(thr, val) {
    if (thr === null || val === null) {
      return thr === null && val === null;
    }

    if (!thr.min) {
      return val < thr.max;
    } else if (!thr.max) {
      return val >= thr.min;
    }
    return val >= thr.min && val < thr.max;
  }

  function checkDataKey(prevItem, currItemm, dk) {
    const prevDataItem = prevItem[dk] !== undefined ? Number(prevItem[dk]) : null;
    const currentDataItem = currItemm[dk] !== undefined ? Number(currItemm[dk]) : null;
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

  for (var i = 0; i < data.length; i++) {
    const currItem = data[i];
    const dataItem = currItem[thresholdKey] !== undefined ? Number(currItem[thresholdKey]) : null;
    if (currentThreshold === null) {
      currentThreshold = dataItem === null ? null :
        _.find(thresholds, function (thr) { // eslint-disable-line prefer-arrow-callback,func-names
          return checkThreshold(thr, dataItem);
        });
    } else {
      let isSame = checkThreshold(currentThreshold, dataItem);
      if (isSame && dataKey !== thresholdKey && i > 0) {
        // if statement to check for scenario where threshold does not change, but data changes, so step must create a new line. // eslint-disable-line max-len
        isSame = checkDataKey(data[i - 1], data[i], dataKey);
      }
      if (!isSame) {
        const color = currentThreshold && currentThreshold.color ?
          currentThreshold.color : defaultColor;
        dataSegments.push({ start, end: i, stroke: color });

        // New Segment
        start = i;
        currentThreshold = dataItem === null ? null :
          _.find(thresholds, function (thr) { // eslint-disable-line prefer-arrow-callback,func-names,max-len
            return checkThreshold(thr, dataItem);
          });
      }
    }
  }
  dataSegments.push({
    start,
    end: data.length - 1,
    stroke: currentThreshold && currentThreshold.color ? currentThreshold.color : defaultColor,
  });
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
  return [{ start: 0, end: data.length - 1, stroke: lineProps.stroke }];
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
