import { createSelector } from 'reselect';
import type { RechartsRootState } from '../store';
import type { NormalizedStackId } from '../../util/ChartUtils';
import type { BarSettings } from '../types/BarSettings';
import { selectUnfilteredCartesianItems } from './axisSelectors';
import type { CartesianGraphicalItemSettings } from '../graphicalItemsSlice';
import { selectBarRectangles } from './barSelectors';

const pickStackId = (state: RechartsRootState, stackId: NormalizedStackId): NormalizedStackId => stackId;

const pickIsPanorama = (state: RechartsRootState, stackId: NormalizedStackId, isPanorama: boolean): boolean =>
  isPanorama;

export const selectAllBarsInStack: (
  state: RechartsRootState,
  stackId: NormalizedStackId,
  isPanorama: boolean,
) => ReadonlyArray<BarSettings> = createSelector(
  [pickStackId, selectUnfilteredCartesianItems, pickIsPanorama],
  (
    stackId: NormalizedStackId,
    allItems: ReadonlyArray<CartesianGraphicalItemSettings>,
    isPanorama: boolean,
  ): ReadonlyArray<BarSettings> => {
    return allItems
      .filter(i => i.type === 'bar')
      .filter(i => i.stackId === stackId)
      .filter(i => i.isPanorama === isPanorama)
      .filter(i => !i.hide);
  },
);

const selectAllBarIdsInStack = createSelector([selectAllBarsInStack], allBars => {
  return allBars.map(bar => bar.id);
});

export type BarStackItem = {
  x: number;
  y: number;
  width: number;
  height: number;
};

/**
 * Takes two rectangles and returns a new rectangle that encompasses both.
 * It takes the minimum x and y, and the maximum width and height.
 * It handles overlapping rectangles, and rectangles with a gap between them.
 * @param rect1
 * @param rect2
 */
export const expandRectangle = (
  rect1: BarStackItem | undefined,
  rect2: BarStackItem | undefined,
): BarStackItem | undefined => {
  if (!rect1) {
    return rect2;
  }
  if (!rect2) {
    return rect1;
  }
  const x = Math.min(rect1.x, rect2.x);
  const y = Math.min(rect1.y, rect2.y);
  const maxX = Math.max(rect1.x + rect1.width, rect2.x + rect2.width);
  const maxY = Math.max(rect1.y + rect1.height, rect2.y + rect2.height);
  const width = maxX - x;
  const height = maxY - y;
  return { x, y, width, height };
};

const combineStackRects: (
  state: RechartsRootState,
  stackId: NormalizedStackId,
  isPanorama: boolean,
) => ReadonlyArray<BarStackItem | undefined> = (state, stackId, isPanorama) => {
  const allBarIds = selectAllBarIdsInStack(state, stackId, isPanorama);
  const stackRects: Array<BarStackItem | undefined> = [];
  allBarIds.forEach(barId => {
    const rectangles = selectBarRectangles(state, barId, isPanorama, undefined);
    rectangles?.forEach((rect, index) => {
      stackRects[index] = expandRectangle(stackRects[index], rect);
    });
  });
  return stackRects;
};

export const selectStackRects: (
  state: RechartsRootState,
  stackId: NormalizedStackId,
  isPanorama: boolean,
) => ReadonlyArray<BarStackItem | undefined> = createSelector(
  [state => state, pickStackId, pickIsPanorama],
  combineStackRects,
);
