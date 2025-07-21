import { trim } from './trim';

export function selectPieSectors(container: Element) {
  return container.querySelectorAll('.recharts-pie-sector path.recharts-sector');
}

export type ExpectedSector = {
  d: string;
};

export function expectPieSectors(container: Element, expectedSectors: ReadonlyArray<ExpectedSector>) {
  const sectors = selectPieSectors(container);

  const actualSectors = Array.from(sectors).map(sector => ({
    d: trim(sector.getAttribute('d') ?? ''),
  }));
  expect(actualSectors).toEqual(expectedSectors);
}

/**
 * Calculates the angle in degrees of a point on a circle relative to its center.
 * The angle is measured counter-clockwise from the positive x-axis (3 o'clock position).
 *
 * @param cx The x-coordinate of the circle's center.
 * @param cy The y-coordinate of the circle's center.
 * @param x The x-coordinate of the point on the circle.
 * @param y The y-coordinate of the point on the circle.
 * @returns The angle in degrees [0, 360).
 */
function calculateAngle(cx: number, cy: number, x: number, y: number): number {
  // In SVG, the y-axis points down, so we negate the y-difference
  // to convert to a standard Cartesian coordinate system.
  const radians = Math.atan2(-(y - cy), x - cx);

  // Convert radians to degrees
  let degrees = radians * (180 / Math.PI);

  // Normalize the angle to the range [0, 360)
  if (degrees < 0) {
    degrees += 360;
  }

  return degrees;
}

/**
 * Parses an SVG path string for a pie sector to calculate the start and end angles.
 *
 * @param cx The x-coordinate of the pie's center.
 * @param cy The y-coordinate of the pie's center.
 * @param path The SVG path 'd' attribute string.
 * @returns An object containing the start and end angles in degrees, or null if parsing fails.
 */
function calculateAnglesFromPath(
  cx: number,
  cy: number,
  path: string,
): { startAngle: number; endAngle: number } | null {
  const match = path.match(/M\s*([-\d.]+)[,\s]+([-\d.]+)\s*A(?:[\s\d,.]*?)\s*([-\d.]+)[,\s]+([-\d.]+)\s*L/);

  if (!match) {
    return null;
  }

  const [, x1, y1, x2, y2] = match.map(parseFloat);

  const startAngle = calculateAngle(cx, cy, x1, y1);
  const endAngle = calculateAngle(cx, cy, x2, y2);

  return { startAngle, endAngle };
}

export function expectPieSectorAngles(
  container: Element,
  expectedAngles: ReadonlyArray<{ startAngle: number; endAngle: number }>,
) {
  const sectors = selectPieSectors(container);

  const actualAngles = Array.from(sectors).map(sector => {
    const d = sector.getAttribute('d');
    if (!d) {
      throw new Error('Sector path "d" attribute is missing');
    }
    const cx = parseFloat(sector.getAttribute('cx') ?? '0');
    const cy = parseFloat(sector.getAttribute('cy') ?? '0');
    return calculateAnglesFromPath(cx, cy, d);
  });

  expect(actualAngles).toEqual(expectedAngles);
}
