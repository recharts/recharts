import SymbolsTypes from './SymbolsTypes';
import symbolsTypesSource from './SymbolsTypes?raw';
import { ChartExample } from '../types.ts';

export const symbolsExamples = {
  SymbolsTypes: {
    Component: SymbolsTypes,
    sourceCode: symbolsTypesSource,
    name: 'Symbol types',
  },
} satisfies Record<string, ChartExample>;
