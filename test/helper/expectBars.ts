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

export function getAllBars(container: Element) {
  return container.querySelectorAll('.recharts-bar-rectangle');
}

export function getAllBarPaths(container: Element) {
  return container.querySelectorAll('.recharts-bar .recharts-bar-rectangle path.recharts-rectangle');
}

export function expectBars(container: Element, expectedBars: ReadonlyArray<ExpectedBar>) {
  assertNotNull(container);
  const allBarPaths = getAllBarPaths(container);
  const actualBars = Array.from(allBarPaths).map(bar => ({
    x: bar.getAttribute('x'),
    y: bar.getAttribute('y'),
    width: bar.getAttribute('width'),
    height: bar.getAttribute('height'),
    radius: bar.getAttribute('radius'),
    d: bar.getAttribute('d'),
  }));
  expect(actualBars).toEqual(expectedBars);
}

export function getActiveBars(container: Element) {
  return container.querySelectorAll('.recharts-active-bar path.recharts-rectangle');
}

export function expectActiveBars(container: Element, expectedBars: ReadonlyArray<ExpectedBar>) {
  assertNotNull(container);
  const activeBars = getActiveBars(container);
  const actualBars = Array.from(activeBars).map(bar => ({
    x: bar.getAttribute('x'),
    y: bar.getAttribute('y'),
    width: bar.getAttribute('width'),
    height: bar.getAttribute('height'),
    radius: bar.getAttribute('radius'),
    d: bar.getAttribute('d'),
  }));
  expect(actualBars).toEqual(expectedBars);
}
