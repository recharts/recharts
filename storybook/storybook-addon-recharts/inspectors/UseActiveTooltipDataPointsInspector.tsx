import React from 'react';
import { useActiveTooltipDataPoints } from '../../../src/hooks';
import { ArrayInspector } from './generic/ArrayInspector';

export function UseActiveTooltipDataPointsInspector() {
  const dataPoints = useActiveTooltipDataPoints();
  return <ArrayInspector arr={dataPoints} expandByDefault />;
}
