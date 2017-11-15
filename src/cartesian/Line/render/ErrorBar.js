import React from 'react';
import { getValueByDataKey } from '../../../util/ChartUtils';
import { findChildByType } from '../../../util/ReactUtils';
import ErrorBar from './../../ErrorBar';

const renderErrorBar = (context) => {
  if (context.props.isAnimationActive && !context.state.isAnimationFinished) { return null; }

  const { points, xAxis, yAxis, layout, children } = context.props;
  const errorBarItem = findChildByType(children, ErrorBar);

  if (!errorBarItem) { return null; }

  function dataPointFormatter(dataPoint, dataKey) {
    return {
      x: dataPoint.x,
      y: dataPoint.y,
      value: dataPoint.value,
      errorVal: getValueByDataKey(dataPoint.payload, dataKey),
    };
  }

  return React.cloneElement(errorBarItem, {
    data: points,
    xAxis,
    yAxis,
    layout,
    dataPointFormatter,
  });
};

export default renderErrorBar;
