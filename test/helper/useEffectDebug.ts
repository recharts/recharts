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

export const useEffectDebug = (
  debuggerName: string,
  effectHook: EffectCallback,
  dependencies: DependencyList,
  dependencyNames: string[] = [],
): void => {
  const previousDeps = usePrevious(dependencies);

  if (previousDeps === null) {
    const changedDeps = dependencies.reduce(
      (accum, dependency, index) => {
        const keyName = dependencyNames[index] || index;
        return {
          ...accum,
          [keyName]: dependency,
        };
      },
      {} as Record<string, any>,
    );
    console.log('[use-effect-debugger]', debuggerName, 'initial render', changedDeps);
  } else {
    const changedDeps = dependencies.reduce(
      (accum, dependency, index) => {
        if (dependency !== previousDeps[index]) {
          const keyName = dependencyNames[index] || index;
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
      {} as Record<string, { before: any; after: any }>,
    );

    const changedKeys = Object.keys(changedDeps);

    if (changedKeys.length) {
      const prev = Object.fromEntries(changedKeys.map(key => [key, changedDeps[key].before]));
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
