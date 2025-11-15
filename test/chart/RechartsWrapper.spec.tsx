import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { act, fireEvent, render } from '@testing-library/react';
import { BarChart } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';

describe('RechartsWrapper', () => {
  it('should call onMouseEnter, and onMouseLeave handlers', async () => {
    const onMouseEnterSpy = vi.fn();
    const onMouseLeaveSpy = vi.fn();
    const { container } = render(
      <BarChart width={800} height={400} onMouseEnter={onMouseEnterSpy} onMouseLeave={onMouseLeaveSpy} />,
    );

    const wrapper = container.querySelector('.recharts-wrapper');
    assertNotNull(wrapper);
    expect(wrapper).toBeInTheDocument();

    expect(onMouseEnterSpy).not.toHaveBeenCalled();
    expect(onMouseLeaveSpy).not.toHaveBeenCalled();

    fireEvent.mouseEnter(wrapper);

    act(() => {
      vi.runOnlyPendingTimers();
    });

    expect(onMouseEnterSpy).toHaveBeenCalledTimes(1);
    expect(onMouseLeaveSpy).not.toHaveBeenCalled();

    fireEvent.mouseLeave(wrapper);

    act(() => {
      vi.runOnlyPendingTimers();
    });

    expect(onMouseEnterSpy).toHaveBeenCalledTimes(1);
    expect(onMouseLeaveSpy).toHaveBeenCalledTimes(1);
  });
});
