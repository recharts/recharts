import * as React from 'react';

import { RadialBarChart as OriginalRadialBarChart } from '../chart/RadialBarChart';
import { RadarChart as OriginalRadarChart } from '../chart/RadarChart';
import { PieChart as OriginalPieChart } from '../chart/PieChart';
import { RadialBarProps } from '../polar/RadialBar';
import { Props as PolarAngleAxisProps } from '../polar/PolarAngleAxis';
import { Props as PolarRadiusAxisProps } from '../polar/PolarRadiusAxis';
import { Props as RadarProps } from '../polar/Radar';
import { Props as PieProps } from '../polar/Pie';
import { PolarChartProps } from './types';
import { TooltipProps } from '../component/Tooltip';
import { NameType, ValueType } from '../component/DefaultTooltipContent';

export type TypedCentricChartContext<TData, TCategorical, TNumerical, TComponents> = {
  RadarChart: React.ComponentType<Omit<PolarChartProps<TData>, 'layout'>>;
} & Omit<
  {
    [K in keyof TComponents]: K extends 'PolarAngleAxis'
      ? React.ComponentType<PolarAngleAxisProps<TData, TCategorical>>
      : K extends 'PolarRadiusAxis'
        ? React.ComponentType<PolarRadiusAxisProps<TData, TNumerical>>
        : K extends 'RadialBar'
          ? React.ComponentType<RadialBarProps<TData, TNumerical>>
          : K extends 'Radar'
            ? React.ComponentType<RadarProps<TData, TNumerical>>
            : K extends 'Pie'
              ? React.ComponentType<PieProps<TData, TNumerical>>
              : K extends 'Tooltip'
                ? React.ComponentType<TooltipProps<Extract<TNumerical, ValueType>, Extract<keyof TData, NameType>>>
                : TComponents[K];
  },
  'RadialBar' | 'RadialBarChart' | 'Pie' | 'PieChart'
>;

export type TypedRadialChartContext<TData, TCategorical, TNumerical, TComponents> = {
  RadialBarChart: React.ComponentType<Omit<PolarChartProps<TData>, 'layout'>>;
  PieChart: React.ComponentType<Omit<PolarChartProps<TData>, 'layout'>>;
} & Omit<
  {
    [K in keyof TComponents]: K extends 'PolarAngleAxis'
      ? React.ComponentType<PolarAngleAxisProps<TData, TNumerical>>
      : K extends 'PolarRadiusAxis'
        ? React.ComponentType<PolarRadiusAxisProps<TData, TCategorical>>
        : K extends 'RadialBar'
          ? React.ComponentType<RadialBarProps<TData, TNumerical>>
          : K extends 'Radar'
            ? React.ComponentType<RadarProps<TData, TNumerical>>
            : K extends 'Pie'
              ? React.ComponentType<PieProps<TData, TNumerical>>
              : K extends 'Tooltip'
                ? React.ComponentType<TooltipProps<Extract<TNumerical, ValueType>, Extract<keyof TData, NameType>>>
                : TComponents[K];
  },
  'Radar' | 'RadarChart'
>;

export type NoRadial<T> = 'RadialBar' extends keyof T
  ? never
  : 'RadialBarChart' extends keyof T
    ? never
    : 'Pie' extends keyof T
      ? never
      : 'PieChart' extends keyof T
        ? never
        : T;

export type NoCentric<T> = 'Radar' extends keyof T ? never : 'RadarChart' extends keyof T ? never : T;

/**
 * Creates a typed context for centric Polar charts.
 *
 * **Motivation:**
 * Recharts components fall back to `any` by default. While explicit typing using Generics works per-component,
 * it becomes tedious and error-prone across an entire chart.
 *
 * This Chart Helper allows you to perfectly align your data properties and ensure all your charts and axes work in harmony.
 * Once you define the helper with your generic requirements, all returned components strictly enforce your data structure,
 * catching `dataKey` typos and shape errors early.
 *
 * **Layout Binding:**
 * Curries chart definitions to strictly bind `layout="centric"` prop behavior statically onto components.
 * By wrapping the chart implementations, it completely masks the `layout` prop on initialization to prevent regressions.
 * Evaluates `TComponents` generics at compile-time to reject radial-only elements natively (`RadialBar`, `Pie`, etc.)
 *
 * @example
 * ```tsx
 * // 1. Lock in the Generics: Data = MyData
 * const TypedCentric = createCentricChart<MyData, string, number>()({
 *   RadarChart,
 *   Radar,
 * });
 * // 2. `layout` is permanently bound to "centric".
 * // 3. Passing `Pie` or `RadialBar` into the components map will explicitly trigger a TS error.
 * ```
 *
 * @since 3.8
 * @see {@link https://recharts.github.io/en-US/guide/typescript/ Guide: Strong typing for Recharts components}
 */
export function createCentricChart<TData, TCategorical = string, TNumerical = number>() {
  return function withComponents<TComponents extends Record<string, any>>(components: NoRadial<TComponents>) {
    return {
      RadarChart: (props: Omit<PolarChartProps<TData>, 'layout'>) => <OriginalRadarChart {...props} layout="centric" />,
      ...components,
    } as unknown as TypedCentricChartContext<TData, TCategorical, TNumerical, TComponents>;
  };
}

/**
 * Creates a typed context for radial Polar charts.
 *
 * **Motivation:**
 * Recharts components fall back to `any` by default. While explicit typing using Generics works per-component,
 * it becomes tedious and error-prone across an entire chart.
 *
 * This Chart Helper allows you to perfectly align your data properties and ensure all your charts and layers work in harmony.
 * Once you define the helper with your generic requirements, all returned components strictly enforce your data structure,
 * catching `dataKey` typos and shape errors early.
 *
 * **Layout Binding:**
 * Curries chart definitions to strictly bind `layout="radial"` prop behavior statically onto components.
 * By wrapping the chart implementations, it completely masks the `layout` prop on initialization to prevent runtime faults.
 * Evaluates `TComponents` generics at compile-time to reject centric-only elements natively (`Radar`, `RadarChart`, etc.)
 *
 * @example
 * ```tsx
 * // 1. Lock in the Generics: Data = MyData
 * const TypedRadial = createRadialChart<MyData, string, number>()({
 *   RadialBarChart,
 *   RadialBar,
 * });
 * // 2. `layout` is permanently bound to "radial".
 * // 3. Passing `Radar` or `RadarChart` into the components map will explicitly trigger a TS error.
 * ```
 *
 * @since 3.8
 * @see {@link https://recharts.github.io/en-US/guide/typescript/ Guide: Strong typing for Recharts components}
 */
export function createRadialChart<TData, TCategorical = string, TNumerical = number>() {
  return function withComponents<TComponents extends Record<string, any>>(components: NoCentric<TComponents>) {
    return {
      RadialBarChart: (props: Omit<PolarChartProps<TData>, 'layout'>) => (
        <OriginalRadialBarChart {...props} layout="radial" />
      ),
      PieChart: (props: Omit<PolarChartProps<TData>, 'layout'>) => <OriginalPieChart {...props} layout="radial" />,
      ...components,
    } as unknown as TypedRadialChartContext<TData, TCategorical, TNumerical, TComponents>;
  };
}
