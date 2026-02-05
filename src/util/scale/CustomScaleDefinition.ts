import { CategoricalDomainItem } from '../types';

/**
 * A subset of d3-scale. This is the external representation;
 * This is the type that we expect from `axis.scale` props, if users want to provide custom scales.
 *
 * The actual d3 scales have many more methods, but we don't need them all.
 * Specifically we want to avoid all the setters
 * - immutable API is preferred in Recharts and mutating state will lead to hard-to-debug issues.
 *
 * @see {@link ScaleType} and {@link D3ScaleType} for string shortcuts that you can use instead of this interface.
 */
export interface CustomScaleDefinition<Domain extends CategoricalDomainItem = CategoricalDomainItem> {
  /**
   * Returns the scale's current domain.
   * The domain could be:
   * - in categorical scales: an array of strings or categories
   * - in continuous scales: tuple of two numbers: [min, max]
   */
  domain(): ReadonlyArray<Domain>;

  /**
   * Sets the domain of the scale.
   */
  domain(newDomain: ReadonlyArray<Domain>): this;

  /**
   * Returns the scale’s current range.
   */
  range(): ReadonlyArray<number>;

  /**
   * Sets the range of the scale.
   */
  range(newRange: ReadonlyArray<number>): this;

  /**
   * Returns an exact copy of this scale. Changes to this scale will not affect the returned scale, and vice versa.
   * We use this method in Recharts to ensure immutability - changes to the scale outside should not affect the internal state,
   * as they won't trigger re-renders in React.
   */
  copy(): CustomScaleDefinition<Domain>;

  /**
   * Returns width of each band.
   * Most scales are not banded, so this method is optional.
   * Banded scales (like scaleBand from d3-scale) will implement this method.
   */
  bandwidth?: () => number;
  /**
   * Quantitative (continuous) scales provide a ticks method that returns representative values from the scale’s domain.
   * Ordinal and band scales do not have this method.
   *
   * An optional count argument requests more or fewer ticks.
   * The number of ticks returned, however, is not necessarily equal to the requested count.
   *
   * @see {@link https://d3js.org/d3-scale/linear#linear_ticks}
   * @see {@link https://observablehq.com/@d3/scale-ticks}
   *
   * @param count number of ticks
   */
  ticks?: (count: number | undefined) => ReadonlyArray<number>;

  /**
   * Given an arbitrary input, returns the corresponding point derived from the output range if the input is in the scale's domain.
   * If the input is not included in the domain, returns undefined.
   *
   * @param input
   */
  (input: Domain): number | undefined;

  /**
   * Given a value from the range, returns the corresponding value from the domain.
   *
   * This method is optional, as not all scales provide an inverse mapping.
   * Linear and time scales typically do, while band and ordinal scales may not.
   */
  invert?(value: number): Domain | undefined;
}
