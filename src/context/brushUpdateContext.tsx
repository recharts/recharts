import { createContext } from 'react';

export interface BrushStartEndIndex {
  startIndex: number;
  endIndex: number;
}

export type OnBrushUpdate = (newState: BrushStartEndIndex) => void;

export const BrushUpdateDispatchContext = createContext<OnBrushUpdate>(() => {});
