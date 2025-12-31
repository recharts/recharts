import * as d3Scales from 'victory-vendor/d3-scale';
import { CustomScaleDefinition } from './CustomScaleDefinition';
import { CategoricalDomainItem, D3ScaleType } from '../types';
import { AxisRange } from '../../state/selectors/axisSelectors';
import { upperFirst } from '../DataUtils';

/**
 * This is internal representation of scale used in Recharts.
 * Users will provide CustomScaleDefinition or a string, which we will parse into RechartsScale.
 * Most importantly, RechartsScale is fully immutable - there are no setters that mutate the scale in place.
 * This is important for React integration - if the scale changes, we want to trigger re-renders.
 * Mutating the scale in place would not trigger re-renders, leading to stale UI.
 */
export interface RechartsScale<Domain extends CategoricalDomainItem = CategoricalDomainItem> {
  /**
   * Returns the scale's current domain.
   * The domain could be:
   * - in categorical scales: an array of strings or categories
   * - in continuous scales: tuple of two numbers: [min, max]
   */
  domain(): ReadonlyArray<Domain>;

  /**
   * Returns the scale’s current range.
   *
   * This should be a readonly tuple of two numbers: [min, max]
   * and so a better type would be `readonly [number, number]` but again - breaking changes,
   * so let's keep that for 4.0.
   */
  range(): ReadonlyArray<number>;

  /**
   * Returns the minimum value from the range.
   */
  rangeMin(): number;

  /**
   * Returns the maximum value from the range.
   */
  rangeMax(): number;

  /**
   * Returns true if the given value is within the scale's range.
   * @param value
   */
  isInRange(value: number): boolean;

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
   */
  map(input: unknown, options?: { position?: BandPosition }): number | undefined;
}

/**
 * Position within a band for banded scales.
 * In scales that are not banded, this parameter is ignored.
 *
 * @inline
 */
export type BandPosition = 'start' | 'middle' | 'end';

function getD3ScaleFromType<Domain extends CategoricalDomainItem = CategoricalDomainItem>(
  realScaleType: D3ScaleType,
): CustomScaleDefinition<Domain> | undefined {
  if (realScaleType in d3Scales) {
    // @ts-expect-error we should do better type verification here
    return d3Scales[realScaleType]();
  }
  const name = `scale${upperFirst(realScaleType)}`;
  if (name in d3Scales) {
    // @ts-expect-error we should do better type verification here
    return d3Scales[name]();
  }
  return undefined;
}

export function d3ScaleToRechartsScale<Domain extends CategoricalDomainItem = CategoricalDomainItem>(
  d3Scale: CustomScaleDefinition<Domain>,
): RechartsScale<Domain> {
  const ticksFn = d3Scale.ticks;
  const bandwidthFn = d3Scale.bandwidth;
  const d3Range: ReadonlyArray<number> = d3Scale.range();
  const range: [number, number] = [Math.min(...d3Range), Math.max(...d3Range)];
  return {
    domain: () => d3Scale.domain(),
    range: () => range,
    rangeMin: () => range[0],
    rangeMax: () => range[1],
    isInRange(value: number): boolean {
      const first = range[0];
      const last = range[1];
      return first <= last ? value >= first && value <= last : value >= last && value <= first;
    },
    bandwidth: bandwidthFn ? () => bandwidthFn.call(d3Scale) : undefined,
    ticks: ticksFn ? (count: number | undefined) => ticksFn.call(d3Scale, count) : undefined,
    map: (input: Domain, options?: { position?: BandPosition }) => {
      let baseValue = d3Scale(input);
      if (baseValue == null) {
        return undefined;
      }
      if (d3Scale.bandwidth && options?.position) {
        const bandWidth = d3Scale.bandwidth();
        switch (options.position) {
          case 'middle':
            baseValue += bandWidth / 2;
            break;
          case 'end':
            baseValue += bandWidth;
            break;
          default:
            // 'start' requires no adjustment
            break;
        }
      }
      return baseValue;
    },
  };
}

/**
 * Converts external scale definition into internal RechartsScale definition.
 * @param scale custom function scale - if you have the string, use `combineRealScaleType` first
 * @param axisDomain
 * @param axisRange
 */
export function rechartsScaleFactory(
  scale:
    | CustomScaleDefinition
    | CustomScaleDefinition<string>
    | CustomScaleDefinition<number>
    | CustomScaleDefinition<Date>,
  axisDomain: ReadonlyArray<CategoricalDomainItem>,
  axisRange: AxisRange,
): RechartsScale;
export function rechartsScaleFactory(
  scale: D3ScaleType,
  axisDomain: ReadonlyArray<CategoricalDomainItem>,
  axisRange: AxisRange,
): RechartsScale;
export function rechartsScaleFactory(
  scale: D3ScaleType | undefined,
  axisDomain: ReadonlyArray<CategoricalDomainItem>,
  axisRange: AxisRange,
): RechartsScale | undefined;
export function rechartsScaleFactory(
  scale: undefined,
  axisDomain: ReadonlyArray<CategoricalDomainItem>,
  axisRange: AxisRange,
): undefined;
export function rechartsScaleFactory<Domain extends CategoricalDomainItem = CategoricalDomainItem>(
  scale: D3ScaleType | CustomScaleDefinition<Domain> | undefined,
  axisDomain: ReadonlyArray<Domain>,
  axisRange: AxisRange,
): RechartsScale<Domain> | undefined {
  if (typeof scale === 'function') {
    return d3ScaleToRechartsScale(scale.copy().domain(axisDomain).range(axisRange));
  }
  if (scale == null) {
    return undefined;
  }
  const d3ScaleFunction: CustomScaleDefinition<Domain> | undefined = getD3ScaleFromType(scale);
  if (d3ScaleFunction == null) {
    return undefined;
  }
  d3ScaleFunction.domain(axisDomain).range(axisRange);
  return d3ScaleToRechartsScale(d3ScaleFunction);
}
