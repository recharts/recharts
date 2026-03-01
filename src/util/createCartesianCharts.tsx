import * as React from 'react';

import { AreaChart as OriginalAreaChart } from '../chart/AreaChart';
import { BarChart as OriginalBarChart } from '../chart/BarChart';
import { LineChart as OriginalLineChart } from '../chart/LineChart';
import { ComposedChart as OriginalComposedChart } from '../chart/ComposedChart';
import { ScatterChart as OriginalScatterChart } from '../chart/ScatterChart';

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
} & {
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
                : K extends 'Funnel'
                  ? React.ComponentType<FunnelProps<TData, TNumerical>>
                  : TComponents[K];
};

export type TypedVerticalChartContext<TData, TCategorical, TNumerical, TComponents> = {
  AreaChart: React.ComponentType<Omit<CartesianChartProps<TData>, 'layout'>>;
  BarChart: React.ComponentType<Omit<CartesianChartProps<TData>, 'layout'>>;
  LineChart: React.ComponentType<Omit<CartesianChartProps<TData>, 'layout'>>;
  ComposedChart: React.ComponentType<Omit<CartesianChartProps<TData>, 'layout'>>;
  ScatterChart: React.ComponentType<Omit<CartesianChartProps<TData>, 'layout'>>;
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

export function createHorizontalChart<TData, TCategorical = string, TNumerical = number>() {
  return function withComponents<TComponents extends Record<string, any>>(components: TComponents) {
    return {
      ...createCartesianCharts<TData>('horizontal'),
      ...components,
    } as unknown as TypedHorizontalChartContext<TData, TCategorical, TNumerical, TComponents>;
  };
}

export function createVerticalChart<TData, TCategorical = string, TNumerical = number>() {
  return function withComponents<TComponents extends Record<string, any>>(components: TComponents) {
    return {
      ...createCartesianCharts<TData>('vertical'),
      ...components,
    } as unknown as TypedVerticalChartContext<TData, TCategorical, TNumerical, TComponents>;
  };
}
