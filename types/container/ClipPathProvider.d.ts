import * as React from 'react';
import { ReactNode } from 'react';
/**
 * Generates a unique clip path ID for use in SVG elements,
 * and puts it in a context provider.
 *
 * To read the clip path ID, use the `useClipPathId` hook,
 * or render `<ClipPath>` component which will automatically use the ID from this context.
 *
 * @param props children - React children to be wrapped by the provider
 * @returns React Context Provider
 */
export declare const ClipPathProvider: ({ children }: {
    children: ReactNode;
}) => React.JSX.Element;
export declare const useClipPathId: () => string | undefined;
