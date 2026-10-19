import * as React from 'react';
import { Props as FunnelProps, FunnelTrapezoidItem } from '../cartesian/Funnel';
import { Trapezoid } from '../shape/Trapezoid';
import { ShapeAnimationProps } from './types';
import { Shape } from './ActiveShapeUtils';
import { DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME, DATA_ITEM_INDEX_ATTRIBUTE_NAME } from './Constants';
import { GraphicalItemId } from '../state/graphicalItemsSlice';

export const defaultFunnelShape = Trapezoid;

export type FunnelTrapezoidProps = {
  option: Exclude<FunnelProps['shape'], undefined> | FunnelProps['activeShape'];
  isActive: boolean;
} & ShapeAnimationProps &
  FunnelTrapezoidItem & {
    /*
     * Markers the touch middleware reads back off the rendered trapezoid to work out which item
     * the finger is over. Funnel has no axes and never registered itself as a graphical item, so
     * without these the middleware had no way to connect a touch position to a tooltip entry.
     */
    [DATA_ITEM_INDEX_ATTRIBUTE_NAME]: number;
    [DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]: GraphicalItemId;
  };

type FunnelTrapezoidShapeProps = Omit<FunnelTrapezoidProps, 'option'>;

export function FunnelTrapezoid({ option, ...shapeProps }: FunnelTrapezoidProps) {
  return (
    <Shape<FunnelTrapezoidShapeProps, SVGPathElement>
      option={option}
      DefaultShape={defaultFunnelShape}
      shapeProps={shapeProps}
    />
  );
}
