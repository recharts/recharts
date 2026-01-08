import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { act, cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';

import {
  ColorModeProvider,
  ColorModePicker,
  ColorModeWatcher,
  defineColorModeStore,
} from '../src/components/color-mode';

const STORAGE_KEY = 'recharts-color-mode';

beforeEach(() => {
  vi.stubEnv('VITE_IS_DARKMODE_ENABLED', 'true');
});

afterEach(() => {
  localStorage.removeItem(STORAGE_KEY);
  cleanup();
  vi.restoreAllMocks();
});

function setupEnvironment(props: { preferredColorMode: 'light' | 'dark'; storedColorMode?: 'light' | 'dark' }) {
  if (props.storedColorMode) {
    localStorage.setItem(STORAGE_KEY, props.storedColorMode);
  }
  let { preferredColorMode } = props;
  const listeners = new Set<(e: MediaQueryListEvent) => void>();
  vi.stubGlobal('matchMedia', (query: string) => {
    return {
      matches: query.includes(preferredColorMode),
      addEventListener(_type: string, listener: (e: MediaQueryListEvent) => void) {
        listeners.add(listener);
      },
      removeEventListener(_type: string, listener: (e: MediaQueryListEvent) => void) {
        listeners.delete(listener);
      },
      dispatchEvent() {
        preferredColorMode = preferredColorMode === 'light' ? 'dark' : 'light';
        listeners.forEach(listener => {
          listener({ matches: query.includes(preferredColorMode) } as MediaQueryListEvent);
        });
      },
    };
  });
}

test('origin: system; mode: light', () => {
  setupEnvironment({ preferredColorMode: 'light' });
  const store = defineColorModeStore();

  expect(document.documentElement).toHaveAttribute('data-mode', 'light');
  expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  expect(store.getSnapshot()).toEqual({
    origin: 'system',
    mode: 'light',
  });

  store.dispatch('dark');

  expect(document.documentElement).toHaveAttribute('data-mode', 'dark');
  expect(localStorage.getItem(STORAGE_KEY)).toBe('dark');
  expect(store.getSnapshot()).toEqual({
    origin: 'storage',
    mode: 'dark',
  });

  store.dispose();
});

test('origin: system; mode: dark', () => {
  setupEnvironment({ preferredColorMode: 'dark' });
  const store = defineColorModeStore();

  expect(document.documentElement).toHaveAttribute('data-mode', 'dark');
  expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  expect(store.getSnapshot()).toEqual({
    origin: 'system',
    mode: 'dark',
  });

  store.dispatch('light');

  expect(document.documentElement).toHaveAttribute('data-mode', 'light');
  expect(localStorage.getItem(STORAGE_KEY)).toBe('light');
  expect(store.getSnapshot()).toEqual({
    origin: 'storage',
    mode: 'light',
  });

  store.dispose();
});

test('origin: storage; mode: light', () => {
  setupEnvironment({ preferredColorMode: 'dark', storedColorMode: 'light' });
  const store = defineColorModeStore();

  expect(document.documentElement).toHaveAttribute('data-mode', 'light');
  expect(localStorage.getItem(STORAGE_KEY)).toBe('light');
  expect(store.getSnapshot()).toEqual({
    origin: 'storage',
    mode: 'light',
  });

  store.dispatch('system');

  expect(document.documentElement).toHaveAttribute('data-mode', 'dark');
  expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  expect(store.getSnapshot()).toEqual({
    origin: 'system',
    mode: 'dark',
  });

  store.dispose();
});

test('origin: storage; mode: dark', () => {
  setupEnvironment({ preferredColorMode: 'light', storedColorMode: 'dark' });
  const store = defineColorModeStore();

  expect(document.documentElement).toHaveAttribute('data-mode', 'dark');
  expect(localStorage.getItem(STORAGE_KEY)).toBe('dark');
  expect(store.getSnapshot()).toEqual({
    origin: 'storage',
    mode: 'dark',
  });

  store.dispatch('system');

  expect(document.documentElement).toHaveAttribute('data-mode', 'light');
  expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  expect(store.getSnapshot()).toEqual({
    origin: 'system',
    mode: 'light',
  });

  store.dispose();
});

test('storage event', () => {
  setupEnvironment({ preferredColorMode: 'light' });
  const store = defineColorModeStore();

  expect(document.documentElement).toHaveAttribute('data-mode', 'light');
  expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  expect(store.getSnapshot()).toEqual({
    origin: 'system',
    mode: 'light',
  });

  localStorage.setItem(STORAGE_KEY, 'dark');
  window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY }));

  expect(document.documentElement).toHaveAttribute('data-mode', 'dark');
  expect(store.getSnapshot()).toEqual({
    origin: 'storage',
    mode: 'dark',
  });

  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY }));

  expect(document.documentElement).toHaveAttribute('data-mode', 'light');
  expect(store.getSnapshot()).toEqual({
    origin: 'system',
    mode: 'light',
  });

  store.dispose();
});

test('system color scheme change', () => {
  setupEnvironment({ preferredColorMode: 'light', storedColorMode: 'light' });
  const store = defineColorModeStore();

  expect(document.documentElement).toHaveAttribute('data-mode', 'light');
  expect(localStorage.getItem(STORAGE_KEY)).toBe('light');
  expect(store.getSnapshot()).toEqual({
    origin: 'storage',
    mode: 'light',
  });

  window.matchMedia('(prefers-color-scheme: dark)').dispatchEvent(new Event('change'));

  expect(document.documentElement).toHaveAttribute('data-mode', 'dark');
  expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  expect(store.getSnapshot()).toEqual({
    origin: 'system',
    mode: 'dark',
  });

  store.dispose();
});

test('listener', () => {
  setupEnvironment({ preferredColorMode: 'light' });
  const store = defineColorModeStore();

  const listener = vi.fn();
  const unsubscribe = store.subscribe(listener);
  expect(listener).not.toHaveBeenCalled();

  store.dispatch('dark');
  expect(listener).toHaveBeenCalledTimes(1);
  expect(listener).toHaveBeenCalledWith({
    origin: 'storage',
    mode: 'dark',
  });

  unsubscribe();
  store.dispatch('light');
  expect(listener).toHaveBeenCalledTimes(1);

  store.dispose();
});

test('ColorModePicker', async () => {
  setupEnvironment({ preferredColorMode: 'light' });
  const store = defineColorModeStore();
  render(
    <ColorModeProvider store={store}>
      <ColorModePicker />
    </ColorModeProvider>,
  );

  const colorModePicker = screen.getByRole('button', { name: 'system' });

  expect(document.documentElement).toHaveAttribute('data-mode', 'light');
  expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  expect(colorModePicker).toBeEnabled();

  await userEvent.click(colorModePicker);

  expect(document.documentElement).toHaveAttribute('data-mode', 'light');
  expect(localStorage.getItem(STORAGE_KEY)).toBe('light');
  expect(colorModePicker).toHaveAccessibleName('light');

  await userEvent.click(colorModePicker);

  expect(document.documentElement).toHaveAttribute('data-mode', 'dark');
  expect(localStorage.getItem(STORAGE_KEY)).toBe('dark');
  expect(colorModePicker).toHaveAccessibleName('dark');

  await userEvent.click(colorModePicker);

  expect(document.documentElement).toHaveAttribute('data-mode', 'light');
  expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  expect(colorModePicker).toHaveAccessibleName('system');

  store.dispose();
});

test('ColorModeWatcher', () => {
  setupEnvironment({ preferredColorMode: 'light' });
  const store = defineColorModeStore();
  render(
    <ColorModeProvider store={store}>
      <ColorModeWatcher
        render={state => {
          return (
            <h1>
              origin: {state.origin}; mode: {state.mode}
            </h1>
          );
        }}
      />
    </ColorModeProvider>,
  );
  const heading = screen.getByRole('heading', { name: 'origin: system; mode: light' });
  expect(heading).toBeInTheDocument();

  act(() => {
    store.dispatch('dark');
  });
  expect(heading).toHaveTextContent('origin: storage; mode: dark');

  act(() => {
    store.dispatch('system');
  });
  expect(screen.getByRole('heading', { name: 'origin: system; mode: light' })).toBeInTheDocument();

  store.dispose();
});
