import * as React from 'react';
import { RadialBarDataItem, RadialBarProps } from '../polar/RadialBar';
import { Sector } from '../shape/Sector';
import { Shape } from './ActiveShapeUtils';

export function parseCornerRadius(cornerRadius: string | number | undefined): number | undefined {
  if (typeof cornerRadius === 'string') {
    return parseInt(cornerRadius, 10);
  }

  return cornerRadius;
}

export interface RadialBarSectorProps extends RadialBarDataItem {
  index: number;
  option: RadialBarProps['activeShape'];
  isActive: boolean;
}

function renderSector(props: RadialBarSectorProps) {
  return <Sector {...props} />;
}

export function RadialBarSector(props: RadialBarSectorProps) {
  return <Shape renderDefaultShape={renderSector} {...props} />;
}
