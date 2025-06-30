import React from 'react';
import { selectTooltipState } from '../../../src/state/selectors/selectTooltipState';
import { useAppSelector } from '../../../src/state/hooks';
import { ObjectInspector } from './generic/ObjectInspector';

export function TooltipStateInspector() {
  const tooltipState = useAppSelector(selectTooltipState);
  return <ObjectInspector obj={tooltipState} />;
}
