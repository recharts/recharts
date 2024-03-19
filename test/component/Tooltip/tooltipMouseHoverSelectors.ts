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
export const barChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-wrapper';
export const lineChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-wrapper';
export const composedChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-wrapper';
// hovering over the whole chart does nothing; Pie requires hovering over individual segments
export const pieChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-pie-sector';
export const radarChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-wrapper';
export const radialBarChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-wrapper';
export const sankeyNodeChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector =
  '.recharts-sankey-nodes .recharts-rectangle';
export const scatterChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-scatter-symbol';
export const sankeyChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector =
  '.recharts-sankey-links .recharts-sankey-link';
export const sunburstChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector = '.recharts-sector';
export const treemapNodeChartMouseHoverTooltipSelector: MouseHoverTooltipTriggerSelector =
  '.recharts-treemap-depth-2 .recharts-rectangle';
