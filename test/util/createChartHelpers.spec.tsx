import React from 'react';
import { describe, expect, it } from 'vitest';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  createCentricChart,
  createHorizontalChart,
  createRadialChart,
  createVerticalChart,
  Funnel,
  FunnelChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from '../../src';
import { selectChartLayout } from '../../src/context/chartLayoutContext';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';

type ExampleDataPoint = { value: number; name: string };
const data: ReadonlyArray<ExampleDataPoint> = [
  { value: 100, name: 'a' },
  { value: 80, name: 'b' },
];

describe('Chart Helpers', () => {
  describe('createHorizontalChart', () => {
    it('should return the same component references at runtime, but no others', () => {
      const components = createHorizontalChart<ExampleDataPoint, string, number>()({
        AreaChart,
        Area,
        XAxis,
        YAxis,
      });
      expect(components.AreaChart).toBeDefined();
      expect(components.Area).toBe(Area);
      expect(components.XAxis).toBe(XAxis);
      expect(components.YAxis).toBe(YAxis);
      // @ts-expect-error Only the provided components should be available on the returned object
      expect(components.Bar).toBeUndefined();
      // @ts-expect-error Only the provided components should be available on the returned object
      expect(components.Scatter).toBeUndefined();
      // @ts-expect-error Only the provided components should be available on the returned object
      expect(components.Line).toBeUndefined();
      // @ts-expect-error Only the provided components should be available on the returned object
      expect(components.Pie).toBeUndefined();
      // on the other hand, all the chart elements should be available even if not provided, since they are all aliases to the same component anyway
      expect(components.BarChart).toBeDefined();
      expect(components.ComposedChart).toBeDefined();
      expect(components.LineChart).toBeDefined();
      expect(components.ScatterChart).toBeDefined();
      // @ts-expect-error except! Funnel chart. Funnels in Recharts are only vertical, so the FunnelChart component should not be included in the returned object since it cannot be used in a horizontal chart
      expect(components.FunnelChart).toBeUndefined();
    });

    it('should accept all supported cartesian chart components except Funnel and FunnelChart', () => {
      const components = createHorizontalChart<ExampleDataPoint, string, number>()({
        AreaChart,
        BarChart,
        ComposedChart,
        LineChart,
        ScatterChart,
        Area,
        Bar,
        Line,
        Scatter,
        XAxis,
        YAxis,
      });

      expect(components.AreaChart).toBeDefined();
      expect(components.BarChart).toBe(BarChart);
      expect(components.ComposedChart).toBe(ComposedChart);
      expect(components.LineChart).toBe(LineChart);
      expect(components.ScatterChart).toBe(ScatterChart);
      expect(components.Area).toBe(Area);
      expect(components.Bar).toBe(Bar);
      expect(components.Line).toBe(Line);
      expect(components.Scatter).toBe(Scatter);
      expect(components.XAxis).toBe(XAxis);
      expect(components.YAxis).toBe(YAxis);
    });

    it('should not accept FunnelChart because funnels can only be vertical', () => {
      // @ts-expect-error FunnelChart should not be accepted in a horizontal chart since funnels can only be vertical
      const components = createHorizontalChart<ExampleDataPoint, string, number>()({
        FunnelChart,
      });

      // @ts-expect-error FunnelChart should not be accepted in a horizontal chart since funnels can only be vertical
      expect(components.FunnelChart).toBeDefined();
    });

    it('should not accept Funnel because funnels can only be vertical', () => {
      // @ts-expect-error Funnel should not be accepted in a horizontal chart since funnels can only be vertical
      const components = createHorizontalChart<ExampleDataPoint, string, number>()({
        Funnel,
      });

      // @ts-expect-error Funnel should not be accepted in a horizontal chart since funnels can only be vertical
      expect(components.Funnel).toBeDefined();
    });

    it('should set layout to horizontal and prevent overriding', () => {
      const Typed = createHorizontalChart<ExampleDataPoint, string, number>()({
        Area,
      });

      const renderTestCase = createSelectorTestCase(({ children }) => (
        <Typed.AreaChart data={data} width={400} height={400}>
          <Typed.Area dataKey="value" isAnimationActive={false} />
          {children}
        </Typed.AreaChart>
      ));

      const { spy } = renderTestCase(selectChartLayout);

      expect(spy).toHaveBeenLastCalledWith('horizontal');

      const invalidLayoutChart = (
        // @ts-expect-error layout should be omitted and enforced by the wrapper
        <Typed.AreaChart layout="vertical" data={data} width={400} height={400}>
          <Typed.Area dataKey="value" isAnimationActive={false} />
        </Typed.AreaChart>
      );
      expect(invalidLayoutChart).toBeDefined();
    });

    it('should show error when dataKey does not match the returned component context', () => {
      const Typed = createHorizontalChart<ExampleDataPoint, string, number>()({
        Area,
      });

      const invalidKeyChart = (
        <Typed.AreaChart data={data} width={400} height={400}>
          {/* @ts-expect-error "invalidValue" is not a key of ExampleDataPoint */}
          <Typed.Area dataKey="invalidValue" isAnimationActive={false} />
        </Typed.AreaChart>
      );
      expect(invalidKeyChart).toBeDefined();
    });

    it('should show error when data type does not match the returned component context', () => {
      const Typed = createHorizontalChart<ExampleDataPoint, string, number>()({
        Area,
      });

      const differentData = [{ name: 100, value: 'a' }];

      const invalidTypeChart = (
        // @ts-expect-error data types do not match the defined context for Typed.AreaChart and Typed.Area
        <Typed.AreaChart data={differentData} width={400} height={400}>
          <Typed.Area dataKey="value" isAnimationActive={false} />
        </Typed.AreaChart>
      );
      expect(invalidTypeChart).toBeDefined();
    });

    it('should type Tooltip formatter with TNumerical value and TData key name', () => {
      const Typed = createHorizontalChart<ExampleDataPoint, string, number>()({
        Area,
        XAxis,
        Tooltip,
      });

      expect(Typed.Tooltip).toBe(Tooltip);

      // formatter receives (value: number, name: 'value' | 'name', ...) — correct types compile without errors
      const validChart = (
        <Typed.AreaChart data={data} width={400} height={400}>
          <Typed.XAxis dataKey="name" />
          <Typed.Area dataKey="value" isAnimationActive={false} />
          <Typed.Tooltip
            formatter={(value: number | undefined, name: 'value' | 'name' | undefined) => `${name}: ${value}`}
          />
        </Typed.AreaChart>
      );
      expect(validChart).toBeDefined();

      // formatter with wrong value type should produce a type error
      const invalidFormatterChart = (
        <Typed.AreaChart data={data} width={400} height={400}>
          <Typed.Tooltip
            // @ts-expect-error value should be number, not string
            formatter={(value: string) => value}
          />
        </Typed.AreaChart>
      );
      expect(invalidFormatterChart).toBeDefined();
    });
  });

  describe('createVerticalChart', () => {
    it('should include all chart components, PLUS FunnelChart because funnels can only be vertical', () => {
      const components = createVerticalChart<ExampleDataPoint, number, string>()({
        Area,
        Funnel,
      });
      expect(components.AreaChart).toBeDefined();
      expect(components.BarChart).toBeDefined();
      expect(components.ComposedChart).toBeDefined();
      expect(components.FunnelChart).toBeDefined();
      expect(components.LineChart).toBeDefined();
      expect(components.ScatterChart).toBeDefined();
      expect(components.Area).toBe(Area);
      // @ts-expect-error Only the provided components should be available on the returned object
      expect(components.Bar).toBeUndefined();
      expect(components.Funnel).toBe(Funnel);
      // @ts-expect-error Only the provided components should be available on the returned object
      expect(components.Line).toBeUndefined();
      // @ts-expect-error Only the provided components should be available on the returned object
      expect(components.Scatter).toBeUndefined();
      // @ts-expect-error Only the provided components should be available on the returned object
      expect(components.XAxis).toBeUndefined();
      // @ts-expect-error Only the provided components should be available on the returned object
      expect(components.YAxis).toBeUndefined();
    });

    it('should set layout to vertical and prevent overriding', () => {
      const Typed = createVerticalChart<ExampleDataPoint, number, string>()({
        Area,
      });

      const renderTestCase = createSelectorTestCase(({ children }) => (
        <Typed.AreaChart data={data} width={400} height={400}>
          <Typed.Area dataKey="name" isAnimationActive={false} />
          {children}
        </Typed.AreaChart>
      ));

      const { spy } = renderTestCase(selectChartLayout);

      expect(spy).toHaveBeenLastCalledWith('vertical');

      const invalidLayoutChart = (
        // @ts-expect-error layout should be omitted and enforced by the wrapper
        <Typed.AreaChart layout="horizontal" data={data} width={400} height={400}>
          <Typed.Area dataKey="name" isAnimationActive={false} />
        </Typed.AreaChart>
      );
      expect(invalidLayoutChart).toBeDefined();
    });
  });

  describe('createCentricChart', () => {
    it('should not accept RadialBar, RadialBarChart, Pie, or PieChart as they are radial only', () => {
      // @ts-expect-error RadialBar should not be accepted in a centric chart
      const components1 = createCentricChart<ExampleDataPoint, string, number>()({ RadialBar });
      // @ts-expect-error RadialBarChart should not be accepted
      const components2 = createCentricChart<ExampleDataPoint, string, number>()({ RadialBarChart });
      // @ts-expect-error Pie should not be accepted
      const components3 = createCentricChart<ExampleDataPoint, string, number>()({ Pie });
      // @ts-expect-error PieChart should not be accepted
      const components4 = createCentricChart<ExampleDataPoint, string, number>()({ PieChart });

      // @ts-expect-error natively omitted type
      expect(components1.RadialBar).toBeDefined();
      // @ts-expect-error natively omitted type
      expect(components2.RadialBarChart).toBeDefined();
      // @ts-expect-error natively omitted type
      expect(components3.Pie).toBeDefined();
      // @ts-expect-error natively omitted type
      expect(components4.PieChart).toBeDefined();
    });

    it('should set layout to centric and prevent overriding', () => {
      const Typed = createCentricChart<ExampleDataPoint, string, number>()({
        Radar,
      });

      const renderTestCase = createSelectorTestCase(({ children }) => (
        <Typed.RadarChart data={data} width={400} height={400}>
          <Typed.Radar dataKey="value" isAnimationActive={false} />
          {children}
        </Typed.RadarChart>
      ));

      const { spy } = renderTestCase(selectChartLayout);

      expect(spy).toHaveBeenLastCalledWith('centric');

      const invalidLayoutChart = (
        // @ts-expect-error layout should be omitted and enforced by the wrapper
        <Typed.RadarChart layout="horizontal" data={data} width={400} height={400}>
          <Typed.Radar dataKey="value" isAnimationActive={false} />
        </Typed.RadarChart>
      );

      expect(invalidLayoutChart).toBeDefined();
    });
  });

  describe('createRadialChart', () => {
    it('should not accept Radar or RadarChart as they are centric only', () => {
      // @ts-expect-error Radar should not be accepted in a radial chart
      const components1 = createRadialChart<ExampleDataPoint, string, number>()({ Radar });
      // @ts-expect-error RadarChart should not be accepted
      const components2 = createRadialChart<ExampleDataPoint, string, number>()({ RadarChart });

      // @ts-expect-error natively omitted type
      expect(components1.Radar).toBeDefined();
      // @ts-expect-error natively omitted type
      expect(components2.RadarChart).toBeDefined();
    });

    it('should set layout to radial and prevent overriding', () => {
      const Typed = createRadialChart<ExampleDataPoint, string, number>()({
        RadialBar,
      });

      const renderTestCase = createSelectorTestCase(({ children }) => (
        <Typed.RadialBarChart data={data} width={400} height={400}>
          <Typed.RadialBar dataKey="value" isAnimationActive={false} />
          {children}
        </Typed.RadialBarChart>
      ));

      const { spy } = renderTestCase(selectChartLayout);

      expect(spy).toHaveBeenLastCalledWith('radial');

      const invalidLayoutChart = (
        // @ts-expect-error layout should be omitted and enforced by the wrapper
        <Typed.RadialBarChart layout="centric" data={data} width={400} height={400}>
          <Typed.RadialBar dataKey="value" isAnimationActive={false} />
        </Typed.RadialBarChart>
      );
      expect(invalidLayoutChart).toBeDefined();
    });
  });

  describe('untracked components', () => {
    it('should render standard components seamlessly alongside Typed charts', () => {
      const Typed = createHorizontalChart<ExampleDataPoint, string, number>()({
        Area,
        XAxis,
      });

      const renderTestCase = createSelectorTestCase(({ children }) => (
        <Typed.AreaChart data={data} width={400} height={400}>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Typed.XAxis dataKey="name" />
          <Typed.Area dataKey="value" isAnimationActive={false} />
          {children}
        </Typed.AreaChart>
      ));

      const { spy } = renderTestCase(selectChartLayout);

      expect(spy).toHaveBeenLastCalledWith('horizontal');
    });
  });
});
