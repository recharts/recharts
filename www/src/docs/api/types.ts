import { ReactNode } from 'react';
import { SupportedLocale } from '../../locale';

export type PropExample = {
  name: string;
  url: string;
  isExternal?: boolean;
};

export type ApiProps = {
  name: string;
  type: string;
  defaultVal?: string | number | null;
  isOptional?: boolean;
  desc?: string | Partial<Record<SupportedLocale, string>>;
  format?: ReadonlyArray<string>;
  examples?: ReadonlyArray<PropExample>;
  deprecated?: boolean;
};

export type ApiDoc = {
  name: string;
  desc?: string | Record<SupportedLocale, string>;
  props: ReadonlyArray<ApiProps>;
  parentComponents?: ReadonlyArray<string>;
  childrenComponents?: ReadonlyArray<string>;
};

export type ApiExampleDemo = (props: { locale: SupportedLocale; isAnimationActive: boolean }) => ReactNode;

export type ApiExample = {
  demo: ApiExampleDemo;
  code: string;
  dataCode?: string;
};
