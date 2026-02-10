import type { ComponentType } from 'react';
import type { Props as AreaProps } from '../cartesian/Area';
import type { Props as BarProps } from '../cartesian/Bar';
import type { Props as LineProps } from '../cartesian/Line';
import type { Props as ScatterProps } from '../cartesian/Scatter';
import type { Props as XAxisProps } from '../cartesian/XAxis';
import type { Props as YAxisProps } from '../cartesian/YAxis';
import type { Props as ZAxisProps } from '../cartesian/ZAxis';
import type { Props as FunnelProps } from '../cartesian/Funnel';
import type { Props as PieProps } from '../polar/Pie';
import type { Props as RadarProps } from '../polar/Radar';
import type { RadialBarProps } from '../polar/RadialBar';
import type { CartesianChartProps, PolarChartProps } from './types';

/**
 * A mapped type that transforms a map of components to their typed versions.
 *
 * @template T The map of components
 * @template D The data point type
 * @template V The value axis type
 * @template C The category axis type (unused for now but reserved for future)
 */
export type TypedComponents<T, D, V = any, C = any> = {
  [K in keyof T]: T[K] extends ComponentType<AreaProps<any, any>>
    ? ComponentType<AreaProps<D, V>>
    : T[K] extends ComponentType<BarProps<any, any>>
      ? ComponentType<BarProps<D, V>>
      : T[K] extends ComponentType<LineProps<any, any>>
        ? ComponentType<LineProps<D, V>>
        : T[K] extends ComponentType<ScatterProps<any, any>>
          ? ComponentType<ScatterProps<D, V>>
          : T[K] extends ComponentType<XAxisProps<any>>
            ? ComponentType<XAxisProps<D>>
            : T[K] extends ComponentType<YAxisProps<any>>
              ? ComponentType<YAxisProps<D>>
              : T[K] extends ComponentType<ZAxisProps>
                ? ComponentType<ZAxisProps>
                : T[K] extends ComponentType<FunnelProps<any, any>>
                  ? ComponentType<FunnelProps<D, V>>
                  : T[K] extends ComponentType<PieProps<any, any>>
                    ? ComponentType<PieProps<D, V>>
                    : T[K] extends ComponentType<RadarProps<any, any>>
                      ? ComponentType<RadarProps<D, V>>
                      : T[K] extends ComponentType<RadialBarProps<any, any>>
                        ? ComponentType<RadialBarProps<D, V>>
                        : T[K] extends ComponentType<CartesianChartProps<any>>
                          ? ComponentType<CartesianChartProps<D>>
                          : T[K] extends ComponentType<PolarChartProps<any>>
                            ? ComponentType<PolarChartProps<D>>
                            : T[K]; // Fallback to original if no match
};

/**
 * Creates a set of strictly typed Recharts components.
 * This function does not import any components itself, preserving tree-shaking.
 * You pass the components you want to use, and it returns them typed with your data.
 *
 * @example
 * import { Area, XAxis, YAxis } from 'recharts';
 * const { Area: MyArea, XAxis: MyXAxis } = createTypedComponents<MyData>({ Area, XAxis, YAxis });
 *
 * @param components An object containing the Recharts components to type
 * @returns The same object, cast to the typed versions
 */
export function createTypedComponents<DataPointType, ValueAxisType = any, CategoryAxisType = any, T = any>(
  components: T,
): TypedComponents<T, DataPointType, ValueAxisType, CategoryAxisType> {
  return components as any;
}
