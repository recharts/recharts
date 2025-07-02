import React from 'react';
import { useAppSelector } from '../../../src/state/hooks';
import { selectChartViewBox } from '../../../src/state/selectors/selectChartOffsetInternal';
import { ObjectInspector } from './generic/ObjectInspector';

export function SelectChartViewBoxInspector() {
  const viewBox = useAppSelector(selectChartViewBox);
  return <ObjectInspector obj={viewBox} />;
}
