import React from 'react';
import { describe, expect, it } from 'vitest';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ComposedChart,
  Funnel,
  FunnelChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
  createCentricChart,
  createHorizontalChart,
  createRadialChart,
  createVerticalChart,
} from '../../src';
import { rechartsTestRender } from '../helper/createSelectorTestCase';

type MyData = { name: string; value: number };

const data: ReadonlyArray<MyData> = [
  { name: 'a', value: 100 },
  { name: 'b', value: 80 },
];

describe('createHorizontalChart', () => {
  it('should return the same component references at runtime', () => {
    const components = createHorizontalChart<MyData, string, number>()({
      AreaChart,
      Area,
      XAxis,
      YAxis,
    });
    expect(components.AreaChart).toBe(AreaChart);
    expect(components.Area).toBe(Area);
    expect(components.XAxis).toBe(XAxis);
    expect(components.YAxis).toBe(YAxis);
  });

  it('should render a typed horizontal chart without explicit generics on JSX elements', () => {
    const {
      AreaChart: TypedAreaChart,
      Area: TypedArea,
      XAxis: TypedXAxis,
      YAxis: TypedYAxis,
    } = createHorizontalChart<MyData, string, number>()({ AreaChart, Area, XAxis, YAxis });

    rechartsTestRender(
      <TypedAreaChart data={data} width={400} height={400}>
        <TypedArea dataKey="value" isAnimationActive={false} />
        <TypedXAxis dataKey="name" />
        <TypedYAxis />
      </TypedAreaChart>,
    );
  });

  it('should accept all supported cartesian chart components', () => {
    const components = createHorizontalChart<MyData, string, number>()({
      AreaChart,
      BarChart,
      ComposedChart,
      FunnelChart,
      LineChart,
      ScatterChart,
      Area,
      Bar,
      Funnel,
      Line,
      Scatter,
      XAxis,
      YAxis,
    });

    expect(components.AreaChart).toBe(AreaChart);
    expect(components.BarChart).toBe(BarChart);
    expect(components.ComposedChart).toBe(ComposedChart);
    expect(components.FunnelChart).toBe(FunnelChart);
    expect(components.LineChart).toBe(LineChart);
    expect(components.ScatterChart).toBe(ScatterChart);
    expect(components.Area).toBe(Area);
    expect(components.Bar).toBe(Bar);
    expect(components.Funnel).toBe(Funnel);
    expect(components.Line).toBe(Line);
    expect(components.Scatter).toBe(Scatter);
    expect(components.XAxis).toBe(XAxis);
    expect(components.YAxis).toBe(YAxis);
  });

  it('should pass through extra keys unchanged', () => {
    const extraComponent = () => <div />;
    const components = createHorizontalChart<MyData, string, number>()({
      AreaChart,
      extraComponent,
    });
    expect(components.extraComponent).toBe(extraComponent);
  });

  it('should show a TypeScript error when chart data shape does not match the DataType generic', () => {
    const { AreaChart: TypedAreaChart } = createHorizontalChart<MyData, string, number>()({ AreaChart });

    const invalidChart = (
      // @ts-expect-error TypeScript is correct here - chart data does not match the expected DataType
      <TypedAreaChart data={{ wrong: 1 }} width={400} height={400} />
    );
    expect(invalidChart).toBeDefined();
  });

  it('should show a TypeScript error when layout is set to a non-horizontal value', () => {
    const { AreaChart: TypedAreaChart } = createHorizontalChart<MyData, string, number>()({ AreaChart });

    const invalidChart = (
      // @ts-expect-error layout must be 'horizontal' for a typed horizontal chart
      <TypedAreaChart data={data} width={400} height={400} layout="vertical" />
    );
    expect(invalidChart).toBeDefined();
  });
});

describe('createVerticalChart', () => {
  it('should return the same component references at runtime', () => {
    const components = createVerticalChart<MyData, string, number>()({
      BarChart,
      Bar,
      XAxis,
      YAxis,
    });
    expect(components.BarChart).toBe(BarChart);
    expect(components.Bar).toBe(Bar);
    expect(components.XAxis).toBe(XAxis);
    expect(components.YAxis).toBe(YAxis);
  });

  it('should render a typed vertical chart without explicit generics on JSX elements', () => {
    const {
      BarChart: TypedBarChart,
      Bar: TypedBar,
      XAxis: TypedXAxis,
      YAxis: TypedYAxis,
    } = createVerticalChart<MyData, string, number>()({ BarChart, Bar, XAxis, YAxis });

    rechartsTestRender(
      <TypedBarChart data={data} width={400} height={400} layout="vertical">
        <TypedBar dataKey="value" isAnimationActive={false} />
        <TypedXAxis type="number" />
        <TypedYAxis dataKey="name" type="category" />
      </TypedBarChart>,
    );
  });

  it('should show a TypeScript error when layout is set to a non-vertical value', () => {
    const { BarChart: TypedBarChart } = createVerticalChart<MyData, string, number>()({ BarChart });

    const invalidChart = (
      // @ts-expect-error layout must be 'vertical' for a typed vertical chart
      <TypedBarChart data={data} width={400} height={400} layout="horizontal" />
    );
    expect(invalidChart).toBeDefined();
  });
});

describe('createRadialChart', () => {
  it('should return the same component references at runtime', () => {
    const components = createRadialChart<MyData, string, number>()({
      RadialBarChart,
      RadialBar,
      PolarAngleAxis,
      PolarRadiusAxis,
    });
    expect(components.RadialBarChart).toBe(RadialBarChart);
    expect(components.RadialBar).toBe(RadialBar);
    expect(components.PolarAngleAxis).toBe(PolarAngleAxis);
    expect(components.PolarRadiusAxis).toBe(PolarRadiusAxis);
  });

  it('should render a typed radial chart without explicit generics on JSX elements', () => {
    const { RadialBarChart: TypedRadialBarChart, RadialBar: TypedRadialBar } = createRadialChart<
      MyData,
      string,
      number
    >()({ RadialBarChart, RadialBar });

    rechartsTestRender(
      <TypedRadialBarChart data={data} width={400} height={400}>
        <TypedRadialBar dataKey="value" isAnimationActive={false} />
      </TypedRadialBarChart>,
    );
  });
});

describe('createCentricChart', () => {
  it('should return the same component references at runtime', () => {
    const components = createCentricChart<MyData, string, number>()({
      PieChart,
      Pie,
      RadarChart,
      Radar,
      PolarAngleAxis,
      PolarRadiusAxis,
    });
    expect(components.PieChart).toBe(PieChart);
    expect(components.Pie).toBe(Pie);
    expect(components.RadarChart).toBe(RadarChart);
    expect(components.Radar).toBe(Radar);
    expect(components.PolarAngleAxis).toBe(PolarAngleAxis);
    expect(components.PolarRadiusAxis).toBe(PolarRadiusAxis);
  });

  it('should render a typed centric chart without explicit generics on JSX elements', () => {
    const { PieChart: TypedPieChart, Pie: TypedPie } = createCentricChart<MyData, string, number>()({
      PieChart,
      Pie,
    });

    rechartsTestRender(
      <TypedPieChart width={400} height={400}>
        <TypedPie data={data} dataKey="value" isAnimationActive={false} />
      </TypedPieChart>,
    );
  });

  it('should render a typed radar chart without explicit generics on JSX elements', () => {
    const {
      RadarChart: TypedRadarChart,
      Radar: TypedRadar,
      PolarAngleAxis: TypedPolarAngleAxis,
    } = createCentricChart<MyData, string, number>()({ RadarChart, Radar, PolarAngleAxis });

    rechartsTestRender(
      <TypedRadarChart data={data} width={400} height={400}>
        <TypedPolarAngleAxis dataKey="name" />
        <TypedRadar dataKey="value" isAnimationActive={false} />
      </TypedRadarChart>,
    );
  });
});
