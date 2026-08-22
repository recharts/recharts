export type ColorMode = 'light' | 'dark';
type ColorModeOrigin = 'system' | 'storage';
export interface ColorModeState {
  mode: ColorMode;
  origin: ColorModeOrigin;
}
export type ColorModeAction = ColorMode | 'system';

/**
 * @note this is duplicated in the index.html file, to avoid FOUC on initial load. Please keep in sync.
 */
export const STORAGE_KEY = 'recharts-color-mode';

function getStoredColorMode(): ColorMode | undefined {
  try {
    const rawStoredColorMode = localStorage.getItem(STORAGE_KEY);
    return rawStoredColorMode === 'light' || rawStoredColorMode === 'dark' ? rawStoredColorMode : undefined;
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
export const defaultColorModeState: ColorModeState = {
  mode: 'light',
  origin: 'system',
};
export function getColorModeState(): ColorModeState {
  if (typeof window === 'undefined') {
    return defaultColorModeState;
  }
  const storedMode = getStoredColorMode();
  return {
    origin: storedMode != null ? 'storage' : 'system',
    mode: storedMode ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  } as const;
}
export function updateColorModeInDOM(mode: ColorMode) {
  if (typeof document === 'undefined') {
    return;
  }
  document.documentElement.setAttribute('data-mode', mode);
}

export function dispatchColorModeAction(action: ColorModeAction): ColorModeState {
  if (action === 'system') {
    clearStoredColorMode();
  } else {
    setStoredColorMode(action);
  }
  return getColorModeState();
}
