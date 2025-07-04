import { useState, useEffect, Dispatch, SetStateAction } from 'react';

/**
 * Same as React.useState, but the state is persisted in localStorage.
 * @param key - The key under which the state will be stored in localStorage.
 * @param initialValue - The initial value of the state. If the key already exists in localStorage, this value will be ignored.
 * @return A tuple containing the current state and a function to update it.
 */
export function useLocalStorageState(
  key: string,
  initialValue: ReadonlyArray<string>,
): [ReadonlyArray<string>, Dispatch<SetStateAction<ReadonlyArray<string>>>] {
  const [state, setState] = useState<ReadonlyArray<string>>(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue === null) {
      return initialValue;
    }
    const parsedValue: ReadonlyArray<unknown> | unknown = JSON.parse(storedValue);
    if (!Array.isArray(parsedValue)) {
      return initialValue;
    }
    const arrayOfStrings = parsedValue.filter((item): item is string => typeof item === 'string');
    return initialValue.concat(arrayOfStrings);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
