import React from 'react';
import { useAppSelector } from '../../../src/state/hooks';
import { selectAxisScale, selectRealScaleType } from '../../../src/state/selectors/axisSelectors';
import { ScaleInspector } from './generic/ScaleInspector';

export function XAxisScaleInspector() {
  const xAxisScale = useAppSelector(state => selectAxisScale(state, 'xAxis', 0, false));
  const xAxisRealScaleType = useAppSelector(state => selectRealScaleType(state, 'xAxis', 0));
  return <ScaleInspector scale={xAxisScale} realScaleType={xAxisRealScaleType} />;
}
