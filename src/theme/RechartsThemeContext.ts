import { createContext, useContext } from 'react';
import { RechartsTheme } from './RechartsTheme';

const RechartsThemeContext = createContext<RechartsTheme | undefined>(undefined);

/**
 * Applies the provided theme to all charts in the children tree.
 *
 * @experimental
 */
export const RechartsThemeProvider = RechartsThemeContext.Provider;

/**
 * Reads the currently active theme in the children tree.
 * Returns the theme as-is, without modifications and without defaults.
 *
 * Can return undefined if used outside of Recharts context, or if no theme is set.
 *
 *  @experimental
 */
export const useRechartsTheme = (): RechartsTheme | undefined => useContext(RechartsThemeContext);
