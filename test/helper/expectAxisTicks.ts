import { assertNotNull } from './assertNotNull';
import { AxisType } from '../../src/util/types';
import { AxisId } from '../../src/state/axisMapSlice';
import { selectAxisScale } from '../../src/state/selectors/axisSelectors';
import { useAppSelector } from '../../src/state/hooks';

export type ExpectedTick = {
  textContent: string;
  x: string;
  y: string;
};

export function expectXAxisTicks(container: Element, expectedTicks: ReadonlyArray<ExpectedTick>) {
  const allTicks = container.querySelectorAll('.recharts-xAxis .recharts-cartesian-axis-tick-value');
  assertNotNull(allTicks);
  const ticksContexts = Array.from(allTicks).map(tick => ({
    textContent: tick.textContent,
    x: tick.getAttribute('x'),
    y: tick.getAttribute('y'),
  }));
  expect(ticksContexts).toEqual(expectedTicks);
}

export function expectYAxisTicks(container: Element, ticks: ReadonlyArray<ExpectedTick>) {
  const allTicks = container.querySelectorAll('.recharts-yAxis .recharts-cartesian-axis-tick-value');
  assertNotNull(allTicks);
  const ticksContexts = Array.from(allTicks).map(tick => ({
    textContent: tick.textContent,
    x: tick.getAttribute('x'),
    y: tick.getAttribute('y'),
  }));
  expect(ticksContexts).toEqual(ticks);
}

export function ExpectAxisDomain({
  axisType,
  axisId = 0,
  assert,
}: {
  axisType: AxisType;
  axisId?: AxisId;
  assert: (domainFromRedux: ReadonlyArray<unknown>) => void;
}): null {
  useAppSelector(state => {
    const scale = selectAxisScale(state, axisType, axisId);
    assert(scale.scale?.domain());
  });
  return null;
}
