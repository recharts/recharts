import * as React from 'react';

import { RadialBarChart as OriginalRadialBarChart } from '../chart/RadialBarChart';
import { RadarChart as OriginalRadarChart } from '../chart/RadarChart';
import { RadialBarProps } from '../polar/RadialBar';
import { Props as PolarAngleAxisProps } from '../polar/PolarAngleAxis';
import { Props as PolarRadiusAxisProps } from '../polar/PolarRadiusAxis';
import { Props as RadarProps } from '../polar/Radar';
import { PolarChartProps } from './types';

export type TypedCentricChartContext<TData, TCategorical, TNumerical, TComponents> = {
  RadialBarChart: React.ComponentType<Omit<PolarChartProps<TData>, 'layout'>>;
  RadarChart: React.ComponentType<Omit<PolarChartProps<TData>, 'layout'>>;
} & {
  [K in keyof TComponents]: K extends 'PolarAngleAxis'
    ? React.ComponentType<PolarAngleAxisProps<TData, TCategorical>>
    : K extends 'PolarRadiusAxis'
      ? React.ComponentType<PolarRadiusAxisProps<TData, TNumerical>>
      : K extends 'RadialBar'
        ? React.ComponentType<RadialBarProps>
        : K extends 'Radar'
          ? React.ComponentType<RadarProps>
          : TComponents[K];
};

export type TypedRadialChartContext<TData, TCategorical, TNumerical, TComponents> = {
  RadialBarChart: React.ComponentType<Omit<PolarChartProps<TData>, 'layout'>>;
  RadarChart: React.ComponentType<Omit<PolarChartProps<TData>, 'layout'>>;
} & {
  [K in keyof TComponents]: K extends 'PolarAngleAxis'
    ? React.ComponentType<PolarAngleAxisProps<TData, TNumerical>>
    : K extends 'PolarRadiusAxis'
      ? React.ComponentType<PolarRadiusAxisProps<TData, TCategorical>>
      : K extends 'RadialBar'
        ? React.ComponentType<RadialBarProps>
        : K extends 'Radar'
          ? React.ComponentType<RadarProps>
          : TComponents[K];
};

const createPolarCharts = <TData,>(layout: 'radial' | 'centric') => ({
  RadialBarChart: (props: Omit<PolarChartProps<TData>, 'layout'>) => (
    <OriginalRadialBarChart {...props} layout={layout} />
  ),
  RadarChart: (props: Omit<PolarChartProps<TData>, 'layout'>) => <OriginalRadarChart {...props} layout={layout} />,
});

export function createCentricChart<TData, TCategorical = string, TNumerical = number>() {
  return function withComponents<TComponents extends Record<string, any>>(components: TComponents) {
    return {
      ...createPolarCharts<TData>('centric'),
      ...components,
    } as unknown as TypedCentricChartContext<TData, TCategorical, TNumerical, TComponents>;
  };
}

export function createRadialChart<TData, TCategorical = string, TNumerical = number>() {
  return function withComponents<TComponents extends Record<string, any>>(components: TComponents) {
    return {
      ...createPolarCharts<TData>('radial'),
      ...components,
    } as unknown as TypedRadialChartContext<TData, TCategorical, TNumerical, TComponents>;
  };
}
