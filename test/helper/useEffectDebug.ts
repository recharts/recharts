import { useEffect, useRef, EffectCallback, DependencyList } from 'react';

/*
 * https://stackoverflow.com/a/59843241
 */

const usePrevious = <T>(value: T | null): T | null => {
  const ref = useRef<T>(null);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

type FirstDependencies = Record<string, unknown>;

type ChangedDependencies = Record<string, { before: unknown; after: unknown }>;

export const useEffectDebug = (
  debuggerName: string,
  effectHook: EffectCallback,
  dependencies: DependencyList,
  dependencyNames: string[] = [],
): void => {
  const previousDeps = usePrevious(dependencies);

  if (previousDeps === null) {
    const firstDependencies: FirstDependencies = dependencies.reduce<FirstDependencies>(
      (accum: FirstDependencies, dependency, index): FirstDependencies => {
        const keyName = dependencyNames[index] || String(index);
        return {
          ...accum,
          [keyName]: dependency,
        };
      },
      {},
    );
    console.log('[use-effect-debugger]', debuggerName, 'initial render', firstDependencies);
  } else {
    const changedDeps: ChangedDependencies = dependencies.reduce<ChangedDependencies>(
      (accum: ChangedDependencies, dependency, index): ChangedDependencies => {
        if (dependency !== previousDeps[index]) {
          const keyName = dependencyNames[index] || String(index);
          return {
            ...accum,
            [keyName]: {
              before: previousDeps[index],
              after: dependency,
            },
          };
        }

        return accum;
      },
      {},
    );

    const changedKeys = Object.keys(changedDeps);

    if (changedKeys.length) {
      const prev = Object.fromEntries(
        changedKeys.map(key => {
          if (key in changedKeys) {
            return [key, changedDeps[key].before];
          }
          return [key, undefined];
        }),
      );
      const curr = Object.fromEntries(changedKeys.map(key => [key, changedDeps[key].after]));
      // eslint-disable-next-line no-console
      console.log('[use-effect-debugger]', debuggerName, changedKeys.join(', '), {
        prev,
        curr,
      });
    }
  }

  useEffect(effectHook, dependencies);
};
