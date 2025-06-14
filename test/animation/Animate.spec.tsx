import React, { useState } from 'react';
import { act, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Animate } from '../../src/animation/Animate';
import { MockTimeoutController } from './mockTimeoutController';
import { createAnimateManager } from '../../src/animation/AnimationManager';
import { MockAnimationManager } from './mockAnimationManager';

function getNamedSpy(name: string): () => void {
  return vi.fn().mockName(name);
}

describe('Animate', () => {
  const handleAnimationStart = getNamedSpy('handleAnimationStart');
  const handleAnimationEnd = getNamedSpy('handleAnimationEnd');

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('with animation steps as strings', () => {
    it('Should change the style of children via element cloning', () => {
      vi.useFakeTimers();
      expect.assertions(2);
      const { container } = render(
        // @ts-expect-error TODO - fix the type error
        <Animate from="1" to="0" attributeName="opacity" duration={500}>
          <div className="test-wrapper" />
        </Animate>,
      );
      const element = container.getElementsByClassName('test-wrapper')[0];
      expect(element).toHaveStyle({
        opacity: 1,
      });

      act(() => {
        vi.advanceTimersByTime(700);
      });

      expect(element).toHaveStyle({
        opacity: 0,
      });
    });

    it('Should call onAnimationEnd at the end of the animation', () => {
      vi.useFakeTimers();
      expect.assertions(2);

      render(
        // @ts-expect-error TODO - fix the type error
        <Animate from="1" to="0" attributeName="opacity" duration={500} onAnimationEnd={handleAnimationEnd}>
          <div />
        </Animate>,
      );

      expect(handleAnimationEnd).not.toHaveBeenCalled();

      act(() => {
        vi.advanceTimersByTime(700);
      });

      expect(handleAnimationEnd).toHaveBeenCalledTimes(1);
    });
  });

  describe('with animation steps as objects', () => {
    it('should call onAnimationStart and onAnimationEnd', async () => {
      const timeoutController = new MockTimeoutController();
      const animationManager = createAnimateManager(timeoutController);

      render(
        <Animate
          from={{ opacity: 1 }}
          to={{ opacity: 0 }}
          duration={500}
          onAnimationStart={handleAnimationStart}
          onAnimationEnd={handleAnimationEnd}
          animationManager={animationManager}
        >
          <div className="test-wrapper" />
        </Animate>,
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
        <Animate
          from={{ opacity: 1 }}
          to={{ opacity: 0 }}
          duration={500}
          canBegin={false}
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager}
        >
          <div className="test-wrapper" />
        </Animate>,
      );

      await timeoutController.flushAllTimeouts();

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(handleAnimationStart).not.toHaveBeenCalled();
    });

    it('should not start animation if isActive is false', async () => {
      const timeoutController = new MockTimeoutController();
      const animationManager = createAnimateManager(timeoutController);

      render(
        <Animate
          from={{ opacity: 1 }}
          to={{ opacity: 0 }}
          duration={500}
          isActive={false}
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager}
        >
          <div className="test-wrapper" />
        </Animate>,
      );

      await timeoutController.flushAllTimeouts();

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(handleAnimationStart).not.toHaveBeenCalled();
    });

    it('should call children function with current style', async () => {
      const timeoutController = new MockTimeoutController();
      const animationManager = createAnimateManager(timeoutController);
      const childFunction = vi.fn();

      render(
        <Animate from={{ opacity: 1 }} to={{ opacity: 0 }} duration={500} animationManager={animationManager}>
          {childFunction}
        </Animate>,
      );

      expect(childFunction).toHaveBeenCalledWith({ opacity: 1 });
      expect(childFunction).toHaveBeenCalledTimes(1);

      await timeoutController.flushAllTimeouts();

      expect(childFunction).toHaveBeenCalledTimes(3);
      expect(childFunction).toHaveBeenCalledWith({ opacity: 0 });
    });
  });

  describe('queue when the child is an element', () => {
    it('should add items to the animation queue on start, and call stop on unmount', () => {
      const animationManager = new MockAnimationManager();

      const { rerender } = render(
        <Animate
          from={{ opacity: 1 }}
          to={{ opacity: 0 }}
          duration={500}
          onAnimationStart={handleAnimationStart}
          onAnimationEnd={handleAnimationEnd}
          animationManager={animationManager}
        >
          <div className="test-wrapper" />
        </Animate>,
      );

      animationManager.assertQueue([
        '[function handleAnimationStart]',
        0,
        {
          opacity: 0,
          transition: 'opacity 500ms ease',
        },
        500,
        '[function handleAnimationEnd]',
      ]);

      rerender(<></>);

      expect(animationManager.isRunning(), 'AnimationManager should be stopped on unmount').toBe(false);
    });

    it('should restart animation when isActive changes to true', async () => {
      const animationManager = new MockAnimationManager();

      const { rerender } = render(
        <Animate
          from={{ opacity: 1 }}
          to={{ opacity: 0 }}
          duration={500}
          isActive={false}
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager}
        >
          <div className="test-wrapper" />
        </Animate>,
      );

      animationManager.assertQueue(null);

      expect(handleAnimationStart).not.toHaveBeenCalled();

      // Now we change isActive to true
      rerender(
        <Animate
          from={{ opacity: 1 }}
          to={{ opacity: 0 }}
          duration={500}
          isActive
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager}
        >
          <div className="test-wrapper" />
        </Animate>,
      );

      // queue should be populated with the animation steps
      animationManager.assertQueue([
        '[function handleAnimationStart]',
        0,
        {
          opacity: 0,
          transition: 'opacity 500ms ease',
        },
        500,
        '[function onAnimationEnd]',
      ]);

      await animationManager.poll();

      expect(handleAnimationStart).toHaveBeenCalledTimes(1);
    });
  });

  describe('queue when the child is a function', () => {
    it('should add items to the animation queue on start, and call the render function', async () => {
      const animationManager = new MockAnimationManager();
      const child = vi.fn();

      render(
        <Animate
          from={{ opacity: 1 }}
          to={{ opacity: 0 }}
          duration={500}
          onAnimationStart={handleAnimationStart}
          onAnimationEnd={handleAnimationEnd}
          animationManager={animationManager}
        >
          {child}
        </Animate>,
      );

      // first tick sets the starting state
      expect(child).toHaveBeenCalledWith({ opacity: 1 });
      expect(child).toHaveBeenCalledTimes(1);
      expect(handleAnimationStart).toHaveBeenCalledTimes(0);
      expect(handleAnimationEnd).toHaveBeenCalledTimes(0);

      animationManager.assertQueue([
        '[function handleAnimationStart]',
        0,
        '[function finalStartAnimation]',
        500,
        '[function handleAnimationEnd]',
      ]);

      // ticks two will call the handleAnimationStart
      // tick three is just waiting <begin> ms
      // tick four will call the finalStartAnimation which starts the animation by registering the first timeout
      await animationManager.poll(3);
      expect(handleAnimationStart).toHaveBeenCalledTimes(1);
      expect(handleAnimationEnd).toHaveBeenCalledTimes(0);

      expect(child).toHaveBeenCalledWith({ opacity: 1 });
      expect(child).toHaveBeenCalledTimes(1);

      animationManager.assertQueue([500, '[function handleAnimationEnd]']);

      // the animation is now in progress, now we need to tick with the time controller

      // specialty of the configUpdate: first tick is needed to kick off the animation
      await animationManager.triggerNextTimeout(16);

      // this tick should start rendering the child with progressing animation
      await animationManager.triggerNextTimeout(100);
      expect(child).toHaveBeenLastCalledWith({ opacity: expect.closeTo(0.77, 1) });
      expect(child).toHaveBeenCalledTimes(3);

      await animationManager.triggerNextTimeout(200);
      expect(child).toHaveBeenLastCalledWith({ opacity: expect.closeTo(0.36, 1) });
      expect(child).toHaveBeenCalledTimes(4);

      await animationManager.triggerNextTimeout(300);
      expect(child).toHaveBeenLastCalledWith({ opacity: expect.closeTo(0.14, 1) });
      expect(child).toHaveBeenCalledTimes(5);

      await animationManager.triggerNextTimeout(800);
      expect(child).toHaveBeenLastCalledWith({ opacity: expect.closeTo(0, 1) });
      expect(child).toHaveBeenCalledTimes(6);

      await animationManager.poll();

      expect(child).toHaveBeenCalledWith({ opacity: 0 });
      expect(child).toHaveBeenCalledTimes(6);

      animationManager.assertQueue(['[function handleAnimationEnd]']);
      expect(handleAnimationEnd).toHaveBeenCalledTimes(0);

      // and finally, the handleAnimationEnd should be called
      await animationManager.poll();

      expect(handleAnimationStart).toHaveBeenCalledTimes(1);
      expect(handleAnimationEnd).toHaveBeenCalledTimes(1);
    });

    it('should not start animation if canBegin is false, and render with "from" state', () => {
      const animationManager = new MockAnimationManager();
      const child = vi.fn();

      render(
        <Animate
          from={{ opacity: 1 }}
          to={{ opacity: 0 }}
          duration={500}
          canBegin={false}
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager}
        >
          {child}
        </Animate>,
      );

      animationManager.assertQueue(null);

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(child).toHaveBeenCalledWith({ opacity: 1 });
      expect(child).toHaveBeenCalledTimes(1);
    });

    it('should go straight to "to" state when isActive is false', () => {
      const animationManager = new MockAnimationManager();
      const child = vi.fn();

      render(
        <Animate
          from={{ opacity: 1 }}
          to={{ opacity: 0 }}
          duration={500}
          isActive={false}
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager}
        >
          {child}
        </Animate>,
      );

      animationManager.assertQueue(null);

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(child).toHaveBeenCalledWith({ opacity: 0 });
      expect(child).toHaveBeenCalledTimes(1);
    });

    it('should restart animation when isActive changes to true', async () => {
      const animationManager = new MockAnimationManager();
      const child = vi.fn();

      const { rerender } = render(
        <Animate
          from={{ opacity: 1 }}
          to={{ opacity: 0 }}
          duration={500}
          isActive={false}
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager}
        >
          {child}
        </Animate>,
      );

      animationManager.assertQueue(null);

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(child).toHaveBeenLastCalledWith({ opacity: 0 });
      expect(child).toHaveBeenCalledTimes(1);

      // Now we change isActive to true
      rerender(
        <Animate
          from={{ opacity: 1 }}
          to={{ opacity: 0 }}
          duration={500}
          isActive
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager}
        >
          {child}
        </Animate>,
      );

      // queue should be populated with the animation steps
      animationManager.assertQueue([
        '[function handleAnimationStart]',
        0,
        '[function finalStartAnimation]',
        500,
        '[function onAnimationEnd]',
      ]);

      await animationManager.poll();

      expect(handleAnimationStart).toHaveBeenCalledTimes(1);
      /*
       * The child abruptly changes to the "from" state, not great!
       * We assume that the animation starts from the "from" state
       * and put responsibility of the initial state on the user
       */
      expect(child).toHaveBeenLastCalledWith({ opacity: 1 });
      expect(child).toHaveBeenCalledTimes(3);
    });

    it('should restart animation when isActive changes to true via button click', async () => {
      const animationManager = new MockAnimationManager();
      const child = vi.fn();
      const MyTestComponent = () => {
        const [isActive, setIsActive] = useState(false);
        return (
          <>
            <Animate
              from={{ opacity: 1 }}
              to={{ opacity: 0 }}
              duration={500}
              isActive={isActive}
              onAnimationStart={handleAnimationStart}
              animationManager={animationManager}
            >
              {child}
            </Animate>
            <button type="button" onClick={() => setIsActive(true)}>
              Start Animation
            </button>
          </>
        );
      };

      const { getByText } = render(<MyTestComponent />);

      animationManager.assertQueue(null);

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(child).toHaveBeenLastCalledWith({ opacity: 0 });
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
        '[function finalStartAnimation]',
        500,
        '[function onAnimationEnd]',
      ]);
      expect(animationManager.isRunning()).toBe(true);
      await animationManager.poll();

      expect(handleAnimationStart).toHaveBeenCalledTimes(1);
      /*
       * The child abruptly changes to the "from" state, not great!
       * We assume that the animation starts from the "from" state
       * and put responsibility of the initial state on the user
       */
      expect(child).toHaveBeenLastCalledWith({ opacity: 1 });
      expect(child).toHaveBeenCalledTimes(3);
      animationManager.assertQueue([0, '[function finalStartAnimation]', 500, '[function onAnimationEnd]']);
    });
  });
});
