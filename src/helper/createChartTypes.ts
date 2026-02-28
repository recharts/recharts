import * as React from 'react';
import type { CartesianChartProps, CartesianLayout, PolarChartProps, PolarLayout } from '../util/types';
import type { Props as AreaProps } from '../cartesian/Area';
import type { Props as BarProps } from '../cartesian/Bar';
import type { Props as FunnelProps } from '../cartesian/Funnel';
import type { Props as LineProps } from '../cartesian/Line';
import type { Props as ScatterProps } from '../cartesian/Scatter';
import type { Props as XAxisProps } from '../cartesian/XAxis';
import type { Props as YAxisProps } from '../cartesian/YAxis';
import type { Props as PolarAngleAxisProps } from '../polar/PolarAngleAxis';
import type { Props as PolarRadiusAxisProps } from '../polar/PolarRadiusAxis';
import type { Props as PieProps } from '../polar/Pie';
import type { Props as RadarProps } from '../polar/Radar';
import type { RadialBarProps } from '../polar/RadialBar';

/**
 * A typed cartesian chart container whose `layout` prop is constrained to a specific value.
 *
 * The `DataType` default is set to the type provided when calling `createHorizontalChart` or `createVerticalChart`,
 * which removes the need for explicit generic annotations on each JSX element.
 */
type TypedCartesianChart<DataType, Layout extends CartesianLayout> = <DataPointType = DataType>(
  props: Omit<CartesianChartProps<DataPointType>, 'layout'> & { layout?: Layout; ref?: React.Ref<SVGSVGElement> },
) => React.ReactElement;

/**
 * A typed polar chart container whose `layout` prop is constrained to a specific value.
 */
type TypedPolarChart<DataType, Layout extends PolarLayout> = <DataPointType = DataType>(
  props: Omit<PolarChartProps<DataPointType>, 'layout'> & { layout?: Layout; ref?: React.Ref<SVGSVGElement> },
) => React.ReactElement;

type TypedArea<DataType, ValueType> = <DataPointType = DataType, ValueAxisType = ValueType>(
  props: AreaProps<DataPointType, ValueAxisType>,
) => React.ReactElement;

type TypedBar<DataType, ValueType> = <DataPointType = DataType, ValueAxisType = ValueType>(
  props: BarProps<DataPointType, ValueAxisType>,
) => React.ReactElement;

type TypedFunnel<DataType, ValueType> = <DataPointType = DataType, ValueAxisType = ValueType>(
  props: FunnelProps<DataPointType, ValueAxisType>,
) => React.ReactElement;

type TypedLine<DataType, ValueType> = <DataPointType = DataType, ValueAxisType = ValueType>(
  props: LineProps<DataPointType, ValueAxisType>,
) => React.ReactElement;

type TypedScatter<DataType, ValueType> = <DataPointType = DataType, ValueAxisType = ValueType>(
  props: ScatterProps<DataPointType, ValueAxisType>,
) => React.ReactElement;

type TypedXAxis<DataType, ValueType> = <DataPointType = DataType, DataValueType = ValueType>(
  props: XAxisProps<DataPointType, DataValueType>,
) => React.ReactElement;

type TypedYAxis<DataType, ValueType> = <DataPointType = DataType, DataValueType = ValueType>(
  props: YAxisProps<DataPointType, DataValueType>,
) => React.ReactElement;

type TypedPolarAngleAxis<DataType, ValueType> = <DataPointType = DataType, DataValueType = ValueType>(
  props: PolarAngleAxisProps<DataPointType, DataValueType>,
) => React.ReactElement;

type TypedPolarRadiusAxis<DataType, ValueType> = <DataPointType = DataType, DataValueType = ValueType>(
  props: PolarRadiusAxisProps<DataPointType, DataValueType>,
) => React.ReactElement;

type TypedPie<DataType, ValueType> = <DataPointType = DataType, DataValueType = ValueType>(
  props: PieProps<DataPointType, DataValueType>,
) => React.ReactElement;

type TypedRadar<DataType, ValueType> = <DataPointType = DataType, DataValueType = ValueType>(
  props: RadarProps<DataPointType, DataValueType>,
) => React.ReactElement;

type TypedRadialBar<DataType, ValueType> = <DataPointType = DataType, DataValueType = ValueType>(
  props: RadialBarProps<DataPointType, DataValueType>,
) => React.ReactElement;

/**
 * The set of Recharts components that can be passed to `createHorizontalChart` or `createVerticalChart`.
 *
 * All properties are optional so that users can pass only the components they import.
 * This supports tree-shaking because only the components the caller imports will be included in the bundle.
 *
 * Any extra keys that do not match a known component name are passed through unchanged.
 */
type CartesianChartInput = {
  AreaChart?: unknown;
  BarChart?: unknown;
  ComposedChart?: unknown;
  FunnelChart?: unknown;
  LineChart?: unknown;
  ScatterChart?: unknown;
  Area?: unknown;
  Bar?: unknown;
  Funnel?: unknown;
  Line?: unknown;
  Scatter?: unknown;
  XAxis?: unknown;
  YAxis?: unknown;
  [key: string]: unknown;
};

/**
 * The set of Recharts components that can be passed to `createRadialChart` or `createCentricChart`.
 */
type PolarChartInput = {
  PieChart?: unknown;
  RadialBarChart?: unknown;
  RadarChart?: unknown;
  Pie?: unknown;
  RadialBar?: unknown;
  Radar?: unknown;
  PolarAngleAxis?: unknown;
  PolarRadiusAxis?: unknown;
  [key: string]: unknown;
};

/**
 * Maps each known key to its typed version.
 * Unknown keys are passed through unchanged (as `T[K]`).
 *
 * `XAxisType` / `YAxisType` differ between horizontal (XAxis=categorical, YAxis=numerical)
 * and vertical (XAxis=numerical, YAxis=categorical) layouts.
 */
type CartesianChartOutput<
  T extends CartesianChartInput,
  DataType,
  Layout extends CartesianLayout,
  XAxisType,
  YAxisType,
  ItemValueType,
> = {
  [K in keyof T]: K extends 'AreaChart' | 'BarChart' | 'ComposedChart' | 'FunnelChart' | 'LineChart' | 'ScatterChart'
    ? TypedCartesianChart<DataType, Layout>
    : K extends 'Area'
      ? TypedArea<DataType, ItemValueType>
      : K extends 'Bar'
        ? TypedBar<DataType, ItemValueType>
        : K extends 'Funnel'
          ? TypedFunnel<DataType, ItemValueType>
          : K extends 'Line'
            ? TypedLine<DataType, ItemValueType>
            : K extends 'Scatter'
              ? TypedScatter<DataType, ItemValueType>
              : K extends 'XAxis'
                ? TypedXAxis<DataType, XAxisType>
                : K extends 'YAxis'
                  ? TypedYAxis<DataType, YAxisType>
                  : T[K];
};

/**
 * Maps each known polar key to its typed version.
 *
 * `AngleAxisType` / `RadiusAxisType` differ between radial (angle=numerical, radius=categorical)
 * and centric (angle=categorical, radius=numerical) layouts.
 */
type PolarChartOutput<
  T extends PolarChartInput,
  DataType,
  Layout extends PolarLayout,
  AngleAxisType,
  RadiusAxisType,
  ItemValueType,
> = {
  [K in keyof T]: K extends 'PieChart' | 'RadialBarChart' | 'RadarChart'
    ? TypedPolarChart<DataType, Layout>
    : K extends 'Pie'
      ? TypedPie<DataType, ItemValueType>
      : K extends 'RadialBar'
        ? TypedRadialBar<DataType, ItemValueType>
        : K extends 'Radar'
          ? TypedRadar<DataType, ItemValueType>
          : K extends 'PolarAngleAxis'
            ? TypedPolarAngleAxis<DataType, AngleAxisType>
            : K extends 'PolarRadiusAxis'
              ? TypedPolarRadiusAxis<DataType, RadiusAxisType>
              : T[K];
};

/**
 * Returns a function that accepts a record of Recharts components and re-exports them with types
 * tightly bound to the provided generic parameters, for use in a **horizontal** cartesian chart.
 *
 * In a horizontal chart the X axis is categorical and the Y axis is numerical, so:
 * - Chart containers (e.g. `AreaChart`) accept `DataType` as their data element type.
 * - Graphical items (e.g. `Area`, `Bar`, `Line`) bind their value axis type to `NumericalAxisType`.
 * - `XAxis` binds its value type to `CategoricalAxisType`.
 * - `YAxis` binds its value type to `NumericalAxisType`.
 *
 * Because the function itself does not import any Recharts components, tree-shaking is fully
 * supported: only the components passed by the caller will be included in the bundle.
 *
 * @example
 * ```tsx
 * type MyData = { name: string; value: number };
 *
 * const { AreaChart, Area, XAxis, YAxis } = createHorizontalChart<MyData, string, number>()({
 *   AreaChart,
 *   Area,
 *   XAxis,
 *   YAxis,
 * });
 *
 * // TypeScript now infers DataType = MyData, CategoricalAxisType = string, NumericalAxisType = number
 * <AreaChart data={myData}>
 *   <Area dataKey="value" />
 *   <XAxis dataKey="name" />
 *   <YAxis />
 * </AreaChart>
 * ```
 */
export function createHorizontalChart<DataType = unknown, CategoricalAxisType = string, NumericalAxisType = number>() {
  return <T extends CartesianChartInput>(
    components: T,
  ): CartesianChartOutput<T, DataType, 'horizontal', CategoricalAxisType, NumericalAxisType, NumericalAxisType> =>
    components as unknown as CartesianChartOutput<
      T,
      DataType,
      'horizontal',
      CategoricalAxisType,
      NumericalAxisType,
      NumericalAxisType
    >;
}

/**
 * Returns a function that accepts a record of Recharts components and re-exports them with types
 * tightly bound to the provided generic parameters, for use in a **vertical** cartesian chart.
 *
 * In a vertical chart the Y axis is categorical and the X axis is numerical, so:
 * - Chart containers (e.g. `BarChart`) accept `DataType` as their data element type.
 * - Graphical items (e.g. `Area`, `Bar`, `Line`) bind their value axis type to `NumericalAxisType`.
 * - `XAxis` binds its value type to `NumericalAxisType`.
 * - `YAxis` binds its value type to `CategoricalAxisType`.
 *
 * @example
 * ```tsx
 * type MyData = { category: string; score: number };
 *
 * const { BarChart, Bar, XAxis, YAxis } = createVerticalChart<MyData, string, number>()({
 *   BarChart,
 *   Bar,
 *   XAxis,
 *   YAxis,
 * });
 * ```
 */
export function createVerticalChart<DataType = unknown, CategoricalAxisType = string, NumericalAxisType = number>() {
  return <T extends CartesianChartInput>(
    components: T,
  ): CartesianChartOutput<T, DataType, 'vertical', NumericalAxisType, CategoricalAxisType, NumericalAxisType> =>
    components as unknown as CartesianChartOutput<
      T,
      DataType,
      'vertical',
      NumericalAxisType,
      CategoricalAxisType,
      NumericalAxisType
    >;
}

/**
 * Returns a function that accepts a record of Recharts components and re-exports them with types
 * tightly bound to the provided generic parameters, for use in a **radial** polar chart
 * (i.e. `RadialBarChart`).
 *
 * In a radial chart:
 * - `PolarAngleAxis` represents the **numerical** scale (e.g. 0–100 %).
 * - `PolarRadiusAxis` represents the **categorical** axis (e.g. category labels).
 * - Graphical items (e.g. `RadialBar`) bind their value axis type to `NumericalAxisType`.
 *
 * @example
 * ```tsx
 * type MyData = { name: string; value: number };
 *
 * const { RadialBarChart, RadialBar, PolarAngleAxis, PolarRadiusAxis } =
 *   createRadialChart<MyData, string, number>()({
 *     RadialBarChart,
 *     RadialBar,
 *     PolarAngleAxis,
 *     PolarRadiusAxis,
 *   });
 * ```
 */
export function createRadialChart<DataType = unknown, CategoricalAxisType = string, NumericalAxisType = number>() {
  return <T extends PolarChartInput>(
    components: T,
  ): PolarChartOutput<T, DataType, 'radial', NumericalAxisType, CategoricalAxisType, NumericalAxisType> =>
    components as unknown as PolarChartOutput<
      T,
      DataType,
      'radial',
      NumericalAxisType,
      CategoricalAxisType,
      NumericalAxisType
    >;
}

/**
 * Returns a function that accepts a record of Recharts components and re-exports them with types
 * tightly bound to the provided generic parameters, for use in a **centric** polar chart
 * (i.e. `PieChart` or `RadarChart`).
 *
 * In a centric chart:
 * - `PolarAngleAxis` represents the **categorical** axis (e.g. subject names in a radar chart).
 * - `PolarRadiusAxis` represents the **numerical** scale.
 * - Graphical items (e.g. `Pie`, `Radar`) bind their value axis type to `NumericalAxisType`.
 *
 * @example
 * ```tsx
 * type MyData = { subject: string; score: number };
 *
 * const { RadarChart, Radar, PolarAngleAxis, PolarRadiusAxis } =
 *   createCentricChart<MyData, string, number>()({
 *     RadarChart,
 *     Radar,
 *     PolarAngleAxis,
 *     PolarRadiusAxis,
 *   });
 * ```
 */
export function createCentricChart<DataType = unknown, CategoricalAxisType = string, NumericalAxisType = number>() {
  return <T extends PolarChartInput>(
    components: T,
  ): PolarChartOutput<T, DataType, 'centric', CategoricalAxisType, NumericalAxisType, NumericalAxisType> =>
    components as unknown as PolarChartOutput<
      T,
      DataType,
      'centric',
      CategoricalAxisType,
      NumericalAxisType,
      NumericalAxisType
    >;
}
