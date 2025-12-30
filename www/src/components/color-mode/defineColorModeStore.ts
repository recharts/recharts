type ColorMode = 'light' | 'dark';
type ColorModeOrigin = 'system' | 'storage';
export interface ColorModeState {
  mode: ColorMode;
  origin: ColorModeOrigin;
}
type ColorModeStateListener = (state: ColorModeState) => void;

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
function getColorModeState(): ColorModeState {
  const storedMode = getStoredColorMode();
  return {
    origin: storedMode != null ? 'storage' : 'system',
    mode: storedMode ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  } as const;
}
function updateColorModeInDOM() {
  /**
   * We avoid polluting the DOM when the feature is disabled.
   */
  if (import.meta.env.VITE_IS_DARKMODE_ENABLED !== 'true') {
    return;
  }
  document.documentElement.setAttribute('data-mode', getColorModeState().mode);
}

export function defineColorModeStore() {
  const listeners = new Set<ColorModeStateListener>();
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  let state = getColorModeState();

  updateColorModeInDOM();

  const emitStateChange = () => {
    state = getColorModeState();
    updateColorModeInDOM();
    listeners.forEach(listener => {
      listener(state);
    });
  };
  const handleStoredColorModeChange = (e: StorageEvent) => {
    if (e.key !== STORAGE_KEY) {
      return;
    }
    emitStateChange();
  };
  const handleSystemColorSchemeChange = () => {
    clearStoredColorMode();
    emitStateChange();
  };

  mql.addEventListener('change', handleSystemColorSchemeChange);
  window.addEventListener('storage', handleStoredColorModeChange);

  return {
    dispose() {
      mql.removeEventListener('change', handleSystemColorSchemeChange);
      window.removeEventListener('storage', handleStoredColorModeChange);
    },
    getSnapshot() {
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
