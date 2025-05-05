import * as React from 'react';
import { createContext, ReactNode, useContext } from 'react';

const PanoramaContext = createContext<boolean | null>(null);

export const useIsPanorama = (): boolean => useContext(PanoramaContext) != null;

export const PanoramaContextProvider = ({ children }: { children: ReactNode }) => (
  <PanoramaContext.Provider value>{children}</PanoramaContext.Provider>
);
