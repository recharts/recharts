import { beforeEach, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { ColorModePicker } from '../src/components/ColorModePicker';

beforeEach(() => {
  ColorModePicker.clearStoredColorModeStrategy();
  vi.restoreAllMocks();
});

function setupTest() {
  ColorModePicker.setInitialColorMode();
  return render(<ColorModePicker />);
}

test('prefers light', async () => {
  vi.stubGlobal('matchMedia', (query: string) => {
    return {
      matches: query === '(prefers-color-scheme: light)',
      addListener: () => {},
      removeListener: () => {},
    };
  });
  setupTest();

  const colorModePicker = screen.getByRole('button', { name: 'system' });
  expect(colorModePicker).toBeEnabled();
  expect(document.querySelector('[data-mode]')).toHaveAttribute('data-mode', 'light');

  await userEvent.click(colorModePicker);

  expect(colorModePicker).toHaveTextContent('dark');
  expect(document.querySelector('[data-mode]')).toHaveAttribute('data-mode', 'dark');
});

test('prefers dark', async () => {
  vi.stubGlobal('matchMedia', (query: string) => {
    return {
      matches: query === '(prefers-color-scheme: dark)',
      addListener: () => {},
      removeListener: () => {},
    };
  });
  setupTest();

  const colorModePicker = screen.getByRole('button', { name: 'system' });
  expect(colorModePicker).toBeEnabled();
  expect(document.querySelector('[data-mode]')).toHaveAttribute('data-mode', 'dark');

  await userEvent.click(colorModePicker);

  expect(colorModePicker).toHaveTextContent('light');
  expect(document.querySelector('[data-mode]')).toHaveAttribute('data-mode', 'light');
});

test('stored mode: light', async () => {
  vi.stubGlobal('matchMedia', (query: string) => {
    return {
      matches: query === '(prefers-color-scheme: dark)',
      addListener: () => {},
      removeListener: () => {},
    };
  });
  ColorModePicker.setStoredColorModeStrategy('light');
  setupTest();

  const colorModePicker = screen.getByRole('button', { name: 'light' });
  expect(colorModePicker).toBeEnabled();
  expect(document.querySelector('[data-mode]')).toHaveAttribute('data-mode', 'light');

  await userEvent.click(colorModePicker);
  expect(colorModePicker).toHaveTextContent('dark');
  expect(document.querySelector('[data-mode]')).toHaveAttribute('data-mode', 'dark');

  await userEvent.click(colorModePicker);
  expect(colorModePicker).toHaveTextContent('system');
  expect(document.querySelector('[data-mode]')).toHaveAttribute('data-mode', 'dark');
});

test('stored mode: dark', async () => {
  vi.stubGlobal('matchMedia', (query: string) => {
    return {
      matches: query === '(prefers-color-scheme: dark)',
      addListener: () => {},
      removeListener: () => {},
    };
  });
  ColorModePicker.setStoredColorModeStrategy('dark');
  setupTest();

  const colorModePicker = screen.getByRole('button', { name: 'dark' });
  expect(colorModePicker).toBeEnabled();
  expect(document.querySelector('[data-mode]')).toHaveAttribute('data-mode', 'dark');

  await userEvent.click(colorModePicker);
  expect(colorModePicker).toHaveTextContent('system');
  expect(document.querySelector('[data-mode]')).toHaveAttribute('data-mode', 'dark');

  await userEvent.click(colorModePicker);
  expect(colorModePicker).toHaveTextContent('light');
  expect(document.querySelector('[data-mode]')).toHaveAttribute('data-mode', 'light');
});
