import { ReactElement, ReactNode, useRef } from 'react';
import { Cell } from '../component/Cell';
import { findAllByType } from './ReactUtils';
import { propsAreEqual } from './propsAreEqual';

/**
 * A single shared reference for "this graphical item has no Cell children",
 * which is by far the most common case.
 */
const noCells: ReadonlyArray<ReactElement> = [];

function cellsAreEqual(a: ReadonlyArray<ReactElement>, b: ReadonlyArray<ReactElement>): boolean {
  if (a === b) {
    return true;
  }
  if (a.length !== b.length) {
    return false;
  }
  return a.every((cell, index) => {
    const other = b[index];
    return other != null && cell.type === other.type && propsAreEqual(cell.props, other.props);
  });
}

/**
 * Reads the `Cell` children of a graphical item and returns a reference that is stable
 * for as long as the cells themselves do not change.
 *
 * `findAllByType` allocates a new array on every call, and JSX allocates new `Cell` elements
 * every time the parent renders. Cells are an argument to the memoized selectors that compute
 * the graphical item shapes, so an unstable reference here is a selector cache miss, which
 * produces a new array of shapes, which changes the animationId, which starts a new animation.
 *
 * That animation interpolates between shapes that hold identical values, so nothing appears to
 * move, but `isAnimating` still flips for the whole animationDuration. Labels are hidden while
 * a graphical item animates, so they blank out on every unrelated re-render of the surrounding
 * component - for example while the pointer moves over the chart. The animation callbacks fire
 * spuriously too, and every shape re-renders at frame rate for as long as it runs.
 *
 * @param children children of the graphical item, some of which may be `Cell` elements
 * @returns the Cell children; the same reference as last render if they are unchanged
 */
export function useCells(children: ReactNode): ReadonlyArray<ReactElement> {
  const previousRef = useRef<ReadonlyArray<ReactElement>>(noCells);
  const nextCells = findAllByType(children, Cell);
  const cells = nextCells.length === 0 ? noCells : nextCells;

  if (cellsAreEqual(previousRef.current, cells)) {
    return previousRef.current;
  }

  previousRef.current = cells;
  return cells;
}
