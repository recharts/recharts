import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { hasElementOffsetChanged, useElementOffset } from '../../src/util/useElementOffset';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';

function TestComponent() {
  const [box, updateBox] = useElementOffset();

  return (
    <>
      <div data-testid="target" ref={updateBox} />
      <output data-testid="size">{`${box.width}x${box.height}`}</output>
    </>
  );
}

describe('hasElementOffsetChanged', () => {
  it('detects measurements that differ by more than the epsilon', () => {
    const previous = { height: 20, left: 4, top: 8, width: 100 };

    expect(hasElementOffsetChanged(previous, { ...previous, width: 100.5 }, 1)).toBe(false);
    expect(hasElementOffsetChanged(previous, { ...previous, width: 101.5 }, 1)).toBe(true);
  });
});

describe('useElementOffset', () => {
  it('updates the measured box when ResizeObserver reports a layout change', () => {
    let resizeCallback: ResizeObserverCallback | undefined;
    const observe = vi.fn();
    const disconnect = vi.fn();

    const ResizeObserverMock = vi.fn().mockImplementation((callback: ResizeObserverCallback) => {
      resizeCallback = callback;
      return { observe, disconnect };
    });

    vi.stubGlobal('ResizeObserver', ResizeObserverMock);

    try {
      render(<TestComponent />);
      const target = screen.getByTestId('target');

      mockGetBoundingClientRect({ height: 20, width: 100 });

      act(() => {
        resizeCallback?.([], {} as ResizeObserver);
      });

      expect(screen.getByTestId('size')).toHaveTextContent('100x20');

      mockGetBoundingClientRect({ height: 60, width: 80 });

      act(() => {
        resizeCallback?.([], {} as ResizeObserver);
      });

      expect(screen.getByTestId('size')).toHaveTextContent('80x60');
      expect(ResizeObserverMock).toHaveBeenCalled();
      expect(observe).toHaveBeenCalledWith(target);
    } finally {
      vi.unstubAllGlobals();
    }
  });
});
