import { createContext, useContext } from 'react';

export const LegendPortalContext = createContext<HTMLElement | null>(null);

export const useLegendPortal = (): HTMLElement | null => useContext(LegendPortalContext);
