import { describe, it, expect } from 'vitest';
import { getAllNavigationItems, normalizePathnameToLocale } from '../src/navigation';

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
