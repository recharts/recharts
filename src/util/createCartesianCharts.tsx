import * as React from 'react';

import { AreaChart as OriginalAreaChart } from '../chart/AreaChart';
import { BarChart as OriginalBarChart } from '../chart/BarChart';
import { LineChart as OriginalLineChart } from '../chart/LineChart';
import { ComposedChart as OriginalComposedChart } from '../chart/ComposedChart';
import { ScatterChart as OriginalScatterChart } from '../chart/ScatterChart';
import { FunnelChart as OriginalFunnelChart } from '../chart/FunnelChart';

import { Props as XAxisProps } from '../cartesian/XAxis';
import { Props as YAxisProps } from '../cartesian/YAxis';
import { Props as ZAxisProps } from '../cartesian/ZAxis';
import { Props as AreaProps } from '../cartesian/Area';
import { Props as BarProps } from '../cartesian/Bar';
import { Props as LineProps } from '../cartesian/Line';
import { Props as ScatterProps } from '../cartesian/Scatter';
import { Props as FunnelProps } from '../cartesian/Funnel';
import { CartesianChartProps } from './types';

export type TypedHorizontalChartContext<TData, TCategorical, TNumerical, TComponents> = {
  AreaChart: React.ComponentType<Omit<CartesianChartProps<TData>, 'layout'>>;
  BarChart: React.ComponentType<Omit<CartesianChartProps<TData>, 'layout'>>;
  LineChart: React.ComponentType<Omit<CartesianChartProps<TData>, 'layout'>>;
  ComposedChart: React.ComponentType<Omit<CartesianChartProps<TData>, 'layout'>>;
  ScatterChart: React.ComponentType<Omit<CartesianChartProps<TData>, 'layout'>>;
} & Omit<
  {
    [K in keyof TComponents]: K extends 'XAxis'
      ? React.ComponentType<XAxisProps<TData, TCategorical>>
      : K extends 'YAxis'
        ? React.ComponentType<YAxisProps<TData, TNumerical>>
        : K extends 'ZAxis'
          ? React.ComponentType<ZAxisProps<TData, TNumerical>>
          : K extends 'Area'
            ? React.ComponentType<AreaProps<TData, TNumerical>>
            : K extends 'Bar'
              ? React.ComponentType<BarProps<TData, TNumerical>>
              : K extends 'Line'
                ? React.ComponentType<LineProps<TData, TNumerical>>
                : K extends 'Scatter'
                  ? React.ComponentType<ScatterProps<TData, TNumerical>>
                  : TComponents[K];
  },
  'Funnel' | 'FunnelChart'
>;

export type TypedVerticalChartContext<TData, TCategorical, TNumerical, TComponents> = {
  AreaChart: React.ComponentType<Omit<CartesianChartProps<TData>, 'layout'>>;
  BarChart: React.ComponentType<Omit<CartesianChartProps<TData>, 'layout'>>;
  LineChart: React.ComponentType<Omit<CartesianChartProps<TData>, 'layout'>>;
  ComposedChart: React.ComponentType<Omit<CartesianChartProps<TData>, 'layout'>>;
  ScatterChart: React.ComponentType<Omit<CartesianChartProps<TData>, 'layout'>>;
  FunnelChart: React.ComponentType<Omit<CartesianChartProps<TData>, 'layout'>>;
} & {
  [K in keyof TComponents]: K extends 'XAxis'
    ? React.ComponentType<XAxisProps<TData, TNumerical>>
    : K extends 'YAxis'
      ? React.ComponentType<YAxisProps<TData, TCategorical>>
      : K extends 'ZAxis'
        ? React.ComponentType<ZAxisProps<TData, TNumerical>>
        : K extends 'Area'
          ? React.ComponentType<AreaProps<TData, TNumerical>>
          : K extends 'Bar'
            ? React.ComponentType<BarProps<TData, TNumerical>>
            : K extends 'Line'
              ? React.ComponentType<LineProps<TData, TNumerical>>
              : K extends 'Scatter'
                ? React.ComponentType<ScatterProps<TData, TNumerical>>
                : K extends 'Funnel'
                  ? React.ComponentType<FunnelProps<TData, TNumerical>>
                  : TComponents[K];
};

const createCartesianCharts = <TData,>(layout: 'horizontal' | 'vertical') => ({
  AreaChart: (props: Omit<CartesianChartProps<TData>, 'layout'>) => <OriginalAreaChart {...props} layout={layout} />,
  BarChart: (props: Omit<CartesianChartProps<TData>, 'layout'>) => <OriginalBarChart {...props} layout={layout} />,
  LineChart: (props: Omit<CartesianChartProps<TData>, 'layout'>) => <OriginalLineChart {...props} layout={layout} />,
  ComposedChart: (props: Omit<CartesianChartProps<TData>, 'layout'>) => (
    <OriginalComposedChart {...props} layout={layout} />
  ),
  ScatterChart: (props: Omit<CartesianChartProps<TData>, 'layout'>) => (
    <OriginalScatterChart {...props} layout={layout} />
  ),
});

type NoFunnel<T> = 'Funnel' extends keyof T ? never : 'FunnelChart' extends keyof T ? never : T;

/**
 * Creates a typed context for horizontal Cartesian charts.
 *
 * **Motivation:**
 * Recharts components fall back to `any` by default. While explicit typing using Generics (e.g. `<Area<MyDataType, number>>`)
 * works per-component, it becomes tedious and error-prone across an entire chart.
 *
 * This Chart Helper allows you to perfectly align your data properties and ensure all your charts, axes, and lines work in harmony.
 * Once you define the helper with your generic requirements, all returned components strictly enforce your data structure,
 * catching `dataKey` typos and shape errors early.
 *
 * **Layout Binding:**
 * Curries the chart definition to statically bind the `layout="horizontal"` property at the component level.
 * By stripping `layout` from the configuration options of generated wrapper components, developers avoid accidentally
 * overriding chart alignments. Evaluates `TComponents` generics at compile-time to reject strictly vertical components
 * natively (`Funnel`, `FunnelChart`) from being passed.
 *
 * @example
 * ```tsx
 * // 1. Lock in the Generics: Data = MyData, X-Axis = string, Y-Axis = number
 * const TypedCharts = createHorizontalChart<MyData, string, number>()({
 *   AreaChart,
 *   Area,
 *   XAxis,
 *   YAxis,
 * });
 * // 2. TypedCharts.AreaChart is now strictly horizontal.
 * // 3. TypedCharts.Area strictly expects string/number keys matching MyData.
 * ```
 *
 * @since 3.8
 * @see {@link https://recharts.github.io/en-US/guide/typescript/}
 */
export function createHorizontalChart<TData, TCategorical = string, TNumerical = number>() {
  return function withComponents<TComponents extends Record<string, any>>(components: NoFunnel<TComponents>) {
    return {
      ...createCartesianCharts<TData>('horizontal'),
      ...components,
    } as unknown as TypedHorizontalChartContext<TData, TCategorical, TNumerical, TComponents>;
  };
}

/**
 * Creates a typed context for vertical Cartesian charts.
 *
 * **Motivation:**
 * Recharts components fall back to `any` by default. While explicit typing using Generics (e.g. `<Area<MyDataType, number>>`)
 * works per-component, it becomes tedious and error-prone across an entire chart.
 *
 * This Chart Helper allows you to perfectly align your data properties and ensure all your charts, axes, and lines work in harmony.
 * Once you define the helper with your generic requirements, all returned components strictly enforce your data structure,
 * catching `dataKey` typos and shape errors early.
 *
 * **Layout Binding:**
 * Curries the chart definition to statically bind the `layout="vertical"` property at the component level.
 * By stripping `layout` from the configuration options of generated wrapper components, developers avoid accidentally
 * overriding chart alignments. Natively supports strictly vertical components like `Funnel` and `FunnelChart`.
 *
 * @example
 * ```tsx
 * // 1. Lock in the Generics: Data = MyData, X-Axis = number, Y-Axis = string
 * const TypedCharts = createVerticalChart<MyData, number, string>()({
 *   BarChart,
 *   Bar,
 *   Funnel,
 *   XAxis,
 *   YAxis,
 * });
 * // 2. TypedCharts.BarChart is now strictly vertical.
 * // 3. `Funnel` evaluates safely inside vertical contexts exclusively and enforces MyData limits.
 * ```
 *
 * @since 3.8
 * @see {@link https://recharts.github.io/en-US/guide/typescript/}
 */
export function createVerticalChart<TData, TCategorical = string, TNumerical = number>() {
  return function withComponents<TComponents extends Record<string, any>>(components: TComponents) {
    return {
      ...createCartesianCharts<TData>('vertical'),
      FunnelChart: (props: Omit<CartesianChartProps<TData>, 'layout'>) => (
        <OriginalFunnelChart {...props} layout="vertical" />
      ),
      ...components,
    } as unknown as TypedVerticalChartContext<TData, TCategorical, TNumerical, TComponents>;
  };
}
