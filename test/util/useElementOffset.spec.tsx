import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useElementOffset } from '../../src/util/useElementOffset';

function TestComponent() {
  const [box, updateBox] = useElementOffset();

  return (
    <>
      <div data-testid="target" ref={updateBox} />
      <output data-testid="size">{`${box.width}x${box.height}`}</output>
    </>
  );
}

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

      vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({
        bottom: 20,
        height: 20,
        left: 0,
        right: 100,
        top: 0,
        width: 100,
        x: 0,
        y: 0,
        toJSON: () => undefined,
      });

      act(() => {
        resizeCallback?.([], {} as ResizeObserver);
      });

      expect(screen.getByTestId('size')).toHaveTextContent('100x20');

      vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({
        bottom: 60,
        height: 60,
        left: 0,
        right: 80,
        top: 0,
        width: 80,
        x: 0,
        y: 0,
        toJSON: () => undefined,
      });

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
