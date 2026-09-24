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
 * on purpose, because twelve hues at one lightness cannot all stay apart under
 * color vision deficiency.
 *
 * Every entry keeps at least 3:1 contrast against the background (WCAG 1.4.11),
 * both as a stroke and as a fill painted at `fillOpacity` 0.85.
 *
 * Entry N is the same hue family in the light and dark palettes, so a series
 * keeps its identity when the theme changes. Comments show stroke contrast.
 *
 * @experimental
 */
export const lightPalette: ReadonlyArray<string> = [
  '#2775e8', //  1 Blue       4.38:1
  '#b65900', //  2 Orange     4.75:1
  '#007c59', //  3 Aqua       5.21:1
  '#ae3b73', //  4 Rose       5.72:1
  '#6f56b3', //  5 Violet     5.74:1
  '#0582a1', //  6 Sky        4.45:1
  '#b2392b', //  7 Red        5.98:1
  '#568b28', //  8 Green      4.10:1
  '#723984', //  9 Purple     7.97:1
  '#00928e', // 10 Teal       3.82:1
  '#ae7500', // 11 Amber      3.93:1
  '#b862a7', // 12 Plum       3.93:1
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
 * @experimental
 */
export const lightTheme: RechartsTheme = {
  graphicalItems: lightPalette.map(toGraphicalItem),
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
