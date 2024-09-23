import { trim } from './trim';

export type ExpectRadialBar = {
  d: string;
};

export type ExpectedRadialBarLabel = {
  d: string;
  textContent: string;
};

export function expectRadialBars(container: Element, expectedRadialBars: ReadonlyArray<ExpectRadialBar>) {
  const bars = container.querySelectorAll(
    '.recharts-radial-bar-sectors path.recharts-sector.recharts-radial-bar-sector',
  );

  const actualBars = Array.from(bars).map(bar => ({ d: trim(bar.getAttribute('d')) }));
  expect(actualBars).toEqual(expectedRadialBars);
}

export function expectRadialBarLabels(container: Element, expectedLabels: ReadonlyArray<ExpectedRadialBarLabel>) {
  const allLabels = container.querySelectorAll('.recharts-label-list text.recharts-radial-bar-label');

  const actual = Array.from(allLabels).map(l => ({
    d: trim(l.querySelector('defs path').getAttribute('d')),
    textContent: l.textContent,
  }));

  expect(actual).toEqual(expectedLabels);
}
