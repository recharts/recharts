import { describe, it, expect, vi, afterEach } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';

import { getAllNavigationItems, normalizePathnameToLocale } from '../src/navigation';
import { Navigation } from '../src/components/Navigation';
import { ColorModeProvider, defineColorModeStore } from '../src/components/color-mode';

describe('getAllNavigationItems', () => {
  it('should return all navigation items', () => {
    const locale = 'en-US';
    const navigationItems = getAllNavigationItems(locale);
    expect(navigationItems).toMatchSnapshot();
  });
});

describe('normalizePathnameToLocale', () => {
  it('should return the same pathname if it already includes locale', () => {
    expect(normalizePathnameToLocale('/en-US/guide/')).toBe('/en-US/guide/');
    expect(normalizePathnameToLocale('/zh-CN/api/')).toBe('/zh-CN/api/');
  });

  it('should prepend default locale if pathname does not include locale', () => {
    expect(normalizePathnameToLocale('/guide/')).toBe('/en-US/guide/');
    expect(normalizePathnameToLocale('/api/')).toBe('/en-US/api/');
  });
});

describe('ColorModePicker', () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });
  it('does not render when feature flag is disabled', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );
    const navigations = screen.getAllByRole('navigation');
    expect(navigations).toHaveLength(2);
    navigations.forEach(nav => {
      const picker = within(nav).queryByRole('button', { name: 'system' });
      expect(picker).not.toBeInTheDocument();
    });
  });
  it('should render on both mobile and desktop navs', async () => {
    vi.stubEnv('VITE_IS_DARKMODE_ENABLED', 'true');
    vi.stubGlobal('matchMedia', (query: string) => ({
      media: query,
      matches: query.includes('dark'),
      addEventListener() {},
      removeEventListener() {},
      dispatchEvent() {},
    }));
    const store = defineColorModeStore();
    render(
      <ColorModeProvider store={store}>
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      </ColorModeProvider>,
    );
    const navigations = screen.getAllByRole('navigation');
    expect(navigations).toHaveLength(2);
    const pickers = navigations.map(nav => within(nav).getByRole('button', { name: 'system' }));
    expect(pickers).toHaveLength(2);
    pickers.forEach(picker => {
      expect(picker).toBeEnabled();
    });
    await userEvent.click(pickers[0]);
    pickers.forEach(picker => {
      expect(picker).toHaveAccessibleName('light');
    });
    expect(document.documentElement).toHaveAttribute('data-mode', 'light');
    store.dispose();
  });
});
