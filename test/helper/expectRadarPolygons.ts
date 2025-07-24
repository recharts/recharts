import { expect } from 'vitest';
import { assertNotNull } from './assertNotNull';

export type ExpectedRadarPolygon = {
  d: string;
  fill: string;
  fillOpacity: string;
};

export function getRadarPolygons(container: Element): ReadonlyArray<SVGPathElement> {
  return Array.from(container.querySelectorAll('.recharts-radar-polygon path.recharts-polygon'));
}

export function expectRadarPolygons(container: Element, expected: ReadonlyArray<ExpectedRadarPolygon>) {
  const polygons = getRadarPolygons(container);
  assertNotNull(polygons);

  const actualPolygons = polygons.map(polygon => ({
    d: polygon.getAttribute('d'),
    fill: polygon.getAttribute('fill'),
    fillOpacity: polygon.getAttribute('fill-opacity'),
  }));

  expect(actualPolygons).toEqual(expected);
}

export type ExpectedRadarDot = {
  cx: string;
  cy: string;
};

export function getRadarDots(container: Element): ReadonlyArray<SVGCircleElement> {
  return Array.from(container.querySelectorAll('.recharts-radar-dots circle.recharts-radar-dot'));
}

export function expectRadarDots(container: Element, expected: ReadonlyArray<ExpectedRadarDot>) {
  const dots = getRadarDots(container);
  assertNotNull(dots);

  const actualDots = dots.map(dot => ({
    cx: dot.getAttribute('cx'),
    cy: dot.getAttribute('cy'),
  }));

  expect(actualDots).toEqual(expected);
}
