import { createContext, useContext, useSyncExternalStore } from 'react';

import { defineColorModeStore } from './defineColorModeStore';

const ColorModeContext = createContext<ReturnType<typeof defineColorModeStore> | undefined>(undefined);

export function ColorModeProvider({
  children,
  store,
}: {
  children: React.ReactNode;
  store: ReturnType<typeof defineColorModeStore>;
}) {
  return <ColorModeContext.Provider value={store}>{children}</ColorModeContext.Provider>;
}

/**
 * Hook to access the color mode store.
 *
 * Used by the color-mode module internally, if you need to access the color mode state
 * in your own components, consider using the ColorModeWatcher component instead.
 */
export function useColorModeStore() {
  const store = useContext(ColorModeContext);
  if (!store) {
    throw new Error('useColorModeStore must be used within a ColorModeProvider');
  }
  return store;
}

export function useColorModeState() {
  const store = useColorModeStore();
  return useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);
}
