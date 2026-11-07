import { useRef } from 'react';

/**
 * Returns the value from the previous render for as long as `isEqual` says the new one holds the same values.
 *
 * Settings objects that are rebuilt from props on every render would otherwise be dispatched to the store again
 * after any re-render of the parent, which recomputes the shapes and restarts their animation.
 *
 * @param next the value computed in this render
 * @param isEqual compares the previous and the next value
 * @returns the previous value if it is equal to the next one, otherwise the next value
 */
export function useStableValue<T>(next: T, isEqual: (previous: NonNullable<T>, next: NonNullable<T>) => boolean): T {
  const previousRef = useRef<T>(next);
  const previous = previousRef.current;
  if (previous != null && next != null && isEqual(previous, next)) {
    return previous;
  }
  previousRef.current = next;
  return next;
}
