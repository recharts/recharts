import { expect } from 'vitest';
import { assertNotNull } from './assertNotNull';

type ExpectedPoint = {
  cx: string;
  cy: string;
  transform: string;
  d: string;
  width: string;
  height: string;
};

export function expectScatterPoints(container: Element, expectedPoints: ReadonlyArray<ExpectedPoint>) {
  assertNotNull(container);
  const allPoints = container.querySelectorAll('.recharts-scatter-symbol .recharts-symbols');
  const actualPoints = Array.from(allPoints).map(point => {
    return {
      cx: point.getAttribute('cx'),
      cy: point.getAttribute('cy'),
      transform: point.getAttribute('transform'),
      d: point.getAttribute('d'),
      width: point.getAttribute('width'),
      height: point.getAttribute('height'),
    };
  });
  expect(actualPoints).toEqual(expectedPoints);
}
