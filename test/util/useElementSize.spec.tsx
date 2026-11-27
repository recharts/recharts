import React, { StrictMode } from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act, render, renderHook, screen } from '@testing-library/react';
import { useElementSize, UseElementSizeOptions } from '../../src/util/useElementSize';
import { getMockDomRect } from '../helper/mockGetBoundingClientRect';
import { Size } from '../../src/util/types';

/**
 * jsdom does not do layout. This creates a div whose layout size can change during the test.
 * Its `getBoundingClientRect()` always reports half the size, as if a parent had `transform: scale(0.5)`.
 * @param initial the starting layout size
 * @returns the div, and a function that changes its layout size
 */
function createMeasuredNode(initial: Size): { node: HTMLDivElement; resize: (size: Size) => void } {
  let current = initial;
  const node = document.createElement('div');
  document.body.appendChild(node);
  Object.defineProperty(node, 'offsetWidth', { get: () => current.width });
  Object.defineProperty(node, 'offsetHeight', { get: () => current.height });
  Object.defineProperty(node, 'clientWidth', { get: () => current.width });
  Object.defineProperty(node, 'clientHeight', { get: () => current.height });
  vi.spyOn(node, 'getBoundingClientRect').mockImplementation(() =>
    getMockDomRect({ width: current.width / 2, height: current.height / 2 }),
  );
  return {
    node,
    resize: size => {
      current = size;
    },
  };
}

const borderBoxOptions: UseElementSizeOptions = {
  box: 'border-box',
  initialSize: { width: 0, height: 0 },
  observe: true,
};

describe('useElementSize', () => {
  let resizeObserverCallback: ((entries: ResizeObserverEntry[]) => void) | undefined,
    observeSpy: ReturnType<typeof vi.fn>,
    disconnectSpy: ReturnType<typeof vi.fn>,
    resizeObserverIsActive: boolean;

  beforeEach(() => {
    resizeObserverCallback = undefined;
    resizeObserverIsActive = false;
    observeSpy = vi.fn(() => {
      resizeObserverIsActive = true;
    });
    disconnectSpy = vi.fn(() => {
      resizeObserverIsActive = false;
    });
    vi.stubGlobal(
      'ResizeObserver',
      vi.fn(function ResizeObserverMock(cb: (entries: ResizeObserverEntry[]) => void) {
        resizeObserverCallback = cb;
        return { observe: observeSpy, unobserve: vi.fn(), disconnect: disconnectSpy };
      }),
    );
  });

  /**
   * Notifies without any entries. The hook must not read them: a browser without `borderBoxSize`
   * (Safari before 15.4, some polyfills) crashed a previous implementation that did.
   */
  const triggerResizeObserver = () => {
    if (resizeObserverIsActive) {
      resizeObserverCallback?.([]);
    }
  };

  it('returns the initial size before the element attaches', () => {
    const { result } = renderHook(() => useElementSize({ ...borderBoxOptions, initialSize: { width: 7, height: 8 } }));
    expect(result.current[0]).toEqual({ width: 7, height: 8 });
  });

  it('measures the layout size when the element attaches, ignoring a CSS transform', () => {
    const { node } = createMeasuredNode({ width: 100, height: 50 });
    const { result } = renderHook(() => useElementSize(borderBoxOptions));
    act(() => {
      result.current[1](node);
    });
    expect(result.current[0]).toEqual({ width: 100, height: 50 });
    expect(observeSpy).toHaveBeenCalledWith(node);
  });

  it('measures the content box without padding', () => {
    const { node } = createMeasuredNode({ width: 100, height: 50 });
    node.style.padding = '10px';
    const { result } = renderHook(() => useElementSize({ ...borderBoxOptions, box: 'content-box' }));
    act(() => {
      result.current[1](node);
    });
    expect(result.current[0]).toEqual({ width: 80, height: 30 });
  });

  it('measures again when ResizeObserver notifies, without reading the entry', () => {
    const { node, resize } = createMeasuredNode({ width: 100, height: 50 });
    const { result } = renderHook(() => useElementSize(borderBoxOptions));
    act(() => {
      result.current[1](node);
    });
    resize({ width: 100, height: 120 });
    act(() => {
      triggerResizeObserver();
    });
    expect(result.current[0]).toEqual({ width: 100, height: 120 });
  });

  it('rounds to whole pixels', () => {
    const { node } = createMeasuredNode({ width: 100, height: 50 });
    node.style.padding = '0.3px';
    const { result } = renderHook(() => useElementSize({ ...borderBoxOptions, box: 'content-box' }));
    act(() => {
      result.current[1](node);
    });
    expect(result.current[0]).toEqual({ width: 99, height: 49 });
  });

  it('ignores changes up to the threshold', () => {
    const { node, resize } = createMeasuredNode({ width: 100, height: 50 });
    const { result } = renderHook(() => useElementSize({ ...borderBoxOptions, threshold: 1 }));
    act(() => {
      result.current[1](node);
    });
    const initial = result.current[0];
    resize({ width: 101, height: 51 });
    act(() => {
      triggerResizeObserver();
    });
    expect(result.current[0]).toBe(initial);
    resize({ width: 102, height: 51 });
    act(() => {
      triggerResizeObserver();
    });
    expect(result.current[0]).toEqual({ width: 102, height: 51 });
  });

  it('measures again when an extra dependency changes, without re-creating the observer', () => {
    const { node, resize } = createMeasuredNode({ width: 100, height: 50 });
    const { result, rerender } = renderHook(
      ({ dependency }) => useElementSize({ ...borderBoxOptions, extraDependencies: [dependency] }),
      { initialProps: { dependency: 'before' } },
    );
    act(() => {
      result.current[1](node);
    });
    resize({ width: 200, height: 80 });
    rerender({ dependency: 'after' });
    expect(result.current[0]).toEqual({ width: 200, height: 80 });
    expect(observeSpy).toHaveBeenCalledTimes(1);
    expect(disconnectSpy).not.toHaveBeenCalled();
  });

  it('keeps the layout size when an extra dependency changes inside a scaled parent', () => {
    // Regression: measuring from getBoundingClientRect() here stored the scaled size,
    // and ResizeObserver never fires once the transform goes away, so the scaled size stayed.
    const { node } = createMeasuredNode({ width: 100, height: 50 });
    const { result, rerender } = renderHook(
      ({ dependency }) => useElementSize({ ...borderBoxOptions, extraDependencies: [dependency] }),
      { initialProps: { dependency: 'before' } },
    );
    act(() => {
      result.current[1](node);
    });
    rerender({ dependency: 'after' });
    expect(result.current[0]).toEqual({ width: 100, height: 50 });
  });

  it('calls onResize after every ResizeObserver notification', () => {
    const onResize = vi.fn();
    const { node, resize } = createMeasuredNode({ width: 100, height: 50 });
    const { result } = renderHook(() => useElementSize({ ...borderBoxOptions, onResize }));
    act(() => {
      result.current[1](node);
    });
    expect(onResize).not.toHaveBeenCalled();
    resize({ width: 200, height: 80 });
    act(() => {
      triggerResizeObserver();
    });
    expect(onResize).toHaveBeenCalledTimes(1);
    expect(onResize).toHaveBeenLastCalledWith({ width: 200, height: 80 });
  });

  it('throttles measurements after ResizeObserver notifications', () => {
    vi.useFakeTimers();
    try {
      const { node, resize } = createMeasuredNode({ width: 100, height: 50 });
      const { result } = renderHook(() => useElementSize({ ...borderBoxOptions, throttleMs: 200 }));
      act(() => {
        result.current[1](node);
      });
      resize({ width: 200, height: 80 });
      act(() => {
        triggerResizeObserver();
        vi.advanceTimersByTime(100);
      });
      expect(result.current[0]).toEqual({ width: 100, height: 50 });
      act(() => {
        vi.advanceTimersByTime(100);
      });
      expect(result.current[0]).toEqual({ width: 200, height: 80 });
    } finally {
      vi.useRealTimers();
    }
  });

  it('measures once and does not observe when observe is false', () => {
    const { node } = createMeasuredNode({ width: 100, height: 50 });
    const { result } = renderHook(() => useElementSize({ ...borderBoxOptions, observe: false }));
    act(() => {
      result.current[1](node);
    });
    expect(result.current[0]).toEqual({ width: 100, height: 50 });
    expect(ResizeObserver).not.toHaveBeenCalled();
  });

  describe('without ResizeObserver', () => {
    beforeEach(() => {
      vi.stubGlobal('ResizeObserver', undefined);
    });

    it('measures once by default', () => {
      const { node } = createMeasuredNode({ width: 100, height: 50 });
      const { result } = renderHook(() => useElementSize(borderBoxOptions));
      act(() => {
        result.current[1](node);
      });
      expect(result.current[0]).toEqual({ width: 100, height: 50 });
    });

    it('keeps the initial size when measureWithoutResizeObserver is false', () => {
      const { node } = createMeasuredNode({ width: 100, height: 50 });
      const { result } = renderHook(() =>
        useElementSize({
          ...borderBoxOptions,
          initialSize: { width: 7, height: 8 },
          measureWithoutResizeObserver: false,
        }),
      );
      act(() => {
        result.current[1](node);
      });
      expect(result.current[0]).toEqual({ width: 7, height: 8 });
    });
  });

  it('keeps observing size changes after Strict Mode replays effects', () => {
    const { node, resize } = createMeasuredNode({ width: 100, height: 50 });
    function MeasuredElement() {
      const [size, setMeasuredElement] = useElementSize(borderBoxOptions);
      return (
        <div
          data-testid="measured-element"
          data-width={size.width}
          data-height={size.height}
          ref={element => setMeasuredElement(element == null ? null : node)}
        />
      );
    }
    render(
      <StrictMode>
        <MeasuredElement />
      </StrictMode>,
    );
    resize({ width: 200, height: 80 });
    act(() => {
      triggerResizeObserver();
    });
    expect(screen.getByTestId('measured-element')).toHaveAttribute('data-width', '200');
    expect(screen.getByTestId('measured-element')).toHaveAttribute('data-height', '80');
  });

  it('disconnects the observer when the element detaches or another element attaches', () => {
    const first = createMeasuredNode({ width: 100, height: 50 }).node;
    const second = createMeasuredNode({ width: 100, height: 50 }).node;
    const { result } = renderHook(() => useElementSize(borderBoxOptions));
    act(() => {
      result.current[1](first);
    });
    act(() => {
      result.current[1](second);
    });
    expect(disconnectSpy).toHaveBeenCalledTimes(1);
    act(() => {
      result.current[1](null);
    });
    expect(disconnectSpy).toHaveBeenCalledTimes(2);
  });
});
