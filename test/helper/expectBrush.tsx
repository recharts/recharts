import { expect } from 'vitest';
import { assertNotNull } from './assertNotNull';

type ExpectedBrush = {
  x: string;
  y: string;
  width: string;
  height: string;
};

export function expectBrush(container: Element, expected: ExpectedBrush) {
  assertNotNull(container);
  const brush = container.querySelector('.recharts-brush rect');
  assertNotNull(brush);
  const actual = {
    x: brush.getAttribute('x'),
    y: brush.getAttribute('y'),
    width: brush.getAttribute('width'),
    height: brush.getAttribute('height'),
  };
  expect(actual).toEqual(expected);
}
