import { expect } from 'vitest';
import { assertNotNull } from './assertNotNull';

export type ExpectedRadarPolygon = {
  d: string;
  fill: string;
  fillOpacity: string;
};

export function expectRadarPolygons(container: Element, expected: ReadonlyArray<ExpectedRadarPolygon>) {
  const polygons = container.querySelectorAll('.recharts-radar-polygon path.recharts-polygon');
  assertNotNull(polygons);

  const actualPolygons = Array.from(polygons).map(polygon => ({
    d: polygon.getAttribute('d'),
    fill: polygon.getAttribute('fill'),
    fillOpacity: polygon.getAttribute('fill-opacity'),
  }));

  expect(actualPolygons).toEqual(expected);
}
