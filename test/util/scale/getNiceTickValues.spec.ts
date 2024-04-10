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
      const rounghStep = new Decimal(-0.5);
      const formattedStep = getFormatStep(rounghStep, true, 0, 0.05);
      expect(formattedStep.toNumber()).toBe(0);
    });

    it('should return correct step', () => {
      const rounghStep = new Decimal(0.5);
      const formattedStep = getFormatStep(rounghStep, true, 0, 0.05);
      expect(formattedStep.toNumber()).toBe(0.5);
    });
  });

  describe('getTickOfSingleValue', () => {
    it('should generate ticks for single value', () => {
      const ticks = getTickOfSingleValue(5, 5, true);
      expect(ticks).toContain(5);
      expect(ticks.length).toBe(5);
    });

    it('should generate ticks for single value with decimals', () => {
      const ticks = getTickOfSingleValue(5.5, 5, true);
      expect(ticks).toContain(5);
      expect(ticks.length).toBe(5);
    });

    it('should generate ticks for single value with decimals and allowDecimals false', () => {
      const ticks = getTickOfSingleValue(5.5, 5, false);
      expect(ticks).toContain(5);
      expect(ticks.length).toBe(5);
    });

    it('should generate ticks for single value with decimal between 0 and 1', () => {
      const ticks = getTickOfSingleValue(0.5, 3, false);
      expect(ticks).toContain(-1);
      expect(ticks.length).toBe(3);
    });
  });

  describe('calculateStep', () => {
    it('should return zeros for non-finite calculations', () => {
      const step = calculateStep(Infinity, Infinity, 5, true, 0, 0.05);
      expect(step.step.toNumber()).toBe(0);
      expect(step.tickMin.toNumber()).toBe(0);
      expect(step.tickMax.toNumber()).toBe(0);
    });

    it('should calculate step correctly', () => {
      const step = calculateStep(100, 200, 5, true, 0, 0.05);
      expect(step.step.toNumber()).toBe(25);
      expect(step.tickMin.toNumber()).toBe(100);
      expect(step.tickMax.toNumber()).toBe(200);
    });

    it('should contains 0 when min <= 0 and max >= 0', () => {
      const step = calculateStep(-100, 100, 5, true, 0, 0.05);
      expect(step.step.toNumber()).toBe(50);
      expect(step.tickMin.toNumber()).toBe(-100);
      expect(step.tickMax.toNumber()).toBe(100);
    });
  });

  describe('getNiceTickValues', () => {
    it('should return correct ticks', () => {
      const ticks = getNiceTickValues([0, 10], 5, true, 0.05);
      expect(ticks).toEqual([0, 3, 6, 9, 12]);
    });
  });
});
