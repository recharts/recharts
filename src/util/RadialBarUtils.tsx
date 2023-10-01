import React, { isValidElement, cloneElement, SVGProps } from 'react';
import _ from 'lodash';
import { RadialBarProps } from '../polar/RadialBar';
import { Sector, Props as SectorProps } from '../shape/Sector';
import { Layer } from '../container/Layer';

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
export function typeGuardSectorProps(option: SVGProps<SVGPathElement>, props: SectorProps) {
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

export function RadialBarSector({ option, ...props }: RadialBarSectorProps) {
  let sectorShape: React.JSX.Element;

  if (isValidElement(option)) {
    sectorShape = cloneElement(option, props);
  } else if (_.isFunction(option)) {
    sectorShape = option(props);
  } else if (_.isPlainObject(option) && !_.isBoolean(option)) {
    const elementProps = typeGuardSectorProps(option, props);
    sectorShape = <Sector {...elementProps} />;
  } else {
    sectorShape = <Sector {...props} />;
  }

  if (props.isActive) {
    return <Layer className="recharts-active-shape">{sectorShape}</Layer>;
  }

  return sectorShape;
}
