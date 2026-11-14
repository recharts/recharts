import React, { ReactNode } from 'react';
import { act, render } from '@testing-library/react';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { Area, ComposedChart, LabelList, Line } from '../../src';
import * as lineSelectors from '../../src/state/selectors/lineSelectors';
import * as areaSelectors from '../../src/state/selectors/areaSelectors';
import { Props as LabelListProps } from '../../src/component/LabelList';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';

describe.each(['Line', 'Area'] as const)('%s lazy label entries', series => {
  /** Mocks the selected series with a value getter that tracks label-entry construction. */
  function mockPoints(value: number = 42): { readValue: Mock<() => number>; payload: { value: number } } {
    const readValue = vi.fn(() => value);
    const payload = { value };
    const coordinates = { x: 100, y: 100, payload };
    if (series === 'Line') {
      vi.spyOn(lineSelectors, 'selectLinePoints').mockReturnValue([
        {
          ...coordinates,
          get value() {
            return readValue();
          },
        },
        { x: 200, y: 150, value: 10, payload: { value: 10 } },
      ]);
    } else {
      vi.spyOn(areaSelectors, 'selectArea').mockReturnValue({
        points: [
          {
            ...coordinates,
            get value() {
              return [0, readValue()];
            },
          },
          { x: 200, y: 150, value: [0, 10], payload: { value: 10 } },
        ],
        baseLine: 200,
        isRange: false,
      });
    }
    return { readValue, payload };
  }

  /** Renders either series so the same lazy-label assertions exercise both providers. */
  function TestChart({
    children,
    label = false,
    width = 400,
  }: {
    children?: ReactNode;
    label?: boolean;
    width?: number;
  }) {
    const Series = series === 'Line' ? Line : Area;
    return (
      <ComposedChart width={width} height={300}>
        <Series dataKey="value" isAnimationActive={false} dot={false} activeDot={false} label={label}>
          {children}
        </Series>
      </ComposedChart>
    );
  }

  function NestedLabels({ valueAccessor }: Pick<LabelListProps, 'valueAccessor'>) {
    return <LabelList valueAccessor={valueAccessor} />;
  }

  beforeEach(() => {
    mockGetBoundingClientRect({ width: 400, height: 300 });
  });

  it('does not read label values without a consumer, including after points change', () => {
    const first = mockPoints();
    const { container, rerender } = render(<TestChart />);
    act(() => vi.runOnlyPendingTimers());
    expect(container.querySelector('.recharts-curve')).toBeInTheDocument();
    expect(first.readValue).not.toHaveBeenCalled();

    const next = mockPoints(84);
    rerender(<TestChart width={500} />);
    act(() => vi.runOnlyPendingTimers());
    expect(next.readValue).not.toHaveBeenCalled();
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
  });

  it('builds entries when nested consumers mount and shares them across consumers and rerenders', () => {
    const { readValue, payload } = mockPoints();
    const valueAccessor = vi.fn<NonNullable<LabelListProps['valueAccessor']>>(() => 'custom label');
    const { container, rerender } = render(<TestChart />);
    expect(readValue).not.toHaveBeenCalled();

    const withLabels = (
      <TestChart>
        <NestedLabels valueAccessor={valueAccessor} />
        <NestedLabels valueAccessor={valueAccessor} />
      </TestChart>
    );
    rerender(withLabels);
    act(() => vi.runOnlyPendingTimers());
    expect(readValue).toHaveBeenCalledTimes(1);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(4);
    const entry = valueAccessor.mock.calls[0][0];
    expect(entry).toEqual({
      x: 100,
      y: 100,
      width: 0,
      height: 0,
      lowerWidth: 0,
      upperWidth: 0,
      viewBox: { x: 100, y: 100, width: 0, height: 0, lowerWidth: 0, upperWidth: 0 },
      value: series === 'Line' ? 42 : [0, 42],
      payload,
      parentViewBox: undefined,
      fill: undefined,
    });
    expect(entry.payload).toBe(payload);
    expect(valueAccessor.mock.calls.filter(([, index]) => index === 0).every(([received]) => received === entry)).toBe(
      true,
    );

    rerender(<TestChart />);
    rerender(withLabels);
    expect(readValue).toHaveBeenCalledTimes(1);
    expect(valueAccessor.mock.calls.filter(([, index]) => index === 0).every(([received]) => received === entry)).toBe(
      true,
    );
  });

  it('refreshes implicit labels when points change', () => {
    const first = mockPoints();
    const { container, rerender } = render(<TestChart label />);
    act(() => vi.runOnlyPendingTimers());
    expect(container.querySelector('.recharts-label')).toHaveTextContent('42');
    expect(first.readValue).toHaveBeenCalledTimes(1);

    const next = mockPoints(84);
    rerender(<TestChart label width={500} />);
    act(() => vi.runOnlyPendingTimers());
    expect(container.querySelector('.recharts-label')).toHaveTextContent('84');
    expect(next.readValue).toHaveBeenCalledTimes(1);
  });
});
