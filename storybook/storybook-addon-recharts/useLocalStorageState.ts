import { useState, useEffect, Dispatch, SetStateAction } from 'react';

/**
 * Same as React.useState, but the state is persisted in localStorage.
 * @param key - The key under which the state will be stored in localStorage.
 * @param initialValue - The initial value of the state. If the key already exists in localStorage, this value will be ignored.
 * @return A tuple containing the current state and a function to update it.
 */
export function useLocalStorageState<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
