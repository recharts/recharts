import React from 'react';
import { selectAxisScale, selectRealScaleType } from '../../../src/state/selectors/axisSelectors';
import { ScaleInspector } from './generic/ScaleInspector';
import { useAppSelector } from '../../../src/state/hooks';

export function YAxisScaleInspector() {
  const yAxisScale = useAppSelector(state => selectAxisScale(state, 'yAxis', 0, false));
  const yAxisRealScaleType = useAppSelector(state => selectRealScaleType(state, 'yAxis', 0));
  return <ScaleInspector scale={yAxisScale} realScaleType={yAxisRealScaleType} />;
}
