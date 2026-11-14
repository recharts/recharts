import React from 'react';
import { act, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Area, Brush, ComposedChart, Line } from '../../src';
import * as lineModule from '../../src/cartesian/Line';
import * as areaModule from '../../src/cartesian/Area';
import { selectChartDataWithIndexes } from '../../src/state/selectors/dataSelectors';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { assertNotNull } from '../helper/assertNotNull';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';

describe.each(['Line', 'Area'] as const)('Brush %s preview calculations', series => {
  it('keeps the preview path and full-history calculations stable while the brush selection changes', () => {
    const compute = series === 'Line' ? vi.spyOn(lineModule, 'computeLinePoints') : vi.spyOn(areaModule, 'computeArea');
    const Series = series === 'Line' ? Line : Area;
    const data = Array.from({ length: 30 }, (_, index) => ({ value: (index % 7) + 1 }));
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ComposedChart width={600} height={300} data={data}>
        <Series dataKey="value" dot={false} isAnimationActive={false} />
        <Brush x={100} y={250} width={400} height={40}>
          <ComposedChart>
            <Series dataKey="value" dot={false} isAnimationActive={false} />
          </ComposedChart>
        </Brush>
        {children}
      </ComposedChart>
    ));
    const { container, spy } = renderTestCase(selectChartDataWithIndexes);
    const preview = container.querySelector('.recharts-brush .recharts-curve');
    const slider = container.querySelector('.recharts-brush-traveller');
    assertNotNull(preview);
    assertNotNull(slider);
    const initialPath = preview.getAttribute('d');
    expect(initialPath).toBeTruthy();
    compute.mockClear();

    fireEvent.mouseDown(slider, { clientX: 100 });
    for (let step = 1; step <= 20; step++) {
      fireEvent.mouseMove(slider, { clientX: 100 + step * 10 });
      act(() => vi.runOnlyPendingTimers());
      expect(container.querySelector('.recharts-brush .recharts-curve')?.getAttribute('d')).toBe(initialPath);
    }
    fireEvent.mouseUp(slider);
    act(() => vi.runOnlyPendingTimers());

    expectLastCalledWith(spy, {
      chartData: data,
      computedData: undefined,
      dataStartIndex: 14,
      dataEndIndex: 29,
    });
    expect(compute.mock.calls.some(([args]) => args.displayedData.length < data.length)).toBe(true);
    expect(compute.mock.calls.some(([args]) => args.displayedData.length === data.length)).toBe(false);
  });
});
