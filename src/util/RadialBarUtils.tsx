import * as React from 'react';
import { RadialBarDataItem, RadialBarProps } from '../polar/RadialBar';
import { Sector } from '../shape/Sector';
import { Shape } from './ActiveShapeUtils';

export const defaultRadialBarShape = Sector;

export function parseCornerRadius(cornerRadius: string | number | undefined): number | undefined {
  if (typeof cornerRadius === 'string') {
    return parseInt(cornerRadius, 10);
  }

  return cornerRadius;
}

export interface RadialBarSectorProps extends RadialBarDataItem {
  index: number;
  isActive: boolean;
}

type RadialBarSectorComponentProps = RadialBarSectorProps & {
  option: Exclude<RadialBarProps['shape'], undefined> | RadialBarProps['activeShape'];
};

export function RadialBarSector({ option, ...shapeProps }: RadialBarSectorComponentProps) {
  return (
    <Shape<RadialBarSectorProps, SVGPathElement>
      option={option}
      DefaultShape={defaultRadialBarShape}
      shapeProps={shapeProps}
    />
  );
}
