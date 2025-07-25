import * as React from 'react';
import { ActiveShape, SymbolType } from './types';
import { ScatterPointItem } from '../cartesian/Scatter';
export declare function ScatterSymbol({ option, isActive, ...props }: {
    option: ActiveShape<ScatterPointItem> | SymbolType;
    isActive: boolean;
} & ScatterPointItem): React.JSX.Element;
