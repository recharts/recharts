import React from 'react';
import { ObjectInspector } from './generic/ObjectInspector';
import { useOffset } from '../../../src';

export function OffsetInspector() {
  const offset = useOffset();
  return <ObjectInspector obj={offset} />;
}
