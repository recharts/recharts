import { assertNotNull } from './assertNotNull';
import { AxisType } from '../../src/util/types';
import { AxisId } from '../../src/state/axisMapSlice';
import { selectAxisDomain } from '../../src/state/axisSelectors';
import { useAppSelector } from '../../src/state/hooks';

export type ExpectedTick = {
  textContent: string;
  x: string;
  y: string;
};

export function expectXAxisTicks(container: Element, ticks: ReadonlyArray<ExpectedTick>) {
  const allTicks = container.querySelectorAll('.recharts-xAxis .recharts-cartesian-axis-tick-value');
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
  assert: (domainFromRedux: ReturnType<typeof selectAxisDomain>) => void;
}): null {
  useAppSelector(state => {
    const domainFromRedux = selectAxisDomain(state, axisType, axisId);
    assert(domainFromRedux);
  });
  return null;
}
