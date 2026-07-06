import { RechartsTheme } from './RechartsTheme';

/**
 * Overrides some properties from the given `baseTheme`.
 * Useful if you want to use most parts of some other theme and do not want to repeat it all.
 *
 * @experimental
 */
export function extendTheme(baseTheme: RechartsTheme, overrides: Partial<RechartsTheme>): RechartsTheme {
  return { ...baseTheme, ...overrides };
}
