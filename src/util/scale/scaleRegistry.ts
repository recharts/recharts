import { scaleBand, scaleLinear, scalePoint } from 'victory-vendor/d3-scale';
import { CategoricalDomainItem } from '../types';
import { CustomScaleDefinition } from './CustomScaleDefinition';
import { upperFirst } from '../DataUtils';
import { warn } from '../LogUtils';

// a d3 scale factory, such as `scaleLog` from `d3-scale`
type ScaleFactory = () => unknown;

/*
 * Scales that `scale` names resolve to, keyed by their d3 export name (`scaleLog`).
 * Only the scales `scale="auto"` picks are built in, so an app bundles the other d3 scales,
 * and d3's time formatting for `time` and `utc`, only when it registers them.
 */
const scales = new Map<string, ScaleFactory>([
  ['scaleLinear', scaleLinear],
  ['scaleBand', scaleBand],
  ['scalePoint', scalePoint],
]);

/**
 * Makes scales available to the `scale` prop by name.
 *
 * `linear`, `band` and `point` are built in. Any other name, such as `scale="log"` or `scale="time"`,
 * needs its d3 scale registered first, under its d3 export name. Passing a scale function to `scale`
 * directly needs no registration.
 *
 * @example
 * import { scaleLog, scaleTime } from 'd3-scale';
 * registerScales({ scaleLog, scaleTime });
 *
 * @example
 * // every d3 scale, as before scales had to be registered
 * import * as d3Scale from 'd3-scale';
 * registerScales(d3Scale);
 *
 * @param factories d3 scale factories keyed by their export names; other keys are ignored
 * @since 4.0
 * @public
 */
export function registerScales(factories: Readonly<Record<string, unknown>>): void {
  Object.entries(factories).forEach(([name, factory]) => {
    if (name.startsWith('scale') && typeof factory === 'function') {
      // @ts-expect-error a d3 scale factory takes optional arguments
      scales.set(name, factory);
    }
  });
}

const d3ScaleName = (name: string) => `scale${upperFirst(name)}`;

const warned = new Set<string>();

/**
 * Whether `scale` can resolve this name. An unknown or unregistered name warns once in development.
 */
export function isRegisteredScaleName(name: string): boolean {
  if (scales.has(d3ScaleName(name))) {
    return true;
  }
  if (!warned.has(name)) {
    warned.add(name);
    warn(
      false,
      'Scale "%s" is not registered, so a point scale is used. Register it with registerScales({ %s }) from d3-scale, or pass the scale function to the `scale` prop.',
      name,
      d3ScaleName(name),
    );
  }
  return false;
}

/**
 * A new scale for a registered name, given as `log` or `scaleLog`.
 */
export function createRegisteredScale<Domain extends CategoricalDomainItem = CategoricalDomainItem>(
  name: string,
): CustomScaleDefinition<Domain> | undefined {
  const factory = scales.get(name) ?? scales.get(d3ScaleName(name));
  // @ts-expect-error d3 scales implement CustomScaleDefinition
  return factory?.();
}
