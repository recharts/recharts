import { GraphicalItemStyle, RechartsTheme } from './RechartsTheme';

const backgroundColor = '#18181b';
const border = '1px solid #71717a';
const borderRadius = 4;
const padding = '0.5ex';

/**
 * Categorical series colors for a #18181b background.
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
export const darkPalette: ReadonlyArray<string> = [
  '#5396ff', //  1 Blue       6.05:1
  '#e97e2b', //  2 Orange     6.31:1
  '#46d09f', //  3 Aqua       9.10:1
  '#e683ad', //  4 Rose       6.93:1
  '#b8a4fe', //  5 Violet     8.25:1
  '#0bb1da', //  6 Sky        7.02:1
  '#ff9180', //  7 Red        8.11:1
  '#79b14e', //  8 Green      6.93:1
  '#ac71c0', //  9 Purple     4.96:1
  '#01a19c', // 10 Teal       5.55:1
  '#ffc470', // 11 Amber      11.29:1
  '#ffaaec', // 12 Plum       10.30:1
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
 * Dark mode theme
 *
 * @experimental
 */
export const darkTheme: RechartsTheme = {
  graphicalItems: darkPalette.map(toGraphicalItem),
  barBackground: {
    fill: '#27272a',
  },
  brush: {
    fill: '#3f3f46',
    stroke: '#d4d4d8',
  },
  axis: {
    stroke: '#d4d4d8',
  },
  errorBar: {
    stroke: '#d4d4d8',
    strokeWidth: 1.5,
  },
  grid: {
    stroke: '#3f3f46',
    strokeDasharray: '3 3',
    fill: 'none',
  },
  reference: {
    stroke: '#a1a1aa',
    strokeWidth: 1,
    fill: '#3f3f46',
    fillOpacity: 0.3,
  },
  cursor: {
    stroke: '#3f3f46',
    fill: '#3f3f46',
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
    color: '#f4f4f5',
  },
};
