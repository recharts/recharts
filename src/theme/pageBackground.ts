import { RechartsTheme } from './RechartsTheme';

/**
 * Returns the color that Recharts uses to draw gaps and halos that look like cut-outs.
 *
 * An explicit `pageBackground` always wins.
 * Otherwise, if the theme paints `chart.backgroundColor`, that color is what sits behind the chart, so it is used instead.
 * `pageBackground` never paints `chart.backgroundColor`: Recharts only paints a background when asked to.
 *
 * @param theme the active theme
 * @returns the effective page background, or undefined if the theme sets neither
 */
export function getEffectivePageBackground(
  theme: Pick<RechartsTheme, 'chart' | 'pageBackground'> | undefined,
): string | undefined {
  if (theme == null) {
    return undefined;
  }
  if (theme.pageBackground != null) {
    return theme.pageBackground;
  }
  const chartBackgroundColor = theme.chart?.backgroundColor;
  return typeof chartBackgroundColor === 'string' ? chartBackgroundColor : undefined;
}
