import { isVisible } from '../../src/util/TickUtils';

describe('isVisible', () => {
  test.each([
    { sign: 1, position: 50, size: 10, start: 0, end: 100 },
    { sign: 1, position: 50, size: 50, start: 0, end: 100 },
    { sign: 1, position: 50, size: 100, start: 0, end: 100 },
    { sign: 0, position: 50, size: 10, start: 0, end: 100 },
    { sign: 0, position: 50, size: 50, start: 0, end: 100 },
    { sign: 0, position: 50, size: 100, start: 0, end: 100 },
  ])('is returns true if tick is inside limits: (%o)', ({ sign, position, size, start, end }) => {
    expect(isVisible(sign, position, () => size, start, end)).toBeTruthy();
  });

  test.each([
    { sign: -1, position: 50, size: 10, start: 0, end: 100 },
    { sign: -1, position: 50, size: 50, start: 0, end: 100 },
    { sign: -1, position: 50, size: 100, start: 0, end: 100 },
    { sign: 1, position: 50, size: 101, start: 0, end: 100 },
    { sign: 1, position: 10, size: 10_000, start: 50, end: 100 },
    { sign: 1, position: 110, size: 10_000, start: 50, end: 100 },
    { sign: -1, position: 50, size: 101, start: 0, end: 100 },
    { sign: -1, position: 10, size: 10_000, start: 50, end: 100 },
    { sign: -1, position: 110, size: 10_000, start: 50, end: 100 },
  ])('is returns false if tick is outside limits: (%o)', ({ sign, position, size, start, end }) => {
    expect(isVisible(sign, position, () => size, start, end)).toBeFalsy();
  });
});
