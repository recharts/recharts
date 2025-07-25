import * as React from 'react';
import { ReactNode, SVGAttributes } from 'react';
interface LayerProps {
    className?: string;
    children?: ReactNode;
}
export type Props = SVGAttributes<SVGGElement> & LayerProps;
export declare const Layer: React.ForwardRefExoticComponent<React.SVGAttributes<SVGGElement> & LayerProps & React.RefAttributes<SVGGElement>>;
export {};
