import * as React from 'react';
import { CSSProperties, ReactNode, Ref } from 'react';
import { ExternalMouseEvents } from './types';
type Nullable<T> = {
    [P in keyof T]: T[P] | undefined;
};
export type RechartsWrapperProps = Nullable<ExternalMouseEvents> & {
    children: ReactNode;
    width: number;
    height: number;
    className?: string;
    style?: CSSProperties;
    ref?: Ref<HTMLDivElement>;
};
export declare const RechartsWrapper: React.ForwardRefExoticComponent<Omit<RechartsWrapperProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
