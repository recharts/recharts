import { map as zhCN } from './zh-CN';
import { map as enUS } from './en-US';

export type SupportedLocale = 'zh-CN' | 'en-US';

export const localeMap: Record<SupportedLocale, unknown> = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

export const supportedLocales: ReadonlyArray<SupportedLocale> = ['zh-CN', 'en-US'];
