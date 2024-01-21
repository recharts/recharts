import { describe, it, expect, vi } from 'vitest';
import { ReferenceLinePosition, getEndPoints } from '../../../src/cartesian/ReferenceLine';
import { CartesianViewBox } from '../../../src/util/types';

describe('getEndPoints', () => {
  it('should return null if X, Y are not fixed and isSegment is false too', () => {
    const result = getEndPoints(null, false, false, false, {}, undefined, undefined, undefined, {});
    expect(result).toEqual(null);
  });

  describe('fixed Y location when out of range', () => {
    const position = 'start';
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
      scales.y.isInRange.mockImplementation(() => false);
    });

    it('should return null when set to discard overflow', () => {
      const lineLocationY = 9;
      const result = getEndPoints(scales, false, true, false, {}, position, 'bottom', 'left', {
        y: lineLocationY,
        ifOverflow: 'discard',
      });
      expect(result).toEqual(null);

      expect(scales.y.apply).toHaveBeenCalledTimes(1);
      expect(scales.y.apply).toHaveBeenCalledWith(lineLocationY, { position });

      expect(scales.y.isInRange).toBeCalledTimes(1);
      expect(scales.y.isInRange).toBeCalledWith(coord);
    });

    it('should return gibberish when viewBox is empty', () => {
      const viewBox: CartesianViewBox = {};
      const result = getEndPoints(scales, false, true, false, viewBox, position, undefined, 'left', {
        ifOverflow: 'visible',
      });

      const expected = [
        { x: undefined, y: coord },
        { x: NaN, y: coord },
      ];
      expect(result).toEqual(expected);
    });

    it('should return coordinates when set to display overflow when orientation is "right"', () => {
      const viewBox: CartesianViewBox = {
        x: 10,
        width: 5,
      };
      const result = getEndPoints(scales, false, true, false, viewBox, position, undefined, 'right', {
        ifOverflow: 'visible',
      });

      const expected = [
        { x: 15, y: coord },
        { x: 10, y: coord },
      ];
      expect(result).toEqual(expected);
    });

    it('should reverse first and second point if yAxis orientation is "left"', () => {
      const viewBox: CartesianViewBox = {
        x: 10,
        width: 5,
      };
      const result = getEndPoints(scales, false, true, false, viewBox, position, undefined, 'left', {
        ifOverflow: 'visible',
      });

      const expected = [
        { x: 10, y: coord },
        { x: 15, y: coord },
      ];
      expect(result).toEqual(expected);
    });
  });

  describe('fixed Y location when in range', () => {
    const position = 'start';
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
      const viewBox: CartesianViewBox = {
        x: 10,
        width: 5,
      };
      const lineLocationY = 9;
      const result = getEndPoints(scales, false, true, false, viewBox, position, undefined, 'right', {
        y: lineLocationY,
        ifOverflow: 'discard',
      });
      const expected = [
        { x: 15, y: coord },
        { x: 10, y: coord },
      ];
      expect(result).toEqual(expected);

      expect(scales.y.apply).toHaveBeenCalledTimes(1);
      expect(scales.y.apply).toHaveBeenCalledWith(lineLocationY, { position });

      expect(scales.y.isInRange).toBeCalledTimes(1);
      expect(scales.y.isInRange).toBeCalledWith(coord);
    });

    it('should return gibberish when viewBox is empty', () => {
      const viewBox: CartesianViewBox = {};
      const result = getEndPoints(scales, false, true, false, viewBox, position, undefined, 'left', {
        ifOverflow: 'visible',
      });

      const expected = [
        { x: undefined, y: coord },
        { x: NaN, y: coord },
      ];
      expect(result).toEqual(expected);
    });

    it('should return coordinates when set to display overflow when orientation is "right"', () => {
      const viewBox: CartesianViewBox = {
        x: 10,
        width: 5,
      };
      const result = getEndPoints(scales, false, true, false, viewBox, position, undefined, 'right', {
        ifOverflow: 'visible',
      });

      const expected = [
        { x: 15, y: coord },
        { x: 10, y: coord },
      ];
      expect(result).toEqual(expected);
    });

    it('should reverse first and second point if yAxis orientation is "left"', () => {
      const viewBox: CartesianViewBox = {
        x: 10,
        width: 5,
      };
      const result = getEndPoints(scales, false, true, false, viewBox, position, undefined, 'left', {
        ifOverflow: 'visible',
      });

      const expected = [
        { x: 10, y: coord },
        { x: 15, y: coord },
      ];
      expect(result).toEqual(expected);
    });
  });

  describe('fixed X location when out of range', () => {
    const position = 'start';
    const coord = Symbol('coord');
    const scales = {
      x: {
        apply: vi.fn(),
        isInRange: vi.fn(),
      },
    };

    beforeEach(() => {
      scales.x.apply.mockReset();
      scales.x.apply.mockImplementation(() => coord);
      scales.x.isInRange.mockReset();
      scales.x.isInRange.mockImplementation(() => false);
    });

    it('should return null when set to discard overflow', () => {
      const lineLocationX = 9;
      const result = getEndPoints(scales, true, false, false, {}, position, 'bottom', undefined, {
        x: lineLocationX,
        ifOverflow: 'discard',
      });
      expect(result).toEqual(null);

      expect(scales.x.apply).toHaveBeenCalledTimes(1);
      expect(scales.x.apply).toHaveBeenCalledWith(lineLocationX, { position });

      expect(scales.x.isInRange).toBeCalledTimes(1);
      expect(scales.x.isInRange).toBeCalledWith(coord);
    });

    it('should return gibberish when viewBox is empty', () => {
      const viewBox: CartesianViewBox = {};
      const result = getEndPoints(scales, true, false, false, viewBox, position, 'bottom', undefined, {
        ifOverflow: 'visible',
      });

      const expected = [
        { x: coord, y: NaN },
        { x: coord, y: undefined },
      ];
      expect(result).toEqual(expected);
    });

    it('should return coordinates when set to display overflow when orientation is "top"', () => {
      const viewBox: CartesianViewBox = {
        y: 10,
        height: 5,
      };
      const result = getEndPoints(scales, true, false, false, viewBox, position, 'top', undefined, {
        ifOverflow: 'visible',
      });

      const expected = [
        { x: coord, y: 10 },
        { x: coord, y: 15 },
      ];
      expect(result).toEqual(expected);
    });

    it('should reverse first and second point if xAxis orientation is "top"', () => {
      const viewBox: CartesianViewBox = {
        y: 10,
        height: 5,
      };
      const result = getEndPoints(scales, true, false, false, viewBox, position, 'top', undefined, {
        ifOverflow: 'visible',
      });

      const expected = [
        { x: coord, y: 10 },
        { x: coord, y: 15 },
      ];
      expect(result).toEqual(expected);
    });
  });

  describe('fixed X location when in range', () => {
    const position = 'start';
    const coord = Symbol('coord');
    const scales = {
      x: {
        apply: vi.fn(),
        isInRange: vi.fn(),
      },
    };

    beforeEach(() => {
      scales.x.apply.mockReset();
      scales.x.apply.mockImplementation(() => coord);
      scales.x.isInRange.mockReset();
      scales.x.isInRange.mockImplementation(() => true);
    });

    it('should return coordinates when set to discard overflow', () => {
      const lineLocationX = 9;
      const viewBox: CartesianViewBox = {
        y: 10,
        height: 5,
      };
      const result = getEndPoints(scales, true, false, false, viewBox, position, 'bottom', undefined, {
        x: lineLocationX,
        ifOverflow: 'discard',
      });
      const expected = [
        { x: coord, y: 15 },
        { x: coord, y: 10 },
      ];
      expect(result).toEqual(expected);

      expect(scales.x.apply).toHaveBeenCalledTimes(1);
      expect(scales.x.apply).toHaveBeenCalledWith(lineLocationX, { position });

      expect(scales.x.isInRange).toBeCalledTimes(1);
      expect(scales.x.isInRange).toBeCalledWith(coord);
    });

    it('should return gibberish when viewBox is empty', () => {
      const viewBox: CartesianViewBox = {};
      const result = getEndPoints(scales, true, false, false, viewBox, position, 'bottom', undefined, {
        ifOverflow: 'visible',
      });

      const expected = [
        { x: coord, y: NaN },
        { x: coord, y: undefined },
      ];
      expect(result).toEqual(expected);
    });

    it('should return coordinates when set to display overflow when orientation is "top"', () => {
      const viewBox: CartesianViewBox = {
        y: 10,
        height: 5,
      };
      const result = getEndPoints(scales, true, false, false, viewBox, position, 'top', undefined, {
        ifOverflow: 'visible',
      });

      const expected = [
        { x: coord, y: 10 },
        { x: coord, y: 15 },
      ];
      expect(result).toEqual(expected);
    });

    it('should reverse first and second point if xAxis orientation is "top"', () => {
      const viewBox: CartesianViewBox = {
        y: 10,
        height: 5,
      };
      const result = getEndPoints(scales, true, false, false, viewBox, position, 'top', undefined, {
        ifOverflow: 'visible',
      });

      const expected = [
        { x: coord, y: 10 },
        { x: coord, y: 15 },
      ];
      expect(result).toEqual(expected);
    });
  });

  describe('segment', () => {
    it('should return empty array if segment array is empty', () => {
      const result = getEndPoints(null, false, false, true, {}, undefined, undefined, undefined, {
        segment: [],
      });
      expect(result).toEqual([]);
    });

    it('should pass every segment into scales function', () => {
      const segment = [{ x: 1 }, { x: 2 }, { x: 3 }];
      const scales = {
        apply: vi.fn(_ => _),
        isInRange: vi.fn(),
      };
      const position: ReferenceLinePosition = 'middle';
      getEndPoints(scales, false, false, true, {}, position, undefined, undefined, { segment });
      expect(scales.apply).toHaveBeenCalledTimes(3);
      expect(scales.apply).toHaveBeenCalledWith({ x: 1 }, { position });
      expect(scales.apply).toHaveBeenCalledWith({ x: 2 }, { position });
      expect(scales.apply).toHaveBeenCalledWith({ x: 3 }, { position });
      expect(scales.isInRange).toHaveBeenCalledTimes(0);
    });

    it('should pass every segment into isInRange function if overflow set to discard', () => {
      const segment = [{ x: 1 }, { x: 2 }, { x: 3 }];
      const scales = {
        apply: vi.fn(_ => _),
        isInRange: vi.fn(() => true),
      };
      getEndPoints(scales, false, false, true, {}, undefined, undefined, undefined, {
        segment,
        ifOverflow: 'discard',
      });
      expect(scales.apply).toHaveBeenCalledTimes(3);
      expect(scales.isInRange).toHaveBeenCalledTimes(3);
    });

    it('should return null if outside of scale and overflow set to discard', () => {
      const segment = [{ x: 1 }, { x: 2 }, { x: 3 }];
      const scales = {
        apply: vi.fn(_ => _),
        isInRange: vi.fn(() => false),
      };
      const result = getEndPoints(scales, false, false, true, {}, undefined, undefined, undefined, {
        segment,
        ifOverflow: 'discard',
      });
      expect(result).toEqual(null);
    });

    it('should return whatever scales returned if in range', () => {
      const segment = [{ x: 1 }, { x: 2 }, { x: 3 }];
      const scales = {
        apply: vi.fn(({ x }) => x * 2),
        isInRange: vi.fn(() => true),
      };
      const result = getEndPoints(scales, false, false, true, {}, undefined, undefined, undefined, {
        segment,
        ifOverflow: 'discard',
      });
      expect(result).toEqual([2, 4, 6]);
    });
  });
});
