import { describe, it, expect, vi } from 'vitest';
import { setRafTimeout } from '../../src/animation/setRafTimeout';

describe('setRafTimeout', () => {
  it('should call setRafTimeout', () => {
    vi.useFakeTimers();
    const spy = vi.spyOn(window, 'requestAnimationFrame');
    const cb = vi.fn();
    setRafTimeout(cb);
    expect(cb).not.toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
    vi.runAllTimers();
    expect(cb).toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
  });

  it('should not call requestAnimationFrame with a 1 second delay', () => {
    vi.useFakeTimers();
    const spy = vi.spyOn(window, 'requestAnimationFrame');
    const cb = vi.fn();
    setRafTimeout(cb, 1000);
    expect(cb).not.toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();

    vi.advanceTimersByTime(999);

    expect(cb).not.toHaveBeenCalled();

    vi.advanceTimersByTime(25);
    expect(cb).toHaveBeenCalledTimes(1);
  });
});
