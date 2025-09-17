import zhCN from './zh-CN';
import enUS from './en-US';

export type SupportedLocale = 'zh-CN' | 'en-US';

const localeMap: Record<SupportedLocale, unknown> = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

export const supportedLocales: ReadonlyArray<SupportedLocale> = ['zh-CN', 'en-US'];

export default localeMap;
