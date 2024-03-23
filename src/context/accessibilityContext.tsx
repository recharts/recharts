import { createContext, useContext } from 'react';

const AccessibilityContext = createContext<boolean>(true);

export const AccessibilityContextProvider = AccessibilityContext.Provider;

export const useAccessibilityLayer = () => useContext(AccessibilityContext);
