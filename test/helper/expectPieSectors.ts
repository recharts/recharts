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
