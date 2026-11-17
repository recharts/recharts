import type { LabelPosition } from '../component/Label';

const outsidePolarPositions: ReadonlyArray<LabelPosition> = ['outside', 'end', 'center', 'centerTop', 'centerBottom'];

/**
 * Returns true if a label at this position in a polar chart is drawn away from its sector.
 *
 * - `outside` is past the outer radius, and `end` is past the end angle of the sector.
 * - `center`, `centerTop` and `centerBottom` are at the center of the chart, not of the sector.
 *
 * Every other position, including no position, is drawn over the sector.
 *
 * @param position the label position
 * @returns true if the label does not sit on top of its sector
 */
export function isOutsidePolarPosition(position: LabelPosition | undefined): boolean {
  return outsidePolarPositions.some(p => p === position);
}
