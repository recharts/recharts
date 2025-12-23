import { describe, it, expect } from 'vitest';
import { cartesianPositionToCSSTranslate } from '../../src/cartesian/cartesianPositionToCSSTranslate';

describe('cartesianPositionToCSSTranslate', () => {
  describe('h = start, v = start', () => {
    it('should return no transform because this is default HTML behavior', () => {
      const actual = cartesianPositionToCSSTranslate('start', 'start');
      const expected = '';
      expect(actual).toEqual(expected);
    });
  });

  describe('h = middle, v = start', () => {
    it('should return translate for centered horizontal alignment', () => {
      const actual = cartesianPositionToCSSTranslate('middle', 'start');
      const expected = 'translate(-50%, 0)';
      expect(actual).toEqual(expected);
    });
  });

  describe('h = end, v = start', () => {
    it('should return translate for right-aligned horizontal position', () => {
      const actual = cartesianPositionToCSSTranslate('end', 'start');
      const expected = 'translate(-100%, 0)';
      expect(actual).toEqual(expected);
    });
  });

  describe('h = start, v = end', () => {
    it('should return translate for bottom-aligned vertical position', () => {
      const actual = cartesianPositionToCSSTranslate('start', 'end');
      const expected = 'translate(0, -100%)';
      expect(actual).toEqual(expected);
    });
  });

  describe('h = middle, v = middle', () => {
    it('should return translate for perfectly centered position', () => {
      const actual = cartesianPositionToCSSTranslate('middle', 'middle');
      const expected = 'translate(-50%, -50%)';
      expect(actual).toEqual(expected);
    });
  });

  describe('h = inherit, v = start', () => {
    it('should use fallback 0 for horizontal when position is inherit', () => {
      const actual = cartesianPositionToCSSTranslate('inherit', 'start');
      const expected = 'translate(0, 0)';
      expect(actual).toEqual(expected);
    });
  });

  describe('h = inherit, v = middle', () => {
    it('should use fallback 0 for horizontal but respect vertical when position is inherit', () => {
      const actual = cartesianPositionToCSSTranslate('inherit', 'middle');
      const expected = 'translate(0, -50%)';
      expect(actual).toEqual(expected);
    });
  });

  describe('h = inherit, v = end', () => {
    it('should use fallback 0 for horizontal but respect vertical end when position is inherit', () => {
      const actual = cartesianPositionToCSSTranslate('inherit', 'end');
      const expected = 'translate(0, -100%)';
      expect(actual).toEqual(expected);
    });
  });
});
