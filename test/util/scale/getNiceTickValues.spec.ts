import { describe } from 'vitest';
import Decimal from 'decimal.js-light';
import {
  calculateStep,
  getFormatStep,
  getNiceTickValues,
  getTickOfSingleValue,
  getValidInterval,
} from '../../../src/util/scale/getNiceTickValues';

describe('getNiceTickValues', () => {
  describe('getValidInterval', () => {
    it('should return correct interval', () => {
      const [min, max] = getValidInterval([0, 10]);
      expect(min).toBe(0);
      expect(max).toBe(10);
    });
  });

  describe('getFormatStep', () => {
    it('should return 0 when roughStep is less than 0', () => {
      const roughStep = new Decimal(-0.5);
      const formattedStep = getFormatStep(roughStep, true, 0);
      expect(formattedStep.toNumber()).toBe(0);
    });

    it('should return correct step', () => {
      const roughStep = new Decimal(0.5);
      const formattedStep = getFormatStep(roughStep, true, 0);
      expect(formattedStep.toNumber()).toBe(0.5);
    });

    it('should return bigger step for bigger numbers', () => {
      const roughStep = new Decimal(3.45687e9);
      const formattedStep = getFormatStep(roughStep, true, 0);
      expect(formattedStep.toNumber()).toBe(3.5e9);
    });

    it('should return smaller step for small numbers', () => {
      const roughStep = new Decimal(9.6341e-9);
      const formattedStep = getFormatStep(roughStep, true, 0);
      expect(formattedStep.toNumber()).toBe(1e-8);
    });

    it('should return correct step without decimals', () => {
      const roughStep = new Decimal(0.5);
      const formattedStep = getFormatStep(roughStep, false, 0);
      expect(formattedStep.toNumber()).toBe(1);
    });
  });

  describe('getTickOfSingleValue', () => {
    it('should generate ticks for single value', () => {
      const ticks = getTickOfSingleValue(5, 5, true);
      expect(ticks).toEqual([3, 4, 5, 6, 7]);
    });

    it('should generate ticks for single decimal value', () => {
      const ticks = getTickOfSingleValue(5.5, 5, true);
      expect(ticks).toEqual([3, 4, 5, 6, 7]);
    });

    it('should generate ticks for single value with decimals and allowDecimals false', () => {
      const ticks = getTickOfSingleValue(5.5, 5, false);
      expect(ticks).toEqual([3, 4, 5, 6, 7]);
    });

    it('should generate ticks for single value with decimals', () => {
      const ticks = getTickOfSingleValue(0.5, 5, true);
      expect(ticks).toEqual([0.3, 0.4, 0.5, 0.6, 0.7]);
    });

    it('should generate ticks for single value with decimals and allowDecimals false', () => {
      const ticks = getTickOfSingleValue(0.5, 5, false);
      expect(ticks).toEqual([-2, -1, +0, 1, 2]);
    });

    it('should generate 3 ticks for single value with decimal between 0 and 1', () => {
      const ticks = getTickOfSingleValue(0.5, 3, false);
      expect(ticks).toEqual([-1, +0, 1]);
    });
  });

  describe('calculateStep', () => {
    it('should return zeros for non-finite calculations', () => {
      const step = calculateStep(Infinity, Infinity, 5, true, 0);
      expect(step.step.toNumber()).toBe(0);
      expect(step.tickMin.toNumber()).toBe(0);
      expect(step.tickMax.toNumber()).toBe(0);
    });

    it('should calculate step correctly', () => {
      const step = calculateStep(100, 200, 5, true, 0);
      expect(step.step.toNumber()).toBe(25);
      expect(step.tickMin.toNumber()).toBe(100);
      expect(step.tickMax.toNumber()).toBe(200);
    });

    it('should contains 0 when min <= 0 and max >= 0', () => {
      const step = calculateStep(-100, 100, 5, true, 0);
      expect(step.step.toNumber()).toBe(50);
      expect(step.tickMin.toNumber()).toBe(-100);
      expect(step.tickMax.toNumber()).toBe(100);
    });
  });

  describe('getNiceTickValues', () => {
    it('should return correct ticks with positive integer and odd tick count', () => {
      const scales = getNiceTickValues([5, 5], 3);
      expect(scales).toEqual([4, 5, 6]);
    });

    it('should return correct ticks with positive integer and even tick count', () => {
      const scales = getNiceTickValues([5, 5], 4);
      expect(scales).toEqual([4, 5, 6, 7]);
    });

    it('should return correct ticks with negative integer and odd tick count', () => {
      const scales = getNiceTickValues([-5, -5], 5);
      expect(scales).toEqual([-7, -6, -5, -4, -3]);
    });

    it('should return correct ticks with negative integer and even tick count', () => {
      const scales = getNiceTickValues([-5, -5], 2);
      expect(scales).toEqual([-5, -4]);
    });

    it('should return correct ticks with all zeros and odd tick count', () => {
      const scales = getNiceTickValues([0, 0], 5);
      expect(scales).toEqual([0, 1, 2, 3, 4]);
    });

    it('should return correct ticks with all zeros and even tick count', () => {
      const scales = getNiceTickValues([0, 0], 4);
      expect(scales).toEqual([0, 1, 2, 3]);
    });

    it('should return correct ticks with positive pure decimal and odd tick count', () => {
      const scales = getNiceTickValues([0.05, 0.05], 3);
      expect(scales).toEqual([0.04, 0.05, 0.06]);
    });

    it('should return correct ticks with positive pure decimal and odd tick count not allow decimals', () => {
      const scales = getNiceTickValues([0.05, 0.05], 3, false);
      expect(scales).toEqual([-1, 0, 1]);
    });

    it('should return correct ticks with positive pure decimal and even tick count', () => {
      const scales = getNiceTickValues([0.8, 0.8], 4);
      expect(scales).toEqual([0.7, 0.8, 0.9, 1]);
    });

    it('should return correct ticks with positive unpure decimal and odd tick count', () => {
      const scales = getNiceTickValues([5.2, 5.2], 3);
      expect(scales).toEqual([4, 5, 6]);
    });

    it('should return correct ticks with positive unpure decimal and odd tick count not allow decimals', () => {
      const scales = getNiceTickValues([5.2, 5.2], 3, false);
      expect(scales).toEqual([4, 5, 6]);
    });

    it('should return correct ticks with positive unpure decimal and even tick count', () => {
      const scales = getNiceTickValues([3.92, 3.92], 2);
      expect(scales).toEqual([3, 4]);
    });

    it('should return correct ticks with negative pure decimal and odd tick count', () => {
      const scales = getNiceTickValues([-0.053, -0.053], 5);
      expect(scales).toEqual([-0.08, -0.07, -0.06, -0.05, -0.04]);
    });

    it('should return correct ticks with negative pure decimal and odd tick count not allow decimals', () => {
      const scales = getNiceTickValues([-0.053, -0.053], 5, false);
      expect(scales).toEqual([-3, -2, -1, 0, 1]);
    });

    it('should return correct ticks with negative pure decimal and even tick count', () => {
      const scales = getNiceTickValues([-0.832, -0.832], 4);
      expect(scales).toEqual([-1, -0.9, -0.8, -0.7]);
    });

    it('should return correct ticks with negative unpure decimal and odd tick count', () => {
      const scales = getNiceTickValues([-5.2, -5.2], 3);
      expect(scales).toEqual([-7, -6, -5]);
    });

    it('should return correct ticks with negative unpure decimal and even tick count', () => {
      const scales = getNiceTickValues([-3.92, -3.92], 2);
      expect(scales).toEqual([-4, -3]);
    });

    it('should return correct ticks with Infinity values', () => {
      const scales = getNiceTickValues([Infinity, Infinity], 5);
      expect(scales).toEqual([Infinity, Infinity, Infinity, Infinity, Infinity]);
    });

    it('should return correct ticks with -Infinity values', () => {
      const scales = getNiceTickValues([-Infinity, -Infinity], 5);
      expect(scales).toEqual([-Infinity, -Infinity, -Infinity, -Infinity, -Infinity]);
    });

    it('should return correct ticks with unequal values of positive integer', () => {
      const scales = getNiceTickValues([1, 5], 5);
      expect(scales).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return correct ticks with unequal values of negative to positive integer & has odd ticks', () => {
      const scales = getNiceTickValues([-5, 95], 7);
      expect(scales).toEqual([-20, 0, 20, 40, 60, 80, 100]);
    });

    it('should return correct ticks with unequal values of negative integer', () => {
      const scales = getNiceTickValues([-105, -25], 6);
      expect(scales).toEqual([-120, -100, -80, -60, -40, -20]);
    });

    it('should return correct ticks with min is bigger than max & has odd ticks', () => {
      const scales = getNiceTickValues([67, 5], 5);
      expect(scales).toEqual([80, 60, 40, 20, 0]);
    });

    it('should return correct ticks with min is bigger than max & has even ticks', () => {
      const scales = getNiceTickValues([67, 5], 4);
      expect(scales).toEqual([75, 50, 25, 0]);
    });

    it('should return correct ticks with float [39.9156, 42.5401, 5]', () => {
      const scales = getNiceTickValues([39.9156, 42.5401], 5);
      expect(scales).toEqual([39.9, 40.6, 41.3, 42, 42.7]);
    });

    it('should return correct ticks with float [0.3885416666666666, 0.04444444444444451, 5]', () => {
      const scales = getNiceTickValues([0.3885416666666666, 0.04444444444444451], 5);
      expect(scales).toEqual([0.4, 0.3, 0.2, 0.1, 0]);
    });

    it('should return correct ticks with float [-4.10389, 0.59414, 7]', () => {
      const scales = getNiceTickValues([-4.10389, 0.59414], 7);
      expect(scales).toEqual([-4.25, -3.4, -2.55, -1.7, -0.85, 0, 0.85]);
    });

    it('should return correct ticks with float [-4.10389, 0.59414, 7] not allow decimals', () => {
      const scales = getNiceTickValues([-4.10389, 0.59414], 7, false);
      expect(scales).toEqual([-5, -4, -3, -2, -1, 0, 1]);
    });

    it('should return correct ticks with integers [0, 14, 5]', () => {
      const scales = getNiceTickValues([0, 14], 5);
      expect(scales).toEqual([0, 4, 8, 12, 16]);
    });

    it('should return correct ticks with integers [0, 1, 5]', () => {
      const scales = getNiceTickValues([0, 1], 5);
      expect(scales).toEqual([0, 0.25, 0.5, 0.75, 1]);
    });

    it('should return correct ticks with integers [0, 1e+100, 6]', () => {
      const scales = getNiceTickValues([0, 1e100], 6);
      expect(scales).toEqual([0, 2e99, 4e99, 6e99, 8e99, 1e100]);
    });

    it('should return correct ticks with Infinity values [-Infinity, Infinity, 5]', () => {
      const scales = getNiceTickValues([-Infinity, Infinity], 5);
      expect(scales).toEqual([-Infinity, Infinity, Infinity, Infinity, Infinity]);
    });

    it('should return correct ticks with Infinity values [-Infinity, 100, 5]', () => {
      const scales = getNiceTickValues([-Infinity, 100], 5);
      expect(scales).toEqual([-Infinity, -Infinity, -Infinity, -Infinity, 100]);
    });

    it('should return correct ticks with Infinity values [-100, Infinity, 5]', () => {
      const scales = getNiceTickValues([-100, Infinity], 5);
      expect(scales).toEqual([-100, Infinity, Infinity, Infinity, Infinity]);
    });

    it('should return correct ticks with very small values [0, 0.000013202017268238587, 5]', () => {
      const scales = getNiceTickValues([0, 0.000013202017268238587], 5);
      expect(scales).toEqual([0, 0.0000035, 0.000007, 0.0000105, 0.000014]);
    });
  });
});
