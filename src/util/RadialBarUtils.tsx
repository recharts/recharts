import * as React from 'react';
import { RadialBarProps } from '../polar/RadialBar';
import { Props as SectorProps } from '../shape/Sector';
import { Shape } from './ActiveShapeUtils';

export function parseCornerRadius(cornerRadius: string | number | undefined): number | undefined {
  if (typeof cornerRadius === 'string') {
    return parseInt(cornerRadius, 10);
  }

  return cornerRadius;
}

export interface RadialBarSectorProps extends SectorProps {
  index?: number;
  option: RadialBarProps['activeShape'];
  isActive?: boolean;
}

export function RadialBarSector(props: RadialBarSectorProps) {
  return <Shape shapeType="sector" {...props} />;
}
