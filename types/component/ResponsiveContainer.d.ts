import * as React from 'react';
import { ReactElement, CSSProperties } from 'react';
export interface Props {
    aspect?: number;
    width?: string | number;
    height?: string | number;
    minWidth?: string | number;
    minHeight?: string | number;
    initialDimension?: {
        width: number;
        height: number;
    };
    maxHeight?: number;
    children: ReactElement;
    debounce?: number;
    id?: string | number;
    className?: string | number;
    style?: Omit<CSSProperties, keyof Props>;
    onResize?: (width: number, height: number) => void;
}
export declare const ResponsiveContainer: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
