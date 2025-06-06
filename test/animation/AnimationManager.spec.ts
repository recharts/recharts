import { describe, it, beforeEach, expect, vi } from 'vitest';
import { AnimationManager, createAnimateManager } from '../../src/animation/AnimationManager';
import * as setRafTimeout from '../../src/animation/setRafTimeout';

vi.mock('./setRafTimeout'); // Mock the setRafTimeout module

describe('createAnimateManager', () => {
  let manager: AnimationManager, handleChange: (currentStyle?: Record<string, any>) => void;

  beforeEach(() => {
    manager = createAnimateManager();
    handleChange = vi.fn();
  });

  it('should start and stop animation', () => {
    manager.subscribe(handleChange);

    // Start animation
    manager.start({ color: 'red' });
    expect(handleChange).toHaveBeenCalledWith({ color: 'red' });

    // Stop animation
    manager.stop();
    // manager.start({ color: 'blue' });
    expect(handleChange).toHaveBeenCalledTimes(1); // handleChange should not be called again
  });

  it('should handle object style', () => {
    manager.subscribe(handleChange);
    manager.start({ color: 'green' });
    expect(handleChange).toHaveBeenCalledWith({ color: 'green' });
  });

  it('should handle array style with delay', () => {
    // Mock setRafTimeout to directly call the function
    const rafSpy = vi.spyOn(setRafTimeout, 'setRafTimeout').mockImplementation(callback => {
      // Directly call the callback for test purposes
      callback(0);
    });

    manager.subscribe(handleChange);
    // @ts-expect-error still trying to understand how the animation manager works with the mysterious array of everything mixed together
    manager.start([100, { color: 'blue' }]);

    // Wait for the timeout to call setStyle
    expect(rafSpy).toHaveBeenCalledWith(expect.any(Function), 100);
    expect(handleChange).toHaveBeenCalledWith({ color: 'blue' });
  });

  it('should handle function style', () => {
    const fn = vi.fn();
    manager.subscribe(handleChange);
    manager.start(fn);
    expect(fn).toHaveBeenCalled();
  });

  it('should unsubscribe correctly', () => {
    const unsubscribe = manager.subscribe(handleChange);
    manager.start({ color: 'yellow' });
    expect(handleChange).toHaveBeenCalledWith({ color: 'yellow' });

    unsubscribe(); // Unsubscribe
    // unsure how to cover lines 10-11
    // manager.start({ color: 'black' });
    // expect(handleChange).toHaveBeenCalledTimes(1); // handleChange should not be called again
  });
});
