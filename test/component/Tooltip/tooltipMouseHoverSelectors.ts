/*
 * Different charts respond differently to mouse enter/mouse hover events.
 * Some charts are showing tooltip optimistically; hover anywhere over the chart,
 * and recharts will show tooltip with whatever information is the closest.
 *
 * Other charts require you to hover _precisely_ over the graphical element,
 * and will not try to guess, at all.
 *
 * And so on. Use these selectors to hover over things to trigger tooltips.
 */
export type MouseHoverTooltipTriggerSelector = string;

export const areaChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-wrapper';
/**
 * By default, BarChart renders tooltip when hovering anywhere in the chart.
 * It uses the closest XAxis position and shows tooltip with all bars at that point.
 */
export const barChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-wrapper';
export const barChartItemMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-bar-rectangle';
/**
 * With <Tooltip shared={false}> BarChart behaves differently;
 * it no longer shows tooltip when hovering anywhere in the background,
 * instead it only reacts to hovering over individual Bars.
 */
export const barMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-bar-rectangle';
export const lineChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-wrapper';
export const composedChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-wrapper';
// hovering over the whole chart does nothing; Pie requires hovering over individual segments
export const pieChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-pie-sector';
export const radarChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-wrapper';
/**
 * By default, RadialBarChart renders tooltip when hovering anywhere in the chart.
 * It uses the closest XAxis position and shows tooltip with all radial bars at that point.
 */
export const radialBarChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-wrapper';
/**
 * With <Tooltip shared={false}> RadialBarChart behaves differently;
 * it no longer shows tooltip when hovering anywhere in the background,
 * instead it only reacts to hovering over individual RadialBars.
 */
export const radialBarMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-radial-bar-sector';
export const sankeyNodeMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector =
  '.recharts-sankey-nodes .recharts-rectangle';
export const sankeyLinkMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector =
  '.recharts-sankey-links .recharts-sankey-link';
export const scatterChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-scatter-symbol';
export const sunburstChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-sector';
export const treemapNodeChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector =
  '.recharts-treemap-depth-2 .recharts-rectangle';
export const funnelChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-funnel-trapezoid';
