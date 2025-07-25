/**
 * @fileOverview Curve
 */
import * as React from 'react';
import { SVGProps } from 'react';
import { SymbolType as D3SymbolType } from 'victory-vendor/d3-shape';
import { SymbolType } from '../util/types';
type SizeType = 'area' | 'diameter';
export interface InnerSymbolsProp {
    className?: string;
    type: SymbolType;
    cx?: number;
    cy?: number;
    size?: number;
    sizeType?: SizeType;
}
export type SymbolsProps = SVGProps<SVGPathElement> & InnerSymbolsProp;
export declare const Symbols: {
    ({ type, size, sizeType, ...rest }: SymbolsProps): React.JSX.Element;
    registerSymbol: (key: string, factory: D3SymbolType) => void;
};
export {};
