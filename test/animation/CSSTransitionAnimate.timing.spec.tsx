import React, { useState } from 'react';
import { act, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { CSSTransitionAnimate } from '../../src/animation/CSSTransitionAnimate';
import { MockTimeoutController } from './mockTimeoutController';
import { createAnimateManager } from '../../src/animation/AnimationManager';
import { MockTickingAnimationManager } from './MockTickingAnimationManager';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';

function getNamedSpy(name: string): () => void {
  return vi.fn().mockName(name);
}

describe('CSSTransitionAnimate timing', () => {
  const handleAnimationStart = getNamedSpy('handleAnimationStart');
  const handleAnimationEnd = getNamedSpy('handleAnimationEnd');

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('with animation steps as strings', () => {
    describe('test using vi fake timers', () => {
      it('should call children function with animated style', () => {
        vi.useFakeTimers();
        expect.assertions(2);
        const childFunction = vi.fn();
        render(
          <CSSTransitionAnimate animationId="1" from="1" to="0" attributeName="opacity" duration={500}>
            {childFunction}
          </CSSTransitionAnimate>,
        );

        expectLastCalledWith(childFunction, {
          opacity: '1',
          transition: 'opacity 500ms ease',
        });

        act(() => {
          vi.advanceTimersByTime(700);
        });

        expectLastCalledWith(childFunction, {
          opacity: '0',
          transition: 'opacity 500ms ease',
        });
      });

      it('should call onAnimationEnd at the end of the animation', () => {
        vi.useFakeTimers();
        expect.assertions(2);
        const spy = vi.fn();

        render(
          <CSSTransitionAnimate
            animationId="1"
            from="1"
            to="0"
            attributeName="opacity"
            duration={500}
            onAnimationEnd={handleAnimationEnd}
          >
            {spy}
          </CSSTransitionAnimate>,
        );

        expect(handleAnimationEnd).not.toHaveBeenCalled();

        act(() => {
          vi.advanceTimersByTime(700);
        });

        expect(handleAnimationEnd).toHaveBeenCalledTimes(1);
      });
    });

    describe('test using MockTimeoutController', () => {
      it('should call children function with animated style', async () => {
        const timeoutController = new MockTimeoutController();
        const animationManager = createAnimateManager(timeoutController);
        const childFunction = vi.fn();

        render(
          <CSSTransitionAnimate
            animationId="1"
            from="scaleY(0)"
            to="scaleY(1)"
            attributeName="transform"
            duration={500}
            animationManager={animationManager}
          >
            {childFunction}
          </CSSTransitionAnimate>,
        );

        expect(childFunction).toHaveBeenLastCalledWith({
          transform: 'scaleY(0)',
          transition: 'transform 500ms ease',
        });
        expect(childFunction).toHaveBeenCalledTimes(1);

        await timeoutController.flushAllTimeouts();

        expect(childFunction).toHaveBeenCalledTimes(2);
        // this is not at all what happens
        expect(childFunction).toHaveBeenLastCalledWith({
          transform: 'scaleY(1)',
          transition: 'transform 500ms ease',
        });
      });

      it('should call onAnimationStart and onAnimationEnd', async () => {
        const timeoutController = new MockTimeoutController();
        const animationManager = createAnimateManager(timeoutController);
        const childFunction = vi.fn();

        render(
          <CSSTransitionAnimate
            animationId="1"
            from="scaleY(0)"
            to="scaleY(1)"
            attributeName="transform"
            duration={500}
            onAnimationStart={handleAnimationStart}
            onAnimationEnd={handleAnimationEnd}
            animationManager={animationManager}
          >
            {childFunction}
          </CSSTransitionAnimate>,
        );

        expect(handleAnimationStart).toHaveBeenCalledTimes(1);
        expect(handleAnimationEnd).not.toHaveBeenCalled();

        await timeoutController.flushAllTimeouts();

        expect(handleAnimationStart).toHaveBeenCalledTimes(1);
        expect(handleAnimationEnd).toHaveBeenCalledTimes(1);
      });

      it('should add items to the animation queue on start, and call stop on unmount', () => {
        const animationManager = new MockTickingAnimationManager();
        const childFunction = vi.fn();

        const { rerender } = render(
          <CSSTransitionAnimate
            animationId="1"
            from="1"
            to="0"
            attributeName="opacity"
            duration={500}
            onAnimationStart={handleAnimationStart}
            onAnimationEnd={handleAnimationEnd}
            animationManager={animationManager}
          >
            {childFunction}
          </CSSTransitionAnimate>,
        );

        animationManager.assertQueue(['[function handleAnimationStart]', 0, '0', 500, '[function handleAnimationEnd]']);

        rerender(<></>);

        expect(animationManager.isRunning(), 'AnimationManager should be stopped on unmount').toBe(false);
      });

      it('should not start animation if canBegin is false, and render with starting state', () => {
        const animationManager = new MockTickingAnimationManager();
        const child = vi.fn();

        render(
          <CSSTransitionAnimate
            animationId="1"
            from="1"
            to="0"
            attributeName="opacity"
            easing="ease-in-out"
            duration={500}
            canBegin={false}
            onAnimationStart={handleAnimationStart}
            animationManager={animationManager}
          >
            {child}
          </CSSTransitionAnimate>,
        );

        animationManager.assertQueue(null);

        expect(handleAnimationStart).not.toHaveBeenCalled();
        expect(child).toHaveBeenCalledWith({ opacity: '1' });
        expect(child).toHaveBeenCalledTimes(1);
      });

      it('should go straight to final state when isActive is false, and do not pass any transition', () => {
        const animationManager = new MockTickingAnimationManager();
        const child = vi.fn();

        render(
          <CSSTransitionAnimate
            animationId="1"
            from="1"
            to="0"
            attributeName="opacity"
            duration={500}
            isActive={false}
            onAnimationStart={handleAnimationStart}
            animationManager={animationManager}
          >
            {child}
          </CSSTransitionAnimate>,
        );

        animationManager.assertQueue(null);

        expect(handleAnimationStart).not.toHaveBeenCalled();
        expect(child).toHaveBeenCalledWith({ opacity: '0' });
        expect(child).toHaveBeenCalledTimes(1);
      });

      it('should restart animation when isActive changes to true via rerender', async () => {
        const animationManager = new MockTickingAnimationManager();
        const child = vi.fn();

        const { rerender } = render(
          <CSSTransitionAnimate
            animationId="1"
            from="1"
            to="0"
            attributeName="opacity"
            duration={500}
            isActive={false}
            onAnimationStart={handleAnimationStart}
            animationManager={animationManager}
          >
            {child}
          </CSSTransitionAnimate>,
        );

        animationManager.assertQueue(null);

        expect(handleAnimationStart).not.toHaveBeenCalled();
        expect(child).toHaveBeenLastCalledWith({ opacity: '0' });
        expect(child).toHaveBeenCalledTimes(1);

        // Now we change isActive to true
        rerender(
          <CSSTransitionAnimate
            animationId="1"
            from="1"
            to="0"
            attributeName="opacity"
            duration={300}
            isActive
            onAnimationStart={handleAnimationStart}
            animationManager={animationManager}
          >
            {child}
          </CSSTransitionAnimate>,
        );

        // queue should be populated with the animation steps
        animationManager.assertQueue(['[function handleAnimationStart]', 0, '0', 300, '[function onAnimationEnd]']);

        await animationManager.poll();

        expect(handleAnimationStart).toHaveBeenCalledTimes(1);
        expect(child).toHaveBeenLastCalledWith({ opacity: '0', transition: 'opacity 300ms ease' });
        expect(child).toHaveBeenCalledTimes(2);
      });

      it('should restart animation when isActive changes to true via button click', async () => {
        const animationManager = new MockTickingAnimationManager();
        const child = vi.fn();
        const MyTestComponent = () => {
          const [isActive, setIsActive] = useState(false);
          return (
            <>
              <CSSTransitionAnimate
                animationId="1"
                from="1"
                to="0"
                attributeName="opacity"
                duration={500}
                isActive={isActive}
                onAnimationStart={handleAnimationStart}
                animationManager={animationManager}
              >
                {child}
              </CSSTransitionAnimate>
              <button type="button" onClick={() => setIsActive(true)}>
                Start Animation
              </button>
            </>
          );
        };

        const { getByText } = render(<MyTestComponent />);

        animationManager.assertQueue(null);

        expect(handleAnimationStart).not.toHaveBeenCalled();
        expect(child).toHaveBeenLastCalledWith({ opacity: '0' });
        expect(child).toHaveBeenCalledTimes(1);
        expect(animationManager.isRunning()).toBe(false);

        const button = getByText('Start Animation');
        act(() => {
          button.click();
        });

        // queue should be populated with the animation steps
        animationManager.assertQueue(['[function handleAnimationStart]', 0, '0', 500, '[function onAnimationEnd]']);
        expect(animationManager.isRunning()).toBe(true);
        await animationManager.poll();

        expect(handleAnimationStart).toHaveBeenCalledTimes(1);
        expect(child).toHaveBeenLastCalledWith({ opacity: '0', transition: 'opacity 500ms ease' });
        expect(child).toHaveBeenCalledTimes(3);
        animationManager.assertQueue([0, '0', 500, '[function onAnimationEnd]']);
      });

      it('should rerender with the final state when isActive is false', () => {
        const animationManager = new MockTickingAnimationManager();
        const child = vi.fn();

        const { rerender } = render(
          <CSSTransitionAnimate
            animationId="1"
            from="1"
            to="0"
            attributeName="opacity"
            duration={500}
            isActive={false}
            onAnimationStart={handleAnimationStart}
            onAnimationEnd={handleAnimationEnd}
            animationManager={animationManager}
          >
            {child}
          </CSSTransitionAnimate>,
        );

        animationManager.assertQueue(null);

        expect(handleAnimationStart).not.toHaveBeenCalled();
        expect(handleAnimationEnd).not.toHaveBeenCalled();
        expect(child).toHaveBeenLastCalledWith({ opacity: '0' });
        expect(child).toHaveBeenCalledTimes(1);

        rerender(
          <CSSTransitionAnimate
            animationId="1"
            from="0.7"
            to="0.3"
            attributeName="opacity"
            duration={500}
            isActive={false}
            onAnimationStart={handleAnimationStart}
            onAnimationEnd={handleAnimationEnd}
            animationManager={animationManager}
          >
            {child}
          </CSSTransitionAnimate>,
        );

        // this second render does not look like it's necessary but also doesn't hurt
        expect(child).toHaveBeenNthCalledWith(2, { opacity: '0' });
        expect(child).toHaveBeenLastCalledWith({ opacity: '0.3' });
        expect(child).toHaveBeenCalledTimes(3);
        animationManager.assertQueue(null);
        expect(handleAnimationStart).not.toHaveBeenCalled();
        expect(handleAnimationEnd).not.toHaveBeenCalled();
      });

      it('should not start animation on rerender if canBegin is false', () => {
        const animationManager = new MockTickingAnimationManager();
        const child = vi.fn();

        const { rerender } = render(
          <CSSTransitionAnimate
            animationId="1"
            from="1"
            to="0"
            attributeName="opacity"
            duration={500}
            canBegin={false}
            onAnimationStart={handleAnimationStart}
            animationManager={animationManager}
          >
            {child}
          </CSSTransitionAnimate>,
        );

        animationManager.assertQueue(null);

        expect(handleAnimationStart).not.toHaveBeenCalled();
        expect(child).toHaveBeenLastCalledWith({ opacity: '1' });
        expect(child).toHaveBeenCalledTimes(1);

        rerender(
          <CSSTransitionAnimate
            animationId="1"
            from="0.7"
            to="0.3"
            attributeName="opacity"
            duration={500}
            canBegin={false}
            onAnimationStart={handleAnimationStart}
            animationManager={animationManager}
          >
            {child}
          </CSSTransitionAnimate>,
        );

        // rerendering should not start the animation, this appears correct
        animationManager.assertQueue(null);

        // however, the child should be rerendered with the fresh "from" state so this looks like a bug
        expect(child).toHaveBeenLastCalledWith({ opacity: '1' });
        expect(child).toHaveBeenCalledTimes(2);
      });

      it('should start animation on rerender if canBegin changes from false to true', () => {
        const animationManager = new MockTickingAnimationManager();
        const child = vi.fn();

        const { rerender } = render(
          <CSSTransitionAnimate
            animationId="1"
            from="1"
            to="0"
            attributeName="opacity"
            duration={500}
            canBegin={false}
            onAnimationStart={handleAnimationStart}
            animationManager={animationManager}
          >
            {child}
          </CSSTransitionAnimate>,
        );

        animationManager.assertQueue(null);

        expect(handleAnimationStart).not.toHaveBeenCalled();
        expect(child).toHaveBeenLastCalledWith({ opacity: '1' });
        expect(child).toHaveBeenCalledTimes(1);

        rerender(
          <CSSTransitionAnimate
            animationId="1"
            from="0.7"
            to="0.3"
            attributeName="opacity"
            duration={500}
            canBegin
            onAnimationStart={handleAnimationStart}
            animationManager={animationManager}
          >
            {child}
          </CSSTransitionAnimate>,
        );

        // queue should be populated with the animation steps
        animationManager.assertQueue(['[function handleAnimationStart]', 0, '0.3', 500, '[function onAnimationEnd]']);

        expect(handleAnimationStart).toHaveBeenCalledTimes(0);
        /*
         * now the child should be rerendered with the fresh "from" state, using the latest "from" value - NOT the one from before when canBegin was false
         * buuuut it uses the old "from" value, which is a bug. I suppose we can live with it for now?
         */
        expect(child).toHaveBeenLastCalledWith({ opacity: '1', transition: 'opacity 500ms ease' });
        expect(child).toHaveBeenCalledTimes(2);
      });
    });
  });
});
