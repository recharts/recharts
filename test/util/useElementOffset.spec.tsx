import React, { StrictMode } from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act, render, renderHook, screen } from '@testing-library/react';
import { useElementOffset } from '../../src/util/useElementOffset';
import { getMockDomRect } from '../helper/mockGetBoundingClientRect';

function ElementOffsetTest({ dependency }: { dependency: string }) {
  const [offset, updateOffset] = useElementOffset([dependency]);

  return (
    <div data-testid="measured-element" data-width={offset.width} data-height={offset.height} ref={updateOffset} />
  );
}

describe('useElementOffset', () => {
  let resizeObserverCallback: (() => void) | undefined,
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
      vi.fn(function ResizeObserverMock(cb: () => void) {
        resizeObserverCallback = cb;
        return { observe: observeSpy, unobserve: vi.fn(), disconnect: disconnectSpy };
      }),
    );
  });

  const triggerResizeObserver = () => {
    if (resizeObserverIsActive) {
      resizeObserverCallback?.();
    }
  };

  it('should return initial zero values', () => {
    const { result } = renderHook(() => useElementOffset());
    const [offset] = result.current;
    expect(offset).toEqual({ height: 0, left: 0, top: 0, width: 0 });
  });

  it('should measure element on ref callback with a non-null node', () => {
    const mockRect = getMockDomRect({ width: 100, height: 50, left: 10, top: 20 });
    const node = document.createElement('div');
    vi.spyOn(node, 'getBoundingClientRect').mockReturnValue(mockRect);

    const { result } = renderHook(() => useElementOffset());
    act(() => {
      result.current[1](node);
    });

    expect(result.current[0]).toEqual({ width: 100, height: 50, left: 10, top: 20 });
  });

  it('should create a ResizeObserver and observe the node', () => {
    const node = document.createElement('div');
    vi.spyOn(node, 'getBoundingClientRect').mockReturnValue(getMockDomRect({ width: 100, height: 50 }));

    const { result } = renderHook(() => useElementOffset());
    act(() => {
      result.current[1](node);
    });

    expect(observeSpy).toHaveBeenCalledWith(node);
  });

  it('should update state when ResizeObserver detects a size change', () => {
    const node = document.createElement('div');
    vi.spyOn(node, 'getBoundingClientRect')
      .mockReturnValueOnce(getMockDomRect({ width: 100, height: 50 }))
      .mockReturnValue(getMockDomRect({ width: 100, height: 120 }));

    const { result } = renderHook(() => useElementOffset());
    act(() => {
      result.current[1](node);
    });
    expect(result.current[0].height).toBe(50);

    act(() => {
      triggerResizeObserver();
    });
    expect(result.current[0].height).toBe(120);
  });

  it('should ignore changes smaller than EPS (1px)', () => {
    const node = document.createElement('div');
    vi.spyOn(node, 'getBoundingClientRect')
      .mockReturnValueOnce(getMockDomRect({ width: 100, height: 50 }))
      .mockReturnValue(getMockDomRect({ width: 100, height: 50.5 }));

    const { result } = renderHook(() => useElementOffset());
    act(() => {
      result.current[1](node);
    });
    expect(result.current[0].height).toBe(50);

    act(() => {
      triggerResizeObserver();
    });
    // Height change of 0.5 is below EPS=1, should not update
    expect(result.current[0].height).toBe(50);
  });

  it('should ignore position-only changes', () => {
    const node = document.createElement('div');
    const getBoundingClientRect = vi
      .spyOn(node, 'getBoundingClientRect')
      .mockReturnValueOnce(getMockDomRect({ width: 100, height: 50, left: 10, top: 20 }))
      .mockReturnValue(getMockDomRect({ width: 100, height: 50, left: 110, top: 220 }));

    const { result } = renderHook(() => useElementOffset());
    act(() => {
      result.current[1](node);
    });
    const initialOffset = result.current[0];

    act(() => {
      triggerResizeObserver();
    });

    expect(getBoundingClientRect).toHaveBeenCalledTimes(2);
    expect(result.current[0]).toBe(initialOffset);
  });

  it('should remeasure the attached node without recreating its observer when an extra dependency changes', () => {
    let currentRect = getMockDomRect({ width: 100, height: 50 });
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(() => currentRect);

    const { rerender } = render(<ElementOffsetTest dependency="before" />);
    expect(screen.getByTestId('measured-element')).toHaveAttribute('data-width', '100');
    expect(screen.getByTestId('measured-element')).toHaveAttribute('data-height', '50');

    currentRect = getMockDomRect({ width: 200, height: 80 });
    rerender(<ElementOffsetTest dependency="after" />);

    expect(screen.getByTestId('measured-element')).toHaveAttribute('data-width', '200');
    expect(screen.getByTestId('measured-element')).toHaveAttribute('data-height', '80');
    expect(observeSpy).toHaveBeenCalledTimes(1);
    expect(disconnectSpy).not.toHaveBeenCalled();
  });

  it('should keep observing size changes after Strict Mode replays effects', () => {
    let currentRect = getMockDomRect({ width: 100, height: 50 });
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(() => currentRect);

    render(
      <StrictMode>
        <ElementOffsetTest dependency="dependency" />
      </StrictMode>,
    );
    currentRect = getMockDomRect({ width: 200, height: 80 });

    act(() => {
      triggerResizeObserver();
    });

    expect(screen.getByTestId('measured-element')).toHaveAttribute('data-width', '200');
    expect(screen.getByTestId('measured-element')).toHaveAttribute('data-height', '80');
  });

  it('should not create a ResizeObserver when node is null', () => {
    const { result } = renderHook(() => useElementOffset());
    act(() => {
      result.current[1](null);
    });

    expect(observeSpy).not.toHaveBeenCalled();
  });

  it('should disconnect the previous ResizeObserver when a new node is attached', () => {
    const node1 = document.createElement('div');
    const node2 = document.createElement('div');
    vi.spyOn(node1, 'getBoundingClientRect').mockReturnValue(getMockDomRect({ width: 100, height: 50 }));
    vi.spyOn(node2, 'getBoundingClientRect').mockReturnValue(getMockDomRect({ width: 200, height: 80 }));

    const { result } = renderHook(() => useElementOffset());
    act(() => {
      result.current[1](node1);
    });
    expect(disconnectSpy).not.toHaveBeenCalled();

    act(() => {
      result.current[1](node2);
    });
    expect(disconnectSpy).toHaveBeenCalledTimes(1);
    expect(result.current[0]).toEqual({ width: 200, height: 80, left: 0, top: 0 });
  });

  it('should disconnect the ResizeObserver on unmount', () => {
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue(
      getMockDomRect({ width: 100, height: 50 }),
    );

    const { unmount } = render(<ElementOffsetTest dependency="dependency" />);

    unmount();
    expect(disconnectSpy).toHaveBeenCalledTimes(1);
  });

  it('should disconnect the previous observer when node is set to null', () => {
    const node = document.createElement('div');
    vi.spyOn(node, 'getBoundingClientRect').mockReturnValue(getMockDomRect({ width: 100, height: 50 }));

    const { result } = renderHook(() => useElementOffset());
    act(() => {
      result.current[1](node);
    });
    expect(disconnectSpy).not.toHaveBeenCalled();

    act(() => {
      result.current[1](null);
    });
    expect(disconnectSpy).toHaveBeenCalledTimes(1);
  });
});
