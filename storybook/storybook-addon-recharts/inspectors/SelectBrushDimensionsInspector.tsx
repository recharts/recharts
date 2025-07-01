import React from 'react';
import { useAppSelector } from '../../../src/state/hooks';
import { selectBrushDimensions } from '../../../src/state/selectors/brushSelectors';
import { ObjectInspector } from './generic/ObjectInspector';

export function SelectBrushDimensionsInspector() {
  const dimensions = useAppSelector(selectBrushDimensions);
  return <ObjectInspector obj={dimensions} />;
}
