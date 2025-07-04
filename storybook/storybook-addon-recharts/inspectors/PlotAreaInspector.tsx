import React from 'react';
import { usePlotArea } from '../../../src';
import { ObjectInspector } from './generic/ObjectInspector';

export function PlotAreaInspector() {
  const plotArea = usePlotArea();
  return <ObjectInspector obj={plotArea} />;
}
