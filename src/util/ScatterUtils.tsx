import React from 'react';
import { ActiveShape, SymbolType } from './types';
import { ScatterPointItem } from '../cartesian/Scatter';
import { Symbols } from '../shape/Symbols';
import { Shape } from './ActiveShapeUtils';

export function ScatterSymbol({
  option,
  isActive,
  ...props
}: {
  option: ActiveShape<ScatterPointItem> | SymbolType;
  isActive: boolean;
} & ScatterPointItem) {
  if (typeof option === 'string') {
    return <Shape option={<Symbols type={option} {...props} />} isActive={isActive} shapeType="symbols" {...props} />;
  }

  return <Shape option={option} isActive={isActive} shapeType="symbols" {...props} />;
}
