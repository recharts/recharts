import { createContext, useContext } from 'react';

export const TooltipPortalContext = createContext<HTMLElement | null>(null);

export const useTooltipPortal = (): HTMLElement | null => useContext(TooltipPortalContext);
