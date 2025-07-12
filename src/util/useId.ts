import * as React from 'react';
import { uniqueId } from './DataUtils';

/**
 * Fallback for React.useId() for versions prior to React 18.
 * Generates a unique ID using a simple counter and a prefix.
 *
 * @returns A unique ID that remains consistent across renders.
 */
export const useIdFallback = (): string => {
  const [id] = React.useState(() => uniqueId('uid-'));
  return id;
};

/*
 * This weird syntax is used to avoid a build-time error in React 17 and earlier when building with Webpack.
 * See https://github.com/webpack/webpack/issues/14814
 */
export const useId: () => string = ((React as any)['useId'.toString()] as () => string) ?? useIdFallback;
