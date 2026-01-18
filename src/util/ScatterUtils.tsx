import * as React from 'react';
import { ActiveShape, SymbolType } from './types';
import { ScatterPointItem } from '../cartesian/Scatter';
import { Symbols } from '../shape/Symbols';
import { Shape } from './ActiveShapeUtils';
import { DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME } from './Constants';
import { GraphicalItemId } from '../state/graphicalItemsSlice';

export type ScatterShapeProps = ScatterPointItem & {
  index: number;
  [DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]: GraphicalItemId;
};

export function ScatterSymbol({
  option,
  isActive,
  ...props
}: {
  option: ActiveShape<ScatterShapeProps> | SymbolType;
  isActive: boolean;
} & ScatterShapeProps) {
  if (typeof option === 'string') {
    return <Shape option={<Symbols type={option} {...props} />} isActive={isActive} shapeType="symbols" {...props} />;
  }

  return <Shape option={option} isActive={isActive} shapeType="symbols" {...props} />;
}
