import * as React from 'react';
import { ActiveShape, SymbolType } from './types';
import { ScatterPointItem } from '../cartesian/Scatter';
import { InnerSymbolsProp, Symbols } from '../shape/Symbols';
import { Shape } from './ActiveShapeUtils';
import { DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME } from './Constants';
import { GraphicalItemId } from '../state/graphicalItemsSlice';

export type ScatterShapeProps = ScatterPointItem & {
  index: number;
  [DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]: GraphicalItemId;
};

function renderSymbols(props: ScatterShapeProps) {
  return <Symbols {...props} />;
}

export function ScatterSymbol({
  option,
  isActive,
  ...props
}: {
  option: ActiveShape<ScatterShapeProps & InnerSymbolsProp, SVGPathElement> | SymbolType;
  isActive: boolean;
} & ScatterShapeProps) {
  if (typeof option === 'string') {
    return (
      <Shape
        option={<Symbols type={option} {...props} />}
        isActive={isActive}
        renderDefaultShape={renderSymbols}
        {...props}
      />
    );
  }

  return <Shape option={option} isActive={isActive} renderDefaultShape={renderSymbols} {...props} />;
}
