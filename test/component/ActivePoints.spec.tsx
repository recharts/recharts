import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ActivePoints } from '../../src/component/ActivePoints';
import * as hooks from '../../src/hooks';

describe('ActivePoints', () => {
  it.each([
    { activeDot: false, hasActivePayload: true },
    { activeDot: true, hasActivePayload: false },
  ])(
    'skips searching when $activeDot and active payload presence is $hasActivePayload',
    ({ activeDot, hasActivePayload }) => {
      const payload = { value: 42 };
      const points = [{ x: 10, y: 20, payload }];
      const find = vi.spyOn(points, 'find');
      vi.spyOn(hooks, 'useActiveTooltipDataPoints').mockReturnValue(hasActivePayload ? [payload] : []);

      const { container } = render(
        <svg>
          <ActivePoints points={points} mainColor="red" itemDataKey="value" activeDot={activeDot} />
        </svg>,
      );

      expect(container.querySelector('.recharts-active-dot')).toBeNull();
      expect(find).not.toHaveBeenCalled();
    },
  );

  it('supports toggling active dots and updating the active payload', () => {
    const first = { value: 1 };
    const second = { value: 2 };
    const points = [
      { x: 10, y: 20, payload: first },
      { x: 30, y: 40, payload: second },
    ];
    const find = vi.spyOn(points, 'find');
    const activePayload = vi.spyOn(hooks, 'useActiveTooltipDataPoints').mockReturnValue([first]);
    const chart = (activeDot: boolean) => (
      <svg>
        <ActivePoints points={points} mainColor="red" itemDataKey="value" activeDot={activeDot} />
      </svg>
    );
    const { container, rerender } = render(chart(false));
    expect(find).not.toHaveBeenCalled();

    rerender(chart(true));
    expect(container.querySelector('.recharts-dot')).toHaveAttribute('cx', '10');
    activePayload.mockReturnValue([second]);
    rerender(chart(true));
    expect(container.querySelector('.recharts-dot')).toHaveAttribute('cx', '30');

    find.mockClear();
    rerender(chart(false));
    expect(find).not.toHaveBeenCalled();
    expect(container.querySelector('.recharts-active-dot')).toBeNull();
  });

  it('does not invoke a custom dot without an active payload, then renders it when a payload is active', () => {
    const payload = { value: 42 };
    const points = [{ x: 10, y: 20, payload }];
    const find = vi.spyOn(points, 'find');
    const activePayload = vi.spyOn(hooks, 'useActiveTooltipDataPoints').mockReturnValue([]);
    const activeDot = vi.fn(() => <circle data-testid="custom-dot" />);
    const chart = () => (
      <svg>
        <ActivePoints points={points} mainColor="red" itemDataKey="value" activeDot={activeDot} />
      </svg>
    );
    const { container, rerender } = render(chart());
    expect(find).not.toHaveBeenCalled();
    expect(activeDot).not.toHaveBeenCalled();

    activePayload.mockReturnValue([payload]);
    rerender(chart());
    expect(activeDot).toHaveBeenCalledWith(expect.objectContaining({ payload, cx: 10, cy: 20 }));
    expect(container.querySelector('[data-testid="custom-dot"]')).not.toBeNull();
  });
});
