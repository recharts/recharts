import React from 'react';
import { useOffset } from '../../../src/context/chartLayoutContext';
import { ObjectInspector } from './generic/ObjectInspector';

export function OffsetInspector() {
  const offset = useOffset();
  return <ObjectInspector obj={offset} />;
}
