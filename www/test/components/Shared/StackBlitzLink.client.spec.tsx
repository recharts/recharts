import { afterEach, expect, test, vi } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import stackblitzSdk from '@stackblitz/sdk';
import { ColorModePicker, ColorModeProvider } from '../../../src/components/color-mode';
import { StackBlitzLink } from '../../../src/components/Shared/StackBlitzLink';

vi.mock('../../../src/components/analytics', () => ({ sendEvent: vi.fn() }));

afterEach(() => {
  cleanup();
  localStorage.removeItem('recharts-color-mode');
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

function setup(preferred: 'light' | 'dark', stored?: 'light' | 'dark') {
  if (stored) {
    localStorage.setItem('recharts-color-mode', stored);
  }
  vi.stubGlobal('matchMedia', (query: string) => ({
    matches: query.includes(preferred),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));
  const openProject = vi.spyOn(stackblitzSdk, 'openProject').mockImplementation(() => {});
  render(
    <ColorModeProvider>
      <ColorModePicker />
      <StackBlitzLink code="export default function Example() { return null; }" title="Example">
        Open in StackBlitz
      </StackBlitzLink>
    </ColorModeProvider>,
  );
  return openProject;
}

test.each([
  { preferred: 'light', stored: undefined, expected: 'light' },
  { preferred: 'dark', stored: undefined, expected: 'dark' },
  { preferred: 'dark', stored: 'light', expected: 'light' },
  { preferred: 'light', stored: 'dark', expected: 'dark' },
] as const)('exports $expected mode for system=$preferred, stored=$stored', async ({ preferred, stored, expected }) => {
  const openProject = setup(preferred, stored);
  await waitFor(() => expect(document.documentElement.getAttribute('data-mode')).toBe(expected));
  await userEvent.click(screen.getByRole('button', { name: 'Open in StackBlitz' }));
  expect(openProject).toHaveBeenCalledWith(
    expect.objectContaining({
      files: expect.objectContaining({ 'index.html': expect.stringContaining(`data-mode="${expected}"`) }),
    }),
    expect.objectContaining({ theme: expected }),
  );
});

test('uses the current mode after changing the website theme', async () => {
  const openProject = setup('light', 'light');
  await userEvent.click(screen.getByRole('button', { name: 'Open in StackBlitz' }));
  expect(openProject).toHaveBeenLastCalledWith(expect.anything(), expect.objectContaining({ theme: 'light' }));
  await userEvent.click(screen.getByRole('button', { name: 'light' }));
  await userEvent.click(screen.getByRole('button', { name: 'Open in StackBlitz' }));
  expect(openProject).toHaveBeenLastCalledWith(
    expect.objectContaining({
      files: expect.objectContaining({ 'index.html': expect.stringContaining('data-mode="dark"') }),
    }),
    expect.objectContaining({ theme: 'dark' }),
  );
});
