import React from 'react';
import { useOffsetInternal } from '../../../src/context/chartLayoutContext';
import { ObjectInspector } from './generic/ObjectInspector';

export function OffsetInspector() {
  const offset = useOffsetInternal();
  return <ObjectInspector obj={offset} />;
}
