import * as React from 'react';
import { ReactNode } from 'react';
import { RechartsRootState } from './store';
type RechartsStoreProviderProps = {
    children: ReactNode;
    preloadedState?: Partial<RechartsRootState>;
    reduxStoreName?: string;
};
export declare function RechartsStoreProvider({ preloadedState, children, reduxStoreName }: RechartsStoreProviderProps): string | number | boolean | Iterable<React.ReactNode> | React.JSX.Element;
export {};
