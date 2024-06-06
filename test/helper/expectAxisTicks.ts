import { assertNotNull } from './assertNotNull';
import { AxisType } from '../../src/util/types';
import { AxisId } from '../../src/state/axisMapSlice';
import { selectAxisDomain } from '../../src/state/axisSelectors';
import { useAppSelector } from '../../src/state/hooks';

export function expectXAxisTicks(container: Element, ticks: ReadonlyArray<string>) {
  const allTicks = container.querySelectorAll('.recharts-xAxis .recharts-cartesian-axis-tick');
  assertNotNull(allTicks);
  const ticksContexts = Array.from(allTicks).map(tick => tick.textContent);
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
