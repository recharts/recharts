import { afterEach, expect, test, vi } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';

import { ColorModeProvider, ColorModePicker, ColorModeWatcher, useColorModeStore } from '../src/components/color-mode';

const STORAGE_KEY = 'recharts-color-mode';

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
  const listeners = new Set<() => void>();
  vi.stubGlobal('matchMedia', (query: string) => ({
    media: query,
    matches: query.includes(preferredColorMode),
    addEventListener(_type: string, listener: () => void) {
      listeners.add(listener);
    },
    removeEventListener(_type: string, listener: () => void) {
      listeners.delete(listener);
    },
    dispatchEvent() {
      preferredColorMode = preferredColorMode === 'light' ? 'dark' : 'light';
      listeners.forEach(listener => listener());
    },
  }));
}

function StateHeading() {
  return (
    <ColorModeWatcher
      render={state => (
        <h1>
          origin: {state.origin}; mode: {state.mode}
        </h1>
      )}
    />
  );
}

function DispatchButton(props: { action: 'light' | 'dark' | 'system' }) {
  const { dispatch } = useColorModeStore();
  return (
    <button type="button" onClick={() => dispatch(props.action)}>
      dispatch
    </button>
  );
}

test('initializes from the system color mode', async () => {
  setupEnvironment({ preferredColorMode: 'dark' });
  render(
    <ColorModeProvider>
      <StateHeading />
    </ColorModeProvider>,
  );

  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'origin: system; mode: dark' })).toBeInTheDocument();
  });
  expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  expect(document.documentElement).toHaveAttribute('data-mode', 'dark');
});

test('initializes from localStorage', async () => {
  setupEnvironment({ preferredColorMode: 'dark', storedColorMode: 'light' });
  render(
    <ColorModeProvider>
      <StateHeading />
    </ColorModeProvider>,
  );

  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'origin: storage; mode: light' })).toBeInTheDocument();
  });
  expect(document.documentElement).toHaveAttribute('data-mode', 'light');
});

test('dispatch persists and updates color mode', async () => {
  setupEnvironment({ preferredColorMode: 'light' });
  render(
    <ColorModeProvider>
      <StateHeading />
      <DispatchButton action="dark" />
    </ColorModeProvider>,
  );

  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'origin: system; mode: light' })).toBeInTheDocument();
  });
  await userEvent.click(screen.getByRole('button', { name: 'dispatch' }));

  expect(localStorage.getItem(STORAGE_KEY)).toBe('dark');
  expect(document.documentElement).toHaveAttribute('data-mode', 'dark');
  expect(screen.getByRole('heading', { name: 'origin: storage; mode: dark' })).toBeInTheDocument();
});

test('dispatching system clears localStorage and uses the system color mode', async () => {
  setupEnvironment({ preferredColorMode: 'light', storedColorMode: 'dark' });
  render(
    <ColorModeProvider>
      <StateHeading />
      <DispatchButton action="system" />
    </ColorModeProvider>,
  );

  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'origin: storage; mode: dark' })).toBeInTheDocument();
  });
  await userEvent.click(screen.getByRole('button', { name: 'dispatch' }));

  expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  expect(document.documentElement).toHaveAttribute('data-mode', 'light');
  expect(screen.getByRole('heading', { name: 'origin: system; mode: light' })).toBeInTheDocument();
});

test('updates when localStorage changes', async () => {
  setupEnvironment({ preferredColorMode: 'light' });
  render(
    <ColorModeProvider>
      <StateHeading />
    </ColorModeProvider>,
  );

  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'origin: system; mode: light' })).toBeInTheDocument();
  });

  localStorage.setItem(STORAGE_KEY, 'dark');
  window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY }));
  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'origin: storage; mode: dark' })).toBeInTheDocument();
  });

  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY }));
  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'origin: system; mode: light' })).toBeInTheDocument();
  });
});

test('updates the mode when the system color scheme changes while following the system', async () => {
  setupEnvironment({ preferredColorMode: 'light' });
  render(
    <ColorModeProvider>
      <StateHeading />
    </ColorModeProvider>,
  );

  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'origin: system; mode: light' })).toBeInTheDocument();
  });

  window.matchMedia('(prefers-color-scheme: dark)').dispatchEvent(new Event('change'));
  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'origin: system; mode: dark' })).toBeInTheDocument();
  });
  expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
});

test('keeps an explicitly stored color mode when the system color scheme changes', async () => {
  setupEnvironment({ preferredColorMode: 'light', storedColorMode: 'light' });
  render(
    <ColorModeProvider>
      <StateHeading />
    </ColorModeProvider>,
  );

  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'origin: storage; mode: light' })).toBeInTheDocument();
  });

  window.matchMedia('(prefers-color-scheme: dark)').dispatchEvent(new Event('change'));

  // The system preference flipped to dark, but the explicit stored choice must win.
  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'origin: storage; mode: light' })).toBeInTheDocument();
  });
  expect(localStorage.getItem(STORAGE_KEY)).toBe('light');
});

test('ColorModePicker', async () => {
  setupEnvironment({ preferredColorMode: 'light' });
  render(
    <ColorModeProvider>
      <ColorModePicker />
    </ColorModeProvider>,
  );

  const colorModePicker = await screen.findByRole('button', { name: 'system' });
  expect(colorModePicker).toBeEnabled();

  await userEvent.click(colorModePicker);
  expect(colorModePicker).toHaveAccessibleName('light');
  expect(localStorage.getItem(STORAGE_KEY)).toBe('light');

  await userEvent.click(colorModePicker);
  expect(colorModePicker).toHaveAccessibleName('dark');
  expect(localStorage.getItem(STORAGE_KEY)).toBe('dark');

  await userEvent.click(colorModePicker);
  expect(colorModePicker).toHaveAccessibleName('system');
  expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
});

test('ColorModeWatcher', async () => {
  setupEnvironment({ preferredColorMode: 'light' });
  render(
    <ColorModeProvider>
      <StateHeading />
      <DispatchButton action="dark" />
    </ColorModeProvider>,
  );

  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'origin: system; mode: light' })).toBeInTheDocument();
  });
  await userEvent.click(screen.getByRole('button', { name: 'dispatch' }));

  expect(screen.getByRole('heading', { name: 'origin: storage; mode: dark' })).toBeInTheDocument();
});
