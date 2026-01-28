import { describe, it, expect, vi } from 'vitest';
import { scaleLinear } from 'victory-vendor/d3-scale';
import { getEndPoints, ReferenceLineSegment } from '../../../src/cartesian/ReferenceLine';
import { CartesianViewBoxRequired } from '../../../src/util/types';
import { BandPosition, rechartsScaleFactory, RechartsScale } from '../../../src/util/scale/RechartsScale';

describe('getEndPoints', () => {
  const throwingScale: RechartsScale = {
    domain() {
      throw new Error('Should not be called');
    },
    range() {
      throw new Error('Should not be called');
    },
    rangeMax() {
      throw new Error('Should not be called');
    },
    rangeMin() {
      throw new Error('Should not be called');
    },
    map() {
      throw new Error('Should not be called');
    },
    isInRange() {
      throw new Error('Should not be called');
    },
  };
  it('should return null if X, Y are not fixed and isSegment is false too', () => {
    const viewBox: CartesianViewBoxRequired = {
      y: 10,
      height: 5,
      x: 100,
      width: 100,
    };
    const result = getEndPoints(throwingScale, throwingScale, viewBox, undefined, undefined, undefined, {
      ifOverflow: 'discard',
    });
    expect(result).toEqual(null);
  });

  describe('fixed Y location when out of range', () => {
    const position = 'start';
    const lineLocationY = 9;
    const yScale = rechartsScaleFactory<number>(scaleLinear().domain([0, 5]).range([0, 50]));

    it('should return null when set to discard overflow', () => {
      const viewBox: CartesianViewBoxRequired = {
        x: 10,
        width: 5,
        y: 0,
        height: 10,
      };
      const result = getEndPoints(throwingScale, yScale, viewBox, position, 'bottom', 'left', {
        y: lineLocationY,
        ifOverflow: 'discard',
      });
      expect(result).toEqual(null);
    });

    it('should return gibberish when viewBox is empty', () => {
      // @ts-expect-error typescript is correct here, the function demands a CartesianViewBoxRequired.
      const viewBox: CartesianViewBoxRequired = {};
      const result = getEndPoints(throwingScale, yScale, viewBox, position, undefined, 'left', {
        y: lineLocationY,
        ifOverflow: 'visible',
      });

      const expected = [
        { x: undefined, y: 90 },
        { x: NaN, y: 90 },
      ];
      expect(result).toEqual(expected);
    });

    it('should return coordinates when set to display overflow when orientation is "right"', () => {
      const viewBox: CartesianViewBoxRequired = {
        x: 10,
        width: 5,
        y: 0,
        height: 0,
      };
      const result = getEndPoints(throwingScale, yScale, viewBox, position, undefined, 'right', {
        y: lineLocationY,
        ifOverflow: 'visible',
      });

      const expected = [
        { x: 15, y: 90 },
        { x: 10, y: 90 },
      ];
      expect(result).toEqual(expected);
    });

    it('should reverse first and second point if yAxis orientation is "left"', () => {
      const viewBox: CartesianViewBoxRequired = {
        x: 10,
        width: 5,
        y: 0,
        height: 0,
      };
      const result = getEndPoints(throwingScale, yScale, viewBox, position, undefined, 'left', {
        y: lineLocationY,
        ifOverflow: 'visible',
      });

      const expected = [
        { x: 10, y: 90 },
        { x: 15, y: 90 },
      ];
      expect(result).toEqual(expected);
    });
  });

  describe('fixed Y location when in range', () => {
    const position = 'start';
    const lineLocationY = 9;
    const yScale = rechartsScaleFactory<number>(scaleLinear().domain([0, 15]).range([0, 150]));
    const coord = Symbol('coord');
    const scales = {
      y: {
        apply: vi.fn(),
        isInRange: vi.fn(),
      },
    };

    beforeEach(() => {
      scales.y.apply.mockReset();
      scales.y.apply.mockImplementation(() => coord);
      scales.y.isInRange.mockReset();
      scales.y.isInRange.mockImplementation(() => true);
    });

    it('should return coordinates when set to discard overflow', () => {
      const viewBox: CartesianViewBoxRequired = {
        x: 10,
        width: 5,
        y: 0,
        height: 0,
      };
      const result = getEndPoints(throwingScale, yScale, viewBox, position, undefined, 'right', {
        y: lineLocationY,
        ifOverflow: 'discard',
      });
      const expected = [
        { x: 15, y: 90 },
        { x: 10, y: 90 },
      ];
      expect(result).toEqual(expected);
    });

    it('should return coordinates when set to display overflow when orientation is "right"', () => {
      const viewBox: CartesianViewBoxRequired = {
        x: 10,
        width: 5,
        y: 0,
        height: 0,
      };
      const result = getEndPoints(throwingScale, yScale, viewBox, position, undefined, 'right', {
        y: lineLocationY,
        ifOverflow: 'visible',
      });

      const expected = [
        { x: 15, y: 90 },
        { x: 10, y: 90 },
      ];
      expect(result).toEqual(expected);
    });

    it('should reverse first and second point if yAxis orientation is "left"', () => {
      const viewBox: CartesianViewBoxRequired = {
        x: 10,
        width: 5,
        y: 0,
        height: 0,
      };
      const result = getEndPoints(throwingScale, yScale, viewBox, position, undefined, 'left', {
        y: lineLocationY,
        ifOverflow: 'visible',
      });

      const expected = [
        { x: 10, y: 90 },
        { x: 15, y: 90 },
      ];
      expect(result).toEqual(expected);
    });
  });

  describe('fixed X location when out of range', () => {
    const position = 'start';
    const lineLocationX = 9;
    const xScale = rechartsScaleFactory<number>(scaleLinear().domain([0, 5]).range([0, 50]));

    it('should return null when set to discard overflow', () => {
      const viewBox: CartesianViewBoxRequired = {
        y: 0,
        height: 0,
        x: 0,
        width: 0,
      };
      const result = getEndPoints(xScale, throwingScale, viewBox, position, 'bottom', undefined, {
        x: lineLocationX,
        ifOverflow: 'discard',
      });
      expect(result).toEqual(null);
    });

    it('should return coordinates when set to display overflow when orientation is "top"', () => {
      const viewBox: CartesianViewBoxRequired = {
        y: 10,
        height: 5,
        x: 0,
        width: 0,
      };
      const result = getEndPoints(xScale, throwingScale, viewBox, position, 'top', undefined, {
        x: lineLocationX,
        ifOverflow: 'visible',
      });

      const expected = [
        { x: 90, y: 10 },
        { x: 90, y: 15 },
      ];
      expect(result).toEqual(expected);
    });

    it('should reverse first and second point if xAxis orientation is "top"', () => {
      const viewBox: CartesianViewBoxRequired = {
        y: 10,
        height: 5,
        x: 0,
        width: 0,
      };
      const result = getEndPoints(xScale, throwingScale, viewBox, position, 'top', undefined, {
        x: lineLocationX,
        ifOverflow: 'visible',
      });

      const expected = [
        { x: 90, y: 10 },
        { x: 90, y: 15 },
      ];
      expect(result).toEqual(expected);
    });
  });

  describe('fixed X location when in range', () => {
    const position = 'start';
    const lineLocationX = 9;
    const xScale = rechartsScaleFactory<number>(scaleLinear().domain([0, 15]).range([0, 150]));

    it('should return coordinates when set to discard overflow', () => {
      const viewBox: CartesianViewBoxRequired = {
        y: 10,
        height: 5,
        x: 0,
        width: 0,
      };
      const result = getEndPoints(xScale, throwingScale, viewBox, position, 'bottom', undefined, {
        x: lineLocationX,
        ifOverflow: 'discard',
      });
      const expected = [
        { x: 90, y: 15 },
        { x: 90, y: 10 },
      ];
      expect(result).toEqual(expected);
    });

    it('should return coordinates when set to display overflow when orientation is "top"', () => {
      const viewBox: CartesianViewBoxRequired = {
        y: 10,
        height: 5,
        x: 0,
        width: 0,
      };
      const result = getEndPoints(xScale, throwingScale, viewBox, position, 'top', undefined, {
        x: lineLocationX,
        ifOverflow: 'visible',
      });

      const expected = [
        { x: 90, y: 10 },
        { x: 90, y: 15 },
      ];
      expect(result).toEqual(expected);
    });

    it('should reverse first and second point if xAxis orientation is "top"', () => {
      const viewBox: CartesianViewBoxRequired = {
        y: 10,
        height: 5,
        x: 0,
        width: 0,
      };
      const result = getEndPoints(xScale, throwingScale, viewBox, position, 'top', undefined, {
        x: lineLocationX,
        ifOverflow: 'visible',
      });

      const expected = [
        { x: 90, y: 10 },
        { x: 90, y: 15 },
      ];
      expect(result).toEqual(expected);
    });
  });

  describe('segment', () => {
    const viewBox: CartesianViewBoxRequired = {
      y: 10,
      height: 5,
      x: 100,
      width: 100,
    };
    it('should return null if segment array is empty', () => {
      const result = getEndPoints(throwingScale, throwingScale, viewBox, undefined, undefined, undefined, {
        // @ts-expect-error TypeScript is correct here - segment should have two items always
        segment: [],
        ifOverflow: 'visible',
      });
      expect(result).toEqual(null);
    });

    it('should pass every segment into scales function', () => {
      const segment: ReferenceLineSegment = [{ x: 1 }, { x: 2 }];
      const position: BandPosition = 'middle';
      const scaleX = rechartsScaleFactory<number>(scaleLinear().domain([0, 10]).range([0, 100]));
      const scaleY = rechartsScaleFactory<number>(scaleLinear().domain([0, 20]).range([0, 100]));
      const result = getEndPoints(scaleX, scaleY, viewBox, position, undefined, undefined, {
        segment,
        ifOverflow: 'visible',
      });
      expect(result).toEqual([
        { x: 10, y: 0 },
        { x: 20, y: 100 },
      ]);
    });

    it('should return null if outside of range and overflow = discard', () => {
      const segment: ReferenceLineSegment = [{ x: 11 }, { x: 21 }];
      const scaleX = rechartsScaleFactory<number>(scaleLinear().domain([0, 10]).range([0, 100]));
      const scaleY = rechartsScaleFactory<number>(scaleLinear().domain([0, 20]).range([0, 100]));
      const result = getEndPoints(scaleX, scaleY, viewBox, undefined, undefined, undefined, {
        segment,
        ifOverflow: 'discard',
      });
      expect(result).toEqual(null);
    });

    it.each(['hidden', 'visible', 'extendDomain'] as const)(
      'should return point if outside of range and overflow = %s',
      ifOverflow => {
        const segment: ReferenceLineSegment = [{ x: 11 }, { x: 21 }];
        const scaleX = rechartsScaleFactory<number>(scaleLinear().domain([0, 10]).range([0, 100]));
        const scaleY = rechartsScaleFactory<number>(scaleLinear().domain([0, 20]).range([0, 100]));
        const result = getEndPoints(scaleX, scaleY, viewBox, undefined, undefined, undefined, {
          segment,
          ifOverflow,
        });
        expect(result).toEqual([
          { x: 110.00000000000001, y: 0 },
          { x: 210, y: 100 },
        ]);
      },
    );

    it.each(['hidden', 'visible', 'extendDomain', 'discard'] as const)(
      'should return whatever scales returned if in range and ifOverflow = %s',
      ifOverflow => {
        const segment: ReferenceLineSegment = [{ x: 1 }, { x: 2 }];
        const scaleX = rechartsScaleFactory<number>(scaleLinear().domain([0, 10]).range([0, 100]));
        const scaleY = rechartsScaleFactory<number>(scaleLinear().domain([0, 20]).range([0, 100]));
        const result = getEndPoints(scaleX, scaleY, viewBox, undefined, undefined, undefined, {
          segment,
          ifOverflow,
        });
        expect(result).toEqual([
          { x: 10, y: 0 },
          { x: 20, y: 100 },
        ]);
      },
    );
  });
});
