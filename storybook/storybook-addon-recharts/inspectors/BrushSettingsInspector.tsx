import React from 'react';
import { useAppSelector } from '../../../src/state/hooks';
import { selectBrushSettings } from '../../../src/state/selectors/brushSelectors';
import { ObjectInspector } from './generic/ObjectInspector';

export function BrushSettingsInspector() {
  const brushSettings = useAppSelector(selectBrushSettings);
  return <ObjectInspector obj={brushSettings} />;
}
