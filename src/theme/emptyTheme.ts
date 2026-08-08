import { RechartsTheme } from './RechartsTheme';

/**
 * Theme that has no presets, and leaves everything to browser defaults.
 * This does not create beautiful charts! But it's useful if you want to start from scratch.
 *
 * Same idea as `clear.css` and others.
 *
 * @experimental - this is still in active development, assume that the API will change in a minor/patch version
 */
export const emptyTheme: RechartsTheme = {
  graphicalItems: [{}],
};
