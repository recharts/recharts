import React from 'react';
import { useViewBox } from '../../../src/context/chartLayoutContext';
import { ObjectInspector } from './generic/ObjectInspector';

export function UseViewBoxInspector() {
  const viewBox = useViewBox();
  return <ObjectInspector obj={viewBox} />;
}
