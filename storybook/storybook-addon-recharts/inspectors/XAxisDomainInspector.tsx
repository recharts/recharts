import React from 'react';
import { useXAxisDomain } from '../../../src/hooks';
import { ArrayInspector } from './generic/ArrayInspector';

export function XAxisDomainInspector() {
  const xAxisDomain = useXAxisDomain();
  return <ArrayInspector arr={xAxisDomain} />;
}
