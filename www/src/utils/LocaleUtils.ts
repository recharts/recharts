import { ReactNode } from 'react';
import Locale, { SupportedLocale, supportedLocales } from '../locale';
import { RouteComponentProps } from '../routes/withRouter.tsx';

export const defaultLocale = 'en-US';

export const localeGet = (locale: SupportedLocale, component: string, path: string) =>
  // @ts-expect-error no index signature
  Locale?.[locale]?.[component]?.[path];

const isSupportedLocale = (locale: string): locale is SupportedLocale => {
  return supportedLocales.includes(locale as SupportedLocale);
};

export const getLocaleType = (props: RouteComponentProps): SupportedLocale => {
  const localeFromParams = props.params?.locale;
  if (localeFromParams && isSupportedLocale(localeFromParams)) {
    return localeFromParams;
  }
  return defaultLocale;
};

export const parseLocalObj = (
  locale: SupportedLocale,
  value: undefined | string | Partial<Record<string, ReactNode>>,
): ReactNode => {
  if (!value) {
    return '';
  }

  if (typeof value === 'object') {
    return value[locale] ?? value['en-US'] ?? '';
  }

  return value || '';
};
