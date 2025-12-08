import { ReactNode } from 'react';
import { useParams } from 'react-router';
import { localeMap as Locale, SupportedLocale, supportedLocales } from '../locale';
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

export const useLocale = () => {
  const params = useParams();
  const localeFromParams = params?.locale;
  if (localeFromParams && isSupportedLocale(localeFromParams)) {
    return localeFromParams;
  }
  return defaultLocale;
};

export const parseLocalObj = (
  locale: SupportedLocale,
  value: undefined | string | Partial<Record<SupportedLocale, ReactNode>>,
): ReactNode => {
  if (!value) {
    return '';
  }

  if (typeof value === 'object') {
    if (locale in value) {
      return value[locale];
    }
    if ('en-US' in value) {
      return value['en-US'];
    }
    return '';
  }

  return value || '';
};
