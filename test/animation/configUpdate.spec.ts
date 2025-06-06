import { describe, it, beforeEach, expect, vi, MockInstance, Mock } from 'vitest';
import { configEasing } from '../../src/animation/easing';
import animationFunction from '../../src/animation/configUpdate';

// eslint-disable-next-line no-undef
let requestAnimationFrameMock: MockInstance<(callback: FrameRequestCallback) => number>,
  cancelAnimationFrameMock: MockInstance<(handle: number) => void>;

beforeEach(() => {
  // Reset mocks
  vi.resetAllMocks();
  vi.useFakeTimers({ toFake: ['requestAnimationFrame'] });

  // Create spy functions for requestAnimationFrame and cancelAnimationFrame
  requestAnimationFrameMock = vi.spyOn(window, 'requestAnimationFrame');
  cancelAnimationFrameMock = vi.spyOn(window, 'cancelAnimationFrame');
});

afterEach(() => {
  // Clear any pending timeouts
  vi.clearAllTimers();
  vi.useRealTimers();
});

describe('animationFunction', () => {
  let render: Mock<(...args: any[]) => any>, easing: any;

  beforeEach(() => {
    render = vi.fn();

    // Dummy easing functions for testing
    // this static property addition to a function is wild
    easing = configEasing('linear');
  });

  it('should return a function that starts and stops animation', () => {
    const from = { x: 0, y: 0 };
    const to = { x: 100, y: 100 };
    const duration = 1000;

    const startAnimation = animationFunction(from, to, easing, duration, render);

    expect(typeof startAnimation).toBe('function');

    const stopAnimation = startAnimation();
    expect(typeof stopAnimation).toBe('function');
  });

  it('should use stepperUpdate if easing.isStepper is true', async () => {
    easing = configEasing('spring');
    const from = '0';
    const to = '1';
    const duration = 20;

    // @ts-expect-error TODO - fix the type error
    const startAnimation = animationFunction(from, to, easing, duration, render);

    startAnimation();

    expect(requestAnimationFrameMock).toHaveBeenCalledWith(expect.any(Function));

    vi.advanceTimersToNextFrame();

    // Check if render was called
    expect(render).toHaveBeenCalled();
  });

  it('should use timingUpdate if easing.isStepper is false', () => {
    easing = configEasing('spring');
    const from = { x: 0, y: 0 };
    const to = { x: 100, y: 100 };
    const duration = 20;

    const startAnimation = animationFunction(from, to, easing, duration, render);
    startAnimation();
    vi.advanceTimersToNextFrame();

    expect(requestAnimationFrameMock).toHaveBeenCalled();

    expect(render).toHaveBeenCalled();
  });

  it('should stop animation when requested', () => {
    const from = { x: 0, y: 0 };
    const to = { x: 100, y: 100 };
    const duration = 1000;

    const startAnimation = animationFunction(from, to, easing, duration, render);
    const stopAnimation = startAnimation();

    expect(requestAnimationFrameMock).toHaveBeenCalled();
    stopAnimation();

    expect(cancelAnimationFrameMock).toHaveBeenCalled();
  });

  it('should call render with correct values', () => {
    const from = { x: 0, y: 0 };
    const to = { x: 100, y: 100 };
    const duration = 1000;

    const startAnimation = animationFunction(from, to, easing, duration, render);

    startAnimation();
    vi.advanceTimersToNextFrame();
    vi.runAllTimers();

    expect(render).toHaveBeenCalledWith({
      x: from.x,
      y: from.y,
    });
  });
});
