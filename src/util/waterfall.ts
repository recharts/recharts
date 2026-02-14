/**
 * Utility for computing waterfall chart data.
 *
 * Waterfall charts show how sequential positive or negative values contribute
 * to a running total. Each bar starts where the previous one ended, and
 * optional "total" bars always start from zero.
 *
 * Since Recharts `<Bar>` supports range values (`[low, high]` arrays),
 * this utility transforms raw data into range values that produce correct
 * waterfall bar positions.
 *
 * @example
 * ```tsx
 * import { BarChart, Bar, XAxis, YAxis, Cell, computeWaterfallData } from 'recharts';
 *
 * const raw = [
 *   { name: 'Revenue', value: 100 },
 *   { name: 'Costs', value: -30 },
 *   { name: 'Tax', value: -15 },
 *   { name: 'Profit', value: 55, isTotal: true },
 * ];
 *
 * const data = computeWaterfallData({ data: raw, dataKey: 'value' });
 *
 * <BarChart data={data}>
 *   <XAxis dataKey="name" />
 *   <YAxis />
 *   <Bar dataKey="waterfallRange">
 *     {data.map((d, i) => (
 *       <Cell key={i} fill={d.value >= 0 ? '#00897B' : '#757575'} />
 *     ))}
 *   </Bar>
 * </BarChart>
 * ```
 */

export interface WaterfallOptions<T> {
  /**
   * The source data array. Each entry should have a numeric value and
   * optionally a boolean indicating whether it's a "total" bar.
   */
  data: ReadonlyArray<T>;

  /**
   * Key (or accessor) for the numeric value in each data entry.
   * Supports string keys or accessor functions.
   */
  dataKey: string | ((entry: T) => number);

  /**
   * Key (or accessor) for the boolean "isTotal" flag. Total bars always
   * start from zero rather than from the running total.
   *
   * @default undefined — no total bars
   */
  totalKey?: string | ((entry: T) => boolean);
}

export interface WaterfallDatum<T> {
  /**
   * The original data entry (all original fields preserved).
   */
  entry: T;

  /**
   * Range value `[barBottom, barTop]` for use as a Bar dataKey.
   * Recharts renders a bar spanning exactly these Y-axis values.
   */
  waterfallRange: [number, number];

  /**
   * The original signed value.
   */
  value: number;

  /**
   * Running total after this bar (useful for connecting lines or labels).
   */
  cumulativeValue: number;

  /**
   * Whether this is a total bar.
   */
  isTotal: boolean;
}

function resolveValue<T>(entry: T, key: string | ((entry: T) => number)): number {
  if (typeof key === 'function') {
    return key(entry);
  }
  return (entry as Record<string, unknown>)[key] as number;
}

function resolveBoolean<T>(entry: T, key: string | ((entry: T) => boolean) | undefined): boolean {
  if (key == null) {
    return false;
  }
  if (typeof key === 'function') {
    return key(entry);
  }
  return Boolean((entry as Record<string, unknown>)[key]);
}

/**
 * Transform raw data into waterfall chart data with range values.
 *
 * Each output entry contains a `waterfallRange: [barBottom, barTop]` field.
 * Use `"waterfallRange"` as the `dataKey` on a `<Bar>` component to render
 * bars at the correct floating positions.
 *
 * Non-total bars stack on a running total: positive bars sit above the running
 * total, negative bars hang below it. Total bars always span from 0 to their
 * value.
 *
 * All original data fields are preserved under the `entry` key, and also
 * spread onto the output object for easy access by other Recharts features
 * (XAxis dataKey, tooltips, etc.).
 */
export function computeWaterfallData<T extends Record<string, unknown>>(
  options: WaterfallOptions<T>,
): Array<T & WaterfallDatum<T>> {
  const { data, dataKey, totalKey } = options;
  const result: Array<T & WaterfallDatum<T>> = [];
  let runningTotal = 0;

  for (const entry of data) {
    const value = resolveValue(entry, dataKey);
    const isTotal = resolveBoolean(entry, totalKey);

    let barBottom: number, barTop: number;

    if (isTotal) {
      barBottom = Math.min(0, value);
      barTop = Math.max(0, value);
    } else if (value >= 0) {
      barBottom = runningTotal;
      barTop = runningTotal + value;
    } else {
      barBottom = runningTotal + value;
      barTop = runningTotal;
    }

    if (!isTotal) {
      runningTotal += value;
    }

    result.push({
      ...entry,
      entry,
      waterfallRange: [barBottom, barTop],
      value,
      cumulativeValue: runningTotal,
      isTotal,
    });
  }

  return result;
}
