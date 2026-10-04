import { GraphicalItemStyle, RechartsTheme } from './RechartsTheme';

const backgroundColor = 'light-dark(#fff, #18181b)';
const border = '1px solid light-dark(#a1a1aa, #71717a)';
const borderRadius = 4;
const padding = '0.5ex';

/**
 * Each entry pairs the same entry of `lightPalette` and `darkPalette`.
 */
const autoPalette: ReadonlyArray<string> = [
  'light-dark(#2775e8, #5396ff)', //  1 Blue
  'light-dark(#b65900, #e97e2b)', //  2 Orange
  'light-dark(#007c59, #46d09f)', //  3 Aqua
  'light-dark(#ae3b73, #e683ad)', //  4 Rose
  'light-dark(#6f56b3, #b8a4fe)', //  5 Violet
  'light-dark(#0582a1, #0bb1da)', //  6 Sky
  'light-dark(#b2392b, #ff9180)', //  7 Red
  'light-dark(#568b28, #79b14e)', //  8 Green
  'light-dark(#723984, #ac71c0)', //  9 Purple
  'light-dark(#00928e, #01a19c)', // 10 Teal
  'light-dark(#ae7500, #ffc470)', // 11 Amber
  'light-dark(#b862a7, #ffaaec)', // 12 Plum
];

function toGraphicalItem(color: string): GraphicalItemStyle {
  return {
    fill: color,
    stroke: color,
    fillOpacity: 0.85,
    active: { fill: backgroundColor, stroke: color, strokeWidth: 2 },
  };
}

/**
 * Theme that follows the CSS `color-scheme` of the page.
 *
 * It has the colors of {@link lightTheme} and {@link darkTheme}: every color that differs between the two
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
export const autoTheme: RechartsTheme = {
  graphicalItems: autoPalette.map(toGraphicalItem),
  pageBackground: backgroundColor,
  barBackground: {
    fill: 'light-dark(#f4f4f5, #27272a)',
  },
  brush: {
    fill: 'light-dark(#f4f4f5, #3f3f46)',
    stroke: 'light-dark(#52525b, #d4d4d8)',
  },
  axis: {
    stroke: 'light-dark(#52525b, #d4d4d8)',
  },
  errorBar: {
    stroke: 'light-dark(#52525b, #d4d4d8)',
    strokeWidth: 1.5,
  },
  grid: {
    stroke: 'light-dark(#d4d4d8, #3f3f46)',
    strokeDasharray: '3 3',
    fill: 'none',
  },
  reference: {
    stroke: 'light-dark(#71717a, #a1a1aa)',
    strokeWidth: 1,
    fill: 'light-dark(#d4d4d8, #3f3f46)',
    fillOpacity: 0.25,
  },
  cursor: {
    stroke: 'light-dark(#d4d4d8, #3f3f46)',
    fill: 'light-dark(#e4e4e7, #3f3f46)',
    fillOpacity: 0.7,
  },
  legend: {
    wrapperStyle: {
      backgroundColor,
      borderRadius,
      padding,
    },
  },
  tooltip: {
    contentStyle: {
      margin: 0,
      padding,
      backgroundColor,
      border,
      borderRadius,
      whiteSpace: 'nowrap',
    },
    itemStyle: {
      display: 'block',
      paddingTop: 4,
      paddingBottom: 4,
    },
    labelStyle: {
      margin: 0,
      fontWeight: 'bold',
    },
  },
  typography: {
    color: 'light-dark(#18181b, #f4f4f5)',
  },
};
