import React, { SVGProps } from 'react';
import { RadialBarProps } from '../polar/RadialBar';
import { Props as SectorProps } from '../shape/Sector';
import { Shape } from './ActiveShapeUtils';

export function parseCornerRadius(cornerRadius: string | number): number {
  if (typeof cornerRadius === 'string') {
    return parseInt(cornerRadius, 10);
  }

  return cornerRadius;
}

// Sector props is expecting cx, cy as numbers.
// When props are being spread in from a user defined component in RadialBar,
// the prop types of an SVGElement have these typed as string | number.
// This function will return the passed in props along with cx, cy as numbers.
export function typeGuardSectorProps(option: SVGProps<SVGPathElement>, props: SectorProps): SectorProps {
  const cxValue = `${props.cx || option.cx}`;
  const cx = parseInt(cxValue, 10);
  const cyValue = `${props.cy || option.cy}`;
  const cy = parseInt(cyValue, 10);
  return {
    ...props,
    ...option,
    cx,
    cy,
  };
}

export interface RadialBarSectorProps extends SectorProps {
  index?: number;
  option: RadialBarProps['activeShape'];
  isActive: boolean;
}

export function RadialBarSector(props: RadialBarSectorProps) {
  return <Shape shapeType="sector" propTransformer={typeGuardSectorProps} {...props} />;
}
