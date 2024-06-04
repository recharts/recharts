import { assertNotNull } from './assertNotNull';

export function expectXAxisTicks(container: Element, ticks: ReadonlyArray<string>) {
  const allTicks = container.querySelectorAll('.recharts-xAxis .recharts-cartesian-axis-tick');
  assertNotNull(allTicks);
  const ticksContexts = Array.from(allTicks).map(tick => tick.textContent);
  expect(ticksContexts).toEqual(ticks);
}
