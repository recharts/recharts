import { afterEach, expect, test, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import { defineColorModeStore } from '../src/components/color-mode';

const STORAGE_KEY = 'recharts-color-mode';

afterEach(() => {
  localStorage.removeItem(STORAGE_KEY);
  cleanup();
});

function setupTest(props: { preferredColorMode: 'light' | 'dark'; storedColorMode?: 'light' | 'dark' }) {
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
  return defineColorModeStore();
}

test('origin: system; mode: light', () => {
  const store = setupTest({ preferredColorMode: 'light' });

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
  const store = setupTest({ preferredColorMode: 'dark' });

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
  const store = setupTest({ preferredColorMode: 'dark', storedColorMode: 'light' });

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
  const store = setupTest({ preferredColorMode: 'light', storedColorMode: 'dark' });

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
  const store = setupTest({ preferredColorMode: 'light' });

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
  const store = setupTest({ preferredColorMode: 'light', storedColorMode: 'light' });

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
});

test('listener', () => {
  const store = setupTest({ preferredColorMode: 'light' });

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
