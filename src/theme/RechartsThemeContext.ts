import { createContext, useContext } from 'react';
import { RechartsTheme } from './RechartsTheme';
import { legacyTheme } from './legacyTheme';

const RechartsThemeContext = createContext<RechartsTheme>(legacyTheme);

/**
 * Applies the provided theme to all charts in the children tree.
 *
 * @experimental
 */
export const RechartsThemeProvider = RechartsThemeContext.Provider;

/**
 * Reads the currently active theme in the children tree.
 *
 * @experimental
 */
export const useRechartsTheme = () => useContext(RechartsThemeContext);
