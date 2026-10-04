import { combineLightDark } from './combineLightDark';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';
import { RechartsTheme } from './RechartsTheme';

/**
 * Theme that follows the CSS `color-scheme` of the page.
 *
 * It is generated from {@link lightTheme} and {@link darkTheme}: every color that differs between the two
 * is a CSS `light-dark()` value, such as `light-dark(#2775e8, #5396ff)`.
 * The browser picks the light or dark color from the `color-scheme` of the element it is applied to.
 * Switching between light and dark needs no React state and no re-render,
 * and server-rendered pages show the right colors from the first paint.
 *
 * - To follow the operating system, set `:root { color-scheme: light dark; }`.
 * - To follow your own toggle, set `color-scheme: light` or `color-scheme: dark` on `<html>` or on any wrapper.
 *   If your toggle only sets a class, add one CSS rule, for example `.dark { color-scheme: dark; }`.
 * - Without any `color-scheme`, browsers use the light colors.
 *
 * Like the other built-in themes, it does not paint the page background. Pair it with a page whose background follows
 * the same `color-scheme`.
 *
 * Features that read colors in JavaScript cannot parse `light-dark()`.
 * Exported SVG and PNG images keep the colors of the color scheme that was active when they were taken.
 *
 * @experimental
 */
export const autoTheme: RechartsTheme = combineLightDark(lightTheme, darkTheme);
