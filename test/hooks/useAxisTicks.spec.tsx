import React from 'react';
import { describe, expect, it } from 'vitest';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import {
  Line,
  LineChart,
  useXAxisInverseTickSnapScale,
  useXAxisScale,
  useXAxisTicks,
  useYAxisInverseTickSnapScale,
  useYAxisScale,
  useYAxisTicks,
  XAxis,
  YAxis,
} from '../../src';
import { PageData } from '../_data';

describe('new axis hooks', () => {
  describe('useXAxisInverseTickSnapScale', () => {
    describe('in simple chart with categorical x-axis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={PageData}>
          <Line dataKey="uv" />
          <XAxis dataKey="name" />
          {children}
        </LineChart>
      ));

      it('should return an inverse scale function', () => {
        const { spy } = renderTestCase(useXAxisInverseTickSnapScale);
        expect(spy).toHaveBeenCalled();
        const inverseFunction = spy.mock.lastCall?.[0];
        expect(inverseFunction).toBeDefined();
        expect(typeof inverseFunction).toBe('function');
      });

      it('should snap to the closest tick', () => {
        const { spy: scaleSpy } = renderTestCase(useXAxisScale);
        const scaleFunction = scaleSpy.mock.lastCall?.[0];

        const { spy: inverseSpy } = renderTestCase(useXAxisInverseTickSnapScale);
        const inverseFunction = inverseSpy.mock.lastCall?.[0];

        if (scaleFunction && inverseFunction) {
          // Get pixel for 'Page C'
          const pixelForPageC = scaleFunction('Page C');
          const pixelForPageD = scaleFunction('Page D');

          if (typeof pixelForPageC !== 'number' || typeof pixelForPageD !== 'number') {
            throw new Error('Pixel coordinates should be numbers');
          }

          // Pixel slightly closer to C than D
          const nearC = pixelForPageC + (pixelForPageD - pixelForPageC) * 0.1;

          const snappedToC = inverseFunction(nearC);
          expect(snappedToC).toBe('Page C');

          // Pixel slightly closer to D than C
          const nearD = pixelForPageC + (pixelForPageD - pixelForPageC) * 0.9;
          const snappedToD = inverseFunction(nearD);
          expect(snappedToD).toBe('Page D');
        }
      });
    });
  });

  describe('useYAxisInverseTickSnapScale', () => {
    describe('in simple chart with numerical y-axis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={PageData}>
          <Line dataKey="uv" />
          <YAxis />
          {children}
        </LineChart>
      ));

      it('should return an inverse scale function', () => {
        const { spy } = renderTestCase(useYAxisInverseTickSnapScale);
        expect(spy).toHaveBeenCalled();
        const inverseFunction = spy.mock.lastCall?.[0];
        expect(inverseFunction).toBeDefined();
        expect(typeof inverseFunction).toBe('function');
      });

      it('should snap to the closest tick', () => {
        const { spy: scaleSpy } = renderTestCase(useYAxisScale);
        const scaleFunction = scaleSpy.mock.lastCall?.[0];

        const { spy: inverseSpy } = renderTestCase(useYAxisInverseTickSnapScale);
        const inverseFunction = inverseSpy.mock.lastCall?.[0];

        if (scaleFunction && inverseFunction) {
          // Let's find two ticks first
          const { spy: ticksSpy } = renderTestCase(useYAxisTicks);
          const ticks = ticksSpy.mock.lastCall?.[0];

          if (ticks && ticks.length >= 2) {
            const tick1 = ticks[0];
            const tick2 = ticks[1];

            const pixel1 = tick1.coordinate;
            const pixel2 = tick2.coordinate;

            // Pixel slightly closer to tick1 than tick2
            const near1 = pixel1 + (pixel2 - pixel1) * 0.1;
            const snappedTo1 = inverseFunction(near1);
            expect(snappedTo1).toBe(tick1.value);

            // Pixel slightly closer to tick2 than tick1
            const near2 = pixel1 + (pixel2 - pixel1) * 0.9;
            const snappedTo2 = inverseFunction(near2);
            expect(snappedTo2).toBe(tick2.value);
          }
        }
      });
    });
  });

  describe('useXAxisTicks', () => {
    describe('in simple chart with categorical x-axis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={PageData}>
          <Line dataKey="uv" />
          <XAxis dataKey="name" />
          {children}
        </LineChart>
      ));

      it('should return ticks', () => {
        const { spy } = renderTestCase(useXAxisTicks);
        expect(spy).toHaveBeenCalled();
        const ticks = spy.mock.lastCall?.[0];
        expect(ticks).toBeDefined();
        expect(Array.isArray(ticks)).toBe(true);
        expect(ticks!.length).toBeGreaterThan(0);
        expect(ticks![0].value).toBe('Page A');
      });
    });
  });

  describe('useYAxisTicks', () => {
    describe('in simple chart with numerical y-axis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={PageData}>
          <Line dataKey="uv" />
          <YAxis />
          {children}
        </LineChart>
      ));

      it('should return ticks', () => {
        const { spy } = renderTestCase(useYAxisTicks);
        expect(spy).toHaveBeenCalled();
        const ticks = spy.mock.lastCall?.[0];
        expect(ticks).toBeDefined();
        expect(Array.isArray(ticks)).toBe(true);
        expect(ticks!.length).toBeGreaterThan(0);
        // Numerical axis ticks
        expect(typeof ticks![0].value).toBe('number');
      });
    });
  });
});
