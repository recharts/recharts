import { GraphicalItemStyle, RechartsTheme } from './RechartsTheme';

const backgroundColor = '#fff';
const border = '1px solid #a1a1aa';
const borderRadius = 4;
const padding = '0.5ex';

/**
 * Categorical series colors for a #fff background.
 *
 * Order matters. Graphical items take colors from the front of this list (by
 * sorted dataKey), so a chart with N series always gets the first N entries.
 * The order is tuned so that every prefix stays distinguishable in typical
 * vision and under protanopia, deuteranopia and tritanopia, with the widest
 * separation in the first 4-8 entries where most charts live.
 *
 * Entries 1-8 share one band of lightness and chroma, so no series looks
 * heavier or more important than another. Entries 9-12 step outside that band
 * where they can, because twelve hues at one lightness cannot all stay apart
 * under color vision deficiency: Purple is darker and Teal is less saturated.
 * At 4.5:1 the band already sits close to the lightest a color can be, so they
 * cannot step outside it upward.
 *
 * Every entry has at least 4.5:1 contrast against the background as a stroke,
 * the WCAG contrast for text, so a label in the series color stays readable.
 * Painted as a fill at `fillOpacity` 0.85, every entry keeps at least 3:1
 * (WCAG 1.4.11).
 *
 * Entry N is the same hue family in the light and dark palettes, so a series
 * keeps its identity when the theme changes. Comments show stroke contrast.
 *
 * @see {@link https://recharts.github.io/en-US/guide/theming/ Theming guide}
 *
 * @since 3.11
 */
export const lightPalette: ReadonlyArray<string> = [
  '#2373e6', //  1 Blue       4.50:1
  '#b65700', //  2 Orange     4.83:1
  '#017a58', //  3 Aqua       5.35:1
  '#a5386e', //  4 Rose       6.19:1
  '#6b53b0', //  5 Violet     6.02:1
  '#0681a0', //  6 Sky        4.51:1
  '#b13629', //  7 Red        6.12:1
  '#628039', //  8 Green      4.50:1
  '#723683', //  9 Purple     8.17:1
  '#39807c', // 10 Teal       4.61:1
  '#9b6e27', // 11 Amber      4.51:1
  '#aa5a9e', // 12 Plum       4.50:1
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
 * Light mode theme
 *
 * @see {@link https://recharts.github.io/en-US/guide/theming/ Theming guide}
 *
 * @since 3.11
 */
export const lightTheme: RechartsTheme = {
  graphicalItems: lightPalette.map(toGraphicalItem),
  pageBackground: backgroundColor,
  barBackground: {
    fill: '#f4f4f5',
  },
  brush: {
    fill: '#f4f4f5',
    stroke: '#52525b',
  },
  axis: {
    stroke: '#52525b',
  },
  errorBar: {
    stroke: '#52525b',
    strokeWidth: 1.5,
  },
  grid: {
    stroke: '#d4d4d8',
    strokeDasharray: '3 3',
    fill: 'none',
  },
  reference: {
    stroke: '#71717a',
    strokeWidth: 1,
    fill: '#d4d4d8',
    fillOpacity: 0.25,
  },
  cursor: {
    stroke: '#d4d4d8',
    fill: '#e4e4e7',
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
    color: '#18181b',
  },
};
