import React from 'react';
import { describe, it, expect } from 'vitest';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { Line, LineChart, XAxis, YAxis, Brush } from '../../src';
import {
  useXAxisScale,
  useYAxisScale,
  useXAxisInverseScale,
  useYAxisInverseScale,
  useCartesianScale,
} from '../../src/hooks';
import { PageData } from '../_data';

describe('axis scale hooks', () => {
  describe('useXAxisScale', () => {
    describe('in simple chart', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={PageData}>
          <Line dataKey="uv" />
          {children}
        </LineChart>
      ));

      it('should return the X-axis scale function', () => {
        const { spy } = renderTestCase(useXAxisScale);
        expect(spy).toHaveBeenCalled();
        const scaleFunction = spy.mock.calls.at(-1)?.[0];
        expect(scaleFunction).toBeDefined();
        expect(typeof scaleFunction).toBe('function');
      });

      it('should map data values to pixel coordinates', () => {
        const { spy } = renderTestCase(useXAxisScale);
        expect(spy).toHaveBeenCalled();
        const scaleFunction = spy.mock.calls.at(-1)?.[0];
        expect(scaleFunction).toBeDefined();
        // Map index value to pixel coordinate (default categorical axis uses indices)
        const pixelX = scaleFunction?.(0);
        expect(typeof pixelX).toBe('number');
      });
    });

    describe('with explicit axis ID', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={PageData}>
          <Line dataKey="uv" xAxisId="xAxis1" yAxisId="yAxis1" />
          <XAxis dataKey="name" xAxisId="xAxis1" />
          <YAxis dataKey="pv" yAxisId="yAxis1" />
          {children}
        </LineChart>
      ));

      it('should return a scale function even when called with default ID (uses fallback)', () => {
        const { spy } = renderTestCase(useXAxisScale);
        expect(spy).toHaveBeenCalled();
        const scaleFunction = spy.mock.calls.at(-1)?.[0];
        // Recharts provides fallback behavior for missing axis IDs
        expect(typeof scaleFunction).toBe('function');
      });
    });

    describe('with numerical axis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={PageData}>
          <Line dataKey="uv" />
          <XAxis type="number" dataKey="pv" />
          {children}
        </LineChart>
      ));

      it('should return scale that can map numerical values', () => {
        const { spy } = renderTestCase(useXAxisScale);
        expect(spy).toHaveBeenCalled();
        const scaleFunction = spy.mock.calls.at(-1)?.[0];
        expect(scaleFunction).toBeDefined();
        // Map a value to pixel coordinate
        const pixelX = scaleFunction?.(5000);
        expect(typeof pixelX).toBe('number');
      });
    });
  });

  describe('useYAxisScale', () => {
    describe('in simple chart', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={PageData}>
          <Line dataKey="uv" />
          {children}
        </LineChart>
      ));

      it('should return the Y-axis scale function', () => {
        const { spy } = renderTestCase(useYAxisScale);
        expect(spy).toHaveBeenCalled();
        const scaleFunction = spy.mock.calls.at(-1)?.[0];
        expect(scaleFunction).toBeDefined();
        expect(typeof scaleFunction).toBe('function');
      });

      it('should map data values to pixel coordinates', () => {
        const { spy } = renderTestCase(useYAxisScale);
        expect(spy).toHaveBeenCalled();
        const scaleFunction = spy.mock.calls.at(-1)?.[0];
        expect(scaleFunction).toBeDefined();
        // Map a value to pixel coordinate
        const pixelY = scaleFunction?.(200);
        expect(typeof pixelY).toBe('number');
      });
    });
  });

  describe('useXAxisInverseScale', () => {
    describe('in simple chart with categorical x-axis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={PageData}>
          <Line dataKey="uv" />
          <XAxis dataKey="name" />
          {children}
        </LineChart>
      ));

      it('should return an inverse scale function', () => {
        const { spy } = renderTestCase(useXAxisInverseScale);
        expect(spy).toHaveBeenCalled();
        const inverseFunction = spy.mock.calls.at(-1)?.[0];
        expect(inverseFunction).toBeDefined();
        expect(typeof inverseFunction).toBe('function');
      });

      it('should convert pixel coordinates back to data values', () => {
        const { spy: scaleSpy } = renderTestCase(useXAxisScale);
        const scaleFunction = scaleSpy.mock.calls.at(-1)?.[0];

        const { spy: inverseSpy } = renderTestCase(useXAxisInverseScale);
        const inverseFunction = inverseSpy.mock.calls.at(-1)?.[0];

        if (scaleFunction && inverseFunction) {
          // Get pixel for 'Page C'
          const pixelForPageC = scaleFunction('Page C');
          expect(pixelForPageC).toBeDefined();

          // Inverse should return closest category
          const dataValue = inverseFunction(pixelForPageC!);
          expect(dataValue).toBe('Page C');
        }
      });
    });
  });

  describe('useYAxisInverseScale', () => {
    describe('in simple chart', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={PageData}>
          <Line dataKey="uv" />
          {children}
        </LineChart>
      ));

      it('should return an inverse scale function', () => {
        const { spy } = renderTestCase(useYAxisInverseScale);
        expect(spy).toHaveBeenCalled();
        const inverseFunction = spy.mock.calls.at(-1)?.[0];
        expect(inverseFunction).toBeDefined();
        expect(typeof inverseFunction).toBe('function');
      });
    });
  });

  describe('useCartesianScale', () => {
    describe('in simple chart with categorical x-axis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={PageData}>
          <Line dataKey="uv" />
          <XAxis dataKey="name" />
          {children}
        </LineChart>
      ));

      // Create named wrapper hooks that useCartesianScale with specific arguments
      function useCartesianScalePageC200() {
        return useCartesianScale({ x: 'Page C', y: 200 });
      }

      function useCartesianScalePageA100() {
        return useCartesianScale({ x: 'Page A', y: 100 });
      }

      function useCartesianScalePageF400() {
        return useCartesianScale({ x: 'Page F', y: 400 });
      }

      it('should convert data coordinates to pixel coordinates', () => {
        const { spy } = renderTestCase(useCartesianScalePageC200);
        expect(spy).toHaveBeenCalled();
        const coords = spy.mock.calls.at(-1)?.[0];
        expect(coords).toBeDefined();
        expect(typeof coords?.x).toBe('number');
        expect(typeof coords?.y).toBe('number');
      });

      it('should return different pixel values for different data values', () => {
        const { spy: spy1 } = renderTestCase(useCartesianScalePageA100);
        const coords1 = spy1.mock.calls.at(-1)?.[0];

        const { spy: spy2 } = renderTestCase(useCartesianScalePageF400);
        const coords2 = spy2.mock.calls.at(-1)?.[0];

        expect(coords1).toBeDefined();
        expect(coords2).toBeDefined();
        // Different x values should produce different pixel x coordinates
        expect(coords1?.x).not.toBe(coords2?.x);
        // Different y values should produce different pixel y coordinates
        expect(coords1?.y).not.toBe(coords2?.y);
      });
    });

    describe('in chart with numerical x-axis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={PageData}>
          <Line dataKey="uv" />
          <XAxis type="number" dataKey="pv" />
          {children}
        </LineChart>
      ));

      function useCartesianScaleNumerical() {
        return useCartesianScale({ x: 5000, y: 200 });
      }

      it('should convert numerical x value to pixel coordinates', () => {
        const { spy } = renderTestCase(useCartesianScaleNumerical);
        expect(spy).toHaveBeenCalled();
        const coords = spy.mock.calls.at(-1)?.[0];
        expect(coords).toBeDefined();
        expect(typeof coords?.x).toBe('number');
        expect(typeof coords?.y).toBe('number');
      });
    });

    describe('with brush filtering data', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={PageData}>
          <Line dataKey="uv" />
          <XAxis dataKey="name" />
          <Brush startIndex={1} endIndex={2}>
            <LineChart>
              <Line dataKey="uv" />
            </LineChart>
          </Brush>
          {children}
        </LineChart>
      ));

      function useCartesianScalePageB() {
        return useCartesianScale({ x: 'Page B', y: 200 });
      }

      it('should work with filtered data from brush', () => {
        const { spy } = renderTestCase(useCartesianScalePageB);
        expect(spy).toHaveBeenCalled();
        const coords = spy.mock.calls.at(-1)?.[0];
        // Even with brush, scale should exist and return coordinates
        expect(coords).toBeDefined();
        expect(typeof coords?.x).toBe('number');
        expect(typeof coords?.y).toBe('number');
      });
    });
  });
});
