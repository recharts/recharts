import React from 'react';
import { describe, expect, it } from 'vitest';
import {
  Area,
  CartesianGrid,
  createCentricChart,
  createHorizontalChart,
  createRadialChart,
  createVerticalChart,
  Pie,
  RadialBar,
  Tooltip,
  XAxis,
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
  });

  describe('createVerticalChart', () => {
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
    it('should set layout to centric and prevent overriding', () => {
      const Typed = createCentricChart<ExampleDataPoint, string, number>()({
        Pie,
      });

      const renderTestCase = createSelectorTestCase(({ children }) => (
        <Typed.PieChart data={data} width={400} height={400}>
          <Typed.Pie dataKey="value" isAnimationActive={false} />
          {children}
        </Typed.PieChart>
      ));

      const { spy } = renderTestCase(selectChartLayout);

      expect(spy).toHaveBeenLastCalledWith('centric');

      const invalidLayoutChart = (
        // @ts-expect-error layout should be omitted and enforced by the wrapper
        <Typed.PieChart layout="horizontal" data={data} width={400} height={400}>
          <Typed.Pie dataKey="value" isAnimationActive={false} />
        </Typed.PieChart>
      );

      expect(invalidLayoutChart).toBeDefined();
    });
  });

  describe('createRadialChart', () => {
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
