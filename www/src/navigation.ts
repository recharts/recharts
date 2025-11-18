import { ReactNode } from 'react';
import { useLocation } from 'react-router';
import { SupportedLocale, supportedLocales } from './locale';
import { defaultLocale, localeGet, useLocale } from './utils/LocaleUtils';
import { apiCates } from './docs/apiCates';
import { allExamples } from './docs/exampleComponents';
import { allGuides } from './views/GuideView';

/**
 * Represents a single navigation link in the navigation menu.
 */
export type NavItem = {
  /**
   * The unique identifier for the item. Used as identified and i18n ID.
   */
  key: string;
  /**
   * The display name for the navigation link.
   * This can be a string or a React component for more complex rendering.
   */
  displayName: ReactNode;
  /**
   * The URL path for the navigation link.
   */
  url: string;
  /**
   * Optional children navigation items, allowing for nested menus.
   * This can be used to create sub-menus or hierarchical navigation structures.
   */
  categories?: ReadonlyArray<NavCategory>;
  /**
   * If true, the link will open in a new browser tab or window.
   * Defaults to false.
   */
  targetBlank?: boolean;
};

export type NavCategory = {
  /**
   * The unique identifier for the category. Used as identifier and i18n ID.
   */
  key: string;
  /**
   * The name of the category. Can be an empty string for uncategorized items.
   */
  displayName: string;
  /**
   * The list of navigation items under this category.
   */
  items: ReadonlyArray<NavItem>;
  /**
   * A preview component to be displayed alongside the navigation items in this category.
   */
  NavPreview: null | ((props: { isAnimationActive?: boolean }) => ReactNode);
};

export type Navigation = ReadonlyArray<NavItem>;

function guideNavItems(locale: SupportedLocale): ReadonlyArray<NavCategory> {
  const items = allGuides.map(name => ({
    key: name,
    displayName: localeGet(locale, 'guide', name),
    url: `/${locale}/guide/${name}/`,
  }));
  // The "Guide" page has only one category, without any names. As we add more categories in the future, we will adjust this.
  return [
    {
      key: 'guide',
      displayName: '',
      items,
      NavPreview: null,
    },
  ];
}

function apiNavItems(locale: SupportedLocale): ReadonlyArray<NavCategory> {
  return apiCates.map(
    ({ name, items }): NavCategory => ({
      key: name,
      displayName: localeGet(locale, 'api', name),
      items: items.map(compName => ({
        key: compName,
        displayName: compName,
        url: `/${locale}/api/${compName}/`,
      })),
      NavPreview: null,
    }),
  );
}

const exampleCategoryNames = Object.keys(allExamples).sort((a, b) => allExamples[a].order - allExamples[b].order);
function exampleNavItems(locale: SupportedLocale): ReadonlyArray<NavCategory> {
  return exampleCategoryNames.map(
    (cate): NavCategory => ({
      key: cate,
      displayName: cate,
      items: Object.keys(allExamples[cate].examples).map(name => ({
        key: name,
        displayName: allExamples[cate].examples[name].name,
        url: `/${locale}/examples/${name}/`,
      })),
      NavPreview: allExamples[cate].NavPreview,
    }),
  );
}

export function getAllNavigationItems(locale: SupportedLocale): Navigation {
  return [
    {
      key: 'guide',
      displayName: localeGet(locale, 'frame', 'guide'),
      url: `/${locale}/guide/`,
      categories: guideNavItems(locale),
    },
    {
      key: 'api',
      displayName: localeGet(locale, 'frame', 'api'),
      url: `/${locale}/api/`,
      categories: apiNavItems(locale),
    },
    {
      key: 'examples',
      displayName: localeGet(locale, 'frame', 'examples'),
      url: `/${locale}/examples/`,
      categories: exampleNavItems(locale),
    },
    { key: 'storybook', displayName: localeGet(locale, 'frame', 'storybook'), url: `/${locale}/storybook/` },
    { key: 'wiki', displayName: 'Wiki', url: 'https://github.com/recharts/recharts/wiki', targetBlank: true },
    { key: 'github', displayName: 'GitHub', url: 'https://github.com/recharts/recharts', targetBlank: true },
  ];
}

export function useAllNavigationItems(): Navigation {
  const locale = useLocale();
  return getAllNavigationItems(locale);
}

export function normalizePathnameToLocale(pathname: string) {
  for (let i = 0; i < supportedLocales.length; i++) {
    const locale = supportedLocales[i];
    if (pathname.startsWith(`/${locale}/`)) {
      return pathname;
    }
  }
  // If no supported locale is found in the pathname, prepend the default locale.
  return `/${defaultLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`;
}

function stripTrailingSlash(path: string): string {
  return path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
}

export function useCurrentNavItem(): NavItem | undefined {
  const allNavigationItems = useAllNavigationItems();
  const location = useLocation();
  const normalizedLocationPathname = normalizePathnameToLocale(location.pathname);
  return allNavigationItems.find(item => normalizedLocationPathname.startsWith(stripTrailingSlash(item.url)));
}
