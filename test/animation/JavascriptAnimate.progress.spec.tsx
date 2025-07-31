import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MockProgressAnimationManager } from './MockProgressAnimationManager';

import { JavascriptAnimate } from '../../src/animation/JavascriptAnimate';

describe('JavascriptAnimate progress', () => {
  describe('when child is a function', () => {
    describe('with from, to as objects', () => {
      it('should call the function child with the current style', async () => {
        const animationManager = new MockProgressAnimationManager();
        const child = vi.fn();

        render(
          <JavascriptAnimate
            from={{ opacity: 1 }}
            to={{ opacity: 0 }}
            easing="linear"
            duration={500}
            animationManager={animationManager}
          >
            {child}
          </JavascriptAnimate>,
        );

        expect(child).toHaveBeenLastCalledWith({ opacity: 1 });
        expect(child).toHaveBeenCalledTimes(1);

        await animationManager.setAnimationProgress(0.3);

        expect(child).toHaveBeenCalledWith({ opacity: 0.7 });

        await animationManager.setAnimationProgress(0.7);

        expect(child).toHaveBeenLastCalledWith({ opacity: expect.closeTo(0.3, 5) });
        expect(child).toHaveBeenCalledTimes(4);
      });
    });

    describe('with from, to as numbers', () => {
      it('should call the function child with the current style (but it does not)', async () => {
        const animationManager = new MockProgressAnimationManager();
        const child = vi.fn();

        render(
          <JavascriptAnimate
            // @ts-expect-error TODO - fix the type error
            from={1}
            // @ts-expect-error TODO - fix the type error
            to={0}
            attributeName="opacity"
            easing="linear"
            duration={500}
            animationManager={animationManager}
          >
            {child}
          </JavascriptAnimate>,
        );

        expect(child).toHaveBeenLastCalledWith(1);
        expect(child).toHaveBeenCalledTimes(1);

        await animationManager.setAnimationProgress(0.5);

        // This appears to be a bug - when given numbers + function child, the tick object is empty
        expect(child).toHaveBeenLastCalledWith({});
        expect(child).toHaveBeenCalledTimes(3);
      });
    });

    describe('with from, to as strings', () => {
      it('should call the function child with the current style (but it does not)', async () => {
        const animationManager = new MockProgressAnimationManager();
        const child = vi.fn();

        render(
          <JavascriptAnimate
            // @ts-expect-error TODO - fix the type error
            from="1"
            // @ts-expect-error TODO - fix the type error
            to="0"
            attributeName="opacity"
            easing="linear"
            duration={500}
            animationManager={animationManager}
          >
            {child}
          </JavascriptAnimate>,
        );

        expect(child).toHaveBeenLastCalledWith('1');
        expect(child).toHaveBeenCalledTimes(1);

        await animationManager.setAnimationProgress(0.5);

        /*
         * This appears to be a bug - when given strings + function child,
         * the tick object is missing the attribute name
         * and the math appears to be concatenating the values instead of calculating.
         */
        expect(child).toHaveBeenLastCalledWith({ '0': '1-0.5' });
        expect(child).toHaveBeenCalledTimes(3);
      });
    });

    describe('when "to" changes in the middle of the animation', () => {
      it('should update the child with the new style and unfortunately it jumps in the middle', async () => {
        const animationManager = new MockProgressAnimationManager();
        const child = vi.fn();

        const { rerender } = render(
          <JavascriptAnimate
            from={{ opacity: 1 }}
            to={{ opacity: 0.3 }}
            easing="linear"
            duration={500}
            animationManager={animationManager}
          >
            {child}
          </JavascriptAnimate>,
        );

        expect(child).toHaveBeenLastCalledWith({ opacity: 1 });
        expect(child).toHaveBeenCalledTimes(1);

        await animationManager.setAnimationProgress(0.3);

        expect(child).toHaveBeenLastCalledWith({ opacity: 0.79 });

        // Change "to" in the middle of the animation
        rerender(
          <JavascriptAnimate
            from={{ opacity: 1 }}
            to={{ opacity: 0.5 }}
            easing="linear"
            duration={500}
            animationManager={animationManager}
          >
            {child}
          </JavascriptAnimate>,
        );

        // the animation now is at the exact same point as before the props change, and will start progressing from there
        expect(child).toHaveBeenLastCalledWith({ opacity: 0.79 });
        expect(child).toHaveBeenCalledTimes(4);

        await animationManager.setAnimationProgress(0.7);

        expect(child).toHaveBeenLastCalledWith({ opacity: expect.closeTo(0.65, 2) });
        expect(child).toHaveBeenCalledTimes(6);

        await animationManager.setAnimationProgress(1);

        expect(child).toHaveBeenLastCalledWith({ opacity: 0.5 });
        expect(child).toHaveBeenCalledTimes(7);
      });
    });
  });
});
