import React, { useState } from 'react';
import { act, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { JavascriptAnimate } from '../../src/animation/JavascriptAnimate';
import { MockTimeoutController } from './mockTimeoutController';
import { createAnimateManager } from '../../src/animation/AnimationManager';
import { MockTickingAnimationManager } from './MockTickingAnimationManager';

function getNamedSpy(name: string): () => void {
  return vi.fn().mockName(name);
}

describe('JavascriptAnimate timing', () => {
  const handleAnimationStart = getNamedSpy('handleAnimationStart');
  const handleAnimationEnd = getNamedSpy('handleAnimationEnd');

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('with animation steps as objects with a simple numeric values', () => {
    it('should call onAnimationStart and onAnimationEnd', async () => {
      const timeoutController = new MockTimeoutController();
      const animationManager = createAnimateManager(timeoutController);

      render(
        <JavascriptAnimate
          duration={500}
          onAnimationStart={handleAnimationStart}
          onAnimationEnd={handleAnimationEnd}
          animationManager={animationManager}
        >
          {() => <div className="test-wrapper" />}
        </JavascriptAnimate>,
      );

      expect(handleAnimationStart).toHaveBeenCalledTimes(1);
      expect(handleAnimationEnd).not.toHaveBeenCalled();

      await timeoutController.flushAllTimeouts();

      expect(handleAnimationStart).toHaveBeenCalledTimes(1);
      expect(handleAnimationEnd).toHaveBeenCalledTimes(1);
    });

    it('should not start animation if canBegin is false', async () => {
      const timeoutController = new MockTimeoutController();
      const animationManager = createAnimateManager(timeoutController);

      render(
        <JavascriptAnimate
          duration={500}
          canBegin={false}
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager}
        >
          {() => <div className="test-wrapper" />}
        </JavascriptAnimate>,
      );

      await timeoutController.flushAllTimeouts();

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(handleAnimationStart).not.toHaveBeenCalled();
    });

    it('should not start animation if isActive is false', async () => {
      const timeoutController = new MockTimeoutController();
      const animationManager = createAnimateManager(timeoutController);

      render(
        <JavascriptAnimate
          duration={500}
          isActive={false}
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager}
        >
          {() => <div className="test-wrapper" />}
        </JavascriptAnimate>,
      );

      await timeoutController.flushAllTimeouts();

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(handleAnimationStart).not.toHaveBeenCalled();
    });

    it('should call children function with current time', async () => {
      const timeoutController = new MockTimeoutController();
      const animationManager = createAnimateManager(timeoutController);
      const childFunction = vi.fn();

      render(
        <JavascriptAnimate duration={500} animationManager={animationManager}>
          {childFunction}
        </JavascriptAnimate>,
      );

      expect(childFunction).toHaveBeenCalledWith(0);
      expect(childFunction).toHaveBeenCalledTimes(1);

      await timeoutController.flushAllTimeouts();

      expect(childFunction).toHaveBeenCalledTimes(3);
      expect(childFunction).toHaveBeenCalledWith(1);
    });
  });

  describe('queue when the child is a function', () => {
    it('should add items to the animation queue on start, and call the render function', async () => {
      const animationManager = new MockTickingAnimationManager();
      const child = vi.fn();

      render(
        <JavascriptAnimate
          duration={500}
          onAnimationStart={handleAnimationStart}
          onAnimationEnd={handleAnimationEnd}
          animationManager={animationManager}
        >
          {child}
        </JavascriptAnimate>,
      );

      // first tick sets the starting state
      expect(child).toHaveBeenCalledWith(0);
      expect(child).toHaveBeenCalledTimes(1);
      expect(handleAnimationStart).toHaveBeenCalledTimes(0);
      expect(handleAnimationEnd).toHaveBeenCalledTimes(0);

      animationManager.assertQueue([
        '[function handleAnimationStart]',
        0,
        '[function onAnimationActive]',
        500,
        '[function handleAnimationEnd]',
      ]);

      // ticks two will call the handleAnimationStart
      // tick three is just waiting <begin> ms
      // tick four will call the onAnimationActive which starts the animation by registering the first timeout
      await animationManager.poll(3);
      expect(handleAnimationStart).toHaveBeenCalledTimes(1);
      expect(handleAnimationEnd).toHaveBeenCalledTimes(0);

      // animation is starting at time zero
      expect(child).toHaveBeenCalledWith(0);
      expect(child).toHaveBeenCalledTimes(1);

      animationManager.assertQueue([500, '[function handleAnimationEnd]']);

      // the animation is now in progress, now we need to tick with the time controller

      // specialty of the configUpdate: first tick is needed to kick off the animation
      await animationManager.triggerNextTimeout(16);

      // this tick should start rendering the child with progressing animation
      await animationManager.triggerNextTimeout(100);
      expect(child).toHaveBeenLastCalledWith(expect.closeTo(0.22, 1));
      expect(child).toHaveBeenCalledTimes(3);

      await animationManager.triggerNextTimeout(200);
      expect(child).toHaveBeenLastCalledWith(expect.closeTo(0.63, 1));
      expect(child).toHaveBeenCalledTimes(4);

      await animationManager.triggerNextTimeout(300);
      expect(child).toHaveBeenLastCalledWith(expect.closeTo(0.86, 1));
      expect(child).toHaveBeenCalledTimes(5);

      await animationManager.triggerNextTimeout(800);
      expect(child).toHaveBeenLastCalledWith(1);
      expect(child).toHaveBeenCalledTimes(6);

      await animationManager.poll();

      expect(child).toHaveBeenCalledWith(1);
      expect(child).toHaveBeenCalledTimes(6);

      animationManager.assertQueue(['[function handleAnimationEnd]']);
      expect(handleAnimationEnd).toHaveBeenCalledTimes(0);

      // and finally, the handleAnimationEnd should be called
      await animationManager.poll();

      expect(handleAnimationStart).toHaveBeenCalledTimes(1);
      expect(handleAnimationEnd).toHaveBeenCalledTimes(1);
    });

    it('should not start animation if canBegin is false, and render with time zero', () => {
      const animationManager = new MockTickingAnimationManager();
      const child = vi.fn();

      render(
        <JavascriptAnimate
          duration={500}
          canBegin={false}
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager}
        >
          {child}
        </JavascriptAnimate>,
      );

      animationManager.assertQueue(null);

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(child).toHaveBeenCalledWith(0);
      expect(child).toHaveBeenCalledTimes(1);
    });

    it('should go straight to final state when isActive is false', () => {
      const animationManager = new MockTickingAnimationManager();
      const child = vi.fn();

      render(
        <JavascriptAnimate
          duration={500}
          isActive={false}
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager}
        >
          {child}
        </JavascriptAnimate>,
      );

      animationManager.assertQueue(null);

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(child).toHaveBeenCalledWith(1);
      expect(child).toHaveBeenCalledTimes(1);
    });

    it('should restart animation when isActive changes to true', async () => {
      const animationManager = new MockTickingAnimationManager();
      const child = vi.fn();

      const { rerender } = render(
        <JavascriptAnimate
          duration={500}
          isActive={false}
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager}
        >
          {child}
        </JavascriptAnimate>,
      );

      animationManager.assertQueue(null);

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(child).toHaveBeenLastCalledWith(1);
      expect(child).toHaveBeenCalledTimes(1);

      // Now we change isActive to true
      rerender(
        <JavascriptAnimate
          duration={500}
          isActive
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager}
        >
          {child}
        </JavascriptAnimate>,
      );

      // queue should be populated with the animation steps
      animationManager.assertQueue([
        '[function handleAnimationStart]',
        0,
        '[function onAnimationActive]',
        500,
        '[function onAnimationEnd]',
      ]);

      await animationManager.poll();

      expect(handleAnimationStart).toHaveBeenCalledTimes(1);
      expect(child).toHaveBeenLastCalledWith(1);
      expect(child).toHaveBeenCalledTimes(2);

      animationManager.assertQueue([0, '[function onAnimationActive]', 500, '[function onAnimationEnd]']);

      await animationManager.poll();

      animationManager.assertQueue(['[function onAnimationActive]', 500, '[function onAnimationEnd]']);

      await animationManager.poll();

      animationManager.assertQueue([500, '[function onAnimationEnd]']);

      expect(child).toHaveBeenLastCalledWith(1);
      expect(child).toHaveBeenCalledTimes(2);

      await animationManager.triggerNextTimeout(16);
      /*
       * The child abruptly changes to the starting state, not great!
       * We assume that the animation starts from the starting state
       * and put responsibility of the initial state on the user
       */
      expect(child).toHaveBeenLastCalledWith(0);
      expect(child).toHaveBeenCalledTimes(3);

      await animationManager.triggerNextTimeout(100);
      expect(child).toHaveBeenLastCalledWith(expect.closeTo(0.22, 1));
      expect(child).toHaveBeenCalledTimes(4);

      await animationManager.triggerNextTimeout(200);
      expect(child).toHaveBeenLastCalledWith(expect.closeTo(0.63, 1));
      expect(child).toHaveBeenCalledTimes(5);

      await animationManager.triggerNextTimeout(300);
      expect(child).toHaveBeenLastCalledWith(expect.closeTo(0.86, 1));
      expect(child).toHaveBeenCalledTimes(6);

      await animationManager.triggerNextTimeout(800);
      expect(child).toHaveBeenLastCalledWith(1);
      expect(child).toHaveBeenCalledTimes(7);
    });

    it('should restart animation when isActive changes to true via button click', async () => {
      const animationManager = new MockTickingAnimationManager();
      const child = vi.fn();
      const MyTestComponent = () => {
        const [isActive, setIsActive] = useState(false);
        return (
          <>
            <JavascriptAnimate
              duration={500}
              isActive={isActive}
              onAnimationStart={handleAnimationStart}
              animationManager={animationManager}
            >
              {child}
            </JavascriptAnimate>
            <button type="button" onClick={() => setIsActive(true)}>
              Start Animation
            </button>
          </>
        );
      };

      const { getByText } = render(<MyTestComponent />);

      animationManager.assertQueue(null);

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(child).toHaveBeenLastCalledWith(1);
      expect(child).toHaveBeenCalledTimes(1);
      expect(animationManager.isRunning()).toBe(false);

      const button = getByText('Start Animation');
      act(() => {
        button.click();
      });

      // queue should be populated with the animation steps
      animationManager.assertQueue([
        '[function handleAnimationStart]',
        0,
        '[function onAnimationActive]',
        500,
        '[function onAnimationEnd]',
      ]);
      expect(animationManager.isRunning()).toBe(true);
      await animationManager.poll();
      animationManager.assertQueue([0, '[function onAnimationActive]', 500, '[function onAnimationEnd]']);
      expect(handleAnimationStart).toHaveBeenCalledTimes(1);

      await animationManager.poll();
      animationManager.assertQueue(['[function onAnimationActive]', 500, '[function onAnimationEnd]']);

      await animationManager.poll();
      animationManager.assertQueue([500, '[function onAnimationEnd]']);

      expect(child).toHaveBeenLastCalledWith(1);
      expect(child).toHaveBeenCalledTimes(3);

      await animationManager.triggerNextTimeout(16);
      /*
       * The child abruptly changes to the "from" state, not great!
       * We assume that the animation starts from the "from" state
       * and put responsibility of the initial state on the user
       */
      expect(child).toHaveBeenLastCalledWith(0);
      expect(child).toHaveBeenCalledTimes(4);
    });

    it('should rerender with the final state when isActive is false', () => {
      const animationManager = new MockTickingAnimationManager();
      const child = vi.fn();

      const { rerender } = render(
        <JavascriptAnimate
          duration={500}
          isActive={false}
          onAnimationStart={handleAnimationStart}
          onAnimationEnd={handleAnimationEnd}
          animationManager={animationManager}
        >
          {child}
        </JavascriptAnimate>,
      );

      animationManager.assertQueue(null);

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(handleAnimationEnd).not.toHaveBeenCalled();
      expect(child).toHaveBeenLastCalledWith(1);
      expect(child).toHaveBeenCalledTimes(1);

      rerender(
        <JavascriptAnimate
          duration={500}
          isActive={false}
          onAnimationStart={handleAnimationStart}
          onAnimationEnd={handleAnimationEnd}
          animationManager={animationManager}
        >
          {child}
        </JavascriptAnimate>,
      );

      expect(child).toHaveBeenLastCalledWith(1);
      expect(child).toHaveBeenCalledTimes(3);
      animationManager.assertQueue(null);
      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(handleAnimationEnd).not.toHaveBeenCalled();
    });

    it('should not start animation on rerender if canBegin is false', () => {
      const animationManager = new MockTickingAnimationManager();
      const child = vi.fn();

      const { rerender } = render(
        <JavascriptAnimate
          duration={500}
          canBegin={false}
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager}
        >
          {child}
        </JavascriptAnimate>,
      );

      animationManager.assertQueue(null);

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(child).toHaveBeenLastCalledWith(0);
      expect(child).toHaveBeenCalledTimes(1);

      rerender(
        <JavascriptAnimate
          duration={500}
          canBegin={false}
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager}
        >
          {child}
        </JavascriptAnimate>,
      );

      // rerendering should not start the animation, this appears correct
      animationManager.assertQueue(null);

      // however, the child should be rerendered with the fresh starting state so this looks like a bug
      expect(child).toHaveBeenLastCalledWith(0);
      expect(child).toHaveBeenCalledTimes(2);
    });
  });
});
