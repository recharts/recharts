import { describe, it, expect } from 'vitest';
import { getSiteRoutes } from '../src/navigation.data';
import { getAllNavigationItems, NavItem } from '../src/navigation';
import { defaultLocale } from '../src/utils/LocaleUtils';

describe('sitemap', () => {
  const hardcodedUrls = getSiteRoutes().sort();
  it('should have routes that match the main navigation source', () => {
    const locale = defaultLocale; // We only need to check one locale, as the structure is the same
    const navItems = getAllNavigationItems(locale);

    const extractUrlsFromNavItems = (items: ReadonlyArray<NavItem>): string[] => {
      const urls: string[] = [];
      items.forEach(item => {
        if (!item.targetBlank) {
          // Remove the locale prefix to get the base route
          const urlWithoutLocale = item.url.replace(`/${locale}`, '') || '/';
          urls.push(urlWithoutLocale);
        }
        if (item.categories) {
          item.categories.forEach(category => {
            urls.push(...extractUrlsFromNavItems(category.items));
          });
        }
      });
      return urls;
    };

    const liveUrlSet = new Set(extractUrlsFromNavItems(navItems));
    const sortedLiveUrls = Array.from(liveUrlSet).sort();

    expect(sortedLiveUrls).toEqual(hardcodedUrls);
  });

  it('should suffix every route with a trailing slash', () => {
    hardcodedUrls.forEach(url => {
      expect(url.endsWith('/')).toBe(true);
    });
  });
});
