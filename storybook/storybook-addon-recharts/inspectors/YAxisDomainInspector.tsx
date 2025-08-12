import React from 'react';
import { useYAxisDomain } from '../../../src/hooks';
import { ArrayInspector } from './generic/ArrayInspector';

export function YAxisDomainInspector() {
  const yAxisDomain = useYAxisDomain();
  return <ArrayInspector arr={yAxisDomain} />;
}
