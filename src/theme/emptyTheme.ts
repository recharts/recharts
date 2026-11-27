import { RechartsTheme } from './RechartsTheme';

/**
 * Theme that has no presets, and leaves everything to browser defaults.
 * This does not create beautiful charts! But it's useful if you want to start from scratch.
 *
 * Same idea as `clear.css` and others.
 *
 * @see {@link https://recharts.github.io/en-US/guide/theming/ Theming guide}
 *
 * @since 3.11
 * @public
 */
export const emptyTheme: RechartsTheme = {
  graphicalItems: [{}],
};
