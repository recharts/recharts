import * as React from 'react';
import { ActiveShape, ShapeAnimationProps, SymbolType } from './types';
import { ScatterPointItem } from '../cartesian/Scatter';
import { InnerSymbolsProp, Symbols } from '../shape/Symbols';
import { Shape } from './ActiveShapeUtils';
import { DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME, DATA_ITEM_INDEX_ATTRIBUTE_NAME } from './Constants';
import { GraphicalItemId } from '../state/graphicalItemsSlice';

export type ScatterShapeProps = ScatterPointItem &
  ShapeAnimationProps & {
    isActive: boolean;
    index: number;
    /*
     * Markers the touch middleware reads back off the rendered symbol to work out which item
     * the finger is over. Both are needed: the middleware only recognises an item it can resolve
     * to an index *and* to the graphical item the index belongs to.
     */
    [DATA_ITEM_INDEX_ATTRIBUTE_NAME]: number;
    [DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]: GraphicalItemId;
  };

type ScatterSymbolShapeProps = ScatterShapeProps & InnerSymbolsProp;

function renderSymbols(props: ScatterSymbolShapeProps) {
  return <Symbols {...props} />;
}

export function ScatterSymbol({
  option,
  ...props
}: {
  option: ActiveShape<ScatterShapeProps & InnerSymbolsProp, SVGPathElement> | SymbolType;
} & ScatterShapeProps) {
  if (typeof option === 'string') {
    return (
      <Shape<ScatterSymbolShapeProps, SVGPathElement>
        option={<Symbols type={option} {...props} />}
        DefaultShape={renderSymbols}
        shapeProps={props}
      />
    );
  }

  return (
    <Shape<ScatterSymbolShapeProps, SVGPathElement> option={option} DefaultShape={renderSymbols} shapeProps={props} />
  );
}
