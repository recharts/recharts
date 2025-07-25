/**
 * @fileOverview Surface
 */
import * as React from 'react';
import { ReactNode, CSSProperties, SVGProps } from 'react';
interface SurfaceProps {
    width: number;
    height: number;
    viewBox?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
    };
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    title?: string;
    desc?: string;
}
export type Props = Omit<SVGProps<SVGSVGElement>, 'viewBox'> & SurfaceProps;
export declare const Surface: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<SVGSVGElement>>;
export {};
