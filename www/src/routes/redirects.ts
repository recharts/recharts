import { supportedLocales } from '../locale';

export const redirectsWithoutLocale: Record<string, string> = {
  '/api/SankeyChart/': '/api/Sankey/',
};

const allLocaleRedirects: Record<string, string> = supportedLocales.reduce(
  (acc: Record<string, string>, locale): Record<string, string> => {
    Object.entries(redirectsWithoutLocale).forEach(([oldPath, newPath]) => {
      acc[`/${locale}${oldPath}`] = `/${locale}${newPath}`;
    });
    return acc;
  },
  {},
);

// Define redirect mappings (old route -> new route)
export const redirects: Record<string, string> = {
  ...redirectsWithoutLocale,
  ...allLocaleRedirects,
};
