import { expect } from 'vitest';
import { assertNotNull } from './assertNotNull';

type ExpectedBar = {
  x: string;
  y: string;
  width: string;
  height: string;
  radius: string;
  d: string;
};

export function expectBars(container: Element, expectedBars: ReadonlyArray<ExpectedBar>) {
  assertNotNull(container);
  const allBars = container.querySelectorAll('.recharts-bar .recharts-bar-rectangle path.recharts-rectangle');
  const actualBars = Array.from(allBars).map(bar => ({
    x: bar.getAttribute('x'),
    y: bar.getAttribute('y'),
    width: bar.getAttribute('width'),
    height: bar.getAttribute('height'),
    radius: bar.getAttribute('radius'),
    d: bar.getAttribute('d'),
  }));
  expect(actualBars).toEqual(expectedBars);
}
