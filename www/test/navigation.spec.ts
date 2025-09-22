import { describe, it, expect } from 'vitest';
import { getAllNavigationItems } from '../src/navigation';

describe('getAllNavigationItems', () => {
  it('should return all navigation items', () => {
    const locale = 'en-US';
    const navigationItems = getAllNavigationItems(locale);
    expect(navigationItems).toMatchSnapshot();
  });
});
