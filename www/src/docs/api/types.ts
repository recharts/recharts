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
  defaultVal?: string | number | boolean | Array<unknown> | Record<string, unknown> | null;
  isOptional?: boolean;
  desc?: string | Partial<Record<SupportedLocale, ReactNode>>;
  format?: ReadonlyArray<string>;
  examples?: ReadonlyArray<PropExample>;
  deprecated?: boolean | string;
};

export type ApiDoc = {
  name: string;
  desc?: string | Partial<Record<SupportedLocale, ReactNode>>;
  props: ReadonlyArray<ApiProps>;
  parentComponents?: ReadonlyArray<string>;
  childrenComponents?: ReadonlyArray<string>;
  deprecated?: boolean | string;
};
