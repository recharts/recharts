import React, { useState } from 'react';
import { act, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { JavascriptAnimate } from '../../src/animation/JavascriptAnimate';
import { CompositeAnimationManager } from './CompositeAnimationManager';

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
      const animationManager = new CompositeAnimationManager();

      render(
        <JavascriptAnimate
          animationId="1"
          duration={500}
          onAnimationStart={handleAnimationStart}
          onAnimationEnd={handleAnimationEnd}
          animationManager={animationManager.factory}
        >
          {() => <div className="test-wrapper" />}
        </JavascriptAnimate>,
      );

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(handleAnimationEnd).not.toHaveBeenCalled();

      await animationManager.setAnimationProgress(0.5);

      expect(handleAnimationStart).toHaveBeenCalledTimes(1);
      expect(handleAnimationEnd).not.toHaveBeenCalled();

      await animationManager.completeAnimation();

      expect(handleAnimationStart).toHaveBeenCalledTimes(1);
      expect(handleAnimationEnd).toHaveBeenCalledTimes(1);
    });

    it('should not start animation if canBegin is false', async () => {
      const animationManager = new CompositeAnimationManager();

      render(
        <JavascriptAnimate
          animationId="1"
          duration={500}
          canBegin={false}
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager.factory}
        >
          {() => <div className="test-wrapper" />}
        </JavascriptAnimate>,
      );

      expect(animationManager.isAnimating()).toBe(false);

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(handleAnimationStart).not.toHaveBeenCalled();
    });

    it('should not start animation if isActive is false', async () => {
      const animationManager = new CompositeAnimationManager();

      render(
        <JavascriptAnimate
          animationId="1"
          duration={500}
          isActive={false}
          onAnimationStart={handleAnimationStart}
          onAnimationEnd={handleAnimationEnd}
          animationManager={animationManager.factory}
        >
          {() => <div className="test-wrapper" />}
        </JavascriptAnimate>,
      );

      expect(animationManager.isAnimating()).toBe(false);

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(handleAnimationEnd).not.toHaveBeenCalled();
    });

    it('should call children function with current time', async () => {
      const animationManager = new CompositeAnimationManager();
      const childFunction = vi.fn();

      render(
        <JavascriptAnimate animationId="1" duration={500} animationManager={animationManager.factory}>
          {childFunction}
        </JavascriptAnimate>,
      );

      expect(childFunction).toHaveBeenLastCalledWith(0);
      expect(childFunction).toHaveBeenCalledTimes(1);

      await animationManager.completeAnimation();

      expect(childFunction).toHaveBeenCalledTimes(2);
      expect(childFunction).toHaveBeenLastCalledWith(1);
    });
  });

  describe('queue when the child is a function', () => {
    it('should not start animation if canBegin is false, and render with time zero', () => {
      const animationManager = new CompositeAnimationManager();
      const child = vi.fn();

      render(
        <JavascriptAnimate
          animationId="1"
          duration={500}
          canBegin={false}
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager.factory}
        >
          {child}
        </JavascriptAnimate>,
      );

      expect(animationManager.isAnimating()).toBe(false);

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(child).toHaveBeenCalledWith(0);
      expect(child).toHaveBeenCalledTimes(1);
    });

    it('should go straight to final state when isActive is false', () => {
      const animationManager = new CompositeAnimationManager();
      const child = vi.fn();

      render(
        <JavascriptAnimate
          animationId="1"
          duration={500}
          isActive={false}
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager.factory}
        >
          {child}
        </JavascriptAnimate>,
      );

      expect(animationManager.isAnimating()).toBe(false);

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(child).toHaveBeenCalledWith(1);
      expect(child).toHaveBeenCalledTimes(1);
    });

    it('should restart animation when isActive changes to true', async () => {
      const animationManager = new CompositeAnimationManager();
      const child = vi.fn();

      const { rerender } = render(
        <JavascriptAnimate
          animationId="1"
          duration={500}
          isActive={false}
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager.factory}
        >
          {child}
        </JavascriptAnimate>,
      );

      expect(animationManager.isAnimating()).toBe(false);

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(child).toHaveBeenLastCalledWith(1);
      expect(child).toHaveBeenCalledTimes(1);

      // Now we change isActive to true
      rerender(
        <JavascriptAnimate
          animationId="1"
          duration={500}
          isActive
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager.factory}
        >
          {child}
        </JavascriptAnimate>,
      );

      expect(animationManager.isAnimating()).toBe(true);
      expect(child).toHaveBeenLastCalledWith(1);

      await animationManager.setAnimationProgress(0.1);

      expect(handleAnimationStart).toHaveBeenCalledTimes(1);
      /*
       * Now we're seeing new animation with new time ticking.
       * It is the responsibility of the child component to figure out reference to the latest animated state
       * and continue from there.
       */
      expect(child).toHaveBeenLastCalledWith(expect.closeTo(0.1, 1));
      expect(child).toHaveBeenCalledTimes(4);

      await animationManager.setAnimationProgress(0.2);
      expect(child).toHaveBeenLastCalledWith(expect.closeTo(0.29, 1));
      expect(child).toHaveBeenCalledTimes(5);

      await animationManager.setAnimationProgress(0.5);
      expect(child).toHaveBeenLastCalledWith(expect.closeTo(0.8, 1));
      expect(child).toHaveBeenCalledTimes(6);

      await animationManager.setAnimationProgress(0.9);
      expect(child).toHaveBeenLastCalledWith(expect.closeTo(0.99, 1));
      expect(child).toHaveBeenCalledTimes(7);

      await animationManager.setAnimationProgress(1);
      expect(child).toHaveBeenLastCalledWith(1);
      expect(child).toHaveBeenCalledTimes(8);
    });

    it('should restart animation when isActive changes to true via button click', async () => {
      const animationManager = new CompositeAnimationManager();
      const child = vi.fn();
      const MyTestComponent = () => {
        const [isActive, setIsActive] = useState(false);
        return (
          <>
            <JavascriptAnimate
              animationId="1"
              duration={500}
              isActive={isActive}
              onAnimationStart={handleAnimationStart}
              animationManager={animationManager.factory}
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

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(child).toHaveBeenLastCalledWith(1);
      expect(child).toHaveBeenCalledTimes(1);
      expect(animationManager.isAnimating()).toBe(false);

      const button = getByText('Start Animation');
      act(() => {
        button.click();
      });

      expect(animationManager.isAnimating()).toBe(true);

      await animationManager.setAnimationProgress(1);

      expect(handleAnimationStart).toHaveBeenCalledTimes(1);
      expect(child).toHaveBeenLastCalledWith(1);
      expect(child).toHaveBeenCalledTimes(5);
    });

    it('should rerender with the final state when isActive is false', () => {
      const animationManager = new CompositeAnimationManager();
      const child = vi.fn();

      const { rerender } = render(
        <JavascriptAnimate
          animationId="1"
          duration={500}
          isActive={false}
          onAnimationStart={handleAnimationStart}
          onAnimationEnd={handleAnimationEnd}
          animationManager={animationManager.factory}
        >
          {child}
        </JavascriptAnimate>,
      );

      expect(animationManager.isAnimating()).toBe(false);

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(handleAnimationEnd).not.toHaveBeenCalled();
      expect(child).toHaveBeenLastCalledWith(1);
      expect(child).toHaveBeenCalledTimes(1);

      rerender(
        <JavascriptAnimate
          animationId="1"
          duration={500}
          isActive={false}
          onAnimationStart={handleAnimationStart}
          onAnimationEnd={handleAnimationEnd}
          animationManager={animationManager.factory}
        >
          {child}
        </JavascriptAnimate>,
      );

      expect(child).toHaveBeenLastCalledWith(1);
      expect(child).toHaveBeenCalledTimes(3);
      expect(animationManager.isAnimating()).toBe(false);
      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(handleAnimationEnd).not.toHaveBeenCalled();
    });

    it('should not start animation on rerender if canBegin is false', () => {
      const animationManager = new CompositeAnimationManager();
      const child = vi.fn();

      const { rerender } = render(
        <JavascriptAnimate
          animationId="1"
          duration={500}
          canBegin={false}
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager.factory}
        >
          {child}
        </JavascriptAnimate>,
      );

      expect(animationManager.isAnimating()).toBe(false);

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(child).toHaveBeenLastCalledWith(0);
      expect(child).toHaveBeenCalledTimes(1);

      rerender(
        <JavascriptAnimate
          animationId="1"
          duration={500}
          canBegin={false}
          onAnimationStart={handleAnimationStart}
          animationManager={animationManager.factory}
        >
          {child}
        </JavascriptAnimate>,
      );

      // rerendering should not start the animation, this appears correct
      expect(animationManager.isAnimating()).toBe(false);

      // however, the child should be rerendered with the fresh starting state so this looks like a bug
      expect(child).toHaveBeenLastCalledWith(0);
      expect(child).toHaveBeenCalledTimes(2);
    });
  });
});
