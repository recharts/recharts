import * as React from 'react';
import { ReactNode } from 'react';
type RootSurfaceProps = {
    children: ReactNode;
    title: string | undefined;
    desc: string | undefined;
    otherAttributes: Record<string, unknown>;
};
export declare const RootSurface: React.ForwardRefExoticComponent<RootSurfaceProps & React.RefAttributes<SVGSVGElement>>;
export {};
