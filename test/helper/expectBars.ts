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
  return container.querySelectorAll('.recharts-bar .recharts-bar-rectangle');
}

export function expectBars(container: Element, expectedBars: ReadonlyArray<ExpectedBar>) {
  assertNotNull(container);
  const allBarPaths = container.querySelectorAll('.recharts-bar .recharts-bar-rectangle path.recharts-rectangle');
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

function getActiveChildren(bar: Element) {
  return bar.querySelectorAll('.recharts-active-bar');
}

export function expectBarIsActive(bar: Element) {
  const activeChildren = getActiveChildren(bar);
  expect(activeChildren).toHaveLength(1);
}

export function expectBarIsNotActive(bar: Element) {
  const activeChildren = getActiveChildren(bar);
  expect(activeChildren).toHaveLength(0);
}
