import { createContext } from 'react';
import type { ComponentType } from 'react';
import { Cross } from '../../shape/Cross';
import { Sector } from '../../shape/Sector';
import { DefaultZIndexes } from '../../zIndex/DefaultZIndexes';
import { Coordinate, isPolarCoordinate, LayoutType, PolarCoordinate } from '../types';
import { getRadialCursorPoints } from './getRadialCursorPoints';

export type CursorShape = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ComponentType<any>;
  props: object;
  zIndex: number;
};

/**
 * Picks the cursor shape for the active coordinate, or returns undefined to use the default
 * line or band cursor. Charts that need another shape provide one through CursorShapeContext,
 * so its code is bundled only with those charts.
 */
export type CursorShapeResolver = (
  layout: LayoutType,
  activeCoordinate: Coordinate | PolarCoordinate,
) => CursorShape | undefined;

export const CursorShapeContext = createContext<CursorShapeResolver | undefined>(undefined);

export const crossCursor: CursorShapeResolver = (_layout, activeCoordinate) => ({
  component: Cross,
  props: activeCoordinate,
  zIndex: DefaultZIndexes.cursorLine,
});

export const radialCursor: CursorShapeResolver = (layout, activeCoordinate) => {
  if (layout !== 'radial' || !isPolarCoordinate(activeCoordinate)) {
    return undefined;
  }
  const { cx, cy, radius, startAngle, endAngle } = getRadialCursorPoints(activeCoordinate);
  return {
    component: Sector,
    props: { cx, cy, startAngle, endAngle, innerRadius: radius, outerRadius: radius },
    zIndex: DefaultZIndexes.cursorLine,
  };
};
