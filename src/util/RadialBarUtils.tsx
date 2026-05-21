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
  option: Exclude<RadialBarProps['shape'], undefined> | RadialBarProps['activeShape'];
  isActive: boolean;
}

export function RadialBarSector(props: RadialBarSectorProps) {
  return <Shape renderDefaultShape={defaultRadialBarShape} {...props} />;
}
