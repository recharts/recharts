import { createContext, useContext } from 'react';

export const TooltipPortalContext = createContext<HTMLElement | null>(null);
export const CursorPortalContext = createContext<SVGElement | null>(null);

export const useTooltipPortal = (): HTMLElement | null => useContext(TooltipPortalContext);
export const useCursorPortal = (): SVGElement | null => useContext(CursorPortalContext);
