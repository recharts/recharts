import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import {
  ColorModeAction,
  ColorModeState,
  STORAGE_KEY,
  defaultColorModeState,
  dispatchColorModeAction,
  getColorModeState,
  updateColorModeInDOM,
} from './defineColorModeStore';

interface ColorModeStore {
  state: ColorModeState;
  dispatch: (action: ColorModeAction) => void;
}

const ColorModeContext = createContext<ColorModeStore | undefined>(undefined);

export function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ColorModeState>(defaultColorModeState);

  useEffect(() => {
    const updateState = (nextState: ColorModeState) => {
      setState(nextState);
      updateColorModeInDOM(nextState.mode);
    };

    updateState(getColorModeState());

    if (typeof window === 'undefined') {
      return () => undefined;
    }

    const handleStoredColorModeChange = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        updateState(getColorModeState());
      }
    };
    const handleSystemColorSchemeChange = () => {
      updateState(getColorModeState());
    };
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    mediaQuery.addEventListener('change', handleSystemColorSchemeChange);
    window.addEventListener('storage', handleStoredColorModeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemColorSchemeChange);
      window.removeEventListener('storage', handleStoredColorModeChange);
    };
  }, []);

  const dispatch = useCallback((action: ColorModeAction) => {
    const nextState = dispatchColorModeAction(action);
    setState(nextState);
    updateColorModeInDOM(nextState.mode);
  }, []);

  const value = useMemo(() => ({ state, dispatch }), [dispatch, state]);

  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
}

/**
 * Hook to access the color mode store.
 *
 * Used by the color-mode module internally, if you need to access the color mode state
 * in your own components, consider using the ColorModeWatcher component instead.
 */
export function useColorModeStore() {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error('useColorModeStore must be used within a ColorModeProvider');
  }
  return context;
}
