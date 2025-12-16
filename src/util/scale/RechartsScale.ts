import * as d3Scales from 'victory-vendor/d3-scale';
import { CustomScaleDefinition } from './CustomScaleDefinition';
import { CategoricalDomainItem, D3ScaleType } from '../types';
import { AxisRange } from '../../state/selectors/axisSelectors';
import { upperFirst } from '../DataUtils';
import { checkDomainOfScale } from '../ChartUtils';

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
   * Returns width of each band.
   * Most scales are not banded, so this method is optional.
   * Banded scales (like scaleBand from d3-scale) will implement this method.
   */
  bandwidth?: () => number;
  /**
   * https://d3js.org/d3-scale/linear#linear_ticks
   * @param count number of ticks
   */
  ticks?: (count: number | undefined) => ReadonlyArray<number>;

  /**
   * Given an arbitrary input, returns the corresponding point derived from the output range if the input is in the scale's domain.
   * If the input is not included in the domain, returns undefined.
   *
   * @param input
   */
  (input: unknown): number | undefined;
}

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

/**
 * Converts external scale definition into internal RechartsScale definition.
 * @param scale custom function scale - if you have the string, use `combineRealScaleType` first
 * @param axisDomain
 * @param axisRange
 */
export function makeRechartsScale<Domain extends CategoricalDomainItem = CategoricalDomainItem>(
  scale: D3ScaleType | CustomScaleDefinition<Domain> | undefined,
  axisDomain: ReadonlyArray<Domain>,
  axisRange: AxisRange,
): RechartsScale<Domain> | undefined {
  if (typeof scale === 'function') {
    return scale.copy().domain(axisDomain).range(axisRange);
  }
  if (scale == null) {
    return undefined;
  }
  const d3ScaleFunction: CustomScaleDefinition<Domain> | undefined = getD3ScaleFromType(scale);
  if (d3ScaleFunction == null) {
    return undefined;
  }
  d3ScaleFunction.domain(axisDomain).range(axisRange);
  /*
   * I don't like this function because it mutates the scale.
   * We should come up with a way to compute the domain up front.
   * Until then - let's keep this encapsulated inside this function
   * so it appears immutable from the outside.
   */
  checkDomainOfScale(d3ScaleFunction);
  return d3ScaleFunction;
}
