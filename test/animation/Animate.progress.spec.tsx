import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MockProgressAnimationManager } from './MockProgressAnimationManager';
import { Animate } from '../../src/animation/Animate';

describe('Animate progress', () => {
  describe('when child is a function', () => {
    describe('with from, to as objects', () => {
      it('should call the function child with the current style', async () => {
        const animationManager = new MockProgressAnimationManager();
        const child = vi.fn();

        render(
          <Animate
            from={{ opacity: 1 }}
            to={{ opacity: 0 }}
            easing="linear"
            duration={500}
            animationManager={animationManager}
          >
            {child}
          </Animate>,
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
          <Animate
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
          </Animate>,
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
          <Animate
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
          </Animate>,
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

    describe('with from, to as CSS transforms', () => {
      it('should call the function child with the current style (but it does not)', async () => {
        const animationManager = new MockProgressAnimationManager();
        const child = vi.fn();

        const transformOrigin = `100px 50px`;

        render(
          <Animate
            from={{ transform: 'scaleY(0)', transformOrigin }}
            to={{ transform: 'scaleY(1)', transformOrigin }}
            attributeName="transform"
            easing="linear"
            duration={500}
            animationManager={animationManager}
          >
            {child}
          </Animate>,
        );

        expect(child).toHaveBeenLastCalledWith({
          transform: 'scaleY(0)',
          transformOrigin: '100px 50px',
        });
        expect(child).toHaveBeenCalledTimes(1);

        await animationManager.setAnimationProgress(0.3);

        // More bugs. NaN instead of interpolated value.
        expect(child).toHaveBeenLastCalledWith({
          transform: 'scaleY(0)NaN',
          transformOrigin: '100px 50pxNaN',
        });

        await animationManager.setAnimationProgress(0.7);

        // More bugs. NaN instead of interpolated value.
        expect(child).toHaveBeenLastCalledWith({
          transform: 'scaleY(0)NaN',
          transformOrigin: '100px 50pxNaN',
        });
        expect(child).toHaveBeenCalledTimes(4);
      });

      it('should clone the child with the current style (but it does not)', async () => {
        const animationManager = new MockProgressAnimationManager();
        const transformOrigin = `100px 50px`;

        const { container } = render(
          <Animate
            from={{ transform: 'scaleY(0)', transformOrigin }}
            to={{ transform: 'scaleY(1)', transformOrigin }}
            attributeName="transform"
            easing="linear"
            duration={500}
            animationManager={animationManager}
          >
            <div className="test-child">Test</div>
          </Animate>,
        );

        const clonedChild = container.querySelector('.test-child');
        // this looks like another bug
        expect(clonedChild).toHaveStyle({ transform: '[object Object]' });
      });
    });

    describe('when "to" changes in the middle of the animation', () => {
      it('should update the child with the new style and unfortunately it jumps in the middle', async () => {
        const animationManager = new MockProgressAnimationManager();
        const child = vi.fn();

        const { rerender } = render(
          <Animate
            from={{ opacity: 1 }}
            to={{ opacity: 0.3 }}
            easing="linear"
            duration={500}
            animationManager={animationManager}
          >
            {child}
          </Animate>,
        );

        expect(child).toHaveBeenLastCalledWith({ opacity: 1 });
        expect(child).toHaveBeenCalledTimes(1);

        await animationManager.setAnimationProgress(0.3);

        expect(child).toHaveBeenLastCalledWith({ opacity: 0.79 });

        // Change "to" in the middle of the animation
        rerender(
          <Animate
            from={{ opacity: 1 }}
            to={{ opacity: 0.5 }}
            easing="linear"
            duration={500}
            animationManager={animationManager}
          >
            {child}
          </Animate>,
        );

        // the animation now suddenly jumps to the old "to" value, this is not great, we can do better
        expect(child).toHaveBeenLastCalledWith({ opacity: 0.3 });
        expect(child).toHaveBeenCalledTimes(5);

        await animationManager.setAnimationProgress(0.7);

        expect(child).toHaveBeenLastCalledWith({ opacity: expect.closeTo(0.44, 2) });
        expect(child).toHaveBeenCalledTimes(7);

        await animationManager.setAnimationProgress(1);

        expect(child).toHaveBeenLastCalledWith({ opacity: 0.5 });
        expect(child).toHaveBeenCalledTimes(8);
      });
    });
  });
});
