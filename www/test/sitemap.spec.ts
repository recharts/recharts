import { describe, it, expect } from 'vitest';
import { getAllUrls } from '../src/navigation.data';
import { getAllNavigationItems, NavItem } from '../src/navigation';
import { supportedLocales } from '../src/locale';

const extractUrlsFromNavItems = (items: ReadonlyArray<NavItem>): string[] => {
  const urls: string[] = [];
  items.forEach(item => {
    if (!item.targetBlank) {
      urls.push(item.url);
    }
    if (item.categories) {
      item.categories.forEach(category => {
        urls.push(...extractUrlsFromNavItems(category.items));
      });
    }
  });
  return urls;
};

describe('sitemap', () => {
  it('should have routes that match the main navigation source', () => {
    const hardcodedUrls = getAllUrls().sort();

    const liveUrlSet = new Set<string>();
    supportedLocales.forEach(locale => {
      liveUrlSet.add(`/${locale}/`);
      const navItems = getAllNavigationItems(locale);
      const extracted = extractUrlsFromNavItems(navItems);
      extracted.forEach(url => liveUrlSet.add(url));
    });

    const sortedLiveUrls = Array.from(liveUrlSet).sort();

    expect(sortedLiveUrls).toEqual(hardcodedUrls);
  });
});
