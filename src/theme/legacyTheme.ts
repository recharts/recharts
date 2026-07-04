import { RechartsTheme } from './RechartsTheme';

/**
 * This is the theme as was the default in 2.x and 3.x branches.
 *
 * It's not very consistent, colors are all over the place and overall exists only for backwards compatibility.
 * Prefer to use either {@link lightTheme} or {@link darkTheme} instead.
 *
 * @deprecated
 * @experimental
 */
export const legacyTheme: RechartsTheme = {
  grid: {
    stroke: '#ccc',
    fill: 'none',
  },
};
