/**
 * Selector recalculation debugger
 *
 * This will create a utility function that can be used to log when a selector is recalculated.
 * It also logs the previous and current values of the selector, and names of the dependencies that caused the recalculation.
 *
 * Example usage:
 * const debug = selectorRecalculationDebugger('mySelector');
 * const selector = createSelector(
 *   [state => state.a, state => state.b],
 *   (a, b) => {
 *     debug({a, b});
 *     return a + b
 *   }
 * );
 *
 * @param selectorName The name of the selector for logging purposes
 * @returns A new function that logs what caused the selector to recalculate
 */
export const selectorRecalculationDebugger = (selectorName: string) => {
  let previousDependencies: Record<string, unknown> | null;
  return (currentDependencies: Record<string, unknown>) => {
    const dependencyNames = Object.keys(currentDependencies);
    if (previousDependencies == null) {
      console.log('[selector-recalculation-debugger]', selectorName, 'initial render', currentDependencies);
    } else {
      const changedDeps: Record<string, { before: unknown; after: unknown }> = dependencyNames.reduce<
        Record<string, { before: unknown; after: unknown }>
      >((accum, dependency) => {
        if (currentDependencies[dependency] !== previousDependencies?.[dependency]) {
          return {
            ...accum,
            [dependency]: {
              before: previousDependencies?.[dependency],
              after: currentDependencies[dependency],
            },
          };
        }

        return accum;
      }, {});

      const changedKeys = Object.keys(changedDeps);

      if (changedKeys.length) {
        const prev = Object.fromEntries(
          changedKeys.map(key => {
            if (key in changedDeps) {
              return [key, changedDeps[key].before];
            }
            return [key, undefined];
          }),
        );
        const curr = Object.fromEntries(changedKeys.map(key => [key, changedDeps[key].after]));
        console.log(
          '[selector-recalculation-debugger]',
          selectorName,
          'recalculated due to changes in',
          changedKeys.join(', '),
          {
            prev,
            curr,
          },
        );
      }
    }

    previousDependencies = currentDependencies;
  };
};
