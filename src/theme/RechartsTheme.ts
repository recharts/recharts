/**
 * Styling presets for Recharts components.
 * The theme can be used to customize the appearance of charts, including colors, fonts, and other visual properties.
 *
 * @experimental
 */
export interface RechartsTheme {
  grid: Partial<{
    stroke: string;
    strokeOpacity: number;
    strokeWidth: number;
    strokeDasharray: string | number | ReadonlyArray<number>;
    fillOpacity: number;
    fill: string;
  }>;
}
