import { CartesianViewBoxRequired, TrapezoidViewBox } from '../util/types';

export function cartesianViewBoxToTrapezoid(box: undefined): undefined;
export function cartesianViewBoxToTrapezoid(box: CartesianViewBoxRequired | TrapezoidViewBox): TrapezoidViewBox;
export function cartesianViewBoxToTrapezoid(
  box: CartesianViewBoxRequired | TrapezoidViewBox | undefined,
): TrapezoidViewBox | undefined {
  if (!box) {
    return undefined;
  }
  return {
    x: box.x,
    y: box.y,
    upperWidth: 'upperWidth' in box ? box.upperWidth : box.width,
    lowerWidth: 'lowerWidth' in box ? box.lowerWidth : box.width,
    width: box.width,
    height: box.height,
  };
}
