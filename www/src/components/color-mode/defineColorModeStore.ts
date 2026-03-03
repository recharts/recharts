export type ColorMode = 'light' | 'dark';
type ColorModeOrigin = 'system' | 'storage';
export interface ColorModeState {
  mode: ColorMode;
  origin: ColorModeOrigin;
}
type ColorModeStateListener = (state: ColorModeState) => void;

/**
 * @note this is duplicated in the index.html file, to avoid FOUC on initial load. Please keep in sync.
 */
const STORAGE_KEY = 'recharts-color-mode';

function getStoredColorMode(): ColorMode | undefined {
  try {
    const rawStoredColorMode = localStorage.getItem(STORAGE_KEY);
    if (rawStoredColorMode !== 'light' && rawStoredColorMode !== 'dark') {
      throw new Error('unknown stored color mode');
    }
    return rawStoredColorMode;
  } catch {
    return undefined;
  }
}
function setStoredColorMode(mode: ColorMode) {
  try {
    localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    // eslint-disable-next-line no-console
    console.warn('Failed to set color mode in localStorage, skipping.');
  }
}
function clearStoredColorMode() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // eslint-disable-next-line no-console
    console.warn('Failed to clear color mode in localStorage, skipping.');
  }
}
const defaultColorModeState: ColorModeState = {
  mode: 'light',
  origin: 'system',
};
function getColorModeState(): ColorModeState {
  if (typeof window === 'undefined') {
    return defaultColorModeState;
  }
  const storedMode = getStoredColorMode();
  return {
    origin: storedMode != null ? 'storage' : 'system',
    mode: storedMode ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  } as const;
}
/**
 * @note this is duplicated in the index.html file, to avoid FOUC on initial load. Please keep in sync.
 */
function updateColorModeInDOM() {
  if (typeof document === 'undefined') {
    return;
  }
  document.documentElement.setAttribute('data-mode', getColorModeState().mode);
}
function subscribeToStorageAndSystemChanges(onChange: () => void) {
  if (typeof window === 'undefined') {
    return () => {};
  }
  const handleStoredColorModeChange = (e: StorageEvent) => {
    if (e.key !== STORAGE_KEY) {
      return;
    }
    onChange();
  };
  const handleSystemColorSchemeChange = () => {
    clearStoredColorMode();
    onChange();
  };
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  mql.addEventListener('change', handleSystemColorSchemeChange);
  window.addEventListener('storage', handleStoredColorModeChange);

  return () => {
    mql.removeEventListener('change', handleSystemColorSchemeChange);
    window.removeEventListener('storage', handleStoredColorModeChange);
  };
}

export function defineColorModeStore() {
  const listeners = new Set<ColorModeStateListener>();
  let state = getColorModeState();

  const emitStateChange = () => {
    state = getColorModeState();
    updateColorModeInDOM();
    listeners.forEach(listener => {
      listener(state);
    });
  };

  updateColorModeInDOM();

  return {
    dispose: subscribeToStorageAndSystemChanges(emitStateChange),
    getSnapshot() {
      return state;
    },
    getServerSnapshot() {
      return state;
    },
    subscribe(listener: ColorModeStateListener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    dispatch(action: ColorMode | Extract<ColorModeOrigin, 'system'>) {
      if (action === 'system') {
        clearStoredColorMode();
      } else {
        setStoredColorMode(action);
      }
      emitStateChange();
    },
  } as const;
}
