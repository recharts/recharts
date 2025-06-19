import { expect } from 'vitest';
import { assertNotNull } from '../helper/assertNotNull';

export type ExpectedArea = {
  d: string;
};

export function expectAreaCurve(container: Element, expectedAreas: ReadonlyArray<ExpectedArea>) {
  assertNotNull(container);
  const areaCurves = container.querySelectorAll('.recharts-area-curve');
  assertNotNull(areaCurves);
  const actualAreas = Array.from(areaCurves).map(area => ({ d: area.getAttribute('d') ?? '' }));
  expect(actualAreas).toEqual(expectedAreas);
}
