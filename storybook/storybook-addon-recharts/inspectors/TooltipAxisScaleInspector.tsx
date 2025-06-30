import React from 'react';
import { useAppSelector } from '../../../src/state/hooks';
import { ScaleInspector } from './generic/ScaleInspector';
import { selectTooltipAxisRealScaleType, selectTooltipAxisScale } from '../../../src/state/selectors/tooltipSelectors';

export function TooltipAxisScaleInspector() {
  const tooltipScale = useAppSelector(selectTooltipAxisScale);
  const tooltipRealScaleType = useAppSelector(selectTooltipAxisRealScaleType);

  return <ScaleInspector scale={tooltipScale} realScaleType={tooltipRealScaleType} />;
}
