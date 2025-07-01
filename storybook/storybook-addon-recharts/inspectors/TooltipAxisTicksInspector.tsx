import React from 'react';
import { useAppSelector } from '../../../src/state/hooks';
import { selectTooltipAxisTicks } from '../../../src/state/selectors/tooltipSelectors';
import { ArrayInspector } from './generic/ArrayInspector';

export function TooltipAxisTicksInspector() {
  const tooltipAxisTicks = useAppSelector(selectTooltipAxisTicks);
  return <ArrayInspector arr={tooltipAxisTicks} />;
}
